"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, ShieldCheck, X, SlidersHorizontal, Check } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("qc-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("qc-cookie-consent", JSON.stringify({ necessary: true, analytics: true, marketing: true }));
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleDeclineAll = () => {
    localStorage.setItem("qc-cookie-consent", JSON.stringify({ necessary: true, analytics: false, marketing: false }));
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("qc-cookie-consent", JSON.stringify(preferences));
    setIsVisible(false);
    setShowPreferences(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Bottom Left Cookie Banner */}
      <AnimatePresence>
        {isVisible && !showPreferences && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-6 left-6 right-6 md:right-auto md:max-w-md z-[90]"
          >
            <div className="bg-white/95 backdrop-blur-md border border-gray-100 p-4 md:p-5 rounded-2xl shadow-xl text-legalDark flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-tealAccent/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <Cookie className="w-4 h-4 text-legalDark" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xs text-legalDark mb-0.5">Privacy & Cookie Settings</h4>
                  <p className="text-[11px] text-textMuted leading-relaxed">
                    We use cookies to secure the site and optimize your conveyancing experience.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 justify-end pt-1 border-t border-gray-100/80">
                <button
                  onClick={() => setShowPreferences(true)}
                  className="px-3 py-1.5 text-[11px] font-semibold text-textMuted hover:text-legalDark border border-gray-200 rounded-md hover:bg-warmGray/50 transition-all flex items-center gap-1"
                >
                  <SlidersHorizontal className="w-3 h-3 text-tealAccent" /> Customise
                </button>
                <button
                  onClick={handleDeclineAll}
                  className="px-3 py-1.5 text-[11px] font-semibold text-legalDark border border-gray-200 rounded-md hover:bg-warmGray/50 transition-all"
                >
                  Decline
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-3.5 py-1.5 text-[11px] font-bold text-legalDark bg-tealAccent rounded-md hover:shadow-md transition-all"
                >
                  Accept All
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Preferences Modal Dialog */}
      <AnimatePresence>
        {showPreferences && (
          <div className="fixed inset-0 z-[130] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPreferences(false)}
              className="absolute inset-0 bg-legalDark/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 z-10"
            >
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-5">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-tealAccent" />
                  <h3 className="text-lg font-serif font-bold text-legalDark">Cookie Preferences</h3>
                </div>
                <button
                  onClick={() => setShowPreferences(false)}
                  className="p-1 rounded-full text-gray-400 hover:text-legalDark transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 mb-6 text-xs">
                {/* Necessary Cookies */}
                <div className="p-3.5 bg-warmGray/40 rounded-xl border border-gray-100 flex items-start justify-between gap-4">
                  <div>
                    <div className="font-bold text-legalDark flex items-center gap-2">
                      Necessary Cookies
                      <span className="text-[10px] uppercase bg-tealAccent/20 text-legalDark px-2 py-0.5 rounded-full font-semibold">Always Active</span>
                    </div>
                    <p className="text-textMuted text-[11px] mt-1">Required for essential website navigation, form security, and legal portal access.</p>
                  </div>
                </div>

                {/* Performance & Analytics */}
                <div className="p-3.5 bg-white rounded-xl border border-gray-200 flex items-start justify-between gap-4">
                  <div>
                    <div className="font-bold text-legalDark">Performance & Analytics</div>
                    <p className="text-textMuted text-[11px] mt-1">Allows us to analyze visitor traffic to improve page load speed and user experience.</p>
                  </div>
                  <button
                    onClick={() => setPreferences({ ...preferences, analytics: !preferences.analytics })}
                    className={`w-6 h-6 rounded-md border flex items-center justify-center transition-colors shrink-0 ${
                      preferences.analytics ? "bg-legalDark border-legalDark text-tealAccent" : "border-gray-300"
                    }`}
                  >
                    {preferences.analytics && <Check className="w-4 h-4 stroke-[3]" />}
                  </button>
                </div>

                {/* Marketing Cookies */}
                <div className="p-3.5 bg-white rounded-xl border border-gray-200 flex items-start justify-between gap-4">
                  <div>
                    <div className="font-bold text-legalDark">Marketing & Relevance</div>
                    <p className="text-textMuted text-[11px] mt-1">Used to measure campaign performance and deliver relevant conveyancing insights.</p>
                  </div>
                  <button
                    onClick={() => setPreferences({ ...preferences, marketing: !preferences.marketing })}
                    className={`w-6 h-6 rounded-md border flex items-center justify-center transition-colors shrink-0 ${
                      preferences.marketing ? "bg-legalDark border-legalDark text-tealAccent" : "border-gray-300"
                    }`}
                  >
                    {preferences.marketing && <Check className="w-4 h-4 stroke-[3]" />}
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 justify-end pt-2 border-t border-gray-100">
                <button
                  onClick={handleDeclineAll}
                  className="px-4 py-2.5 text-xs font-semibold text-legalDark border border-gray-200 rounded-lg hover:bg-warmGray/50 transition-all"
                >
                  Decline All
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-4 py-2.5 text-xs font-semibold text-legalDark border border-legalDark rounded-lg hover:bg-warmGray/50 transition-all"
                >
                  Save Preferences
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-5 py-2.5 text-xs font-bold text-legalDark bg-tealAccent rounded-lg hover:shadow-md transition-all"
                >
                  Accept All
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
