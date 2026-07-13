"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Insights() {
  const articles = [
    {
      title: "Understanding the Conveyancing Process",
      excerpt: "A comprehensive guide to what happens from the moment you instruct a solicitor to completion day.",
      image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "July 2026",
    },
    {
      title: "First-Time Buyer? What You Need to Know",
      excerpt: "Essential tips and legal considerations for those stepping onto the property ladder for the first time.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
      date: "June 2026",
    },
    {
      title: "Leasehold vs Freehold: Key Differences",
      excerpt: "Understanding the fundamental differences between leasehold and freehold properties in England and Wales.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80",
      date: "May 2026",
    },
  ];

  return (
    <section className="py-28 md:py-40 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <div>
            <p className="text-tealAccent text-sm font-semibold tracking-[0.2em] uppercase mb-6">Property Insights</p>
            <h2 className="text-4xl md:text-5xl font-bold text-legalDark font-serif">
              From Our Experts
            </h2>
          </div>
          <Link href="#" className="mt-6 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-legalDark tracking-wide uppercase border-b-2 border-tealAccent pb-1 hover:text-tealAccent transition-colors">
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-6">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="text-xs text-textMuted uppercase tracking-wider mb-3">{article.date}</p>
              <h3 className="text-xl font-bold font-serif text-legalDark mb-3 group-hover:text-tealAccent transition-colors">
                {article.title}
              </h3>
              <p className="text-textMuted text-sm leading-relaxed">{article.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
