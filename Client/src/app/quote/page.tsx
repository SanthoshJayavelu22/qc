"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeeCalculator from "@/components/FeeCalculator";
import Link from "next/link";
import { 
  Sparkles, 
  ShieldCheck, 
  Phone, 
  FileText, 
  Tag, 
  AlertCircle,
  ArrowRight
} from "lucide-react";

export default function QuotePage() {
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
        <section className="bg-legalDark text-white py-14 sm:py-16 px-6 lg:px-12 relative overflow-hidden">
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-tealAccent/20 text-tealAccent text-xs font-semibold uppercase tracking-widest mb-4">
                <Sparkles className="w-3.5 h-3.5" /> Conveyancing Quote Enquiry
              </span>
              <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 tracking-tight leading-tight">
                Get Your Conveyancing Quote
              </h1>
              <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed mb-6">
                Tell us about your property transaction and our specialist conveyancing lawyers will prepare a transparent, tailored quote for you.
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

        {/* Interactive Conveyancing Quote Enquiry Form (Lead Only - receives leads data) */}
        <FeeCalculator leadOnly={true} />

        {/* SEO / AEO / GEO Key Highlights Section */}
        <section className="py-16 px-6 lg:px-12 bg-white border-t border-gray-200">
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
              <div className="p-6 bg-warmGray/40 rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-tealAccent/20 text-legalDark flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5 text-tealAccent" />
                </div>
                <h3 className="font-serif font-bold text-lg text-legalDark mb-2">Highly Skilled Lawyers</h3>
                <p className="text-textMuted text-xs leading-relaxed">
                  Our team of experienced solicitors and licensed conveyancers will handle your transaction with utmost care and speed.
                </p>
              </div>

              <div className="p-6 bg-warmGray/40 rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-tealAccent/20 text-legalDark flex items-center justify-center mb-4">
                  <Phone className="w-5 h-5 text-tealAccent" />
                </div>
                <h3 className="font-serif font-bold text-lg text-legalDark mb-2">Direct Phone Line</h3>
                <p className="text-textMuted text-xs leading-relaxed">
                  You receive the direct phone number and personal email of your conveyancing solicitor—never a call centre.
                </p>
              </div>

              <div className="p-6 bg-warmGray/40 rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-tealAccent/20 text-legalDark flex items-center justify-center mb-4">
                  <FileText className="w-5 h-5 text-tealAccent" />
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

