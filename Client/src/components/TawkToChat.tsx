"use client";

import { useEffect, useState } from "react";
import { MessageSquareText, X, Send, User, CheckCircle2, Phone, Mail, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TawkToChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitError(null);

    try {
      const response = await fetch("https://formsubmit.co/ajax/santhoshjayavelu57@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          _subject: `New Live Chat Lead: ${formData.name}`,
          _template: "table",
          "Full Name": formData.name,
          "Email Address": formData.email,
          "Phone Number": formData.phone,
          "Query / Message": formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setSubmitError("Failed to transmit chat enquiry. Please call us on 020 3763 6767.");
      }
    } catch (err) {
      console.error("Live chat submission error:", err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
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
                  <p className="text-[11px] text-tealAccent">Live Legal Enquiry</p>
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

            {/* Chat Body */}
            <div className="p-5 max-h-[420px] overflow-y-auto bg-warmGray/20 text-xs">
              {submitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-700">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif font-bold text-base text-legalDark">Enquiry Transmitted!</h4>
                  <p className="text-legalDark/80 text-xs leading-relaxed">
                    Thank you <strong className="text-legalDark">{formData.name}</strong>! Your live enquiry has been sent to our conveyancing solicitors. We will contact you at <strong className="text-legalDark">{formData.phone || formData.email}</strong> shortly.
                  </p>
                  <p className="text-[11px] text-textMuted pt-2">
                    Urgent? Call our manager directly on <a href="tel:07843476594" className="font-bold text-legalDark underline">07843 476594</a>.
                  </p>
                  <button
                    onClick={resetForm}
                    className="mt-3 text-xs text-tealAccent font-bold hover:underline"
                  >
                    Send another query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="p-3 bg-tealAccent/15 border border-tealAccent/30 rounded-xl text-[11px] text-legalDark leading-relaxed">
                    👋 Welcome! Leave your message and contact details below. Our conveyancing team will receive it instantly via email and respond.
                  </div>

                  {submitError && (
                    <div className="p-2.5 bg-red-50 text-red-700 text-[11px] rounded-lg">
                      {submitError}
                    </div>
                  )}

                  <div>
                    <label className="block text-[10px] font-bold text-legalDark uppercase tracking-wider mb-1">
                      YOUR NAME*
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Sarah Smith"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-300 rounded-xl px-3 py-2 text-xs text-legalDark focus:outline-none focus:border-legalDark"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] font-bold text-legalDark uppercase tracking-wider mb-1">
                        EMAIL*
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="sarah@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white border border-gray-300 rounded-xl px-3 py-2 text-xs text-legalDark focus:outline-none focus:border-legalDark"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-legalDark uppercase tracking-wider mb-1">
                        PHONE*
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="07843 476594"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white border border-gray-300 rounded-xl px-3 py-2 text-xs text-legalDark focus:outline-none focus:border-legalDark"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-legalDark uppercase tracking-wider mb-1">
                      YOUR QUERY / MESSAGE*
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      required
                      placeholder="How can we help with your property transaction?"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-300 rounded-xl px-3 py-2 text-xs text-legalDark focus:outline-none focus:border-legalDark resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-legalDark hover:bg-legalNavy text-white font-bold text-xs uppercase tracking-wider py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 text-tealAccent" />
                        <span>Send Message To Team</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
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
