"use client";

import { motion } from "framer-motion";
import { FileSignature, FolderSearch, Handshake, KeySquare } from "lucide-react";

export default function ProcessTimeline() {
  const steps = [
    { num: "01", title: "Instruction", description: "You instruct us and provide initial details. We assign your dedicated lawyer.", icon: FileSignature },
    { num: "02", title: "Searches & Enquiries", description: "We review title deeds, raise enquiries, and order the necessary local searches.", icon: FolderSearch },
    { num: "03", title: "Exchange of Contracts", description: "Contracts are formally exchanged. The transaction becomes legally binding.", icon: Handshake },
    { num: "04", title: "Completion", description: "Funds are transferred, keys are handed over. Welcome to your new home.", icon: KeySquare },
  ];

  return (
    <section className="py-28 md:py-40 bg-warmGray text-legalDark relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tealAccent/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <p className="text-tealAccent text-sm font-semibold tracking-[0.2em] uppercase mb-6">The Process</p>
          <h2 className="text-4xl md:text-5xl font-bold font-serif leading-tight mb-6">
            Clear Expert Guidance at<br />Every Stage
          </h2>
          <p className="text-textMuted text-lg max-w-2xl mx-auto">
            A simplified, stress-free conveyancing workflow designed to keep you in control.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              <div className="border border-legalDark/10 bg-white rounded-xl p-8 hover:border-tealAccent/30 hover:shadow-lg transition-all duration-500 h-full">
                <span className="text-5xl font-bold text-tealAccent/30 font-serif block mb-6 group-hover:text-tealAccent/60 transition-colors">
                  {step.num}
                </span>
                <step.icon className="w-6 h-6 text-tealAccent mb-4" />
                <h3 className="text-xl font-bold font-serif mb-3">{step.title}</h3>
                <p className="text-textMuted text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
