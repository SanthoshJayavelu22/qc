"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";
import { 
  Phone, 
  Mail, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft,
  Building,
  Home,
  Key,
  Scale,
  RefreshCw,
  UserCheck,
  FileText,
  Tag,
  AlertCircle,
  Loader2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const transactionTypes = [
  { id: "Sale", label: "Sale", icon: Key, desc: "Sell your residential property" },
  { id: "Purchase", label: "Purchase", icon: Home, desc: "Buy a new residential property" },
  { id: "Sale & Purchase", label: "Sale & Purchase", icon: RefreshCw, desc: "Combined sale & purchase transaction" },
  { id: "Re-Mortgage", label: "Re-Mortgage", icon: ShieldCheck, desc: "Switch lender or refinance" },
  { id: "Transfer of Equity", label: "Transfer of Equity", icon: Scale, desc: "Change property ownership shares" },
  { id: "Commercial Sale", label: "Commercial Sale", icon: Building, desc: "Sell commercial real estate/lease" },
  { id: "Commercial Purchase", label: "Commercial Purchase", icon: Building, desc: "Buy commercial real estate/lease" },
];

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form State initialized with WP form options
  const [formData, setFormData] = useState({
    transaction: "Purchase",
    purchasePropValue: "",
    salePropValue: "",
    purchasePropValueBoth: "",
    salePropValueBoth: "",
    tenureForSale: "Freehold",
    tenureForPurchase: "Freehold",
    remortgageValue: "",
    transferOfEquityValue: "",
    commercialSaleValue: "",
    commercialPurchaseValue: "",
    tenure: "Freehold",
    numberOfClients: "1",
    name: "",
    email: "",
    phone: "",
    comment: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);

  const scrollToFormTop = () => {
    const element = document.getElementById("wizard-form-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 250, behavior: "smooth" });
    }
  };

  const validateStep2 = () => {
    const errs: Record<string, string> = {};

    if (formData.transaction === "Purchase") {
      if (!formData.purchasePropValue.trim()) {
        errs.purchasePropValue = "Please enter a estimated purchase price value.";
      }
    } else if (formData.transaction === "Sale") {
      if (!formData.salePropValue.trim()) {
        errs.salePropValue = "Please enter a estimated sale price value.";
      }
    } else if (formData.transaction === "Sale & Purchase") {
      if (!formData.purchasePropValueBoth.trim()) {
        errs.purchasePropValueBoth = "Please enter purchase price value.";
      }
      if (!formData.salePropValueBoth.trim()) {
        errs.salePropValueBoth = "Please enter sale price value.";
      }
    } else if (formData.transaction === "Re-Mortgage") {
      if (!formData.remortgageValue.trim()) {
        errs.remortgageValue = "Please enter re-mortgage price value.";
      }
    } else if (formData.transaction === "Transfer of Equity") {
      if (!formData.transferOfEquityValue.trim()) {
        errs.transferOfEquityValue = "Please enter transfer of equity price value.";
      }
    } else if (formData.transaction === "Commercial Sale") {
      if (!formData.commercialSaleValue.trim()) {
        errs.commercialSaleValue = "Please enter commercial sale value.";
      }
    } else if (formData.transaction === "Commercial Purchase") {
      if (!formData.commercialPurchaseValue.trim()) {
        errs.commercialPurchaseValue = "Please enter commercial purchase value.";
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep3 = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = "Full name is required.";
    }

    if (!formData.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address (e.g. name@example.com).";
    }

    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required.";
    } else if (formData.phone.trim().replace(/\s+/g, "").length < 7) {
      errs.phone = "Please enter a valid telephone number.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const nextStep = () => {
    setSubmitError(null);
    if (step === 1) {
      setStep(2);
      setTimeout(scrollToFormTop, 50);
    } else if (step === 2) {
      if (validateStep2()) {
        setStep(3);
        setTimeout(scrollToFormTop, 50);
      }
    }
  };

  const prevStep = () => {
    setSubmitError(null);
    setErrors({});
    setStep((prev) => Math.max(prev - 1, 1));
    setTimeout(scrollToFormTop, 50);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateStep3()) return;

    setLoading(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/santhoshjayavelu57@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          _subject: `New Conveyancing Quote Request: ${formData.name}`,
          _template: "table",
          "Transaction Type": formData.transaction,
          "Purchase Price Value": formData.purchasePropValue || formData.purchasePropValueBoth || "N/A",
          "Sale Price Value": formData.salePropValue || formData.salePropValueBoth || "N/A",
          "Re-Mortgage Value": formData.remortgageValue || "N/A",
          "Transfer of Equity Value": formData.transferOfEquityValue || "N/A",
          "Commercial Value": formData.commercialSaleValue || formData.commercialPurchaseValue || "N/A",
          "Tenure": formData.tenure,
          "Tenure for Sale": formData.tenureForSale,
          "Tenure for Purchase": formData.tenureForPurchase,
          "Number of Clients": formData.numberOfClients,
          "Client Name": formData.name,
          "Client Email": formData.email,
          "Client Phone": formData.phone,
          "Specific Comments": formData.comment || "None",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setSubmitError("Failed to transmit quote request. Please call us directly on 020 3763 6767.");
      }
    } catch (err) {
      console.error("Quote FormSubmit error:", err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Quality Conveyancing Instant Quote",
    "description": "Get an instant, transparent conveyancing quote for property purchase, sale, re-mortgage, or transfer of equity in London.",
    "telephone": "020 3763 6767",
    "areaServed": ["London", "England", "Wales", "United Kingdom"],
    "offers": {
      "@type": "Offer",
      "priceCurrency": "GBP",
      "description": "Transparent conveyancing quotes by highly skilled & experienced lawyers"
    }
  };

  return (
    <div className="min-h-screen bg-lightBg flex flex-col font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <Header />

      <main className="flex-grow pt-20">
        {/* Banner Section */}
        <section className="bg-legalDark text-white py-16 px-6 lg:px-12 relative overflow-hidden">
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-tealAccent/20 text-tealAccent text-xs font-semibold uppercase tracking-widest mb-4">
                <Sparkles className="w-3.5 h-3.5" /> Instant Quote Estimator
              </span>
              <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 tracking-tight leading-tight">
                Get Your Conveyancing Quote
              </h1>
              <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed mb-6">
                Transparent quotes with zero hidden charges. Backed by our highly skilled & experienced lawyers.
              </p>

              {/* Price Information Page Link Banner */}
              <div className="mb-4">
                <Link
                  href="/price-information"
                  className="inline-flex items-center gap-2 bg-white hover:bg-tealAccent text-legalDark font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded-xl transition-all shadow-lg border border-white/20 group"
                >
                  <FileText className="w-4 h-4 text-tealAccent group-hover:text-legalDark transition-colors" />
                  <span>Click here for price information</span>
                  <ArrowRight className="w-3.5 h-3.5 text-tealAccent group-hover:text-legalDark group-hover:translate-x-1 transition-all" />
                </Link>
              </div>

              {/* Special Offer Alert Banner */}
              <div className="inline-flex flex-wrap items-center justify-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-xl text-xs font-medium shadow-sm">
                <Tag className="w-4 h-4 text-tealAccent shrink-0" />
                <span>Keep visiting this space for exciting offers and discounts!</span>
              </div>
            </div>
          </div>
        </section>

        {/* Urgent Contact Strip */}
        <section className="bg-amber-500/10 border-y border-amber-500/20 py-3.5 px-6">
          <div className="container mx-auto max-w-6xl text-center flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-legalDark font-medium">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>For any urgent quote please call our business development manager on</span>
            <a href="tel:07843476594" className="font-bold text-legalDark underline hover:text-tealAccent">
              07843 476594
            </a>
            <span>or landline</span>
            <a href="tel:02037636767" className="font-bold text-legalDark underline hover:text-tealAccent">
              020 3763 6767
            </a>
          </div>
        </section>

        {/* Main Wizard Form Section */}
        <section id="wizard-form-section" className="py-16 px-6 lg:px-12 bg-white scroll-mt-24">
          <div className="container mx-auto max-w-4xl">
            {/* Step Wizard Header Indicator */}
            <div className="mb-12">
              <div className="flex items-center justify-between max-w-xl mx-auto relative mb-4">
                <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-200 -z-10 -translate-y-1/2" />
                <div 
                  className="absolute top-1/2 left-0 h-[2px] bg-legalDark -z-10 -translate-y-1/2 transition-all duration-500"
                  style={{ width: step === 1 ? "0%" : step === 2 ? "50%" : "100%" }}
                />

                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    step >= 1 ? "bg-legalDark text-tealAccent shadow-md" : "bg-gray-100 text-gray-400"
                  }`}>
                    1
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-legalDark mt-2">Transaction</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    step >= 2 ? "bg-legalDark text-tealAccent shadow-md" : "bg-gray-100 text-gray-400"
                  }`}>
                    2
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-legalDark mt-2">Property Details</span>
                </div>

                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    step === 3 ? "bg-legalDark text-tealAccent shadow-md" : "bg-gray-100 text-gray-400"
                  }`}>
                    3
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-legalDark mt-2">Your Contact</span>
                </div>
              </div>
            </div>

            {/* Form Box Container */}
            <div className="bg-warmGray/30 p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-sm">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-16 h-16 bg-tealAccent/20 rounded-full flex items-center justify-center mx-auto mb-6 text-legalDark">
                    <CheckCircle2 className="w-10 h-10 text-teal-600" />
                  </div>
                  {formData.transaction.startsWith("Commercial") ? (
                    <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-left mb-8">
                      <p className="text-legalDark text-sm sm:text-base font-bold leading-relaxed">
                        * Thank you for requesting a commercial conveyancing quote with us. To ensure we provide the most accurate, custom-tailored pricing for your specific transaction, one of our commercial specialists will review your information and contact you. Alternatively, please call us on 020 3763 6767 and speak to one of our friendly team members right away. We look forward to speaking with you! If you have any urgent questions in the meantime, please feel free to give us a call or send us an email. We look forward to speaking with you!
                      </p>
                    </div>
                  ) : (
                    <p className="text-textMuted text-sm sm:text-base max-w-lg mx-auto leading-relaxed mb-8">
                      Thank you, <strong className="text-legalDark">{formData.name}</strong>. Our conveyancing team has received your details for a <strong>{formData.transaction}</strong> transaction and will email your itemised quote shortly.
                    </p>
                  )}

                  <div className="p-6 bg-white rounded-2xl border border-gray-200 max-w-md mx-auto text-left space-y-2 mb-6 text-xs text-textMuted">
                    <div><strong className="text-legalDark">Selected Service:</strong> {formData.transaction}</div>
                    <div><strong className="text-legalDark">Contact Email:</strong> {formData.email}</div>
                    <div><strong className="text-legalDark">Contact Phone:</strong> {formData.phone}</div>
                  </div>

                  <p className="text-xs font-bold text-legalDark text-center mb-8">
                    * We may have seasonal discounts available for your quote. Please get in touch at 020 3763 6767 to discuss
                  </p>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setStep(1);
                    }}
                    className="inline-flex items-center gap-2 bg-legalDark text-white font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-xl hover:bg-legalNavy transition-colors"
                  >
                    Calculate Another Quote
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Select Transaction Type */}
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="text-center mb-8">
                        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-legalDark">
                          Select Your Transaction Type
                        </h2>
                        <p className="text-textMuted text-xs sm:text-sm mt-1">
                          Choose the property legal service you require to customize your fee breakdown.
                        </p>
                      </div>

                      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {transactionTypes.map((item) => {
                          const IconComponent = item.icon;
                          const selected = formData.transaction === item.id;
                          return (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => setFormData({ ...formData, transaction: item.id })}
                              className={`p-5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between ${
                                selected 
                                  ? "bg-white border-legalDark shadow-md ring-2 ring-legalDark" 
                                  : "bg-white/60 border-gray-200 hover:border-gray-300 hover:bg-white"
                              }`}
                            >
                              <div className="flex items-center justify-between mb-3">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                                  selected ? "bg-legalDark text-tealAccent" : "bg-warmGray text-legalDark"
                                }`}>
                                  <IconComponent className="w-5 h-5" />
                                </div>
                                {selected && <CheckCircle2 className="w-5 h-5 text-tealAccent" />}
                              </div>
                              <div>
                                <h3 className="font-serif font-bold text-legalDark text-base">{item.label}</h3>
                                <p className="text-textMuted text-[11px] mt-1">{item.desc}</p>
                              </div>
                            </button>
                          );
                        })}
                      </div>

                      <div className="pt-6 flex justify-end">
                        <button
                          type="button"
                          onClick={nextStep}
                          className="inline-flex items-center gap-2 bg-legalDark text-white font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl hover:bg-legalNavy transition-all shadow-md"
                        >
                          Continue to Property Details <ArrowRight className="w-4 h-4 text-tealAccent" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Property Valuation & Details */}
                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="text-center mb-8">
                        <span className="text-xs font-semibold uppercase tracking-widest text-tealAccent mb-1 block">
                          Transaction: {formData.transaction}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-legalDark">
                          Property Values & Tenure Details
                        </h2>
                        <p className="text-textMuted text-xs sm:text-sm mt-1">
                          Provide estimated property values for an accurate legal fee & disbursement quote.
                        </p>
                      </div>

                      {/* Conditional Fields based on transaction selection */}
                      <div className="space-y-5 max-w-xl mx-auto">
                        {formData.transaction === "Purchase" && (
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-legalDark mb-1.5">
                              Purchase Price Value (£) *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="e.g. £450,000"
                              value={formData.purchasePropValue}
                              onChange={(e) => {
                                setFormData({ ...formData, purchasePropValue: e.target.value });
                                if (errors.purchasePropValue) setErrors({ ...errors, purchasePropValue: "" });
                              }}
                              className={`w-full px-4 py-3 bg-white border ${errors.purchasePropValue ? "border-red-500 bg-red-50/20" : "border-gray-200"} rounded-xl text-sm text-legalDark focus:outline-none focus:border-legalDark`}
                            />
                            {errors.purchasePropValue && (
                              <p className="text-red-500 text-xs mt-1 font-medium">{errors.purchasePropValue}</p>
                            )}
                          </div>
                        )}

                        {formData.transaction === "Sale" && (
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-legalDark mb-1.5">
                              Sale Price Value (£) *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="e.g. £400,000"
                              value={formData.salePropValue}
                              onChange={(e) => {
                                setFormData({ ...formData, salePropValue: e.target.value });
                                if (errors.salePropValue) setErrors({ ...errors, salePropValue: "" });
                              }}
                              className={`w-full px-4 py-3 bg-white border ${errors.salePropValue ? "border-red-500 bg-red-50/20" : "border-gray-200"} rounded-xl text-sm text-legalDark focus:outline-none focus:border-legalDark`}
                            />
                            {errors.salePropValue && (
                              <p className="text-red-500 text-xs mt-1 font-medium">{errors.salePropValue}</p>
                            )}
                          </div>
                        )}

                        {formData.transaction === "Sale & Purchase" && (
                          <div className="space-y-4">
                            <div className="grid sm:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-legalDark mb-1.5">
                                  Purchase Price Value (£) *
                                </label>
                                <input
                                  type="text"
                                  required
                                  placeholder="e.g. £500,000"
                                  value={formData.purchasePropValueBoth}
                                  onChange={(e) => {
                                    setFormData({ ...formData, purchasePropValueBoth: e.target.value });
                                    if (errors.purchasePropValueBoth) setErrors({ ...errors, purchasePropValueBoth: "" });
                                  }}
                                  className={`w-full px-4 py-3 bg-white border ${errors.purchasePropValueBoth ? "border-red-500 bg-red-50/20" : "border-gray-200"} rounded-xl text-sm text-legalDark focus:outline-none focus:border-legalDark`}
                                />
                                {errors.purchasePropValueBoth && (
                                  <p className="text-red-500 text-xs mt-1 font-medium">{errors.purchasePropValueBoth}</p>
                                )}
                              </div>
                              <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-legalDark mb-1.5">
                                  Sale Price Value (£) *
                                </label>
                                <input
                                  type="text"
                                  required
                                  placeholder="e.g. £350,000"
                                  value={formData.salePropValueBoth}
                                  onChange={(e) => {
                                    setFormData({ ...formData, salePropValueBoth: e.target.value });
                                    if (errors.salePropValueBoth) setErrors({ ...errors, salePropValueBoth: "" });
                                  }}
                                  className={`w-full px-4 py-3 bg-white border ${errors.salePropValueBoth ? "border-red-500 bg-red-50/20" : "border-gray-200"} rounded-xl text-sm text-legalDark focus:outline-none focus:border-legalDark`}
                                />
                                {errors.salePropValueBoth && (
                                  <p className="text-red-500 text-xs mt-1 font-medium">{errors.salePropValueBoth}</p>
                                )}
                              </div>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-legalDark mb-1.5">
                                  Tenure for Sale
                                </label>
                                <select
                                  value={formData.tenureForSale}
                                  onChange={(e) => setFormData({ ...formData, tenureForSale: e.target.value })}
                                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-legalDark focus:outline-none focus:border-legalDark"
                                >
                                  <option value="Freehold">Freehold</option>
                                  <option value="Leasehold">Leasehold</option>
                                </select>
                              </div>
                              <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-legalDark mb-1.5">
                                  Tenure for Purchase
                                </label>
                                <select
                                  value={formData.tenureForPurchase}
                                  onChange={(e) => setFormData({ ...formData, tenureForPurchase: e.target.value })}
                                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-legalDark focus:outline-none focus:border-legalDark"
                                >
                                  <option value="Freehold">Freehold</option>
                                  <option value="Leasehold">Leasehold</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        )}

                        {formData.transaction === "Re-Mortgage" && (
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-legalDark mb-1.5">
                              Price Value of Re-Mortgage (£) *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="e.g. £250,000"
                              value={formData.remortgageValue}
                              onChange={(e) => {
                                setFormData({ ...formData, remortgageValue: e.target.value });
                                if (errors.remortgageValue) setErrors({ ...errors, remortgageValue: "" });
                              }}
                              className={`w-full px-4 py-3 bg-white border ${errors.remortgageValue ? "border-red-500 bg-red-50/20" : "border-gray-200"} rounded-xl text-sm text-legalDark focus:outline-none focus:border-legalDark`}
                            />
                            {errors.remortgageValue && (
                              <p className="text-red-500 text-xs mt-1 font-medium">{errors.remortgageValue}</p>
                            )}
                          </div>
                        )}

                        {formData.transaction === "Transfer of Equity" && (
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-legalDark mb-1.5">
                              Price Value of Transfer of Equity (£) *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="e.g. £200,000"
                              value={formData.transferOfEquityValue}
                              onChange={(e) => {
                                setFormData({ ...formData, transferOfEquityValue: e.target.value });
                                if (errors.transferOfEquityValue) setErrors({ ...errors, transferOfEquityValue: "" });
                              }}
                              className={`w-full px-4 py-3 bg-white border ${errors.transferOfEquityValue ? "border-red-500 bg-red-50/20" : "border-gray-200"} rounded-xl text-sm text-legalDark focus:outline-none focus:border-legalDark`}
                            />
                            {errors.transferOfEquityValue && (
                              <p className="text-red-500 text-xs mt-1 font-medium">{errors.transferOfEquityValue}</p>
                            )}
                          </div>
                        )}

                        {formData.transaction === "Commercial Sale" && (
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-legalDark mb-1.5">
                              Price Value of Commercial Sale (£) *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="e.g. £600,000"
                              value={formData.commercialSaleValue}
                              onChange={(e) => {
                                setFormData({ ...formData, commercialSaleValue: e.target.value });
                                if (errors.commercialSaleValue) setErrors({ ...errors, commercialSaleValue: "" });
                              }}
                              className={`w-full px-4 py-3 bg-white border ${errors.commercialSaleValue ? "border-red-500 bg-red-50/20" : "border-gray-200"} rounded-xl text-sm text-legalDark focus:outline-none focus:border-legalDark`}
                            />
                            {errors.commercialSaleValue && (
                              <p className="text-red-500 text-xs mt-1 font-medium">{errors.commercialSaleValue}</p>
                            )}
                          </div>
                        )}

                        {formData.transaction === "Commercial Purchase" && (
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-legalDark mb-1.5">
                              Price Value of Commercial Purchase (£) *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="e.g. £750,000"
                              value={formData.commercialPurchaseValue}
                              onChange={(e) => {
                                setFormData({ ...formData, commercialPurchaseValue: e.target.value });
                                if (errors.commercialPurchaseValue) setErrors({ ...errors, commercialPurchaseValue: "" });
                              }}
                              className={`w-full px-4 py-3 bg-white border ${errors.commercialPurchaseValue ? "border-red-500 bg-red-50/20" : "border-gray-200"} rounded-xl text-sm text-legalDark focus:outline-none focus:border-legalDark`}
                            />
                            {errors.commercialPurchaseValue && (
                              <p className="text-red-500 text-xs mt-1 font-medium">{errors.commercialPurchaseValue}</p>
                            )}
                          </div>
                        )}

                        {/* Tenure Selection (for non Sale & Purchase) */}
                        {formData.transaction !== "Sale & Purchase" && (
                          <div className="grid sm:grid-cols-2 gap-4 pt-2">
                            <div>
                              <label className="block text-xs font-bold uppercase tracking-wider text-legalDark mb-1.5">
                                Property Tenure
                              </label>
                              <select
                                value={formData.tenure}
                                onChange={(e) => setFormData({ ...formData, tenure: e.target.value })}
                                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-legalDark focus:outline-none focus:border-legalDark"
                              >
                                <option value="Freehold">Freehold</option>
                                <option value="Leasehold">Leasehold</option>
                              </select>
                            </div>

                            <div>
                              <label className="block text-xs font-bold uppercase tracking-wider text-legalDark mb-1.5">
                                Number of Clients *
                              </label>
                              <select
                                value={formData.numberOfClients}
                                onChange={(e) => setFormData({ ...formData, numberOfClients: e.target.value })}
                                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-legalDark focus:outline-none focus:border-legalDark"
                              >
                                <option value="1">1 Client</option>
                                <option value="2">2 Clients</option>
                                <option value="3">3 Clients</option>
                                <option value="4">4 Clients</option>
                              </select>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="pt-6 flex justify-between">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="inline-flex items-center gap-2 bg-white border border-gray-200 text-legalDark font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl hover:bg-gray-50 transition-colors"
                        >
                          <ArrowLeft className="w-4 h-4" /> Back
                        </button>
                        <button
                          type="button"
                          onClick={nextStep}
                          className="inline-flex items-center gap-2 bg-legalDark text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-xl hover:bg-legalNavy transition-all shadow-md"
                        >
                          Continue to Contact Info <ArrowRight className="w-4 h-4 text-tealAccent" />
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Contact & Comments */}
                  {step === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="text-center mb-8">
                        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-legalDark">
                          Where Should We Send Your Quote?
                        </h2>
                        <p className="text-textMuted text-xs sm:text-sm mt-1">
                          We will generate an itemized quote with disbursements and email it directly.
                        </p>
                      </div>

                      {submitError && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-xs font-medium max-w-xl mx-auto flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          <span>{submitError}</span>
                        </div>
                      )}

                      <div className="space-y-4 max-w-xl mx-auto">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-legalDark mb-1.5">
                            Your Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="John Smith"
                            value={formData.name}
                            onChange={(e) => {
                              setFormData({ ...formData, name: e.target.value });
                              if (errors.name) setErrors({ ...errors, name: "" });
                            }}
                            className={`w-full px-4 py-3 bg-white border ${errors.name ? "border-red-500 bg-red-50/20" : "border-gray-200"} rounded-xl text-sm text-legalDark focus:outline-none focus:border-legalDark`}
                          />
                          {errors.name && (
                            <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>
                          )}
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-legalDark mb-1.5">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              required
                              placeholder="john@example.com"
                              value={formData.email}
                              onChange={(e) => {
                                setFormData({ ...formData, email: e.target.value });
                                if (errors.email) setErrors({ ...errors, email: "" });
                              }}
                              className={`w-full px-4 py-3 bg-white border ${errors.email ? "border-red-500 bg-red-50/20" : "border-gray-200"} rounded-xl text-sm text-legalDark focus:outline-none focus:border-legalDark`}
                            />
                            {errors.email && (
                              <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>
                            )}
                          </div>

                          <div>
                            <label className="block text-xs font-bold uppercase tracking-wider text-legalDark mb-1.5">
                              Contact Phone No *
                            </label>
                            <input
                              type="tel"
                              required
                              placeholder="07123 456789"
                              value={formData.phone}
                              onChange={(e) => {
                                setFormData({ ...formData, phone: e.target.value });
                                if (errors.phone) setErrors({ ...errors, phone: "" });
                              }}
                              className={`w-full px-4 py-3 bg-white border ${errors.phone ? "border-red-500 bg-red-50/20" : "border-gray-200"} rounded-xl text-sm text-legalDark focus:outline-none focus:border-legalDark`}
                            />
                            {errors.phone && (
                              <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone}</p>
                            )}
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-legalDark mb-1.5">
                            Specific Comments / Property Postcode
                          </label>
                          <textarea
                            rows={3}
                            placeholder="Any specific questions, mortgage lender details, or target completion dates..."
                            value={formData.comment}
                            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-legalDark focus:outline-none focus:border-legalDark"
                          />
                        </div>

                        <div className="pt-2 text-xs text-legalDark font-medium flex items-center justify-between border-t border-gray-200/80">
                          <span>* Transparent legal quotes</span>
                          <a
                            href="/price-information"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-amber-600 hover:underline font-bold"
                          >
                            Click here for price information
                          </a>
                        </div>
                      </div>

                      <div className="pt-6 flex justify-between">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="inline-flex items-center gap-2 bg-white border border-gray-200 text-legalDark font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl hover:bg-gray-50 transition-colors"
                        >
                          <ArrowLeft className="w-4 h-4" /> Back
                        </button>
                        <button
                          type="submit"
                          disabled={loading}
                          className="inline-flex items-center gap-2 bg-legalDark text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-xl hover:bg-legalNavy transition-all shadow-md disabled:opacity-50"
                        >
                          {loading ? (
                            <>
                              <Loader2 className="w-4 h-4 text-tealAccent animate-spin" /> Submitting...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 text-tealAccent" /> GET A QUOTE NOW
                            </>
                          )}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </form>
              )}
            </div>
          </div>
        </section>

        {/* SEO / AEO / GEO Key Highlights Section */}
        <section className="py-16 px-6 lg:px-12 bg-warmGray/40 border-t border-gray-200">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-tealAccent mb-2 block">
                Why Choose Quality Conveyancing?
              </span>
              <h2 className="text-3xl font-serif font-bold text-legalDark">
                Transparent Quotes & Direct Dial Conveyancers
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-tealAccent/20 text-legalDark flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-lg text-legalDark mb-2">Highly Skilled Lawyers</h3>
                <p className="text-textMuted text-xs leading-relaxed">
                  Our team of experienced solicitors and licensed conveyancers will handle your transaction with utmost care and speed.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-tealAccent/20 text-legalDark flex items-center justify-center mb-4">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-lg text-legalDark mb-2">Direct Phone Line</h3>
                <p className="text-textMuted text-xs leading-relaxed">
                  You receive the direct phone number and personal email of your conveyancing solicitor—never a call centre.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-tealAccent/20 text-legalDark flex items-center justify-center mb-4">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-lg text-legalDark mb-2">Itemised Disbursements</h3>
                <p className="text-textMuted text-xs leading-relaxed">
                  Complete breakdown of Land Registry fees, SDLT, local authority searches, and conveyancing legal fees.
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
