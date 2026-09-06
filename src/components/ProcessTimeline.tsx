"use client";

import { motion } from "framer-motion";
import { FileSignature, FolderSearch, FileText, Handshake, KeySquare } from "lucide-react";

export default function ProcessTimeline() {
  const steps = [
    { 
      num: "01", 
      title: "Instruction", 
      description: "If you are happy to instruct us, we will send you a Welcome Pack for you to complete and return to us. You will also be assigned a dedicated Lawyer.", 
      icon: FileSignature, 
      bg: "bg-emerald-50/60 border-emerald-100", 
      numColor: "text-emerald-700/40 group-hover:text-emerald-700/70", 
      iconBg: "bg-emerald-100 text-emerald-800" 
    },
    { 
      num: "02", 
      title: "Searches & Enquiries", 
      description: "We review title deeds, raise enquiries, and order the necessary local searches.", 
      icon: FolderSearch, 
      bg: "bg-sky-50/60 border-sky-100", 
      numColor: "text-sky-700/40 group-hover:text-sky-700/70", 
      iconBg: "bg-sky-100 text-sky-800" 
    },
    { 
      num: "03", 
      title: "Conveyancing Report", 
      description: "Once title checks are complete, we’ll send you the conveyancing report along with the legal documents for you to sign and return.", 
      icon: FileText, 
      bg: "bg-teal-50/60 border-teal-100", 
      numColor: "text-teal-700/40 group-hover:text-teal-700/70", 
      iconBg: "bg-teal-100 text-teal-800" 
    },
    { 
      num: "04", 
      title: "Exchange of Contracts", 
      description: "Contracts are formally exchanged. The transaction becomes legally binding.", 
      icon: Handshake, 
      bg: "bg-amber-50/60 border-amber-100", 
      numColor: "text-amber-700/40 group-hover:text-amber-700/70", 
      iconBg: "bg-amber-100 text-amber-800" 
    },
    { 
      num: "05", 
      title: "Completion", 
      description: "Funds are transferred, keys are handed over. Welcome to your new home.", 
      icon: KeySquare, 
      bg: "bg-purple-50/60 border-purple-100", 
      numColor: "text-purple-700/40 group-hover:text-purple-700/70", 
      iconBg: "bg-purple-100 text-purple-800" 
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-warmGray/60 text-legalDark relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tealAccent/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-tealAccent text-sm font-bold tracking-[0.2em] uppercase mb-3">The Process</p>
          <h2 className="text-4xl md:text-5xl font-bold font-serif leading-tight mb-4 text-legalDark">
            What Happens Next
          </h2>
          <p className="text-legalDark/80 text-base md:text-lg max-w-2xl mx-auto font-medium">
            A simplified, stress-free conveyancing workflow designed to keep you informed every step of the way.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group relative"
            >
              <div className={`border ${step.bg} bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-500 h-full flex flex-col justify-between`}>
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-4xl font-bold font-serif ${step.numColor} transition-colors`}>
                      {step.num}
                    </span>
                    <div className={`p-2.5 rounded-xl ${step.iconBg}`}>
                      <step.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold font-serif mb-2 text-legalDark">{step.title}</h3>
                  <p className="text-legalDark/75 text-xs sm:text-sm leading-relaxed font-normal">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
