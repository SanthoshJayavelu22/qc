"use client";

import { useState } from "react";
import { Calculator, PoundSterling, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FeeCalculator() {
  const [transactionType, setTransactionType] = useState("Purchase");
  const [tenureType, setTenureType] = useState("Freehold");
  const [clients, setClients] = useState(1);
  const [propertyValue, setPropertyValue] = useState("");

  const transactionTypes = [
    "Sale", "Purchase", "Sale & Purchase", "Re-Mortgage", 
    "Transfer of Equity", "Commercial Sale", "Commercial Purchase"
  ];

  return (
    <section className="py-28 md:py-40 bg-warmGray text-legalDark relative overflow-hidden">
      {/* Background accents using the requested color */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-tealAccent opacity-[0.05] rounded-full blur-[150px] pointer-events-none mix-blend-multiply"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-tealAccent opacity-[0.03] rounded-full blur-[120px] pointer-events-none mix-blend-multiply"></div>

      <div className="container mx-auto px-6 lg:px-12 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <div className="w-12 h-12 bg-[#00FFEF40] rounded-xl flex items-center justify-center mb-8 border border-tealAccent/30">
              <Calculator className="text-tealAccent w-6 h-6" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 leading-tight">
              Instant Quote Generator
            </h2>
            <p className="text-textMuted text-lg leading-relaxed mb-8">
              Receive a clear, fixed fee quote tailored to your transaction — transparent, accurate, and free from hidden costs.
            </p>
            <div className="h-[1px] w-full bg-legalDark/10 mb-8"></div>
            <ul className="space-y-4">
              {['No hidden costs', 'No completion, no fee', 'Direct lawyer access'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-legalDark/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-tealAccent"></div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 bg-white border border-legalDark/10 rounded-2xl p-8 md:p-10 shadow-xl relative"
          >
            {/* Inner glow for form */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-legalDark/5 pointer-events-none"></div>
            
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-8">
              
              {/* Transaction Type */}
              <div className="flex flex-col gap-3">
                <label className="text-xs font-semibold text-textMuted uppercase tracking-widest">What can we help you with?</label>
                <div className="relative">
                  <select 
                    value={transactionType}
                    onChange={(e) => setTransactionType(e.target.value)}
                    className="w-full bg-lightBg border border-legalDark/20 rounded-lg px-4 py-4 text-legalDark focus:outline-none focus:border-tealAccent focus:bg-white transition-all appearance-none cursor-pointer hover:border-legalDark/40"
                  >
                    {transactionTypes.map(type => (
                      <option key={type} value={type} className="bg-white text-legalDark">{type}</option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-legalDark/60"></div>
                </div>
              </div>

              {/* Property Value */}
              <div className="flex flex-col gap-3">
                <label className="text-xs font-semibold text-textMuted uppercase tracking-widest">Property Value</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <PoundSterling className="h-4 w-4 text-legalDark/40" />
                  </div>
                  <input
                    type="number"
                    placeholder="e.g. 350000"
                    value={propertyValue}
                    onChange={(e) => setPropertyValue(e.target.value)}
                    className="w-full bg-lightBg border border-legalDark/20 rounded-lg pl-10 pr-4 py-4 text-legalDark placeholder:text-legalDark/30 focus:outline-none focus:border-tealAccent focus:bg-white transition-all hover:border-legalDark/40"
                  />
                </div>
              </div>

              {/* Tenure Type */}
              <div className="flex flex-col gap-3">
                <label className="text-xs font-semibold text-textMuted uppercase tracking-widest">Property Tenure</label>
                <div className="flex bg-lightBg border border-legalDark/20 rounded-lg p-1.5 relative">
                  {['Freehold', 'Leasehold'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setTenureType(type)}
                      className={`flex-1 py-2.5 text-sm font-semibold rounded-md transition-all z-10 ${
                        tenureType === type ? 'text-white' : 'text-legalDark/60 hover:text-legalDark'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                  <motion.div 
                    layout
                    className="absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-tealAccent rounded-md z-0 shadow-sm"
                    animate={{ left: tenureType === 'Freehold' ? '6px' : 'calc(50% + 3px)' }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                </div>
              </div>

              {/* Number of Buyers/Clients */}
              <div className="flex flex-col gap-3">
                <label className="text-xs font-semibold text-textMuted uppercase tracking-widest">Number of Buyers</label>
                <div className="flex bg-lightBg border border-legalDark/20 rounded-lg p-1.5 relative">
                  {[1, 2, 3, 4].map((num) => (
                    <button
                      key={num}
                      onClick={() => setClients(num)}
                      className={`flex-1 py-2.5 text-sm font-semibold rounded-md transition-all z-10 ${
                        clients === num ? 'text-white' : 'text-legalDark/60 hover:text-legalDark'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                  <motion.div 
                    layout
                    className="absolute top-1.5 bottom-1.5 w-[calc(25%-6px)] bg-tealAccent rounded-md z-0 shadow-sm"
                    animate={{ left: `calc(${(clients - 1) * 25}% + 6px)` }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                </div>
              </div>

            </div>

            <div className="mt-10 pt-8 border-t border-legalDark/10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="text-xs text-textMuted font-light max-w-xs">
                Your details are secure. We process all data in accordance with our Privacy Policy.
              </p>
              <button className="w-full sm:w-auto bg-tealAccent text-white font-bold px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group">
                Calculate Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
