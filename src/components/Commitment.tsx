"use client";

import { motion } from "framer-motion";

export default function Commitment() {
  const commitments = [
    {
      num: "01",
      title: "Clear legal guidance",
      description: "You will always get straightforward, honest advice, with regular updates to keep you clear on the way forward."
    },
    {
      num: "02",
      title: "Specialist knowledge",
      description: "A wide-ranging team of trusted specialists who understand what it takes to protect your future, your family or your business."
    },
    {
      num: "03",
      title: "Your needs first",
      description: "Whether you’re navigating complex personal situations or business decisions, we take the time to understand your world and what’s at stake."
    }
  ];

  return (
    <section className="py-32 bg-[#050B14] relative overflow-hidden border-b border-white/5">
      {/* Background Decor */}
      <div className="absolute left-[-10%] top-[20%] w-[50%] h-[50%] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Header Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-1/3"
          >
            <p className="text-cyanAccent font-bold tracking-widest uppercase text-xs mb-4">
              Dedicated to You
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Our commitment <br className="hidden lg:block"/> to you
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyanAccent to-blue-500 mb-8 rounded-full shadow-[0_0_10px_rgba(0,255,255,0.5)]"></div>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Our experts always start by listening, so we understand what matters most from day one.
            </p>
          </motion.div>

          {/* List Column */}
          <div className="lg:w-2/3 flex flex-col gap-10">
            {commitments.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.15, 
                  duration: 0.6, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="group relative flex flex-col md:flex-row gap-6 md:gap-10 p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-cyanAccent/30 transition-all duration-500 overflow-hidden"
              >
                {/* Number */}
                <div className="shrink-0 flex items-start">
                  <span className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent group-hover:from-cyanAccent/50 transition-colors duration-500">
                    {item.num}
                  </span>
                </div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyanAccent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>

                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyanAccent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
