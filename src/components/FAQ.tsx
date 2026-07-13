"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "How long does the conveyancing process typically take?",
      answer: "While every transaction is unique, a standard residential purchase or sale typically takes between 8 to 12 weeks. Because we leverage modern technology, our completion rate is generally 80% faster than the industry average, depending on third parties in the chain."
    },
    {
      question: "What are the typical disbursements (third-party costs) involved?",
      answer: "Disbursements usually include local authority searches, land registry fees, and Stamp Duty Land Tax (SDLT). When we provide your fixed-fee quote, we include a full, transparent breakdown of all expected disbursements so there are no hidden surprises."
    },
    {
      question: "Do I need to visit your office in person?",
      answer: "Not at all. We provide a stress-free service where we can handle the entire cosmopolitan transaction flawlessly via email, telephone, and post. You will also have a direct line to your dedicated lawyer."
    },
    {
      question: "What is a 'Fixed-Fee' guarantee?",
      answer: "Our Fixed-Fee guarantee means that the legal fee we quote you at the beginning of the transaction is exactly what you will pay upon completion. We don't believe in hidden fees or charging by the hour for standard conveyancing work."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-[#050B14] relative overflow-hidden border-b border-white/5">
      {/* Background glow */}
      <div className="absolute right-[-10%] bottom-[-10%] w-[60%] h-[60%] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-cyanAccent/10 border border-cyanAccent/20 rounded-full px-4 py-1.5 mb-6">
             <Sparkles className="w-4 h-4 text-cyanAccent" />
             <p className="text-cyanAccent font-bold tracking-widest uppercase text-xs">Got Questions?</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Some of Our Most Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-xl font-light">
            Find answers to common queries about our conveyancing services and property law.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.6, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isActive 
                    ? "bg-white/[0.05] border-cyanAccent/30 shadow-[0_0_30px_rgba(0,255,255,0.05)]" 
                    : "bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-white/10"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
                >
                  <span className={`font-bold text-lg pr-8 transition-colors ${isActive ? 'text-cyanAccent' : 'text-white group-hover:text-cyanAccent/80'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isActive ? 'bg-cyanAccent text-[#050B14]' : 'bg-white/5 text-gray-400 group-hover:bg-white/10'}`}>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-500 ${isActive ? "rotate-180" : ""}`}
                    />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <div className="px-6 md:px-8 pb-8 text-gray-400 leading-relaxed font-light text-lg">
                        <div className="w-full h-[1px] bg-white/5 mb-6"></div>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
