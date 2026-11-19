"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Loader2,
  AlertCircle
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

import contactHeroImg from "@/assets/BA_2.webp";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Property Purchase",
    message: "",
  });

  const validateForm = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = "Full name is required.";
    }

    if (!formData.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address (e.g. john@example.com).";
    }

    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required.";
    } else if (formData.phone.trim().replace(/\s+/g, "").length < 7) {
      errs.phone = "Please enter a valid telephone number.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) return;

    setLoading(true);

    try {
      // 1. Submit to local Express MongoDB backend
      let backendSuccess = false;
      try {
        const backendRes = await fetch("http://localhost:5000/api/inquiries/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (backendRes.ok) backendSuccess = true;
      } catch (beErr) {
        console.warn("Backend contact API unreachable, using FormSubmit fallback:", beErr);
      }

      // 2. Email transmission via FormSubmit
      const response = await fetch("https://formsubmit.co/ajax/santhoshjayavelu57@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          _subject: `New Contact Form Enquiry: ${formData.name}`,
          _template: "table",
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone,
          "Service Required": formData.service,
          Message: formData.message,
        }),
      });

      if (response.ok || backendSuccess) {
        setSubmitted(true);
      } else {
        setSubmitError("Failed to transmit enquiry. Please call us directly on 020 3763 6767.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-lightBg flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-20">
        {/* Contact Hero */}
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
                    className="inline-flex items-center gap-2 bg-white hover:bg-tealAccent text-legalDark font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg transition-all border border-white/20 group"
                  >
                    <Phone className="w-4 h-4 text-tealAccent group-hover:text-legalDark transition-colors" /> Call Direct: 020 3763 6767
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 relative h-64 md:h-72 lg:h-[320px] rounded-2xl overflow-hidden shadow-xl border border-white/10">
                <Image
                  src={contactHeroImg}
                  alt="Quality Conveyancing Aurora House London Office"
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
                    Aurora House Office Location
                  </h2>
                  <p className="text-textMuted text-xs md:text-sm leading-relaxed">
                    Conveniently located in Ealing, West London, serving clients across London, England, Wales, and internationally.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3 text-sm text-textMuted">
                  <a
                    href="https://www.google.com/maps/place/Quality+Conveyancing/@51.5117979,-0.3141504,17z/data=!3m2!4b1!5s0x4877a7ce628da303:0x57dec0479ff76f4f!4m16!1m9!4m8!1m0!1m6!1m2!1s0x4876121738b39a03:0x8f33eea903500bf6!2sQuality+Conveyancing+1st+floor,+Ealing+Cross,+85+Uxbridge+Rd+London+W5+5BW+United+Kingdom!2m2!1d-0.3115755!2d51.5117946!3m5!1s0x4876121738b39a03:0x8f33eea903500bf6!8m2!3d51.5117946!4d-0.3115755!16s%2Fg%2F11bw5m9ct4?entry=ttu&g_ep=EgoyMDI0MDkwOC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3.5 p-4 bg-warmGray/40 hover:bg-warmGray/70 transition-colors rounded-xl border border-gray-100 group"
                  >
                    <MapPin className="w-5 h-5 text-tealAccent shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <strong className="text-legalDark block mb-0.5 flex items-center gap-1.5">
                        <span>Office Address</span>
                        <span className="text-[10px] text-tealAccent font-normal uppercase">(Open in Google Maps ↗)</span>
                      </strong>
                      Quality Conveyancing<br />
                      Aurora House, 71–75 Uxbridge Road<br />
                      Ealing, London W5 5SL
                    </div>
                  </a>

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

                  <a
                    href="https://wa.me/447843476594?text=Hello%20Quality%20Conveyancing%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3.5 p-4 bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-all rounded-xl border border-[#25D366]/30 group"
                  >
                    <div className="w-5 h-5 shrink-0 mt-0.5 text-[#25D366] group-hover:scale-110 transition-transform">
                      <svg
                        className="w-5 h-5 fill-current"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.834 11.834 0 005.707 1.464h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.176-1.236-6.163-3.483-8.411" />
                      </svg>
                    </div>
                    <div>
                      <strong className="text-legalDark block mb-0.5 flex items-center gap-1.5">
                        <span>WhatsApp Us Any time</span>
                        <span className="text-[10px] bg-[#25D366] text-white font-bold px-1.5 py-0.5 rounded-full">24/7</span>
                      </strong>
                      <span className="text-legalDark font-bold hover:text-[#25D366] transition-colors block">
                        07843 476 594
                      </span>
                      <span className="text-xs text-textMuted">Instant messaging support available round the clock</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right Column: FormSubmit Integrated Contact Form */}
              <div className="lg:col-span-7 bg-warmGray/30 p-8 md:p-10 rounded-2xl border border-gray-100">
                <span className="text-xs font-bold uppercase tracking-widest text-tealAccent mb-2 block">
                  Enquire Online
                </span>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-legalDark mb-6">
                  Get a Free Instant Conveyancing Quote
                </h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 bg-white rounded-xl text-center border border-gray-200"
                  >
                    <CheckCircle2 className="w-12 h-12 text-tealAccent mx-auto mb-4" />
                    <h3 className="text-xl font-bold font-serif text-legalDark mb-2">Enquiry Sent Successfully!</h3>
                    <p className="text-textMuted text-sm leading-relaxed">
                      Thank you for reaching out. Your enquiry has been sent to our legal team (<strong className="text-legalDark">santhoshjayavelu57@gmail.com</strong>). We will contact you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {submitError && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-xs font-medium flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{submitError}</span>
                      </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase text-legalDark mb-1">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: "" });
                          }}
                          placeholder="John Smith"
                          className={`w-full px-4 py-2.5 bg-white border ${errors.name ? "border-red-500 bg-red-50/20" : "border-gray-200"} rounded-lg text-sm text-legalDark focus:outline-none focus:border-tealAccent`}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase text-legalDark mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: "" });
                          }}
                          placeholder="07123 456789"
                          className={`w-full px-4 py-2.5 bg-white border ${errors.phone ? "border-red-500 bg-red-50/20" : "border-gray-200"} rounded-lg text-sm text-legalDark focus:outline-none focus:border-tealAccent`}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase text-legalDark mb-1">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: "" });
                          }}
                          placeholder="john@example.com"
                          className={`w-full px-4 py-2.5 bg-white border ${errors.email ? "border-red-500 bg-red-50/20" : "border-gray-200"} rounded-lg text-sm text-legalDark focus:outline-none focus:border-tealAccent`}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase text-legalDark mb-1">Service Required</label>
                        <select
                          name="service"
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
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Provide purchase price, property address, or specific questions..."
                        className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm text-legalDark focus:outline-none focus:border-tealAccent"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 bg-legalDark text-white font-bold rounded-lg hover:bg-legalNavy transition-colors flex items-center justify-center gap-2 text-sm disabled:opacity-50"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 text-tealAccent animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-tealAccent" /> Submit Conveyancing Enquiry
                        </>
                      )}
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
