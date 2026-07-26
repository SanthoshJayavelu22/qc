"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Lock,
  ShieldCheck,
  Database,
  FileCheck,
  Info,
  Mail,
  Phone,
  MapPin,
  Clock,
  Users,
  FileText,
  AlertCircle,
  CheckCircle2,
  Shield,
  Building2,
  Scale,
} from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-lightBg flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-20 pb-16">
        {/* Banner */}
        <section className="bg-legalDark text-white py-16 px-6 lg:px-12">
          <div className="container mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-tealAccent/20 text-tealAccent text-xs font-semibold uppercase tracking-widest mb-4">
              <Lock className="w-3.5 h-3.5" /> ICO Registered Z285119X
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
              Privacy Policy & Data Protection Statement
            </h1>
            <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto font-light">
              How Quality Conveyancing collects, uses, retains, and protects your
              personal data under UK GDPR.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 px-6 lg:px-12">
          <div className="container mx-auto max-w-4xl bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-8 text-legalDark text-sm leading-relaxed">
            {/* Quick Index */}
            <div className="p-6 bg-warmGray/40 rounded-xl border border-gray-100">
              <h2 className="font-serif font-bold text-base text-legalDark mb-3">
                Contents Overview
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs text-textMuted font-medium">
                <div>What Information We Collect</div>
                <div>Special Categories of Data</div>
                <div>How We Use Your Information</div>
                <div>How We Retain Your Information</div>
                <div>How We Share Your Information</div>
                <div>Information Security</div>
                <div>Cookies</div>
                <div>Your Rights</div>
                <div>Complaints Process</div>
                <div>Contact Us</div>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Introduction */}
            <div>
              <p className="text-textMuted mb-3">
                In this Privacy Policy the terms, 'we' or 'us' refers to Quality
                Conveyancing. Your privacy is important to us and we are
                committed to keeping your information secure and managing it in
                accordance with our legal responsibilities under applicable data
                protection laws. We are registered with the UK Information
                Commissioner's Office (ICO) as a data controller under
                registration number <strong>Z285119X</strong>.
              </p>
              <p className="text-textMuted">
                Please read this Privacy Statement carefully as it contains
                important information to help you understand how and why we
                process any personal information that you give to us.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* What Information We Collect */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Database className="w-5 h-5 text-tealAccent" /> What
                Information We Collect
              </h2>
              <p className="text-textMuted mb-3">
                We process personal information which you give us:
              </p>
              <ul className="list-disc pl-5 text-textMuted space-y-1 mb-4">
                <li>
                  As a client to provide you with legal services to you.
                </li>
                <li>
                  Whilst servicing your account through our website, in writing
                  or over the phone.
                </li>
                <li>If you request information or assistance from us.</li>
              </ul>

              <h3 className="font-bold text-legalDark mt-4 mb-2">
                What personal information we process
              </h3>
              <p className="text-textMuted mb-2">
                This includes:
              </p>
              <ul className="list-disc pl-5 text-textMuted space-y-1 mb-4">
                <li>
                  Personal details such as your date of birth, address, National
                  Insurance number, telephone number and email address.
                </li>
                <li>
                  Identity information such as your passport, driving licence,
                  utility bills or national identity card.
                </li>
                <li>
                  Credit history and records relating to you, your partner or
                  anyone else you are financially linked with (we obtain this
                  information from credit reference and fraud prevent agencies).
                </li>
                <li>
                  Family, lifestyle, financial and social circumstances.
                </li>
                <li>
                  Financial details such as your income and information about
                  your bank accounts.
                </li>
                <li>Employment/self-employment details.</li>
              </ul>
            </div>

            <hr className="border-gray-100" />

            {/* Special Categories of Personal Data */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-tealAccent" /> Special Categories
                of Personal Data
              </h2>
              <p className="text-textMuted mb-3">
                Special categories of personal data include information about an
                individual's health and other categories of personal information
                which are closely protected.
              </p>
              <p className="text-textMuted mb-3">
                We do not generally process such information unless you have
                voluntarily provided this to us, or it is relevant to the legal
                service you have asked us to provide you with, or where you have
                advised us of an issue, such as your health, which could mean
                that you may be classed as a "vulnerable client" i.e. due to your
                personal circumstances or personal characteristics you are
                particularly vulnerable to financial detriment. We will process
                sensitive information where you have provided this information to
                us and have agreed that we can use this information to deliver
                products and services to you. Where possible we shall seek to
                minimise the collection and use of such special categories of
                personal data.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* How we use your Information */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-tealAccent" /> How we use your
                Information
              </h2>
              <p className="text-textMuted mb-3">
                We use your information to:
              </p>
              <ul className="list-disc pl-5 text-textMuted space-y-1 mb-4">
                <li>Provide legal services to you.</li>
                <li>Provide and service your relationship with us.</li>
                <li>
                  Comply with legal obligations for the prevention of financial
                  crime and money laundering.
                </li>
              </ul>
              <p className="text-textMuted mb-3">
                We will process your information in order to meet our contractual
                obligations to you, where we have a legitimate interest to do so,
                and where we are permitted by law or to comply with applicable
                laws and regulation, as set out in the table below:
              </p>

              <div className="overflow-x-auto my-4">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-warmGray text-legalDark font-bold border-b border-gray-200">
                      <th className="p-3">Purpose</th>
                      <th className="p-3">Legal Basis</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-textMuted">
                    <tr>
                      <td className="p-3 font-semibold text-legalDark">
                        Providing a service and internal processing
                      </td>
                      <td className="p-3">
                        To assess your needs and provide you with suitable
                        products and services
                      </td>
                    </tr>
                    <tr className="bg-warmGray/30">
                      <td className="p-3 font-semibold text-legalDark">
                        Service administration
                      </td>
                      <td className="p-3">
                        Contractual obligation to provide you with, or a proposal
                        including a cost estimate. Where special categories of
                        personal data are processed, these are necessary to
                        assess your needs.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-legalDark">
                        Identity verification
                      </td>
                      <td className="p-3">
                        To comply with legal obligations to prevent money
                        laundering
                      </td>
                    </tr>
                    <tr className="bg-warmGray/30">
                      <td className="p-3 font-semibold text-legalDark">
                        Record management
                      </td>
                      <td className="p-3">
                        To comply with legal obligations in the Data Protection
                        legislation
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-legalDark">
                        Information provision
                      </td>
                      <td className="p-3">
                        To meet our contractual obligation to provide information
                        on the services you have requested
                      </td>
                    </tr>
                    <tr className="bg-warmGray/30">
                      <td className="p-3 font-semibold text-legalDark">
                        Relationship management
                      </td>
                      <td className="p-3">
                        Legitimate interest to service your matter and improve
                        our service to you
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-legalDark">
                        Marketing communications
                      </td>
                      <td className="p-3">
                        To inform you of products and services that may be of
                        interest to you, where you have chosen to be made aware
                        of this (with your consent)
                      </td>
                    </tr>
                    <tr className="bg-warmGray/30">
                      <td className="p-3 font-semibold text-legalDark">
                        Training and development
                      </td>
                      <td className="p-3">
                        Legitimate interests and legal obligation to improve our
                        services and develop our employees
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-legalDark">
                        Crime prevention
                      </td>
                      <td className="p-3">
                        To comply with legal obligations for prevention of
                        financial crime and money laundering
                      </td>
                    </tr>
                    <tr className="bg-warmGray/30">
                      <td className="p-3 font-semibold text-legalDark">
                        Auditing
                      </td>
                      <td className="p-3">
                        To comply with our legitimate interest to conduct audits
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-legalDark">
                        Legal disclosure
                      </td>
                      <td className="p-3">
                        If we are obliged to disclose information by reason of
                        any law, regulation or court order - to comply with legal
                        obligations
                      </td>
                    </tr>
                    <tr className="bg-warmGray/30">
                      <td className="p-3 font-semibold text-legalDark">
                        Business transfer
                      </td>
                      <td className="p-3">
                        To transfer information to any entity which may acquire
                        rights in us - legitimate interests for commercial
                        interests
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-legalDark">
                        Other purposes
                      </td>
                      <td className="p-3">
                        For any other purpose to which you agree (with your
                        consent)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* How we retain your personal information */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-tealAccent" /> How we retain your
                personal information
              </h2>
              <p className="text-textMuted mb-3">
                We will retain your personal information in accordance with
                applicable laws. We will take reasonable steps to destroy or
                anonymise personal information we no longer need for the purposes
                we have set out above.
              </p>

              <div className="overflow-x-auto my-4">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-warmGray text-legalDark font-bold border-b border-gray-200">
                      <th className="p-3">Type of personal Information</th>
                      <th className="p-3">Retention Period</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-textMuted">
                    <tr>
                      <td className="p-3 font-semibold text-legalDark">
                        General personal data which includes your normal
                        personal data, personal identity and personal financial
                        data
                      </td>
                      <td className="p-3">
                        6 years after the end of our business relationship with
                        you, or the end of your matter which ever comes later
                      </td>
                    </tr>
                    <tr className="bg-warmGray/30">
                      <td className="p-3 font-semibold text-legalDark">
                        Client Due Diligence Material which includes copies of
                        your Passport, Driving Licence, Bank Statements and any
                        associated documents and explanations you have given to
                        us to prevent fraud, financial crime and money laundering
                      </td>
                      <td className="p-3">
                        We obtain your consent to retain such documentation for 6
                        years after the end of our business relationship with
                        you, or the end of your matter which ever comes later
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold text-legalDark">
                        Special categories of personal data
                      </td>
                      <td className="p-3">
                        6 years after the end of our relationship with you
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* How we share your information */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-tealAccent" /> How we share your
                information
              </h2>
              <p className="text-textMuted mb-3">
                Where necessary or required we share information with:
              </p>
              <ul className="list-disc pl-5 text-textMuted space-y-1">
                <li>
                  Regulatory authorities to comply with our legal obligations.
                </li>
                <li>
                  Credit reference agencies to check your identity in accordance
                  with our legal obligations.
                </li>
                <li>
                  Insurers for the purpose of providing you with appropriate
                  financial cover for an identified insurable risk, or in
                  connection with any claim made by you against us.
                </li>
                <li>
                  Solicitors representing other party(ies) in your matter to
                  enable them and us to fulfil our obligations to you.
                </li>
                <li>
                  Other Government Departments such as Local Authorities to
                  fulfil your and our legal obligations.
                </li>
                <li>
                  Experts and Barristers required to work on your matter.
                </li>
                <li>
                  Our Auditors and external assessment bodies to achieve and
                  maintain any Regulatory or Quality Assurance Standards and
                  accreditations which meet our legal obligations and enable us
                  to provide quality legal services to you.
                </li>
              </ul>
            </div>

            <hr className="border-gray-100" />

            {/* Information Security */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-tealAccent" /> Information
                Security
              </h2>
              <p className="text-textMuted">
                We invest appropriate resources to protect your personal
                information, from loss, misuse, unauthorised access, modification
                or disclosure. However, no internet-based site can be 100% secure
                and we cannot be held responsible for unauthorised or unintended
                access that is beyond our control.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Updates */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Info className="w-5 h-5 text-tealAccent" /> Updates
              </h2>
              <p className="text-textMuted">
                We will keep this Privacy Policy under review and make updates
                from time to time. Any minor changes to this Privacy Statement
                will be posted on this page and we will communicate any major
                changes to you.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Cookies */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-tealAccent" /> Cookies
              </h2>
              <p className="text-textMuted">
                Our website uses cookies (including Google Analytics cookies to
                obtain an overall view of visitor habits and visitor volumes to
                our website).
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Your Rights */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-tealAccent" /> Your Rights
              </h2>
              <p className="text-textMuted mb-3">
                You have the right to request copies of your personal
                information. If you think any of the personal information we hold
                about you is inaccurate, you may also request it is corrected or
                erased. You also have a right, in certain circumstances, to
                object to our processing of your personal information, to require
                us to stop processing your personal information and/or to
                withdraw your agreement to processing based on 'consent', but
                this does not apply where we have other legal justifications to
                continue processing your data or an overriding legitimate
                interest.
              </p>
              <p className="text-textMuted">
                In relation to all of these rights, please write to us at the
                address below.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Complaints Process */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-tealAccent" /> Complaints
                Process
              </h2>
              <p className="text-textMuted">
                If you have a complaint about how we have handled your personal
                information you may contact us using the details below and we
                will investigate your complaint. You also have the right to
                complain to the Information Commissioner's Office – (
                <a
                  href="https://www.ico.org.uk"
                  target="_blank"
                  rel="noreferrer"
                  className="text-tealAccent underline"
                >
                  www.ico.org.uk
                </a>
                ).
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Contact Us */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-tealAccent" /> Contact Us
              </h2>
              <p className="text-textMuted mb-3">
                You can contact us by writing to us at:
              </p>
              <div className="p-4 bg-warmGray/50 rounded-xl border border-gray-100 text-xs text-textMuted space-y-1">
                <p className="font-bold text-legalDark">
                  Quality Conveyancing
                </p>
                <p>Ealing Cross</p>
                <p>1st Floor, 85 Uxbridge Road</p>
                <p>London</p>
                <p>W5 5BW</p>
                <p className="mt-2">
                  <strong>Telephone:</strong> 0203 763 6767
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:info@qconveyancing.com"
                    className="text-tealAccent underline"
                  >
                    info@qconveyancing.com
                  </a>
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