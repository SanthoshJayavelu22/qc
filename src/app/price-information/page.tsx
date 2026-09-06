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

// Price Tables
const purchasePriceBrackets = [
  { bracket: "Up to £250,000", fee: "£999" },
  { bracket: "£251,000 to £350,000", fee: "£1,099" },
  { bracket: "£351,000 to £500,000", fee: "£1,399" },
  { bracket: "£501,000 to £600,000", fee: "£1,499" },
  { bracket: "£601,000 to £750,000", fee: "£1,799" },
  { bracket: "£751,000 to £950,000", fee: "£1,999" },
  { bracket: "£951,000 to £1,000,000", fee: "£2,100" },
  { bracket: "£1,001,000 to £1,500,000", fee: "£2,800" },
  { bracket: "£1,501,000 to £2,000,000", fee: "£3,800" },
];

const salePriceBrackets = [
  { bracket: "Up to £300,000", fee: "£999" },
  { bracket: "£301,000 to £500,000", fee: "£1,299" },
  { bracket: "£501,000 to £600,000", fee: "£1,399" },
  { bracket: "£601,000 to £700,000", fee: "£1,599" },
  { bracket: "£701,000 to £800,000", fee: "£1,899" },
  { bracket: "£801,000 to £950,000", fee: "£2,099" },
  { bracket: "Above £951,000", fee: "Price on Enquiry" },
];

const remortgagePriceBrackets = [
  { bracket: "Up to £500,000", fee: "£699" },
  { bracket: "£501,000 to £700,000", fee: "£999" },
  { bracket: "£701,000 to £900,000", fee: "£1,099" },
  { bracket: "Above £901,000", fee: "Price on Enquiry" },
];

// Purchase Disbursements
const purchaseDisbursements = [
  { 
    name: "Stamp Duty Land Tax (SDLT)", 
    description: "Calculated on the purchase price. Use HMRC's website for England or Welsh Revenue Authority for Wales.",
    link: "https://www.gov.uk/stamp-duty-land-tax",
    linkText: "Calculate SDLT"
  },
  { 
    name: "Land Registry Registration Fee", 
    description: "Based on purchase price. Fee ranges from £20.00 to £910.00.",
    link: "https://www.gov.uk/guidance/hm-land-registry-registration-services-fees",
    linkText: "View Fees"
  },
  { 
    name: "Land Registry Search Fees", 
    description: "£3.00 per search" 
  },
  { 
    name: "Land Charges Search", 
    description: "£2.00 per name" 
  },
  { 
    name: "Electronic ID Check", 
    description: "£95.00 per name" 
  },
  { 
    name: "Notice of Transfer Fee (Leasehold)", 
    description: "Set out in the Lease. Typically £50.00 - £300.00" 
  },
  { 
    name: "Notice of Charge Fee (Leasehold)", 
    description: "Set out in the Lease. Typically £50.00 - £300.00" 
  },
  { 
    name: "Deed of Covenant Fee (Leasehold)", 
    description: "Provided by management company. Typically £200.00 - £300.00" 
  },
  { 
    name: "Certificate of Compliance Fee (Leasehold)", 
    description: "Confirmed upon receipt of Lease. Ranges from £100.00 - £300.00" 
  },
  { 
    name: "Indemnity Insurance Policy (if required)", 
    description: "Premium depends on risk and property price" 
  },
];

// Sale Disbursements
const saleDisbursements = [
  { 
    name: "Land Registry Copy Title Documents", 
    description: "Dependent on number of documents. £6.00 - £24.00" 
  },
  { 
    name: "Managing Agent's/Landlord's Management Pack", 
    description: "Provided by managing agents/landlord. Typically £200.00 - £600.00" 
  },
  { 
    name: "Deed of Covenant Fee", 
    description: "Provided by management company. Typically £200.00 - £300.00" 
  },
  { 
    name: "Indemnity Insurance Policy (if required)", 
    description: "Premium depends on risk and property price" 
  },
  { 
    name: "Electronic ID Check", 
    description: "£95.00 per name" 
  },
];

