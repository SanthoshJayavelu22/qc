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
      <section className="py-28 bg-warmGray">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-legalDark font-serif mb-6">
              Ready to Make Your Move?
            </h2>
            <p className="text-textMuted text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Experience modern, swift, and transparent conveyancing. Calculate your fixed-fee quote or instruct our legal team today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 bg-tealAccent text-legalDark font-bold px-8 py-4 rounded-lg hover:shadow-lg hover:shadow-tealAccent/20 transition-all duration-300"
              >
                Get a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-legalDark text-white font-bold px-8 py-4 rounded-lg hover:bg-legalNavy transition-colors"
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
                Directors and Licensed Conveyancers: Brinda Nicholson & Jayshree Chudasama | Company Registration Number: 7566902 (Registered office address is the same as the trading address)
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
                  { name: "Careers", href: "/careers" },
                  { name: "Blogs", href: "/blogs" },
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
          href="https://wa.me/02037636767?text=Hello%20Quality%20Conveyancing%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 p-3 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
          aria-label="Chat on WhatsApp"
          title="Direct WhatsApp Chat"
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
