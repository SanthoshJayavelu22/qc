"use client";

import { motion } from "framer-motion";
import { Star, Gift, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HomeBanners() {
  return (
    <section className="py-12 bg-emerald-50/40 border-y border-emerald-100/80">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* 1) What Our Clients Say Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-all group"
          >
            <div>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold font-serif text-legalDark mb-2">
                What Our Clients Say..
              </h3>
              <p className="text-legalDark/70 text-sm leading-relaxed mb-6 font-light">
                Read 500+ verified 5-star reviews from happy homebuyers, sellers, and investors across London & the UK.
              </p>
            </div>

            <div>
              <Link
                href="/endorsements"
                className="inline-flex items-center gap-2.5 bg-legalDark hover:bg-legalNavy text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all shadow-sm group-hover:shadow-md"
              >
                <span>What Our Clients Say..</span>
                <ArrowRight className="w-4 h-4 text-tealAccent group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* 2) Refer A Friend Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-emerald-100/70 via-teal-50 to-emerald-50 p-8 rounded-3xl border border-teal-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-all group"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-legalDark text-tealAccent text-xs font-bold uppercase tracking-wider mb-4">
                <Gift className="w-3.5 h-3.5 text-tealAccent" /> Reward Program
              </div>
              <h3 className="text-2xl md:text-3xl font-bold font-serif text-legalDark mb-2 leading-tight">
                Refer A Friend & Receive £100
              </h3>
              <p className="text-legalDark/75 text-sm leading-relaxed mb-6 font-light">
                Know someone buying or selling a home? Refer them to Quality Conveyancing and receive <strong className="text-legalDark font-semibold">£100 cash reward</strong> upon completion.
              </p>
            </div>

            <div>
              <Link
                href="/refer-work"
                className="inline-flex items-center gap-2 bg-legalDark hover:bg-black text-[#E5C158] font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all shadow-md border border-[#E5C158]/30 group-hover:scale-[1.01]"
              >
                <span>Refer A Friend & Receive £100 <span className="underline text-white font-extrabold ml-1">Click Here</span></span>
                <ArrowRight className="w-4 h-4 text-[#E5C158] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
