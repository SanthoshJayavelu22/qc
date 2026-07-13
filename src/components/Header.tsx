"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, ChevronRight } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Our Services", href: "#" },
    { name: "Get a Quote", href: "#" },
    { name: "Meet the Team", href: "#" },
    { name: "Endorsements", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-[#050B14] text-white py-2 relative z-50">
        <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center text-xs font-medium">
          <p className="hidden md:block text-gray-400">Specialist Property Solicitors in London</p>
          <div className="flex items-center gap-6 ml-auto">
            <a href="tel:02037636767" className="flex items-center gap-2 hover:text-cyanAccent transition-colors">
              <Phone className="w-3 h-3 text-cyanAccent" />
              <span>020 3763 6767</span>
            </a>
            <Link href="#" className="hover:text-cyanAccent transition-colors text-gray-300">Client Login</Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? "bg-legalDark/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20" 
            : "bg-legalDark border-b border-white/5"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-3 group">
            {/* Logo Mark */}
            <motion.div 
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.6, ease: "backOut" }}
              className="w-10 h-10 bg-gradient-to-br from-cyanAccent to-blue-600 text-legalDark flex items-center justify-center font-bold text-xl rounded shadow-[0_0_15px_rgba(0,255,255,0.3)]"
            >
              QC
            </motion.div>
            {/* Logo Text */}
            <div className="flex flex-col">
              <span className="text-white text-xl font-bold tracking-tight leading-tight group-hover:text-cyanAccent transition-colors">
                Quality Conveyancing
              </span>
              <span className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-medium leading-tight">
                Property Lawyers
              </span>
            </div>
          </Link>

          {/* Center Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-gray-200 hover:text-white transition-colors text-sm font-medium group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyanAccent transition-all duration-300 group-hover:w-full rounded-full shadow-[0_0_8px_rgba(0,255,255,0.8)]"></span>
              </Link>
            ))}
          </nav>

          {/* CTAs */}
          <div className="flex items-center gap-3">
            <Link
              href="#"
              className="hidden md:flex items-center justify-center px-5 py-2.5 rounded border border-white/20 text-white hover:bg-white/10 font-bold text-sm transition-all"
            >
              Instruct Us
            </Link>
            <Link
              href="#"
              className="group relative flex items-center justify-center px-5 py-2.5 rounded bg-cyanAccent text-legalDark font-bold text-sm transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              <span className="relative z-10 flex items-center">
                Request Quote <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </motion.header>
    </>
  );
}
