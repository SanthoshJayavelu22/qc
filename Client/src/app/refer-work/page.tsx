"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Award, Zap, ArrowRight, CheckCircle2, Handshake, ChevronDown, Gift, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ReferWorkPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"partner" | "friend">("friend");
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
      q: "How do I refer a client or friend?",
      a: "Simply click 'Refer a Friend / Family' or 'Become a Partner', fill in your contact details along with your referred person's details, and our team will handle the conveyancing onboarding process smoothly."
    },
    {
      q: "What is the referral reward?",
      a: "You will earn a £100 reward upon completion of their transaction. Furthermore, to welcome your friend, we will also apply a £100 discount to their final invoice!"
    },
    {
      q: "Who is eligible for this referral scheme?",
      a: "This referral scheme is exclusive to current and past Quality Conveyancing clients as well as registered professional introducer partners."
    },
    {
      q: "How fast do I receive the £100 reward?",
      a: "Because Quality Conveyancing completes transactions 80% faster than the national UK average, your £100 referral reward is triggered and disbursed promptly upon completion."
    }
  ];

  return (
    <div className="min-h-screen bg-lightBg flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-20">
        
        {/* 1) Hero Banner */}
        <section className="bg-legalDark text-white py-16 md:py-24 px-6 lg:px-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-tealAccent/15 rounded-full blur-[150px] pointer-events-none" />

          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-tealAccent/30 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-6 border border-tealAccent/40 shadow-sm">
                <Gift className="w-4 h-4 text-emerald-300" /> Refer & Earn Scheme
              </span>
              
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight tracking-tight text-white">
                Refer a Friend & Receive £100
              </h1>
              
              {/* Mandatory Introductory Text from PDF */}
              <div className="p-6 md:p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 mb-8 shadow-xl">
                <p className="text-white text-base md:text-lg leading-relaxed font-normal">
                  "Introduce a friend to our legal services and earn a <strong className="text-emerald-300 font-bold underline decoration-emerald-400/60 decoration-2 underline-offset-4">£100 reward</strong> upon completion of their transaction. To welcome them, we’ll also apply a <strong className="text-emerald-300 font-bold underline decoration-emerald-400/60 decoration-2 underline-offset-4">£100 discount</strong> to their final invoice. This referral scheme is exclusive to current and past Quality Conveyancing clients."
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 items-center mb-8">
                <button
                  onClick={() => openModal("friend")}
                  className="px-8 py-4 bg-tealAccent hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg hover:shadow-emerald-500/20 active:scale-95"
                >
                  Refer a Friend / Family Now
                </button>

                <button
                  onClick={() => openModal("partner")}
                  className="px-8 py-4 bg-white/15 hover:bg-white/25 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all border border-white/30 active:scale-95"
                >
                  Professional Introducers
                </button>
              </div>

              {/* Get Paid Faster Badge */}
              <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-5 py-3 rounded-full text-xs text-white border border-white/20 shadow-sm">
                <Zap className="w-4 h-4 text-emerald-300 shrink-0" />
                <span><strong className="text-emerald-300 font-bold">Get Paid Faster:</strong> We complete 80% faster than national average so your reward arrives faster!</span>
              </div>
            </div>
          </div>
        </section>

        {/* 2) Why Partner With Quality Conveyancing (3 Cards) */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-tealAccent mb-2 block">REFERRAL BENEFITS</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-legalDark">
                Why recommend Quality Conveyancing?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Card 1 */}
              <div className="p-8 rounded-3xl bg-emerald-50/50 border border-emerald-100 hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-emerald-700 mb-6 shadow-sm">
                    <Handshake className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-legalDark mb-3">£100 Reward For You</h3>
                  <p className="text-legalDark/75 text-sm leading-relaxed">
                    Earn a cash reward of £100 directly into your bank account as soon as your referred client's transaction completes.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-8 rounded-3xl bg-amber-50/50 border border-amber-100 hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-amber-700 mb-6 shadow-sm">
                    <Gift className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-legalDark mb-3">£100 Discount For Them</h3>
                  <p className="text-legalDark/75 text-sm leading-relaxed">
                    Your referred friend or family member receives an instant £100 discount off their final conveyancing invoice.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-8 rounded-3xl bg-purple-50/50 border border-purple-100 hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-purple-700 mb-6 shadow-sm">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-legalDark mb-3">5-Star Legal Service</h3>
                  <p className="text-legalDark/75 text-sm leading-relaxed">
                    Rest easy knowing your friend will receive top-tier, proactive legal advice with a dedicated caseworker and 80% faster completions.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3) Referral Journey */}
        <section className="py-20 px-6 lg:px-12 bg-warmGray/40 border-y border-gray-100">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-legalDark mb-4">
                Your Referral Journey Explained
              </h2>
              <p className="text-legalDark/75 text-base">
                Three simple steps to refer a client or friend and claim your reward.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                
                <div className="flex items-start gap-6 p-6 bg-white rounded-2xl border border-gray-200/80 shadow-sm">
                  <span className="text-4xl font-serif font-bold text-tealAccent shrink-0">01</span>
                  <div>
                    <h3 className="text-lg font-bold font-serif text-legalDark mb-1">Submit referral form</h3>
                    <p className="text-legalDark/75 text-sm leading-relaxed">
                      Enter your contact information and your friend's details through our quick registration form.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-6 bg-white rounded-2xl border border-gray-200/80 shadow-sm">
                  <span className="text-4xl font-serif font-bold text-tealAccent shrink-0">02</span>
                  <div>
                    <h3 className="text-lg font-bold font-serif text-legalDark mb-1">We apply their £100 discount</h3>
                    <p className="text-legalDark/75 text-sm leading-relaxed">
                      We reach out to your friend with an itemised conveyancing quote and immediately apply their £100 welcome discount.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-6 bg-white rounded-2xl border border-gray-200/80 shadow-sm">
                  <span className="text-4xl font-serif font-bold text-tealAccent shrink-0">03</span>
                  <div>
                    <h3 className="text-lg font-bold font-serif text-legalDark mb-1">Fast completion & £100 payout</h3>
                    <p className="text-legalDark/75 text-sm leading-relaxed">
                      Upon successful completion, your £100 referral reward is transferred directly to you.
                    </p>
                  </div>
                </div>

              </div>

              {/* Right Side Card */}
              <div className="bg-legalDark text-white p-10 rounded-3xl border border-white/10 shadow-2xl flex flex-col justify-between min-h-[380px]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-tealAccent mb-3 block">EXCLUSIVE REFERRAL PROGRAM</span>
                  <h3 className="text-3xl font-serif font-bold mb-4">Win-Win for you & your friends</h3>
                  <p className="text-white/80 text-sm leading-relaxed font-light mb-6">
                    Our referral scheme is designed to reward our valued clients while giving your friends peace of mind and savings on their property move.
                  </p>
                </div>

                <div>
                  <button
                    onClick={() => openModal("friend")}
                    className="inline-flex items-center gap-2 bg-tealAccent hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all shadow-md active:scale-95"
                  >
                    <span>Refer A Friend & Receive £100</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 4) FAQs */}
        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-tealAccent mb-2 block">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-legalDark">
                Common questions about referrals
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

      {/* Pop-up Referral Registration Modal (Matching Page 16 of PDF) */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md overflow-y-auto">
            <div 
              className="fixed inset-0" 
              onClick={closeModal} 
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border border-gray-100 my-auto z-10 max-h-[85vh] flex flex-col"
            >
              <button
                onClick={closeModal}
                className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 text-gray-500 hover:text-legalDark hover:bg-gray-200 transition-all z-20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4 pr-8">
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-legalDark mb-1">
                  {modalType === "partner" ? "Become a Partner / Introducer" : "Refer a Friend / Family"}
                </h2>
                <p className="text-legalDark/70 text-xs">
                  Register to join our introducer network and earn £100 referral fee upon completion.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 bg-emerald-50 text-emerald-900 rounded-2xl text-center space-y-3 my-auto">
                  <CheckCircle2 className="w-12 h-12 text-teal-600 mx-auto" />
                  <h3 className="text-xl font-bold font-serif">Referral Submitted!</h3>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    Thank you! Our referral team will reach out shortly to confirm details and apply the £100 discount to your friend's quote.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-3.5 overflow-y-auto pr-1"
                >
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold text-legalDark uppercase tracking-wider mb-1">FIRST NAME *</label>
                      <input
                        type="text"
                        required
                        placeholder="John"
                        className="w-full bg-[#f3f4f6] border border-gray-300 rounded-lg px-3.5 py-2 text-xs text-legalDark focus:bg-white focus:outline-none focus:border-legalDark"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-legalDark uppercase tracking-wider mb-1">LAST NAME *</label>
                      <input
                        type="text"
                        required
                        placeholder="Smith"
                        className="w-full bg-[#f3f4f6] border border-gray-300 rounded-lg px-3.5 py-2 text-xs text-legalDark focus:bg-white focus:outline-none focus:border-legalDark"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-legalDark uppercase tracking-wider mb-1">YOUR EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full bg-[#f3f4f6] border border-gray-300 rounded-lg px-3.5 py-2 text-xs text-legalDark focus:bg-white focus:outline-none focus:border-legalDark"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-legalDark uppercase tracking-wider mb-1">YOUR PHONE NUMBER *</label>
                    <input
                      type="tel"
                      required
                      placeholder="07123 456 789"
                      className="w-full bg-[#f3f4f6] border border-gray-300 rounded-lg px-3.5 py-2 text-xs text-legalDark focus:bg-white focus:outline-none focus:border-legalDark"
                    />
                  </div>

                  <div className="border-t border-gray-200 pt-3 mt-1">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-legalDark mb-2.5">REFERRED CLIENT / FRIEND INFO</h4>
                    <div className="space-y-2.5">
                      <input
                        type="text"
                        required
                        placeholder="Client Full Name *"
                        className="w-full bg-[#f3f4f6] border border-gray-300 rounded-lg px-3.5 py-2 text-xs text-legalDark focus:bg-white focus:outline-none focus:border-legalDark"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Client Telephone Number *"
                        className="w-full bg-[#f3f4f6] border border-gray-300 rounded-lg px-3.5 py-2 text-xs text-legalDark focus:bg-white focus:outline-none focus:border-legalDark"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Client Email Address *"
                        className="w-full bg-[#f3f4f6] border border-gray-300 rounded-lg px-3.5 py-2 text-xs text-legalDark focus:bg-white focus:outline-none focus:border-legalDark"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-legalDark hover:bg-black text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all mt-3 shrink-0"
                  >
                    SUBMIT REGISTRATION & REFERRAL
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
