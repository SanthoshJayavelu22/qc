"use client";

import { MapPin, Phone, Mail, ArrowRight, MessageCircle, MessageSquareText, ArrowUp } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";

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

      {/* Footer */}
      <footer className="bg-legalDark text-white pt-20 pb-8">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold font-serif mb-4">Quality Conveyancing</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Leading Conveyancing Solicitors London. Swift, transparent, fixed-fee conveyancing at the cutting edge of legal services.
              </p>
            </div>

            {/* Quick Links */}
            <nav aria-label="Footer Quick Links">
              <h4 className="text-sm font-semibold tracking-[0.15em] uppercase mb-6 text-tealAccent">Quick Links</h4>
              <ul className="space-y-3">
                {["Home", "Our Services", "Get a Quote", "Meet the Team", "Endorsements", "Careers", "Contact Us"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-white/50 hover:text-tealAccent transition-colors text-sm">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact */}
            <address className="not-italic">
              <h4 className="text-sm font-semibold tracking-[0.15em] uppercase mb-6 text-tealAccent">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-white/50 text-sm">
                  <Phone className="w-4 h-4 text-tealAccent mt-0.5 shrink-0" />
                  <span>020 3763 6767</span>
                </li>
                <li className="flex items-start gap-3 text-white/50 text-sm">
                  <Mail className="w-4 h-4 text-tealAccent mt-0.5 shrink-0" />
                  <a href="mailto:info@qconveyancing.com" className="hover:text-tealAccent transition-colors">info@qconveyancing.com</a>
                </li>
              </ul>
            </address>

            {/* Office */}
            <address className="not-italic">
              <h4 className="text-sm font-semibold tracking-[0.15em] uppercase mb-6 text-tealAccent">Our Office</h4>
              <div className="flex items-start gap-3 text-white/50 text-sm leading-relaxed">
                <MapPin className="w-4 h-4 text-tealAccent mt-0.5 shrink-0" />
                <div>
                  Ealing Cross, 1st Floor<br />
                  85 Uxbridge Road<br />
                  London W5 5BW
                </div>
              </div>
            </address>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
            <p>© {new Date().getFullYear()} Quality Conveyancing Limited. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-tealAccent transition-colors">Privacy</Link>
              <Link href="#" className="hover:text-tealAccent transition-colors">Terms</Link>
              <Link href="#" className="hover:text-tealAccent transition-colors">Complaints</Link>
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
