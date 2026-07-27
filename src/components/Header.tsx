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

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Services", href: "/services" },
    { name: "Get a Quote", href: "/quote" },
    { name: "Meet the Team", href: "/team" },
    { name: "Endorsements", href: "/endorsements" },
    { name: "Careers", href: "/careers" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact Us", href: "/contact" },
  ];

  // Header should be transparent only on home page when top of scroll; otherwise white background
  const isTransparent = isHomePage && !isScrolled;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        className={`fixed top-0 z-[90] w-full transition-all duration-500 ${
          isTransparent && !isMobileMenuOpen
            ? "bg-transparent"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="relative h-12 w-36 sm:h-16 sm:w-48 block"
          >
            <Image
              src={logoImg}
              alt="Quality Conveyancing"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    if (link.href === "/") {
                      window.scrollTo({ top: 0, behavior: "instant" });
                    }
                  }}
                  className={`text-[13px] font-medium tracking-wide uppercase transition-colors duration-300 hover:text-tealAccent ${
                    isTransparent ? "text-white" : "text-legalDark"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
          </nav>

          {/* Phone + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="tel:02037636767"
              className={`hidden md:flex items-center gap-2 text-sm font-medium transition-colors ${
                isTransparent && !isMobileMenuOpen ? "text-white" : "text-legalDark"
              }`}
            >
              <Phone className="w-4 h-4 text-tealAccent" />
              020 3763 6767
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2.5 rounded-lg transition-colors ${
                isTransparent && !isMobileMenuOpen 
                  ? "text-white hover:bg-white/10" 
                  : "text-legalDark hover:bg-gray-100"
              }`}
              aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-legalDark" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-white z-[85] pt-24 pb-8 overflow-y-auto lg:hidden"
          >
            <div className="container mx-auto px-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      if (link.href === "/") {
                        window.scrollTo({ top: 0, behavior: "instant" });
                      }
                    }}
                    className="text-xl sm:text-2xl font-serif font-bold text-legalDark hover:text-tealAccent flex items-center justify-between py-3.5 border-b border-gray-100"
                  >
                    <span>{link.name}</span>
                  </Link>
                </motion.div>
              ))}

              <div className="mt-8 pt-4 border-t border-gray-100">
                <a 
                  href="tel:02037636767" 
                  className="flex items-center gap-3 text-legalDark text-lg font-semibold bg-warmGray/50 p-4 rounded-xl border border-gray-100"
                >
                  <Phone className="w-5 h-5 text-tealAccent" />
                  <span>Call 020 3763 6767</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
