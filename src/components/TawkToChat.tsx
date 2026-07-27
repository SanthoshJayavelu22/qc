"use client";

import { useEffect, useState } from "react";
import { MessageSquareText, X, Send, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TawkToChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ sender: "bot" | "user"; text: string; time: string }>>([
    {
      sender: "bot",
      text: "Hello! Welcome to Quality Conveyancing. How can we help you with your property transaction today?",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = {
      sender: "user" as const,
      text: input,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Automated legal assistant response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Thank you for your message! Our conveyancing legal team has been notified. You can also reach our Business Development Manager directly on 07843 476594 or landline 020 3763 6767 for instant assistance.",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    }, 800);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden font-sans"
          >
            {/* Header */}
            <div className="bg-legalDark text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-tealAccent/20 flex items-center justify-center text-tealAccent font-bold">
                    QC
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-legalDark" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm">Quality Conveyancing</h4>
                  <p className="text-[11px] text-tealAccent">Online Legal Support</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-white/10 text-white/80 transition-colors"
                aria-label="Close Chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Message Area */}
            <div className="p-4 h-72 overflow-y-auto space-y-3 bg-warmGray/20 text-xs">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl ${
                      msg.sender === "user"
                        ? "bg-legalDark text-white rounded-br-none"
                        : "bg-white text-legalDark border border-gray-200 shadow-sm rounded-bl-none"
                    }`}
                  >
                    <p className="leading-relaxed">{msg.text}</p>
                  </div>
                  <span className="text-[10px] text-textMuted mt-1 px-1">{msg.time}</span>
                </div>
              ))}
            </div>

            {/* Input Bar */}
            <form onSubmit={handleSend} className="p-3 border-t border-gray-100 bg-white flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your query..."
                className="flex-1 px-3.5 py-2 bg-warmGray/40 border border-gray-200 rounded-xl text-xs text-legalDark focus:outline-none focus:border-tealAccent"
              />
              <button
                type="submit"
                className="p-2 bg-tealAccent text-legalDark rounded-xl hover:bg-teal-400 transition-colors shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Chat Trigger Button */}
      <button
        id="live-chat-toggle-btn"
        onClick={() => setIsOpen((prev) => !prev)}
        className="hidden"
        aria-label="Toggle Live Chat"
      />
    </>
  );
}
