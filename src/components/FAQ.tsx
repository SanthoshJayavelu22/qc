"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { 
      q: "What is Conveyancing?", 
      a: "Conveyancing is the legal process of transferring property ownership from one person to another. It involves various legal and administrative tasks to ensure a smooth and lawful property transaction." 
    },
    { 
      q: "What Does a Conveyancer Do?", 
      a: "A conveyancer is a licensed professional who handles the legal aspects of property transactions. They manage tasks such as property searches, contracts, title transfers, and ensuring all legal requirements are met." 
    },
    { 
      q: "Why Should I Choose Your Conveyancing Services?", 
      a: "We stand out for our commitment to transparency, providing transparent quotes and ensuring zero hidden fees throughout the conveyancing process. Additionally, our dedicated support, direct conveyancer dial, and 80% faster completion rate guarantee a seamless experience from start to finish." 
    },
    { 
      q: "How Long Does Conveyancing Take?", 
      a: "The time for conveyancing can vary based on individual circumstances. On average, it takes between 8 to 12 weeks, but our tech-driven proactive workflow allows us to complete transactions up to 80% faster than the national average." 
    },
    { 
      q: "What Happens at Exchange of Contracts?", 
      a: "The exchange of contracts is a crucial stage in a property transaction where both parties become legally bound. Once the buyer pays the deposit and contracts are exchanged, the sale becomes legally binding." 
    },
    { 
      q: "How Does Your Company Ensure Transparency in Pricing?", 
      a: "Our free instant quote generator offers a clear itemised breakdown of costs, eliminating ambiguity in pricing. We believe in complete transparency, ensuring our clients are well-informed about all expenses involved in their property transactions from day one." 
    },
    { 
      q: "What Happens on Completion Day?", 
      a: "Completion day is when the property officially changes ownership. The remaining balance of funds is transferred via CHAPS, and the estate agent releases the keys, marking the successful completion of the transaction." 
    },
    { 
      q: "What is Stamp Duty?", 
      a: "Stamp Duty Land Tax (SDLT) is a tax levied on property transactions above a certain value. The amount payable varies based on the property’s price, lease structure, and whether it’s your primary residence or an additional property." 
    },
    { 
      q: "How much deposit do I need to pay on exchange?", 
      a: "Typically, a 10% deposit of the total purchase price is paid to your conveyancer upon exchange of contracts. In some cases, sellers may agree to a reduced 5% deposit, particularly if you are using a high loan-to-value mortgage or selling a property simultaneously in a chain." 
    },
    { 
      q: "Can Conveyancing be Done Remotely?", 
      a: "Yes, conveyancing can be conducted 100% remotely. Technological advancements, secure digital identity checks, electronic signatures, and online communication allow buyers and sellers to complete transactions seamlessly from anywhere without visiting our offices." 
    },
    { 
      q: "Do you handle auction properties?", 
      a: "Yes, we do! Our experienced conveyancing team regularly handles auction sales and purchases, ensuring your legal pack is checked and contracts are completed within the strict auction deadlines." 
    },
    { 
      q: "What Sets Your Conveyancing Support Apart from Others?", 
      a: "Our team comprises seasoned specialists dedicated to guiding you through every step of the process. From initial queries to finalising contracts, we offer direct solicitor contact without call centres, ensuring your peace of mind and complete satisfaction." 
    },
    { 
      q: "Can you act for both the buyer and the seller?", 
      a: "Yes, we can. As a practice regulated by the Council for Licensed Conveyancers (CLC), we are permitted to act for both parties in a transaction under strict regulatory safeguards. To ensure total fairness and protect your interests, separate independent conveyancers within our firm will handle each side, maintaining complete confidentiality and avoiding any conflict of interest." 
    },
    { 
      q: "How Does Your Company Guarantee a Stress-Free Conveyancing Journey?", 
      a: "Our commitment to handling the entire conveyancing process from initiation to completion allows our clients to relax and trust in our expertise. We handle all legal complexities, offer direct conveyancer access, and enforce strict internal chase limits to make your journey stress-free and worry-free." 
    },
    { 
      q: "Are you on the panel for major mortgage lenders?", 
      a: "Yes, Quality Conveyancing is approved and registered on the legal panel for all major UK mortgage lenders, ensuring we can act for both you and your lender seamlessly." 
    },
    { 
      q: "Are you authorized and regulated?", 
      a: "Yes. Quality Conveyancing is authorized and regulated by the Council for Licensed Conveyancers (CLC Practice No. 11359)." 
    },
  ];

  return (
    <section className="py-24 md:py-36 bg-warmGray/50 text-legalDark" id="faqs">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-tealAccent/20 text-tealAccent text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" /> Expert Answers to Common Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-legalDark font-serif mb-4 leading-tight">
            Find out more about our services & conveyancing
          </h2>
          <p className="text-legalDark/75 text-base md:text-lg max-w-2xl mx-auto">
            Everything you need to know about buying, selling, remortgaging, and property legal processes.
          </p>
        </motion.div>

        {/* 2 Independent Columns Grid */}
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {/* Column 1 */}
          <div className="space-y-6">
            {faqs.filter((_, i) => i % 2 === 0).map((faq, idx) => {
              const originalIndex = idx * 2;
              return (
                <motion.div
                  key={originalIndex}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04, duration: 0.5 }}
                  className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-all"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === originalIndex ? null : originalIndex)}
                    className="w-full flex items-center justify-between text-left group gap-4 min-h-[48px]"
                  >
                    <span className={`text-base md:text-lg font-bold font-serif transition-colors leading-snug ${
                      openIndex === originalIndex ? "text-tealAccent" : "text-legalDark group-hover:text-tealAccent"
                    }`}>
                      {faq.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      openIndex === originalIndex ? "bg-legalDark text-white rotate-180" : "bg-warmGray text-legalDark group-hover:bg-tealAccent/20"
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  <AnimatePresence>
                    {openIndex === originalIndex && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-legalDark/80 text-xs md:text-sm leading-relaxed pt-3 border-t border-gray-100 mt-3 font-light">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            {faqs.filter((_, i) => i % 2 !== 0).map((faq, idx) => {
              const originalIndex = idx * 2 + 1;
              return (
                <motion.div
                  key={originalIndex}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.04, duration: 0.5 }}
                  className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm hover:shadow-md transition-all"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === originalIndex ? null : originalIndex)}
                    className="w-full flex items-center justify-between text-left group gap-4 min-h-[48px]"
                  >
                    <span className={`text-base md:text-lg font-bold font-serif transition-colors leading-snug ${
                      openIndex === originalIndex ? "text-tealAccent" : "text-legalDark group-hover:text-tealAccent"
                    }`}>
                      {faq.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      openIndex === originalIndex ? "bg-legalDark text-white rotate-180" : "bg-warmGray text-legalDark group-hover:bg-tealAccent/20"
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  <AnimatePresence>
                    {openIndex === originalIndex && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-legalDark/80 text-xs md:text-sm leading-relaxed pt-3 border-t border-gray-100 mt-3 font-light">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
