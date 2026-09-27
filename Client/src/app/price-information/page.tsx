import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { 
  FileText, 
  PoundSterling, 
  Clock, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  Building, 
  Home, 
  Key, 
  ShieldCheck, 
  AlertCircle,
  ExternalLink,
  Phone,
  Scale,
  BookOpen,
  Search,
  Landmark,
  Users,
  FileSignature,
  ClipboardCheck,
  Gavel,
  PenTool
} from "lucide-react";

export const metadata: Metadata = {
  title: "Price Information | Conveyancing Legal Fees & Disbursements | Quality Conveyancing",
  description: "Comprehensive price information and legal fee breakdown for residential purchases, sales, and re-mortgages. CLC compliant fee transparency.",
  keywords: [
    "Conveyancing Price Information",
    "Legal Fee Breakdown Purchase Sale",
    "Residential Conveyancing Costs London",
    "Stamp Duty Land Tax Estimator",
    "Land Registry Fees Breakdown",
    "Leasehold Additional Conveyancing Fees"
  ],
};

// Price Tables based on Quality_Conveyancing_Fees_Schedule.docx
const purchasePriceBrackets = [
  { bracket: "Up to £300,000", fee: "£1,099" },
  { bracket: "£301,000 to £400,000", fee: "£1,099" },
  { bracket: "£401,000 to £500,000", fee: "£1,299" },
  { bracket: "£501,000 to £600,000", fee: "£1,399" },
  { bracket: "£601,000 to £700,000", fee: "£1,499" },
  { bracket: "£701,000 to £800,000", fee: "£1,799" },
  { bracket: "£801,000 to £950,000", fee: "£1,999" },
  { bracket: "£951,000 to £1,500,000", fee: "£2,500" },
  { bracket: "£1,501,000 to £3,000,000", fee: "Price on Enquiry" },
  { bracket: "Above £3,000,000", fee: "Price on Enquiry" },
];

const salePriceBrackets = [
  { bracket: "Up to £300,000", fee: "£1,099" },
  { bracket: "£301,000 to £400,000", fee: "£1,099" },
  { bracket: "£401,000 to £500,000", fee: "£1,299" },
  { bracket: "£501,000 to £600,000", fee: "£1,399" },
  { bracket: "£601,000 to £700,000", fee: "£1,499" },
  { bracket: "£701,000 to £800,000", fee: "£1,799" },
  { bracket: "£801,000 to £950,000", fee: "£1,999" },
  { bracket: "Above £951,000", fee: "Price on Enquiry" },
];

const remortgagePriceBrackets = [
  { bracket: "Up to £500,000", fee: "£999" },
  { bracket: "£501,000 to £700,000", fee: "£999" },
  { bracket: "Above £701,000", fee: "Price on Enquiry" },
];

// Summary Table: Mandatory Charges on Every File (Quality_Conveyancing_Fees_Schedule.docx)
const mandatoryChargesSummary = [
  { item: "Core legal fee (see tables above)", amount: "£999 – £3,800 + VAT" },
  { item: "Non-refundable admin fee (sale/remortgage only)", amount: "£100 + VAT" },
  { item: "Telegraphic transfer (TT) fee", amount: "£45 per transfer" },
  { item: "Mortgagee/lender fee (where mortgage present)", amount: "£350 – £400 + VAT (usually £375)" },
  { item: "Electronic ID check (per client)", amount: "£90 per person" },
  { item: "Source of funds checks (per client)", amount: "£95 per person" },
];

// Purchase Disbursements (Quality_Conveyancing_Fees_Schedule.docx & Additional Fees- Amended .docx)
const purchaseDisbursements = [
  { 
    name: "Search Pack Related Fees - Managing, Analysing & Reporting", 
    description: "£485.00" 
  },
  { 
    name: "Stamp Duty Land Tax (SDLT)", 
    description: "Calculated on the purchase price. Use HMRC's website for England or Welsh Revenue Authority for Wales.",
    link: "https://www.gov.uk/stamp-duty-land-tax",
    linkText: "Calculate SDLT"
  },
  { 
    name: "Land Registry Registration Fee", 
    description: "Based on purchase price. Scale fees set by HM Land Registry.",
    link: "https://www.gov.uk/guidance/hm-land-registry-registration-services-fees",
    linkText: "View Fees"
  },
  { 
    name: "Land Registry Pre-completion Priority Search", 
    description: "£7.00 per title" 
  },
  { 
    name: "Land Charges Search", 
    description: "£7.00 per name" 
  },
  { 
    name: "Bankruptcy Searches", 
    description: "£6.00 per person" 
  },
  { 
    name: "Electronic ID Check (Mandatory)", 
    description: "£90.00 per person (Required for each client under AML regulations)" 
  },
  { 
    name: "Source of Funds Checks (Mandatory)", 
    description: "£95.00 per person (Mandatory on every transaction to comply with AML obligations)" 
  },
  { 
    name: "Telegraphic Transfer (TT / CHAPS) Fee", 
    description: "£45.00 per transfer" 
  },
  { 
    name: "Notice of Assignment (Leasehold - prepare & serve)", 
    description: "£150.00 (purchase only)" 
  },
  { 
    name: "Notice of Charge (Leasehold - prepare & serve)", 
    description: "£150.00 (purchase only)" 
  },
  { 
    name: "Deed of Covenant Fee (Leasehold)", 
    description: "£275.00" 
  },
  { 
    name: "Service Deed / Compliance Certificate (Leasehold / Freehold)", 
    description: "£275.00 (purchase only)" 
  },
  { 
    name: "Indemnity Insurance Policy (if required)", 
    description: "Handling fee £225.00 + insurance premium depending on risk and property price" 
  },
];

