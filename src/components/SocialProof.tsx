"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

import happyClientImg from "@/assets/couple-unboxing.png";

export default function SocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "SY H",
      title: "A 5-Star Rated Service",
      source: "Google Review",
      text: "I don't normally post reviews and I'm not usually impressed with many things but Chandni at QC blew me away. I had two properties to sell and one to purchase all of which were complex and had difficult buyers and solicitors. I have used QC for years and Chandni was exceptional. Pat was always in the background overseeing progress and available. Huge thank you to Ewa who has been brilliant over the years. QC are worth every penny!",
    },
    {
      name: "Luc Hardy",
      title: "Fantastic Freehold Purchase Experience",
      source: "Google Review",
      text: "I had a fantastic experience with Quality Conveyancing in my journey to buy my freehold property. The process was expertly managed and felt smooth, professional, and supportive from start to finish. A special thanks to Jay Chudasama, who was outstanding throughout — incredibly patient, sincere and always contactable. I also want to mention Ewa Stanisz too whose additional support throughout was invaluable (and very much appreciated) and kept the conveyancing process on track. Overall the enthusiasm of the whole team made a stressful process feel much more manageable. I would happily recommend Quality Conveyancing to anyone.",
    },
    {
      name: "varun sant",
      title: "Effortless & Stress-Free Journey",
      source: "Google Review",
      text: "I had an excellent experience with the solicitor team handling my house purchase. They were highly professional, proactive, and always approachable — ensuring a smooth process from start to finish. A special mention to Diksha, who managed the deal right from its inception with great efficiency and clear communication. Her commitment and attention to detail made the entire journey effortless and stress-free. I truly appreciate the team's support and would strongly recommend their services to anyone looking for a reliable and responsive conveyancing partner.",
    },
    {
      name: "Ethan Keating",
      title: "Premium Service For First Home",
      source: "Google Review",
      text: "We recently used Quality Conveyancing for our first-home purchase and Chandni and the rest of the team were fantastic from start to finish. She was constantly keeping us updated and would also reply back to any questions we had within a timely fashion. You are paying a premium but you are getting a premium service for sure, would highly recommend! They made it as stress-free as possible.",
    },
    {
      name: "Dilara Sen",
      title: "Smooth Sale & New Purchase",
      source: "Google Review",
      text: "I've had such a great experience working with Ayushi for my conveyancing. She helped me sell my flat, and a few months later, I was so happy with her service that I came back to her when buying my new home. Ayushi is incredibly professional, efficient, and always kept me updated at every step. She made both the sale and purchase processes smooth and stress-free, which I really appreciated. It's rare to find someone so reliable and easy to work with — I can't recommend her enough!",
    },
    {
      name: "Sarah Appleton",
      title: "Absolute Pleasure Working With Chandni",
      source: "Google Review",
      text: "It has been an absolute pleasure working with Chandni and her team. They have been consistently professional and took the time to build rapport with us. I chose QC because my sister had also raved about Chandni from her own purchase last year. My purchase was a little complicated but Chandni was unphased and knew exactly what approach to take. I've bought a number of homes over the years and mostly had lengthy completion dates with lots of me having to chase - this has been the complete opposite. Would highly recommend!",
    },
    {
      name: "Robel F",
      title: "Exceeded My Expectations",
      source: "Google Review",
      text: "I cannot recommend Quality Conveyancing highly enough. From start to finish, the entire process was handled with professionalism, efficiency and excellent communication. Special thank you goes to Manju, who was outstanding throughout. She was always responsive, patient and willing to explain every stage clearly. Level of customer service exceeded my expectations!",
    },
    {
      name: "Milan Sudor",
      title: "Seamless Property Purchase",
      source: "Google Review",
      text: "I worked with Chandni on my flat purchase in London and I was very happy with her services. She was always professional, clear and responsive. Buying a flat can be stressful but Chandni made the process much easier for me. She worked well with deadlines and kept me updated throughout. Would definitely recommend Chandni and the team!!",
    },
    {
      name: "Raya Khal",
      title: "Felt Like One Big Family",
      source: "Google Review",
      text: "I honestly don't think I could have gone through this whole process without Jayshree. From start to finish, she went above and beyond in ways I didn't even expect. She kept us constantly in the loop. She handled everything with such calmness and professionalism. The company is amazing and all the team feel like one big family. Thank you for everything x",
    },
    {
      name: "Yordan Stoyanov",
      title: "Clear & Easy Communication",
      source: "Google Review",
      text: "Manju S Mohan helped me purchase a property successfully. Quality Conveyancing Ltd were always easy to communicate with through email and phone. Their fees were clearly explained and documents easy to understand. I would recommend them and use them again!",
    },
    {
      name: "Chandresh Kanani",
      title: "Fast & Proactive Service",
      source: "Google Review",
      text: "I recently worked with Sanju on my home purchase, and he was fantastic. He quickly initiated all necessary searches, preventing any delays. Highly recommended!",
    },
  ];

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 px-6 lg:px-12 bg-white text-legalDark">
      <div className="container mx-auto max-w-6xl">
        
        {/* Setfords-style Split Review Card */}
        <div className="bg-[#1f2638] rounded-3xl overflow-hidden shadow-2xl border border-gray-800 grid lg:grid-cols-12 min-h-[480px]">
          
          {/* Left Image Side */}
          <div className="lg:col-span-6 relative min-h-[300px] lg:min-h-full">
            <Image
              src={happyClientImg}
              alt="Happy Homebuyer Client Review - Quality Conveyancing"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1f2638]/40 hidden lg:block" />
          </div>

          {/* Right Dark Review Card Content */}
          <div className="lg:col-span-6 p-8 md:p-12 flex flex-col justify-between text-white relative">
            
            {/* Top Quote Icon */}
            <div className="flex items-center justify-between mb-4">
              <Quote className="w-10 h-10 text-white/30 rotate-180" />
              <div className="flex items-center gap-1 bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-semibold border border-emerald-500/30">
                <Star className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                <span>Google Verified Review ({currentIndex + 1} of {testimonials.length})</span>
              </div>
            </div>

            {/* Review Title & Content Slider */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="my-4"
              >
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-3 tracking-tight">
                  {current.title}
                </h3>

                {/* 5 Green Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center">
                      <Star className="w-4 h-4 fill-white text-white" />
                    </div>
                  ))}
                </div>

                <p className="text-white/85 text-sm md:text-base leading-relaxed font-light min-h-[140px]">
                  "{current.text}"
                </p>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-white font-bold text-base font-serif">{current.name}</p>
                    <p className="text-white/60 text-xs">{current.source}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Bottom Slider Controls & Quote Icon */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                <button
                  onClick={prevReview}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all"
                  aria-label="Previous Review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextReview}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all"
                  aria-label="Next Review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <Quote className="w-10 h-10 text-white/30" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
