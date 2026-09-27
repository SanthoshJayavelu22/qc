"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logoImg from "@/assets/qc-logo.png";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scroll while loader is visible
    document.body.style.overflow = "hidden";

    const handleLoad = () => {
      setIsLoading(false);
      document.body.style.overflow = "unset";
    };

    if (document.readyState === "complete") {
      // Small timeout to allow initial render smoothing
      const timer = setTimeout(handleLoad, 800);
      return () => clearTimeout(timer);
    } else {
      window.addEventListener("load", handleLoad);
      // Safety fallback timer if load event takes longer
      const timer = setTimeout(handleLoad, 2500);
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(timer);
        document.body.style.overflow = "unset";
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-white text-legalDark"
        >
          {/* Natural Sage Logo */}
          <div className="relative mb-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-52 h-18"
            >
              <Image
                src={logoImg}
                alt="Quality Conveyancing Logo"
                fill
                sizes="(max-width: 640px) 208px, 208px"
                priority
                className="object-contain"
              />
            </motion.div>
          </div>

          {/* Animated Sage Green Progress Bar */}
          <div className="w-48 h-1 bg-gray-100 rounded-full overflow-hidden relative">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                repeat: Infinity,
                duration: 1,
                ease: "easeInOut",
              }}
              className="w-full h-full bg-[#8CA46E] rounded-full"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs uppercase tracking-widest text-[#8CA46E] font-bold mt-4 font-serif"
          >
            Quality Conveyancing
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
