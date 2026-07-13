"use client";

import { motion } from "framer-motion";
import { UserCheck, PhoneCall, ShieldCheck, Ban, Clock, Star } from "lucide-react";

export default function ValuePropositions() {
  const cards = [
    {
      title: "Fast Service",
      icon: <Clock className="w-8 h-8 text-cyanAccent" />,
      description: "Our innovative use of technology has taken us to greater heights as we now have an 80% faster completion rate than the industry average."
    },
    {
      title: "Proactive Conveyancers",
      icon: <UserCheck className="w-8 h-8 text-cyanAccent" />,
      description: "In our line of trade, being proactive is a necessity. Every day spent waiting is a waste of time, and is detrimental to completion."
    },
    {
      title: "Direct Line to Conveyancer",
      icon: <PhoneCall className="w-8 h-8 text-cyanAccent" />,
      description: "As a policy, we give all our clients a direct number to get in touch with their dedicated conveyancer."
    },
    {
      title: "Trusted Service",
      icon: <ShieldCheck className="w-8 h-8 text-cyanAccent" />,
      description: "We are recommended by many estate agents and mortgage advisors because they know how good we are and have total trust in our service."
    },
    {
      title: "Stress Free Service",
      icon: <Ban className="w-8 h-8 text-cyanAccent" />,
      description: "No need to take time off work to see us. We can handle the entire transaction seamlessly by email, telephone, and post."
    },
    {
      title: "Client-Focused Approach",
      icon: <Star className="w-8 h-8 text-cyanAccent" />,
      description: "We prioritize the needs and expectations of our clients, working closely with you to understand your specific goals and objectives."
    }
  ];

  return (
    <section className="py-32 bg-[#050B14] relative overflow-hidden border-b border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-cyanAccent/5 rounded-[100%] blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyanAccent to-blue-500">Quality Conveyancing?</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyanAccent to-blue-500 mx-auto mb-8 rounded-full shadow-[0_0_10px_rgba(0,255,255,0.5)]"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl font-light leading-relaxed">
            We set the standard for modern property law by combining expert legal knowledge with unparalleled, tech-driven client service.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: index * 0.15, 
                duration: 0.6, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyanAccent to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative h-full flex flex-col items-center text-center bg-[#0a1120] border border-white/10 rounded-2xl p-10 hover:border-cyanAccent/50 transition-colors duration-300 shadow-2xl">
                <div className="w-20 h-20 bg-[#0f172a] rounded-full flex items-center justify-center mb-8 shadow-inner border border-white/5 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(0,255,255,0.2)] transition-all duration-300">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyanAccent transition-colors">
                  {card.title}
                </h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
