import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShieldCheck, Mail, Phone, ExternalLink, AlertCircle, FileText } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CLC Compensation Fund | Quality Conveyancing",
  description:
    "Information on the Council for Licensed Conveyancers (CLC) Compensation Fund for clients of Quality Conveyancing.",
};

export default function CompensationFundPage() {
  return (
    <div className="min-h-screen bg-lightBg flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-20 pb-16">
        {/* Banner */}
        <section className="bg-legalDark text-white py-16 px-6 lg:px-12">
          <div className="container mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-tealAccent/20 text-tealAccent text-xs font-semibold uppercase tracking-widest mb-4">
              <ShieldCheck className="w-3.5 h-3.5" /> Regulatory Protection
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
              CLC Compensation Fund
            </h1>
            <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto font-light">
              Protection for clients through our regulatory body, the Council for Licensed Conveyancers.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 px-6 lg:px-12">
          <div className="container mx-auto max-w-4xl bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-8 text-legalDark text-sm leading-relaxed">
            
            {/* Overview */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-tealAccent" /> Overview of the Compensation Fund
              </h2>
              <p className="text-textMuted leading-relaxed mb-4">
                Our Regulatory body the Council for Licensed Conveyancers (CLC) offer a compensation fund if you have suffered loss having instructed a CLC regulated practice and suffering loss of money or monetary value through dishonesty, fraud, negligence, or failure to account by a CLC regulated Practice for money received and the legal Practice is unable to meet its liability in full.
              </p>
              <p className="text-textMuted leading-relaxed">
                Each claim for compensation will be considered on its own merits and the CLC has an absolute discretion to decide whether to make any payment out of the fund.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Fund of Last Resort */}
            <div className="p-6 bg-warmGray/40 rounded-xl border border-gray-100 space-y-3">
              <h3 className="font-serif font-bold text-legalDark text-base flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" /> A Fund of Last Resort
              </h3>
              <p className="text-textMuted text-xs sm:text-sm leading-relaxed italic">
                The CLC have said of the compensation funds: &ldquo;It is a fund of last resort &ndash; before we accept your claim, we may require you to recover your losses by all other means available, such as by making an insurance claim or by taking court action. The CLC will not consider making a payment unless it is satisfied that a person has taken all necessary and appropriate steps&rdquo;.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* How to Apply */}
            <div className="space-y-4">
              <h2 className="text-xl font-serif font-bold text-legalDark flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-tealAccent" /> How to Apply for Compensation
              </h2>
              <p className="text-textMuted text-xs sm:text-sm">
                You should contact the CLC as soon as possible if you:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-textMuted text-xs sm:text-sm">
                <li>
                  <strong>Are considering making an application for a grant</strong> (applications need to be made within 6 months after you have discovered you may have a claim); or
                </li>
                <li>
                  <strong>Are considering taking legal advice</strong> (since only in exceptional circumstances will the CLC make an allowance for legal costs claimed by an applicant).
                </li>
              </ul>
            </div>

            <hr className="border-gray-100" />

            {/* Application Details & Contact Info */}
            <div className="p-6 bg-legalDark text-white rounded-2xl space-y-4">
              <h3 className="text-lg font-serif font-bold text-tealAccent">
                Council for Licensed Conveyancers Contact Details
              </h3>
              <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                Application Forms can be obtained directly from the CLC by email, telephone, or via their official website:
              </p>
              
              <div className="space-y-2 text-xs sm:text-sm pt-2 border-t border-white/10">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-tealAccent shrink-0" />
                  <span className="text-white/80">Telephone:</span>
                  <a href="tel:02038590904" className="font-bold text-white hover:text-tealAccent">
                    020 3859 0904
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-tealAccent shrink-0" />
                  <span className="text-white/80">Email:</span>
                  <a href="mailto:clc@clc-uk.org" className="text-tealAccent underline font-semibold">
                    clc@clc-uk.org
                  </a>
                </p>
                <p className="flex items-center gap-2 pt-1">
                  <ExternalLink className="w-4 h-4 text-tealAccent shrink-0" />
                  <span className="text-white/80">Official CLC Information:</span>
                  <a
                    href="https://www.clc-uk.org/consumers/compensation/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-tealAccent underline font-semibold hover:text-white"
                  >
                    https://www.clc-uk.org/consumers/compensation/ ↗
                  </a>
                </p>
              </div>
            </div>

            {/* Back Links */}
            <div className="pt-4 flex items-center justify-between text-xs border-t border-gray-100">
              <Link href="/complaints" className="text-teal-700 hover:underline font-semibold">
                ← View Complaints Procedure
              </Link>
              <Link href="/terms-of-business" className="text-textMuted hover:text-legalDark">
                Terms of Business →
              </Link>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
