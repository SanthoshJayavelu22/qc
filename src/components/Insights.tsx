"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

export default function Insights() {
  const articles = [
    {
      title: "The Ultimate Guide to Buying a New Build Property",
      category: "Property Guide",
      date: "August 12, 2024",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Understanding the Building Safety Act 2022",
      category: "Legal Insights",
      date: "July 28, 2024",
      image: "https://images.unsplash.com/photo-1577416412292-747c6607f055?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Navigating Leasehold Extensions: What You Need to Know",
      category: "News",
      date: "July 15, 2024",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    }
  ];

  return (
    <section className="py-32 bg-[#030712] relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <motion.div 
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
               <BookOpen className="w-4 h-4 text-blue-400" />
               <p className="text-blue-400 font-bold tracking-widest uppercase text-xs">Knowledge Base</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Insights From Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyanAccent to-blue-500">Conveyancing Experts</span>
            </h2>
            <p className="text-gray-400 text-xl font-light">
              Stay up to date with the latest property law news, insights, and comprehensive guides.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <Link href="#" className="hidden md:flex items-center gap-2 text-white font-bold hover:text-cyanAccent transition-all hover:gap-4">
              View All Articles <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
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
              className="group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden rounded-2xl mb-6 shadow-2xl bg-[#0a1120] border border-white/10">
                {/* Fallback pattern if image fails to load */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
                
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 bg-[#050B14]/80 backdrop-blur-md border border-white/10 text-cyanAccent text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-[0_0_10px_rgba(0,255,255,0.2)]">
                  {article.category}
                </div>
              </div>
              <div>
                <p className="text-gray-400 text-sm font-medium mb-3">{article.date}</p>
                <h3 className="text-2xl font-bold text-white leading-tight mb-4 group-hover:text-cyanAccent transition-colors duration-300">
                  {article.title}
                </h3>
                <div className="w-12 h-1 bg-white/10 rounded-full group-hover:w-full group-hover:bg-cyanAccent transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