// Sale Disbursements
const saleDisbursements = [
  { 
    name: "Land Registry Copy Title Documents", 
    description: "£7.00 per title search" 
  },
  { 
    name: "Non-Refundable Admin Fee (Mandatory on Sales)", 
    description: "£100.00 + VAT (charged at outset, non-refundable)" 
  },
  { 
    name: "Electronic ID Check (Mandatory)", 
    description: "£90.00 per person" 
  },
  { 
    name: "Source of Funds Checks (Mandatory)", 
    description: "£95.00 per person" 
  },
  { 
    name: "Telegraphic Transfer (TT / CHAPS) Fee", 
    description: "£45.00 per transfer (for mortgage redemption, surplus funds payout)" 
  },
  { 
    name: "Acting for Lender in Redeeming Mortgage", 
    description: "£350.00 (where existing charge is redeemed on completion)" 
  },
  { 
    name: "Managing Agent's / Landlord's Management Pack (if Leasehold)", 
    description: "Disbursement payable to freeholder / managing agents (typically £200.00 - £600.00)" 
  },
  { 
    name: "Indemnity Insurance Handling (if required)", 
    description: "£225.00 + premium" 
  },
];

// Re-Mortgage Disbursements
const remortgageDisbursements = [
  { 
    name: "Non-Refundable Admin Fee (Mandatory on Remortgages)", 
    description: "£100.00 + VAT (charged at outset, non-refundable)" 
  },
  { 
    name: "Land Registry Registration Fee", 
    description: "Scale fee based on re-mortgage sum" 
  },
  { 
    name: "Land Registry Pre-completion Searches", 
    description: "Priority search: £7.00 per title. Bankruptcy search: £6.00 per person" 
  },
  { 
    name: "Electronic ID Check (Mandatory)", 
    description: "£90.00 per person" 
  },
  { 
    name: "Source of Funds Checks (Mandatory)", 
    description: "£95.00 per person" 
  },
  { 
    name: "Telegraphic Transfer (TT / CHAPS) Fee", 
    description: "£45.00 per transfer" 
  },
  { 
    name: "Acting on Behalf of Lender", 
    description: "£350.00 – £400.00 + VAT (usually £375.00)" 
  },
  { 
    name: "Deed of Covenant Fee (if Leasehold)", 
    description: "£275.00" 
  },
  { 
    name: "Indemnity Insurance Handling (if required)", 
    description: "£225.00 + premium" 
  },
];

// 8 Complete Additional Fee Categories from "Additional Fees- Amended .docx"
const searchPackRelatedFees = [
  { name: "Search Pack Related Fees - Managing, Analysing & Reporting", fee: "£485" },
  { name: "Land Registry Search Fees", fee: "£7" },
  { name: "Land Charges Search – per name", fee: "£7" },
  { name: "Land Registry Pre-completion Priority Search (per title)", fee: "£7" },
  { name: "Bankruptcy Searches (per person)", fee: "£6" },
];

