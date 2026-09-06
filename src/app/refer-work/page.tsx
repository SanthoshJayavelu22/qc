"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Award, Zap, ArrowRight, CheckCircle2, Building, Handshake, ChevronDown, Phone, Mail, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ReferWorkPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"partner" | "friend">("partner");
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const openModal = (type: "partner" | "friend") => {
    setModalType(type);
    setSubmitted(false);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const introducerFaqs = [
    {
      q: "How do I refer a client?",
      a: "Simply click 'Become a Partner' or 'Refer a Friend/Family', fill in your contact details along with your client or friend's details, and our team will handle the entire conveyancing onboarding process seamlessly."
    },
    {
      q: "What are your introducer referral fees?",
      a: "We pay up to £200 referral fee directly upon completion of each conveyancing transaction. There are no limits on the number of referrals you can submit."
    },
    {
      q: "How fast do I get paid?",
      a: "Get paid faster! Because Quality Conveyancing completes transactions 80% faster than the national UK average, your referral commission is triggered and disbursed much quicker upon completion."
    },
    {
      q: "How can I track the status of my referrals?",
      a: "You will receive dedicated email milestone notifications at key case stages (Instruction, Conveyancing Report, Exchange, and Completion)."
    }
  ];

  return (
    <div className="min-h-screen bg-lightBg flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-20">
        
        {/* 1) Hero Banner (Aligned with Quality Conveyancing Brand Theme: bg-legalDark & tealAccent) */}
        <section className="bg-legalDark text-white py-20 px-6 lg:px-12 relative overflow-hidden">
          {/* Subtle background glow matching site theme */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tealAccent/10 rounded-full blur-[150px] pointer-events-none" />

          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-tealAccent/20 text-tealAccent text-xs font-semibold uppercase tracking-widest mb-6 border border-tealAccent/30">
                <Users className="w-3.5 h-3.5" /> Introducer & Referral Partner Program
              </span>
              
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight tracking-tight text-white">
                Exceptional Service, Every Time.
              </h1>
              
              <p className="text-white/85 text-lg md:text-xl font-light leading-relaxed mb-8">
                Discover what it’s like to work with a conveyancer that makes you look good. Recommend clients or friends and earn up to <span className="text-tealAccent font-bold">£200 referral on completion</span>.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 items-center">
                <button
                  onClick={() => openModal("partner")}
                  className="px-8 py-4 bg-tealAccent hover:bg-white text-legalDark font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg hover:shadow-tealAccent/20"
                >
                  Become a Partner
                </button>

                <button
                  onClick={() => openModal("friend")}
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all border border-white/20"
                >
                  Refer a Friend / Family
                </button>
              </div>

              {/* Get Paid Faster Badge */}
              <div className="mt-8 inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-5 py-2.5 rounded-full text-xs text-white/90 border border-white/10">
                <Zap className="w-4 h-4 text-tealAccent shrink-0" />
                <span><strong className="text-white">Get Paid Faster:</strong> We complete 80% faster than national average so get your commission faster!</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2) Why Partner With Quality Conveyancing (3 Cards) */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-tealAccent mb-2 block">FOR INTRODUCERS</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-legalDark">
                Why partner with Quality Conveyancing?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Card 1 */}
              <div className="p-8 rounded-3xl bg-emerald-50/50 border border-emerald-100 hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-700 mb-6 shadow-sm">
                    <Handshake className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-legalDark mb-3">Build Loyalty</h3>
                  <p className="text-legalDark/75 text-sm leading-relaxed">
                    Recommend a conveyancer who makes you look good. Fast turnarounds, proactive milestone updates, direct conveyancer access, and zero chasing.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-8 rounded-3xl bg-amber-50/50 border border-amber-100 hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-amber-700 mb-6 shadow-sm">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-legalDark mb-3">Earn More & Get Paid Faster</h3>
                  <p className="text-legalDark/75 text-sm leading-relaxed">
                    We pay up to <strong className="text-legalDark">£200 referral fee on completion</strong>. Because we complete 80% faster than the national average, your commission arrives in your account significantly faster.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-8 rounded-3xl bg-purple-50/50 border border-purple-100 hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-purple-700 mb-6 shadow-sm">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-legalDark mb-3">Boost Productivity</h3>
                  <p className="text-legalDark/75 text-sm leading-relaxed">
                    Fewer client complaints, fewer chaser calls, fewer headaches. Our high-rated service quality means less administrative friction for your team.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3) Referral Journey Explained in Simple Steps (Smart Legal Style) */}
        <section className="py-20 px-6 lg:px-12 bg-warmGray/40 border-y border-gray-100">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-legalDark mb-4">
                Your Referral Journey Explained in Simple Steps
              </h2>
              <p className="text-legalDark/75 text-base">
                How our introducer and client referral program works from instruction to payout.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                
                <div className="flex items-start gap-6 p-6 bg-white rounded-2xl border border-gray-200/80 shadow-sm">
                  <span className="text-4xl font-serif font-bold text-tealAccent shrink-0">01</span>
                  <div>
                    <h3 className="text-lg font-bold font-serif text-legalDark mb-1">Provide your details & client info</h3>
                    <p className="text-legalDark/75 text-sm leading-relaxed">
                      Enter your contact information and your client or friend's details through our simple online portal form.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-6 bg-white rounded-2xl border border-gray-200/80 shadow-sm">
                  <span className="text-4xl font-serif font-bold text-tealAccent shrink-0">02</span>
                  <div>
                    <h3 className="text-lg font-bold font-serif text-legalDark mb-1">We contact your client / friend</h3>
                    <p className="text-legalDark/75 text-sm leading-relaxed">
                      We will provide them a clear, transparent conveyancing quote. Rest assured we treat their details with utmost professionalism and care.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-6 bg-white rounded-2xl border border-gray-200/80 shadow-sm">
                  <span className="text-4xl font-serif font-bold text-tealAccent shrink-0">03</span>
                  <div>
                    <h3 className="text-lg font-bold font-serif text-legalDark mb-1">Fast completion & £200 commission payout</h3>
                    <p className="text-legalDark/75 text-sm leading-relaxed">
                      Upon successful completion, your £200 referral fee is released immediately into your chosen account.
                    </p>
                  </div>
                </div>

              </div>

              {/* Right Side Card Banner */}
              <div className="bg-legalDark text-white p-10 rounded-3xl border border-white/10 shadow-2xl flex flex-col justify-between min-h-[380px]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-tealAccent mb-3 block">APPROVED LENDER PANEL</span>
                  <h3 className="text-3xl font-serif font-bold mb-4">On panel with 50+ major mortgage lenders</h3>
                  <p className="text-white/80 text-sm leading-relaxed font-light mb-6">
                    We are approved with over 50 mortgage lenders, including all of the UK's top 20 lenders. Your clients don't need to look anywhere else.
                  </p>
                </div>

                <div>
                  <button
                    onClick={() => openModal("partner")}
                    className="inline-flex items-center gap-2 bg-tealAccent hover:bg-white text-legalDark font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all"
                  >
                    <span>Become a Partner Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 4) Common Questions (Alecto Style FAQ) */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-tealAccent mb-2 block">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-legalDark">
                Common questions from partners
              </h2>
            </div>

            <div className="space-y-4">
              {introducerFaqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <button
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full flex items-center justify-between text-left py-3 group"
                  >
                    <span className="text-lg font-serif font-bold text-legalDark group-hover:text-tealAccent transition-colors">
                      {faq.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-legalDark/60 transition-transform duration-300 ${activeFaq === index ? "rotate-180 text-tealAccent" : ""}`} />
                  </button>
                  {activeFaq === index && (
                    <p className="text-legalDark/80 text-sm leading-relaxed pt-2 font-light">
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* Pop-up Referral Registration Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-lg w-full p-8 relative shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 text-gray-500 hover:text-legalDark hover:bg-gray-200 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <h2 className="text-2xl font-serif font-bold text-legalDark mb-1">
                {modalType === "partner" ? "Become a Partner" : "Refer a Friend / Family"}
              </h2>
              <p className="text-legalDark/70 text-xs mb-6">
                Register to join our introducer network and earn £200 referral fee upon completion.
              </p>

              {submitted ? (
                <div className="p-6 bg-emerald-50 text-emerald-900 rounded-2xl text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-teal-600 mx-auto" />
                  <h3 className="text-xl font-bold font-serif">Referral Submitted!</h3>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    Thank you! Our partner team will reach out shortly to confirm details and initiate your client's quote.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-legalDark uppercase tracking-wider mb-1">FIRST NAME *</label>
                      <input
                        type="text"
                        required
                        placeholder="John"
                        className="w-full bg-[#f3f4f6] border border-gray-300 rounded-lg px-4 py-2.5 text-xs text-legalDark focus:bg-white focus:outline-none focus:border-legalDark"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-legalDark uppercase tracking-wider mb-1">LAST NAME *</label>
                      <input
                        type="text"
                        required
                        placeholder="Smith"
                        className="w-full bg-[#f3f4f6] border border-gray-300 rounded-lg px-4 py-2.5 text-xs text-legalDark focus:bg-white focus:outline-none focus:border-legalDark"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-legalDark uppercase tracking-wider mb-1">YOUR EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full bg-[#f3f4f6] border border-gray-300 rounded-lg px-4 py-2.5 text-xs text-legalDark focus:bg-white focus:outline-none focus:border-legalDark"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-legalDark uppercase tracking-wider mb-1">YOUR PHONE NUMBER *</label>
                    <input
                      type="tel"
                      required
                      placeholder="07123 456 789"
                      className="w-full bg-[#f3f4f6] border border-gray-300 rounded-lg px-4 py-2.5 text-xs text-legalDark focus:bg-white focus:outline-none focus:border-legalDark"
                    />
                  </div>

                  {modalType === "partner" && (
                    <div>
                      <label className="block text-[11px] font-bold text-legalDark uppercase tracking-wider mb-1">BUSINESS TYPE / COMPANY</label>
                      <input
                        type="text"
                        placeholder="Estate Agent / Mortgage Broker / Independent"
                        className="w-full bg-[#f3f4f6] border border-gray-300 rounded-lg px-4 py-2.5 text-xs text-legalDark focus:bg-white focus:outline-none focus:border-legalDark"
                      />
                    </div>
                  )}

                  <div className="border-t border-gray-200 pt-4 mt-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-legalDark mb-3">Referred Client / Friend Info</h4>
                    <div className="space-y-3">
                      <input
                        type="text"
                        required
                        placeholder="Client Full Name *"
                        className="w-full bg-[#f3f4f6] border border-gray-300 rounded-lg px-4 py-2.5 text-xs text-legalDark focus:bg-white focus:outline-none focus:border-legalDark"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Client Telephone Number *"
                        className="w-full bg-[#f3f4f6] border border-gray-300 rounded-lg px-4 py-2.5 text-xs text-legalDark focus:bg-white focus:outline-none focus:border-legalDark"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Client Email Address *"
                        className="w-full bg-[#f3f4f6] border border-gray-300 rounded-lg px-4 py-2.5 text-xs text-legalDark focus:bg-white focus:outline-none focus:border-legalDark"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-legalDark hover:bg-legalNavy text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all mt-4"
                  >
                    Submit Registration & Referral
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
