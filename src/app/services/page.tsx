"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { 
  Zap, 
  UserCheck, 
  PhoneCall, 
  ShieldCheck, 
  Clock, 
  HeartHandshake, 
  CheckCircle2, 
  Star, 
  ArrowRight,
  Home,
  Building,
  Key,
  Gavel,
  FileCheck,
  Scale,
  Sparkles,
  Award
} from "lucide-react";
import { motion } from "framer-motion";

import servicesHeroImg from "@/assets/services-hero-legal.webp";
import servicesDirectImg from "@/assets/services-direct-solicitor.png";

const servicesList = [
  {
    title: "Residential Purchases",
    subtitle: "Freehold & Leasehold",
    description: "Expert conveyancing for purchasing your dream house or apartment in England & Wales with complete legal protection.",
    icon: Home,
  },
  {
    title: "Residential Sales",
    subtitle: "Freehold & Leasehold",
    description: "Swift legal support to prepare contract bundles, answer buyer enquiries, and complete your property sale with zero friction.",
    icon: Key,
  },
  {
    title: "New Build Conveyancing",
    subtitle: "Specialist Developer Contracts",
    description: "Navigating tight developer deadline requirements, structural warranties (NHBC/Premier), and snagging provisions.",
    icon: Building,
  },
  {
    title: "Auction Property Transactions",
    subtitle: "Speedy Legal Packs & Bidding Prep",
    description: "Urgent legal pack reviews prior to auction day and accelerated 28-day post-auction completion services.",
    icon: Gavel,
  },
  {
    title: "Lease Extensions & Freehold Purchase",
    subtitle: "Statutory & Informal Leasehold Rights",
    description: "Protect your property value by extending short leases under recent Leasehold Reform legislation.",
    icon: Scale,
  },
  {
    title: "Shared Ownership & Staircasing",
    subtitle: "Housing Association Specialists",
    description: "Buying initial shares or buying out remaining equity (staircasing) with specialist legal guidance.",
    icon: FileCheck,
  },
  {
    title: "Re-mortgages & Equity Release",
    subtitle: "Lender Panel Legal Services",
    description: "Switching mortgage lenders quickly or releasing tax-free cash equity from your residential property.",
    icon: ShieldCheck,
  },
  {
    title: "Transfer of Equity",
    subtitle: "Title Changes & Matrimonial Transfers",
    description: "Adding or removing property owners seamlessly following life changes, divorces, or family gifts.",
    icon: HeartHandshake,
  },
  {
    title: "Commercial Property Legal Services",
    subtitle: "Freehold, Leasehold & Business Leases",
    description: "Comprehensive legal counsel for commercial land acquisition, retail leases, and commercial re-mortgages.",
    icon: Building,
  },
  {
    title: "Land Acquisitions & Sales",
    subtitle: "Plot Sales & Development Land",
    description: "Legal drafting for land division, boundary easements, rights of way, and site developments.",
    icon: Home,
  },
  {
    title: "Repossessions & Distressed Purchases",
    subtitle: "Mortgagee Sales & Rapid Legal Review",
    description: "Fast-track legal reviews for purchasing lender-repossessed properties under strict contract conditions.",
    icon: CheckCircle2,
  },
  {
    title: "Grant of New Leases",
    subtitle: "Landlord & Tenant Legal Drafting",
    description: "Custom drafting of residential and commercial leases to safeguard long-term landlord and tenant rights.",
    icon: FileCheck,
  },
];

const coreHighlights = [
  {
    icon: Zap,
    title: "80% Faster Completion Rate",
    description: "Our advanced case management system completes transactions 80% faster than the UK industry average, reducing chain collapse risks.",
  },
  {
    icon: PhoneCall,
    title: "Direct Line to Dedicated Conveyancer",
    description: "No call centres or secretaries. Speak directly to your assigned conveyancer every time you call for total transparency.",
  },
  {
    icon: UserCheck,
    title: "Proactive Case Management",
    description: "Strict internal deadlines ensure we chase third-party enquiries daily so you never have to chase us.",
  },
  {
    icon: ShieldCheck,
    title: "100% Fixed Fee Guarantee",
    description: "Transparent legal fee quotes from day one with zero hidden costs, backed by our No Completion, No Legal Fee promise.",
  },
];