const leaseholdAddOns = [
  { name: "Extension of lease term (deed of surrender and re-grant)", fee: "£1,500" },
  { name: "If Client is doing sale with Lease extension (for lease extension)", fee: "£750" },
  { name: "Deed of variation (estimate)", fee: "£1,500" },
  { name: "Deed of Covenant", fee: "£275" },
  { name: "Grant of a new lease", fee: "£750" },
  { name: "Purchasing/selling share of freehold", fee: "£100 additional to leasehold fee" },
  { name: "Leasehold fee (may already be included in quote)", fee: "£275" },
  { name: "Licence to assign", fee: "£375" },
  { name: "Investigating neighbouring lease (maisonette – purchase only)", fee: "£250" },
  { name: "Cross-over leases (purchase only)", fee: "£250" },
  { name: "Shared ownership leases", fee: "£450" },
  { name: "Obtaining a share in a management company", fee: "£275" },
  { name: "Administering service charge retentions", fee: "£499" },
  { name: "Service deed / Compliance certificate", fee: "£275" },
  { name: "Notice of assignment (prepare & serve – purchase only)", fee: "£150" },
  { name: "Notice of charge (prepare & serve – purchase only)", fee: "£150" },
  { name: "In-person meeting (per 30 minutes)", fee: "£50" },
];

const freeholdAddOns = [
  { name: "Dealing with management company/residents’ association", fee: "£350" },
  { name: "Service deed / Compliance certificate (purchase only)", fee: "£275" },
  { name: "Notice of assignment (prepare & serve – purchase only)", fee: "£150" },
  { name: "Notice of charge (prepare & serve – purchase only)", fee: "£150" },
];

const lenderFinancialFees = [
  { name: "Acting on behalf of lender", fee: "£350–£400 (usually £375)" },
  { name: "Dealing with lender’s solicitors", fee: "£350" },
  { name: "Acting for lender in redeeming mortgage", fee: "£350" },
  { name: "Buy-to-let mortgage (additional to lender fee)", fee: "£150" },
  { name: "Bridging loans", fee: "£1,850" },
  { name: "Transfer of equity", fee: "£375 extra to Remortgage quote, if by itself £999" },
  { name: "Further advance (unsecured)", fee: "£200" },
  { name: "Registering a second charge", fee: "£275" },
  { name: "Porting/flexible mortgage", fee: "£250–£550" },
  { name: "Repossession lender enquiries (sale/remortgage)", fee: "£350" },
  { name: "Additional charge redemption (per charge)", fee: "£350" },
];

const amlComplianceAdminFees = [
  { name: "International AML checks", fee: "£450" },
  { name: "Restriction on title (estimate)", fee: "£350" },
  { name: "Non-refundable admin fee", fee: "£100" },
  { name: "Telegraphic Transfer (CHAPS)", fee: "£45" },
  { name: "International transfer", fee: "£150" },
  { name: "Service of notices (leasehold/freehold)", fee: "See relevant categories" },
  { name: "Checking homebuyer’s valuation report", fee: "£500" },
  { name: "Deposit account (monthly fee)", fee: "£150" },
  { name: "Dealing with third party per call/letter", fee: "£15" },
  { name: "Resending contracts / title deeds", fee: "£475" },
  { name: "SDLT submission fee", fee: "£50" },
];

const titleLandStructureFees = [
  { name: "Unregistered land", fee: "£850" },
  { name: "Defective title", fee: "£400" },
  { name: "Indemnity insurance handling", fee: "£225" },
  { name: "Upgrading title", fee: "£300" },
  { name: "Merging titles", fee: "£2,500–£3,500" },
  { name: "Splitting title/land", fee: "£2,500" },
  { name: "Purchase of additional land (per piece)", fee: "£850–£1,500" },
  { name: "Deed of easement (estimate)", fee: "£500" },
  { name: "Assignment of agreement for sale", fee: "£500" },
  { name: "Deed of postponement", fee: "£500" },
  { name: "Landlord’s Certificate – Building Safety Act 2022 (Purchase)", fee: "£750" },
  { name: "Landlord’s Certificate – Building Safety Act 2022 (Sale or Remortgage)", fee: "£450" },
];

const declarationsTrustsFees = [
  { name: "Declaration of trust", fee: "£750–£1,000" },
  { name: "Declaration of solvency", fee: "£350" },
  { name: "Statutory declarations / disclaimers (estimate)", fee: "£250–£500" },
  { name: "Deed of gift", fee: "£350" },
  { name: "Power of attorney", fee: "£350" },
  { name: "Assent", fee: "£750" },
  { name: "Matrimonial issues (estimate)", fee: "£450–£950" },
];

const specialPropertyFees = [
  { name: "Auction purchase", fee: "£2,500 + VAT (if Leasehold add £275 extra)" },
  { name: "PR/administrator/company sale or purchase", fee: "£350–£950" },
  { name: "Newly built property/plot", fee: "£450–£950 (usually £475, then LH additionally)" },
  { name: "Retirement property", fee: "£500" },
  { name: "Right to buy", fee: "Do not charge extra, only Leasehold fee (£275) if applicable" },
  { name: "Islamic mortgages", fee: "£850–£1,500" },
  { name: "Sale by mortgagee", fee: "£375" },
];