// Re-Mortgage Disbursements
const remortgageDisbursements = [
  { 
    name: "Land Registry Registration Fee", 
    description: "Based on re-mortgage sum. £20.00 - £550.00" 
  },
  { 
    name: "Land Registry Pre-completion Searches", 
    description: "Priority search: £3.00 per title. Bankruptcy search: £2.00 per person" 
  },
  { 
    name: "Notice of Transfer Fee (Leasehold)", 
    description: "Set out in the Lease. Typically £50.00 - £300.00" 
  },
  { 
    name: "Notice of Charge Fee (Leasehold)", 
    description: "Set out in the Lease. Typically £50.00 - £300.00" 
  },
  { 
    name: "Deed of Covenant Fee (Leasehold)", 
    description: "Provided by management company. Typically £200.00 - £300.00" 
  },
  { 
    name: "Indemnity Insurance Policy (if required)", 
    description: "Premium depends on risk and property price" 
  },
  { 
    name: "Electronic ID Check", 
    description: "£95.00 per name" 
  },
];

// Leasehold Additional Fees
const leaseholdAddOns = [
  { name: "Search Pack Related Fees - Managing, Analysing & Reporting", fee: "£450" },
  { name: "Extension of lease term (deed of surrender and re-grant)", fee: "£1,500" },
  { name: "Deed of Variation (estimated)", fee: "£1,500" },
  { name: "Deed of Covenant", fee: "£275" },
  { name: "Grant of a new lease", fee: "£750" },
  { name: "Purchasing/selling Share of Freehold", fee: "£375" },
  { name: "Leasehold Fee", fee: "£375" },
  { name: "License to assign", fee: "£375" },
  { name: "Investigating neighbouring lease (purchase only)", fee: "£250" },
  { name: "Cross over leases (purchase only)", fee: "£250" },
  { name: "Prepare and service of notice of assignment (purchase only)", fee: "£150" },
  { name: "Prepare and service of notice of charge (purchase only)", fee: "£150" },
  { name: "Service deed / Compliance certificate", fee: "£275" },
  { name: "Administering service charge retentions", fee: "£499" },
  { name: "Shared Ownership Leases", fee: "£450" },
  { name: "Dealing with obtaining a share in a Management Company", fee: "£275" },
];

// Freehold Additional Fees
const freeholdAddOns = [
  { name: "Dealing with Resident's Association/Management Company", fee: "£350" },
  { name: "Service deed / Compliance certificate (purchase only)", fee: "£275" },
  { name: "Prepare and service of notice of assignment (purchase only)", fee: "£150" },
  { name: "Prepare and service of notice of charge (purchase only)", fee: "£150" },
];

