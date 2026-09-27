import { Router } from "express";
import {
  getChatSessions,
  getChatSession,
  markSessionAsRead,
  deleteChatSession,
} from "../controllers/chatController";

const router = Router();

router.get("/sessions", getChatSessions);
router.get("/sessions/:sessionId", getChatSession);
router.patch("/sessions/:sessionId/read", markSessionAsRead);
router.delete("/sessions/:sessionId", deleteChatSession);

export default router;
