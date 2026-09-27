"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, AlertCircle, FileText, Lock, Scale, CheckCircle2 } from "lucide-react";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-lightBg flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-20 pb-16">
        <section className="bg-legalDark text-white py-16 px-6 lg:px-12">
          <div className="container mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-tealAccent/20 text-tealAccent text-xs font-semibold uppercase tracking-widest mb-4">
              <Shield className="w-3.5 h-3.5" /> Legal Notice
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
              Disclaimer & Limitation of Liability
            </h1>
            <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto font-light">
              Important legal information regarding your use of Quality Conveyancing website contents and services.
            </p>
          </div>
        </section>

        <section className="py-12 px-6 lg:px-12">
          <div className="container mx-auto max-w-4xl bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-8 text-legalDark text-sm leading-relaxed">
            
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-tealAccent" /> Disclaimer of Liability for Content
              </h2>
              <p className="text-textMuted mb-4">
                Quality Conveyancing is providing this site on an ‘as is’ basis and makes no representations or warranties of any kind with respect to this site or its contents and disclaims all such representations and warranties. In addition, Quality Conveyancing makes no representations or warranties about the accuracy, completeness, or suitability for any purpose of the information and related graphics published in this site. The information contained in this site may contain technical inaccuracies or typographical errors. All liability of Quality Conveyancing howsoever arising for any such inaccuracies or errors is expressly excluded to the fullest extent permitted by law.
              </p>
              <p className="text-textMuted">
                Neither Quality Conveyancing nor any of its directors, partners, employees or other representatives will be liable for loss or damage arising out of or in connection with the use of this site. This is a comprehensive limitation of liability that applies to all damages of any kind, including (without limitation) compensatory, direct, indirect or consequential damages, loss of data, income or profit, loss of or damage to property and claims of third parties.
              </p>
            </div>

            <hr className="border-gray-100" />

            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Scale className="w-5 h-5 text-tealAccent" /> Consumer Rights & Professional Advice
              </h2>
              <p className="text-textMuted mb-4">
                Notwithstanding the foregoing, none of the exclusions and limitations in the clause are intended to limit any rights you may have as a consumer under local law or other statutory rights which may not be excluded nor in any way to exclude or limit Quality Conveyancing ability to you for death or personal injury resulting from our negligence or that of our employees or agents.
              </p>
              <p className="text-textMuted">
                Your use of this website and the documents available through it is subject to our terms and conditions. The information and opinions contained on this website are for general information purposes only. Quality Conveyancing have used reasonable endeavours to ensure the accuracy and completeness of the contents of the pages on this site but the information and opinions are not intended to constitute legal or other professional advice, and should not be relied on or treated as a substitute for specific advice relevant to particular circumstances. Any specific legal questions should be addressed to one of Quality Conveyancing’s lawyers.
              </p>
            </div>

            <hr className="border-gray-100" />

            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-tealAccent" /> External Links & Copyright Notice
              </h2>
              <p className="text-textMuted mb-4">
                Certain parts of this site link to external internet sites, and other external internet sites may link to this website. Quality Conveyancing is not responsible for the content of any external internet sites. Quality Conveyancing does not endorse or accept responsibility for the material of any website referred to or accessed through this site.
              </p>
              <p className="text-textMuted">
                Access and downloads of the contents of the pages on this site is permitted only on a temporary basis and for the sole purpose of viewing such information. You must not permanently copy or reproduce any part of the contents of the pages on this site without prior written permission from Quality Conveyancing. This site is protected by copyright and database right, both of which are owned by Quality Conveyancing. “Quality Conveyancing” is a registered trademark.
              </p>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
