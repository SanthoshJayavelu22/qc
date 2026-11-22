"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, ShieldCheck, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  
  const [preferences, setPreferences] = useState({
    necessary: true,
    preferences: true,
    statistics: true,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("qc-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAllowAll = () => {
    localStorage.setItem(
      "qc-cookie-consent",
      JSON.stringify({ necessary: true, preferences: true, statistics: true, marketing: true })
    );
    setIsVisible(false);
  };

  const handleAllowSelection = () => {
    localStorage.setItem("qc-cookie-consent", JSON.stringify(preferences));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[999] bg-legalDark text-white border-t border-white/10 shadow-2xl px-4 sm:px-8 py-5 md:py-6"
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              
              {/* Left Column: Heading & Description */}
              <div className="space-y-2 max-w-3xl">
                <div className="flex items-center gap-2">
                  <Cookie className="w-5 h-5 text-tealAccent" />
                  <h3 className="font-serif font-bold text-base sm:text-lg text-white">
                    This website uses cookies
                  </h3>
                </div>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                  We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We also share information about your use of our site with our social media, advertising and analytics partners who may combine it with other information that you&apos;ve provided to them or that they&apos;ve collected from your use of their services.
                </p>
              </div>

              {/* Right Column: Allow All & Allow Selection Buttons */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0 w-full sm:w-auto lg:w-48">
                <button
                  type="button"
                  onClick={handleAllowAll}
                  className="w-full bg-tealAccent hover:bg-tealAccent/90 text-legalDark font-bold text-xs uppercase tracking-wider py-3 px-5 rounded-xl transition-all shadow-md text-center"
                >
                  Allow all
                </button>
                <button
                  type="button"
                  onClick={handleAllowSelection}
                  className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider py-3 px-5 rounded-xl border border-white/20 transition-all text-center"
                >
                  Allow selection
                </button>
              </div>
            </div>

            {/* Bottom Row: Toggle Categories & Show Details Link */}
            <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="flex flex-wrap items-center gap-5 sm:gap-8">
                {/* Necessary */}
                <label className="flex items-center gap-2 cursor-not-allowed select-none">
                  <span className="font-semibold text-white/95">Necessary</span>
                  <span className="relative inline-flex h-5 w-9 shrink-0 cursor-not-allowed items-center rounded-full bg-tealAccent transition-colors">
                    <span className="translate-x-4 inline-block h-4 w-4 rounded-full bg-legalDark transition-transform" />
                  </span>
                </label>

                {/* Preferences */}
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <span className="text-white/80 hover:text-white transition-colors">Preferences</span>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={preferences.preferences}
                    onClick={() => setPreferences((p) => ({ ...p, preferences: !p.preferences }))}
                    className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full transition-colors ${
                      preferences.preferences ? "bg-tealAccent" : "bg-white/20"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 rounded-full transition-transform ${
                        preferences.preferences ? "translate-x-4 bg-legalDark" : "translate-x-0.5 bg-white"
                      }`}
                    />
                  </button>
                </label>

                {/* Statistics */}
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <span className="text-white/80 hover:text-white transition-colors">Statistics</span>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={preferences.statistics}
                    onClick={() => setPreferences((p) => ({ ...p, statistics: !p.statistics }))}
                    className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full transition-colors ${
                      preferences.statistics ? "bg-tealAccent" : "bg-white/20"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 rounded-full transition-transform ${
                        preferences.statistics ? "translate-x-4 bg-legalDark" : "translate-x-0.5 bg-white"
                      }`}
                    />
                  </button>
                </label>

                {/* Marketing */}
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <span className="text-white/80 hover:text-white transition-colors">Marketing</span>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={preferences.marketing}
                    onClick={() => setPreferences((p) => ({ ...p, marketing: !p.marketing }))}
                    className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full transition-colors ${
                      preferences.marketing ? "bg-tealAccent" : "bg-white/20"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 rounded-full transition-transform ${
                        preferences.marketing ? "translate-x-4 bg-legalDark" : "translate-x-0.5 bg-white"
                      }`}
                    />
                  </button>
                </label>
              </div>

              {/* Show Details Toggle */}
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setShowDetails(!showDetails)}
                  className="text-tealAccent hover:underline inline-flex items-center gap-1 font-medium text-xs"
                >
                  <span>{showDetails ? "Hide details" : "Show details"}</span>
                  {showDetails ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
                <Link href="/privacy" className="text-white/60 hover:text-tealAccent transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>

            {/* Expandable Details Pane */}
            <AnimatePresence>
              {showDetails && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 pt-4 border-t border-white/10 text-xs text-white/70 space-y-2"
                >
                  <p>
                    <strong>Necessary cookies:</strong> Help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
                  </p>
                  <p>
                    <strong>Preference cookies:</strong> Enable a website to remember information that changes the way the website behaves or looks, like your preferred language or the region that you are in.
                  </p>
                  <p>
                    <strong>Statistic cookies:</strong> Help website owners to understand how visitors interact with websites by collecting and reporting information anonymously.
                  </p>
                  <p>
                    <strong>Marketing cookies:</strong> Are used to track visitors across websites to display ads that are relevant and engaging for the individual user.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
