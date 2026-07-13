"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, ShieldCheck, UserCheck, Ban, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#030712] relative overflow-hidden py-16 lg:py-24 min-h-[85vh] flex items-center border-b border-white/5">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-radial-gradient from-cyanAccent/10 to-transparent blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-radial-gradient from-blue-600/10 to-transparent blur-[100px]"
        />
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Reviews Pill */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2 mb-10 shadow-[0_0_30px_rgba(0,255,255,0.1)] cursor-pointer"
            >
              <div className="flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current drop-shadow-[0_0_5px_rgba(250,204,21,0.5)]" />
                ))}
              </div>
              <span className="text-sm font-bold text-gray-200">4.9/5 Average Rating</span>
              <span className="w-1 h-1 rounded-full bg-white/30"></span>
              <span className="text-sm text-cyanAccent font-medium flex items-center gap-1">
                Read Reviews <Sparkles className="w-3 h-3" />
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tighter mb-6">
              Expert Property Solicitors.<br />
              <span className="text-white">
                Dedicated to Your Move.
              </span>
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-3xl mx-auto">
              Established in 2012, Quality Conveyancing is a premier firm of <strong className="font-semibold text-gray-300">Conveyancing Solicitors London</strong>. Based in Ealing (W5), our specialist <strong className="font-semibold text-gray-300">Property Solicitors Ealing</strong> deliver swift, transparent, fixed-fee legal services with one dedicated lawyer from instruction to completion.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
              <Link 
                href="#"
                className="group relative w-full sm:w-auto bg-cyanAccent text-legalDark font-bold text-lg px-8 py-4 rounded overflow-hidden shadow-[0_0_40px_rgba(0,255,255,0.3)] hover:shadow-[0_0_60px_rgba(0,255,255,0.5)] transition-all"
              >
                <div className="absolute inset-0 w-full h-full bg-white/30 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></div>
                <span className="relative flex items-center justify-center gap-2">
                  Request a Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link 
                href="#"
                className="w-full sm:w-auto bg-white/5 backdrop-blur-sm border border-white/20 text-white font-bold text-lg px-8 py-4 rounded hover:bg-white/10 hover:border-white/40 transition-all flex items-center justify-center"
              >
                Instruct Us Online
              </Link>
            </div>
          </motion.div>

          {/* Key Trust Signals (Floating 3D Glass Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            {[
              { icon: Ban, title: "No Completion, No Legal Fee", desc: "Complete peace of mind. If your transaction falls through, you won't pay our legal fees." },
              { icon: ShieldCheck, title: "Transparent Fixed Fees", desc: "The quote we provide is the exact legal fee you pay. Zero hidden costs or surprises." },
              { icon: UserCheck, title: "One Dedicated Lawyer", desc: "Direct telephone and email access to your personal property lawyer throughout." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 + (idx * 0.1) }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center flex flex-col items-center gap-4 hover:bg-white/[0.05] hover:border-cyanAccent/50 transition-colors shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyanAccent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center text-cyanAccent shadow-[inset_0_0_15px_rgba(0,255,255,0.1)] relative z-10 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-white text-lg relative z-10">{item.title}</h3>
                <p className="text-sm text-gray-400 relative z-10 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
