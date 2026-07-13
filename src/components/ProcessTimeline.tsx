"use client";

import { motion } from "framer-motion";
import { FileSignature, FolderSearch, Handshake, KeySquare } from "lucide-react";

export default function ProcessTimeline() {
  const steps = [
    {
      title: "Instruction",
      description: "You instruct us and provide initial details. We assign your dedicated lawyer.",
      icon: <FileSignature className="w-8 h-8 text-cyanAccent group-hover:scale-110 transition-transform duration-500" />
    },
    {
      title: "Document Assembly & Searches",
      description: "We review title deeds, raise enquiries, and order the necessary local searches.",
      icon: <FolderSearch className="w-8 h-8 text-cyanAccent group-hover:scale-110 transition-transform duration-500" />
    },
    {
      title: "Exchange of Contracts",
      description: "Contracts are formally exchanged. The transaction becomes legally binding.",
      icon: <Handshake className="w-8 h-8 text-cyanAccent group-hover:scale-110 transition-transform duration-500" />
    },
    {
      title: "Completion",
      description: "Funds are transferred, keys are handed over. Welcome to your new home.",
      icon: <KeySquare className="w-8 h-8 text-cyanAccent group-hover:scale-110 transition-transform duration-500" />
    }
  ];

  return (
    <section className="py-32 bg-[#050B14] relative overflow-hidden border-b border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-cyanAccent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <p className="text-cyanAccent font-bold tracking-widest uppercase text-xs mb-4">
            The Conveyancing Process
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            How It Works
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyanAccent to-blue-500 mx-auto mb-8 rounded-full shadow-[0_0_10px_rgba(0,255,255,0.5)]"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl font-light">
            A simplified, stress-free conveyancing workflow designed to keep you in control.
          </p>
        </motion.div>

        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-[2px] bg-white/10" />
          {/* Animated Progress Line */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "76%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            className="hidden lg:block absolute top-12 left-[12%] h-[2px] bg-gradient-to-r from-cyanAccent to-blue-500 shadow-[0_0_10px_rgba(0,255,255,0.5)]" 
          />
          
          <div className="grid lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.2, 
                  duration: 0.6, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 bg-[#0a1120] border border-white/20 shadow-[0_0_20px_rgba(0,255,255,0.05)] group-hover:shadow-[0_0_30px_rgba(0,255,255,0.15)] group-hover:border-cyanAccent/50 rounded-full flex items-center justify-center z-10 mb-8 relative transition-all duration-500">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyanAccent rounded-full text-[#050B14] font-extrabold flex items-center justify-center text-sm shadow-[0_0_10px_rgba(0,255,255,0.5)] border-2 border-[#050B14]">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyanAccent transition-colors duration-300">{step.title}</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed max-w-xs">{step.description}</p>
                
                {/* Vertical Line for Mobile */}
                {index !== steps.length - 1 && (
                  <div className="lg:hidden w-[2px] h-16 bg-gradient-to-b from-cyanAccent/50 to-white/5 mt-8" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
