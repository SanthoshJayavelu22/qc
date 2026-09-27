"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function SpeakToTeam() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    location: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://formsubmit.co/ajax/santhoshjayavelu57@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          _subject: `New Speak To Our Team Inquiry: ${formData.firstName} ${formData.lastName}`,
          _template: "table",
          "First Name": formData.firstName,
          "Last Name": formData.lastName,
          "Email": formData.email,
          "Location / Postcode": formData.location,
          "Phone": formData.phone,
          "Message": formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError("Failed to send message. Please call us directly on 020 3763 6767.");
      }
    } catch (err) {
      console.error("Speak to team submit error:", err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-6 lg:px-12 bg-[#f4f6f8] text-legalDark">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-legalDark mb-3">
            Speak to our team
          </h2>
          <p className="text-legalDark/70 text-sm md:text-base max-w-2xl mx-auto">
            Call our team on <a href="tel:02037636767" className="text-tealAccent font-bold hover:underline">020 3763 6767</a> or fill out the form below and we will get back to you as soon as possible.
          </p>
        </div>

        {/* Main Grid: Form Left (White), Info Right (Dark Navy / White Split) */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side Form Column (Light Grey / White Inputs) */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl shadow-md border border-gray-200/80">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-700">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-legalDark mb-2">Thank You</h3>
                <p className="text-legalDark/80 text-sm max-w-md mx-auto">
                  Your enquiry has been submitted successfully. A member of our team will contact you shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 bg-red-50 text-red-700 text-xs rounded-lg flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {/* First Name & Last Name */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-legalDark uppercase tracking-wider mb-1">
                      FIRST NAME*
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-[#f8fafc] border border-gray-300 rounded-lg px-4 py-3 text-sm text-legalDark focus:outline-none focus:bg-white focus:border-legalDark transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-legalDark uppercase tracking-wider mb-1">
                      LAST NAME*
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      placeholder="Smith"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-[#f8fafc] border border-gray-300 rounded-lg px-4 py-3 text-sm text-legalDark focus:outline-none focus:bg-white focus:border-legalDark transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[11px] font-bold text-legalDark uppercase tracking-wider mb-1">
                    EMAIL*
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="jsmith@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#f8fafc] border border-gray-300 rounded-lg px-4 py-3 text-sm text-legalDark focus:outline-none focus:bg-white focus:border-legalDark transition-all"
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="block text-[11px] font-bold text-legalDark uppercase tracking-wider mb-1">
                    LOCATION / POSTCODE*
                  </label>
                  <input
                    type="text"
                    name="location"
                    required
                    placeholder="Ealing, London W5"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full bg-[#f8fafc] border border-gray-300 rounded-lg px-4 py-3 text-sm text-legalDark focus:outline-none focus:bg-white focus:border-legalDark transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[11px] font-bold text-legalDark uppercase tracking-wider mb-1">
                    PHONE*
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="020 3763 6767"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#f8fafc] border border-gray-300 rounded-lg px-4 py-3 text-sm text-legalDark focus:outline-none focus:bg-white focus:border-legalDark transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] font-bold text-legalDark uppercase tracking-wider mb-1">
                    YOUR MESSAGE
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="A brief explanation of your property transaction or question..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#f8fafc] border border-gray-300 rounded-lg px-4 py-3 text-sm text-legalDark focus:outline-none focus:bg-white focus:border-legalDark transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-legalDark hover:bg-legalNavy text-white font-bold text-xs uppercase tracking-widest py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-tealAccent" />
                      <span>Submit Enquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Side Info Box Split (Dark Navy Top, White Bottom) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl overflow-hidden shadow-md border border-gray-200/80">
            
            {/* Top Dark Navy Card */}
            <div className="bg-legalDark p-7 text-white flex-1 flex flex-col justify-center">
              <div className="space-y-6">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-white/10 rounded-xl border border-white/10 shrink-0">
                    <Phone className="w-5 h-5 text-tealAccent" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-white mb-1.5">Contact Details</h4>
                    <div className="space-y-1 text-xs text-white/85 leading-relaxed">
                      <p><strong className="text-white font-semibold">General Direct:</strong> 020 3763 6767</p>
                      <p><strong className="text-white font-semibold">WhatsApp:</strong> 07843 476 594</p>
                      <p><strong className="text-white font-semibold">Email:</strong> info@qconveyancing.com</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-4 border-t border-white/10">
                  <div className="p-2.5 bg-white/10 rounded-xl border border-white/10 shrink-0">
                    <Clock className="w-5 h-5 text-tealAccent" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-white mb-1.5">Telephone Opening Hours</h4>
                    <div className="space-y-1 text-xs text-white/85 leading-relaxed">
                      <p>Monday to Friday: 9:00am – 5:00pm</p>
                      <p className="text-tealAccent font-medium">Closed Weekends &amp; Bank Holidays</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom White Card */}
            <div className="bg-white p-7 text-legalDark border-t border-gray-200 flex-1 flex flex-col justify-center">
              <div className="space-y-6">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-warmGray rounded-xl shrink-0">
                    <MapPin className="w-5 h-5 text-legalDark" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-legalDark mb-1.5">Office Address</h4>
                    <address className="not-italic text-xs text-legalDark/80 leading-relaxed">
                      <p className="font-bold text-legalDark">Quality Conveyancing</p>
                      <p>Ealing Cross, 1st Floor, 85 Uxbridge Road</p>
                      <p>London W5 5BW</p>
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-4 border-t border-gray-100">
                  <div className="p-2.5 bg-warmGray rounded-xl shrink-0">
                    <Clock className="w-5 h-5 text-legalDark" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-base text-legalDark mb-1.5">Office Opening Hours</h4>
                    <div className="space-y-1 text-xs text-legalDark/80 leading-relaxed">
                      <p>Monday to Thursday: 9:00am – 5:30pm</p>
                      <p>Friday: 9:00am – 5:00pm</p>
                      <p className="text-textMuted">Closed Saturday, Sunday &amp; Bank Holidays</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
