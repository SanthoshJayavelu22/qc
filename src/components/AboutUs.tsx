"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="py-28 md:py-40 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-tealAccent text-sm font-semibold tracking-[0.2em] uppercase mb-6">About Us</p>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-legalDark leading-tight mb-8">
              Specialist Conveyancing for Your Property Journey
            </h2>
            <p className="text-textMuted text-lg leading-relaxed mb-6">
              Established in 2012, Quality Conveyancing is a premier firm of <strong className="text-legalDark">Conveyancing Solicitors London</strong>. Based in Ealing (W5), our specialist <strong className="text-legalDark">Property Solicitors Ealing</strong> deliver swift, transparent, fixed-fee legal services.
            </p>
            <p className="text-textMuted text-lg leading-relaxed mb-10">
              With one dedicated lawyer from instruction to completion, you will always have direct access to the person handling your case. We believe in clear communication, honest advice, and putting your needs first.
            </p>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <p className="text-4xl font-bold font-serif text-legalDark">12+</p>
                <p className="text-sm text-textMuted mt-1">Years Experience</p>
              </div>
              <div className="w-[1px] h-12 bg-gray-200"></div>
              <div className="text-center">
                <p className="text-4xl font-bold font-serif text-legalDark">4.9</p>
                <p className="text-sm text-textMuted mt-1">Average Rating</p>
              </div>
              <div className="w-[1px] h-12 bg-gray-200"></div>
              <div className="text-center">
                <p className="text-4xl font-bold font-serif text-legalDark">5000+</p>
                <p className="text-sm text-textMuted mt-1">Cases Handled</p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[5/4] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522050212171-61b01dd24579?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Premium London Property"
                fill
                className="object-cover"
              />
            </div>
            {/* Accent line */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-tealAccent/30 rounded-2xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
