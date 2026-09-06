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
    name: "SY H",
    role: "Property Seller & Buyer",
    rating: 5,
    date: "Recent",
    solicitor: "Chandni & Pat",
    review: "I don't normally post reviews and I'm not usually impressed with many things but Chandni at QC blew me away. I had two properties to sell and one to purchase all of which were complex and had difficult buyers and solicitors. I have used QC for years and Chandni was exceptional. Pat was always in the background overseeing progress and available. Huge thank you to Ewa who has been brilliant over the years. QC are worth every penny!",
  },
  {
    name: "Luc Hardy",
    role: "Freehold Purchase",
    rating: 5,
    date: "Recent",
    solicitor: "Jay Chudasama & Ewa",
    review: "I had a fantastic experience with Quality Conveyancing in my journey to buy my freehold property. The process was expertly managed and felt smooth, professional, and supportive from start to finish. A special thanks to Jay Chudasama, who was outstanding throughout — incredibly patient, sincere and always contactable. I also want to mention Ewa Stanisz too whose additional support throughout was invaluable (and very much appreciated) and kept the conveyancing process on track.",
  },
  {
    name: "Varun Sant",
    role: "Home Purchase",
    rating: 5,
    date: "Recent",
    solicitor: "Diksha",
    review: "I had an excellent experience with the solicitor team handling my house purchase. They were highly professional, proactive, and always approachable — ensuring a smooth process from start to finish. A special mention to Diksha, who managed the deal right from its inception with great efficiency and clear communication. Her commitment and attention to detail made the entire journey effortless and stress-free.",
  },
  {
    name: "Ethan Keating",
    role: "First Time Homebuyer",
    rating: 5,
    date: "Recent",
    solicitor: "Chandni",
    review: "We recently used Quality Conveyancing for our first-home purchase and Chandni and the rest of the team were fantastic from start to finish. She was constantly keeping us updated and would also reply back to any questions we had within a timely fashion. You are paying a premium but you are getting a premium service for sure, would highly recommend! They made it as stress-free as possible.",
  },
  {
    name: "Dilara Sen",
    role: "Flat Sale & Home Purchase",
    rating: 5,
    date: "Recent",
    solicitor: "Ayushi",
    review: "I've had such a great experience working with Ayushi for my conveyancing. She helped me sell my flat, and a few months later, I was so happy with her service that I came back to her when buying my new home. Ayushi is incredibly professional, efficient, and always kept me updated at every step. She made both the sale and purchase processes smooth and stress-free. I can't recommend her enough!",
  },
  {
    name: "Sarah Appleton",
    role: "Home Purchase",
    rating: 5,
    date: "Recent",
    solicitor: "Chandni",
    review: "It has been an absolute pleasure working with Chandni and her team. They have been consistently professional and took the time to build rapport with us. I chose QC because my sister had also raved about Chandni from her own purchase last year. My purchase was a little complicated but Chandni was unphased and knew exactly what approach to take. Would highly recommend!",
  },
  {
    name: "Robel F",
    role: "Property Buyer",
    rating: 5,
    date: "Recent",
    solicitor: "Manju",
    review: "I cannot recommend Quality Conveyancing highly enough. From start to finish, the entire process was handled with professionalism, efficiency and excellent communication. Special thank you goes to Manju, who was outstanding throughout. She was always responsive, patient and willing to explain every stage clearly. Level of customer service exceeded my expectations!",
  },
  {
    name: "Milan Sudor",
    role: "Flat Purchase London",
    rating: 5,
    date: "Recent",
    solicitor: "Chandni",
    review: "I worked with Chandni on my flat purchase in London and I was very happy with her services. She was always professional, clear and responsive. Buying a flat can be stressful but Chandni made the process much easier for me. She worked well with deadlines and kept me updated throughout. Would definitely recommend Chandni and the team!!",
  },
  {
    name: "Raya Khal",
    role: "Home Purchase",
    rating: 5,
    date: "Recent",
    solicitor: "Jayshree",
    review: "I honestly don't think I could have gone through this whole process without Jayshree. From start to finish, she went above and beyond in ways I didn't even expect. She kept us constantly in the loop. She handled everything with such calmness and professionalism. The company is amazing and all the team feel like one big family. Thank you for everything x",
  },
  {
    name: "Yordan Stoyanov",
    role: "Property Buyer",
    rating: 5,
    date: "Recent",
    solicitor: "Manju S Mohan",
    review: "Manju S Mohan helped me purchase a property successfully. Quality Conveyancing Ltd were always easy to communicate with through email and phone. Their fees were clearly explained and documents easy to understand. I would recommend them and use them again!",
  },
];

const stats = [
  { label: "Google Rating", value: "4.8 / 5.0" },
  { label: "Completion Rate", value: "80% Faster" },
  { label: "Client Recommendation", value: "90% Repeat Clients" },
  { label: "Transparent Pricing", value: "100% Transparent" },
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
                    className="inline-flex items-center gap-2 bg-white hover:bg-tealAccent text-legalDark font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg transition-all border border-white/20 group"
                  >
                    Instruct Our Legal Team <ArrowRight className="w-4 h-4 text-tealAccent group-hover:text-legalDark group-hover:translate-x-1 transition-all" />
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