const transactionSpecificFees = [
  { name: "Late completion handling", fee: "£350" },
  { name: "Contract race", fee: "£350" },
  { name: "Adding/removing a party", fee: "£175" },
  { name: "Sending funds to a third party", fee: "£75" },
  { name: "Post-completion queries", fee: "£150" },
];

// Purchase Key Stages
const purchaseKeyStages = [
  "Taking your instructions and providing you with initial advice",
  "Checking that your finances are in place to fund the purchase and contacting the lender's solicitors (if separately represented)",
  "Receiving and advising you on the contract documentation",
  "Carrying out searches",
  "Obtaining any relevant planning permissions or other documents revealed in the local search",
  "Making any necessary enquiries of the seller's solicitors",
  "Reviewing the conditions of your mortgage offer",
  "Providing you with advice on all documents and information received",
  "Providing you with the documents required for signature to include the Contract, Mortgage Deed, etc.",
  "Agreeing a completion date – this will be the date on which you complete your purchase",
  "Exchanging contracts and notifying you that this has happened",
  "Carrying out pre-completion searches at the Land Registry",
  "Arranging for all funds required from your lender and from you to be requested",
  "Completing the purchase on the completion date",
  "Dealing with the submission of the Land Transaction Return to HMRC and paying the Stamp Duty Land Tax due",
  "Serving notice of transfer/charge on the managing agents/landlord to advise them that you are the new owner",
  "Dealing with the application for registration at the Land Registry"
];

// Sale Key Stages
const saleKeyStages = [
  "Taking your instructions and providing you with initial advice",
  "Preparing the contract documentation and providing the same to the buyer's conveyancer",
  "Obtaining any relevant planning permissions or other documents relating to the property",
  "Obtaining a management pack from the managing agents (if leasehold)",
  "Receiving the buyer's conveyancer's enquiries, advising you on these and assisting you with your replies",
  "Providing you with the documents required for signature to include the Contract, Transfer Deed and any other required documents",
  "Agreeing a completion date – this will be the date on which you complete your sale",
  "Exchanging contracts and notifying you that this has happened",
  "Completing the sale on the completion date",
  "Redeeming any existing mortgages on the property",
  "Settling your estate agent's commission"
];

// Re-Mortgage Key Stages
const remortgageKeyStages = [
  "Take your instructions and give you initial advice",
  "Obtain copies of and investigate title to the property on behalf of the mortgage lender",
  "Carry out searches (or obtain search insurance)",
  "Report to you on the mortgage offer",
  "Request mortgage funds",
  "Complete your re-mortgage",
  "Deal with application for registration at Land Registry"
];

