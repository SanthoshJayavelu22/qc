"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Star, Award, CheckCircle2, ShieldCheck, Heart, ThumbsUp, ArrowRight, Quote, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import endorsementsHeroImg from "@/assets/endorsements-hero-reviews.png";

const endorsementsList = [
  {
    name: "Nicolas Pottier",
    role: "First Time Homebuyer",
    rating: 5,
    date: "2 years ago",
    solicitor: "Ayushi",
    review: "We recently purchased our first house with Quality Conveyancing and have nothing but praise for the team especially Ayushi who helped us through every stage. The team responded to queries promptly and with a high degree of professionalism and attention, even with silly questions from first time buyers like ourselves. We highly recommend Quality Conveyancing to anyone looking for Conveyancing services.",
  },
  {
    name: "Chandresh Kanani",
    role: "Home Purchase",
    rating: 5,
    date: "2 years ago",
    solicitor: "Sanju",
    review: "I recently worked with Sanju on my home purchase, and he was fantastic. He quickly initiated all necessary searches, preventing any delays. Additionally, he was always approachable and easy to communicate with. Highly recommended!",
  },
  {
    name: "J Unsworth",
    role: "First Flat Purchase",
    rating: 5,
    date: "2 years ago",
    solicitor: "Chandni",
    review: "Recently completed on our first flat with QC and couldn't be happier with the service provided. Our solicitor (Chandni) was always available, clear with communications and just generally proactive at each step of the way. As first timers, we in particularly really appreciated the approach taken. Chandni and the team went above and beyond to make the whole process as painless and efficient as possible, so thanks again and we would highly recommend to anyone!",
  },
  {
    name: "Bhavik Udani",
    role: "Flat Sale & Home Purchase",
    rating: 5,
    date: "2 years ago",
    solicitor: "Manju",
    review: "We choose QC to work on the sale of our flat. The solicitor assigned to us was Manju. She was fantastic throughout the sale. In the past I have had a bad experience working with other solicitors however QC were worth every penny. They always had my best interests at heart, reliable, answered phone calls, responded to emails, provided regular updates and only got me involved when needed. I am also using Manju and the team for our ongoing purchase. I would definitely recommend them.",
  },
  {
    name: "Zoulla Constantinou",
    role: "Property Seller",
    rating: 5,
    date: "2 years ago",
    solicitor: "QC Legal Team",
    review: "I wanted to say what a great experience we had with Quality Conveyancing. They were professional, easy to liaise with, provided the personal touch and always understanding of all our requirements. We wouldn't hesitate to recommend them. Thank you again QC.",
  },
  {
    name: "Jennifer Schroeder",
    role: "Remortgage Client",
    rating: 5,
    date: "2 years ago",
    solicitor: "Sanju",
    review: "QC came highly recommended and didn’t disappoint. Sanju made our remortgage effortless with great communication and efficiency.",
  },
  {
    name: "Karnan Kamalapahan",
    role: "Property Buyer",
    rating: 5,
    date: "2 years ago",
    solicitor: "Manju Mohan",
    review: "Manju Mohan done very good service with my case and she did very past service and very helpful",
  },
  {
    name: "Yordan Stoyanov",
    role: "Property Buyer",
    rating: 5,
    date: "2 years ago",
    solicitor: "Manju S Mohan",
    review: "Manju S Mohan helped me purchase a property successfully. Although there were long waits for information from third parties, Quality Conveyancing Ltd were always easy to communicate with through email and phone. Their fees were clearly explained at the start of the process and their documents and reports easy to understand. I would recommend them and would use them again for my next property transaction. Really pleased with their services.",
  },
];

const stats = [
  { label: "Google Rating", value: "4.8 / 5.0" },
  { label: "Completion Rate", value: "80% Faster" },
  { label: "Client Recommendation", value: "90% Repeat Clients" },
  { label: "Fixed Fee Guarantee", value: "100% Transparent" },
];

export default function EndorsementsPage() {
  return (
    <div className="min-h-screen bg-lightBg flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-20">
        {/* Endorsements Hero (Matching Standard 2-Column Split Layout) */}
        <section className="bg-legalDark text-white py-16 px-6 lg:px-12">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 text-center lg:text-left">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-tealAccent/20 text-tealAccent text-xs font-semibold uppercase tracking-widest mb-4">
                  <Award className="w-3.5 h-3.5" /> Client Reviews & Endorsements
                </span>
                <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 tracking-tight leading-tight">
                  Trusted Property Conveyancing Reviews London
                </h1>
                <p className="text-white/80 text-sm md:text-base max-w-xl font-light leading-relaxed mb-6">
                  Read genuine 5-star Google reviews from homebuyers, sellers, and remortgage clients who experienced our 80% faster conveyancing service.
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-tealAccent text-legalDark font-bold text-xs px-6 py-3 rounded-lg hover:shadow-lg transition-all"
                  >
                    Instruct Our Legal Team <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative h-64 md:h-72 lg:h-[320px] rounded-2xl overflow-hidden shadow-xl border border-white/10">
                <Image
                  src={endorsementsHeroImg}
                  alt="Quality Conveyancing Client Reviews and Endorsements London"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="py-8 bg-warmGray/40 border-b border-gray-200">
          <div className="container mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl md:text-3xl font-serif font-bold text-legalDark">{s.value}</div>
                  <div className="text-xs text-legalDark/75 uppercase tracking-wider font-semibold mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Endorsements Grid */}
        <section className="py-16 px-6 lg:px-12 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="flex items-center justify-center gap-1 text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-legalDark mb-3">
                What Our Clients Say About Us
              </h2>
              <p className="text-legalDark/80 text-sm md:text-base leading-relaxed">
                Verified 5-Star Google Reviews from property buyers, sellers, and first-time buyers across London and the UK.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {endorsementsList.map((item, idx) => {
                const cardTints = [
                  "bg-emerald-50/40 border-emerald-100/80",
                  "bg-sky-50/40 border-sky-100/80",
                  "bg-amber-50/40 border-amber-100/80",
                  "bg-purple-50/40 border-purple-100/80",
                ];
                const tintStyle = cardTints[idx % cardTints.length];

                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.04 }}
                    className={`p-8 ${tintStyle} border rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-all relative`}
                  >
                    <div>
                      <Quote className="w-8 h-8 text-tealAccent/50 mb-4" />
                      
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex text-amber-400 gap-1">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400" />
                          ))}
                        </div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider bg-white/80 border border-gray-200 text-legalDark px-2.5 py-0.5 rounded-full shadow-sm">
                          Solicitor: {item.solicitor}
                        </span>
                      </div>

                      <p className="text-legalDark/85 text-xs md:text-sm leading-relaxed mb-6 font-normal">
                        "{item.review}"
                      </p>
                    </div>

                    <div className="border-t border-gray-200/60 pt-4 flex items-center justify-between">
                      <div>
                        <h4 className="font-bold font-serif text-legalDark text-base">{item.name}</h4>
                        <p className="text-legalDark/70 text-xs font-medium">{item.role}</p>
                      </div>
                      <span className="text-xs text-legalDark/65 font-medium">{item.date} • Google Review</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
