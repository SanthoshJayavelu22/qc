"use client";

import React, { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { MessageSquare, X, Send, User, ShieldCheck, Minimize2, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getSocket } from "@/lib/socket";
import { ChatMessage } from "@/lib/api";

export default function LiveChatWidget() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTypingAdmin, setIsTypingAdmin] = useState(false);
  const [unreadBadge, setUnreadBadge] = useState(0);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const FIFTEEN_DAYS_MS = 15 * 24 * 60 * 60 * 1000;

  // Initialize or fetch session ID & history from localStorage (Valid for 15 days)
  useEffect(() => {
    const now = Date.now();
    const storedTimestamp = localStorage.getItem("qc_chat_expiry_timestamp");

    // Check if 15 days have passed since first or last conversation
    if (storedTimestamp) {
      const expirationDate = parseInt(storedTimestamp, 10);
      if (now > expirationDate) {
        // Expired after 15 days: clear old chat history & reset session
        localStorage.removeItem("qc_chat_session_id");
        localStorage.removeItem("qc_chat_history");
        localStorage.removeItem("qc_chat_expiry_timestamp");
      }
    }

    let sid = localStorage.getItem("qc_chat_session_id");
    if (!sid) {
      sid = "session_" + Math.random().toString(36).substring(2, 11) + "_" + Date.now();
      localStorage.setItem("qc_chat_session_id", sid);
      localStorage.setItem("qc_chat_expiry_timestamp", (now + FIFTEEN_DAYS_MS).toString());
    }
    setSessionId(sid);

    const savedName = localStorage.getItem("qc_chat_name") || "";
    const savedEmail = localStorage.getItem("qc_chat_email") || "";
    const savedPhone = localStorage.getItem("qc_chat_phone") || "";

    if (savedName) setClientName(savedName);
    if (savedEmail) setClientEmail(savedEmail);
    if (savedPhone) setClientPhone(savedPhone);

    // Pre-populate messages from localStorage immediately so customer sees them instantly
    const savedMessagesRaw = localStorage.getItem("qc_chat_history");
    if (savedMessagesRaw) {
      try {
        const parsed = JSON.parse(savedMessagesRaw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
          setHasStarted(true);
        }
      } catch (e) {
        console.error("Error reading saved chat history:", e);
      }
    }

    if (savedName) {
      setHasStarted(true);
    }
  }, []);

  // Helper to persist messages & refresh 15 days expiry
  const persistMessages = (updatedMessages: ChatMessage[]) => {
    try {
      localStorage.setItem("qc_chat_history", JSON.stringify(updatedMessages));
      localStorage.setItem(
        "qc_chat_expiry_timestamp",
        (Date.now() + FIFTEEN_DAYS_MS).toString()
      );
    } catch (e) {
      console.error("Error saving chat history to localStorage:", e);
    }
  };

  // Connect socket and listen to room events
  useEffect(() => {
    if (!sessionId) return;

    const socket = getSocket();

    // If client has already registered info, join room immediately
    if (hasStarted) {
      socket.emit("join_room", {
        sessionId,
        role: "client",
        clientName: clientName || "Visitor",
        clientEmail,
        clientPhone,
      });
    }

    const handleHistory = (session: any) => {
      if (session && session.messages && session.messages.length > 0) {
        setMessages(session.messages);
        persistMessages(session.messages);
      }
    };

    const handleReceiveMessage = (data: { sessionId: string; message: ChatMessage }) => {
      if (data.sessionId === sessionId) {
        setMessages((prev) => {
          const updated = [...prev, data.message];
          persistMessages(updated);
          return updated;
        });

        if (!isOpen && data.message.sender === "admin") {
          setUnreadBadge((prev) => prev + 1);
        }
      }
    };

    const handleTyping = (data: { sender: string; isTyping: boolean }) => {
      if (data.sender === "admin") {
        setIsTypingAdmin(data.isTyping);
      }
    };

    socket.on("session_history", handleHistory);
    socket.on("receive_message", handleReceiveMessage);
    socket.on("user_typing", handleTyping);

    return () => {
      socket.off("session_history", handleHistory);
      socket.off("receive_message", handleReceiveMessage);
      socket.off("user_typing", handleTyping);
    };
  }, [sessionId, hasStarted, isOpen, clientName, clientEmail, clientPhone]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTypingAdmin]);

  const handleStartChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim()) return;

    localStorage.setItem("qc_chat_name", clientName);
    localStorage.setItem("qc_chat_email", clientEmail);
    localStorage.setItem("qc_chat_phone", clientPhone);
    localStorage.setItem(
      "qc_chat_expiry_timestamp",
      (Date.now() + FIFTEEN_DAYS_MS).toString()
    );

    const socket = getSocket();
    socket.emit("join_room", {
      sessionId,
      role: "client",
      clientName,
      clientEmail,
      clientPhone,
    });

    setHasStarted(true);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const socket = getSocket();
    socket.emit("send_message", {
      sessionId,
      sender: "client",
      senderName: clientName || "Visitor",
      text: inputMessage,
    });

    socket.emit("typing", {
      sessionId,
      sender: "client",
      isTyping: false,
    });

    setInputMessage("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value);
    const socket = getSocket();

    socket.emit("typing", {
      sessionId,
      sender: "client",
      isTyping: true,
    });

    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    typingTimeoutRef.current = setTimeout(() => {
      socket.emit("typing", {
        sessionId,
        sender: "client",
        isTyping: false,
      });
    }, 1500);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setUnreadBadge(0);
    }
  };

  // Do not render the customer chatbot widget on any admin pages
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="w-[360px] sm:w-[400px] h-[540px] max-h-[85vh] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#121c2b] text-white p-4 flex items-center justify-between shadow-md">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-[#1b75bb] flex items-center justify-center font-bold text-lg text-white">
                    QC
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#121c2b] rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm leading-tight flex items-center gap-1.5">
                    Live Legal Support
                    <ShieldCheck className="w-4 h-4 text-emerald-400 inline" />
                  </h3>
                  <p className="text-xs text-gray-300">Conveyancing Specialists Online</p>
                </div>
              </div>
              <button
                onClick={toggleOpen}
                className="text-gray-400 hover:text-white transition p-1 rounded-lg hover:bg-white/10"
                aria-label="Close chat"
              >
                <Minimize2 className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            {!hasStarted ? (
              <div className="p-6 flex-1 flex flex-col justify-center bg-gray-50/50">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 text-[#1b75bb] rounded-full flex items-center justify-center mx-auto mb-3">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Speak With Our Conveyancers</h4>
                  <p className="text-xs text-gray-600 mt-1 max-w-xs mx-auto">
                    Get instant legal answers about your property sale, purchase, or remortgage.
                  </p>
                </div>

                <form onSubmit={handleStartChat} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder="e.g. John Doe"
                      className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1b75bb] bg-white text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="e.g. john@example.com"
                      className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1b75bb] bg-white text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Contact Phone (Optional)</label>
                    <input
                      type="tel"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="e.g. 07123 456789"
                      className="w-full text-sm px-3.5 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1b75bb] bg-white text-gray-900"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full mt-2 bg-[#1b75bb] hover:bg-[#155d96] text-white py-2.5 rounded-lg font-medium text-sm transition shadow-sm"
                  >
                    Start Chat Now
                  </button>
                </form>
              </div>
            ) : (
              <div className="flex-1 flex flex-col justify-between overflow-hidden bg-slate-50">
                {/* Messages List */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                  {messages.length === 0 ? (
                    <div className="text-center py-10 px-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 text-[#1b75bb] flex items-center justify-center mx-auto mb-2">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <p className="text-sm font-semibold text-gray-800">Hello {clientName}!</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Our legal conveyancing team is ready. Type your question below to begin!
                      </p>
                    </div>
                  ) : (
                    messages.map((msg, index) => {
                      const isClient = msg.sender === "client";
                      return (
                        <div
                          key={index}
                          className={`flex flex-col ${isClient ? "items-end" : "items-start"}`}
                        >
                          <span className="text-[10px] text-gray-500 mb-1 px-1">
                            {msg.senderName} •{" "}
                            {new Date(msg.timestamp).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                          <div
                            className={`max-w-[82%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                              isClient
                                ? "bg-[#1b75bb] text-white rounded-br-none shadow-sm"
                                : "bg-white text-gray-900 border border-gray-200 rounded-bl-none shadow-sm"
                            }`}
                          >
                            {msg.text}
                          </div>
                        </div>
                      );
                    })
                  )}

                  {isTypingAdmin && (
                    <div className="flex items-center space-x-1.5 text-gray-500 text-xs py-1 px-2 italic">
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:0.2s]"></div>
                      <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce [animation-delay:0.4s]"></div>
                      <span>QC Legal Advisor is typing...</span>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Bar */}
                <form
                  onSubmit={handleSendMessage}
                  className="p-3 bg-white border-t border-gray-200 flex items-center gap-2"
                >
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={handleInputChange}
                    placeholder="Type your message..."
                    className="flex-1 px-3.5 py-2.5 text-sm rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1b75bb] bg-gray-50 text-gray-900"
                  />
                  <button
                    type="submit"
                    disabled={!inputMessage.trim()}
                    className="w-10 h-10 rounded-full bg-[#1b75bb] hover:bg-[#155d96] disabled:opacity-40 disabled:hover:bg-[#1b75bb] text-white flex items-center justify-center transition shadow-sm flex-shrink-0"
                    aria-label="Send message"
                  >
                    <Send className="w-4 h-4 ml-0.5" />
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <button
        onClick={toggleOpen}
        className="relative group bg-[#1b75bb] hover:bg-[#155d96] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
        aria-label="Open live chat"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        {unreadBadge > 0 && !isOpen && (
          <span className="absolute -top-1 -right-1 bg-rose-500 text-white font-bold text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse border-2 border-white">
            {unreadBadge}
          </span>
        )}
      </button>
    </div>
  );
}
