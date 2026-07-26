"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Printer, 
  Send, 
  CheckCircle2, 
  Sparkles,
  MessageSquare,
  ShieldCheck
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

import officeImg from "@/assets/contact-office-ealing.png";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Property Purchase",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-lightBg flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-20">
        {/* Contact Hero (Matching Careers/Services Split Layout) */}
        <section className="bg-legalDark text-white py-16 px-6 lg:px-12">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 text-center lg:text-left">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-tealAccent/20 text-tealAccent text-xs font-semibold uppercase tracking-widest mb-4">
                  <Phone className="w-3.5 h-3.5" /> Direct Conveyancer Contact
                </span>
                <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 tracking-tight leading-tight">
                  Contact Quality Conveyancing London
                </h1>
                <p className="text-white/80 text-sm md:text-base max-w-xl font-light leading-relaxed mb-6">
                  Speak directly with our specialist property solicitors in Ealing, London. No call centres, no delays.
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <a
                    href="tel:02037636767"
                    className="inline-flex items-center gap-2 bg-tealAccent text-legalDark font-bold text-xs px-6 py-3 rounded-lg hover:shadow-lg transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" /> Call Direct: 020 3763 6767
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 relative h-64 md:h-72 lg:h-[320px] rounded-2xl overflow-hidden shadow-xl border border-white/10">
                <Image
                  src={officeImg}
                  alt="Quality Conveyancing Ealing Cross London Office"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information & Form Grid */}
        <section className="py-16 px-6 lg:px-12 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Office Details */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-tealAccent mb-1.5 block">
                    Our London Office
                  </span>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-legalDark mb-3">
                    Ealing Cross Office Location
                  </h2>
                  <p className="text-textMuted text-xs md:text-sm leading-relaxed">
                    Conveniently located in Ealing Broadway, West London, serving clients across London, England, and internationally.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3 text-sm text-textMuted">
                  <div className="flex items-start gap-3.5 p-4 bg-warmGray/40 rounded-xl border border-gray-100">
                    <MapPin className="w-5 h-5 text-tealAccent shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-legalDark block mb-0.5">Address</strong>
                      Quality Conveyancing<br />
                      Ealing Cross, 1st Floor<br />
                      85 Uxbridge Road, London W5 5BW
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 bg-warmGray/40 rounded-xl border border-gray-100">
                    <Phone className="w-5 h-5 text-tealAccent shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-legalDark block mb-0.5">Direct Telephone</strong>
                      <a href="tel:02037636767" className="text-legalDark font-bold hover:text-tealAccent transition-colors">
                        020 3763 6767
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 bg-warmGray/40 rounded-xl border border-gray-100">
                    <Mail className="w-5 h-5 text-tealAccent shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-legalDark block mb-0.5">Email Enquiries</strong>
                      <a href="mailto:info@qconveyancing.com" className="hover:text-tealAccent transition-colors">
                        info@qconveyancing.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-4 bg-warmGray/40 rounded-xl border border-gray-100">
                    <Clock className="w-5 h-5 text-tealAccent shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-legalDark block mb-0.5">Opening Hours</strong>
                      Monday - Friday: 9:00 AM - 5:30 PM<br />
                      <span className="text-xs text-tealAccent font-semibold">We stay open during lunchtime!</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7 bg-warmGray/30 p-8 md:p-10 rounded-2xl border border-gray-100">
                <span className="text-xs font-bold uppercase tracking-widest text-tealAccent mb-2 block">
                  Enquire Online
                </span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-legalDark mb-6">
                  Get a Free Fixed-Fee Conveyancing Quote
                </h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 bg-white rounded-xl text-center border border-gray-200"
                  >
                    <CheckCircle2 className="w-12 h-12 text-tealAccent mx-auto mb-4" />
                    <h3 className="text-xl font-bold font-serif text-legalDark mb-2">Thank You!</h3>
                    <p className="text-textMuted text-sm leading-relaxed">
                      Your enquiry has been sent directly to our conveyancing team. We will call or email you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase text-legalDark mb-1">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Smith"
                          className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-legalDark focus:outline-none focus:border-tealAccent"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase text-legalDark mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="07123 456789"
                          className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-legalDark focus:outline-none focus:border-tealAccent"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase text-legalDark mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-legalDark focus:outline-none focus:border-tealAccent"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase text-legalDark mb-1">Service Required</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-legalDark focus:outline-none focus:border-tealAccent"
                        >
                          <option>Property Purchase</option>
                          <option>Property Sale</option>
                          <option>Lease Extension</option>
                          <option>Re-mortgage</option>
                          <option>Transfer of Equity</option>
                          <option>Commercial Property</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase text-legalDark mb-1">Property Address / Details</label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Provide purchase price, property address, or specific questions..."
                        className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-legalDark focus:outline-none focus:border-tealAccent"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-legalDark text-white font-bold rounded-lg hover:bg-legalNavy transition-colors flex items-center justify-center gap-2 text-sm"
                    >
                      <Send className="w-4 h-4 text-tealAccent" /> Submit Conveyancing Enquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
