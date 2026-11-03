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
  FileText,
  Gavel,
  Users,
  Database,
  Shield,
  Banknote,
  Search,
  Handshake,
  Percent,
  FileWarning,
  Eye,
  Globe2,
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
              Quality Conveyancing Limited (Company Registration No. 07566902) — Official Terms of Business & Client Agreement.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 px-6 lg:px-12">
          <div className="container mx-auto max-w-4xl bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-10 text-legalDark text-sm leading-relaxed">
            
            {/* Contents Overview */}
            <div className="p-6 bg-warmGray/40 rounded-xl border border-gray-100">
              <h2 className="font-serif font-bold text-base text-legalDark mb-3">
                Contents Overview
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs text-textMuted font-medium">
                <div>1. Our Contract</div>
                <div>2. Our Responsibilities & Services</div>
                <div>3. Your Responsibilities</div>
                <div>4. Client Care Code</div>
                <div>5. Timescales & Commitments</div>
                <div>6. Property Searches</div>
                <div>7. Hours of Business</div>
                <div>8. Fees, Estimates & Expenses</div>
                <div>9. Commissions & Referrals</div>
                <div>10. Interest Policy</div>
                <div>11. Conflict of Interest</div>
                <div>12. Abortive Transactions</div>
                <div>13. Custody & Retention of Docs</div>
                <div>14. Intellectual Property Rights</div>
                <div>15. Limitations on Liability</div>
                <div>16. Communication</div>
                <div>17. Cybercrime & Fraud Warning</div>
                <div>18. Termination</div>
                <div>19. Proof of Identity & Funds</div>
                <div>20. Equality & Diversity</div>
                <div>21. General Terms & Framework</div>
                <div>22. Financial Services & Insurance</div>
                <div>23. Complaints Procedure</div>
                <div>24. Quality Standards</div>
                <div>25. Disclaimers</div>
                <div>26. Data Protection & Privacy</div>
                <div>27. FSCS Compensation Scheme</div>
                <div>28. Severability</div>
                <div>29. Third Parties</div>
                <div>30. Force Majeure</div>
                <div>31. Law & Jurisdiction</div>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* 1. Our Contract */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-tealAccent" /> 1. Our Contract
              </h2>
              <p className="text-textMuted mb-3">
                Quality Conveyancing is a Limited company registered in England and Wales with number <strong>07566902</strong> (VAT Registration Number 681223841). We are authorised by the Council for Licensed Conveyancers (CLC).
              </p>
              <p className="text-textMuted mb-3">
                The purpose of these Terms &amp; Conditions of Business (&ldquo;the Terms&rdquo;) is to set out clearly and definitively the basis on which our firm will act for you and as supplemented by any relevant Welcome Pack Documents (Engagement Letter). No variation of these Terms shall be effective, unless it is in writing and is signed by one of our Directors.
              </p>
              <p className="text-textMuted mb-3">
                We will not start work on your matter until we receive acceptance of these Terms from you. We require your acceptance where indicated in the Engagement Letter. The Engagement Letter and these Terms together constitute our entire agreement with you.
              </p>
              <p className="text-textMuted mb-3">
                By engaging our services or returning a signed copy of the Engagement Letter, you formally agree to be bound by these Terms of Business. If you do not return the signed acceptance portion of the Engagement Letter but allow us to proceed with work on your behalf, your ongoing instructions shall constitute full acceptance of these Terms. Unless explicitly superseded by a revised agreement in writing, these Terms will also apply to any future matters or transactions in which you instruct the Firm.
              </p>
              <p className="text-textMuted mb-3">
                When we are instructed by two or more clients jointly, you agree that your obligations and representations are given on a joint and several basis. This applies to all transaction decisions, including confirming your intention to proceed, providing responses to legal enquiries, approving additional fees or expenses, and agreeing target dates for exchange and completion.
              </p>
              <p className="text-textMuted mb-4">
                This joint authority does not diminish our duty to identify and manage potential Conflicts of Interest. Where a conflict or differing personal interests arise—such as determining the apportionment of net sale proceeds—we will require individual, separate instructions from each named client. To safeguard your instructions and data privacy, we will not take directions from third parties, including family members or close associates, unless you have provided us with explicit written authority to do so.
              </p>

              <div className="bg-warmGray/50 p-4 rounded-xl border border-gray-100 text-xs text-textMuted space-y-2 mt-3">
                <div className="font-bold text-legalDark mb-1">Defined terms — In these Terms of Business:</div>
                <p><strong>&ldquo;the Firm&rdquo;</strong> means Quality Conveyancing and any successor practice, and any service company owned or controlled by or on behalf of the Firm or any of the Directors (references to &lsquo;we&rsquo;, &lsquo;us&rsquo; or &lsquo;our&rsquo; in these Terms of Business are references to the Firm);</p>
                <p><strong>&ldquo;Associated Entities&rdquo;</strong> means (where you are a body corporate) your shareholders, directors (as individuals not acting together as the Board), officers and employees, subsidiaries, parent companies, and subsidiaries of parent companies, and (where you are a trade association) your individual members;</p>
                <p><strong>&ldquo;Credit Period&rdquo;</strong> means the period of seven (7) days from the date of our invoice for our fees and/or expenses;</p>
                <p><strong>&ldquo;Documents&rdquo;</strong> means documents we create or receive on your behalf (including communications from or with third parties, notes of conversations and meetings, draft and final documents, and instructions to and opinions of barristers);</p>
                <p><strong>&ldquo;Engagement Letter&rdquo;</strong> means, in relation to any Matter, the letter (or other agreement) recording the basis of our engagement; often referred to as the &ldquo;Welcome Pack&rdquo;;</p>
                <p><strong>&ldquo;Force Majeure&rdquo;</strong> means any circumstance beyond the reasonable control of the party affected by it and includes telecommunications failure, power supply failure, terrorism, fuel strikes, severe weather, computer breakdown, failure of suppliers to meet delivery requirements, industrial disputes and absence of personnel due to illness or injury;</p>
                <p><strong>&ldquo;Matter&rdquo;</strong> means any specific transaction, dispute or issue in relation to which you ask us to provide Services whether or not it has been defined in an Engagement Letter or other agreement;</p>
                <p><strong>&ldquo;Director&rdquo;</strong> means a Director of the Firm;</p>
                <p><strong>&ldquo;Services&rdquo;</strong> means all services we provide to you in relation to the relevant Matter;</p>
                <p><strong>&ldquo;You&rdquo;</strong> includes the addressee of the relevant Engagement Letter and any other person identified in the Engagement Letter as our client and &ldquo;your&rdquo; shall have a cognate meaning.</p>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* 2. Our responsibilities and services */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-tealAccent" /> 2. Our Responsibilities and Services
              </h2>
              <p className="font-semibold text-legalDark mb-1">Our Responsibilities — In delivering our Services we will:</p>
              <ul className="list-disc list-inside text-textMuted space-y-1 mb-4 pl-2">
                <li>Treat you fairly and with respect;</li>
                <li>Communicate with you in plain language;</li>
                <li>Review your Matter regularly;</li>
                <li>Advise you of any changes in the law that affect your Matter; and</li>
                <li>Advise you of any reasonably foreseeable circumstances and risks that could affect the outcome of your Matter.</li>
              </ul>

              <p className="font-semibold text-legalDark mb-1">Our Services:</p>
              <p className="text-textMuted mb-2">
                The Director at the Firm named in the Welcome Pack/Engagement Letter as the &ldquo;Supervising Director&rdquo; will be the Director primarily responsible for the provision of our Services to you. That Director has complete discretion to deploy such of our lawyers, trainee lawyers, paralegals or other staff as she/he deems necessary or desirable to ensure appropriate delivery of the Services.
              </p>
              <p className="text-textMuted mb-2">
                We realise that it is important not to change the people who are handling your work but sometimes this cannot be avoided. If a change is necessary, we will inform you promptly of the reason and who will take responsibility for your work.
              </p>
              <p className="text-textMuted mb-2">
                We only advise on the Laws of England and Wales. Where a transaction or other work also involves the laws of another jurisdiction it is your responsibility to ensure that competent advice has been taken in a timely manner and that we have been provided with a full and complete copy of that advice.
              </p>
              <p className="text-textMuted mb-2">
                We may require that you contract directly with certain third parties and assume direct responsibility to them for the payment of their fees and expenses.
              </p>
              <div className="p-3 bg-tealAccent/10 rounded-xl border border-tealAccent/20 text-xs text-legalDark mt-3">
                <strong>International Operations:</strong> Note that we have operations in the UK and India. Our specialist team in India provides legal, account management, and administrative capability to Quality Conveyancing customers in the UK. By accepting these Terms of Business you accept that your transaction may be worked on by staff based in India as well as in the UK.
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* 3. Your responsibilities */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-tealAccent" /> 3. Your Responsibilities
              </h2>
              <p className="text-textMuted mb-2">You will (so far as you are practicably able to do so):</p>
              <ul className="list-disc list-inside text-textMuted space-y-1.5 pl-2">
                <li>Provide us with clear, timely and accurate instructions, and the information and materials necessary or desirable for us to perform the Services for you in a timely manner;</li>
                <li>Notify us promptly of any changes or additions to instructions, information and materials previously provided by you or on your behalf;</li>
                <li>Ensure that all information provided to us is complete in all material respects and not misleading; and</li>
                <li>Safeguard any documents that may be required for your Matter, including documents that you may have to disclose to another party.</li>
              </ul>
            </div>

            <hr className="border-gray-100" />

            {/* 4. Client care code */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-tealAccent" /> 4. Client Care Code
              </h2>
              <p className="text-textMuted mb-3">
                We want you to be happy with every aspect of our Service. We therefore operate a Client Care Code, the principles of which are as set out below:
              </p>
              <ul className="list-disc list-inside text-textMuted space-y-1.5 pl-2 mb-3">
                <li>We are committed wholeheartedly to the professional standards laid down by the Council for Licensed Conveyancers.</li>
                <li>You will be told clearly at the outset the issues and how we advise they be dealt with, and the immediate steps we will take on your behalf.</li>
                <li>You will be regularly informed of the progress of your Matter.</li>
                <li>We will explain to you by telephone or in writing the legal work required as your Matter progresses.</li>
                <li>We will update you on the likely timescales for each stage of this Matter and any important changes in those estimates. Whenever there is a material change in circumstances associated with your Matter, we will update you on whether the likely outcomes still objectively justify the likely costs and risks.</li>
                <li>We will update you on the cost of your matter at the intervals set out in the Engagement Letter. If appropriate, we will continue to review whether there are alternative methods by which your matter can be funded.</li>
              </ul>
              <p className="text-textMuted mb-2">
                The Engagement Letter notifies you of the name of the person or persons dealing on a day-to-day basis with your matter (the &ldquo;Fee Earner&rdquo;), and the Supervising Director. You will be told the name of the new fee earner if the matter is transferred.
              </p>
              <p className="text-textMuted mb-2">
                We cannot guarantee that the Fee Earner or Supervising Director will be available on demand, but we will do our best to get back to you promptly and efficiently. If you do not understand anything, please always ask.
              </p>
              <p className="text-textMuted mb-2">
                At the end of your Matter, you will be sent a bill with a letter confirming the Matter has been completed and, where necessary, summarising any continuing consequences.
              </p>
              <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 mt-2">
                <strong>Strict Cash Policy:</strong> The Firm does not accept cash payments from clients. If you try to avoid this policy by depositing cash directly with our bank, we may charge you for any additional checks that are necessary to prove the source of the funds. Checks shall be necessary at our discretion in order to comply with our legal and regulatory obligations. Where we have to pay money to you, it will be paid by cheque or bank transfer. It will not be paid in cash or to a third party.
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* 5. Timescales */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-tealAccent" /> 5. Timescales &amp; Premature Commitments
              </h2>
              <p className="text-textMuted mb-3">
                We are dedicated to progressing your transaction as efficiently as possible and will make every reasonable effort to meet realistic target dates requested by you or other parties in the transaction chain. However, property conveyancing relies heavily on the performance and cooperation of external parties outside our control, including other legal representatives, mortgage lenders, local authorities, search providers, and landlords. Transaction speed and workflow can also be impacted by overall market volume and seasonal caseload capacity.
              </p>
              <p className="text-textMuted mb-3">
                Accordingly, we cannot offer a firm guarantee or warranty regarding specific exchange or completion dates, nor can we predict the precise timeframe required by HM Land Registry to complete post-completion registration.
              </p>
              <p className="text-textMuted mb-3">
                We will provide you with regular updates as your matter progresses, explain the reasons for any unexpected delays, and notify you promptly if unforeseen legal work or complications arise. To help us manage your transaction effectively, please inform us immediately if you become aware of any external factor, chain complication, or deadline that could impact your expected timeline.
              </p>
              <p className="text-textMuted mb-3">
                It is essential to understand that no legally binding agreement exists between you and the other party until contracts have been formally exchanged. Prior to formal exchange, either party retains the absolute legal right to withdraw from the transaction without penalty or financial obligation to the other.
              </p>
              <div className="p-4 bg-red-50 rounded-xl border border-red-200 text-xs text-red-900 space-y-1.5">
                <div className="font-bold flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  Premature Commitments and Financial Risk Warning:
                </div>
                <p>
                  To avoid unnecessary financial loss or disruption, you must not enter into any binding commitments or incur non-refundable expenses—such as signing removal contracts, arranging property surveys, terminating a tenancy agreement, or making travel arrangements—until we have explicitly confirmed to you in writing that contracts have been legally exchanged and the completion date is fixed. The Firm accepts no liability for any losses or costs incurred if you make financial or logistical arrangements prior to formal exchange.
                </p>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* 6. Searches */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Search className="w-5 h-5 text-tealAccent" /> 6. Searches
              </h2>
              <p className="text-textMuted">
                As part of our legal services for your property transaction, we charge a consolidated Property Search Package Fee that incorporates the procurement of essential search reports including Local Authority, Environmental, Water and Drainage searches, and Chancel Repair search, alongside our professional time spent managing, analyzing, and reporting on the findings to you and your mortgage lender. To ensure full fee transparency and clear accounting, this inclusive search and legal review service will be itemized on your invoices and completion statements under our legal fees as: <strong>&ldquo;Property Searches/Conveyancing Search: Search Pack Managing, Analysing and Reporting.&rdquo;</strong>
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* 7. Hours of business */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-tealAccent" /> 7. Hours of Business
              </h2>
              <p className="text-textMuted">
                The normal hours of opening at our offices are between <strong>9:00 a.m. and 5:00 p.m. on weekdays</strong>. Messages can be left on the answerphone outside those hours and appointments may be arranged at other times when this is essential.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* 8. Fees, Estimates & Expenses */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Banknote className="w-5 h-5 text-tealAccent" /> 8. Fees, Estimates &amp; Expenses
              </h2>
              <div className="space-y-3 text-textMuted">
                <p>
                  <strong>Quotations, Cost Estimates, and Scope of Work:</strong> Our indicative fee structure is published on our website. Prior to commencing work, your Engagement Letter will set out either our agreed fees or the basis upon which our charges will be calculated. Estimates are provided for budget guidance only and do not constitute a fixed or capped agreement. Where costs cannot be estimated in advance, you may set a financial limit on the fees incurred without prior authorization. If this limit restricts the scope of work achievable, we will inform you of the expected progress within that budget.
                </p>
                <p>
                  <strong>Additional Fees and Out-of-Scope Work:</strong> Quotations assume a straightforward transaction. If a matter becomes complex, urgent, or onerous due to unforeseen factors, or as a result of acts/omissions by you or your agents, we reserve the right to charge supplementary fees (either as a fixed sum or at our standard hourly rates). Excessive, unnecessary correspondence or telephone calls will significantly increase costs. Where out-of-scope work becomes necessary, we will inform you as soon as reasonably practicable and provide a breakdown of additional fees for your approval prior to commencing further work. All additional fees are subject to statutory VAT at prevailing rates.
                </p>
                <p>
                  <strong>Disbursements and VAT Treatment:</strong> You are responsible for paying all third-party expenses and disbursements incurred on your behalf. In accordance with guidance from HM Revenue &amp; Customs (HMRC) and the Council for Licensed Conveyancers (CLC), statutory VAT will be added to applicable legal fees and third-party expenses (including our consolidated Property Search Package, Land Registry fees, and bankruptcy searches) and itemized on your completion statement. There may occasionally be a delay in invoicing third-party expenses pending our receipt of final supplier invoices.
                </p>
                <p>
                  <strong>Invoicing Frequency, Completion Statements, and Payments on Account:</strong> Unless agreed otherwise, we may issue invoices at appropriate intervals (normally monthly), at the end of our financial year for unbilled work, and upon completion of each matter. Interim invoices represent a final account of fees for the legal work performed during that period. Prior to completion, we will issue a formal completion statement detailing all fees, expenses, and disbursements. Where sufficient cleared funds are held in our client account at completion, you authorize us to deduct our outstanding fees and expenses directly. We may request payments on account for anticipated fees and disbursements throughout your matter. When acting for a limited company, we may require a personal guarantee for our fees from a director or controlling shareholder.
                </p>
                <p>
                  <strong>Payment Methods, Cleared Funds, and Strict Cash Policy:</strong> Invoices and completion balances may be settled by electronic bank transfer. Please contact us directly to verify our official client bank account details before transferring funds. Where net transaction proceeds or refunds are due to you, payments will be remitted solely by bank transfer directly to your verified account. Under no circumstances does the Firm accept cash payments. Completion is conditional upon the firm holding cleared funds covering the full balance shown on your completion statement.
                </p>
                <p>
                  <strong>Payment Terms, Interest, Debt Recovery, and Work Suspension:</strong> Invoices are payable upon receipt or within the credit period specified. If an invoice remains unpaid after 30 days from the invoice date, we reserve the right to charge statutory interest under the Late Payment of Commercial Debts regulations (currently 8% plus the Bank of England Base Rate), together with statutory debt recovery fees and legal costs. If cleared funds are not received prior to scheduled completion, or if a payment on account demand is not satisfied within 7 days, we reserve the right to suspend or terminate all services immediately.
                </p>
                <p>
                  <strong>Joint Clients and Third-Party Payments:</strong> Where two or more individuals instruct us jointly, all named clients are jointly and severally liable for the total payment of our fees and disbursements. If a third party agrees to pay your legal costs, you remain primarily liable for our invoices.
                </p>
                <p>
                  <strong>Right to Retain Money and Documents (Legal Lien):</strong> We are entitled to exercise a legal lien over any of your money, files, legal deeds, and property in our possession until all outstanding invoices, disbursements, interest, and expenses are paid in full.
                </p>
                <p>
                  <strong>Scope of Advice and Banking Liabilities:</strong> Our advice is strictly limited to legal conveyancing. We do not provide financial, investment, or tax advice (including SDLT planning or predictions on legal changes), and accept no liability for losses resulting from your failure to seek independent financial/tax advice. Advice provided is for your sole benefit. We accept no responsibility or liability for the loss of client funds resulting from a system failure, insolvency, or collapse of the clearing bank holding our client account.
                </p>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* 9. Commissions and Referrals */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Handshake className="w-5 h-5 text-tealAccent" /> 9. Commissions and Referrals
              </h2>
              <p className="text-textMuted mb-2">
                We will only refer, recommend or introduce you to another business where you have given us informed consent to do so. In the event that we become entitled to commission from a third party during the course of the transaction, we will write to you to obtain your consent to our retaining the commission.
              </p>
              <p className="text-textMuted mb-2">
                We may pay a referral fee for work which is referred to us by third parties such as estate agents. Such fees will usually be required by the third party as a condition of passing the referral to us. In such a situation we will inform you in our Engagement Letter and will tell you what fee we have paid.
              </p>
              <p className="text-textMuted">
                The advice which we give to you will be independent and we will treat you in exactly the same manner as any other client. You are free to raise questions on all aspects of the transaction and any information which you disclose to us will be treated as confidential and will not be disclosed to the referrer or to any other third party without your consent. We will not act for the referrer in connection with the same transaction and you are under no obligation to instruct us in connection with the transaction. Please also note that we may share customer personal data and case progression updates with the referrer in question.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* 10. Interest policy */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Percent className="w-5 h-5 text-tealAccent" /> 10. Interest Policy
              </h2>
              <p className="text-textMuted">
                It is not the firm’s practice to hold substantial sums of client money for any significant period. Therefore, due to the administrative and economic cost of calculating interest amounts on client money we do not pay interest on money held in client account. Please note therefore that in signing these Terms of Business you are explicitly contracting out of the provisions in the CLC Accounts Code governing the payment to clients of interest on client money held in our client account. If you do not wish this clause of the Terms of Business to apply in your case you must contact us at the earliest opportunity.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* 11. Conflict of interest & Regulatory Duty */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Scale className="w-5 h-5 text-tealAccent" /> 11. Conflict of Interest &amp; Regulatory Duty
              </h2>
              <p className="text-textMuted mb-2">
                A &ldquo;Conflict of Interest&rdquo; arises when our professional duty to act in the best interests of one client conflicts or is at significant risk of conflicting with our separate duty to act in the best interests of another client, or with our own professional interests. While we may act for individuals or corporate entities whose commercial activities are similar to or competitive with yours, we manage all instructions strictly in accordance with our regulatory duties under the CLC Code of Conduct and our firm-wide Conflicts of Interest Policy.
              </p>
              <p className="text-textMuted mb-2">
                <strong>Acceptance and Refusal of Instructions:</strong> Once engaged on your matter, we will not accept instructions from a third party in relation to the same matter if a Conflict of Interest exists. We reserve the right to decline any instructions where accepting them would create a Conflict of Interest, breach our internal Conflicts of Interest Policy, or cause us to breach a duty of confidentiality or contract with another client.
              </p>
              <p className="text-textMuted mb-2">
                <strong>Permitted Exceptions and Informed Consent:</strong> Where permitted by CLC regulatory rules and our Conflicts of Interest Policy, we may act for two or more parties in a transaction where a potential conflict exists (such as acting for both a buyer and a lender, or joint buyers) only if it is in the best interests of all affected clients, robust operational safeguards (such as formal information barriers or separate fee earners) are established, and all relevant parties have provided their explicit, informed consent in writing.
              </p>
              <p className="text-textMuted">
                <strong>Emerging Conflicts and Termination of Service:</strong> If a material Conflict of Interest arises during your transaction due to changing circumstances, non-alignment of interests, or unexpected disputes, we will contact you immediately. If the conflict cannot be resolved or managed with appropriate safeguards, we may be legally required to cease acting for you, the other party, or all affected clients.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* 12. Abortive Transactions */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <FileWarning className="w-5 h-5 text-tealAccent" /> 12. Abortive Transactions and Discontinued Matters
              </h2>
              <p className="text-textMuted mb-2">
                <strong>Standard Abortive Matters:</strong> Unless otherwise agreed in your Engagement Letter or covered by an explicit &ldquo;No Completion, No Legal Fee&rdquo; arrangement, if your transaction does not proceed to completion for any reason, you will be liable to pay our legal fees for the work carried out up to the point of cancellation, together with all non-refundable file set-up fees and disbursements incurred on your behalf.
              </p>
              <p className="text-textMuted">
                <strong>Early Cancellation Within Statutory Window (14-Day Cancellation Period):</strong> If you exercise your statutory right to cancel your instructions within 14 days of engagement under the Consumer Contracts Regulations, and providing you have not requested us to commence work or sign off on key matter milestones, any unexpended payments on account will be refunded to you. Where you have expressly authorized us to begin work immediately within this 14-day window and the matter subsequently aborts, we will not charge for unperformed legal work, but you will remain strictly responsible for all disbursements incurred or committed to third parties from your initial quotation.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* 13. Custody, retention and transfer of documents */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Database className="w-5 h-5 text-tealAccent" /> 13. Custody, Retention and Transfer of Documents
              </h2>
              <div className="space-y-2 text-textMuted">
                <p>
                  Upon receipt of payment for our final invoice, we will store your matter file (physically or electronically) for up to <strong>15 years for purchases</strong> and <strong>6 years for sales</strong>, after which it will be automatically destroyed. By instructing us, you consent to this destruction policy.
                </p>
                <p>
                  If you prefer your file not to be destroyed, you must notify us in writing on or before paying the final invoice to arrange collection. You may request that we retain your file beyond the standard retention period for a reasonable fee.
                </p>
                <p>
                  We reserve the right to charge a modest fee for retrieving and supplying copies of documents after completion. However, if we retrieve papers to handle new or continuing instructions, retrieval is generally free, though we may charge for the time spent reviewing or acting on them.
                </p>
                <p>
                  If you request your file during or after our engagement, we will release it to you, provided all outstanding fees are paid and no legal restrictions apply. We reserve the right to copy the file before release and to retain internal work product. Unless agreed otherwise in writing, we accept no responsibility for loss or damage to items held on your behalf.
                </p>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* 14. Intellectual property rights */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-tealAccent" /> 14. Intellectual Property Rights
              </h2>
              <p className="text-textMuted mb-2">
                <strong>Copyright:</strong> We retain copyright and all other intellectual property rights in all documents and other works we develop or generate for you in providing the Services (including know-how and working materials as well as final documents). We now grant you a non-exclusive, non-transferable, non-sublicensable licence to use such documents or other works solely for the Matter to which the Services of developing or generating them relate and not otherwise. If you do not pay us in full for our Services in relation to that Matter we may, on giving you notice, revoke that licence and only re-grant it to you once full payment has been made.
              </p>
              <p className="text-textMuted">
                <strong>Opinions from Barristers and other Third Parties:</strong> We may retain, for our subsequent use, a copy of the advice or opinion of any barrister or other third party given in written form obtained in the course of providing the Services. If we retain a copy of any advice or opinion in this manner we will take all reasonable steps to conceal information (such as names, addresses or descriptions) which might reasonably enable you to be identified.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* 15. Limitations On Liability */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-tealAccent" /> 15. Limitations On Liability
              </h2>
              <div className="space-y-2.5 text-textMuted">
                <p><strong>Excluded Advice &amp; Specific Liabilities:</strong> Our services do not include tax advice or tax planning strategies. We are not liable for losses resulting from the non-application of the Building Safety Act 2022, inaccurate property/remediation information provided under the Act, or a lender’s decision to withhold lending due to building safety concerns. Unless agreed in writing, we accept no responsibility for client-imposed deadlines or transaction delays. While we use virus detection software, we accept no liability for loss or damage caused by computer viruses.</p>
                <p><strong>Financial Deposits &amp; Insolvency:</strong> We deposit client funds into banks or financial institutions of our choice in compliance with regulatory rules. We are not liable for any losses caused by the insolvency of any deposit provider or clearing house. In the event of a provider’s insolvency, you agree we may share your details with the Financial Services Compensation Scheme (FSCS) to facilitate compensation claims.</p>
                <div className="p-3 bg-warmGray/60 rounded-xl border border-gray-100 font-medium text-legalDark text-xs">
                  <strong>Financial Liability Cap:</strong> Our aggregate liability (and that of our directors, employees, consultants, and agents) for any claim arising from our services is strictly capped at <strong>£3,000,000 per matter</strong>.
                </div>
                <p><strong>Proportional Liability &amp; Indirect Losses:</strong> If multiple parties share fault for your loss, our liability is limited strictly to our proportional contribution to the overall fault. We are not liable for indirect, consequential, special, or exemplary damages, or for lost profits, chances, or opportunities.</p>
                <p><strong>Claims Against Individuals:</strong> You agree to bring any claims solely against the Firm and waive the right to claim against any individual director, employee, consultant, or agent.</p>
                <p><strong>Statutory Exceptions:</strong> Nothing in these terms limits or excludes our liability for death or personal injury caused by our negligence, fraud, reckless disregard of professional obligations, or any other liability that cannot be excluded by law.</p>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* 16. Communication */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-tealAccent" /> 16. Communication
              </h2>
              <p className="text-textMuted mb-2">
                We will communicate with you using the postal addresses, email addresses, and telephone numbers you provide unless you instruct us otherwise.
              </p>
              <p className="text-textMuted mb-2">
                <strong>Security &amp; Confidentiality:</strong> Internet communications are not secure. If any communication is particularly confidential, you must notify us in writing of the specific transmission method required. We do not encrypt, password-protect, or digitally sign emails unless requested.
              </p>
              <p className="text-textMuted">
                <strong>Delivery &amp; Viruses:</strong> We cannot guarantee email delivery. While we use firewalls and antivirus software, we cannot guarantee emails are virus-free; you are expected to maintain your own security precautions against viruses and hacking. We are not liable for losses resulting from your failure to notify us of confidentiality requirements, email interception, redirection, unauthorized reading, or hardware/software issues caused by transmitted emails.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* 17. Cybercrime & Fraud Warning */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Lock className="w-5 h-5 text-tealAccent" /> 17. Cybercrime &amp; Fraud Warning
              </h2>
              <div className="p-4 bg-red-50 rounded-xl border border-red-200 text-xs text-red-950 space-y-2 mb-3">
                <div className="font-bold flex items-center gap-1.5 text-red-900">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  CRITICAL FRAUD WARNING — OUR BANK DETAILS WILL NEVER CHANGE BY EMAIL:
                </div>
                <p>
                  Law firms and legal clients are prime targets for cybercriminals attempting to intercept communications and illegally divert transaction funds. <strong>Our bank account details will NEVER change during the course of your transaction via email, telephone, or letter.</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 pl-1">
                  <li>Always carefully inspect the sender’s full email address for subtle alterations or spoofing attempts.</li>
                  <li>If you receive any communication purporting to be from us that provides bank details or requests a transfer after your initial Engagement Letter, you must speak directly with your assigned case handler by telephone using our official office number prior to transferring any money.</li>
                  <li>Verify all account details against the official bank details provided in our initial Engagement Letter.</li>
                </ul>
              </div>
              <p className="text-textMuted text-xs">
                <strong>Limitation of Liability:</strong> The Firm accepts no liability whatsoever for any loss or damage arising from funds transferred into an unauthorized account or an account other than the official client bank account specified in our initial Engagement Letter.
              </p>
              <p className="text-textMuted text-xs mt-2">
                <strong>Deadlines:</strong> We will try to meet any deadline we agree with you for the performance of any Services but, unless we agree otherwise in writing in relation to any time, date or period for delivery or performance by us, time shall not be of the essence.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* 18. Termination */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Gavel className="w-5 h-5 text-tealAccent" /> 18. Termination
              </h2>
              <p className="text-textMuted mb-2">
                You have the right to withdraw your instructions, without charge, by notice in writing to us at any time within fourteen days of us receiving your instructions. However, if you instruct us to begin work during the 14-day cancellation period and later cancel, you must pay for all proportionate work, fees, VAT, and disbursements incurred up to the cancellation point. Any payments on account received—minus any fees owed for work performed at your request—will be refunded within 14 days of receiving your cancellation notice.
              </p>
              <p className="text-textMuted mb-2">
                You may terminate your instructions to us in writing at any time but we are entitled to keep all your papers and documents while any money is owing to us for fees or expenses. In addition, you do not own the entire contents of your file but only such material which is your property according to law and the rules of our regulatory body.
              </p>
              <p className="text-textMuted">
                We may decide to stop acting for you if we have good reason (e.g. if you do not pay an invoice or comply with our request for payment on account or there is a conflict of interest). We will also terminate the instructions where the relationship of trust and confidence between us has broken down for whatever reason. In particular, the making of rude or offensive statements to members of our staff is likely to result in us refusing to continue to act for you. We will give you reasonable notice that we will stop acting for you. If our instructions are terminated, you will pay our reasonable charges up to that point as set out in our Engagement Letter.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* 19. Proof of Identity, Funds and Confidentiality */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Eye className="w-5 h-5 text-tealAccent" /> 19. Proof of Identity, Funds and Confidentiality
              </h2>
              <div className="space-y-3 text-textMuted">
                <p>
                  <strong>Our Duty of Confidentiality:</strong> We will treat all information regarding your personal and business affairs as strictly confidential. We will not disclose your confidential information to any third party unless disclosure is required or permitted by law/regulation, authorized by these Terms, or you give us your express prior consent.
                </p>
                <p>
                  <strong>Your Duty of Confidentiality:</strong> All written advice, communications, and reports provided by us are strictly confidential and prepared solely for your use as our client. You agree not to disclose or publish our advice to any third party without our prior written consent.
                </p>
                <p>
                  <strong>Joint Instructions, Shared Confidentiality, and File Retention:</strong> Where we are instructed jointly by two or more clients on a matter: each joint client irrevocably authorizes us to disclose to all other joint clients any information or documentation relevant to the matter. Confidentiality cannot be maintained between joint clients. All obligations to pay our legal fees, expenses, and disbursements are joint and several. If a joint client requests a copy of the matter file, we will retain the original master file and provide copies.
                </p>
                <p>
                  <strong>Statutory Obligations and Data Controller Details:</strong> Under the Proceeds of Crime Act 2002 (POCA) and current Anti-Money Laundering / Counter-Terrorist Financing regulations, Quality Conveyancing Limited is legally mandated to verify the identity, residential address, and legitimate Source of Funds and Source of Wealth for all clients and associated third parties. For data protection purposes, Quality Conveyancing Limited is the Data Controller, and <strong>Brinda Nicholson</strong> is the Nominated Data Protection Representative and Money Laundering Reporting Officer (MLRO).
                </p>
                
                <div className="bg-warmGray/40 p-4 rounded-xl border border-gray-100 text-xs space-y-2">
                  <div className="font-bold text-legalDark">Verification Procedures and Required Documentation:</div>
                  <p>We verify identity and financial origin using accredited electronic verification providers, biometrics, Open Banking technology (e.g., Armalytix), and documentary evidence.</p>
                  <p><strong>Individual Clients:</strong> You will be requested to complete an online electronic identity verification check. If you are unable to complete it, physical documentation must be brought to our offices:</p>
                  <ul className="list-disc list-inside pl-1 space-y-1">
                    <li><strong>List A (Proof of Identity):</strong> Current fully signed Passport; or Current full UK Photocard Driving Licence.</li>
                    <li><strong>List B (Address Verification – dated within 3 months unless specified):</strong> Utility bill (electricity, gas, water, or landline; mobile bills excluded); Television Licence renewal notice; Council Tax bill; Recent Tax Coding Notice; Recent Mortgage Statement; or Bank/Credit Card Statement showing current address.</li>
                  </ul>
                  <p><strong>Corporate Clients:</strong> Full company name, registration number, registered office, principal trading address, Articles of Association, list of directors, written authority confirming instructing mandate, bank statement showing initial funds, and electronic ID verification for all directors/shareholders.</p>
                </div>

                <p>
                  <strong>Source of Funds, Non-UK Transfers, and Disbursement Non-Refundability:</strong> We require verified evidence of the origin of all funds involved in your transaction. Funds originating outside the UK require Enhanced Due Diligence (EDD) and may take additional time. We cannot exchange contracts or complete work until all requested due diligence is satisfied. If your transaction aborts because satisfactory proof cannot be established, you remain fully liable for all third-party disbursements already incurred.
                </p>
                <p>
                  <strong>Mandatory NCA Reporting:</strong> While we owe you a strict duty of confidentiality, statutory obligations override this duty where financial crime is suspected. If we know or suspect that a transaction involves money laundering or proceeds of crime, we are legally required to submit a Suspicious Activity Report (SAR) to the National Crime Agency (NCA) without prior notice to you.
                </p>
                <p>
                  <strong>Zero Tolerance to Tax Evasion:</strong> The Firm maintains a strict zero-tolerance policy towards the evasion of tax or the facilitation thereof under the Criminal Finances Act 2017.
                </p>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* 20. Equality and Diversity */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-tealAccent" /> 20. Equality and Diversity
              </h2>
              <p className="text-textMuted">
                We are committed to promoting equality and diversity in all of our dealings with clients, third parties and employees. We have a written equality, diversity and inclusion policy to ensure that discrimination and harassment are prevented, and that equality, diversity and inclusion are promoted. We will not discriminate in the way we provide our Services to you or in the way we instruct third parties.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* 21. General Terms, Statutory Rights, and Legal Framework */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-tealAccent" /> 21. General Terms, Statutory Rights, and Legal Framework
              </h2>
              <div className="space-y-2 text-textMuted">
                <p>
                  <strong>Consumer Statutory Rights:</strong> If you are an individual client instructing us as a consumer, nothing in these Terms of Business affects your statutory rights under UK consumer protection law. For independent guidance regarding your legal rights, you may consult Citizens Advice, Trading Standards, or a qualified legal advisor.
                </p>
                <p>
                  <strong>Professional Indemnity Insurance (Provision of Services Regulations 2009):</strong> In compliance with the Provision of Services Regulations 2009, we maintain compulsory Professional Indemnity Insurance. We hold professional indemnity insurance which is adequate and appropriate for the matters we act on. Our qualifying insurer is <strong>Probitas Syndicate 1492</strong> as lead insurer at £2m, <strong>Liberty Mutual Insurance Europe Limited</strong> as excess layer up to the overall £3m limit, policy <strong>P26A260250P</strong>.
                </p>
                <p>
                  <strong>Exclusion of Third-Party Rights and Duty of Care:</strong> Our services are provided exclusively for your benefit as our client. The Firm owes no duty of care, liability, or professional responsibility to any third party who is not a client of this Firm. Pursuant to the Contracts (Rights of Third Parties) Act 1999, these Terms are enforceable solely by you and Quality Conveyancing Limited.
                </p>
                <p>
                  <strong>Severability and Jurisdiction:</strong> If any provision of these Terms is found by a court or regulator to be invalid, illegal, or unenforceable, the remaining provisions shall remain in full force and effect. These Terms of Business are governed by the laws of England and Wales.
                </p>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* 22. Financial Services and Insurance Mediation */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-tealAccent" /> 22. Financial Services and Insurance Mediation
              </h2>
              <div className="space-y-2 text-textMuted">
                <p>
                  Quality Conveyancing Limited is not authorised by the Financial Conduct Authority (FCA) to provide financial or investment advice. If you require such advice, we will refer you to an FCA-authorised financial adviser. The scope of our service does not include advising on the commercial or financial merits of any investment.
                </p>
                <p>
                  As a firm regulated by the Council for Licensed Conveyancers (CLC)—a Designated Professional Body under the Financial Services and Markets Act 2000—we may provide certain limited investment services where they arise directly out of, and are closely linked to, our legal services.
                </p>
                <p>
                  <strong>Insurance Distribution Activities:</strong> Quality Conveyancing Limited is included on the Financial Services Register maintained by the FCA under reference number <strong>11359</strong> to carry out Insurance Distribution Activities (broadly advising on, selling, or administering non-investment insurance contracts, such as conveyancing indemnity policies). The register can be viewed at <a href="https://register.fca.org.uk" target="_blank" rel="noopener noreferrer" className="text-tealAccent underline">register.fca.org.uk</a>. We do not manufacture insurance products and are not an insurance company.
                </p>
                <div className="p-3 bg-warmGray/50 rounded-xl border border-gray-100 text-xs">
                  <p><strong>Council for Licensed Conveyancers (CLC):</strong> WeWork, 120 Moorgate, London EC2M 6UR</p>
                  <p><strong>Legal Ombudsman:</strong> <a href="https://www.legalombudsman.org.uk" target="_blank" rel="noopener noreferrer" className="text-tealAccent underline">www.legalombudsman.org.uk</a></p>
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* 23. Complaints Procedure */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-tealAccent" /> 23. Complaints Procedure, Regulatory Redress, and Client Protection
              </h2>
              <div className="space-y-3 text-textMuted">
                <p>
                  <strong>Our Commitment to You:</strong> Quality Conveyancing Limited is committed to delivering a high-quality legal service. When something goes wrong or if you are dissatisfied with any aspect of our service, including our bill or any incidental insurance/investment services provided, please let us know immediately. We take all feedback seriously, record all matters on our central register, and investigate complaints promptly to ensure fair resolution and continuous improvement.
                </p>
                <p>
                  <strong>Making A Complaint:</strong> You can register a complaint with the Case Handler dealing with your Matter, their Supervising Director (as named in your Engagement Letter), or directly with our Nominated Complaints Director:
                </p>
                <div className="p-3.5 bg-warmGray/50 rounded-xl border border-gray-100 text-xs font-medium space-y-1">
                  <p><strong>Nominated Complaints Director:</strong> Mrs Brinda Nicholson</p>
                  <p><strong>Email:</strong> <a href="mailto:Brinda.Nicholson@qconveyancing.com" className="text-tealAccent underline font-bold">Brinda.Nicholson@qconveyancing.com</a></p>
                  <p>In the first instance, we ask that you put your complaint in writing with full details so we can thoroughly understand the issues raised.</p>
                </div>
                
                <p>
                  <strong>What Happens Next:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 pl-1 text-xs">
                  <li><strong>Acknowledgement:</strong> We will acknowledge your complaint in writing within <strong>7 calendar days</strong> of receipt, confirm who is handling the investigation, and record the matter on our central complaints register.</li>
                  <li><strong>Investigation &amp; Review:</strong> The investigation will involve a full file review and discussions with the fee earner involved.</li>
                  <li><strong>Response Timeframe:</strong> We aim to provide a full, substantive written response within <strong>28 days</strong> of receiving your complaint. In all cases, our final written response will be issued within <strong>8 weeks</strong> of receiving your initial complaint.</li>
                  <li><strong>Escalation:</strong> If you remain dissatisfied with the initial response, your complaint will be reviewed by our Head of Legal Practice (HOLP), <strong>Jayshree Chudasama</strong>, or escalated for a final internal review by <strong>Brinda Nicholson</strong>, who will confirm the firm’s final position in writing.</li>
                </ul>

                <p>
                  <strong>Legal Ombudsman:</strong> The Legal Ombudsman is an independent statutory body established under the Legal Services Act 2007 to handle service-related complaints against regulated legal service providers in England and Wales. You can refer your matter to the Legal Ombudsman if we have not resolved your complaint within 8 weeks, or within 6 months of receiving our final written response, and no more than 1 year has passed from the date of the act/omission.
                </p>
                <div className="p-3 bg-warmGray/50 rounded-xl border border-gray-100 text-xs space-y-0.5">
                  <p><strong>Post:</strong> Legal Ombudsman, PO Box 6167, Slough, SL1 0EH</p>
                  <p><strong>Telephone:</strong> 0300 555 0333</p>
                  <p><strong>Email:</strong> <a href="mailto:enquiries@legalombudsman.org.uk" className="text-tealAccent underline">enquiries@legalombudsman.org.uk</a></p>
                  <p><strong>Website:</strong> <a href="https://www.legalombudsman.org.uk" target="_blank" rel="noopener noreferrer" className="text-tealAccent underline">www.legalombudsman.org.uk</a></p>
                </div>

                <p>
                  <strong>The Council For Licensed Conveyancers (CLC):</strong> If you make a valid claim against us for a loss arising out of work for which we are legally responsible, and we are unable to meet our liability in full, you may be entitled to claim from the Compensation Fund administered by the Council for Licensed Conveyancers.
                </p>
                <div className="p-3 bg-warmGray/50 rounded-xl border border-gray-100 text-xs space-y-0.5">
                  <p><strong>CLC Telephone:</strong> 020 3859 7860</p>
                  <p><strong>Email:</strong> <a href="mailto:clc@clc-uk.org" className="text-tealAccent underline">clc@clc-uk.org</a></p>
                  <p><strong>Post:</strong> Council for Licensed Conveyancers, WeWork, 120 Moorgate, London EC2M 6UR</p>
                  <p><strong>Website:</strong> <a href="https://www.clc-uk.org" target="_blank" rel="noopener noreferrer" className="text-tealAccent underline">www.clc-uk.org</a></p>
                </div>

                <p>
                  <strong>Complaints Relating to DSAR and Data Rights (UK GDPR):</strong> Where a complaint relates to the handling of a Data Subject Access Request (DSAR) or data privacy rights, it will be investigated by our Data Protection Lead (Brinda Nicholson). If you remain dissatisfied, you have the right to lodge a complaint with the Information Commissioner’s Office (ICO) at <a href="https://www.ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-tealAccent underline">www.ico.org.uk</a> or by calling 0303 123 1113.
                </p>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* 24. Quality standards */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-tealAccent" /> 24. Quality Standards
              </h2>
              <p className="text-textMuted">
                Due to our own internal quality standards, we are subject to periodic checks by outside assessors. This could mean that your file may be selected for checking/auditing. We have a legitimate interest in acting in this way and take every possible precaution to protect your personal information. All inspections are conducted in confidence and all external firms and organisations working with Us are required to maintain confidentiality in relation to any files and papers that are audited/checked by them. Your file(s) may also be reviewed in a due diligence exercise relating to the sale or transfer of all or part of Our business, the acquisition of another business or the acquisition of a new business.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* 25. Disclaimers */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-tealAccent" /> 25. Disclaimers
              </h2>
              <div className="space-y-2.5 text-textMuted">
                <p>
                  <strong>Tax:</strong> We are not qualified to advise you on the tax implications of transactions you instruct us to carry out, or the likelihood of them arising.
                </p>
                <p>
                  <strong>Property Transactions:</strong> We will not advise you on the planning implications of your proposed purchase, unless specifically requested to do so by you, otherwise than by reporting to you on any relevant information provided by the results of the &ldquo;local search&rdquo;.
                </p>
                <p>
                  It is not our responsibility to carry out a physical inspection of the property nor advise on the valuation of the property nor the suitability of your mortgage nor any other financial arrangements. We shall not advise generally on environmental liabilities where we shall assume, unless you tell us to the contrary, that you are making your own arrangements for any appropriate environmental survey or investigations.
                </p>
                <p>
                  We may, however, need to obtain on behalf of your lender, at your expense, an environmental search. However, we will not advise you about any issues relating to the possible contamination of any land which may be relevant to your purchase. We have to tell you that we are not qualified to advise on the results of any search made in that respect and would only be able to report to you the actual results of such a search. This is particularly significant in respect of the potential liabilities that may arise at some future point in time as a result of land contamination or flood risk that are having increasing significance. If you have any doubts, please discuss your concerns with us.
                </p>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* 26. Data Protection & Privacy */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Database className="w-5 h-5 text-tealAccent" /> 26. Data Protection &amp; Privacy
              </h2>
              <div className="space-y-3 text-textMuted">
                <p>
                  We are committed to protecting your personal data and respecting your privacy. We process personal data in accordance with current UK data protection legislation, the UK GDPR, and our professional duty of confidentiality. For full details on how we collect and process your information, please view our Privacy Policy on our website.
                </p>
                <p>
                  <strong>How We Use Your Personal Data:</strong> We use your information primarily to deliver legal services to you and to manage our practice. This includes updating client records, conducting internal analysis, filing statutory returns, and fulfilling legal or regulatory compliance requirements.
                </p>
                <p>
                  <strong>Sharing Information with Third Parties:</strong> To deliver our legal services and maintain quality standards, we may share your information with transaction parties (estate agents, solicitors acting for other parties, and indemnity insurers) and external auditing bodies (such as the Council for Licensed Conveyancers).
                </p>
                <div className="p-3.5 bg-tealAccent/10 rounded-xl border border-tealAccent/20 text-xs text-legalDark space-y-1">
                  <div className="font-bold">Outsourcing Support &amp; International Processing:</div>
                  <p>
                    To ensure your transaction progresses smoothly and with necessary speed, Quality Conveyancing may outsource conveyancing work, support, administrative and business development functions to associated companies or to individuals directly contracted in India. Any such outsourced provider is contractually required to apply data protection safeguards equivalent to those required under UK data protection law, and to process your personal data strictly in accordance with, and only for the purposes of, our instructions. By instructing the Firm and accepting these Terms of Business, you explicitly consent to the transfer and processing of your personal data in India for these operational purposes.
                  </p>
                </div>
                <p>
                  <strong>Call Recording:</strong> All incoming and outgoing telephone calls may be recorded for quality, training, and development purposes. Recorded call data may be analyzed by specialist third parties under strict security and GDPR controls. If you do not wish for your calls to be recorded, please notify us in writing so that we can communicate with you exclusively by email.
                </p>
                <p>
                  <strong>Marketing &amp; Your Rights:</strong> You have the statutory right to request access to the personal data we hold about you. During and following the completion of your matter, we may occasionally contact you with relevant industry updates, regulatory changes, client newsletters, promotional offers, and complementary legal services. You have the right to opt out at any time free of charge by clicking unsubscribe or emailing us.
                </p>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* 27. Financial services compensation scheme */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Landmark className="w-5 h-5 text-tealAccent" /> 27. Financial Services Compensation Scheme (FSCS)
              </h2>
              <div className="space-y-2 text-textMuted">
                <p>
                  In the event of a banking failure it is unlikely that the firm would be held liable for any losses of client account money.
                </p>
                <p>
                  We currently hold our client account funds in <strong>Lloyds Bank</strong>. The £85,000 Financial Services Compensation Scheme (FSCS) limit will apply to each individual client so if you hold other personal monies yourself in the same bank as our client account, the limit remains £85,000 in total, so it may be advisable to check with your own bank as some banks now trade under different trading names.
                </p>
                <p>
                  However, the FSCS provide a £1 million protection limit for temporary high balances held with a bank, building society or credit union if it fails. Further details relating to what constitutes a temporary high balance and the rules relating to the protection can be found at <a href="https://www.fscs.org.uk" target="_blank" rel="noopener noreferrer" className="text-tealAccent underline">www.fscs.org.uk</a>.
                </p>
                <p>
                  In the event of a bank failure you agree to us disclosing details to the FSCS.
                </p>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* 28. Severability */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Scale className="w-5 h-5 text-tealAccent" /> 28. Severability
              </h2>
              <p className="text-textMuted">
                Each of these terms shall be severable and distinct from the others and if any term is held to be illegal, invalid or unenforceable, in whole or in part, the remaining terms shall not be affected.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* 29. Third Parties */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-tealAccent" /> 29. Third Parties
              </h2>
              <p className="text-textMuted">
                The Services are provided to and for the benefit of you as our client and you alone. No other person may use or rely upon the Services nor derive any rights or benefits from them. The provisions of the Contracts (Rights of Third Parties) Act 1999 are to that extent excluded.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* 30. Force Majeure */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-tealAccent" /> 30. Force Majeure
              </h2>
              <p className="text-textMuted">
                Neither You nor We shall be liable for any failure to perform, or delay in performing, any obligations (other than payment and indemnity obligations) if and to the extent that the failure or delay is caused by Force Majeure and the time for performance of the obligation, the performance of which is affected by Force Majeure, shall be extended accordingly.
              </p>
            </div>

            <hr className="border-gray-100" />

            {/* 31. Law and jurisdiction */}
            <div>
              <h2 className="text-xl font-serif font-bold text-legalDark mb-3 flex items-center gap-2">
                <Gavel className="w-5 h-5 text-tealAccent" /> 31. Law and Jurisdiction
              </h2>
              <p className="text-textMuted mb-2">
                The terms on which we provide Services to you are governed by, and shall be construed in accordance with, English law. You and we each agree to submit to the exclusive jurisdiction of the English courts. However, we retain the right to bring proceedings against you in your country of residence or any other relevant country relating to any breach.
              </p>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}