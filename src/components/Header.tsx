"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/qc-logo.png";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Main core header navigation links
  const mainNavLinks = [
    { name: "Home", href: "/" },
    { name: "Our Services", href: "/services" },
    { name: "Get a Quote", href: "/quote" },
    { name: "Meet the Team", href: "/team" },
    { name: "Endorsements", href: "/endorsements" },
    { name: "Property Update", href: "/blogs" },
    { name: "Contact Us", href: "/contact" },
  ];

  // Secondary top utility links
  const topUtilityLinks = [
    { name: "Refer Work", href: "/refer-work" },
    { name: "Community Work", href: "/community-work" },
  ];

  // Combined for mobile menu drawer
  const allNavLinks = [...mainNavLinks.slice(0, 5), ...topUtilityLinks, ...mainNavLinks.slice(5)];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        className="fixed top-0 z-[90] w-full"
      >
        {/* Top Utility Bar (Desktop / Laptop) */}
        <div className="hidden lg:block bg-[#071311] text-white py-1.5 px-6 border-b border-white/10 text-xs">
          <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <a
                href="tel:02037636767"
                className="flex items-center gap-1.5 text-white/90 hover:text-tealAccent transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-tealAccent" />
                <span>Call Us: 020 3763 6767</span>
              </a>
              <span className="text-white/20">|</span>
              <a
                href="https://wa.me/447843476594?text=Hello%20Quality%20Conveyancing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-white/90 hover:text-tealAccent transition-colors font-medium"
              >
                <span className="w-2 h-2 rounded-full bg-[#25D366] inline-block animate-pulse"></span>
                <span>WhatsApp: 07843 476 594</span>
              </a>
            </div>

            <div className="flex items-center gap-5">
              {topUtilityLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/80 hover:text-tealAccent transition-colors font-medium tracking-wide"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Main Navigation Bar - Sage Dark Theme */}
        <div className="bg-[#0A1E1B] border-b border-white/15 transition-all duration-300">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
            {/* Logo */}
            <Link 
              href="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative h-12 w-36 sm:h-14 sm:w-44 shrink-0 block"
            >
              <Image
                src={logoImg}
                alt="Quality Conveyancing"
                fill
                sizes="(max-width: 640px) 144px, 176px"
                className="object-contain object-left filter brightness-110 drop-shadow-sm"
                priority
              />
            </Link>

            {/* Desktop Main Nav */}
            <nav className="hidden lg:flex items-center gap-5 lg:gap-7">
              {mainNavLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => {
                      if (link.href === "/") {
                        window.scrollTo({ top: 0, behavior: "instant" });
                      }
                    }}
                    className={`text-[12px] lg:text-[13px] font-bold tracking-wider uppercase whitespace-nowrap py-1 transition-colors duration-200 ${
                      isActive
                        ? "text-tealAccent border-b-2 border-tealAccent"
                        : "text-white hover:text-tealAccent"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Button / Mobile Menu Toggle */}
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/quote"
                className="hidden sm:inline-flex items-center justify-center bg-tealAccent hover:bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all shadow-md"
              >
                Instant Quote
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl text-white hover:bg-white/10 transition-colors"
                aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile / Tablet Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white z-[85] pt-28 pb-8 overflow-y-auto lg:hidden"
          >
            <div className="container mx-auto px-6 flex flex-col gap-1">
              {allNavLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      if (link.href === "/") {
                        window.scrollTo({ top: 0, behavior: "instant" });
                      }
                    }}
                    className="text-lg sm:text-xl font-serif font-bold text-legalDark hover:text-tealAccent flex items-center justify-between py-3 border-b border-gray-100"
                  >
                    <span>{link.name}</span>
                  </Link>
                </motion.div>
              ))}

              <div className="mt-8 pt-4 border-t border-gray-100 space-y-3">
                <a 
                  href="tel:02037636767" 
                  className="flex items-center gap-3 text-legalDark text-base font-bold bg-warmGray/50 p-4 rounded-xl border border-gray-100"
                >
                  <Phone className="w-5 h-5 text-tealAccent" />
                  <span>Call 020 3763 6767</span>
                </a>
                <a 
                  href="https://wa.me/447843476594" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-legalDark text-base font-bold bg-emerald-50 p-4 rounded-xl border border-emerald-100"
                >
                  <span className="w-3 h-3 rounded-full bg-[#25D366]"></span>
                  <span>WhatsApp: 07843 476 594</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
