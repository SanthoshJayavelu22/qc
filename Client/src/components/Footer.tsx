"use client";

import { MapPin, Phone, Mail, ArrowRight, MessageCircle, MessageSquareText, ArrowUp, ShieldCheck } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";

import legalEyeBadge from "@/assets/legal-eye-aml.jpg";
import clcBadge from "@/assets/clc-security-badge.png";
import clcRegulatedBadge from "@/assets/clc-regulated-badge.png";

export default function Footer() {
  const { scrollY } = useScroll();
  const [showScroll, setShowScroll] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 400) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* CTA Banner */}
      <section className="py-24 bg-emerald-50/60 border-t border-emerald-100/80">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-tealAccent mb-3 block">Start Your Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold text-legalDark font-serif mb-6 leading-tight">
              Ready to Make Your Move?
            </h2>
            <p className="text-legalDark/80 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Experience modern, swift, and transparent conveyancing. Calculate your instant quote or instruct our legal team today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 bg-legalDark text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-md hover:bg-legalNavy hover:shadow-xl transition-all duration-300 group"
              >
                <span>Get A Quote</span>
                <ArrowRight className="w-4 h-4 text-tealAccent group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-legalDark font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl border border-legalDark/20 shadow-sm hover:bg-gray-50 hover:border-legalDark transition-all duration-300"
              >
                Instruct Us Online
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Top Contact Strip (Matching Reference Image) */}
      <section className="bg-legalDark text-white py-8 px-6 lg:px-12 border-b border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Give Us A Call */}
            <div className="flex items-start justify-center md:justify-start gap-4 pt-4 md:pt-0 md:pr-6">
              <div className="w-10 h-10 bg-tealAccent/20 rounded-xl flex items-center justify-center shrink-0 text-tealAccent">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-tealAccent uppercase tracking-wider mb-1">Give Us A Call</h4>
                <p className="text-xs text-white/80">T: 020 3763 6767</p>
                <p className="text-xs text-white/60">Fax: 0208 181 6299</p>
              </div>
            </div>

            {/* Send Us A Message */}
            <div className="flex items-start justify-center md:justify-start gap-4 pt-4 md:pt-0 md:px-6">
              <div className="w-10 h-10 bg-tealAccent/20 rounded-xl flex items-center justify-center shrink-0 text-tealAccent">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-tealAccent uppercase tracking-wider mb-1">Send Us A Message</h4>
                <a href="mailto:info@qconveyancing.com" className="text-xs text-white/80 hover:text-tealAccent transition-colors">
                  info@qconveyancing.com
                </a>
              </div>
            </div>

            {/* Office Location */}
            <div className="flex items-start justify-center md:justify-start gap-4 pt-4 md:pt-0 md:pl-6">
              <div className="w-10 h-10 bg-tealAccent/20 rounded-xl flex items-center justify-center shrink-0 text-tealAccent">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm text-tealAccent uppercase tracking-wider mb-1">Office Location</h4>
                <p className="text-xs text-white/80">Quality Conveyancing, Ealing Cross, 1st Floor</p>
                <p className="text-xs text-white/60">85 Uxbridge Road, London W5 5BW</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-legalDark text-white pt-16 pb-8 border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16 items-start">
            
            {/* Column 1: Brand & Regulatory Text */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-serif text-white">Quality Conveyancing</h3>
              <p className="text-white/70 text-xs leading-relaxed">
                Directors and Licensed Conveyancers: Brinda Nicholson, Mrs Pathmajani Chandrasekaram (Pat Nathan) & Jayshree Chudasama | Company Registration Number: 7566902 (Registered office address is the same as the trading address)
              </p>
              <p className="text-white/70 text-xs leading-relaxed">
                "Quality Conveyancing" is the trading name of Quality Conveyancing Limited | Regulated by the Council for Licensed Conveyancers (CLC Practice No. 11359)
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <nav aria-label="Footer Quick Links">
              <h4 className="text-sm font-semibold tracking-[0.15em] uppercase mb-5 text-tealAccent">Quick Links</h4>
              <ul className="space-y-2.5 text-xs text-white/80">
                {[
                  { name: "Home", href: "/" },
                  { name: "Our Services", href: "/services" },
                  { name: "Get a Quote", href: "/quote" },
                  { name: "Meet the Team", href: "/team" },
                  { name: "Endorsements", href: "/endorsements" },
                  { name: "Refer Work", href: "/refer-work" },
                  { name: "Community Work", href: "/community-work" },
                  { name: "Property Update", href: "/blogs" },
                  { name: "Contact Us", href: "/contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-tealAccent transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Column 3: Useful Links */}
            <nav aria-label="Footer Legal Links">
              <h4 className="text-sm font-semibold tracking-[0.15em] uppercase mb-5 text-tealAccent">Useful Links</h4>
              <ul className="space-y-2.5 text-xs text-white/80">
                {[
                  { name: "Price Information", href: "/price-information" },
                  { name: "Disclaimer", href: "/disclaimer" },
                  { name: "Privacy Statement", href: "/privacy" },
                  { name: "Terms of Use", href: "/terms" },
                  { name: "Terms of Business", href: "/terms-of-business" },
                  { name: "Complaints Procedure", href: "/complaints" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-tealAccent transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Column 4: Accreditations & Click to Verify (Matching Reference Layout Exactly) */}
            <div className="space-y-4 flex flex-col items-start md:items-end lg:items-start">
              {/* Legal Eye AML Badge */}
              <div className="bg-white p-2.5 rounded-xl shadow-md border border-white/20 w-44">
                <Image
                  src={legalEyeBadge}
                  alt="Legal Eye 2024 AML Accredited"
                  width={170}
                  height={85}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>

              {/* Regulated by CLC Badge */}
              <div className="bg-white p-2.5 rounded-xl shadow-md border border-white/20 w-44">
                <Image
                  src={clcRegulatedBadge}
                  alt="Regulated by Council for Licensed Conveyancers"
                  width={170}
                  height={65}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* CLICK TO VERIFY Button */}
              <a
                href="https://www.clc-uk.org/security-badge/?067076067+083109097114116066097100103101+083109097114116045066097100103101046112110103+104116116112058047047113099111110118101121097110099105110103046099111109047&%2bFL%2b6mqGA77ClJL4Z9nj03KDoFjjjMlcMvWOcMInIY4%3d"
                target="_blank"
                rel="noopener noreferrer"
                className="w-44 text-center text-xs font-bold uppercase tracking-wider text-legalDark bg-white hover:bg-tealAccent border border-white py-2.5 px-3 rounded-lg hover:shadow-lg transition-all block"
              >
                CLICK TO VERIFY
              </a>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60">
            <p>© {new Date().getFullYear()} Quality Conveyancing Limited. All rights reserved.</p>
            
              {/* Social Media Links */}
              <div className="flex gap-3 items-center">
                <span className="text-[11px] text-white/50 uppercase tracking-widest mr-1">Follow Us:</span>
                <a 
                  href="https://www.facebook.com/share/1GNqvCkY7T/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-white/10 hover:bg-tealAccent hover:text-legalDark rounded-full transition-colors" 
                  title="Facebook"
                  aria-label="Facebook"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a 
                  href="https://www.instagram.com/qconveyancing?stkn=MTRlZjJobWdnd2M2YQ==" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-white/10 hover:bg-tealAccent hover:text-legalDark rounded-full transition-colors" 
                  title="Instagram"
                  aria-label="Instagram"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a 
                  href="https://www.linkedin.com/company/quality-conveyancing1/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-white/10 hover:bg-tealAccent hover:text-legalDark rounded-full transition-colors" 
                  title="LinkedIn"
                  aria-label="LinkedIn"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a 
                  href="https://www.youtube.com/@QualityConveyancing" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 bg-white/10 hover:bg-tealAccent hover:text-legalDark rounded-full transition-colors" 
                  title="YouTube"
                  aria-label="YouTube"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>

            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-tealAccent transition-colors">Privacy</Link>
              <Link href="/terms-of-business" className="hover:text-tealAccent transition-colors">Terms</Link>
              <Link href="/complaints" className="hover:text-tealAccent transition-colors">Complaints</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
        <AnimatePresence>
          {showScroll && (
            <motion.button
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              onClick={scrollToTop}
              className="w-12 h-12 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 shadow-xl hover:bg-legalDark transition-all"
              aria-label="Scroll to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* WhatsApp Direct Chat Button */}
        <a
          href="https://wa.me/447843476594?text=Hello%20Quality%20Conveyancing%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 p-3 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
          aria-label="Chat on WhatsApp"
          title="Direct WhatsApp Chat: 07843 476 594"
        >
          <svg
            className="w-7 h-7 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.834 11.834 0 005.707 1.464h.005c6.554 0 11.89-5.335 11.893-11.893 0-3.176-1.236-6.163-3.483-8.411" />
          </svg>
        </a>

        {/* Live Chat Launcher Button */}
        <button
          onClick={() => {
            const btn = document.getElementById("live-chat-toggle-btn");
            if (btn) btn.click();
          }}
          className="w-13 h-13 p-3 bg-legalDark text-tealAccent rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 border border-tealAccent/30"
          aria-label="Open Live Chat"
          title="Live Chat Support"
        >
          <MessageSquareText className="w-6 h-6" />
        </button>
      </div>
    </>
  );
}
