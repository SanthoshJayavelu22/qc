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
                href="#"
                className="inline-flex items-center justify-center gap-2 bg-tealAccent text-legalDark font-bold px-8 py-4 rounded-lg hover:shadow-lg hover:shadow-tealAccent/20 transition-all duration-300"
              >
                Get a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#"
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
                  { name: "Get a Quote", href: "#" },
                  { name: "Meet the Team", href: "#" },
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

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <AnimatePresence>
          {showScroll && (
            <motion.button
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              onClick={scrollToTop}
              className="w-12 h-12 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 shadow-lg hover:bg-white hover:text-legalDark transition-colors"
              aria-label="Scroll to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
        <button className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform" aria-label="WhatsApp">
          <MessageCircle className="w-5 h-5" />
        </button>
        <button className="w-12 h-12 bg-tealAccent rounded-full flex items-center justify-center text-legalDark shadow-lg hover:scale-110 transition-transform" aria-label="Live Chat">
          <MessageSquareText className="w-5 h-5" />
        </button>
      </div>
    </>
  );
}
