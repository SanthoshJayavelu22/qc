"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { 
  PhoneCall, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  UserCheck,
  TrendingUp,
  Clock,
  ChevronLeft,
  ChevronRight,
  Users,
  Star
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Team member image imports in EXACT saved order
import brindaImg from "@/assets/teams/Brinda Nicholson - Director (Senior Solicitor.webp";
import patImg from "@/assets/teams/Pat Nathan - Director (Senior Solicitor).webp";
import jayshreeImg from "@/assets/teams/Jayshree Chudasama - Director.webp";
import vijayImg from "@/assets/teams/Vijay Chandras - Head Of Business Development.webp";
import chandniImg from "@/assets/teams/Chandni Evans - Conveyancing Fee Earner.webp";
import paulImg from "@/assets/teams/Paul Joseph - Head Of Operations.webp";
import ewaImg from "@/assets/teams/Ewa Stanisz - PA To Conveyancers.webp";
import soumyaImg from "@/assets/teams/Soumya Pareek - Conveyancing Fee Earner.webp";
import sanjuImg from "@/assets/teams/Sanju Mohanan - Conveyancing Fee Earner.webp";
import dikshaImg from "@/assets/teams/Diksha Jambhulkar - Conveyancing Fee Earner.webp";
import manjuImg from "@/assets/teams/Manju Mohan - Conveyancing Fee Earner.webp";
import deepakImg from "@/assets/teams/Deepak Nagar - Conveyancing Fee Earner.webp";
import groupTeamImg from "@/assets/teams/group-team.jpg";

const teamMembers = [
  {
    name: "Brinda Nicholson",
    role: "Director (Senior Solicitor)",
    image: brindaImg,
    category: "Leadership",
    description: "Specialist Senior Solicitor heading complex residential & commercial conveyancing transactions across London.",
  },
  {
    name: "Mrs Pathmajani Chandrasekaram (Pat Nathan)",
    role: "Director",
    image: patImg,
    category: "Leadership",
    description: "Director with extensive expertise in property law, title investigation, and strategic client representation.",
  },
  {
    name: "Jayshree Chudasama",
    role: "Director",
    image: jayshreeImg,
    category: "Leadership",
    description: "Director managing conveyancing operations and ensuring client-first standards across all property transactions.",
  },
  {
    name: "Vijay Chandras",
    role: "Head Of Business Development",
    image: vijayImg,
    category: "Management & Ops",
    description: "Driving strategic partnerships, broker networks, and client growth initiatives across the legal property sector.",
  },
  {
    name: "Chandni Evans",
    role: "Conveyancing Fee Earner",
    image: chandniImg,
    category: "Legal Experts",
    description: "Experienced fee earner delivering proactive communication and swift property purchase & sale completions.",
  },
  {
    name: "Paul Joseph",
    role: "Head Of Operations",
    image: paulImg,
    category: "Management & Ops",
    description: "Overseeing seamless internal workflows, technology integration, and client service delivery standards.",
  },
  {
    name: "Ewa Stanisz",
    role: "PA To Conveyancers",
    image: ewaImg,
    category: "Management & Ops",
    description: "Providing essential administrative oversight and executive support to ensure cases progress smoothly.",
  },
  {
    name: "Soumya Pareek",
    role: "Conveyancing Fee Earner",
    image: soumyaImg,
    category: "Legal Experts",
    description: "Dedicated property law specialist focused on leasehold, freehold, and fast-track remortgages.",
  },
  {
    name: "Sanju Mohanan",
    role: "Conveyancing Fee Earner",
    image: sanjuImg,
    category: "Legal Experts",
    description: "Highly rated fee earner known for thorough search reviews, client care, and direct dial transparency.",
  },
  {
    name: "Diksha Jambhulkar",
    role: "Conveyancing Fee Earner",
    image: dikshaImg,
    category: "Legal Experts",
    description: "Specialising in residential sales, purchases, and guiding first-time buyers with step-by-step clarity.",
  },
  {
    name: "Manju Mohan",
    role: "Conveyancing Fee Earner",
    image: manjuImg,
    category: "Legal Experts",
    description: "Accomplished legal practitioner delivering quick turnarounds on complex title queries and contracts.",
  },
  {
    name: "Deepak Nagar",
    role: "Conveyancing Fee Earner (Developing Expertise)",
    image: deepakImg,
    category: "Developing Expertise",
    description: "Developing property law expertise and supporting high-volume residential transactions with precision.",
  },
];

const stats = [
  { label: "Track Record", value: "15 Years Young", subtitle: "and growing strong", icon: TrendingUp },
  { label: "Client Satisfaction", value: "100%", subtitle: "Personalised and Transparent", icon: ShieldCheck },
  { label: "Repeat Clients", value: "90%", subtitle: "Client Retention Rate", icon: UserCheck },
  { label: "Turnaround Speed", value: "80%", subtitle: "Fastest Lawyers in London", icon: Clock },
];

