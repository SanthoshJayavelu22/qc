"use client";

import { useState, useRef, useEffect } from "react";
import { 
  Calculator, 
  PoundSterling, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  Info, 
  Phone, 
  Mail, 
  User, 
  X, 
  Building2, 
  ShieldCheck, 
  Sparkles,
  Home,
  Key,
  RefreshCw,
  HelpCircle,
  AlertCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Reusable Selection Box Component (matching user's design)
function SelectionGroup({
  label,
  options,
  value,
  onChange,
  required = true,
  tooltip,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
  required?: boolean;
  tooltip?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <label className="text-xs font-semibold text-legalDark/90 flex items-center gap-1.5">
          <span>{label}</span>
          {required && <span className="text-tealAccent font-bold">*</span>}
        </label>
        {tooltip && (
          <span className="text-[11px] text-textMuted flex items-center gap-1" title={tooltip}>
            <HelpCircle className="w-3.5 h-3.5 text-tealAccent" />
          </span>
        )}
      </div>
      <div className="flex flex-wrap gap-2.5">
        {options.map((opt) => {
          const isSelected = value === opt;
          return (
            <button
              type="button"
              key={opt}
              onClick={() => onChange(opt)}
              className={`flex-1 min-w-[95px] sm:min-w-[110px] py-3 px-3.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all text-center ${
                isSelected
                  ? "bg-tealAccent text-white border-tealAccent shadow-md ring-2 ring-tealAccent/20 font-bold"
                  : "bg-white text-legalDark/80 border-gray-200 hover:border-tealAccent/50 hover:bg-gray-50/80"
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function FeeCalculator({
  leadOnly = false,
}: {
  leadOnly?: boolean;
}) {
  // Step state (1: Core Transaction, 2: Specific Enquiries, 3: Contact Details)
  const [step, setStep] = useState<number>(1);
  const [leadSubmitted, setLeadSubmitted] = useState<boolean>(false);

  // Step 1: Core Transaction & Property Value
  const [transactionType, setTransactionType] = useState<string>("Purchase");
  const [propertyValue, setPropertyValue] = useState<string>("");

  // Step 2A: Purchase Specific Enquiries (from user's image 1)
  const [purchaseTenure, setPurchaseTenure] = useState<string>("Freehold");
  const [purchaseNewBuild, setPurchaseNewBuild] = useState<string>("No");
  const [purchaseFirstTimeBuyer, setPurchaseFirstTimeBuyer] = useState<string>("No");
  const [purchaseSecondHome, setPurchaseSecondHome] = useState<string>("No");
  const [purchaseRightToBuy, setPurchaseRightToBuy] = useState<string>("No");
  const [purchaseSharedOwnership, setPurchaseSharedOwnership] = useState<string>("No");
  const [purchaseDeedNames, setPurchaseDeedNames] = useState<string>("One");
  const [purchaseLifetimeIsa, setPurchaseLifetimeIsa] = useState<string>("No");
  const [purchaseMortgage, setPurchaseMortgage] = useState<string>("Yes");

  // Step 2B: Re-Mortgage / Transfer of Equity Enquiries ("Your New Arrangement" - image 2)
  const [remortgageValue, setRemortgageValue] = useState<string>("");
  const [currentLender, setCurrentLender] = useState<string>("");
  const [proposedLender, setProposedLender] = useState<string>("");
  const [currentMortgageAccNum, setCurrentMortgageAccNum] = useState<string>("");
  const [remortgageTransferOfEquity, setRemortgageTransferOfEquity] = useState<string>("No");

  // Step 2C: Sale Enquiries (from user's image 3)
  const [saleTenure, setSaleTenure] = useState<string>("Freehold");
  const [saleExistingMortgage, setSaleExistingMortgage] = useState<string>("No");
  const [saleDeedNames, setSaleDeedNames] = useState<string>("One");

  // Step 3: Compulsory Contact Details
  const [clientName, setClientName] = useState<string>("");
  const [clientPhone, setClientPhone] = useState<string>("");
  const [clientEmail, setClientEmail] = useState<string>("");

  // Validation errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Result & Modal State
  const [quoteResult, setQuoteResult] = useState<any>(null);
  const [showQuote, setShowQuote] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (showQuote) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showQuote]);

  // Price Tables based on Quality_Conveyancing_Fees_Schedule.docx
  const PRICE_TABLES: Record<string, { min: number; max: number; fee: number | "POA" }[]> = {
    Purchase: [
      { min: 0, max: 300000, fee: 1099 },
      { min: 300001, max: 400000, fee: 1099 },
      { min: 400001, max: 500000, fee: 1299 },
      { min: 500001, max: 600000, fee: 1399 },
      { min: 600001, max: 700000, fee: 1499 },
      { min: 700001, max: 800000, fee: 1799 },
      { min: 800001, max: 950000, fee: 1999 },
      { min: 950001, max: 1500000, fee: 2500 },
      { min: 1500001, max: 3000000, fee: "POA" },
      { min: 3000001, max: Infinity, fee: "POA" }
    ],
    Sale: [
      { min: 0, max: 300000, fee: 1099 },
      { min: 300001, max: 400000, fee: 1099 },
      { min: 400001, max: 500000, fee: 1299 },
      { min: 500001, max: 600000, fee: 1399 },
      { min: 600001, max: 700000, fee: 1499 },
      { min: 700001, max: 800000, fee: 1799 },
      { min: 800001, max: 950000, fee: 1999 },
      { min: 950001, max: Infinity, fee: "POA" }
    ],
    "Re-Mortgage": [
      { min: 0, max: 500000, fee: 999 },
      { min: 500001, max: 700000, fee: 999 },
      { min: 700001, max: Infinity, fee: "POA" }
    ]
  };

  // Fee Constants per Mandatory Schedule and Additional Fees documents
  const ADMIN_FEE_SALE_REMORTGAGE = 100; // £100 + VAT (mandatory on sale and remortgage only)
  const TT_FEE = 45; // Telegraphic transfer (TT) fee: £45 per transfer
  const ID_CHECK_FEE = 90; // Electronic ID check: £90 per individual client
  const SOURCE_OF_FUNDS_FEE = 95; // Source of funds check: £95 per individual client (mandatory for each client on every transaction)
  const VAT_RATE = 0.20;

  // Helper: Get Base Fee
  const getBaseFee = (type: string, value: number): number | "POA" | null => {
    const table = PRICE_TABLES[type];
    if (!table) return null;

    for (const bracket of table) {
      if (value >= bracket.min && value <= bracket.max) {
        return bracket.fee;
      }
    }
    return "POA";
  };

  // Helper: Format Currency
  const formatCurrency = (amount: number | string) => {
    if (typeof amount === "string") return amount;
    if (!amount && amount !== 0) return "POA";
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Step 1 -> Step 2 Validation
  const handleNextToStep2 = () => {
    const errs: { [key: string]: string } = {};
    if (!propertyValue || parseFloat(propertyValue) <= 0) {
      errs.propertyValue = "Please enter an estimated property value (£)";
    }
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});

    // If Commercial, skip straight to Step 3 for specialist commercial enquiry
    if (transactionType.startsWith("Commercial")) {
      setStep(3);
    } else {
      setStep(2);
    }
  };

  // Step 2 -> Step 3 Validation
  const handleNextToStep3 = () => {
    // If Re-mortgage and remortgageValue is blank, initialize with propertyValue
    if ((transactionType === "Re-Mortgage" || transactionType === "Transfer of Equity") && !remortgageValue) {
      setRemortgageValue(propertyValue);
    }
    setErrors({});
    setStep(3);
  };

  // Main Calculation & Submission
  const handleFinalSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    // Validate Compulsory Contact Information
    const errs: { [key: string]: string } = {};
    if (!clientName.trim()) {
      errs.clientName = "Full name is required";
    }
    if (!clientPhone.trim() || clientPhone.trim().length < 7) {
      errs.clientPhone = "Valid contact phone number is required";
    }
    if (!clientEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clientEmail.trim())) {
      errs.clientEmail = "Valid email address is required (e.g. name@example.com)";
    }

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    const val = parseFloat(propertyValue) || 0;

    // Structured Questionnaire Answers for email & caseworkers
    let questionnaireAnswers: Record<string, any> = {};
    if (transactionType === "Purchase" || transactionType === "Sale & Purchase") {
      questionnaireAnswers = {
        "Property Tenure": purchaseTenure,
        "Is the property a new build?": purchaseNewBuild,
        "Are you a first time buyer?": purchaseFirstTimeBuyer,
        "Is this a second home or a Buy to Let?": purchaseSecondHome,
        "Purchasing using Right to Buy?": purchaseRightToBuy,
        "Buying through Shared Ownership?": purchaseSharedOwnership,
        "Names on purchase property deed": purchaseDeedNames,
        "Using Lifetime ISA or Help to Buy ISA?": purchaseLifetimeIsa,
        "Buying with help of a new mortgage?": purchaseMortgage,
      };
    } else if (transactionType === "Re-Mortgage" || transactionType === "Transfer of Equity") {
      questionnaireAnswers = {
        "New Mortgage Value": remortgageValue ? `£${remortgageValue}` : formatCurrency(val),
        "Current Lender": currentLender || "Not specified",
        "Proposed New Lender": proposedLender || "Not specified",
        "Current Mortgage Account Number": currentMortgageAccNum || "Not specified",
        "Does remortgage involve Transfer of Equity?": remortgageTransferOfEquity,
      };
    } else if (transactionType === "Sale") {
      questionnaireAnswers = {
        "Property Tenure": saleTenure,
        "Existing mortgage to pay off with proceeds?": saleExistingMortgage,
        "Names on sale property deed": saleDeedNames,
      };
    }

    // Handle Lead-Only Mode (e.g. on /quote page: receive leads data, no instant pricing popup)
    if (leadOnly) {
      const emailPayload = {
        clientName,
        clientEmail,
        clientPhone,
        transactionType,
        propertyValue: formatCurrency(val),
        tenureType: transactionType === "Sale" ? saleTenure : purchaseTenure,
        totalIncVat: "Quote Requested via Lead Form",
        subtotal: "Pending Solicitor Review",
        vatAmount: "N/A",
        questionnaireAnswers,
        seasonalDiscountNote: "* We may have seasonal discounts available for your quote. Please get in touch at 020 3763 6767 to discuss"
      };

      try {
        await fetch("/api/quote/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(emailPayload)
        });
      } catch (err) {
        console.error("Email API failed, silent fallback:", err);
      }

      setIsSubmitting(false);
      setLeadSubmitted(true);
      return;
    }

    // Handle Commercial Quotes
    if (transactionType.startsWith("Commercial")) {
      const emailPayload = {
        clientName,
        clientEmail,
        clientPhone,
        transactionType,
        propertyValue: formatCurrency(val),
        tenureType: "Commercial",
        totalIncVat: "Bespoke Commercial Quote",
        subtotal: "POA",
        vatAmount: "POA",
        questionnaireAnswers: {
          "Commercial Transaction": transactionType,
          "Property Value": formatCurrency(val),
        },
        seasonalDiscountNote: "* We may have seasonal discounts available for your quote. Please get in touch at 020 3763 6767 to discuss"
      };

      try {
        await fetch("/api/quote/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(emailPayload)
        });
      } catch (err) {
        console.error("Email API failed, silent fallback:", err);
      }

      setQuoteResult({
        type: "COMMERCIAL",
        clientName,
        clientEmail,
        clientPhone,
        propertyValue: val,
        transactionType
      });
      setIsSubmitting(false);
      setShowQuote(true);
      return;
    }

    // Determine Base Fee
    let baseFee = 0;
    let saleFee = 0;
    let purchaseFee = 0;
    let isPOA = false;

    if (transactionType === "Sale & Purchase") {
      const sRes = getBaseFee("Sale", val);
      const pRes = getBaseFee("Purchase", val);
      if (sRes === "POA" || pRes === "POA" || sRes === null || pRes === null) {
        isPOA = true;
      } else {
        saleFee = sRes as number;
        purchaseFee = pRes as number;
        baseFee = saleFee + purchaseFee;
      }
    } else if (transactionType === "Transfer of Equity") {
      baseFee = 999; // Transfer of equity standalone fee per fee schedule: £999
    } else {
      const res = getBaseFee(transactionType, val);
      if (res === "POA" || res === null) {
        isPOA = true;
      } else {
        baseFee = res as number;
      }
    }

    // Determine Client Count for ID checks and Source of Funds checks based on deed answers
    let clientCount = 1;
    if (transactionType === "Purchase" || transactionType === "Sale & Purchase") {
      clientCount = purchaseDeedNames === "Two" ? 2 : purchaseDeedNames === "Three or more" ? 3 : 1;
    } else if (transactionType === "Sale") {
      clientCount = saleDeedNames === "Two" ? 2 : saleDeedNames === "Three or more" ? 3 : 1;
    } else if (remortgageTransferOfEquity === "Yes") {
      clientCount = 2;
    }

    // Mandatory Compliance Fees per Client (Schedule Table 4)
    const idCheckTotal = ID_CHECK_FEE * clientCount; // £90 per person
    const sourceOfFundsTotal = SOURCE_OF_FUNDS_FEE * clientCount; // £95 per person

    // Non-refundable Admin Fee (Mandatory on Sales and Remortgages only: £100 + VAT)
    const adminFee = (transactionType === "Sale" || transactionType === "Re-Mortgage" || transactionType === "Sale & Purchase" || transactionType === "Transfer of Equity") 
      ? ADMIN_FEE_SALE_REMORTGAGE 
      : 0;

    // Telegraphic Transfer (TT) Fee (Mandatory on All Completions: £45 per transfer)
    const ttFee = TT_FEE;

    // Determine Tenure and Tenure Fees
    const activeTenure = transactionType === "Sale" ? saleTenure : purchaseTenure;
    let tenureFees = 0;
    const tenureDetails: { label: string; amount: number }[] = [];

    if (activeTenure === "Leasehold") {
      // Leasehold fee (£275) + Deed of Covenant (£275) per schedule
      tenureFees = 550;
      tenureDetails.push({ label: "Leasehold Fee", amount: 275 });
      tenureDetails.push({ label: "Deed of Covenant", amount: 275 });
    }

    // Dynamic Additional Services Breakdown based on answers
    const addOnsDetails: { label: string; amount: number }[] = [];
    let addOnsTotal = 0;

    if (transactionType === "Purchase" || transactionType === "Sale & Purchase") {
      if (purchaseNewBuild === "Yes") {
        // Newly built property/plot: usually £475 per schedule
        addOnsDetails.push({ label: "Newly Built Property / Plot Compliance", amount: 475 });
        addOnsTotal += 475;
      }
      if (purchaseSharedOwnership !== "No") {
        // Shared ownership leases: £450 per schedule
        addOnsDetails.push({ label: `Shared Ownership (${purchaseSharedOwnership})`, amount: 450 });
        addOnsTotal += 450;
      }
      // Right to Buy: "Right to buy – do not charge extra only LH fee if applicable" per schedule
      if (purchaseMortgage === "Yes") {
        // Mortgagee / Lender fee: £350-£400, usually £375 per schedule
        addOnsDetails.push({ label: "Acting on Behalf of Mortgage Lender", amount: 375 });
        addOnsTotal += 375;
      }
      if (purchaseLifetimeIsa === "Yes") {
        addOnsDetails.push({ label: "Lifetime / Help to Buy ISA Processing", amount: 100 });
        addOnsTotal += 100;
      }
    }

    if (transactionType === "Sale" || transactionType === "Sale & Purchase") {
      if (saleExistingMortgage === "Yes") {
        // Acting for lender in redeeming mortgage: £350 per schedule
        addOnsDetails.push({ label: "Acting for Lender in Redeeming Mortgage", amount: 350 });
        addOnsTotal += 350;
      }
    }

    if (transactionType === "Re-Mortgage") {
      if (remortgageTransferOfEquity === "Yes") {
        // Transfer of equity – £375 extra to Remortgage quote per schedule
        addOnsDetails.push({ label: "Transfer of Equity (Additional to Remortgage)", amount: 375 });
        addOnsTotal += 375;
      }
      // Remortgage involves lender acting fee
      addOnsDetails.push({ label: "Acting on Behalf of Mortgage Lender", amount: 375 });
      addOnsTotal += 375;
    }

    // Subtotal, VAT, Total
    const subtotal = baseFee + adminFee + idCheckTotal + sourceOfFundsTotal + ttFee + tenureFees + addOnsTotal;
    const vatAmount = subtotal * VAT_RATE;
    const totalIncVat = subtotal + vatAmount;

    // Build breakdown payload
    const breakdown = {
      baseFee: {
        label: transactionType === "Sale & Purchase" 
          ? "Sale & Purchase Combined Base Fee" 
          : `${transactionType} Legal Fee`,
        amount: baseFee,
        details: transactionType === "Sale & Purchase" 
          ? [
              { label: "Sale Fee", amount: saleFee },
              { label: "Purchase Fee", amount: purchaseFee }
            ]
          : []
      },
      adminFee: {
        label: "Non-Refundable Admin Fee (Sale/Remortgage)",
        amount: adminFee
      },
      idChecks: {
        label: `Electronic ID Checks (${clientCount} client${clientCount > 1 ? "s" : ""})`,
        amount: idCheckTotal,
        perPerson: ID_CHECK_FEE
      },
      sourceOfFunds: {
        label: `Source of Funds Checks (${clientCount} client${clientCount > 1 ? "s" : ""})`,
        amount: sourceOfFundsTotal,
        perPerson: SOURCE_OF_FUNDS_FEE
      },
      ttFee: {
        label: "Telegraphic Transfer (TT) Fee (Completion)",
        amount: ttFee
      },
      tenureFees: {
        label: `${activeTenure} Fees`,
        amount: tenureFees,
        details: tenureDetails
      },
      addOns: {
        label: "Additional Transaction Services",
        amount: addOnsTotal,
        details: addOnsDetails
      },
      vat: {
        label: "VAT (20%)",
        amount: vatAmount
      },
      total: {
        label: "Total (Inc. VAT)",
        amount: totalIncVat
      }
    };

    // Dispatch Email Asynchronously via Next.js API route
    try {
      fetch("/api/quote/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clientName,
          clientEmail,
          clientPhone,
          transactionType,
          propertyValue: formatCurrency(val),
          tenureType: activeTenure,
          subtotal: formatCurrency(subtotal),
          vatAmount: formatCurrency(vatAmount),
          totalIncVat: formatCurrency(totalIncVat),
          questionnaireAnswers,
          seasonalDiscountNote: "* We may have seasonal discounts available for your quote. Please get in touch at 020 3763 6767 to discuss"
        })
      }).catch(err => console.error("Email dispatch err:", err));
    } catch (e) {}

    setQuoteResult({
      type: isPOA ? "POA" : "calculated",
      breakdown,
      subtotal,
      vatAmount,
      totalIncVat,
      transactionType,
      propertyValue: val,
      tenureType: activeTenure,
      clients: clientCount,
      clientName,
      clientPhone,
      clientEmail,
      emailAddress: clientEmail,
      questionnaireAnswers
    });

    setIsSubmitting(false);
    setShowQuote(true);
  };

  // Reset quote
  const resetQuote = () => {
    setShowQuote(false);
    setQuoteResult(null);
  };

  return (
    <section className="py-24 md:py-36 bg-warmGray text-legalDark relative overflow-hidden" id="calculator">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-tealAccent opacity-[0.05] rounded-full blur-[150px] pointer-events-none mix-blend-multiply"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-tealAccent opacity-[0.03] rounded-full blur-[120px] pointer-events-none mix-blend-multiply"></div>

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          
          {/* Left Feature Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 sticky top-28"
          >
            <div className="w-12 h-12 bg-tealAccent/20 rounded-xl flex items-center justify-center mb-8 border border-tealAccent/30">
              <Calculator className="text-tealAccent w-6 h-6" />
            </div>
            
            <p className="text-tealAccent text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              {leadOnly ? "Bespoke Conveyancing" : "Transparent Pricing"}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold font-serif leading-[1.15] mb-6">
              {leadOnly ? "Request Your Conveyancing Quote" : "Instant Conveyancing Fee Calculator"}
            </h2>
            <p className="text-textMuted text-base md:text-lg leading-relaxed font-light mb-8">
              {leadOnly
                ? "Complete our brief questionnaire and our specialist property lawyers will review your details and prepare a tailored, transparent fee quote."
                : "No hidden surprises. Complete our brief questionnaire to calculate your exact legal fees and have an itemised quote emailed instantly."}
            </p>

            <ul className="space-y-3.5">
              {[
                "Transparent Fixed Fees",
                "Highly Skilled & Experienced Lawyers",
                "Direct Dial Access To Your Caseworker",
                "On Panel Of All Major Lenders",
                "80% Faster Than Industry Average",
                "5-Star Rated Service"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-sm font-medium text-legalDark">
                  <div className="w-5 h-5 rounded-full bg-tealAccent/20 flex items-center justify-center shrink-0 text-legalDark">
                    <CheckCircle className="w-3.5 h-3.5 text-teal-600" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            {/* Quick Links */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="/endorsements"
                className="inline-flex items-center justify-center gap-2 bg-legalDark hover:bg-legalNavy text-white font-bold text-xs uppercase tracking-wider px-4 py-3 rounded-xl transition-all shadow-sm"
              >
                <span>What Our Clients Say..</span>
                <ArrowRight className="w-3.5 h-3.5 text-tealAccent" />
              </a>
              <a
                href="/refer-work"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 text-white font-bold text-xs uppercase tracking-wider px-4 py-3 rounded-xl transition-all shadow-sm"
              >
                <span>Refer A Friend & Receive £100 <span className="underline font-extrabold ml-1">Click Here</span></span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </a>
            </div>

            {/* Quick Info Box */}
            <div className="mt-6 p-4 bg-white/60 rounded-2xl border border-legalDark/10 shadow-sm">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-tealAccent mt-0.5 shrink-0" />
                <p className="text-xs text-legalDark/80 leading-relaxed">
                  <span className="font-semibold text-legalDark">Prompt Response:</span>{" "}
                  {leadOnly
                    ? "Our property team will examine your transaction requirements and contact you with a bespoke quote."
                    : "Full itemised quote is shown online immediately and emailed directly to your inbox."}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Form Wizard Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <div className="bg-white border border-legalDark/10 rounded-2xl p-6 sm:p-9 md:p-10 shadow-xl relative">
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-legalDark/5 pointer-events-none"></div>

              {/* Step Progress Header */}
              <div className="mb-8 pb-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-tealAccent">
                    Step {step} of 3
                  </span>
                  <span className="text-xs font-semibold text-textMuted">
                    {step === 1 ? "Transaction & Property Value" : step === 2 ? "Property Enquiries" : "Your Contact Details"}
                  </span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-tealAccent transition-all duration-500 rounded-full"
                    style={{ width: step === 1 ? "33.3%" : step === 2 ? "66.6%" : "100%" }}
                  />
                </div>
              </div>

              {/* ========================================================= */}
              {/* STEP 1: TRANSACTION TYPE & PROPERTY VALUE                 */}
              {/* ========================================================= */}
              {leadSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-tealAccent/20 rounded-full flex items-center justify-center mx-auto mb-6 text-legalDark">
                    <CheckCircle className="w-10 h-10 text-teal-600" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-legalDark mb-3">
                    Thank You, {clientName}!
                  </h3>
                  <p className="text-textMuted text-sm sm:text-base max-w-lg mx-auto leading-relaxed mb-6">
                    We have successfully received your {transactionType.toLowerCase()} requirements and questionnaire details. One of our specialist conveyancing lawyers will review your file and prepare your itemised quote shortly.
                  </p>

                  <div className="p-5 bg-warmGray/50 rounded-2xl border border-gray-100 max-w-md mx-auto text-left space-y-2 mb-6 text-xs text-textMuted">
                    <div><strong className="text-legalDark">Transaction:</strong> {transactionType}</div>
                    <div><strong className="text-legalDark">Estimated Value:</strong> {formatCurrency(parseFloat(propertyValue) || 0)}</div>
                    <div><strong className="text-legalDark">Contact Email:</strong> {clientEmail}</div>
                    <div><strong className="text-legalDark">Contact Phone:</strong> {clientPhone}</div>
                  </div>

                  {/* Bold Seasonal Discount Note */}
                  <div className="mb-6 p-4 bg-emerald-50 border border-emerald-300 rounded-2xl text-center max-w-md mx-auto">
                    <p className="text-xs sm:text-sm font-bold text-legalDark leading-relaxed">
                      * We may have seasonal discounts available for your quote. Please get in touch at{" "}
                      <a href="tel:02037636767" className="underline text-tealAccent hover:text-emerald-700 font-extrabold">
                        020 3763 6767
                      </a>{" "}
                      to discuss
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setLeadSubmitted(false);
                      setStep(1);
                    }}
                    className="inline-flex items-center gap-2 bg-legalDark text-white font-semibold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl hover:bg-legalNavy transition-colors shadow-sm"
                  >
                    Submit Another Enquiry
                  </button>
                </motion.div>
              ) : (
                <>
                  {step === 1 && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold font-serif text-legalDark mb-1">
                          What can we help you with?
                        </h3>
                        <p className="text-textMuted text-xs sm:text-sm">
                          {leadOnly
                            ? "Select your transaction type to personalize your quote request."
                            : "Select your transaction type to personalize your legal fee quote."}
                        </p>
                      </div>

                  {/* Transaction Type Selection */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-textMuted uppercase tracking-widest">
                      Transaction Type *
                    </label>
                    <div className="relative">
                      <select 
                        value={transactionType}
                        onChange={(e) => {
                          setTransactionType(e.target.value);
                          if (errors.transactionType) setErrors({});
                        }}
                        className="w-full bg-lightBg border border-legalDark/20 rounded-xl px-4 py-3.5 text-sm text-legalDark font-medium focus:outline-none focus:border-tealAccent focus:bg-white transition-all appearance-none cursor-pointer hover:border-legalDark/40"
                      >
                        <option value="Purchase">Purchase (Buy a property)</option>
                        <option value="Sale">Sale (Sell a property)</option>
                        <option value="Sale & Purchase">Sale & Purchase (Both)</option>
                        <option value="Re-Mortgage">Re-Mortgage (Switch lender/refinance)</option>
                        <option value="Transfer of Equity">Transfer of Equity (Change ownership)</option>
                        <option value="Commercial Purchase">Commercial Purchase</option>
                        <option value="Commercial Sale">Commercial Sale</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-legalDark/40">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Property Value Input */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-textMuted uppercase tracking-widest">
                      Estimated Property Value (£) *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <PoundSterling className="h-4 w-4 text-legalDark/40" />
                      </div>
                      <input
                        type="number"
                        placeholder="e.g. 350000"
                        value={propertyValue}
                        onChange={(e) => {
                          setPropertyValue(e.target.value);
                          if (errors.propertyValue) setErrors({});
                        }}
                        className={`w-full bg-lightBg border ${errors.propertyValue ? "border-red-400" : "border-legalDark/20"} rounded-xl pl-10 pr-4 py-3.5 text-sm text-legalDark font-medium placeholder:text-legalDark/30 focus:outline-none focus:border-tealAccent focus:bg-white transition-all hover:border-legalDark/40`}
                      />
                    </div>
                    {errors.propertyValue && (
                      <p className="text-red-500 text-xs mt-0.5">{errors.propertyValue}</p>
                    )}
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={handleNextToStep2}
                      className="w-full sm:w-auto bg-legalDark text-white font-bold px-8 py-3.5 rounded-xl hover:bg-legalNavy transition-all flex items-center justify-center gap-2 group text-xs uppercase tracking-wider shadow-md"
                    >
                      <span>Continue to Enquiries</span>
                      <ArrowRight className="w-4 h-4 text-tealAccent group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              )}

              {/* ========================================================= */}
              {/* STEP 2: TRANSACTION-SPECIFIC CONDITIONAL ENQUIRIES        */}
              {/* ========================================================= */}
              {step === 2 && (
                <div className="space-y-6">
                  {/* PURCHASE ENQUIRIES (User Image 1) */}
                  {(transactionType === "Purchase" || transactionType === "Sale & Purchase") && (
                    <div className="space-y-5">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold font-serif text-legalDark mb-1">
                          Purchase Details
                        </h3>
                        <p className="text-textMuted text-xs sm:text-sm">
                          To ensure the quote we provide is accurate, please answer these purchase enquiries.
                        </p>
                      </div>

                      {/* 1. Freehold or Leasehold */}
                      <SelectionGroup
                        label="Is the property Freehold or Leasehold?"
                        options={["Freehold", "Leasehold", "Unsure"]}
                        value={purchaseTenure}
                        onChange={setPurchaseTenure}
                      />

                      {/* 2. New Build */}
                      <SelectionGroup
                        label="Is the property a new build?"
                        options={["No", "Yes"]}
                        value={purchaseNewBuild}
                        onChange={setPurchaseNewBuild}
                      />

                      {/* 3. First Time Buyer */}
                      <SelectionGroup
                        label="Are you a first time buyer?"
                        options={["No", "Yes"]}
                        value={purchaseFirstTimeBuyer}
                        onChange={setPurchaseFirstTimeBuyer}
                      />

                      {/* 4. Second home / Buy to Let */}
                      <SelectionGroup
                        label="Is this a second home or a Buy to Let property?"
                        options={["No", "Yes"]}
                        value={purchaseSecondHome}
                        onChange={setPurchaseSecondHome}
                      />

                      {/* 5. Right to Buy */}
                      <SelectionGroup
                        label="Are you purchasing using the Right to Buy Scheme?"
                        options={["No", "Yes"]}
                        value={purchaseRightToBuy}
                        onChange={setPurchaseRightToBuy}
                      />

                      {/* 6. Shared Ownership */}
                      <SelectionGroup
                        label="Are you buying the property through a Shared Ownership scheme?"
                        options={["No", "Housing Association", "Help to Buy"]}
                        value={purchaseSharedOwnership}
                        onChange={setPurchaseSharedOwnership}
                      />

                      {/* 7. Deed Names */}
                      <SelectionGroup
                        label="How many names will be on the purchase property deed?"
                        options={["One", "Two", "Three or more"]}
                        value={purchaseDeedNames}
                        onChange={setPurchaseDeedNames}
                      />

                      {/* 8. Lifetime / Help to Buy ISA */}
                      <SelectionGroup
                        label="Are you using the Lifetime ISA or Help to Buy ISA saving schemes?"
                        options={["No", "Yes"]}
                        value={purchaseLifetimeIsa}
                        onChange={setPurchaseLifetimeIsa}
                      />

                      {/* 9. Mortgage */}
                      <SelectionGroup
                        label="Will you buy the property with help of a new mortgage?"
                        options={["No", "Yes"]}
                        value={purchaseMortgage}
                        onChange={setPurchaseMortgage}
                      />
                    </div>
                  )}

                  {/* RE-MORTGAGE / TRANSFER OF EQUITY ENQUIRIES ("Your New Arrangement" - Image 2) */}
                  {(transactionType === "Re-Mortgage" || transactionType === "Transfer of Equity") && (
                    <div className="space-y-5">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold font-serif text-legalDark mb-1">
                          Your New Arrangement
                        </h3>
                        <p className="text-textMuted text-xs sm:text-sm">
                          Understanding your new lending requirements ensures a smooth transition between providers.
                        </p>
                      </div>

                      {/* New Mortgage Value */}
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-legalDark/90">
                          What is your new mortgage value? (Eg : £10000) *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <PoundSterling className="h-4 w-4 text-legalDark/40" />
                          </div>
                          <input
                            type="number"
                            placeholder="e.g. 250000"
                            value={remortgageValue}
                            onChange={(e) => setRemortgageValue(e.target.value)}
                            className="w-full bg-lightBg border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-xs text-legalDark focus:bg-white focus:outline-none focus:border-tealAccent"
                          />
                        </div>
                      </div>

                      {/* Current Lender */}
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-legalDark/90">
                          Who is your current lender?
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Nationwide, Barclays, Halifax"
                          value={currentLender}
                          onChange={(e) => setCurrentLender(e.target.value)}
                          className="w-full bg-lightBg border border-gray-200 rounded-xl px-4 py-3 text-xs text-legalDark focus:bg-white focus:outline-none focus:border-tealAccent"
                        />
                      </div>

                      {/* Proposed New Lender */}
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-legalDark/90">
                          Who is your proposed new lender?
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Santander, HSBC, NatWest"
                          value={proposedLender}
                          onChange={(e) => setProposedLender(e.target.value)}
                          className="w-full bg-lightBg border border-gray-200 rounded-xl px-4 py-3 text-xs text-legalDark focus:bg-white focus:outline-none focus:border-tealAccent"
                        />
                      </div>

                      {/* Current Mortgage Account Number */}
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold text-legalDark/90">
                          What is your current mortgage account number?
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 1234567890"
                          value={currentMortgageAccNum}
                          onChange={(e) => setCurrentMortgageAccNum(e.target.value)}
                          className="w-full bg-lightBg border border-gray-200 rounded-xl px-4 py-3 text-xs text-legalDark focus:bg-white focus:outline-none focus:border-tealAccent"
                        />
                      </div>

                      {/* Transfer of Equity Selection */}
                      <SelectionGroup
                        label="Does this remortgage involve a Transfer of Equity?"
                        options={["Yes", "No"]}
                        value={remortgageTransferOfEquity}
                        onChange={setRemortgageTransferOfEquity}
                      />
                    </div>
                  )}

                  {/* SALE ENQUIRIES (User Image 3) */}
                  {transactionType === "Sale" && (
                    <div className="space-y-5">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold font-serif text-legalDark mb-1">
                          Sale Enquiries
                        </h3>
                        <p className="text-textMuted text-xs sm:text-sm">
                          Please answer these brief questions about your sale property.
                        </p>
                      </div>

                      {/* Sale Tenure */}
                      <SelectionGroup
                        label="Is the property Freehold or Leasehold?"
                        options={["Freehold", "Leasehold"]}
                        value={saleTenure}
                        onChange={setSaleTenure}
                      />

                      {/* Existing Mortgage */}
                      <SelectionGroup
                        label="Is there an existing mortgage to pay off with the sale proceeds?"
                        options={["No", "Yes"]}
                        value={saleExistingMortgage}
                        onChange={setSaleExistingMortgage}
                      />

                      {/* Names on Deed */}
                      <SelectionGroup
                        label="How many names will be on the sale property deed?"
                        options={["One", "Two", "Three or more"]}
                        value={saleDeedNames}
                        onChange={setSaleDeedNames}
                      />
                    </div>
                  )}

                  {/* Step 2 Buttons */}
                  <div className="pt-4 flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="inline-flex items-center gap-2 bg-white border border-gray-200 text-legalDark font-semibold text-xs uppercase tracking-wider px-5 py-3.5 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNextToStep3}
                      className="inline-flex items-center gap-2 bg-legalDark text-white font-bold px-7 py-3.5 rounded-xl hover:bg-legalNavy transition-all text-xs uppercase tracking-wider shadow-md"
                    >
                      <span>Continue to Contact</span>
                      <ArrowRight className="w-4 h-4 text-tealAccent" />
                    </button>
                  </div>
                </div>
              )}

              {/* ========================================================= */}
              {/* STEP 3: COMPULSORY CONTACT DETAILS & SUBMIT               */}
              {/* ========================================================= */}
              {step === 3 && (
                <form onSubmit={handleFinalSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-serif text-legalDark mb-1">
                      {leadOnly ? "Where Should We Send Your Quote?" : "Where Should We Send Your Quote?"}
                    </h3>
                    <p className="text-textMuted text-xs sm:text-sm">
                      {leadOnly
                        ? "Please provide your contact details so our legal team can review your requirements and provide you with a tailored quote."
                        : "Please enter your contact details. Your instant quote will display on screen immediately and an itemised copy will be sent to your email."}
                    </p>
                  </div>

                  {/* Full Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-legalDark/90 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-tealAccent" /> Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Smith"
                      value={clientName}
                      onChange={(e) => {
                        setClientName(e.target.value);
                        if (errors.clientName) setErrors({ ...errors, clientName: "" });
                      }}
                      className={`w-full bg-lightBg border ${errors.clientName ? "border-red-400 bg-red-50/20" : "border-gray-200"} rounded-xl px-4 py-3 text-xs text-legalDark focus:bg-white focus:outline-none focus:border-tealAccent transition-colors`}
                    />
                    {errors.clientName && (
                      <p className="text-red-500 text-xs mt-0.5">{errors.clientName}</p>
                    )}
                  </div>

                  {/* Contact Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-legalDark/90 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-tealAccent" /> Contact Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 07123 456789"
                      value={clientPhone}
                      onChange={(e) => {
                        setClientPhone(e.target.value);
                        if (errors.clientPhone) setErrors({ ...errors, clientPhone: "" });
                      }}
                      className={`w-full bg-lightBg border ${errors.clientPhone ? "border-red-400 bg-red-50/20" : "border-gray-200"} rounded-xl px-4 py-3 text-xs text-legalDark focus:bg-white focus:outline-none focus:border-tealAccent transition-colors`}
                    />
                    {errors.clientPhone && (
                      <p className="text-red-500 text-xs mt-0.5">{errors.clientPhone}</p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-legalDark/90 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-tealAccent" /> Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john.smith@example.com"
                      value={clientEmail}
                      onChange={(e) => {
                        setClientEmail(e.target.value);
                        if (errors.clientEmail) setErrors({ ...errors, clientEmail: "" });
                      }}
                      className={`w-full bg-lightBg border ${errors.clientEmail ? "border-red-400 bg-red-50/20" : "border-gray-200"} rounded-xl px-4 py-3 text-xs text-legalDark focus:bg-white focus:outline-none focus:border-tealAccent transition-colors`}
                    />
                    {errors.clientEmail && (
                      <p className="text-red-500 text-xs mt-0.5">{errors.clientEmail}</p>
                    )}
                  </div>

                  {/* Privacy note */}
                  <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-100 text-[11px] text-legalDark/80">
                    <p>
                      <strong>Your privacy is protected:</strong> We will only use your details to contact you regarding your conveyancing quote request. Zero spam guaranteed.
                    </p>
                  </div>

                  {/* Step 3 Buttons */}
                  <div className="pt-4 flex items-center justify-between gap-4">
                    <button
                      type="button"
                      onClick={() => setStep(transactionType.startsWith("Commercial") ? 1 : 2)}
                      className="inline-flex items-center gap-2 bg-white border border-gray-200 text-legalDark font-semibold text-xs uppercase tracking-wider px-5 py-3.5 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 bg-legalDark text-white font-bold px-7 py-3.5 rounded-xl hover:bg-legalNavy transition-all text-xs uppercase tracking-wider shadow-md disabled:opacity-50"
                    >
                      <span>
                        {isSubmitting
                          ? "Submitting..."
                          : leadOnly
                          ? "Request A Quote"
                          : "Calculate & Email Instant Quote"}
                      </span>
                      <ArrowRight className="w-4 h-4 text-tealAccent" />
                    </button>
                  </div>
                </form>
              )}
            </>
          )}

            </div>
          </motion.div>
        </div>

        {/* ========================================================= */}
        {/* INSTANT QUOTE RESULTS MODAL                               */}
        {/* ========================================================= */}
        <AnimatePresence>
          {showQuote && quoteResult && (
            <div className="fixed inset-0 z-[999] flex items-start justify-center pt-28 pb-6 px-3 sm:px-6 overflow-y-auto">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={resetQuote}
                className="fixed inset-0 bg-black/75 backdrop-blur-sm"
              />

              {/* Modal Card */}
              <motion.div
                id="quote-result"
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 w-full max-w-4xl max-h-[calc(100vh-8.5rem)] bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-legalDark/10 flex flex-col overflow-hidden"
              >
                {/* Pinned Modal Header (Always Visible) */}
                <div className="bg-white px-5 sm:px-8 py-4 border-b border-gray-100 flex items-center justify-between gap-4 shrink-0">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-full bg-teal-50 border border-teal-200/60 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-5 h-5 text-teal-600" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold font-serif text-legalDark truncate">
                        {quoteResult.type === "COMMERCIAL" 
                          ? "Commercial Conveyancing Request"
                          : quoteResult.type === "POA"
                          ? "Price on Application"
                          : "Your Itemised Instant Quote"}
                      </h3>
                      <p className="text-textMuted text-xs truncate">
                        {transactionType} • {quoteResult.tenureType} • {formatCurrency(quoteResult.propertyValue)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    {quoteResult.type !== "COMMERCIAL" && quoteResult.type !== "POA" && (
                      <div className="text-right hidden sm:block bg-warmGray/60 px-3.5 py-1.5 rounded-xl border border-gray-100">
                        <span className="text-[10px] text-textMuted uppercase font-semibold block leading-none">Total (Inc. VAT)</span>
                        <span className="text-base sm:text-lg font-serif font-bold text-legalDark">{formatCurrency(quoteResult.totalIncVat)}</span>
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={resetQuote}
                      className="p-2.5 rounded-full bg-warmGray/80 hover:bg-legalDark hover:text-white text-legalDark transition-colors shrink-0"
                      aria-label="Close Quote Modal"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Scrollable Modal Body */}
                <div className="flex-1 overflow-y-auto px-5 sm:px-8 py-5">
                  {quoteResult.type === "COMMERCIAL" ? (
                    <div className="text-center py-4 px-2">
                      <div className="inline-flex p-4 bg-teal-50 text-teal-800 rounded-full mb-5">
                        <Building2 className="w-8 h-8 text-teal-600" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold font-serif text-legalDark mb-3">Commercial Conveyancing Request</h3>
                      <div className="p-5 bg-emerald-50/80 rounded-2xl border border-emerald-200/80 mb-6 max-w-2xl mx-auto space-y-3 text-left">
                        <p className="text-legalDark text-sm sm:text-base font-medium leading-relaxed">
                          * Thank you, <strong>{quoteResult.clientName}</strong>. For commercial properties, to ensure we provide the most accurate, custom-tailored pricing for your specific transaction, one of our commercial specialists will review your information and email you directly at <strong>{quoteResult.clientEmail}</strong>. Alternatively, please call us on <a href="tel:02037636767" className="font-bold underline text-tealAccent">020 3763 6767</a> and speak to one of our friendly team members right away. We look forward to speaking with you!
                        </p>
                      </div>

                      <div className="mb-6 p-4 bg-emerald-50 border border-emerald-300 rounded-2xl text-center max-w-2xl mx-auto">
                        <p className="text-xs sm:text-sm font-bold text-legalDark leading-relaxed">
                          * We may have seasonal discounts available for your quote. Please get in touch at{" "}
                          <a href="tel:02037636767" className="underline text-tealAccent hover:text-emerald-700 font-extrabold">
                            020 3763 6767
                          </a>{" "}
                          to discuss
                        </p>
                      </div>

                      <div className="flex justify-center gap-4 flex-wrap">
                        <a href="tel:02037636767" className="inline-flex items-center gap-2 bg-tealAccent text-white font-bold px-6 py-3.5 rounded-xl hover:bg-emerald-600 transition-all text-xs uppercase tracking-wider shadow-md">
                          <Phone className="w-4 h-4 text-white" /> Call 020 3763 6767
                        </a>
                        <a href="mailto:info@qconveyancing.com" className="inline-flex items-center gap-2 border border-legalDark/20 px-6 py-3.5 rounded-xl hover:bg-legalDark/5 transition-all text-xs uppercase tracking-wider font-bold text-legalDark">
                          <Mail className="w-4 h-4 text-tealAccent" /> Email Commercial Team
                        </a>
                      </div>
                    </div>
                  ) : quoteResult.type === "POA" ? (
                    <div className="text-center py-4">
                      <div className="inline-flex p-4 bg-amber-50 rounded-full mb-5">
                        <AlertCircle className="w-8 h-8 text-amber-500" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold font-serif mb-3">Price on Application</h3>
                      <p className="text-textMuted text-sm max-w-2xl mx-auto mb-6">
                        For bespoke or ultra high value properties over £5,000,000, our senior partner will contact you directly at {quoteResult.clientEmail} to provide custom pricing.
                      </p>

                      <div className="mb-6 p-4 bg-emerald-50 border border-emerald-300 rounded-2xl text-center max-w-2xl mx-auto">
                        <p className="text-xs sm:text-sm font-bold text-legalDark leading-relaxed">
                          * We may have seasonal discounts available for your quote. Please get in touch at{" "}
                          <a href="tel:02037636767" className="underline text-tealAccent hover:text-emerald-700 font-extrabold">
                            020 3763 6767
                          </a>{" "}
                          to discuss
                        </p>
                      </div>

                      <div className="flex justify-center gap-4 flex-wrap">
                        <a href="tel:02037636767" className="inline-flex items-center gap-2 bg-tealAccent text-white font-bold px-6 py-3 rounded-xl hover:shadow-lg transition-all text-xs uppercase tracking-wider">
                          <Phone className="w-4 h-4 text-white" /> Call 020 3763 6767
                        </a>
                        <a href="mailto:info@qconveyancing.com" className="inline-flex items-center gap-2 border border-legalDark/20 px-6 py-3 rounded-xl hover:bg-legalDark/5 transition-all text-xs uppercase tracking-wider font-semibold text-legalDark">
                          <Mail className="w-4 h-4 text-tealAccent" /> Email Us
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div>
                      {/* Email Confirmation Notice */}
                      {quoteResult.clientEmail && (
                        <div className="mb-5 p-3.5 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200/80 text-xs font-medium flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>Instant quote copy sent to <strong className="underline">{quoteResult.clientEmail}</strong></span>
                          </div>
                          <span className="hidden sm:inline-block text-[11px] bg-emerald-100/80 px-2 py-0.5 rounded text-emerald-800 font-semibold">
                            Quote Dispatched
                          </span>
                        </div>
                      )}

                      {/* Mobile Total Display */}
                      <div className="sm:hidden mb-4 p-3.5 bg-warmGray/60 rounded-xl border border-gray-100 flex items-center justify-between">
                        <span className="text-xs text-textMuted uppercase font-semibold">Total (Inc. VAT)</span>
                        <span className="text-2xl font-serif font-bold text-legalDark">{formatCurrency(quoteResult.totalIncVat)}</span>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 my-2">
                        {/* Left Column - Fee Breakdown */}
                        <div className="space-y-3">
                          <h4 className="font-semibold font-serif text-base sm:text-lg text-legalDark mb-2">Itemised Fee Breakdown</h4>
                          
                          {/* Base Fee */}
                          <div className="flex justify-between items-start py-2 border-b border-gray-100 text-xs">
                            <div>
                              <span className="font-semibold text-legalDark">{quoteResult.breakdown.baseFee.label}</span>
                              {quoteResult.breakdown.baseFee.details?.length > 0 && (
                                <div className="text-textMuted mt-1 space-y-1 pl-2">
                                  {quoteResult.breakdown.baseFee.details.map((detail: any, i: number) => (
                                    <div key={i} className="flex justify-between gap-8">
                                      <span>{detail.label}</span>
                                      <span>{formatCurrency(detail.amount)}</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                            <span className="font-bold text-legalDark">{formatCurrency(quoteResult.breakdown.baseFee.amount)}</span>
                          </div>

                          {/* Admin Fee (Only if applicable) */}
                          {quoteResult.breakdown.adminFee?.amount > 0 && (
                            <div className="flex justify-between py-2 border-b border-gray-100 text-xs">
                              <span className="font-semibold text-legalDark">{quoteResult.breakdown.adminFee.label}</span>
                              <span className="font-bold text-legalDark">{formatCurrency(quoteResult.breakdown.adminFee.amount)}</span>
                            </div>
                          )}

                          {/* ID Checks */}
                          <div className="flex justify-between py-2 border-b border-gray-100 text-xs">
                            <div>
                              <span className="font-semibold text-legalDark">{quoteResult.breakdown.idChecks.label}</span>
                              <div className="text-[11px] text-textMuted">{formatCurrency(quoteResult.breakdown.idChecks.perPerson)} per client</div>
                            </div>
                            <span className="font-bold text-legalDark">{formatCurrency(quoteResult.breakdown.idChecks.amount)}</span>
                          </div>

                          {/* Source of Funds Checks */}
                          {quoteResult.breakdown.sourceOfFunds && (
                            <div className="flex justify-between py-2 border-b border-gray-100 text-xs">
                              <div>
                                <span className="font-semibold text-legalDark">{quoteResult.breakdown.sourceOfFunds.label}</span>
                                <div className="text-[11px] text-textMuted">{formatCurrency(quoteResult.breakdown.sourceOfFunds.perPerson)} per client (Mandatory AML)</div>
                              </div>
                              <span className="font-bold text-legalDark">{formatCurrency(quoteResult.breakdown.sourceOfFunds.amount)}</span>
                            </div>
                          )}

                          {/* Telegraphic Transfer (TT) Fee */}
                          {quoteResult.breakdown.ttFee && (
                            <div className="flex justify-between py-2 border-b border-gray-100 text-xs">
                              <div>
                                <span className="font-semibold text-legalDark">{quoteResult.breakdown.ttFee.label}</span>
                                <div className="text-[11px] text-textMuted">Electronic transfer on completion</div>
                              </div>
                              <span className="font-bold text-legalDark">{formatCurrency(quoteResult.breakdown.ttFee.amount)}</span>
                            </div>
                          )}

                          {/* Tenure Fees */}
                          {quoteResult.breakdown.tenureFees.amount > 0 && (
                            <div className="flex justify-between items-start py-2 border-b border-gray-100 text-xs">
                              <div>
                                <span className="font-semibold text-legalDark">{quoteResult.breakdown.tenureFees.label}</span>
                                {quoteResult.breakdown.tenureFees.details?.length > 0 && (
                                  <div className="text-textMuted mt-1 space-y-1 pl-2">
                                    {quoteResult.breakdown.tenureFees.details.map((detail: any, i: number) => (
                                      <div key={i} className="flex justify-between gap-8">
                                        <span>{detail.label}</span>
                                        <span>{formatCurrency(detail.amount)}</span>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                              <span className="font-bold text-legalDark">{formatCurrency(quoteResult.breakdown.tenureFees.amount)}</span>
                            </div>
                          )}

                          {/* Add-ons from Questionnaire */}
                          {quoteResult.breakdown.addOns.amount > 0 && (
                            <div className="flex justify-between items-start py-2 border-b border-gray-100 text-xs">
                              <div>
                                <span className="font-semibold text-legalDark">{quoteResult.breakdown.addOns.label}</span>
                                {quoteResult.breakdown.addOns.details?.length > 0 && (
                                  <div className="text-textMuted mt-1 space-y-1 pl-2">
                                    {quoteResult.breakdown.addOns.details.map((detail: any, i: number) => (
                                      <div key={i} className="flex justify-between gap-8">
                                        <span>{detail.label}</span>
                                        <span>{formatCurrency(detail.amount)}</span>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                              <span className="font-bold text-legalDark">{formatCurrency(quoteResult.breakdown.addOns.amount)}</span>
                            </div>
                          )}
                        </div>

                        {/* Right Column - Summary & Included services */}
                        <div className="space-y-3">
                          <h4 className="font-semibold font-serif text-base sm:text-lg text-legalDark mb-2">Quote Summary</h4>
                          
                          <div className="bg-warmGray/50 rounded-2xl p-4 sm:p-5 space-y-2.5 border border-gray-100">
                            <div className="flex justify-between text-xs text-textMuted">
                              <span>Subtotal (Excl. VAT)</span>
                              <span className="font-semibold text-legalDark">{formatCurrency(quoteResult.subtotal)}</span>
                            </div>
                            <div className="flex justify-between text-xs text-textMuted">
                              <span>VAT (20%)</span>
                              <span className="font-semibold text-legalDark">{formatCurrency(quoteResult.vatAmount)}</span>
                            </div>
                            <div className="h-[1px] bg-gray-200 my-1.5"></div>
                            <div className="flex justify-between text-base font-serif font-bold text-legalDark">
                              <span>Total (Inc. VAT)</span>
                              <span className="text-legalDark">{formatCurrency(quoteResult.totalIncVat)}</span>
                            </div>
                          </div>

                          <div className="p-3.5 bg-tealAccent/10 rounded-2xl border border-tealAccent/20 text-xs text-legalDark space-y-1">
                            <p className="font-bold">Included in Your Legal Quote:</p>
                            <ul className="list-disc list-inside text-textMuted space-y-0.5 text-[11px]">
                              <li>Full legal work for your {transactionType.toLowerCase()}</li>
                              <li>Land Registry registration & SDLT submission</li>
                              <li>Mortgage lender compliance & deed drafting</li>
                            </ul>
                          </div>

                          <div className="flex gap-3 pt-1">
                            <a
                              href="tel:02037636767"
                              className="flex-1 inline-flex items-center justify-center gap-2 bg-legalDark text-white px-4 py-3 rounded-xl hover:bg-legalNavy transition-all text-xs font-bold uppercase tracking-wider shadow-sm"
                            >
                              <Phone className="w-3.5 h-3.5 text-tealAccent" /> Speak to Lawyer
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Bold Seasonal Discount Note at End of Quote */}
                      <div className="mt-5 p-4 bg-emerald-50/90 border-2 border-emerald-400/80 rounded-2xl text-center shadow-xs">
                        <p className="text-xs sm:text-sm font-bold text-legalDark leading-relaxed">
                          * We may have seasonal discounts available for your quote. Please get in touch at{" "}
                          <a href="tel:02037636767" className="underline text-tealAccent hover:text-emerald-700 font-extrabold">
                            020 3763 6767
                          </a>{" "}
                          to discuss
                        </p>
                      </div>

                      <div className="mt-2.5 text-center pb-2">
                        <p className="text-[11px] text-textMuted leading-relaxed">
                          * Indicative quote for standard property transactions. Final fees may vary if your transaction becomes unusually complex or protracted. All fees subject to VAT at 20%.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}