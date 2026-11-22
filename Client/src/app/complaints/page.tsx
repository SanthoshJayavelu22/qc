"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  HelpCircle,
  Mail,
  Scale,
  ShieldCheck,
  Clock,
  FileText,
  AlertTriangle,
  Database,
  Building,
  Phone,
} from "lucide-react";

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
                You can register a complaint with the person dealing with your matter, their Supervisor (details of which are given in your initial Client Care Letter), or directly with our Client Care Manager:
              </p>

              <div className="p-6 bg-legalDark text-white rounded-xl space-y-2 text-xs">
                <div className="font-bold text-base font-serif text-tealAccent">Mrs Brinda Nicholson</div>
                <p className="text-white/80 font-medium">Client Care Manager</p>
                <p className="text-white/80">Quality Conveyancing Limited</p>
                <p className="text-white/70">Aurora House, 71–75 Uxbridge Road, Ealing, London W5 5SL</p>
                <p className="text-white/80 flex items-center gap-2 pt-1">
                  <Mail className="w-4 h-4 text-tealAccent shrink-0" />
                  <span>Email address: </span>
                  <a href="mailto:Brinda.Nicholson@qconveyancing.com" className="hover:underline text-tealAccent font-semibold">
                    Brinda.Nicholson@qconveyancing.com
                  </a>
                </p>
                <p className="text-white/80 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-tealAccent shrink-0" />
                  <span>Telephone: </span>
                  <a href="tel:02037636767" className="text-white hover:text-tealAccent font-semibold">
                    020 3763 6767
                  </a>
                </p>
              </div>

              <p className="text-textMuted text-xs mt-4">
                You can complain in writing, by email, or by telephone. Providing full details of your complaint helps us gain a clear understanding of the issues being highlighted so we can investigate promptly.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* INVESTIGATING THE COMPLAINT */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-tealAccent" /> OUR TIMESCALES &amp; INVESTIGATION PROCESS
              </h2>

              <div className="space-y-4 text-textMuted text-xs">
                <p>
                  We will record your complaint in our central register, open a complaint file, and conduct a full investigation and independent review of the matter.
                </p>

                <div className="p-4 bg-warmGray/30 rounded-xl border border-gray-100 space-y-2">
                  <p>
                    <strong>Initial Response (within 7 days):</strong> We will respond to your complaint in writing within 7 days of receiving it and notify you who will be handling your complaint. If we need longer to investigate, we will tell you within those 7 days why, and when you will receive our full response.
                  </p>
                  <p>
                    <strong>Full Written Response (within 28 days):</strong> We will send you our full written response within 28 days of receiving your complaint. We may also invite you to meet with the Supervisor to gather more information and resolve the matter.
                  </p>
                  <p>
                    <strong>Internal Review (within 14 days):</strong> If you remain dissatisfied with the outcome, or the way the complaint has been handled, you may write to the Client Care Manager at the address above, who will make such further investigations as are necessary (either via a Supervisor review or a direct review by the Client Care Manager). We will inform you of our conclusions and any alternative proposals to resolve the complaint within 14 days of receiving your notification.
                  </p>
                </div>

                <p className="text-legalDark font-medium">
                  If the complaint remains unresolved at this stage, we will issue a final letter advising you of your right to take the matter to the Legal Ombudsman.
                </p>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* LEGAL OMBUDSMAN */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Scale className="w-5 h-5 text-tealAccent" /> LEGAL OMBUDSMAN
              </h2>
              <p className="text-textMuted mb-3 text-xs">
                The Legal Ombudsman is the independent body established by the Office for Legal Complaints under the Legal Services Act 2007 to deal with complaints against legal service providers.
              </p>
              <p className="text-textMuted mb-3 text-xs">
                If you are not satisfied with our final response, or we have not resolved your complaint within 8 weeks, you may be able to refer your complaint to the Legal Ombudsman.
              </p>
              <p className="text-textMuted font-semibold text-xs mb-2">The Legal Ombudsman may:</p>
              <ul className="list-disc pl-5 space-y-1 text-textMuted text-xs mb-4">
                <li>Investigate the quality of professional service supplied by a conveyancer or licensed conveyancing firm to a client.</li>
                <li>Investigate allegations that a conveyancer or licensed conveyancing firm has breached rules of professional conduct.</li>
                <li>Investigate allegations that a conveyancer or licensed conveyancing firm has unreasonably refused to supply a professional service to a prospective client.</li>
                <li>Investigate allegations that a conveyancer or licensed conveyancing firm has persistently or unreasonably offered a professional service that the client does not want.</li>
              </ul>
              <p className="text-textMuted text-xs mb-3">
                Before it will consider a complaint, the Legal Ombudsman generally requires that the firm’s internal Complaints Procedure (outlined above) has been exhausted. If the Legal Ombudsman is satisfied that the firm’s proposals for resolving a complaint are reasonable, it may decline to investigate further.
              </p>
              <div className="pt-2">
                <h3 className="font-bold text-legalDark text-xs uppercase tracking-wider mb-2">Time Limits</h3>
                <p className="text-textMuted text-xs mb-1">You must refer your complaint to the Legal Ombudsman:</p>
                <ul className="list-disc pl-5 space-y-1 text-textMuted text-xs mb-3">
                  <li>Within six months of our final response to you; and</li>
                  <li>No more than one year from the date of the problem, or no more than one year from when you should reasonably have known there was cause for complaint.</li>
                </ul>
              </div>

              <div className="p-4 bg-warmGray/50 rounded-xl border border-gray-100 text-xs space-y-1 text-textMuted">
                <strong className="text-legalDark block mb-1">Legal Ombudsman Contact Details:</strong>
                <p>Address: PO Box 6167, Slough SL1 0EH</p>
                <p>Telephone: 0300 555 0333</p>
                <p>Email: <a href="mailto:enquiries@legalombudsman.org.uk" className="text-tealAccent underline">enquiries@legalombudsman.org.uk</a></p>
                <p>Website: <a href="https://www.legalombudsman.org.uk" target="_blank" rel="noopener noreferrer" className="text-tealAccent underline">www.legalombudsman.org.uk</a></p>
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
                <strong className="text-legalDark block mb-1">You can raise your concerns with the Council for Licensed Conveyancers using the following contact details:</strong>
                <p>Contact Centre open Mon-Fri, 8am-5pm.</p>
                <p>Tel: 020 3859 0904</p>
                <p>Email: <a href="mailto:clc@clc-uk.org" className="text-tealAccent underline">clc@clc-uk.org</a></p>
                <p className="pt-1">
                  Postal address:<br />
                  Council for Licensed Conveyancers<br />
                  WeWork<br />
                  120 Moorgate<br />
                  London EC2M 6UR
                </p>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* ALTERNATIVE DISPUTE RESOLUTION SCHEMES */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-tealAccent" /> ALTERNATIVE DISPUTE RESOLUTION (ADR) SCHEMES
              </h2>
              <p className="text-textMuted text-xs leading-relaxed">
                Alternative complaints bodies exist which are competent to deal with complaints about legal services should both you and our firm wish to use such a scheme.
              </p>
              <p className="text-textMuted text-xs leading-relaxed mt-2">
                However, we do not currently agree to use an Alternative Dispute Resolution service in view of the availability of the independent Legal Ombudsman Service established under the Legal Services Act 2007. We are bound by our Regulatory Code to comply with the Legal Ombudsman and our Regulator.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* COMPLAINTS RELATING TO DSAR HANDLING (DUAA / data rights) */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Database className="w-5 h-5 text-tealAccent" /> COMPLAINTS RELATING TO DSAR HANDLING (DUAA / DATA RIGHTS)
              </h2>
              <p className="text-textMuted text-xs leading-relaxed">
                Where an individual raises a complaint regarding the Firm’s handling of a Data Subject Access Request (DSAR), this will be treated as a data protection complaint and managed in accordance with the Firm’s complaints procedure.
              </p>
              <p className="text-textMuted text-xs leading-relaxed mt-2">
                The Firm will promptly acknowledge the complaint, investigate whether the DSAR was handled in compliance with applicable data protection legislation (including the UK GDPR / Data Protection Act 2018 as amended by the Data (Use and Access) Act), and provide a reasoned written response addressing the issues raised, including any corrective action taken. Where appropriate, the Firm will rectify any deficiencies without undue delay.
              </p>
              <p className="text-textMuted text-xs leading-relaxed mt-2">
                The complainant will be informed of their right to escalate the matter to the Information Commissioner’s Office (ICO) if they remain dissatisfied, and, where the complaint also engages service or conduct issues, it may additionally be progressed under the Firm’s regulatory complaints framework.
              </p>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
