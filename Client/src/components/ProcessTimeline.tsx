"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileSignature, FolderSearch, FileText, Handshake, KeySquare, FileSpreadsheet, MessageSquareQuote, CheckCircle2 } from "lucide-react";

export default function ProcessTimeline() {
  const [activeTab, setActiveTab] = useState<"purchase" | "sale">("purchase");

  const purchaseSteps = [
    { 
      num: "01", 
      title: "Instruction & Setup", 
      description: "Once you instruct us, we send you a Welcome Pack to complete and assign your dedicated lawyer. We verify your ID, confirm your source of funds, and contact the seller's conveyancer.", 
      icon: FileSignature, 
      bg: "bg-emerald-50/60 border-emerald-100", 
      numColor: "text-emerald-700/40 group-hover:text-emerald-700/70", 
      iconBg: "bg-emerald-100 text-emerald-800" 
    },
    { 
      num: "02", 
      title: "Searches & Enquiries", 
      description: "We review the draft contract pack, order the necessary local property searches, and raise tailored legal enquiries with the seller’s lawyer to protect your interests.", 
      icon: FolderSearch, 
      bg: "bg-sky-50/60 border-sky-100", 
      numColor: "text-sky-700/40 group-hover:text-sky-700/70", 
      iconBg: "bg-sky-100 text-sky-800" 
    },
    { 
      num: "03", 
      title: "Report on Title", 
      description: "Once searches and enquiries are clear, we issue a comprehensive Report on Title along with your mortgage offer (if applicable) and legal contracts for you to sign and return.", 
      icon: FileText, 
      bg: "bg-teal-50/60 border-teal-100", 
      numColor: "text-teal-700/40 group-hover:text-teal-700/70", 
      iconBg: "bg-teal-100 text-teal-800" 
    },
    { 
      num: "04", 
      title: "Exchange of Contracts", 
      description: "You transfer your deposit to us, and contracts are formally exchanged. The purchase becomes legally binding, and your completion date is fixed.", 
      icon: Handshake, 
      bg: "bg-amber-50/60 border-amber-100", 
      numColor: "text-amber-700/40 group-hover:text-amber-700/70", 
      iconBg: "bg-amber-100 text-amber-800" 
    },
    { 
      num: "05", 
      title: "Completion & Keys", 
      description: "On completion day, we transfer the remaining purchase funds to the seller's lawyer. Once received, the keys are released, and you can move into your new home!", 
      icon: KeySquare, 
      bg: "bg-purple-50/60 border-purple-100", 
      numColor: "text-purple-700/40 group-hover:text-purple-700/70", 
      iconBg: "bg-purple-100 text-purple-800" 
    },
  ];

  const saleSteps = [
    { 
      num: "01", 
      title: "Instruction & Set Up", 
      description: "Once instructed, we send you a Welcome Pack and property information forms (TA6 & TA10) to complete. We also complete ID checks and obtain your title deeds from the Land Registry.", 
      icon: FileSignature, 
      bg: "bg-emerald-50/60 border-emerald-100", 
      numColor: "text-emerald-700/40 group-hover:text-emerald-700/70", 
      iconBg: "bg-emerald-100 text-emerald-800" 
    },
    { 
      num: "02", 
      title: "Draft Contract Pack", 
      description: "We draft the contract and assemble the legal documentation pack to send to the buyer’s solicitor so they can review the title and order their local searches.", 
      icon: FileSpreadsheet, 
      bg: "bg-sky-50/60 border-sky-100", 
      numColor: "text-sky-700/40 group-hover:text-sky-700/70", 
      iconBg: "bg-sky-100 text-sky-800" 
    },
    { 
      num: "03", 
      title: "Answering Enquiries", 
      description: "The buyer’s solicitor will raise legal enquiries about the property. We work directly with you to answer these questions and supply any required certificates or guarantees.", 
      icon: MessageSquareQuote, 
      bg: "bg-teal-50/60 border-teal-100", 
      numColor: "text-teal-700/40 group-hover:text-teal-700/70", 
      iconBg: "bg-teal-100 text-teal-800" 
    },
    { 
      num: "04", 
      title: "Exchange of Contracts", 
      description: "Once you sign the contract, the buyer pays a deposit and contracts are formally exchanged. The sale becomes legally binding, and the completion date is fixed.", 
      icon: Handshake, 
      bg: "bg-amber-50/60 border-amber-100", 
      numColor: "text-amber-700/40 group-hover:text-amber-700/70", 
      iconBg: "bg-amber-100 text-amber-800" 
    },
    { 
      num: "05", 
      title: "Completion & Funds", 
      description: "On completion day, we receive the remaining sale funds from the buyer, pay off any existing mortgage, settle estate agent fees, and transfer the net proceeds directly to you.", 
      icon: KeySquare, 
      bg: "bg-purple-50/60 border-purple-100", 
      numColor: "text-purple-700/40 group-hover:text-purple-700/70", 
      iconBg: "bg-purple-100 text-purple-800" 
    },
  ];

  const currentSteps = activeTab === "purchase" ? purchaseSteps : saleSteps;

  return (
    <section className="py-24 md:py-32 bg-warmGray/60 text-legalDark relative overflow-hidden" id="process">
      {/* Subtle glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tealAccent/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <p className="text-tealAccent text-sm font-bold tracking-[0.2em] uppercase mb-3">The Process</p>
          <h2 className="text-4xl md:text-5xl font-bold font-serif leading-tight mb-4 text-legalDark">
            What Happens Next
          </h2>
          <p className="text-legalDark/80 text-base md:text-lg max-w-2xl mx-auto font-medium mb-8">
            A transparent, step-by-step conveyancing roadmap designed for smooth completion.
          </p>

          {/* Process Switcher Tabs */}
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-gray-200 shadow-sm gap-2">
            <button
              onClick={() => setActiveTab("purchase")}
              className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                activeTab === "purchase"
                  ? "bg-legalDark text-white shadow-md"
                  : "text-legalDark/70 hover:text-legalDark hover:bg-gray-100/60"
              }`}
            >
              {activeTab === "purchase" && <CheckCircle2 className="w-4 h-4 text-tealAccent" />}
              The Purchase Process
            </button>
            <button
              onClick={() => setActiveTab("sale")}
              className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                activeTab === "sale"
                  ? "bg-legalDark text-white shadow-md"
                  : "text-legalDark/70 hover:text-legalDark hover:bg-gray-100/60"
              }`}
            >
              {activeTab === "sale" && <CheckCircle2 className="w-4 h-4 text-tealAccent" />}
              The Sale Process
            </button>
          </div>
        </motion.div>

        {/* Steps Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {currentSteps.map((step, index) => (
              <motion.div
                key={step.num + step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
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
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
