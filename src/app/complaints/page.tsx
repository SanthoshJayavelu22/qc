"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HelpCircle, Mail, Scale, ShieldCheck, Clock, FileText, CheckCircle2, Building, AlertTriangle } from "lucide-react";

export default function ComplaintsPage() {
  return (
    <div className="min-h-screen bg-lightBg flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-20 pb-16">
        {/* Banner */}
        <section className="bg-legalDark text-white py-16 px-6 lg:px-12">
          <div className="container mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-tealAccent/20 text-tealAccent text-xs font-semibold uppercase tracking-widest mb-4">
              <HelpCircle className="w-3.5 h-3.5" /> Client Support & Service Quality
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
              Complaints Procedure
            </h1>
            <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto font-light">
              We are committed to providing high-quality legal services. We deal with all complaints fairly, promptly, and at no extra cost to you.
            </p>
          </div>
        </section>

        <section className="py-12 px-6 lg:px-12">
          <div className="container mx-auto max-w-4xl bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-8 text-legalDark text-sm leading-relaxed">
            
            {/* Intro */}
            <div>
              <p className="text-textMuted mb-4">
                We are committed to providing a high-quality legal service to all our clients. When something goes wrong, we need you to tell us about it. This will help us to improve our standards. We deal with all complaints fairly, promptly and at no extra cost to you.
              </p>

              <div className="p-5 bg-warmGray/40 rounded-xl border border-gray-100">
                <h3 className="font-serif font-bold text-legalDark text-base mb-1">WHAT IS A COMPLAINT?</h3>
                <p className="text-textMuted text-xs">
                  A report by a client that their expectations of what they consider to be a good service have not been met.
                </p>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* MAKING A COMPLAINT */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-tealAccent" /> MAKING A COMPLAINT
              </h2>
              <p className="text-textMuted mb-4">
                You can register a complaint with the person dealing with your matter, their Supervisor, details of which are given in your initial Client Care Letter, or the Client Care Manager named in your initial Client Care Letter and here:
              </p>

              <div className="p-6 bg-legalDark text-white rounded-xl space-y-2 text-xs">
                <div className="font-bold text-base font-serif text-tealAccent">Mrs Brinda Nicholson</div>
                <p className="text-white/80 font-medium">Client Care Partner</p>
                <p className="text-white/80">Quality Conveyancing Limited</p>
                <p className="text-white/80 flex items-center gap-2 pt-2">
                  <Mail className="w-4 h-4 text-tealAccent shrink-0" />
                  <span>Email address: </span>
                  <a href="mailto:Brinda.Nicholson@qconveyancing.com" className="hover:underline text-tealAccent font-semibold">
                    Brinda.Nicholson@qconveyancing.com
                  </a>
                </p>
              </div>

              <p className="text-textMuted text-xs mt-4">
                In the first instance, we’d prefer if you write to us with full details of your complaint so that we have a good understanding of the issues being highlighted.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* INVESTIGATING THE COMPLAINT */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-tealAccent" /> INVESTIGATING THE COMPLAINT
              </h2>

              <div className="space-y-4 text-textMuted text-xs">
                <div className="p-4 bg-warmGray/30 rounded-xl border border-gray-100">
                  <p className="mb-2">We will acknowledge the complaint within <strong>7 days</strong> of receipt which allows for any postal delays and notify you who will be handling your complaint.</p>
                  <p className="mb-2">We will record your complaint in our central register and open a file for your complaint. We will conduct a full investigation and an independent review of the matter.</p>
                  <p className="mb-2">We will aim to respond in full within <strong>7 days</strong> of receipt of your initial complaint. However, that may not always be possible, particularly where the complaint is of a more complex nature. We may require more time, but we will let you know the reason for the delay in responding fully and when you will receive a full response. Usually, our full response will be provided within <strong>28 days</strong> of receipt of your initial complaint.</p>
                  <p className="mb-2">We may also invite you to meet with the Supervisor to gather more information and resolve the matter.</p>
                  <p>We will reply to you, always in writing following the outcome of the review of the complaints investigated.</p>
                </div>

                <p className="text-legalDark font-medium">
                  If you remain dissatisfied with the outcome, or the way the complaint has been handled, you may write to the Client Care Manager at the address above, who will make such further investigations as are necessary.
                </p>

                <p className="text-textMuted">
                  We will generally aim to do this within <strong>14 days</strong> of receipt of your notification and any further information you wish to be considered. This will happen in one of the following ways –
                </p>
                <ul className="list-disc pl-5 space-y-1 text-textMuted">
                  <li>The Supervisor will review his/her own decision.</li>
                  <li>Client Care Manager will review your complaint.</li>
                </ul>
                <p className="text-textMuted">
                  The Client Care Manager will inform you of the conclusions and any alternative proposals to resolve the complaint.
                </p>
                <p className="text-textMuted">
                  If still unresolved at this stage, you may take the complaint to the Legal Ombudsman or, in accordance with the Alternative Dispute Resolution Regulations to an Alternative Dispute Resolution (ADR) Scheme Provider. We will always issue a final letter advising you of this.
                </p>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* LEGAL OMBUDSMAN */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Scale className="w-5 h-5 text-tealAccent" /> LEGAL OMBUDSMAN
              </h2>
              <p className="text-textMuted mb-3">
                The Legal Ombudsman is the independent body established by the Office for Legal Complaints under the Legal Services Act 2007 to deal with complaints against Solicitors.
              </p>
              <p className="text-textMuted font-semibold text-xs mb-2">The Legal Ombudsman may:</p>
              <ul className="list-disc pl-5 space-y-1 text-textMuted text-xs mb-4">
                <li>Investigate the quality of professional service supplied by a conveyancer or licenced conveyancing firm to a client.</li>
                <li>Investigate allegations that a conveyancer or licenced conveyancing firm has breached rules of professional conduct.</li>
                <li>Investigate allegations that a conveyancer or licenced conveyancing firm has unreasonably refused to supply a professional service to a prospective client.</li>
                <li>Investigate allegations that a conveyancer or licenced conveyancing firm has persistently or unreasonably offered a professional service that the client does not want.</li>
              </ul>
              <p className="text-textMuted text-xs mb-3">
                Before it will consider a complaint the Legal Ombudsman generally requires that the firm’s internal Complaints Procedure (outlined above) has been exhausted. If the Legal Ombudsman is satisfied that the firm’s proposals for resolving a complaint are reasonable, it may decline to investigate further.
              </p>
              <p className="text-textMuted text-xs mb-3">
                You will have to bring your complaint to the Legal Ombudsman within <strong>a year</strong> from the date of the act or omission being complained about; or one year of you realising there was a cause for complaint concern. You must refer your concerns to the Legal Ombudsman within <strong>six months</strong> of our final response to you.
              </p>

              <div className="p-4 bg-warmGray/50 rounded-xl border border-gray-100 text-xs space-y-1 text-textMuted">
                <strong className="text-legalDark block mb-1">The Legal Ombudsman’s address and contact details are:</strong>
                <p>PO Box 6167, Slough, SL1 0EH</p>
                <p>Telephone: 0300 555 0333</p>
                <p>Website: <a href="https://www.legalombudsman.org.uk" target="_blank" rel="noreferrer" className="text-legalDark underline">www.legalombudsman.org.uk</a></p>
                <p>Email: <a href="mailto:enquiries@legalombudsman.org.uk" className="text-legalDark underline">enquiries@legalombudsman.org.uk</a></p>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* THE COUNCIL FOR LICENCED CONVEYANCERS */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-tealAccent" /> THE COUNCIL FOR LICENCED CONVEYANCERS
              </h2>
              <p className="text-textMuted mb-3 text-xs">
                Our Regulator, the Council for Licenced Conveyancers can help you if you are concerned about our behaviour. This could be for things like dishonesty, taking or losing your money or treating you unfairly because of your age, a disability or other characteristic.
              </p>

              <div className="p-4 bg-warmGray/50 rounded-xl border border-gray-100 text-xs space-y-1 text-textMuted">
                <strong className="text-legalDark block mb-1">Contact Details (Contact Centre open Mon-Fri, 8am-5pm):</strong>
                <p>Tel: 020 3859 0904</p>
                <p>Email: <a href="mailto:clc@clc-uk.org" className="text-legalDark underline">clc@clc-uk.org</a></p>
                <p className="pt-1">Postal address:<br />Council for Licensed Conveyancers<br />WeWork, 131 Finsbury Pavement<br />London EC2A 1NT</p>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* ALTERNATIVE DISPUTE RESOLUTION SCHEMES */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-tealAccent" /> ALTERNATIVE DISPUTE RESOLUTION SCHEMES
              </h2>
              <p className="text-textMuted text-xs leading-relaxed">
                Alternative complaints bodies exist which are competent to deal with complaints about legal services should both you and our firm wish to use such a scheme.
              </p>
              <p className="text-textMuted text-xs leading-relaxed mt-2">
                However, we don’t currently agree to use this Alternative Dispute Resolution service in view of the availability of the independent Legal Ombudsman Service established under the Legal Services Act 2007. We are bound by our Regulatory Code to comply with the Legal Ombudsman and our Regulator.
              </p>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
