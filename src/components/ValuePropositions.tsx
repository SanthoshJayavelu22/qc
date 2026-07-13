"use client";

import { motion } from "framer-motion";
import { UserCheck, PhoneCall, ShieldCheck, Ban, Clock, Star } from "lucide-react";

export default function ValuePropositions() {
  const cards = [
    { title: "Fast Service", icon: Clock, description: "80% faster completion rate than the industry average through innovative technology." },
    { title: "Proactive Conveyancers", icon: UserCheck, description: "Every day spent waiting is time wasted. We chase progress so you don't have to." },
    { title: "Direct Line", icon: PhoneCall, description: "Direct number to your dedicated conveyancer. No call centres, no runarounds." },
    { title: "Trusted Service", icon: ShieldCheck, description: "Recommended by estate agents and mortgage advisors who trust our reliability." },
    { title: "Stress Free", icon: Ban, description: "Handle everything by email, phone, and post. No need to take time off work." },
    { title: "Client-Focused", icon: Star, description: "We work closely with you to understand your specific goals and objectives." },
  ];

  return (
    <section className="py-28 md:py-40 bg-warmGray">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <p className="text-tealAccent text-sm font-semibold tracking-[0.2em] uppercase mb-6">Why Us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-legalDark font-serif mb-6">
            Why Choose Quality Conveyancing?
          </h2>
          <p className="text-textMuted text-lg max-w-2xl mx-auto">
            We set the standard for modern property law with expert knowledge and tech-driven service.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-500"
            >
              <card.icon className="w-6 h-6 text-tealAccent mb-5" />
              <h3 className="text-lg font-bold font-serif text-legalDark mb-3 group-hover:text-tealAccent transition-colors">
                {card.title}
              </h3>
              <p className="text-textMuted text-sm leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