// General Additional Fees
const generalAddOns = [
  { name: "Acting on behalf of Lender", fee: "£350 – £400" },
  { name: "Dealing with Lender's Solicitors", fee: "£350" },
  { name: "Acting for Lender in Redeeming the mortgage", fee: "£355" },
  { name: "Non Refundable Admin", fee: "£150" },
  { name: "International AML checks for foreign clients", fee: "£450" },
  { name: "Transfer of Equity", fee: "£699" },
  { name: "Dealing with Bankruptcy entries against client's name (purchase only)", fee: "£175" },
  { name: "Declaration of Solvency", fee: "£275" },
  { name: "Deed of gift", fee: "£350" },
  { name: "Dealing with a restriction on your property", fee: "£350" },
  { name: "Dealing with Lender's solicitors regarding repossession", fee: "£350" },
  { name: "Per additional charge registered against property", fee: "£350" },
  { name: "SDLT advice", fee: "£750" },
  { name: "Unregistered Land", fee: "£850" },
  { name: "Assignment of an agreement for sale", fee: "£500" },
  { name: "Deed of Postponement of a charge", fee: "£250" },
  { name: "Deed of postponement/consent re adult occupier", fee: "£50" },
  { name: "To deal with late completions", fee: "£350" },
  { name: "To deal with Islamic Mortgages", fee: "£850 – £1,500" },
  { name: "To deal with defective title", fee: "£400" },
  { name: "To deal with indemnity insurance", fee: "£225" },
  { name: "To deal with declaration of trust", fee: "£750 – £1,000" },
  { name: "Property being sold by a mortgagee", fee: "£375" },
  { name: "To deal with unsecured borrowing on further advance", fee: "£200" },
  { name: "Dealing with matrimonial issues", fee: "£450 – £950" },
  { name: "Bridging loans", fee: "£850 – £1,500" },
  { name: "Statutory declaration and any disclaimer/waivers", fee: "£250 - £500" },
  { name: "Dealing via power of attorney", fee: "£350 – £550" },
  { name: "Drafting/approving Tenancy Agreement (BUY TO LET)", fee: "£150" },
  { name: "Deed of easement", fee: "£500" },
  { name: "Cheque stopped at customers request", fee: "£40" },
  { name: "Cheque returned unpaid", fee: "£40" },
  { name: "Auction purchase", fee: "£500 – £1,500" },
  { name: "Purchase/Sale via PR / administrator / company", fee: "£350 – £950" },
  { name: "Expedition fees (less than 10 working days between exchange and completion)", fee: "£525" },
  { name: "Newly built property/plot", fee: "£450 – £950" },
  { name: "Retirement Property", fee: "£500" },
  { name: "Right to buy property", fee: "£450" },
  { name: "Dealing with porting a mortgage/flexible mortgage", fee: "£250 – £550" },
  { name: "SDLT fee", fee: "£50" },
  { name: "Dealing with Local Authority Charges", fee: "£175" },
  { name: "Adding or Removing a party to the transaction", fee: "£175" },
  { name: "Resending Contracts & Title Deeds", fee: "£250" },
  { name: "Buy to Let Mortgage (in addition to mortgagee fee)", fee: "£150" },
  { name: "Checking Home Buyer's Valuation Report", fee: "£500" },
  { name: "Upgrading Title", fee: "£300" },
  { name: "Help to Buy", fee: "£550" },
  { name: "Splitting Title/Land", fee: "£2,500 – £3,500" },
  { name: "Additional piece of land purchase", fee: "£850 – £1,500" },
  { name: "Dealing with landlord under Building Safety Act 2022", fee: "£750" },
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
                <div className="text-xs text-legalDark font-semibold bg-tealAccent/10 p-3 rounded-xl border border-tealAccent/20">
                  * All conveyancing legal fees subject to 20% VAT + non-refundable admin fee of £150 + VAT.
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
                ⚠️ Please note: If it transpires your transaction is not standard and becomes unexpectedly complex or protracted then <strong>additional fees may become applicable</strong>. You will find a non-exhaustive list of additional fees below.
              </div>
            </div>

            {/* PURCHASE SECTION */}
            <div className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm space-y-6" id="purchase">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-tealAccent block mb-1">Purchase Legal Fees</span>
                <h3 className="text-2xl font-serif font-bold text-legalDark">Purchase – Price &amp; Services Information</h3>
                <p className="text-textMuted text-xs mt-1">* Non-refundable admin fee of £150 + VAT applies to all transactions.</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-legalDark text-white font-serif uppercase tracking-wider">
                      <th className="p-3.5 rounded-tl-xl">Purchase Price</th>
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
                * Subject to VAT at 20%
              </div>

              {/* Purchase Disbursements */}
              <div className="pt-4 border-t border-gray-100">
                <h4 className="font-serif font-bold text-lg text-legalDark mb-3">Purchase Disbursements (Payable to Third Parties)</h4>
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
                <p className="text-textMuted text-xs mt-1">* Non-refundable admin fee of £150 + VAT applies to all transactions.</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-legalDark text-white font-serif uppercase tracking-wider">
                      <th className="p-3.5 rounded-tl-xl">Sale Price</th>
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
                * Subject to VAT at 20%
              </div>

              {/* Sale Disbursements */}
              <div className="pt-4 border-t border-gray-100">
                <h4 className="font-serif font-bold text-lg text-legalDark mb-3">Sale Disbursements (Payable to Third Parties)</h4>
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
                <p className="text-textMuted text-xs mt-1">* Non-refundable admin fee of £150 + VAT applies to all transactions.</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-legalDark text-white font-serif uppercase tracking-wider">
                      <th className="p-3.5 rounded-tl-xl">Re-Mortgage Value</th>
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
                * Subject to VAT at 20%
              </div>

              {/* Re-Mortgage Disbursements */}
              <div className="pt-4 border-t border-gray-100">
                <h4 className="font-serif font-bold text-lg text-legalDark mb-3">Re-Mortgage Disbursements (Payable to Third Parties)</h4>
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

            {/* ADDITIONAL FEES SECTION */}
            <div className="bg-warmGray/30 p-8 rounded-3xl border border-gray-200/80 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-tealAccent block mb-1">Non-Standard Transactions</span>
                <h3 className="text-2xl font-serif font-bold text-legalDark">Additional Fees – If Applicable</h3>
                <p className="text-textMuted text-xs mt-1">
                  Please note below are the list of additional fees that may become chargeable depending on the nature of your case. 
                  The ones highlighted below are the more frequently incurred additional fees.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Leasehold Add-ons */}
                <div>
                  <h4 className="font-serif font-bold text-base text-legalDark mb-3 pb-2 border-b border-gray-200 flex items-center gap-2">
                    <Building className="w-4 h-4 text-tealAccent" /> Leasehold Properties
                  </h4>
                  <div className="space-y-1.5 text-xs max-h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300">
                    {leaseholdAddOns.map((item, idx) => (
                      <div key={idx} className="flex justify-between py-1.5 border-b border-gray-100">
                        <span className="text-textMuted">{item.name}</span>
                        <strong className="text-legalDark shrink-0 ml-4">{item.fee}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Freehold Add-ons */}
                <div>
                  <h4 className="font-serif font-bold text-base text-legalDark mb-3 pb-2 border-b border-gray-200 flex items-center gap-2">
                    <Home className="w-4 h-4 text-tealAccent" /> Freehold Properties
                  </h4>
                  <p className="text-xs text-textMuted mb-3">
                    The following charges are likely to apply if there is a management company or resident's association that deal with common areas such as maintenance of a private road.
                  </p>
                  <div className="space-y-1.5 text-xs">
                    {freeholdAddOns.map((item, idx) => (
                      <div key={idx} className="flex justify-between py-1.5 border-b border-gray-100">
                        <span className="text-textMuted">{item.name}</span>
                        <strong className="text-legalDark shrink-0 ml-4">{item.fee}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                {/* General Add-ons */}
                <div>
                  <h4 className="font-serif font-bold text-base text-legalDark mb-3 pb-2 border-b border-gray-200 flex items-center gap-2">
                    <Gavel className="w-4 h-4 text-tealAccent" /> General (Any Transaction)
                  </h4>
                  <p className="text-xs text-textMuted mb-3">
                    These additional fees may become chargeable irrespective of whether or not the property is leasehold or freehold.
                  </p>
                  <div className="space-y-1.5 text-xs max-h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300">
                    {generalAddOns.map((item, idx) => (
                      <div key={idx} className="flex justify-between py-1.5 border-b border-gray-100">
                        <span className="text-textMuted">{item.name}</span>
                        <strong className="text-legalDark shrink-0 ml-4">{item.fee}</strong>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-xs text-textMuted bg-white/60 p-4 rounded-xl border border-gray-200">
                <strong className="text-legalDark">Note:</strong> The above list is a non-exhaustive list and if there are any additional fees we feel that you may incur we will inform you in advance. 
                In addition to our legal fees for some of the items above you may incur additional disbursement(s) such as Land Registry fees. However, we will inform you accordingly.
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