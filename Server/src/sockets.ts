import { Server as SocketIOServer, Socket } from "socket.io";
import { ChatSession } from "./models/ChatSession";
import { AdminUser } from "./models/AdminUser";
import { sendAdminLiveChatAlert } from "./services/emailService";

interface JoinPayload {
  sessionId: string;
  role: "client" | "admin";
  clientName?: string;
  clientEmail?: string;
  clientPhone?: string;
  adminId?: string;
  adminName?: string;
  adminRole?: string;
}

interface MessagePayload {
  sessionId: string;
  sender: "client" | "admin";
  senderName: string;
  text: string;
  adminId?: string;
}

export const setupSocketServer = (io: SocketIOServer) => {
  io.on("connection", (socket: Socket) => {
    console.log(`[Socket] New connection: ${socket.id}`);

    // Join room corresponding to sessionId or admin dashboard room
    socket.on("join_room", async (data: JoinPayload) => {
      const { sessionId, role, clientName, clientEmail, clientPhone, adminId, adminName, adminRole } = data;
      if (!sessionId) return;

      socket.join(sessionId);
      console.log(`[Socket] ${socket.id} (${role}) joined session: ${sessionId}`);

      if (role === "admin") {
        socket.join("admins_channel");
      }

      // If client joined, check or create session in MongoDB
      if (role === "client") {
        try {
          let session = await ChatSession.findOne({ sessionId });
          if (!session) {
            session = await ChatSession.create({
              sessionId,
              clientName: clientName || "Guest Visitor",
              clientEmail: clientEmail || "",
              clientPhone: clientPhone || "",
              status: "waiting",
              messages: [],
              lastMessageText: "",
              lastMessageAt: new Date(),
              emailNotificationSent: false,
            });
            // Notify admins that a new chat session appeared
            io.to("admins_channel").emit("new_session_created", session);
          } else {
            // Update client contact info if provided later
            if (clientName && session.clientName === "Guest Visitor") {
              session.clientName = clientName;
            }
            if (clientEmail) session.clientEmail = clientEmail;
            if (clientPhone) session.clientPhone = clientPhone;
            await session.save();
          }
          socket.emit("session_history", session);
        } catch (err) {
          console.error("[Socket] Error finding/creating session:", err);
        }
      } else {
        // If admin joined, fetch and send this specific session
        try {
          const session = await ChatSession.findOne({ sessionId });
          if (session) {
            socket.emit("session_history", session);
          }
        } catch (err) {
          console.error("[Socket] Error fetching session for admin:", err);
        }
      }
    });

    // EXCLUSIVE CHAT LOCK: When an admin opens a chat to reply, lock it so others cannot access/reply
    socket.on("claim_chat_lock", async (data: { sessionId: string; adminId: string; adminName: string; adminRole: string }) => {
      const { sessionId, adminId, adminName, adminRole } = data;
      if (!sessionId || !adminId) return;

      try {
        const session = await ChatSession.findOne({ sessionId });
        if (!session) return;

        // If not already locked, or locked by the same admin, assign lock
        if (!session.lockedBy || session.lockedBy === adminId) {
          session.lockedBy = adminId;
          session.lockedByName = adminName;
          session.lockedByRole = adminRole;
          session.lockedAt = new Date();
          await session.save();

          // Broadcast lock update to all admins
          io.to("admins_channel").emit("chat_lock_updated", {
            sessionId,
            lockedBy: adminId,
            lockedByName: adminName,
            lockedByRole: adminRole,
            lockedAt: session.lockedAt,
          });

          // Confirm to this admin socket
          socket.emit("lock_granted", { sessionId, isOwner: true });
        } else {
          // Already locked by someone else
          socket.emit("lock_denied", {
            sessionId,
            isOwner: false,
            lockedByName: session.lockedByName,
            lockedByRole: session.lockedByRole,
          });
        }
      } catch (err) {
        console.error("[Socket] Error claiming chat lock:", err);
      }
    });

    // RELEASE CHAT LOCK: When admin switches away or finishes session
    socket.on("release_chat_lock", async (data: { sessionId: string; adminId: string; force?: boolean }) => {
      const { sessionId, adminId, force } = data;
      if (!sessionId) return;

      try {
        const session = await ChatSession.findOne({ sessionId });
        if (!session) return;

        // Only owner or super admin force release
        if (session.lockedBy === adminId || force) {
          session.lockedBy = undefined;
          session.lockedByName = undefined;
          session.lockedByRole = undefined;
          session.lockedAt = undefined;
          await session.save();

          io.to("admins_channel").emit("chat_lock_updated", {
            sessionId,
            lockedBy: null,
            lockedByName: null,
            lockedByRole: null,
          });
        }
      } catch (err) {
        console.error("[Socket] Error releasing chat lock:", err);
      }
    });

    // Send a message (from either Client or Admin)
    socket.on("send_message", async (data: MessagePayload) => {
      const { sessionId, sender, senderName, text, adminId } = data;
      if (!sessionId || !text?.trim()) return;

      try {
        const session = await ChatSession.findOne({ sessionId });
        if (!session) return;

        // If admin is sending, verify lock ownership
        if (sender === "admin" && adminId && session.lockedBy && session.lockedBy !== adminId) {
          socket.emit("send_message_rejected", {
            error: `This conversation is currently being handled by ${session.lockedByName || "another solicitor"}.`,
          });
          return;
        }

        const messageObj = {
          sender,
          senderName: senderName || (sender === "admin" ? "QC Legal Advisor" : "Visitor"),
          text: text.trim(),
          timestamp: new Date(),
        };

        session.messages.push(messageObj);
        session.lastMessageText = text.trim();
        session.lastMessageAt = new Date();
        session.status = "active";

        if (sender === "client") {
          session.unreadCountForAdmin += 1;

          // ALERT EMAIL DISPATCH: Send email notification to all active admin staff on initial customer inquiry
          if (!session.emailNotificationSent) {
            session.emailNotificationSent = true;

            // Fetch all active staff email addresses
            try {
              const activeAdmins = await AdminUser.find({ isActive: true }).select("email");
              const adminEmails = activeAdmins.map((a) => a.email).filter(Boolean);

              if (adminEmails.length > 0) {
                sendAdminLiveChatAlert({
                  adminEmails,
                  clientName: session.clientName || "Visitor",
                  clientEmail: session.clientEmail,
                  clientPhone: session.clientPhone,
                  firstMessage: text.trim(),
                  sessionId,
                }).catch((e) => console.error("[Socket] Background admin email alert error:", e));
              }
            } catch (err) {
              console.error("[Socket] Error finding admin emails for live chat alert:", err);
            }
          }
        } else {
          session.unreadCountForClient += 1;
        }

        await session.save();

        // Broadcast to everyone in this session's room (client and participating admins)
        io.to(sessionId).emit("receive_message", {
          sessionId,
          message: messageObj,
        });

        // Also notify all admins of session list update
        io.to("admins_channel").emit("session_updated", session);
      } catch (err) {
        console.error("[Socket] Error saving/broadcasting message:", err);
      }
    });

    // Client or Admin typing indicators
    socket.on("typing", (data: { sessionId: string; sender: string; isTyping: boolean }) => {
      socket.to(data.sessionId).emit("user_typing", data);
    });

    socket.on("disconnect", () => {
      console.log(`[Socket] Disconnected: ${socket.id}`);
    });
  });
};
