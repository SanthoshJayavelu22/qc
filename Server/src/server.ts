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

// CORS setup
const allowedOrigins = [
  process.env.CLIENT_ORIGIN || "http://localhost:3000",
  "http://localhost:3001",
  "http://127.0.0.1:3000",
  "http://127.0.0.1:3001",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(null, true);
    },
    credentials: true,
  })
);

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
