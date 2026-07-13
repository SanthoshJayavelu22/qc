"use client";

import { useState } from "react";
import { Calculator, PoundSterling, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function FeeCalculator() {
  const [transactionType, setTransactionType] = useState("Purchase");
  const [tenureType, setTenureType] = useState("Freehold");
  const [clients, setClients] = useState(1);
  const [propertyValue, setPropertyValue] = useState("");
  const [specificComment, setSpecificComment] = useState("");

  const transactionTypes = [
    "Sale", "Purchase", "Sale & Purchase", "Re-Mortgage", 
    "Transfer of Equity", "Commercial Sale", "Commercial Purchase"
  ];

  return (
    <section className="bg-[#030712] relative z-20 pb-24 pt-10">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="bg-[#0a1120]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(0,255,255,0.05)] relative overflow-hidden"
        >
          {/* Subtle gradient highlights */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyanAccent/10 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="flex items-center gap-4 mb-10 border-b border-white/5 pb-6 relative z-10">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 shadow-[inset_0_0_15px_rgba(0,255,255,0.1)]">
              <Calculator className="text-cyanAccent w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">Instant Fixed-Fee Quote</h2>
              <p className="text-gray-400 text-sm mt-1">Get an accurate, transparent estimate in seconds.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {/* Transaction Type */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Transaction Type</label>
              <div className="relative group">
                <select 
                  value={transactionType}
                  onChange={(e) => setTransactionType(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyanAccent focus:ring-1 focus:ring-cyanAccent transition-all appearance-none cursor-pointer hover:bg-black/60 group-hover:border-white/20"
                >
                  {transactionTypes.map(type => (
                    <option key={type} value={type} className="bg-[#0a1120]">{type}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-gray-400"></div>
              </div>
            </div>

            {/* Tenure Type */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Tenure Type</label>
              <div className="flex bg-black/40 border border-white/10 rounded-xl p-1 relative">
                {['Freehold', 'Leasehold'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setTenureType(type)}
                    className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all z-10 ${
                      tenureType === type 
                        ? 'text-legalDark' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {type}
                  </button>
                ))}
                {/* Animated Background Pill */}
                <motion.div 
                  layout
                  className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-cyanAccent rounded-lg z-0 shadow-[0_0_15px_rgba(0,255,255,0.4)]"
                  animate={{ 
                    left: tenureType === 'Freehold' ? '4px' : 'calc(50% + 2px)'
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              </div>
            </div>

            {/* Number of Clients */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">No. of Clients</label>
              <div className="flex bg-black/40 border border-white/10 rounded-xl p-1 relative">
                {[1, 2, 3, 4].map((num) => (
                  <button
                    key={num}
                    onClick={() => setClients(num)}
                    className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all z-10 ${
                      clients === num 
                        ? 'text-legalDark' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {num}
                  </button>
                ))}
                {/* Animated Background Pill */}
                <motion.div 
                  layout
                  className="absolute top-1 bottom-1 w-[calc(25%-4px)] bg-cyanAccent rounded-lg z-0 shadow-[0_0_15px_rgba(0,255,255,0.4)]"
                  animate={{ 
                    left: `calc(${(clients - 1) * 25}% + 4px)`
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              </div>
            </div>

            {/* Property Value */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Property Value</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <PoundSterling className="h-4 w-4 text-cyanAccent" />
                </div>
                <input
                  type="number"
                  placeholder="e.g. 350000"
                  value={propertyValue}
                  onChange={(e) => setPropertyValue(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-cyanAccent focus:ring-1 focus:ring-cyanAccent transition-all placeholder:text-gray-600 font-medium hover:bg-black/60 group-hover:border-white/20"
                />
              </div>
            </div>
          </div>

          {/* Specific Comment */}
          <div className="mt-8 relative z-10">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 block">Specific Comment</label>
            <textarea
              rows={2}
              placeholder="Any additional details about your transaction..."
              value={specificComment}
              onChange={(e) => setSpecificComment(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-cyanAccent focus:ring-1 focus:ring-cyanAccent transition-all placeholder:text-gray-600 resize-none font-medium hover:bg-black/60 hover:border-white/20"
            />
          </div>

          {/* Action Button */}
          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <p className="text-sm text-gray-400 max-w-md font-light">
              *By clicking calculate, you agree to our terms. We provide transparent quotes for purchases, sales, and re-mortgages.
            </p>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-cyanAccent text-legalDark font-bold text-lg px-12 py-4 rounded-xl shadow-[0_0_30px_rgba(0,255,255,0.2)] hover:shadow-[0_0_50px_rgba(0,255,255,0.4)] transition-all w-full md:w-auto overflow-hidden flex items-center justify-center gap-2"
            >
              <div className="absolute inset-0 w-full h-full bg-white/30 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></div>
              <span className="relative z-10 flex items-center gap-2">
                Calculate My Fixed Fee <Zap className="w-5 h-5" />
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
