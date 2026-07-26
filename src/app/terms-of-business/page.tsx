"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Scale,
  FileCheck,
  ShieldAlert,
  CheckCircle2,
  AlertCircle,
  Building2,
  Clock,
  Landmark,
  Lock,
  HelpCircle,
  FileText,
  Gavel,
  Users,
  Database,
  Shield,
  Banknote,
  ScaleIcon,
  ChevronRight,
  Briefcase,
} from "lucide-react";

export default function TermsOfBusinessPage() {
  return (
    <div className="min-h-screen bg-lightBg flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-20 pb-16">
        {/* Banner */}
        <section className="bg-legalDark text-white py-16 px-6 lg:px-12">
          <div className="container mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-tealAccent/20 text-tealAccent text-xs font-semibold uppercase tracking-widest mb-4">
              <Scale className="w-3.5 h-3.5" /> CLC Licence 11359 • VAT 681223841
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
              Terms of Business
            </h1>
            <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto font-light">
              Quality Conveyancing Limited (Company Registration No. 07566902).
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
                <div>1. Our Contract</div>
                <div>2. Responsibilities & Services</div>
                <div>3. Your Responsibilities</div>
                <div>4. Client Care Code</div>
                <div>5. Hours of Business</div>
                <div>6. Fees and Expenses</div>
                <div>7. Our Invoices</div>
                <div>8. Interest Policy</div>
                <div>9. Conflict of Interest</div>
                <div>10. Confidentiality</div>
                <div>11. Custody of Documents</div>
                <div>12. Intellectual Property</div>
                <div>13. Joint Instructions</div>
                <div>14. Liability</div>
                <div>15. Termination</div>
                <div>16. Cancellation Rights</div>
                <div>17. General</div>
                <div>18. Complaints Procedure</div>
                <div>19. Quality Standards</div>
                <div>20. Disclaimers</div>
                <div>21. Data Protection</div>
                <div>22. Insurance</div>
                <div>23. FSCS Scheme</div>
                <div>24. Severability</div>
                <div>25. Third Parties</div>
                <div>26. Force Majeure</div>
                <div>27. Law and Jurisdiction</div>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Section 1 */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-tealAccent" /> 1. Our
                Contract
              </h2>
              <p className="text-textMuted mb-3">
                Quality Conveyancing is a Limited company registered in England
                and Wales with number <strong>07566902</strong> (VAT Registration
                Number 681223841). We are authorised by the CLC.
              </p>
              <p className="text-textMuted mb-4">
                These Terms of Business issued by us, as supplemented by any
                relevant Engagement Letter, apply to each Matter we work on for
                you. No variation of these Terms shall be effective, unless it is
                in writing and is signed by one of our Directors.
              </p>

              <h3 className="font-bold text-legalDark mb-2 text-xs uppercase tracking-wider">
                Defined Terms
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse border border-gray-200">
                  <tbody className="divide-y divide-gray-200 text-textMuted">
                    <tr className="bg-warmGray/30">
                      <td className="p-2.5 font-bold text-legalDark w-1/4">
                        "the Firm"
                      </td>
                      <td className="p-2.5">
                        Quality Conveyancing and any successor practice, and any
                        service company owned or controlled by or on behalf of
                        the Firm or any of the Directors (references to 'we',
                        'us' or 'our' in these Terms of Business are references
                        to the Firm);
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-legalDark">
                        "Associated Entities"
                      </td>
                      <td className="p-2.5">
                        means (where you are a body corporate) your shareholders,
                        directors (as individuals not acting together as the
                        Board), officers and employees, subsidiaries, parent
                        companies, and subsidiaries of parent companies, and
                        (where you are a trade association) your individual
                        members;
                      </td>
                    </tr>
                    <tr className="bg-warmGray/30">
                      <td className="p-2.5 font-bold text-legalDark">
                        "Credit Period"
                      </td>
                      <td className="p-2.5">
                        means the period of seven (7) days from the date of our
                        invoice for our fees and/or expenses;
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-legalDark">
                        "Documents"
                      </td>
                      <td className="p-2.5">
                        means documents we create or receive on your behalf
                        (including communications from or with third parties,
                        notes of conversations and meetings, draft and final
                        documents, and instructions to and opinions of
                        barristers);
                      </td>
                    </tr>
                    <tr className="bg-warmGray/30">
                      <td className="p-2.5 font-bold text-legalDark">
                        "Engagement Letter"
                      </td>
                      <td className="p-2.5">
                        means, in relation to any Matter, the letter (or other
                        agreement) recording the basis of our engagement;
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-legalDark">
                        "Force Majeure"
                      </td>
                      <td className="p-2.5">
                        means any circumstance beyond the reasonable control of
                        the party affected by it and includes telecommunications
                        failure, power supply failure, terrorism, fuel strikes,
                        severe weather, computer breakdown, failure of suppliers
                        to meet delivery requirements, industrial disputes and
                        absence of personnel due to illness or injury;
                      </td>
                    </tr>
                    <tr className="bg-warmGray/30">
                      <td className="p-2.5 font-bold text-legalDark">
                        "Matter"
                      </td>
                      <td className="p-2.5">
                        means any specific transaction, dispute or issue in
                        relation to which you ask us to provide Services whether
                        or not it has been defined in an Engagement Letter or
                        other agreement;
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-legalDark">
                        "Director"
                      </td>
                      <td className="p-2.5">means a Director of the Firm;</td>
                    </tr>
                    <tr className="bg-warmGray/30">
                      <td className="p-2.5 font-bold text-legalDark">
                        "Services"
                      </td>
                      <td className="p-2.5">
                        means all services we provide to you in relation to the
                        relevant Matter;
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2.5 font-bold text-legalDark">
                        "You" / "Your"
                      </td>
                      <td className="p-2.5">
                        includes the addressee of the relevant Engagement Letter
                        and any other person identified in the Engagement Letter
                        as our client and "your" shall have a cognate meaning.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Section 2 */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-tealAccent" /> 2. Our
                Responsibilities and Services
              </h2>

              <h3 className="font-bold text-legalDark mt-4 mb-2">
                Our Responsibilities
              </h3>
              <p className="text-textMuted mb-3">
                In delivering our Services we will:
              </p>
              <ul className="list-disc pl-5 text-textMuted space-y-1 mb-4">
                <li>Treat you fairly and with respect;</li>
                <li>Communicate with you in plain language;</li>
                <li>Review your Matter regularly;</li>
                <li>Advise you of any changes in the law that affect your Matter; and</li>
                <li>
                  Advise you of any reasonably foreseeable circumstances and
                  risks that could affect the outcome of your Matter.
                </li>
              </ul>

              <h3 className="font-bold text-legalDark mt-4 mb-2">
                Our Services
              </h3>
              <p className="text-textMuted mb-3">
                The Director at the Firm named in the Engagement Letter as the
                "Supervising Director" will be the Director primarily
                responsible for the provision of our Services to you. That
                Director has complete discretion to deploy such of our lawyers,
                trainee lawyers, paralegals or other staff as she/he deems
                necessary or desirable to ensure appropriate delivery of the
                Services.
              </p>
              <p className="text-textMuted mb-3">
                We only advise on the Laws of England and Wales. Where a
                transaction or other work also involves the laws of another
                jurisdiction it is your responsibility to ensure that competent
                advice has been taken in a timely manner and that we have been
                provided with a full and complete copy of that advice.
              </p>
              <p className="text-textMuted">
                We may require that you contract directly with certain third
                parties and assume direct responsibility to them for the payment
                of their fees and expenses.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Section 3 */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-tealAccent" /> 3. Your
                Responsibilities
              </h2>
              <p className="text-textMuted mb-2">
                You will (so far as you are practicably able to do so):
              </p>
              <ul className="list-disc pl-5 text-textMuted space-y-1">
                <li>
                  Provide us with clear, timely and accurate instructions, and
                  the information and materials necessary or desirable for us to
                  perform the Services for you in a timely manner;
                </li>
                <li>
                  Notify us promptly of any changes or additions to instructions,
                  information and materials previously provided by you or on your
                  behalf;
                </li>
                <li>
                  Ensure that all information provided to us is complete in all
                  material respects and not misleading; and
                </li>
                <li>
                  Safeguard any documents that may be required for your Matter,
                  including documents that you may have to disclose to another
                  party.
                </li>
              </ul>
            </div>

            <hr className="border-gray-100" />

            {/* Section 4 */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-tealAccent" /> 4. Client
                Care Code
              </h2>
              <p className="text-textMuted mb-3">
                We want you to be happy with every aspect of our Service. We
                therefore operate a Client Care Code, the principles of which are
                as set out below:
              </p>
              <ul className="list-disc pl-5 text-textMuted space-y-1 mb-4">
                <li>
                  We are committed wholeheartedly to the professional standards
                  laid down by the Solicitors Regulation Authority.
                </li>
                <li>
                  You will be told clearly at the outset the issues and how we
                  advise they be dealt with, and the immediate steps we will take
                  on your behalf.
                </li>
                <li>
                  You will be regularly informed of the progress of your Matter.
                </li>
                <li>
                  We will explain to you by telephone or in writing the legal
                  work required as your Matter progresses.
                </li>
                <li>
                  We will update you on the likely timescales for each stage of
                  this Matter and any important changes in those estimates.
                  Whenever there is a material change in circumstances associated
                  with your Matter, we will update you on whether the likely
                  outcomes still objectively justify the likely costs and risks.
                </li>
                <li>
                  We will update you on the cost of your matter at the intervals
                  set out in the Engagement Letter. If appropriate, we will
                  continue to review whether there are alternative methods by
                  which your matter can be funded.
                </li>
              </ul>
              <p className="text-textMuted mb-3">
                The Engagement Letter notifies you of the following details:
              </p>
              <ul className="list-disc pl-5 text-textMuted space-y-1 mb-4">
                <li>
                  the name of the person or persons who is/are dealing on a
                  day-to-day basis with your matter (the "Fee Earner"); and
                </li>
                <li>the name of the Supervising Director.</li>
              </ul>
              <p className="text-textMuted mb-3">
                You will be told the name of the new fee earner if the matter is
                transferred from one fee earner to another.
              </p>
              <p className="text-textMuted mb-3">
                We cannot guarantee that the Fee Earner or Supervising Director
                will be available on demand, but we will do our best to get back
                to you promptly and efficiently.
              </p>
              <p className="text-textMuted mb-3">
                If you do not understand anything, please always ask.
              </p>
              <p className="text-textMuted mb-3">
                At the end of your Matter, you will be sent a bill with a letter
                confirming the Matter has been completed and, where necessary,
                summarising any continuing consequences.
              </p>
              <p className="text-textMuted font-semibold text-xs bg-warmGray/50 p-3 rounded-lg border border-gray-200">
                <strong>Cash Policy:</strong> The Firm does not accept cash
                payments from clients. If you try to avoid this policy by
                depositing cash directly with our bank, we may charge you for any
                additional checks that are necessary to prove the source of the
                funds. Checks shall be necessary at our discretion in order to
                comply with our legal and regulatory obligations. Where we have
                to pay money to you, it will be paid by cheque or bank transfer.
                It will not be paid in cash or to a third party.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Section 5 */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-tealAccent" /> 5. Hours of
                Business
              </h2>
              <p className="text-textMuted">
                The normal hours of opening at our offices are between 9.00 a.m.
                and 5:00 p.m. on weekdays. Messages can be left on the
                answerphone outside those hours and appointments may be arranged
                at other times when this is essential.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Section 6 */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Banknote className="w-5 h-5 text-tealAccent" /> 6. Fees and
                Expenses
              </h2>

              <h3 className="font-bold text-legalDark mt-4 mb-2">General</h3>
              <p className="text-textMuted mb-3">
                You will find a description of and information on the prices we
                charge for the conveyancing services we offer, listed below on
                our website.
              </p>
              <p className="text-textMuted mb-3">
                The Engagement Letter will set out either our agreed fees or the
                basis on how we will calculate our fees.
              </p>
              <p className="text-textMuted mb-3">
                We may, in accordance with professional guidelines, also charge a
                premium (where reasonable to do so) to take account of the
                nature, responsibility, complexity, value and urgency of the
                Services and other criteria specified in those guidelines.
              </p>
              <p className="text-textMuted mb-3">
                At the initial stages we provide you with an estimate of costs
                based on the information we have at that particular stage. Any
                estimate of costs we provide is only a guide to assist you in
                budgeting and should not be regarded as a firm quotation or fixed
                or capped fee. Estimates can increase as a result of a number of
                factors e.g due to the complexity of the issue, the speed at
                which action was to be taken, the scope of the work changes, the
                expertise or specialist knowledge which the case requires, and an
                excessive amount of emails/telephone calls /correspondence to
                deal with. Please note regular emails or calls which require
                attention will increase your costs significantly. We therefore
                encourage clients to only make calls or send emails if strictly
                necessary. We will inform you as soon as possible once we become
                aware of any additional fees which you may need to pay.
              </p>
              <p className="text-textMuted mb-3">
                The fixed hourly rates of each of our fee earners are reviewed
                from time to time and we will inform you of any variation in
                these rates and the date upon which they take effect. In
                addition, please be aware that our hourly rates are based on
                levels of experience and as our fee earners become more senior
                their hourly rates may increase accordingly – you will be
                informed if this is the case.
              </p>
              <p className="text-textMuted mb-3">
                You will be responsible for paying the expenses we incur in the
                course of providing the Services (including, search and filing
                fees, and other third parties' fees and expenses). We will advise
                as to the amount and nature of any expenses to be incurred in
                advance. We will often seek payment for such expenses in advance
                and may not incur them until you have provided us with cleared
                funds for that purpose which may delay the progress of your
                Matter.
              </p>
              <p className="text-textMuted mb-3">
                VAT will be charged at the appropriate rate on all fees and
                expenses.
              </p>

              <h3 className="font-bold text-legalDark mt-4 mb-2">
                Limited Companies
              </h3>
              <p className="text-textMuted mb-3">
                When accepting instructions to act on behalf of a limited
                company, we may require a director and/or controlling shareholder
                to sign a form of personal guarantee in respect of our fees and
                expenses. If such request is refused, we will be entitled to
                require payment on account or to stop acting and require
                immediate payment of our fees already incurred on a time spent
                basis and expenses as set out above.
              </p>

              <h3 className="font-bold text-legalDark mt-4 mb-2">
                Payments on Account
              </h3>
              <p className="text-textMuted mb-3">
                We may require you to make a payment to us on account of our fees
                and expenses at any time and on more than one occasion. Money
                paid on account which is not subsequently required for fees and
                expenses will be returned promptly.
              </p>
              <p className="text-textMuted mb-3">
                Our bills issued to you must be paid within the timeframe
                stipulated otherwise you will be charged interest at the rate of
                4% above the base rate of Barclays Bank PLC if the bill is not
                paid within 30 days after the date the bill is sent to you.
              </p>
              <p className="text-textMuted mb-3">
                If you do not make payment on account within the time frame
                stipulated then we reserve the right to stop work on your matter
                or refuse to complete your transaction until all payments and
                disbursements are received. We will not be liable for any loss
                you incur as a result of us stopping work on your matter.
              </p>
              <p className="text-textMuted mb-3">
                We will not be responsible for any failure to comment or advise
                on any matters which are outside our expertise and we will take
                no responsibility for advice given which may change in the future
                due to changes in the law. We do not provide tax or financial
                advise and will not be liable for any losses which arise as a
                result of your failure to seek financial and/or tax advice.
              </p>
              <p className="text-textMuted mb-3">
                Any advice provided to you is for the sole purpose of you as our
                client. The information and documents we send you must not be
                forwarded to or relied on by any other person other than you.
              </p>
              <p className="text-textMuted mb-3 font-semibold text-xs bg-amber-50 text-amber-900 p-3 rounded-lg border border-amber-200">
                <strong>Banking Failure Disclaimer:</strong> In the event of a
                banking failure we will not take any responsibility or be held
                liable for any losses of client monies.
              </p>
              <p className="text-textMuted mb-3">
                We are not obliged to credit payments on account against interim
                invoices but may do so if you fail to make prompt payment.
              </p>
              <p className="text-textMuted">
                Please ensure you raise any queries relating to your bill without
                delay with your caseworker or the person who sent you the bill.
              </p>

              <h3 className="font-bold text-legalDark mt-4 mb-2">
                Estimates and Quotations
              </h3>
              <p className="text-textMuted mb-3">
                Any cost estimates that we give you are estimates only and do not
                constitute a contract to carry out the work at that cost.
              </p>
              <p className="text-textMuted mb-3">
                Sometimes, it is not possible to estimate costs in advance. It is
                open to you to set a limit on the costs which may be incurred
                without further reference to you. If the costs limit restricts
                the extent of work possible on your Matter, we will inform you as
                to the likely progress to be made within that costs limit and
                keep you updated.
              </p>
              <p className="text-textMuted mb-3">
                On the majority of occasions, we will provide a fixed price
                quotation.
              </p>
              <p className="text-textMuted mb-3">
                The provision of a written quotation for work constitutes an
                offer to carry out the work at that cost and does not become a
                contract until you accept the quotation or a defined part of it.
              </p>
              <p className="text-textMuted mb-3">
                Unless stated in writing to the contrary, any quotation or
                estimate does not include any expenses or VAT.
              </p>
              <p className="text-textMuted mb-3">
                Where we carry out work which falls outside the scope of an
                accepted quotation (or of an estimate which is subsequently
                incorporated into a contract between us) we may charge fees at
                our fixed hourly rates, in addition to the quoted or estimated
                fee. We may also charge additional fees on the same basis for
                work within the scope of such a quotation or estimate which is
                made more time consuming, onerous or urgent as a result of:
              </p>
              <ul className="list-disc pl-5 text-textMuted space-y-1 mb-4">
                <li>
                  circumstances or information which we did not know or could not
                  reasonably have anticipated at the time of the quotation or
                  estimate (whether or not you were aware of them/it); or
                </li>
                <li>your, or your agents', act or omission.</li>
              </ul>

              <h3 className="font-bold text-legalDark mt-4 mb-2">
                Commissions and Referrals
              </h3>
              <p className="text-textMuted mb-3">
                We will only refer, recommend or introduce you to another
                business where you have given us informed consent to do so.
              </p>
              <p className="text-textMuted">
                If we receive a commission from a third party arising from work,
                we are doing for you, we will inform you of this and credit you
                with the commission unless you have agreed otherwise.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Section 7 */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-tealAccent" /> 7. Our Invoices
              </h2>

              <h3 className="font-bold text-legalDark mt-4 mb-2">
                Frequency of Invoices
              </h3>
              <p className="text-textMuted mb-3">
                Unless otherwise agreed in the Engagement Letter, we will be
                entitled to invoice you in respect of our fees and expenses at
                appropriate intervals (normally monthly) and on completion of
                each Matter. At the end of our financial year, we shall be
                entitled to bring up to date our invoicing in respect of all your
                then unbilled work.
              </p>
              <p className="text-textMuted mb-3">
                Unless otherwise stated, interim invoices are a final account of
                our fees for all work done during the period to which they
                relate.
              </p>
              <p className="text-textMuted mb-3">
                There may be a delay in invoicing expenses incurred on your
                behalf pending our receipt of the relevant invoices from
                suppliers. Unless otherwise stated, such invoices are not a final
                invoice in relation to such expenses.
              </p>
              <p className="text-textMuted mb-3">
                You may pay invoices by cheque or electronic transfer. Please
                contact us directly for our bank account details. Unless we agree
                to do so, we do not accept payment in cash either from our
                clients direct or deposited with our bank.
              </p>

              <h3 className="font-bold text-legalDark mt-4 mb-2">
                Payment Terms
              </h3>
              <p className="text-textMuted mb-3">
                Interest may be charged on outstanding invoices that are not paid
                within the Credit Period from the expiry of the Credit Period
                until the time they are paid at the statutory interest rate
                (currently 8% plus the Bank of England Base Rate). Any debts that
                have to be chased may also incur statutory debt recovery costs.
              </p>
              <p className="text-textMuted mb-3">
                If you do not pay any invoice by the end of the Credit Period, or
                the sum we have requested on account within seven (7) days (or
                such longer period as we may specify) of our demand, we may
                suspend or terminate the provision of all or any Services (and
                instruct any third parties engaged by us to suspend the provision
                of their services) and may invoice you for all accrued fees and
                expenses.
              </p>

              <h3 className="font-bold text-legalDark mt-4 mb-2">
                Joint Clients and Third Party Payments
              </h3>
              <p className="text-textMuted mb-3">
                Where we are instructed by more than one individual client, you
                will all be jointly and severally liable for the total payment of
                our fees.
              </p>
              <p className="text-textMuted mb-3">
                In some circumstances, you may have a right of recovery or
                indemnity against a third party in respect of all or part of our
                invoices, but we are not permitted to issue a VAT invoice to any
                person other than you in any circumstances, and you remain liable
                to us to pay our invoices to the extent that they remain unpaid
                by the time that they fall due.
              </p>

              <h3 className="font-bold text-legalDark mt-4 mb-2">
                Right to Retain Money, Documents and Property
              </h3>
              <p className="text-textMuted">
                We are entitled to keep any of your property which is in our
                possession, including legal and other documentation, while money
                is owing to us. This is known as a lien. Upon payment in full, we
                will return them to you at your request.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Section 8 */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-tealAccent" /> 8. Interest
                Policy
              </h2>
              <p className="text-textMuted mb-3">
                We will normally credit you with interest on any funds we hold in
                our client account on your behalf, in accordance with our
                professional rules. Interest will accrue at the rate payable by
                our bank on instant access deposits. This may be less than the
                rate at which you could have invested the money yourself. You
                agree that interest amounting to less than £20 will not be paid
                to you OR you agree that interest accrued on any money kept in
                client account for less than four weeks will not be paid to you.
              </p>
              <p className="text-textMuted">
                A copy of our interest policy is available upon request.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Section 9 */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-tealAccent" /> 9. Conflict of
                Interest
              </h2>

              <h3 className="font-bold text-legalDark mt-4 mb-2">Definition</h3>
              <p className="text-textMuted mb-3">
                "Conflict of Interest" means a situation where our separate
                duties to act in the best interests of two or more clients
                conflict.
              </p>

              <h3 className="font-bold text-legalDark mt-4 mb-2">
                Similar Activities
              </h3>
              <p className="text-textMuted mb-3">
                We may act for parties engaged in activities similar to or
                competitive with yours.
              </p>

              <h3 className="font-bold text-legalDark mt-4 mb-2">
                Third Parties
              </h3>
              <p className="text-textMuted mb-3">
                Once we have agreed to act for you in relation to a Matter, we
                will not act for a third party in relation to the same Matter if
                there is a Conflict of Interest between that third party's
                interests and your interests.
              </p>

              <h3 className="font-bold text-legalDark mt-4 mb-2">
                Instructions Creating a Conflict of Interest
              </h3>
              <p className="text-textMuted mb-3">
                We may decline to act for you where accepting your instructions
                would create a Conflict of Interest or cause us to break an
                existing agreement with a third party.
              </p>

              <h3 className="font-bold text-legalDark mt-4 mb-2">Consent</h3>
              <p className="text-textMuted mb-3">
                Where our professional rules allow, and subject to satisfying the
                requirements of those rules (for example by implementing an
                information barrier), we may act for you and another client where
                a Conflict of Interest would otherwise exist, provided that we
                have the informed consent of both parties, evidenced in writing.
              </p>

              <h3 className="font-bold text-legalDark mt-4 mb-2">
                Cessation of Services
              </h3>
              <p className="text-textMuted">
                If, whether through a change in circumstances or otherwise, we
                find that we have agreed to provide Services to you in
                circumstances which give, or could give, rise to a conflict of
                interest we will discuss with you how to deal with the conflict
                and may be obliged to stop providing Services to you and/or to
                all other clients affected by the Conflict of Interest.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Section 10 */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Lock className="w-5 h-5 text-tealAccent" /> 10. Confidentiality
              </h2>

              <h3 className="font-bold text-legalDark mt-4 mb-2">
                Our Duty of Confidentiality
              </h3>
              <p className="text-textMuted mb-3">
                We will treat any information related to your affairs strictly
                confidential, save as to when disclosure is required or permitted
                by law or you consent to any such disclosure.
              </p>
              <p className="text-textMuted mb-3">
                We shall be under no duty to disclose to you (or take into
                account in the course of providing the Services) any information
                acquired by us in acting for any other client or any information
                in respect of which we owe a duty of confidentiality to a third
                party.
              </p>

              <h3 className="font-bold text-legalDark mt-4 mb-2">
                Your Duty of Confidentiality
              </h3>
              <p className="text-textMuted mb-3">
                Our advice and other communications with you are confidential and
                may not, without our consent, be disclosed by you to any third
                party (other than to your employees and agents who require access
                and who do not disclose it further) or otherwise made public
                except as required by law or other authority to which you are
                subject.
              </p>
              <p className="text-textMuted">
                If, as a result of our acting for you, you acquire any
                information in respect of which we notify you that we owe a duty
                of confidentiality to a third party you will keep it confidential
                and not use it without our consent.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Section 11 */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-tealAccent" /> 11. Custody,
                Retention and Transfer of Documents
              </h2>
              <p className="text-textMuted mb-3">
                We will, at your request, either during the provision or after
                completion of any Services, release your file to you minus any
                documents of ours (such as documents which we create or receive
                for our benefit (including copies of our letters to you, your
                letters to us, notes of telephone conversations and meetings with
                you for which we have not charged you, and our preliminary
                drafts, research materials and internal notes); which we have
                chosen to retain, provided that we are not at the time exercising
                our right to retain documents pending payment of outstanding fees
                and expenses or are prevented by any court order, undertaking or
                other legal constraint from doing so. We may copy all of your
                file before releasing it, including making electronic copies.
              </p>
              <p className="text-textMuted mb-3">
                We may agree to store title deeds and other especially valuable
                documents in safe custody for you if you require and, if we do,
                we will not, without your consent, destroy any such documents. We
                charge a fee for storage and this fee will be made clear to you
                before it is incurred.
              </p>
              <p className="text-textMuted mb-3">
                We do not accept responsibility for the loss or damage of any
                item which we hold on your behalf unless we expressly agree in
                writing to the contrary.
              </p>
              <p className="text-textMuted">
                We will keep our file of your papers including emails and any
                hard copies thereof, in accordance with our data retention
                policy, except those that you ask to be returned to you. Our data
                retention policy is available to view upon request. We will not
                destroy documents you ask us to deposit in safe custody. If we
                take papers or documents out of storage in relation to continuing
                or new instructions to act for you, we will not normally charge
                for such retrieval. However, we may charge you both for time
                spent producing stored papers that are requested as well as
                reading correspondence or other work necessary to comply with
                your instructions in relation to the retrieved papers.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Section 12 */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <ScaleIcon className="w-5 h-5 text-tealAccent" /> 12.
                Intellectual Property Rights
              </h2>

              <h3 className="font-bold text-legalDark mt-4 mb-2">Copyright</h3>
              <p className="text-textMuted mb-3">
                We retain copyright and all other intellectual property rights in
                all documents and other works we develop or generate for you in
                providing the Services (including know-how and working materials
                as well as final documents). We now grant you a non-exclusive,
                non-transferable, non-sublicensable licence to use such documents
                or other works solely for the Matter to which the Services of
                developing or generating them relate and not otherwise. If you do
                not pay us in full for our Services in relation to that Matter we
                may, on giving you notice, revoke that licence and only re-grant
                it to you once full payment has been made.
              </p>

              <h3 className="font-bold text-legalDark mt-4 mb-2">
                Opinions from Barristers and other Third Parties
              </h3>
              <p className="text-textMuted">
                We may retain, for our subsequent use, a copy of the advice or
                opinion of any barrister or other third party given in written
                form (or any note of any advice or opinion) obtained in the
                course of providing the Services. Any barrister or other third
                party will be instructed on the basis that any such advice or
                opinion will be so retained. If we retain a copy of any advice or
                opinion in this manner we will take all reasonable steps to
                conceal information (such as names, addresses or descriptions)
                which might reasonably enable you to be identified.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Section 13 */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-tealAccent" /> 13. Joint
                Instructions
              </h2>
              <p className="text-textMuted mb-3">
                Where we agree to work on a Matter for more than one client
                jointly, the rights and obligations of the joint clients to us in
                relation to the Services will be several (save for obligations to
                pay money to us, which will be joint and several, as detailed
                above).
              </p>
              <p className="text-textMuted mb-3">
                Each joint client irrevocably permits us to disclose to any other
                of the joint clients at any time any information which we would
                otherwise be prohibited from so disclosing by virtue of our duty
                of confidentiality. If any joint client ends this permission
                during the provision of the relevant Services, or if a conflict
                of interest otherwise arises between joint clients, we may
                suspend or terminate the provision of Services related to that
                Matter to one or more of the joint clients.
              </p>
              <p className="text-textMuted">
                If a joint client asks us to transfer documents from our file to
                them, we will retain our file and will supply copies of the file
                to each joint client, making the original documents available at
                our offices for inspection by each joint client on reasonable
                prior written notice. This does not apply to original documents
                which were delivered to us by one of the joint clients, we will
                deliver these documents to the joint client who delivered them to
                us.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Section 14 */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-tealAccent" /> 14. Liability
              </h2>
              <p className="text-textMuted mb-3">
                We will use reasonable skill and care in the provision of the
                Services. Where we make an assessment for you, either expressly
                or by implication, of the likely level of risk associated with
                different potential courses of action, you accept that such
                assessment is made relying only upon the information and
                documents then available to us and cannot, therefore, be
                definitive.
              </p>
              <p className="text-textMuted mb-3">
                Accordingly, such an assessment should only be used as one
                element in the making of any practical or commercial decision.
                You accept that the magnitude or acceptability of a risk is a
                matter for you.
              </p>
              <p className="text-textMuted mb-3">
                The Firm alone will provide the Services and you waive any right
                to, and agree that you will not bring, any claim whether in
                contract, tort, under statute or otherwise against any Director,
                or any consultant to, or employee or agent of the Firm or any
                service company owned or controlled by or on behalf of any of the
                Directors and those Directors, consultants, employees and agents
                shall be entitled to rely on the terms of this agreement insofar
                as they limit their liability.
              </p>
              <p className="text-textMuted mb-3 font-semibold">
                The aggregate liability of the Firm (or of any service company
                owned or controlled by or on behalf of any of the Directors) and
                of all Directors, consultants to and employees and agents of the
                Firm and any service company owned or controlled by or on behalf
                of any of the Firm or the Directors in any circumstances
                whatsoever, whether in contract, tort, under statute or
                otherwise, and howsoever caused (including but not limited to our
                negligence or non-performance), for loss or damage arising from
                or in connection with the Services provided shall, in relation to
                each Matter, be limited to the sum, unless otherwise agreed, of
                <strong> 3 million pounds (£3,000,000.00)</strong>.
              </p>
              <p className="text-textMuted mb-3">
                Where any loss is suffered by you for which the Firm and any
                other person are jointly and severally liable to you, the loss
                recoverable by you from the Firm is limited so as to be in
                proportion to the firm's relative contribution to the overall
                fault of (a) the Firm, (b) you and (c) any other person, in
                respect of the loss in question.
              </p>
              <p className="text-textMuted mb-3">
                Nothing in this agreement exempts us from liability arising from
                our fraud or reckless disregard of our professional obligations;
                or from our negligence resulting in death or personal injury; or
                where, in the case of a contentious business agreement, law or
                regulation prohibits the exclusion of such liability.
              </p>

              <h3 className="font-bold text-legalDark mt-4 mb-2">Drafts</h3>
              <p className="text-textMuted mb-3">
                Where we provide draft or provisional advice or other materials,
                that advice or those materials are not to be relied upon as
                constituting our final view.
              </p>

              <h3 className="font-bold text-legalDark mt-4 mb-2">
                Current Law
              </h3>
              <p className="text-textMuted mb-3">
                The Services are provided in accordance with professional
                practice requirements and the proper interpretation of the law,
                as each exists on the date on which the relevant Service is
                provided. If there is any change in such requirements or the law,
                or their interpretation, after the relevant Matter has been
                concluded (or before that time but which could not reasonably be
                known by us at that time), we have no responsibility to notify
                you of, or of the consequences of, the change.
              </p>

              <h3 className="font-bold text-legalDark mt-4 mb-2">
                Communication
              </h3>
              <p className="text-textMuted mb-3">
                We shall communicate with you at the postal and email addresses
                and the telephone numbers which you publish unless you ask us to
                use other addresses and numbers. You will notify us if you regard
                any communications from us as particularly confidential and the
                means by which you require us to make such communications and we
                shall have no liability to you arising out of your failure so to
                notify us.
              </p>
              <p className="text-textMuted mb-3">
                Subject to any notification you may make to us under the previous
                paragraph, we shall not be required to encrypt, password-protect
                or digitally sign any email, or attachment, sent by us. We shall
                not be responsible for any loss or damage arising from the
                unauthorised interception, re-direction, copying or reading of
                e-mails, including any attachments. We shall not be responsible
                for the effect on any hardware or software (or any loss or damage
                arising from any such effect) of any e-mails or attachment which
                may be transmitted by us (save to the extent caused by our
                negligence or wilful default).
              </p>

              <h3 className="font-bold text-legalDark mt-4 mb-2">Deadlines</h3>
              <p className="text-textMuted">
                We will try to meet any deadline we agree with you for the
                performance of any Services but, unless we agree otherwise in
                writing in relation to any time, date or period for delivery or
                performance by us, time shall not be of the essence.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Section 15 */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-tealAccent" /> 15.
                Termination
              </h2>

              <h3 className="font-bold text-legalDark mt-4 mb-2">
                Completion of Services
              </h3>
              <p className="text-textMuted mb-3">
                An agreement between you and us for the provision of defined
                Services ends on the completion of the provision of those
                Services. An open-ended agreement for the provision of Services
                ends three (3) months after the last date on which we provided
                Services to you. Unless new or different terms are agreed, our
                acceptance of instructions to perform Services for you subsequent
                to the ending of any agreement gives rise, from the time of
                acceptance of the instructions, to a new agreement on these
                terms. If we provide you free of charge with any seminar,
                information, or other document after the ending of an agreement,
                such provision does not give rise to a new agreement.
              </p>

              <h3 className="font-bold text-legalDark mt-4 mb-2">
                Early Termination
              </h3>
              <p className="text-textMuted mb-3">
                You may terminate the provision of all or any of the relevant
                Services at any time by giving written notice to us.
              </p>
              <p className="text-textMuted mb-3">
                We may also decide at any time to terminate the provision of all
                or part of the relevant Services by giving written notice to you.
                We will not do this without good reason. Some examples of reasons
                could be; if you do not pay your bill, if there is a conflict of
                interest, if money laundering checks fail or are unsatisfactory.
              </p>
              <p className="text-textMuted mb-3">
                If you or we decide that we no longer act for you, you will be
                responsible to pay our outstanding fees, expenses, disbursements
                and VAT (including those not yet billed) to the date of
                termination.
              </p>

              <h3 className="font-bold text-legalDark mt-4 mb-2">
                Rights on Early Termination
              </h3>
              <p className="text-textMuted">
                On early termination, by either you or us, you will remain liable
                to pay all fees and expenses incurred before termination and due
                under our contract or due on the basis of the time spent at our
                usual hourly rates, whichever is the less, together with any
                further fees and expenses for work necessary to transfer our
                files to another adviser of your choice.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Section 16 */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Gavel className="w-5 h-5 text-tealAccent" /> 16. Regulations
                affecting your cancellation rights
              </h2>
              <p className="text-textMuted mb-3">
                <strong>
                  The Consumer Contracts (Information, Cancellation and
                  Additional Charges) Regulations 2013:
                </strong>
              </p>
              <p className="text-textMuted mb-3">
                If you are an individual and you are instructing us for purposes
                which are wholly, or mainly, outside your trade, business, craft
                or profession, you will be considered a 'consumer' by law and
                will have certain statutory rights under consumer legislation.
                Under the Consumer Contracts (Information, Cancellation and
                Additional Charges) Regulations 2013, you have a statutory right
                to cancel your instructions to us within 14 days (without giving
                a reason) if your instructions to us are as a result of a
                situation where we do not actually meet (i.e. through email
                and/or telephone contact) or an off-premises contract (i.e. at a
                meeting between us not held at our offices).
              </p>
              <p className="text-textMuted mb-3">
                The cancellation period will expire after 14 calendar days from
                the day of the conclusion of the contract.
              </p>
              <p className="text-textMuted mb-3">
                To exercise your right to cancel, you must inform us of your
                decision to cancel this contract by a clear statement (e.g.: a
                letter sent by post or e mail) using the contact details in our
                Engagement Letter before the cancellation period has expired.
              </p>
              <p className="text-textMuted">
                Where you have asked us to commence work within the 14-calendar
                day cancellation period and you later exercise your right to
                cancel, you will be liable for any costs, VAT and disbursements
                incurred up to the point of cancellation. If you exercise your
                right to cancel, subject to any costs you are liable for as set
                out above, we will reimburse any payment received on account from
                you without undue delay and within 14 days after the day in which
                you informed us of your decision to cancel.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Section 17 */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Database className="w-5 h-5 text-tealAccent" /> 17. General
              </h2>

              <h3 className="font-bold text-legalDark mt-4 mb-2">
                Money Laundering Regulations / The Proceeds of Crime Act 2002
              </h3>
              <p className="text-textMuted mb-3">
                In accordance with the requirements of the Data Protection Act
                and the Money Laundering Regulations, we confirm:
              </p>
              <ul className="list-disc pl-5 text-textMuted space-y-1 mb-3">
                <li>Quality Conveyancing is the data controller;</li>
                <li>
                  Brinda Nicholson is the nominated representative / data
                  protection officer.
                </li>
              </ul>
              <p className="text-textMuted mb-3">
                To comply with anti-money laundering and counterterrorist
                financing requirements, we are required to identify and verify
                the identity of our clients. We may also be required to identify
                and verify the identity of other persons such as third parties
                providing funds towards a purchase, directors or beneficial
                owners. If you or they do not provide us with the required
                information promptly, your matter may be delayed.
              </p>
              <p className="text-textMuted mb-3">
                We make checks using online electronic verification systems or
                other databases as we may decide in order to comply with our
                obligations under anti-money laundering and counterterrorist
                financing regulations. We will also require you to provide to us
                documentary evidence of your source of funds and wealth for
                property transactions, this will include carrying out
                identification and verification checks of any third parties
                gifting you money.
              </p>
              <p className="text-textMuted mb-3">
                We will only process any documentation or personal data received
                from you in respect of client due diligence for the purposes of
                preventing money laundering and terrorist financing unless (a)
                use of that data is permitted by or under any enactment or (b)
                you give your express consent for the documentation or personal
                data to be used for other forms of processing.
              </p>

              <h4 className="font-bold text-legalDark mt-3 mb-2">Individual:</h4>
              <p className="text-textMuted mb-3">
                If you are an individual and a new client or an existing client
                who has not previously supplied information, you will be required
                to verify your identity using the online electronic search
                provider, details of which will be provided to you at the outset
                of your matter. If you are unable to use the online search
                provider, you will be required to provide us with one item from
                List A and one item from List B (please note we require certified
                copies if you are sending these by post or email (documents can
                be certified by another solicitor or an accountant). If you are
                bringing in the original documents to our offices – a member of
                our staff will make certified copies here) we will then carry out
                electronic check relying on the documents you provide.
              </p>

              <div className="bg-warmGray/30 p-4 rounded-xl text-xs space-y-2 text-textMuted border border-gray-100 mb-3">
                <p className="font-bold">LIST A (Proof of Identity):</p>
                <ul className="list-disc pl-4">
                  <li>Current fully signed Passport</li>
                  <li>Current full UK Photocard Driving Licence.</li>
                </ul>
                <p className="font-bold mt-2">
                  LIST B (Address Verification):
                </p>
                <ul className="list-disc pl-4">
                  <li>
                    A bill for the supply of electricity, gas, water or telephone
                    services (provided it is fewer than three (3) months old).
                    Mobile phone bills are not acceptable.
                  </li>
                  <li>Television Licence renewal notice.</li>
                  <li>
                    Council Tax bill (provided it is fewer than three (3) months
                    old).
                  </li>
                  <li>Recent Tax Coding Notice.</li>
                  <li>Recent Mortgage Statement.</li>
                  <li>
                    Credit Card/Bank Statement (provided it is fewer than three
                    (3) months old) showing current address.
                  </li>
                </ul>
              </div>

              <h4 className="font-bold text-legalDark mt-3 mb-2">
                Body Corporate:
              </h4>
              <p className="text-textMuted mb-3">
                If you are a new or existing body corporate client not listed on
                a regulated market who has not previously supplied information,
                we will require the following:
              </p>
              <ul className="list-disc pl-5 text-textMuted space-y-1 mb-3">
                <li>Company / organisation full name;</li>
                <li>Company or other registration number;</li>
                <li>
                  Registered address and, if different, principal place of
                  business address;
                </li>
                <li>Articles of association or other governing documents;</li>
                <li>
                  Names of the Board of Directors or members of your management
                  body and its senior management;
                </li>
                <li>
                  Directors will be required to complete an electronic ID check
                  via our chosen provider.
                </li>
                <li>
                  Written confirmation from the corporate body that the
                  instructing individual is authorised to act on its behalf.
                </li>
                <li>
                  A bank statement showing the initial funds before they are
                  transferred to the firm.
                </li>
              </ul>

              <h4 className="font-bold text-legalDark mt-3 mb-2">
                Source of funds
              </h4>
              <p className="text-textMuted mb-3">
                We will require evidence of source of all funds other than fees.
                We may use electronic searches to obtain this information. Checks
                will also be carried out on third party funds involved in your
                transaction.
              </p>
              <p className="text-textMuted mb-3">
                Under the provisions of the Proceeds of Crime Act 2002 ("POCA"),
                we may be required to make a report to the relevant authorities
                if at any time we become aware of or suspect (whether from you or
                any other person) the existence of the proceeds of crime in
                relation to any Services on which we are engaged. Our obligation
                to make such a report will, in certain circumstances, override
                our duty of solicitor/client confidentiality and we may not be
                permitted to inform you whether or not we have made, or might
                intend to make, such a report.
              </p>
              <p className="text-textMuted mb-3">
                We may terminate the provision of any Services to you or be
                instructed to do so by the relevant authorities, if you fail to
                comply with your obligation to provide evidence of identity or we
                suspect that you or any other party connected with you or with
                the Matter is involved in activities proscribed by POCA.
              </p>
              <p className="text-textMuted mb-3">
                The anti-money laundering guidance which UK banks and other
                finance services firms must adhere to is issued by the Joint
                Money Laundering Steering Group ("JMLSG"). The JMLSG considers
                all clients with funds deposited in a law firm's pooled client
                account to be beneficial owners of that account. The JMLSG does
                not require banks to routinely identify the beneficial owners of
                law firm's pooled accounts, as they do with most other accounts
                they issue. Pooled client accounts are granted this exemption on
                the proviso that this information is available upon request. In
                the event of our bank requesting information about the beneficial
                owners of our pooled client account, you agree to us disclosing
                your details to them.
              </p>
              <p className="text-textMuted mb-3">
                The firm does not tolerate tax evasion, or the facilitation
                thereof in any circumstances, whether committed by or facilitated
                by a client, personnel or associated persons/companies.
              </p>

              <h3 className="font-bold text-legalDark mt-4 mb-2">
                Equality and Diversity
              </h3>
              <p className="text-textMuted mb-3">
                We are committed to promoting equality and diversity in all of
                our dealings with clients, third parties and employees. We have a
                written equality, diversity and inclusion policy to ensure that
                discrimination and harassment are prevented, and that equality,
                diversity and inclusion are promoted.
              </p>
              <p className="text-textMuted">
                We will not discriminate in the way we provide our Services to
                you or in the way we instruct third parties.
              </p>

              <h3 className="font-bold text-legalDark mt-4 mb-2">
                Financial Services and Insurance Mediation
              </h3>
              <p className="text-textMuted mb-3">
                We are not authorised by the Financial Conduct Authority and if
                during the course of your matter, you need advice on investments,
                we may have to refer you to someone who is so authorised.
                However, as we are regulated by the Solicitors Regulation
                Authority, we may be able to provide certain limited investment
                services where these are closely linked to the legal work we are
                doing for you. The scope of our contract with you, however, does
                not and will not include giving you advice on the merits of
                entering into particular investments.
              </p>
              <p className="text-textMuted">
                We are also included on the register maintained by the Financial
                Conduct Authority so that we can carry on insurance mediation
                activity, which is broadly the advising on, selling and
                administration of insurance contracts. This part of our business,
                including arrangements for complaints or redress if something
                goes wrong, is regulated by the Solicitors Regulation Authority.
                The register can be accessed via the Financial Conduct Authority
                website at fca.org.uk/firms/financial-services-register. If you
                have any problem in respect of such services, please let us know.
                We will try to resolve any problem quickly. If for any reason we
                are unable to resolve the problem between us, the SRA provides a
                complaint and redress scheme. We do not manufacture insurance
                products and are not an insurance company.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Section 18 */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-tealAccent" /> 18.
                Complaints Procedure
              </h2>
              <p className="text-textMuted mb-3">
                We hope you will have no complaint. To underline how seriously we
                take complaints, we have a set Complaints Procedure which can be
                summarised as follows (a copy of our full complaints procedure is
                available on request):
              </p>
              <ul className="list-decimal pl-5 text-textMuted space-y-1 mb-4">
                <li>
                  If you have any complaint or observation (good or bad) about
                  our service, please let us know.
                </li>
                <li>
                  Raise any complaint first with the Fee Earner assigned to your
                  matter, including any complaint about your bill.
                </li>
                <li>
                  If this does not resolve it satisfactorily, tell the
                  Supervising Director responsible for your case.
                </li>
                <li>
                  If this still does not resolve it satisfactorily, contact
                  Brinda Nicholson, the Director nominated by the practice to
                  ensure prompt and thorough investigation of any complaint.
                </li>
                <li>
                  If still unresolved at this stage, you may take your complaint
                  to the Legal Ombudsman. Normally, you will have to bring your
                  complaint to the Legal Ombudsman within 6 months of receiving a
                  final response from us and within a year of the date of the act
                  or omission about which you are concerned or within a year of
                  you realising there was a concern.
                </li>
              </ul>
              <p className="text-textMuted mb-3">
                The address of the Legal Ombudsman is: PO Box 6167, Slough, SL1
                0EH; telephone, 0300 555 0333; or view their website at
                legalombudsman.org.uk, email enquiries to:
                enquiries@legalombudsman.org.uk
              </p>
              <p className="text-textMuted mb-3">
                A complainant to the Legal Ombudsman must be one of the
                following:
              </p>
              <ul className="list-disc pl-5 text-textMuted space-y-1 mb-3">
                <li>An individual;</li>
                <li>
                  A micro-enterprise as defined in European Recommendation
                  2003/361/EC of 6 May 2003 (broadly, an enterprise with fewer
                  than 10 staff and a turnover or balance sheet value not
                  exceeding €2 million);
                </li>
                <li>
                  A charity with an annual income less than £1 million;
                </li>
                <li>
                  A club, association or society with an annual income less than
                  £1 million;
                </li>
                <li>
                  A trustee of a trust with a net asset value less than £1
                  million; or a personal representative or the residuary
                  beneficiaries of an estate where a person with a complaint died
                  before referring it to the Legal Ombudsman.
                </li>
              </ul>
              <p className="text-textMuted mb-3">
                If you do not fall into any of these categories, you should be
                aware that you can only obtain redress by using our Complaints
                Handling Procedure or by mediation or arbitration, or by taking
                action through the Courts.
              </p>
              <p className="text-textMuted">
                You may also have the right to object to your bill by applying to
                the Court for an assessment of the bill under Part III of the
                Solicitors' Act 1974. Please be aware that the Legal Ombudsman
                may not consider a complaint about a bill if you have applied to
                court for an assessment of it.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Section 19 */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-tealAccent" /> 19. Quality
                Standards
              </h2>
              <p className="text-textMuted">
                Due to our own internal quality standards, we are subject to
                periodic checks by outside assessors. This could mean that your
                file may be selected for checking/auditing. We have a legitimate
                interest in acting in this way and take every possible precaution
                to protect your personal information. All inspections are
                conducted in confidence and all external firms and organisations
                working with Us are required to maintain confidentiality in
                relation to any files and papers that are audited/checked by
                them. Your files(s) may also be reviewed in a due diligence
                exercise relating to the sale or transfer of all or part of Our
                business, the acquisition of another business or the acquisition
                of a new business. Again, we have a legitimate interest in acting
                in this way and take every possible precaution to protect your
                personal information. Please contact us if you would like us to
                explain this further.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Section 20 */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-tealAccent" /> 20.
                Disclaimers
              </h2>

              <h3 className="font-bold text-legalDark mt-4 mb-2">Tax</h3>
              <p className="text-textMuted mb-3">
                We are not qualified to advise you on the tax implications of
                transactions you instruct us to carry out, or the likelihood of
                them arising.
              </p>

              <h3 className="font-bold text-legalDark mt-4 mb-2">
                Property Transactions
              </h3>
              <p className="text-textMuted mb-3">
                We will not advise you on the planning implications of your
                proposed purchase, unless specifically requested to do so by you,
                otherwise than by reporting to you on any relevant information
                provided by the results of the "local search".
              </p>
              <p className="text-textMuted">
                It is not our responsibility to carry out a physical inspection
                of the property nor advise on the valuation of the property nor
                the suitability of your mortgage nor any other financial
                arrangements. We shall not advise generally on environmental
                liabilities where we shall assume, unless you tell us to the
                contrary, that you are making your own arrangements for any
                appropriate environmental survey or investigations. We may,
                however, need to obtain on behalf of your lender, at your
                expense, an environmental search. However, we will not advise you
                about any issues relating to the possible contamination of any
                land which may be relevant to your purchase. We have to tell you
                that we are not qualified to advise on the results of any search
                made in that respect and would only be able to report to you the
                actual results of such a search. This is particularly significant
                in respect of the potential liabilities that may arise at some
                future point in time as a result of land contamination or flood
                risk that are having increasing significance. If you have any
                doubts, please discuss your concerns with us.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Section 21 */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Database className="w-5 h-5 text-tealAccent" /> 21. Data
                Protection
              </h2>
              <p className="text-textMuted">
                We respect your privacy, and we are committed to protecting your
                personal data. In the course of acting for you, we may receive
                information relating to you. Further information on how we
                process your personal data is available in our Privacy Policy, a
                copy of which can be viewed on our website at any time.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Section 22 */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-tealAccent" /> 22. Insurance
              </h2>
              <p className="text-textMuted mb-3">
                We hold professional indemnity insurance which is adequate and
                appropriate for the matters we act on. Our qualifying insurers
                are:
              </p>
              <p className="text-textMuted">
                <strong>Chubb European Group SE</strong> whose address is 100
                Leadenhall Street, London EC3A 3BP. Our insurance policy number
                is <strong>B0621PQUAL013422</strong>. Our professional indemnity
                insurance provides a compulsory minimum level of cover of £3
                million. The insurance covers our practice carried on from our
                offices in England and Wales and will extend to acts or omissions
                wherever in the world they occur.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Section 23 */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-tealAccent" /> 23. Financial
                Services Compensation Scheme
              </h2>
              <p className="text-textMuted mb-3">
                In the event of a banking failure it is unlikely that the firm
                would be held liable for any losses of client account money.
              </p>
              <p className="text-textMuted mb-3">
                We currently hold our client account funds in Lloyds Bank. The
                £85,000 Financial Services Compensation Scheme (FSCS) limit will
                apply to each individual client so if you hold other personal
                monies yourself in the same bank as our client account, the limit
                remains £85,000 in total, so it may be advisable to check with
                your own bank as some banks now trade under different trading
                names.
              </p>
              <p className="text-textMuted mb-3">
                However, the FSCS provide a £1 million protection limit for
                temporary high balances held with a bank, building society or
                credit union if it fails. Further details relating to what
                constitutes a temporary high balance and the rules relating to
                the protection can be found at www.fscs.org.uk
              </p>
              <p className="text-textMuted">
                In the event of a bank failure you agree to us disclosing details
                to the FSCS.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Section 24 */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <ChevronRight className="w-5 h-5 text-tealAccent" /> 24.
                Severability
              </h2>
              <p className="text-textMuted">
                Each of these terms shall be severable and distinct from the
                others and if any term is held to be illegal, invalid or
                unenforceable, in whole or in part, the remaining terms shall not
                be affected.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Section 25 */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-tealAccent" /> 25. Third Parties
              </h2>
              <p className="text-textMuted">
                The Services are provided to and for the benefit of you as our
                client and you alone. No other person may use or rely upon the
                Services nor derive any rights or benefits from them. The
                provisions of the Contracts (Rights of Third Parties) Act 1999
                are to that extent excluded.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Section 26 */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-tealAccent" /> 26. Force Majeure
              </h2>
              <p className="text-textMuted">
                Neither You nor We shall be liable for any failure to perform, or
                delay in performing, any obligations (other than payment and
                indemnity obligations) if and to the extent that the failure or
                delay is caused by Force Majeure and the time for performance of
                the obligation, the performance of which is affected by Force
                Majeure, shall be extended accordingly.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* Section 27 */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Gavel className="w-5 h-5 text-tealAccent" /> 27. Law and
                Jurisdiction
              </h2>
              <p className="text-textMuted">
                The terms on which we provide Services to you are governed by,
                and shall be construed in accordance with, English law. You and
                we each agree to submit to the exclusive jurisdiction of the
                English courts. However, we retain the right to bring proceedings
                against you in your country of residence or any other relevant
                country relating to any breach.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}