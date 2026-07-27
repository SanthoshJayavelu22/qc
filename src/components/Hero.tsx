"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[550px] sm:min-h-screen h-screen w-full overflow-hidden bg-legalDark">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/25 z-10"></div>
        
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/qc-hero-vid.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Centered Content */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white font-serif tracking-tight leading-[1.1]"
          >
            Quality Conveyancing
          </motion.h1>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-20 h-[2px] bg-tealAccent mx-auto my-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-xl md:text-2xl text-white/90 font-light tracking-wide mb-8"
          >
            Expert Property Solicitors
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a
              href="/quote"
              className="px-8 py-3.5 bg-tealAccent text-legalDark font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-white transition-all shadow-lg hover:shadow-tealAccent/20"
            >
              Get Instant Quote
            </a>
            <a
              href="tel:02037636767"
              className="px-8 py-3.5 bg-white/10 text-white border border-white/20 font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-white/20 transition-all backdrop-blur-sm"
            >
              Call 020 3763 6767
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
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
  );
}