const testimonials = [
  {
    name: "Yordan Stoyanov",
    time: "2 years ago",
    content: "Manju S Mohan helped me purchase a property successfully. Quality Conveyancing Ltd were always easy to communicate with through email and phone. Their fees were clearly explained and documents easy to understand. I would recommend them and use them again!",
  },
  {
    name: "Chandresh Kanani",
    time: "2 years ago",
    content: "I recently worked with Sanju on my home purchase, and he was fantastic. He quickly initiated all necessary searches, preventing any delays. Highly recommended!",
  },
  {
    name: "J Unsworth",
    time: "2 years ago",
    content: "Recently completed on our first flat with QC and couldn't be happier. Our solicitor (Chandni) was always available, clear with communications and proactive at each step. They went above and beyond!",
  },
  {
    name: "Nicolas Pottier",
    time: "2 years ago",
    content: "We recently purchased our first house with Quality Conveyancing and have nothing but praise for Ayushi who helped us through every stage with high professionalism.",
  },
];

const ourPromises = [
  "80% faster completion rate than the UK industry average",
  "Dedicated conveyancer handling your file from start to finish",
  "Direct dial service with direct telephone access",
  "90% repeat client rate for buy, sell, or re-finance transactions",
  "No hidden fees & transparent legal fee structures",
  "No need to take time off work—100% digital & paperless process available",
  "Approachable, friendly, and straightforward legal advice",
  "Specialist expertise in complex leaseholds & high-pressure deadlines",
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-lightBg flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-20">
        {/* Services Hero (Matching Careers Split Layout) */}
        <section className="bg-legalDark text-white py-16 px-6 lg:px-12">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 text-center lg:text-left">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-tealAccent/20 text-tealAccent text-xs font-semibold uppercase tracking-widest mb-4">
                  <Sparkles className="w-3.5 h-3.5" /> Practice Areas & Services
                </span>
                <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 tracking-tight leading-tight">
                  Fast, Transparent & Proactive Conveyancing Solicitors
                </h1>
                <p className="text-white/80 text-sm md:text-base max-w-xl font-light leading-relaxed mb-6">
                  Serving property buyers, sellers, and investors across London & the UK with an 80% faster completion rate and direct conveyancer access.
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <a
                    href="tel:02037636767"
                    className="inline-flex items-center gap-2 bg-tealAccent text-legalDark font-bold text-xs px-6 py-3 rounded-lg hover:shadow-lg transition-all"
                  >
                    <PhoneCall className="w-3.5 h-3.5" /> Speak To Conveyancer: 020 3763 6767
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 relative h-72 md:h-80 lg:h-[360px] rounded-2xl overflow-hidden shadow-xl border border-white/10">
                <Image
                  src={servicesHeroImg}
                  alt="Quality Conveyancing Practice Areas & Legal Services"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why We Are The Best / Core USPs */}
        <section className="py-16 px-6 lg:px-12 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-legalDark mb-4">
                We Serve The Best Conveyancing Service in the UK
              </h2>
              <p className="text-legalDark/80 text-sm md:text-base leading-relaxed">
                Our focus is on making the conveyancing process of buying and selling a property as smooth, simple, and straightforward for you as possible.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreHighlights.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 bg-warmGray/50 border border-gray-100 rounded-2xl flex flex-col justify-between hover:shadow-md transition-all"
                >
                  <div>
                    <div className="w-12 h-12 bg-tealAccent/20 rounded-xl flex items-center justify-center text-legalDark mb-5">
                      <item.icon className="w-6 h-6 text-legalDark" />
                    </div>
                    <h3 className="text-lg font-bold font-serif text-legalDark mb-2">
                      {item.title}
                    </h3>
                    <p className="text-legalDark/75 text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Value Proposition Section */}
        <section className="py-16 px-6 lg:px-12 bg-warmGray/30 border-y border-gray-100">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-tealAccent mb-2 block">
                  Proactive & Direct Legal Access
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-legalDark mb-6 leading-tight">
                  Direct Line To Your Personal Conveyancer—No Call Centres
                </h2>
                <div className="space-y-4 text-legalDark/80 text-sm leading-relaxed">
                  <p>
                    <strong className="text-legalDark">Fast & Efficient Service:</strong> Our innovative use of technology has taken us to greater heights with an 80% faster completion rate than the UK industry average. From the moment we are instructed, we waste no time in dealing with your case to keep property chains from collapsing.
                  </p>
                  <p>
                    <strong className="text-legalDark">Proactive Conveyancers:</strong> In our line of trade, being proactive is a necessity. Every day spent waiting for responses is a waste of time. We strictly enforce internal time limits so our conveyancers take the initiative to speed up transactions. You will never have to chase us.
                  </p>
                  <p>
                    <strong className="text-legalDark">Stress-Free & Digital:</strong> No need to take time off work. We handle transactions seamlessly via telephone, secure portal, and email. By leveraging electronic signatures, digital ID verification, and swift search ordering, your transaction completes up to 40% faster.
                  </p>
                </div>

                <div className="mt-8 flex gap-4">
                  <a
                    href="tel:02037636767"
                    className="inline-flex items-center gap-2 bg-legalDark text-white font-semibold text-sm px-6 py-3 rounded-lg hover:bg-legalNavy transition-colors"
                  >
                    <PhoneCall className="w-4 h-4 text-tealAccent" /> Speak Directly: 020 3763 6767
                  </a>
                </div>
              </div>

              <div className="relative h-96 lg:h-[450px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                <Image
                  src={servicesDirectImg}
                  alt="Quality Conveyancing Dedicated Solicitor Consultation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services We Offer Grid */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-tealAccent mb-2 block">
                Comprehensive Legal Practice
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-legalDark mb-4">
                Services We Offer
              </h2>
              <p className="text-legalDark/80 text-sm md:text-base">
                Specialist residential and commercial conveyancing services tailored to your goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesList.map((service, idx) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.03 }}
                  className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 bg-warmGray rounded-lg flex items-center justify-center text-legalDark group-hover:bg-tealAccent/20 transition-colors">
                        <service.icon className="w-5 h-5 text-legalDark" />
                      </div>
                      <span className="text-[11px] font-medium text-legalDark/70 uppercase tracking-wider bg-warmGray px-2.5 py-0.5 rounded-full">
                        {service.subtitle}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold font-serif text-legalDark mb-2 group-hover:text-tealAccent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-legalDark/75 text-xs leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>

                  <Link
                    href="#"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-legalDark hover:text-tealAccent transition-colors pt-3 border-t border-gray-100"
                  >
                    Get Fixed Fee Quote <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Promise Checklist */}
        <section className="py-16 px-6 lg:px-12 bg-legalDark text-white">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-tealAccent mb-2 block">
                  Client Service Guarantee
                </span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                  Our Promise To You
                </h2>
                <p className="text-white/80 text-sm leading-relaxed mb-6 font-light">
                  We treat every case as unique, customising our advice to your specific timeline and requirements.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-xs font-semibold">
                  <Award className="w-4 h-4 text-tealAccent" /> 4.8 Rating on Google Reviews
                </div>
              </div>

              <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
                {ourPromises.map((promise) => (
                  <div key={promise} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                    <CheckCircle2 className="w-5 h-5 text-tealAccent shrink-0 mt-0.5" />
                    <span className="text-xs text-white/90 leading-relaxed font-light">{promise}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="flex items-center justify-center gap-1 text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-legalDark mb-2">
                What Our Clients Say About Us
              </h2>
              <p className="text-legalDark/75 text-sm">
                Rated <strong className="text-legalDark">4.8 out of 5</strong> on Google Reviews based on verified client feedback.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="p-6 bg-emerald-50/40 border border-emerald-100/80 rounded-2xl flex flex-col justify-between">
                  <p className="text-legalDark/85 text-xs md:text-sm leading-relaxed italic mb-6">
                    "{t.content}"
                  </p>
                  <div className="flex items-center justify-between border-t border-gray-200/60 pt-4 text-xs">
                    <span className="font-bold text-legalDark">{t.name}</span>
                    <span className="text-legalDark/70">{t.time} • Google Review</span>
                  </div>
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
