"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Commitment() {
  const commitments = [
    { num: "01", title: "Clear legal guidance", description: "You will always get straightforward, honest advice, with regular updates to keep you clear on the way forward." },
    { num: "02", title: "Specialist knowledge", description: "A wide-ranging team of trusted specialists who understand what it takes to protect your future, your family or your business." },
    { num: "03", title: "Your needs first", description: "Whether you're navigating complex personal situations or business decisions, we take the time to understand your world and what's at stake." }
  ];

  return (
    <section className="py-28 md:py-40 bg-warmGray">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden order-2 lg:order-1"
          >
            <Image
              src="https://images.unsplash.com/photo-1698047682091-782b1e5c6536?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Professional Team Meeting"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            <p className="text-tealAccent text-sm font-semibold tracking-[0.2em] uppercase mb-6">Our Promise</p>
            <h2 className="text-4xl md:text-5xl font-bold text-legalDark font-serif leading-tight mb-6">
              Our Commitment to You
            </h2>
            <p className="text-textMuted text-lg leading-relaxed mb-12">
              Our experts always start by listening, so we understand what matters most from day one.
            </p>

            <div className="flex flex-col gap-8">
              {commitments.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="flex gap-6 group"
                >
                  <span className="text-4xl font-bold text-tealAccent/30 font-serif shrink-0 leading-none group-hover:text-tealAccent transition-colors duration-300">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold font-serif text-legalDark mb-2">{item.title}</h3>
                    <p className="text-textMuted leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
