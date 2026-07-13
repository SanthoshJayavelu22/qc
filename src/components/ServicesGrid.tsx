"use client";

import { motion } from "framer-motion";
import { Home, Key, Map, RefreshCcw, Handshake, Building2, Users, ShieldAlert, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServicesGrid() {
  const services = [
    { title: "Residential Conveyancing", desc: "Expert handling of property purchases and sales.", icon: <Home className="w-8 h-8" />, span: "col-span-1 md:col-span-2 lg:col-span-2" },
    { title: "Freehold Properties", desc: "Navigating complex freehold transfers.", icon: <Map className="w-8 h-8" />, span: "col-span-1" },
    { title: "Leasehold Properties", desc: "Specialist leasehold agreements.", icon: <Key className="w-8 h-8" />, span: "col-span-1" },
    { title: "Remortgages", desc: "Fast remortgaging services.", icon: <RefreshCcw className="w-8 h-8" />, span: "col-span-1" },
    { title: "Transfers of Equity", desc: "Seamless equity transfer legalities.", icon: <Handshake className="w-8 h-8" />, span: "col-span-1 md:col-span-2 lg:col-span-2" },
    { title: "New Builds", desc: "Advice for new build developments.", icon: <Building2 className="w-8 h-8" />, span: "col-span-1" },
    { title: "Shared Ownership", desc: "Navigating shared ownership schemes.", icon: <Users className="w-8 h-8" />, span: "col-span-1 md:col-span-2 lg:col-span-2" },
    { title: "Building Safety Act", desc: "Compliance with latest safety regulations.", icon: <ShieldAlert className="w-8 h-8" />, span: "col-span-1" }
  ];

  return (
    <section className="py-32 bg-[#030712] text-white border-b border-white/5 relative">
      {/* Glow effect */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
          <motion.div 
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Our Specialist <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyanAccent to-blue-500">Expertise</span>
            </h2>
            <p className="text-gray-400 text-xl font-light">
              Comprehensive property law services with an emphasis on speed, transparency, and modern efficiency.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href="#" className="hidden md:flex items-center gap-2 text-white font-bold hover:text-cyanAccent transition-all hover:gap-4">
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:auto-rows-[220px]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.6, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className={`group relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/10 p-8 hover:border-cyanAccent/50 transition-all cursor-pointer flex flex-col justify-between ${service.span}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyanAccent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              
              <div className="text-white group-hover:text-cyanAccent transition-colors relative z-10 group-hover:scale-110 origin-left duration-300">
                {service.icon}
              </div>
              
              <div className="relative z-10 mt-8">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-cyanAccent transition-colors">{service.title}</h3>
                <p className="text-gray-400 font-light opacity-0 h-0 group-hover:opacity-100 group-hover:h-auto transition-all duration-300 overflow-hidden">
                  {service.desc}
                </p>
              </div>

              <div className="absolute bottom-8 right-8 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-10">
                <ArrowRight className="w-6 h-6 text-cyanAccent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
