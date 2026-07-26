"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

import desktopHeroImg from "@/assets/Christ_the_Saviour,_Ealing_Broadway.webp";
import mobileHeroImg from "@/assets/ph-Christ-The-Saviour-Church-Ealing.webp";

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Show initial images for 2 seconds before playing video on all screens
    const videoTimer = setTimeout(() => {
      setShowVideo(true);
    }, 3000);

    return () => clearTimeout(videoTimer);
  }, []);

  return (
    <section className="relative min-h-[550px] sm:min-h-screen h-screen w-full overflow-hidden bg-legalDark">
      {/* Background Image / Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/25 z-10"></div>
        
        {/* Mobile Initial Image (Visible for first 3 seconds on mobile) */}
        <div className={`block md:hidden absolute inset-0 transition-opacity duration-1000 ${
          showVideo ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}>
          <Image 
            src={mobileHeroImg}
            alt="Christ The Saviour Church Ealing Mobile"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Desktop/Tablet Initial Image (Visible for first 3 seconds on md+) */}
        <div className={`hidden md:block absolute inset-0 transition-opacity duration-1000 ${
          showVideo ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}>
          <Image 
            src={desktopHeroImg}
            alt="Christ the Saviour, Ealing Broadway Desktop"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Background video (Cover fill across full screen to remove black space) */}
        {showVideo && (
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 opacity-100"
          >
            <source src="/qc-hero-vid.mp4" type="video/mp4" />
          </video>
        )}
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
            className="text-xl md:text-2xl text-white/90 font-light tracking-wide"
          >
            Expert Property Solicitors
          </motion.p>

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
