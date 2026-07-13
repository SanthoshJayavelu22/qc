"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function SocialProof() {
  const testimonials = [
    { name: "Yordan Stoyanov", role: "Property Purchase", content: "Manju S Mohan helped me purchase a property successfully. Quality Conveyancing Ltd were always easy to communicate with through email and phone. Their fees were clearly explained at the start... Really pleased with their services.", rating: 5 },
    { name: "Jennifer Schroeder", role: "Remortgage", content: "QC came highly recommended and didn’t disappoint. Sanju made our remortgage effortless with great communication and efficiency.", rating: 5 },
    { name: "Zoulla Constantinou", role: "Conveyancing Client", content: "I wanted to say what a great experience we had with Quality Conveyancing. They were professional, easy to liaise with, provided the personal touch and always understanding of all our requirements. We wouldn't hesitate to recommend them.", rating: 5 },
    { name: "J Unsworth", role: "First-time Buyer", content: "Recently completed on our first flat with QC and couldn't be happier with the service provided. Our solicitor (Chandni) was always available, clear with communications and just generally proactive at each step of the way.", rating: 5 },
    { name: "Nicolas Pottier", role: "First-time Buyer", content: "We recently purchased our first house with Quality Conveyancing and have nothing but praise for the team especially Ayushi who helped us through every stage. The team responded to queries promptly and with a high degree of professionalism.", rating: 5 }
  ];

  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <section className="py-32 bg-[#050B14] relative overflow-hidden border-b border-white/5">
      {/* Background decorations */}
      <div className="absolute left-[-20%] top-[-10%] w-[50%] h-[50%] bg-cyanAccent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Don't Just Take <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyanAccent to-blue-500">Our Word For It</span>
            </h2>
            <p className="text-gray-400 text-xl font-light">
              Join thousands of satisfied clients who have experienced our seamless, tech-driven property law service.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <div className="text-right">
              <div className="flex gap-1 text-yellow-400 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]" />)}
              </div>
              <p className="text-white font-bold text-lg">4.9/5 Average</p>
              <p className="text-cyanAccent text-sm">Based on 500+ reviews</p>
            </div>
          </motion.div>
        </div>

        {/* Draggable Carousel */}
        <motion.div 
          ref={carousel} 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="cursor-grab active:cursor-grabbing overflow-hidden"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="min-w-[320px] md:min-w-[450px] bg-white/[0.02] border border-white/10 rounded-3xl p-10 hover:bg-white/[0.04] transition-colors relative group"
              >
                <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 group-hover:text-cyanAccent/10 transition-colors" />
                <div className="flex gap-1 text-yellow-400 mb-6 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-8 relative z-10 font-light italic">
                  "{testimonial.content}"
                </p>
                <div className="relative z-10">
                  <p className="text-white font-bold text-lg">{testimonial.name}</p>
                  <p className="text-cyanAccent text-sm">{testimonial.role}</p>
                </div>
                
                {/* Hover Glow */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyanAccent/20 rounded-3xl transition-colors duration-500 pointer-events-none"></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Swipe Hint */}
        <div className="mt-8 text-center text-gray-500 text-sm flex items-center justify-center gap-2">
           <span className="w-8 h-[1px] bg-gray-600"></span>
           Swipe to read more
           <span className="w-8 h-[1px] bg-gray-600"></span>
        </div>
      </div>
    </section>
  );
}
