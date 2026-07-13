"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "What are your conveyancing fees?", a: "We offer transparent, fixed-fee conveyancing with no hidden costs. The quote we provide upfront is the exact legal fee you pay. Use our fee calculator to get an instant quote." },
    { q: "How long does conveyancing take?", a: "On average, conveyancing takes 8-12 weeks, but our proactive approach and technology often allows us to complete faster than the industry average." },
    { q: "Do I need to visit your office?", a: "No. We handle the entire process remotely via email, telephone, and post. You never need to take time off work to visit us." },
    { q: "What happens if my transaction falls through?", a: "Under our 'No Completion, No Legal Fee' policy, if your transaction falls through, you won't pay our legal fees. Complete peace of mind." },
    { q: "Are you regulated?", a: "Yes. Quality Conveyancing is regulated by the Council for Licensed Conveyancers (CLC Practice No. 11359)." },
    { q: "Will I have a dedicated lawyer?", a: "Absolutely. Every client is assigned one dedicated property lawyer who handles your case from instruction to completion, with direct telephone and email access." },
  ];

  return (
    <section className="py-28 md:py-40 bg-warmGray">
      <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="text-tealAccent text-sm font-semibold tracking-[0.2em] uppercase mb-6">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold text-legalDark font-serif mb-6">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              className="border-b border-gray-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className="text-lg font-semibold text-legalDark group-hover:text-tealAccent transition-colors pr-4">
                  {faq.q}
                </span>
                <ChevronDown className={`w-5 h-5 text-textMuted shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-textMuted leading-relaxed pb-6 pr-12">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
