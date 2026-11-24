import express from "express";
import http from "http";
import { Server as SocketIOServer } from "socket.io";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db";
import blogRoutes from "./routes/blogRoutes";
import chatRoutes from "./routes/chatRoutes";
import authRoutes from "./routes/authRoutes";
import inquiryRoutes from "./routes/inquiryRoutes";
import { setupSocketServer } from "./sockets";

dotenv.config();

const app = express();
const server = http.createServer(app);

// Connect to MongoDB
connectDB();

// CORS setup - Allow domain, VPS IP, localhost, and preflight options
const allowedOrigins = [
  "https://qconveyancing.com",
  "http://qconveyancing.com",
  "https://www.qconveyancing.com",
  "http://www.qconveyancing.com",
  "http://45.8.225.24:3000",
  "http://45.8.225.24:5001",
  "http://31.97.59.85:3000",
  "http://localhost:3000",
  "http://localhost:3001",
  "http://127.0.0.1:3000",
  "http://127.0.0.1:3001",
];

if (process.env.CLIENT_ORIGIN && !allowedOrigins.includes(process.env.CLIENT_ORIGIN)) {
  allowedOrigins.push(process.env.CLIENT_ORIGIN);
}

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (mobile apps, curl, server-to-server) or matching origins
      if (!origin || allowedOrigins.includes(origin) || origin.includes("qconveyancing.com") || origin.includes("45.8.225.24")) {
        return callback(null, true);
      }
      return callback(null, true); // Fallback allow to avoid blocking production admin
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With", "Accept"],
  })
);

app.options("*", cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static directory for uploaded blog media
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// Socket.io initialization
const io = new SocketIOServer(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE"],
  },
});

setupSocketServer(io);

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/inquiries", inquiryRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/chat", chatRoutes);

// Health check endpoint
app.get("/health", (_req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`[QC Server] Backend & Socket.io server running on http://localhost:${PORT}`);
});