export default function PriceInformationPage() {
  return (
    <div className="min-h-screen bg-lightBg flex flex-col font-sans">
      <Header />

      <main className="flex-grow pt-20">
        {/* Banner Section */}
        <section className="bg-legalDark text-white py-16 px-6 lg:px-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-tealAccent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-tealAccent rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-tealAccent/20 text-tealAccent text-xs font-semibold uppercase tracking-widest mb-4">
                <FileText className="w-3.5 h-3.5" /> CLC Price Transparency
              </span>
              <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 tracking-tight leading-tight">
                Price Information for <br className="hidden sm:block" />
                Purchases, Sales &amp; Re-Mortgages
              </h1>
              <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed mb-6">
                We have below set out the price information followed by the key stages involved in a sale, a purchase and a re-mortgage.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 bg-white hover:bg-tealAccent text-legalDark font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow-lg border border-white/20 group"
                >
                  <span>Calculate Your Instant Quote</span>
                  <ArrowRight className="w-4 h-4 text-tealAccent group-hover:text-legalDark group-hover:translate-x-1 transition-all" />
                </Link>
                <a
                  href="tel:02037636767"
                  className="inline-flex items-center gap-2 bg-legalDark hover:bg-legalNavy text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl border border-white/20 transition-all shadow-md group"
                >
                  <Phone className="w-4 h-4 text-tealAccent group-hover:text-white transition-colors" /> Call 020 3763 6767
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What Our Fees Include & Timeline */}
        <section className="py-16 px-6 lg:px-12 bg-white">
          <div className="container mx-auto max-w-5xl space-y-12">
            
            {/* Overview Boxes */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-warmGray/30 rounded-3xl border border-gray-100 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-legalDark text-tealAccent flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-legalDark">What Our Fees Include</h2>
                <p className="text-textMuted text-xs sm:text-sm leading-relaxed">
                  Our residential conveyancing fees cover all the work required to complete the sale of your property or the purchase of your new property. With a purchase/re-mortgage/transfer of equity this includes dealing with registration of the property at the Land Registry and dealing with the payment of Stamp Duty Land Tax (Stamp Duty) if the property is in England or Land Transaction Tax if the property you wish to buy is in Wales. In a sale this also includes paying your estate agents fees and redeeming the mortgage(s) (if applicable).
                </p>
                <p className="text-textMuted text-xs leading-relaxed">
                  There are also <strong>disbursements</strong> payable to third parties; examples include searches, stamp duty and Land Registry fees.
                </p>
                <div className="text-xs text-legalDark font-semibold bg-tealAccent/10 p-3.5 rounded-xl border border-tealAccent/20">
                  * All conveyancing legal fees subject to 20% VAT. Non-refundable admin fee of £100 + VAT applies to sales &amp; remortgages.
                </div>
              </div>

              <div className="p-8 bg-warmGray/30 rounded-3xl border border-gray-100 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-legalDark text-tealAccent flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-legalDark">How Long Will It Take?</h2>
                <p className="text-textMuted text-xs sm:text-sm leading-relaxed">
                  How long a transaction takes from start to finish depends on the type of transaction and a number of factors some which are outside of our control. However, on average the process can take between <strong>6-12 weeks</strong> from instructions to completion.
                </p>
                <ul className="text-xs text-textMuted space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>New Builds:</strong> You will generally be expected to exchange contracts within 28 days and completion will take place once the property is built and ready for occupation.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span><strong>Re-Mortgages:</strong> The average process is approximately 4-8 weeks.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* MANDATORY CHARGES SUMMARY TABLE (Schedule Table 4) */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-tealAccent" />
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-tealAccent block">Mandatory Schedule</span>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-legalDark">Mandatory Charges on Every File</h3>
                </div>
              </div>
              <p className="text-textMuted text-xs leading-relaxed">
                These charges apply across all standard transactions in accordance with regulatory anti-money laundering requirements and completion fund security.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-legalDark text-white font-serif uppercase tracking-wider">
                      <th className="p-3 rounded-tl-xl">Fee / Disbursement Item</th>
                      <th className="p-3 rounded-tr-xl text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {mandatoryChargesSummary.map((item, idx) => (
                      <tr key={idx} className="hover:bg-warmGray/20 transition-colors">
                        <td className="p-3 font-medium text-legalDark">{item.item}</td>
                        <td className="p-3 font-bold text-right text-legalDark">{item.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Our Fees Assumptions */}
            <div className="p-8 bg-legalDark/5 rounded-3xl border border-legalDark/10 space-y-4">
              <div className="flex items-center gap-3">
                <Scale className="w-6 h-6 text-legalDark" />
                <h3 className="text-xl font-serif font-bold text-legalDark">Our Fees Assumptions</h3>
              </div>
              <ul className="grid md:grid-cols-2 gap-3 text-xs text-textMuted">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>This is a <strong>standard transaction</strong> and no unforeseen matters arise including a defect in title which requires remedying prior to completion or the preparation of additional documents ancillary to the main transaction</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>If leasehold; that it is the <strong>assignment of an existing lease</strong> and is not the grant of a new lease</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>The transaction is concluded in a <strong>timely manner</strong> and no unforeseen complications arise</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>All parties to the transaction are <strong>co-operative</strong> and there is no unreasonable delay from third parties providing documentation</span>
                </li>
                <li className="flex items-start gap-2 md:col-span-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span><strong>No indemnity policies are required.</strong> Additional disbursements may apply if indemnity policies are required</span>
                </li>
              </ul>
              <div className="text-xs text-legalDark font-medium bg-amber-50 p-3 rounded-xl border border-amber-200">
                ⚠️ Please note: If it transpires your transaction is not standard and becomes unexpectedly complex or protracted then <strong>additional fees may become applicable</strong>. You will find a full, comprehensive list of additional fees below.
              </div>
            </div>

            {/* PURCHASE SECTION */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm space-y-6" id="purchase">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-tealAccent block mb-1">Purchase Legal Fees</span>
                <h3 className="text-2xl font-serif font-bold text-legalDark">Purchase – Price &amp; Services Information</h3>
                <p className="text-textMuted text-xs mt-1">* Mandatory disbursements apply (ID verification, source of funds check &amp; search pack).</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-legalDark text-white font-serif uppercase tracking-wider">
                      <th className="p-3.5 rounded-tl-xl">Purchase Price Band</th>
                      <th className="p-3.5 rounded-tr-xl text-right">Legal Fee (£ + VAT)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {purchasePriceBrackets.map((item, idx) => (
                      <tr key={idx} className="hover:bg-warmGray/20 transition-colors">
                        <td className="p-3.5 font-medium text-legalDark">{item.bracket}</td>
                        <td className={`p-3.5 font-bold text-right ${item.fee.includes('Enquiry') ? 'text-tealAccent' : 'text-legalDark'}`}>
                          {item.fee}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="text-xs text-textMuted bg-warmGray/30 p-3 rounded-xl">
                * All legal fees subject to VAT at 20%
              </div>

              {/* Purchase Disbursements */}
              <div className="pt-4 border-t border-gray-100">
                <h4 className="font-serif font-bold text-lg text-legalDark mb-3">Purchase Disbursements &amp; Mandatory Fees</h4>
                <div className="grid sm:grid-cols-2 gap-3 text-xs">
                  {purchaseDisbursements.map((item, idx) => (
                    <div key={idx} className="p-4 bg-warmGray/20 rounded-xl border border-gray-100">
                      <strong className="text-legalDark block mb-1">{item.name}</strong>
                      <span className="text-textMuted">{item.description}</span>
                      {item.link && (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center gap-1 text-teal-600 hover:underline mt-1 text-xs font-medium"
                        >
                          {item.linkText} <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Purchase Key Stages */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <ClipboardCheck className="w-5 h-5 text-tealAccent" />
                  <h4 className="font-serif font-bold text-lg text-legalDark">Key Stages – Purchase</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                  {purchaseKeyStages.map((stage, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-2 rounded-lg hover:bg-warmGray/20 transition-colors">
                      <span className="text-tealAccent font-bold text-xs min-w-[20px]">{idx + 1}.</span>
                      <span className="text-xs text-textMuted">{stage}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SALE SECTION */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm space-y-6" id="sale">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-tealAccent block mb-1">Sale Legal Fees</span>
                <h3 className="text-2xl font-serif font-bold text-legalDark">Sale – Price &amp; Services Information</h3>
                <p className="text-textMuted text-xs mt-1">* Non-refundable admin fee of £100 + VAT applies to all sale transactions.</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-legalDark text-white font-serif uppercase tracking-wider">
                      <th className="p-3.5 rounded-tl-xl">Sale Price Band</th>
                      <th className="p-3.5 rounded-tr-xl text-right">Legal Fee (£ + VAT)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {salePriceBrackets.map((item, idx) => (
                      <tr key={idx} className="hover:bg-warmGray/20 transition-colors">
                        <td className="p-3.5 font-medium text-legalDark">{item.bracket}</td>
                        <td className={`p-3.5 font-bold text-right ${item.fee.includes('Enquiry') ? 'text-tealAccent' : 'text-legalDark'}`}>
                          {item.fee}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="text-xs text-textMuted bg-warmGray/30 p-3 rounded-xl">
                * All legal fees subject to VAT at 20%
              </div>

              {/* Sale Disbursements */}
              <div className="pt-4 border-t border-gray-100">
                <h4 className="font-serif font-bold text-lg text-legalDark mb-3">Sale Disbursements &amp; Mandatory Fees</h4>
                <div className="grid sm:grid-cols-2 gap-3 text-xs">
                  {saleDisbursements.map((item, idx) => (
                    <div key={idx} className="p-4 bg-warmGray/20 rounded-xl border border-gray-100">
                      <strong className="text-legalDark block mb-1">{item.name}</strong>
                      <span className="text-textMuted">{item.description}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sale Key Stages */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <ClipboardCheck className="w-5 h-5 text-tealAccent" />
                  <h4 className="font-serif font-bold text-lg text-legalDark">Key Stages – Sale</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                  {saleKeyStages.map((stage, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-2 rounded-lg hover:bg-warmGray/20 transition-colors">
                      <span className="text-tealAccent font-bold text-xs min-w-[20px]">{idx + 1}.</span>
                      <span className="text-xs text-textMuted">{stage}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RE-MORTGAGE SECTION */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm space-y-6" id="remortgage">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-tealAccent block mb-1">Re-Mortgage Legal Fees</span>
                <h3 className="text-2xl font-serif font-bold text-legalDark">Re-Mortgage – Price &amp; Services Information</h3>
                <p className="text-textMuted text-xs mt-1">* Non-refundable admin fee of £100 + VAT applies to all remortgage transactions.</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-legalDark text-white font-serif uppercase tracking-wider">
                      <th className="p-3.5 rounded-tl-xl">Property Value Band</th>
                      <th className="p-3.5 rounded-tr-xl text-right">Legal Fee (£ + VAT)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {remortgagePriceBrackets.map((item, idx) => (
                      <tr key={idx} className="hover:bg-warmGray/20 transition-colors">
                        <td className="p-3.5 font-medium text-legalDark">{item.bracket}</td>
                        <td className={`p-3.5 font-bold text-right ${item.fee.includes('Enquiry') ? 'text-tealAccent' : 'text-legalDark'}`}>
                          {item.fee}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="text-xs text-textMuted bg-warmGray/30 p-3 rounded-xl">
                * All legal fees subject to VAT at 20%
              </div>

              {/* Re-Mortgage Disbursements */}
              <div className="pt-4 border-t border-gray-100">
                <h4 className="font-serif font-bold text-lg text-legalDark mb-3">Re-Mortgage Disbursements &amp; Mandatory Fees</h4>
                <div className="grid sm:grid-cols-2 gap-3 text-xs">
                  {remortgageDisbursements.map((item, idx) => (
                    <div key={idx} className="p-4 bg-warmGray/20 rounded-xl border border-gray-100">
                      <strong className="text-legalDark block mb-1">{item.name}</strong>
                      <span className="text-textMuted">{item.description}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Re-Mortgage Key Stages */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <ClipboardCheck className="w-5 h-5 text-tealAccent" />
                  <h4 className="font-serif font-bold text-lg text-legalDark">Key Stages – Re-Mortgage</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-2">
                  {remortgageKeyStages.map((stage, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-2 rounded-lg hover:bg-warmGray/20 transition-colors">
                      <span className="text-tealAccent font-bold text-xs min-w-[20px]">{idx + 1}.</span>
                      <span className="text-xs text-textMuted">{stage}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FULL ADDITIONAL FEES SECTION (8 Complete Categories from Additional Fees- Amended .docx) */}
            <div className="bg-warmGray/30 p-8 rounded-3xl border border-gray-200/80 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-tealAccent block mb-1">Non-Standard &amp; Additional Services</span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-legalDark">Additional Fees Schedule (Amended)</h3>
                <p className="text-textMuted text-xs sm:text-sm mt-1 max-w-3xl">
                  This complete schedule reflects all supplementary fees for property-specific, lender-required, or complex transactions. All applicable fees will be confirmed in advance.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* 1. Search Pack Related Fees */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
                  <h4 className="font-serif font-bold text-base text-legalDark mb-3 pb-2 border-b border-gray-100 flex items-center gap-2">
                    <Search className="w-4 h-4 text-tealAccent" /> 1. Search Pack Related Fees
                  </h4>
                  <div className="space-y-2 text-xs">
                    {searchPackRelatedFees.map((item, idx) => (
                      <div key={idx} className="flex justify-between py-1 border-b border-gray-50">
                        <span className="text-textMuted">{item.name}</span>
                        <strong className="text-legalDark shrink-0 ml-4">{item.fee}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Leasehold Fees */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
                  <h4 className="font-serif font-bold text-base text-legalDark mb-3 pb-2 border-b border-gray-100 flex items-center gap-2">
                    <Building className="w-4 h-4 text-tealAccent" /> 2. Leasehold Fees (Lease Extensions, Variations &amp; Specifics)
                  </h4>
                  <div className="space-y-2 text-xs max-h-80 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300">
                    {leaseholdAddOns.map((item, idx) => (
                      <div key={idx} className="flex justify-between py-1 border-b border-gray-50">
                        <span className="text-textMuted">{item.name}</span>
                        <strong className="text-legalDark shrink-0 ml-4">{item.fee}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Freehold Fees */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
                  <h4 className="font-serif font-bold text-base text-legalDark mb-3 pb-2 border-b border-gray-100 flex items-center gap-2">
                    <Home className="w-4 h-4 text-tealAccent" /> 3. Freehold Fees (Management Co / Residents’ Association)
                  </h4>
                  <div className="space-y-2 text-xs">
                    {freeholdAddOns.map((item, idx) => (
                      <div key={idx} className="flex justify-between py-1 border-b border-gray-50">
                        <span className="text-textMuted">{item.name}</span>
                        <strong className="text-legalDark shrink-0 ml-4">{item.fee}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Lender & Financial Handling Fees */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
                  <h4 className="font-serif font-bold text-base text-legalDark mb-3 pb-2 border-b border-gray-100 flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-tealAccent" /> 4. Lender &amp; Financial Handling Fees
                  </h4>
                  <div className="space-y-2 text-xs max-h-80 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300">
                    {lenderFinancialFees.map((item, idx) => (
                      <div key={idx} className="flex justify-between py-1 border-b border-gray-50">
                        <span className="text-textMuted">{item.name}</span>
                        <strong className="text-legalDark shrink-0 ml-4">{item.fee}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 5. AML, Compliance & Administration Fees */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
                  <h4 className="font-serif font-bold text-base text-legalDark mb-3 pb-2 border-b border-gray-100 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-tealAccent" /> 5. AML, Compliance &amp; Administration Fees
                  </h4>
                  <div className="space-y-2 text-xs max-h-80 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300">
                    {amlComplianceAdminFees.map((item, idx) => (
                      <div key={idx} className="flex justify-between py-1 border-b border-gray-50">
                        <span className="text-textMuted">{item.name}</span>
                        <strong className="text-legalDark shrink-0 ml-4">{item.fee}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 6. Title, Land & Property Structure Fees */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
                  <h4 className="font-serif font-bold text-base text-legalDark mb-3 pb-2 border-b border-gray-100 flex items-center gap-2">
                    <FileSignature className="w-4 h-4 text-tealAccent" /> 6. Title, Land &amp; Property Structure Fees
                  </h4>
                  <div className="space-y-2 text-xs max-h-80 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300">
                    {titleLandStructureFees.map((item, idx) => (
                      <div key={idx} className="flex justify-between py-1 border-b border-gray-50">
                        <span className="text-textMuted">{item.name}</span>
                        <strong className="text-legalDark shrink-0 ml-4">{item.fee}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 7. Declarations, Trusts & Personal Status */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
                  <h4 className="font-serif font-bold text-base text-legalDark mb-3 pb-2 border-b border-gray-100 flex items-center gap-2">
                    <Users className="w-4 h-4 text-tealAccent" /> 7. Declarations, Trusts &amp; Personal Status
                  </h4>
                  <div className="space-y-2 text-xs">
                    {declarationsTrustsFees.map((item, idx) => (
                      <div key={idx} className="flex justify-between py-1 border-b border-gray-50">
                        <span className="text-textMuted">{item.name}</span>
                        <strong className="text-legalDark shrink-0 ml-4">{item.fee}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 8. Special Property Types & Scenarios */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs">
                  <h4 className="font-serif font-bold text-base text-legalDark mb-3 pb-2 border-b border-gray-100 flex items-center gap-2">
                    <Key className="w-4 h-4 text-tealAccent" /> 8. Special Property Types &amp; Scenarios
                  </h4>
                  <div className="space-y-2 text-xs">
                    {specialPropertyFees.map((item, idx) => (
                      <div key={idx} className="flex justify-between py-1 border-b border-gray-50">
                        <span className="text-textMuted">{item.name}</span>
                        <strong className="text-legalDark shrink-0 ml-4">{item.fee}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Transaction-Specific Fees */}
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs lg:col-span-2">
                  <h4 className="font-serif font-bold text-base text-legalDark mb-3 pb-2 border-b border-gray-100 flex items-center gap-2">
                    <PenTool className="w-4 h-4 text-tealAccent" /> Transaction-Specific Fees
                  </h4>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                    {transactionSpecificFees.map((item, idx) => (
                      <div key={idx} className="p-3 bg-warmGray/20 rounded-xl border border-gray-100 flex justify-between items-center">
                        <span className="text-textMuted">{item.name}</span>
                        <strong className="text-legalDark ml-2">{item.fee}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-xs text-textMuted bg-white/60 p-4 rounded-xl border border-gray-200">
                <strong className="text-legalDark">Note:</strong> All legal fees quoted are subject to VAT at the prevailing rate (currently 20%). Disbursements are payments made to third parties (e.g. Land Registry, search providers, management companies) and are charged at cost without VAT unless the third party charges VAT. If a transaction becomes unexpectedly complex or protracted, additional fees may apply and you will be informed in advance.
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-legalDark text-white p-8 md:p-12 rounded-3xl text-center shadow-xl">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3">Calculate Your Instant Conveyancing Quote</h3>
              <p className="text-white/80 text-sm max-w-lg mx-auto mb-6">
                Use our interactive quote calculator for instant fee breakdowns or speak to our conveyancing team for a bespoke quote.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/quote"
                  className="inline-flex items-center gap-2 bg-tealAccent text-legalDark font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl hover:bg-white transition-all shadow-md"
                >
                  Go To Quote Calculator <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:02037636767"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl border border-white/15 transition-all"
                >
                  <Phone className="w-4 h-4" /> Call 020 3763 6767
                </a>
                <a
                  href="mailto:info@qconveyancing.com"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl border border-white/15 transition-all"
                >
                  <FileText className="w-4 h-4" /> Email Enquiry
                </a>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}