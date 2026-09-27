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
            <p className="text-legalDark/80 text-lg leading-relaxed mb-6 font-normal">
              Established in 2012, Quality Conveyancing is a premier law firm of property solicitors and conveyancers based in West London, Ealing (W5), proudly serving clients across the whole of England and Wales. We deliver swift and transparent legal services designed to make your move stress-free, achieving an 80% faster completion rate than the industry average through innovative technology.
            </p>
            <p className="text-legalDark/80 text-lg leading-relaxed font-normal">
              When you work with us, you are assigned one dedicated lawyer from instruction to completion, ensuring you always have direct, personal access to the person handling your case. We believe in clear communication, honest advice, and putting your needs first every step of the way.
            </p>
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
