"use client";

import { MapPin, Phone, Mail, Printer, ShieldCheck, MessageCircle, MessageSquareText, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <>
      {/* Premium Action Banner */}
      <section className="bg-[#030712] relative py-20 border-t border-white/5 overflow-hidden">
        {/* Background glow for the banner */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-cyanAccent/10 rounded-full blur-[150px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-3xl p-10 md:p-16 text-center backdrop-blur-md shadow-[0_0_50px_rgba(0,255,255,0.05)]"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyanAccent to-blue-500">make your move?</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed">
              Experience modern, swift, and transparent conveyancing. Calculate your fixed-fee quote or instruct our legal team today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                href="#"
                className="group relative inline-flex items-center justify-center gap-2 bg-cyanAccent text-black font-bold text-lg px-8 py-4 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,255,255,0.2)] hover:shadow-[0_0_50px_rgba(0,255,255,0.4)] transition-all"
              >
                <div className="absolute inset-0 w-full h-full bg-white/30 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Calculate Fixed-Fee Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                href="#"
                className="inline-flex items-center justify-center bg-white/5 border border-white/20 text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-white/10 hover:border-cyanAccent/50 transition-all duration-300"
              >
                Instruct Us Online
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-[#02050B] text-white pt-24 pb-12 relative overflow-hidden">
        {/* Subtle bottom glow */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-900 via-cyanAccent to-blue-900 opacity-20"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20">
            
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href="#" className="flex items-center gap-3 mb-6 group">
                <div className="w-10 h-10 bg-gradient-to-br from-cyanAccent to-blue-600 text-[#02050B] flex items-center justify-center font-bold text-xl rounded shadow-[0_0_15px_rgba(0,255,255,0.2)] group-hover:shadow-[0_0_25px_rgba(0,255,255,0.4)] transition-shadow duration-300">
                  QC
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-xl font-bold tracking-tight leading-tight group-hover:text-cyanAccent transition-colors">
                    Quality Conveyancing
                  </span>
                </div>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                Leading <strong className="font-semibold text-gray-300">Conveyancing Solicitors London</strong>. As dedicated <strong className="font-semibold text-gray-300">Property Solicitors Ealing</strong>, we provide swift, transparent, fixed-fee conveyancing at the cutting edge of legal services.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders if needed */}
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:border-cyanAccent/50 hover:bg-cyanAccent/10 transition-all cursor-pointer text-gray-400 hover:text-cyanAccent"><ShieldCheck className="w-4 h-4"/></div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.nav
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              aria-label="Footer Quick Links"
            >
              <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
                Quick Links
                <span className="w-8 h-1 bg-cyanAccent rounded-full ml-2 opacity-50"></span>
              </h4>
              <ul className="space-y-4">
                {['Home', 'Our Services', 'Get a Quote', 'Meet the Team', 'Endorsements', 'Careers', 'Contact Us'].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-gray-400 hover:text-cyanAccent transition-colors text-sm font-light flex items-center gap-2 group">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyanAccent/30 group-hover:bg-cyanAccent transition-colors"></span>
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>

            {/* Contact Connectors */}
            <motion.address
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="not-italic"
            >
              <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
                Contact Us
                <span className="w-8 h-1 bg-cyanAccent rounded-full ml-2 opacity-50"></span>
              </h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-4 text-gray-400 text-sm group">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-cyanAccent/10 group-hover:text-cyanAccent transition-colors border border-white/5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col pt-1">
                    <span className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Telephone</span>
                    <span className="font-medium text-gray-300">020 3763 6767</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 text-gray-400 text-sm group">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-cyanAccent/10 group-hover:text-cyanAccent transition-colors border border-white/5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col pt-1">
                    <span className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Email</span>
                    <a href="mailto:info@qconveyancing.com" className="font-medium text-gray-300 hover:text-cyanAccent transition-colors">
                      info@qconveyancing.com
                    </a>
                  </div>
                </li>
              </ul>
            </motion.address>

            {/* Office Location */}
            <motion.address
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="not-italic"
            >
              <h4 className="text-lg font-bold mb-6 text-white flex items-center gap-2">
                Our Office
                <span className="w-8 h-1 bg-cyanAccent rounded-full ml-2 opacity-50"></span>
              </h4>
              <div className="flex gap-4 text-gray-400 text-sm leading-relaxed mb-6 group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-cyanAccent/10 group-hover:text-cyanAccent transition-colors border border-white/5 mt-1">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <strong className="text-gray-300 block mb-1">Quality Conveyancing</strong>
                  Ealing Cross, 1st Floor<br />
                  85 Uxbridge Road<br />
                  London W5 5BW
                </div>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-cyanAccent text-sm font-medium hover:text-white transition-colors">
                View on Google Maps <ArrowRight className="w-4 h-4" />
              </a>
            </motion.address>
            
          </div>

          {/* Compliance & Copyright */}
          <div className="border-t border-white/10 pt-8 flex flex-col lg:flex-row justify-between items-center gap-8 text-center lg:text-left">
            <p className="text-xs text-gray-500 leading-relaxed max-w-3xl font-light">
              Directors and Licensed Conveyancers: Brinda Nicholson & Jayshree Chudasama | Company Registration Number: 7566902 (Registered office address is the same as the trading address)<br />
              "Quality Conveyancing" is the trading name of Quality Conveyancing Limited | Regulated by the Council for Licensed Conveyancers (CLC Practice No. 11359). Please note we do not provide mortgage advice.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-end gap-x-6 gap-y-3 text-xs text-gray-500 font-medium">
              <Link href="#" className="hover:text-cyanAccent transition-colors">Disclaimer</Link>
              <Link href="#" className="hover:text-cyanAccent transition-colors">Privacy Statement</Link>
              <Link href="#" className="hover:text-cyanAccent transition-colors">Terms of Use</Link>
              <Link href="#" className="hover:text-cyanAccent transition-colors">Complaints</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Persistent Layout Widgets (Floating Buttons) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* WhatsApp Button */}
        <div className="relative group">
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#050B14] border border-white/10 rounded-lg text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 pointer-events-none shadow-xl">
            Chat on WhatsApp
          </div>
          <button 
            className="w-14 h-14 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-[#25D366] shadow-[0_0_20px_rgba(37,211,102,0.15)] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:border-[#25D366]/50 hover:bg-[#25D366]/10 hover:scale-110 transition-all duration-300 relative"
            aria-label="Chat on WhatsApp"
          >
            <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-0 group-hover:opacity-10 scale-50 group-hover:scale-100 transition-all duration-500"></div>
            <MessageCircle className="w-6 h-6 relative z-10" />
          </button>
        </div>
        
        {/* Live Chat Button */}
        <div className="relative group">
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-[#050B14] border border-white/10 rounded-lg text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 pointer-events-none shadow-xl">
            Open Live Chat
          </div>
          <button 
            className="w-14 h-14 bg-cyanAccent/10 backdrop-blur-xl border border-cyanAccent/30 rounded-full flex items-center justify-center text-cyanAccent shadow-[0_0_20px_rgba(0,255,255,0.15)] hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] hover:border-cyanAccent hover:bg-cyanAccent/20 hover:scale-110 transition-all duration-300 relative"
            aria-label="Open Live Chat"
          >
            <div className="absolute inset-0 rounded-full bg-cyanAccent opacity-0 group-hover:opacity-10 scale-50 group-hover:scale-100 transition-all duration-500"></div>
            <MessageSquareText className="w-6 h-6 relative z-10" />
          </button>
        </div>
      </div>
    </>
  );
}
