"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

export default function SocialProof() {
  const testimonials = [
    { name: "Sarah T.", text: "Quality Conveyancing made our first home purchase completely stress-free. Our dedicated lawyer was always available and kept us informed every step of the way.", rating: 5 },
    { name: "James & Emily R.", text: "Exceptional service from start to finish. The fixed-fee structure meant no surprises, and the team were incredibly proactive in chasing progress.", rating: 5 },
    { name: "Michael P.", text: "I've used Quality Conveyancing twice now and both experiences have been outstanding. Their attention to detail and communication is second to none.", rating: 5 },
  ];

  return (
    <section className="py-28 md:py-40 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
              alt="London Architecture"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-tealAccent text-sm font-semibold tracking-[0.2em] uppercase mb-6">Endorsements</p>
            <h2 className="text-4xl md:text-5xl font-bold text-legalDark font-serif leading-tight mb-12">
              What Our Clients Say
            </h2>

            <div className="flex flex-col gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="border-l-2 border-tealAccent pl-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-textMuted leading-relaxed mb-3 italic">&ldquo;{t.text}&rdquo;</p>
                  <p className="text-legalDark font-semibold text-sm">{t.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