export default function TeamPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCategory, setActiveCategory] = useState<"all" | "Leadership" | "Legal Experts" | "Management & Ops">("all");

  const filteredMembers = teamMembers.filter((m) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "Leadership") return m.category === "Leadership";
    if (activeCategory === "Legal Experts") return m.category === "Legal Experts" || m.category === "Developing Expertise";
    if (activeCategory === "Management & Ops") return m.category === "Management & Ops";
    return true;
  });

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress((scrollLeft / maxScroll) * 100);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const cardWidth = 320;
    const scrollAmount = direction === "left" ? -cardWidth * 2 : cardWidth * 2;
    scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => el.removeEventListener("scroll", handleScroll);
    }
  }, [filteredMembers]);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Quality Conveyancing",
    "image": "https://qualityconveyancing.co.uk/assets/qc-logo.png",
    "description": "Quality Conveyancing is one of London’s leading conveyancing firms specialising in Property Law with direct dial access to dedicated conveyancers.",
    "telephone": "020 3763 6767",
    "areaServed": ["London", "Ealing", "Greater London", "United Kingdom"],
    "employee": teamMembers.map(member => ({
      "@type": "Person",
      "name": member.name,
      "jobTitle": member.role
    }))
  };

  return (
    <div className="min-h-screen bg-lightBg flex flex-col font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Header />

      <main className="flex-grow pt-20">
        {/* Standard Site Hero Banner (Matching Services / Endorsements / Careers Page Banner) */}
        <section className="bg-legalDark text-white py-16 px-6 lg:px-12">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 text-center lg:text-left">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-tealAccent/20 text-tealAccent text-xs font-semibold uppercase tracking-widest mb-4">
                  <Users className="w-3.5 h-3.5" /> Specialist Legal Team
                </span>
                <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 tracking-tight leading-tight">
                  Meet the Team Behind Your Move
                </h1>
                <p className="text-white/80 text-sm md:text-base max-w-2xl font-light leading-relaxed mb-6">
                  Quality Conveyancing is built on strong family values. Meet the dedicated conveyancing solicitors, directors, and operational experts guiding your transaction every step of the way.
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <a
                    href="tel:02037636767"
                    className="inline-flex items-center gap-2 bg-tealAccent text-legalDark font-bold text-xs px-6 py-3 rounded-lg hover:shadow-lg transition-all"
                  >
                    <PhoneCall className="w-3.5 h-3.5" /> Direct Line: 020 3763 6767
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium text-xs px-6 py-3 rounded-lg border border-white/15 transition-all"
                  >
                    Get Fixed Fee Quote <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Side Group Team Photo */}
              <div className="lg:col-span-6 relative h-64 md:h-72 lg:h-[350px] rounded-2xl overflow-hidden shadow-xl border border-white/10">
                <Image
                  src={groupTeamImg}
                  alt="Quality Conveyancing Group Team London Property Lawyers"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Strip (Standard Layout Component across site) */}
        <section className="py-8 bg-warmGray/40 border-b border-gray-200">
          <div className="container mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl md:text-3xl font-serif font-bold text-legalDark">{s.value}</div>
                  <div className="text-xs text-legalDark/75 uppercase tracking-wider font-semibold mt-1">{s.label}</div>
                  <div className="text-[11px] text-legalDark/65 mt-0.5">{s.subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Creative Team Member Slider Section (Clean & Aligned with Site Palette) */}
        <section className="py-16 px-6 lg:px-12 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-tealAccent mb-2 block">
                  Meet Our Experts
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-legalDark">
                  Our Conveyancing Lawyers & Directors
                </h2>
                <p className="text-textMuted text-sm mt-2 max-w-xl">
                  Scroll or filter through our team members in exact order. Click any card or speak directly with your conveyancer.
                </p>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-2">
                {[
                  { id: "all", label: "All Members" },
                  { id: "Leadership", label: "Directors" },
                  { id: "Legal Experts", label: "Conveyancers" },
                  { id: "Management & Ops", label: "Operations & PA" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id as any)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                      activeCategory === tab.id
                        ? "bg-legalDark text-white shadow-sm"
                        : "bg-warmGray/60 text-textMuted hover:text-legalDark hover:bg-warmGray"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider Viewport */}
            <div className="relative">
              <div
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-8 pt-2 px-1 snap-x snap-mandatory"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <AnimatePresence mode="popLayout">
                  {filteredMembers.map((member, index) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.35, delay: index * 0.03 }}
                      className="w-[260px] sm:w-[285px] shrink-0 snap-start group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
                    >
                      <div>
                        {/* Image Container with Custom Rounding */}
                        <div className="relative aspect-[3/4] rounded-t-2xl overflow-hidden bg-warmGray">
                          <Image
                            src={member.image}
                            alt={`${member.name} - ${member.role}`}
                            fill
                            sizes="(max-width: 640px) 260px, 285px"
                            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                            priority={index < 4}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-legalDark/80 via-legalDark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <p className="text-white/95 text-xs font-light leading-relaxed">
                              {member.description}
                            </p>
                          </div>
                        </div>

                        {/* Text Container */}
                        <div className="p-5">
                          <h3 className="text-lg font-serif font-bold text-legalDark group-hover:text-tealAccent transition-colors">
                            {member.name}
                          </h3>
                          <p className="text-textMuted text-xs font-medium mt-1">
                            {member.role}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Slider Progress Bar & Controls */}
              <div className="flex items-center justify-between mt-4 border-t border-gray-100 pt-6">
                <div className="text-xs text-textMuted font-medium">
                  Showing {filteredMembers.length} Team Members
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-32 sm:w-48 h-[3px] bg-gray-200 rounded-full overflow-hidden relative">
                    <div
                      className="h-full bg-legalDark rounded-full transition-all duration-300 ease-out"
                      style={{ width: `${Math.max(scrollProgress, 15)}%` }}
                    />
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => scroll("left")}
                      className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-legalDark hover:bg-legalDark hover:text-white hover:border-legalDark transition-all duration-300 shadow-sm"
                      aria-label="Previous Team Members"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => scroll("right")}
                      className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-legalDark hover:bg-legalDark hover:text-white hover:border-legalDark transition-all duration-300 shadow-sm"
                      aria-label="Next Team Members"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Value Proposition & Approach Section */}
        <section className="py-16 px-6 lg:px-12 bg-warmGray/30 border-y border-gray-100">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 bg-legalDark text-white p-8 md:p-10 rounded-2xl relative overflow-hidden shadow-xl">
                <span className="text-xs font-bold uppercase tracking-widest text-tealAccent mb-2 block">Direct Communication</span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">No Call Centres. Speak Directly to Your Solicitor.</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6 font-light">
                  Our approach is to provide a personal direct dial service so you do not speak to a call centre, secretary or receptionist but you speak directly to your conveyancer when you call.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-tealAccent shrink-0" />
                    <span>Direct phone number & email for your solicitor</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-tealAccent shrink-0" />
                    <span>Proactive weekly milestone updates on your file</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-white/90">
                    <CheckCircle2 className="w-4 h-4 text-tealAccent shrink-0" />
                    <span>No completion, no legal fee guarantee</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-tealAccent mb-2 block">Our Approach & Objective</span>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-legalDark">
                    London Property Conveyancing Specialists Dedicated to Your Move
                  </h2>
                </div>
                <p className="text-legalDark/80 text-sm md:text-base leading-relaxed">
                  Quality Conveyancing is one of London’s leading conveyancing firms that specialises in Property Law. Our objective is to carry out all conveyancing transactions with utmost integrity, efficiency and transparency.
                </p>
                <p className="text-legalDark/80 text-sm md:text-base leading-relaxed">
                  Each case and transaction comes with its own quirks and complications; however, we have a highly skilled and experienced team of conveyancers with the knowledge and experience to work their way around even the most complicated transactions.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <div className="px-4 py-2.5 bg-white rounded-lg border border-gray-200 text-xs font-semibold text-legalDark flex items-center gap-2 shadow-sm">
                    <Award className="w-4 h-4 text-amber-500" /> Specialist Property Lawyers
                  </div>
                  <div className="px-4 py-2.5 bg-white rounded-lg border border-gray-200 text-xs font-semibold text-legalDark flex items-center gap-2 shadow-sm">
                    <ShieldCheck className="w-4 h-4 text-teal-600" /> Integrity & Direct Service
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs for SEO/AEO */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-tealAccent mb-2 block">Frequently Asked Questions</span>
              <h2 className="text-3xl font-serif font-bold text-legalDark">
                Why Work With Quality Conveyancing Solicitors?
              </h2>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-emerald-50/40 rounded-2xl border border-emerald-100/80 shadow-sm">
                <h3 className="font-serif font-bold text-base md:text-lg text-legalDark mb-2">
                  Will I get direct contact details for my assigned conveyancer?
                </h3>
                <p className="text-legalDark/80 text-sm leading-relaxed">
                  Yes, absolutely. Unlike traditional law firms or high-volume call centres, Quality Conveyancing provides you with the direct dial telephone number and personal email address of your conveyancing solicitor.
                </p>
              </div>

              <div className="p-6 bg-emerald-50/40 rounded-2xl border border-emerald-100/80 shadow-sm">
                <h3 className="font-serif font-bold text-base md:text-lg text-legalDark mb-2">
                  What areas of London and England do Quality Conveyancing cover?
                </h3>
                <p className="text-legalDark/80 text-sm leading-relaxed">
                  Our conveyancing experts are based in London (Ealing) and serve clients purchasing, selling, or remortgaging residential properties across London and all of England & Wales.
                </p>
              </div>

              <div className="p-6 bg-emerald-50/40 rounded-2xl border border-emerald-100/80 shadow-sm">
                <h3 className="font-serif font-bold text-base md:text-lg text-legalDark mb-2">
                  How does Quality Conveyancing complete transactions 80% faster?
                </h3>
                <p className="text-legalDark/80 text-sm leading-relaxed">
                  Through direct dial communication, proactive search ordering, dedicated operational oversight by Head of Operations Paul Joseph, and senior solicitor leadership from Directors Brinda Nicholson, Pat Nathan, and Jayshree Chudasama.
                </p>
              </div>
            </div>

           
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
