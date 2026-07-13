"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Image from "next/image";

import brindaImg from "@/assets/Brinda-N.webp";
import jayshreeImg from "@/assets/Jayshree-C.webp";
import patImg from "@/assets/Pat-N_1.webp";

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);

export default function Team() {
  const team = [
    {
      name: "Brinda Nicholson",
      role: "Director & Head of Property Team",
      image: brindaImg,
    },
    {
      name: "Jayshree Chudasama",
      role: "Director & Conveyancing Manager",
      image: jayshreeImg,
    },
    {
      name: "Pat Nathan",
      role: "Business Development Manager",
      image: patImg,
    }
  ];

  return (
    <section className="py-32 bg-[#030712] relative overflow-hidden border-b border-white/5">
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <p className="text-cyanAccent font-bold tracking-widest uppercase text-xs mb-4">
            The Experts Behind the Brand
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Meet Our Leadership
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyanAccent to-blue-500 mx-auto mb-8 rounded-full shadow-[0_0_10px_rgba(0,255,255,0.5)]"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl font-light">
            Decades of collective experience dedicated to making your property transaction seamless.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: index * 0.15, 
                duration: 0.6, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-[#0a1120] border border-white/10 aspect-[3/4] mb-6 shadow-2xl">
                {/* Image Placeholder with Gradient Hover Reveal */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a1120]/30 to-[#0a1120] z-10 pointer-events-none group-hover:opacity-70 transition-opacity duration-500"></div>
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  placeholder="blur"
                  fill 
                  className="object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 z-0" 
                />
                
                {/* Social Overlay Reveal */}
                <div className="absolute inset-x-0 bottom-0 p-6 z-20 flex justify-center gap-4 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-black/80 to-transparent pt-12">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-cyanAccent hover:text-black transition-colors"><LinkedinIcon /></a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-cyanAccent hover:text-black transition-colors"><TwitterIcon /></a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-cyanAccent hover:text-black transition-colors"><Mail className="w-4 h-4" /></a>
                </div>
                
                {/* Border Glow on Hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyanAccent/30 rounded-2xl transition-colors duration-500 pointer-events-none z-30"></div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyanAccent transition-colors">{member.name}</h3>
                <p className="text-gray-400 text-sm font-bold uppercase tracking-wider">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
