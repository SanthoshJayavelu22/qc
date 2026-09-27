import mongoose, { Document, Schema } from "mongoose";

export interface IMessage {
  sender: "client" | "admin";
  senderName: string;
  text: string;
  timestamp: Date;
}

export interface IChatSession extends Document {
  sessionId: string; // Unique visitor/client session ID (UUID or generated)
  clientName: string;
  clientEmail?: string;
  clientPhone?: string;
  status: "active" | "closed" | "waiting";
  messages: IMessage[];
  lastMessageText: string;
  lastMessageAt: Date;
  unreadCountForAdmin: number;
  unreadCountForClient: number;
  lockedBy?: string; // Admin User ID who has exclusive reply lock
  lockedByName?: string; // Admin Name who opened the chat
  lockedByRole?: string; // Admin Role
  lockedAt?: Date; // Timestamp when locked
  emailNotificationSent?: boolean; // Prevents sending duplicate email alerts for same session
  createdAt: Date;
  updatedAt: Date;
}

const MessageSchema = new Schema<IMessage>(
  {
    sender: { type: String, enum: ["client", "admin"], required: true },
    senderName: { type: String, required: true },
    text: { type: String, required: true },
    timestamp: { type: Date, default: Date.now },
  },
  { _id: false }
);

const ChatSessionSchema = new Schema<IChatSession>(
  {
    sessionId: { type: String, required: true, unique: true, index: true },
    clientName: { type: String, default: "Guest Visitor" },
    clientEmail: { type: String, default: "" },
    clientPhone: { type: String, default: "" },
    status: { type: String, enum: ["active", "closed", "waiting"], default: "waiting" },
    messages: [MessageSchema],
    lastMessageText: { type: String, default: "" },
    lastMessageAt: { type: Date, default: Date.now },
    unreadCountForAdmin: { type: Number, default: 0 },
    unreadCountForClient: { type: Number, default: 0 },
    lockedBy: { type: String, default: null },
    lockedByName: { type: String, default: null },
    lockedByRole: { type: String, default: null },
    lockedAt: { type: Date, default: null },
    emailNotificationSent: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const ChatSession = mongoose.model<IChatSession>("ChatSession", ChatSessionSchema);
