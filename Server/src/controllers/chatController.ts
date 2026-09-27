import { Request, Response } from "express";
import { ChatSession } from "../models/ChatSession";

// Get all chat sessions (sorted by recent message)
export const getChatSessions = async (req: Request, res: Response) => {
  try {
    const sessions = await ChatSession.find().sort({ lastMessageAt: -1, updatedAt: -1 });
    res.json({ success: true, count: sessions.length, sessions });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get single chat session with full message log
export const getChatSession = async (req: Request, res: Response) => {
  try {
    const { sessionId } = req.params;
    const session = await ChatSession.findOne({ sessionId });
    if (!session) {
      return res.status(404).json({ success: false, error: "Chat session not found" });
    }
    res.json({ success: true, session });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Mark admin unread count as read
export const markSessionAsRead = async (req: Request, res: Response) => {
  try {
    const { sessionId } = req.params;
    const session = await ChatSession.findOneAndUpdate(
      { sessionId },
      { unreadCountForAdmin: 0 },
      { new: true }
    );
    res.json({ success: true, session });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete or close chat session
export const deleteChatSession = async (req: Request, res: Response) => {
  try {
    const { sessionId } = req.params;
    await ChatSession.findOneAndDelete({ sessionId });
    res.json({ success: true, message: "Chat session deleted" });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};
