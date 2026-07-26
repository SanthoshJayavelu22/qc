"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { 
  Briefcase, 
  Award, 
  Users, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  MapPin, 
  Heart,
  BookOpen
} from "lucide-react";
import { motion } from "framer-motion";

import careersHeroImg from "@/assets/careers-hero-team.webp";

const openings = [
  {
    title: "Senior Residential Conveyancing Solicitor",
    type: "Full-Time • Permanent",
    location: "Ealing, London (Hybrid)",
    experience: "5+ Years PQE",
    description: "Lead complex freehold and leasehold caseloads with direct client communication and dedicated paralegal support.",
  },
  {
    title: "Conveyancing Assistant / Paralegal",
    type: "Full-Time • Permanent",
    location: "Ealing, London",
    experience: "1-2 Years Property Experience",
    description: "Assist conveyancers with digital search ordering, client onboarding, land registry submissions, and file management.",
  },
  {
    title: "Leasehold Legal Specialist",
    type: "Full-Time • Permanent",
    location: "London (Hybrid / Remote)",
    experience: "3+ Years PQE",
    description: "Specialise in lease extensions, enfranchisement, shared ownership staircasing, and complex landlord enquiries.",
  },
];

const culturePerks = [
  {
    icon: TrendingUp,
    title: "Career Progression",
    desc: "Clear promotion pathways to Senior Associate and Partnership with supported professional development and CLC/SRA sponsorship.",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    desc: "Flexible hybrid working model, paid birthday leave, wellness allowances, and manageable caseload limits.",
  },
  {
    icon: Award,
    title: "Competitive Compensation",
    desc: "Top-tier salary packages, quarterly performance bonuses, pension contributions, and healthcare benefits.",
  },
  {
    icon: BookOpen,
    title: "Cutting-Edge Legal Tech",
    desc: "Work with modern digital case management tools, paperless workflows, and fast search integration.",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-lightBg flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-20">
        {/* Careers Hero */}
        <section className="bg-legalDark text-white py-16 px-6 lg:px-12">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 text-center lg:text-left">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-tealAccent/20 text-tealAccent text-xs font-semibold uppercase tracking-widest mb-4">
                  <Users className="w-3.5 h-3.5" /> Join Our London Legal Team
                </span>
                <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 tracking-tight leading-tight">
                  Build Your Legal Career at Quality Conveyancing
                </h1>
                <p className="text-white/80 text-sm md:text-base max-w-xl font-light leading-relaxed mb-6">
                  Join London's fastest-growing property law practice. We empower our conveyancers with innovative legal tech, direct client relationships, and exceptional growth opportunities.
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <a
                    href="mailto:careers@qconveyancing.com"
                    className="inline-flex items-center gap-2 bg-tealAccent text-legalDark font-bold text-xs px-6 py-3 rounded-lg hover:shadow-lg transition-all"
                  >
                    View Openings <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 relative h-72 md:h-80 lg:h-[360px] rounded-2xl overflow-hidden shadow-xl border border-white/10">
                <Image
                  src={careersHeroImg}
                  alt="Quality Conveyancing Career Opportunities London Legal Team"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Culture & Benefits */}
        <section className="py-16 px-6 lg:px-12 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-legalDark mb-4">
                Why Work With Quality Conveyancing?
              </h2>
              <p className="text-textMuted text-sm md:text-base leading-relaxed">
                We believe happy conveyancers build satisfied clients. Our culture fosters innovation, direct communication, and continuous professional growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {culturePerks.map((perk, idx) => (
                <motion.div
                  key={perk.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-6 bg-warmGray/40 border border-gray-100 rounded-2xl flex flex-col justify-between hover:shadow-md transition-all"
                >
                  <div>
                    <div className="w-12 h-12 bg-tealAccent/20 rounded-xl flex items-center justify-center text-legalDark mb-5">
                      <perk.icon className="w-6 h-6 text-legalDark" />
                    </div>
                    <h3 className="text-lg font-bold font-serif text-legalDark mb-2">
                      {perk.title}
                    </h3>
                    <p className="text-textMuted text-xs leading-relaxed">
                      {perk.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions List */}
        <section className="py-20 px-6 lg:px-12 bg-warmGray/30 border-y border-gray-100">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-tealAccent mb-2 block">
                Current Opportunities
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-legalDark mb-3">
                Explore Available Roles
              </h2>
              <p className="text-textMuted text-sm">
                We are actively expanding our legal team in Ealing, London.
              </p>
            </div>

            <div className="space-y-6">
              {openings.map((job) => (
                <div
                  key={job.title}
                  className="p-6 md:p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
                >
                  <div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-[11px] font-semibold uppercase tracking-wider bg-warmGray px-2.5 py-0.5 rounded-full text-legalDark">
                        {job.type}
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-wider bg-tealAccent/20 px-2.5 py-0.5 rounded-full text-legalDark">
                        {job.experience}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold font-serif text-legalDark mb-2">
                      {job.title}
                    </h3>
                    <p className="text-textMuted text-xs md:text-sm max-w-2xl leading-relaxed mb-3">
                      {job.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-textMuted">
                      <MapPin className="w-3.5 h-3.5 text-tealAccent" />
                      {job.location}
                    </div>
                  </div>

                  <a
                    href="mailto:careers@qconveyancing.com?subject=Application for Role"
                    className="inline-flex items-center gap-2 bg-legalDark text-white font-semibold text-xs px-6 py-3 rounded-lg hover:bg-legalNavy transition-colors shrink-0"
                  >
                    Apply Now <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
