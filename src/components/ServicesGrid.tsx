"use client";

import { motion } from "framer-motion";
import { Home, Key, Map, RefreshCcw, Handshake, Building2, Users, ShieldAlert } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ser from "../assets/Our Services.png"

export default function ServicesGrid() {
  const services = [
    { title: "Residential Conveyancing", desc: "Expert handling of property purchases and sales with transparent fixed fees.", icon: Home },
    { title: "Freehold Properties", desc: "Navigating complex freehold transfers with precision and care.", icon: Map },
    { title: "Leasehold Properties", desc: "Specialist leasehold agreements and lease extension advice.", icon: Key },
    { title: "Remortgages", desc: "Fast, efficient remortgaging services for your peace of mind.", icon: RefreshCcw },
    { title: "Transfers of Equity", desc: "Seamless equity transfer legalities handled professionally.", icon: Handshake },
    { title: "New Builds", desc: "Comprehensive advice for new build property developments.", icon: Building2 },
    { title: "Shared Ownership", desc: "Navigating shared ownership schemes with expert guidance.", icon: Users },
    { title: "Building Safety Act", desc: "Full compliance with the latest building safety regulations.", icon: ShieldAlert },
  ];

  return (
    <section className="py-28 md:py-40 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Header with image */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-end mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-tealAccent text-sm font-semibold tracking-[0.2em] uppercase mb-6">Our Services</p>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-legalDark leading-tight mb-6">
              Conveyancing Services for Your Property Journey
            </h2>
            <p className="text-textMuted text-lg leading-relaxed">
              Comprehensive property law services with an emphasis on speed, transparency, and modern efficiency.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[16/10] rounded-2xl overflow-hidden"
          >
            <Image
              src={ser}
              alt="Property Services"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group p-8 rounded-xl bg-warmGray hover:bg-legalDark transition-all duration-500 cursor-pointer"
            >
              <service.icon className="w-7 h-7 text-tealAccent mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-bold font-serif text-legalDark group-hover:text-white transition-colors mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-textMuted group-hover:text-white/70 transition-colors leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-legalDark tracking-wide uppercase border-b-2 border-tealAccent pb-1 hover:text-tealAccent transition-colors">
            View All Services →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
