"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Image from "next/image";

import brindaImg from "@/assets/Brinda-N.webp";
import jayshreeImg from "@/assets/Jayshree-C.webp";
import patImg from "@/assets/Pat-N_1.webp";

export default function Team() {
  const team = [
    { name: "Brinda Nicholson", role: "Director & Head of Property Team", image: brindaImg },
    { name: "Jayshree Chudasama", role: "Director & Conveyancing Manager", image: jayshreeImg },
    { name: "Pat Nathan", role: "Business Development Manager", image: patImg },
  ];

  return (
    <section className="py-28 md:py-40 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <p className="text-tealAccent text-sm font-semibold tracking-[0.2em] uppercase mb-6">Our Team</p>
          <h2 className="text-4xl md:text-5xl font-bold text-legalDark font-serif mb-6">
            Meet Our Leadership
          </h2>
          <p className="text-textMuted text-lg max-w-2xl mx-auto">
            Decades of collective experience dedicated to making your property transaction seamless.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  placeholder="blur"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-legalDark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 inset-x-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex justify-center gap-3">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-tealAccent hover:text-legalDark transition-colors">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-bold font-serif text-legalDark mb-1">{member.name}</h3>
              <p className="text-textMuted text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
