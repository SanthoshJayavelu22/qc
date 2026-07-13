"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import logoImg from "@/assets/qc-logo.png";

export default function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Safety fallback: if the video takes too long or fails to trigger the event,
  // we still fade out the loader after a few seconds so the site isn't permanently blocked.
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideoLoaded(true);
    }, 4000); // 4 seconds fallback
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {!isVideoLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-lightBg flex flex-col items-center justify-center"
          >
            <div className="relative w-48 h-16 mb-8 animate-pulse">
              <Image 
                src={logoImg} 
                alt="Quality Conveyancing" 
                fill 
                className="object-contain" 
                priority 
              />
            </div>
            <div className="flex gap-2">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                  className="w-2.5 h-2.5 rounded-full bg-tealAccent"
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            preload="auto"
            onCanPlayThrough={() => setIsVideoLoaded(true)}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/qc-hero-vid.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Centered Content */}
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center px-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isVideoLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white font-serif tracking-tight leading-[1.1]"
            >
              Quality Conveyancing
            </motion.h1>
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isVideoLoaded ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="w-20 h-[2px] bg-tealAccent mx-auto my-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVideoLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl md:text-2xl text-white/90 font-light tracking-wide"
            >
              Expert Property Solicitors
            </motion.p>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isVideoLoaded ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.7 }}
              className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/60 to-transparent"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
