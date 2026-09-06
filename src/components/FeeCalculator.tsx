"use client";

import { useState, useRef } from "react";
import { Calculator, PoundSterling, ArrowRight, Home, FileText, AlertCircle, CheckCircle, Info, Phone, Mail, Printer, X, Building2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FeeCalculator() {
  // Form State
  const [transactionType, setTransactionType] = useState<string>("Purchase");
  const [tenureType, setTenureType] = useState<string>("Freehold");
  const [clients, setClients] = useState<number>(1);
  const [propertyValue, setPropertyValue] = useState<string>("");
  const [isLeasehold, setIsLeasehold] = useState<boolean>(false);
  const [hasManagementCompany, setHasManagementCompany] = useState<boolean>(false);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  
  // Result State
  const [quoteResult, setQuoteResult] = useState<any>(null);
  const [showQuote, setShowQuote] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ propertyValue?: string }>({});
  
  // Ref for print content
  const printRef = useRef<HTMLDivElement>(null);

  // Price Tables based on provided data
  const PRICE_TABLES: Record<string, { min: number; max: number; fee: number | "POA" }[]> = {
    Purchase: [
      { min: 0, max: 250000, fee: 999 },
      { min: 250001, max: 350000, fee: 1099 },
      { min: 350001, max: 500000, fee: 1399 },
      { min: 500001, max: 600000, fee: 1499 },
      { min: 600001, max: 750000, fee: 1799 },
      { min: 750001, max: 950000, fee: 1999 },
      { min: 950001, max: 1000000, fee: 2100 },
      { min: 1000001, max: 1500000, fee: 2800 },
      { min: 1500001, max: 2000000, fee: 3800 },
      { min: 2000001, max: Infinity, fee: "POA" }
    ],
    Sale: [
      { min: 0, max: 300000, fee: 999 },
      { min: 300001, max: 500000, fee: 1299 },
      { min: 500001, max: 600000, fee: 1399 },
      { min: 600001, max: 700000, fee: 1599 },
      { min: 700001, max: 800000, fee: 1899 },
      { min: 800001, max: 950000, fee: 2099 },
      { min: 950001, max: Infinity, fee: "POA" }
    ],
    "Re-Mortgage": [
      { min: 0, max: 500000, fee: 699 },
      { min: 500001, max: 700000, fee: 999 },
      { min: 700001, max: 900000, fee: 1099 },
      { min: 900001, max: Infinity, fee: "POA" }
    ]
  };

  // Additional Fees based on provided data
  const ADDITIONAL_FEES: Record<string, Record<string, number>> = {
    Leasehold: {
      "Search Pack Related Fees": 450,
      "Deed of Covenant": 275,
      "Leasehold Fee": 375,
      "Notice of Assignment": 150,
      "Notice of Charge": 150,
      "Service Deed / Compliance Certificate": 275,
      "Shared Ownership Leases": 450,
      "Management Company Share": 275
    },
    Freehold: {
      "Resident's Association/Management Company": 350,
      "Service Deed / Compliance Certificate": 275,
      "Notice of Assignment": 150,
      "Notice of Charge": 150
    },
    General: {
      "Acting on behalf of Lender": 350,
      "Dealing with Lender's Solicitors": 350,
      "Transfer of Equity": 699,
      "Declaration of Trust": 750,
      "Help to Buy": 550,
      "Newly Built Property": 450,
      "Retirement Property": 500,
      "Right to Buy": 450,
      "Auction Purchase": 500
    }
  };

  const ADMIN_FEE = 150;
  const ID_CHECK_FEE = 95;
  const VAT_RATE = 0.20;

  // Get fee from price table with explicit TypeScript types
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

  // Calculate leasehold fees
  const calculateLeaseholdFees = (): number => {
    if (!isLeasehold) return 0;
    
    let total = 0;
    const standardFees = [
      ADDITIONAL_FEES.Leasehold["Deed of Covenant"],
      ADDITIONAL_FEES.Leasehold["Leasehold Fee"]
    ];
    
    standardFees.forEach(fee => {
      if (fee) total += fee;
    });

    selectedAddOns.forEach(addon => {
      if (ADDITIONAL_FEES.Leasehold[addon]) {
        total += ADDITIONAL_FEES.Leasehold[addon];
      }
    });

    return total;
  };

  // Calculate freehold fees
  const calculateFreeholdFees = (): number => {
    if (isLeasehold) return 0;
    
    let total = 0;
    if (hasManagementCompany) {
      total += ADDITIONAL_FEES.Freehold["Resident's Association/Management Company"] || 0;
    }

    selectedAddOns.forEach(addon => {
      if (ADDITIONAL_FEES.Freehold[addon]) {
        total += ADDITIONAL_FEES.Freehold[addon];
      }
    });

    return total;
  };

  // Calculate general add-ons
  const calculateGeneralAddOns = (): number => {
    let total = 0;
    selectedAddOns.forEach(addon => {
      if (ADDITIONAL_FEES.General[addon]) {
        total += ADDITIONAL_FEES.General[addon];
      }
    });
    return total;
  };

  // Main calculation function
  const calculateQuote = () => {
    // Validation
    const newErrors: { propertyValue?: string } = {};
    if (!propertyValue || parseFloat(propertyValue) <= 0) {
      newErrors.propertyValue = "Please enter a valid property value";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});

    const value = parseFloat(propertyValue);
    let baseFee = 0;
    let saleFee = 0;
    let purchaseFee = 0;
    let isPOA = false;

    // Handle Commercial Purchase or Commercial Sale
    if (transactionType === "Commercial Purchase" || transactionType === "Commercial Sale") {
      setQuoteResult({
        type: "COMMERCIAL",
        message: "* Thank you for requesting a commercial conveyancing quote with us. To ensure we provide the most accurate, custom-tailored pricing for your specific transaction, one of our commercial specialists will review your information and contact you. Alternatively, please call us on 020 3763 6767 and speak to one of our friendly team members right away. We look forward to speaking with you! If you have any urgent questions in the meantime, please feel free to give us a call or send us an email. We look forward to speaking with you!"
      });
      setShowQuote(true);
      return;
    }
    if (transactionType === "Sale & Purchase") {
      const saleResult = getBaseFee("Sale", value);
      const purchaseResult = getBaseFee("Purchase", value);
      
      if (saleResult === "POA" || purchaseResult === "POA" || saleResult === null || purchaseResult === null) {
        isPOA = true;
      } else {
        saleFee = saleResult;
        purchaseFee = purchaseResult;
        baseFee = saleFee + purchaseFee;
      }
    } else {
      const result = getBaseFee(transactionType, value);
      if (result === "POA" || result === null) {
        isPOA = true;
      } else {
        baseFee = result;
      }
    }

    // If POA, show contact message
    if (isPOA) {
      setQuoteResult({
        type: "POA",
        message: "For properties over £950,000 (Sale) or £2,000,000 (Purchase), please contact us for a bespoke quote."
      });
      setShowQuote(true);
      return;
    }

    // Calculate all fees
    const adminFee = ADMIN_FEE;
    const idCheckTotal = ID_CHECK_FEE * clients;
    const leaseholdFees = calculateLeaseholdFees();
    const freeholdFees = calculateFreeholdFees();
    const generalAddOns = calculateGeneralAddOns();

    // Subtotal before VAT
    const subtotal = baseFee + adminFee + idCheckTotal + leaseholdFees + freeholdFees + generalAddOns;

    // Calculate VAT
    const vatAmount = subtotal * VAT_RATE;
    const totalIncVat = subtotal + vatAmount;

    // Build breakdown
    const breakdown = {
      baseFee: {
        label: transactionType === "Sale & Purchase" 
          ? `${transactionType} Base Fees` 
          : `${transactionType} Fee`,
        amount: baseFee,
        details: transactionType === "Sale & Purchase" 
          ? [
              { label: "Sale Fee", amount: saleFee },
              { label: "Purchase Fee", amount: purchaseFee }
            ]
          : []
      },
      adminFee: {
        label: "Admin Fee",
        amount: adminFee
      },
      idChecks: {
        label: `Electronic ID Checks (${clients} client${clients > 1 ? 's' : ''})`,
        amount: idCheckTotal,
        perPerson: ID_CHECK_FEE
      },
      tenureFees: {
        label: isLeasehold ? "Leasehold Fees" : "Freehold Fees",
        amount: isLeasehold ? leaseholdFees : freeholdFees,
        details: isLeasehold 
          ? [
              { label: "Deed of Covenant", amount: 275 },
              { label: "Leasehold Fee", amount: 375 }
            ]
          : hasManagementCompany 
            ? [{ label: "Management Company Fee", amount: 350 }]
            : []
      },
      addOns: {
        label: "Additional Services",
        amount: generalAddOns,
        details: selectedAddOns
          .filter(addon => ADDITIONAL_FEES.General[addon])
          .map(addon => ({
            label: addon,
            amount: ADDITIONAL_FEES.General[addon]
          }))
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

    setQuoteResult({
      type: "calculated",
      breakdown,
      subtotal,
      vatAmount,
      totalIncVat,
      transactionType,
      propertyValue: value,
      tenureType,
      clients
    });
    setShowQuote(true);

    setTimeout(() => {
      document.getElementById('quote-result')?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }, 100);
  };

  // Format currency
  const formatCurrency = (amount: number | string) => {
    if (typeof amount === "string") return amount;
    if (!amount && amount !== 0) return "POA";
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Reset quote
  const resetQuote = () => {
    setShowQuote(false);
    setQuoteResult(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dedicated clean window print handler
  const handlePrint = () => {
    if (!quoteResult || quoteResult.type === "POA") return;

    const printWindow = window.open('', '_blank', 'width=800,height=900');
    if (!printWindow) {
      window.print();
      return;
    }

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Conveyancing Quote - Quality Conveyancing</title>
          <style>
            body { 
              font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
              padding: 40px;
              color: #2e4a3d;
              max-width: 800px;
              margin: 0 auto;
            }
            .header {
              border-bottom: 2px solid #2e4a3d;
              padding-bottom: 15px;
              margin-bottom: 25px;
              display: flex;
              justify-content: space-between;
              align-items: flex-end;
            }
            .brand {
              font-size: 24px;
              font-weight: bold;
              color: #2e4a3d;
            }
            .contact-info {
              font-size: 11px;
              color: #6b7280;
              text-align: right;
            }
            .quote-title {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 25px;
              padding-bottom: 15px;
              border-bottom: 1px solid #e5e7eb;
            }
            .quote-title h2 {
              font-size: 20px;
              margin: 0;
              color: #2e4a3d;
            }
            .quote-title .total {
              background: #eaf5eb;
              padding: 12px 20px;
              border-radius: 12px;
              text-align: right;
              border: 1px solid #A0D684;
            }
            .quote-title .total .label {
              font-size: 10px;
              text-transform: uppercase;
              color: #2e4a3d;
              font-weight: bold;
            }
            .quote-title .total .amount {
              font-size: 24px;
              font-weight: bold;
              color: #2e4a3d;
              margin: 0;
            }
            .grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 30px;
            }
            .fee-breakdown h4 {
              font-size: 15px;
              margin: 0 0 15px 0;
              color: #2e4a3d;
              border-bottom: 1px solid #e5e7eb;
              padding-bottom: 8px;
            }
            .fee-item {
              display: flex;
              justify-content: space-between;
              padding: 8px 0;
              border-bottom: 1px dashed #e5e7eb;
              font-size: 12px;
            }
            .fee-item .label {
              font-weight: 600;
            }
            .fee-item .amount {
              font-weight: 700;
            }
            .summary {
              background: #f9fafb;
              padding: 20px;
              border-radius: 12px;
              border: 1px solid #e5e7eb;
            }
            .summary-row {
              display: flex;
              justify-content: space-between;
              font-size: 12px;
              padding: 6px 0;
            }
            .summary-row.total-row {
              border-top: 1px solid #e5e7eb;
              margin-top: 8px;
              padding-top: 12px;
              font-size: 16px;
              font-weight: bold;
            }
            .footer {
              margin-top: 30px;
              padding-top: 15px;
              border-top: 1px solid #e5e7eb;
              font-size: 10px;
              color: #6b7280;
              text-align: center;
            }
            @media print {
              body { padding: 15px; }
              .no-print { display: none; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div>
              <div class="brand">Quality Conveyancing</div>
              <div style="font-size: 11px; color: #6b7280;">Ealing Cross, 1st Floor, 85 Uxbridge Road, London W5 5BW</div>
            </div>
            <div class="contact-info">
              <div><strong>Direct Line:</strong> 020 3763 6767</div>
              <div><strong>Email:</strong> info@qconveyancing.com</div>
              <div><strong>Date:</strong> ${new Date().toLocaleDateString('en-GB')}</div>
            </div>
          </div>

          <div class="quote-title">
            <div>
              <h2>Itemised Conveyancing Quote</h2>
              <div style="font-size: 12px; color: #6b7280; margin-top: 4px;">
                ${transactionType} (${tenureType}) | Property Value: ${formatCurrency(quoteResult.propertyValue)} | Clients: ${quoteResult.clients}
              </div>
            </div>
            <div class="total">
              <div class="label">Total (Inc. VAT)</div>
              <div class="amount">${formatCurrency(quoteResult.totalIncVat)}</div>
            </div>
          </div>

          <div class="grid">
            <div class="fee-breakdown">
              <h4>Fee Breakdown</h4>
              <div class="fee-item">
                <span class="label">${quoteResult.breakdown.baseFee.label}</span>
                <span class="amount">${formatCurrency(quoteResult.breakdown.baseFee.amount)}</span>
              </div>
              <div class="fee-item">
                <span class="label">${quoteResult.breakdown.adminFee.label}</span>
                <span class="amount">${formatCurrency(quoteResult.breakdown.adminFee.amount)}</span>
              </div>
              <div class="fee-item">
                <span class="label">${quoteResult.breakdown.idChecks.label}</span>
                <span class="amount">${formatCurrency(quoteResult.breakdown.idChecks.amount)}</span>
              </div>
              ${quoteResult.breakdown.tenureFees.amount > 0 ? `
                <div class="fee-item">
                  <span class="label">${quoteResult.breakdown.tenureFees.label}</span>
                  <span class="amount">${formatCurrency(quoteResult.breakdown.tenureFees.amount)}</span>
                </div>
              ` : ''}
              ${quoteResult.breakdown.addOns.amount > 0 ? `
                <div class="fee-item">
                  <span class="label">${quoteResult.breakdown.addOns.label}</span>
                  <span class="amount">${formatCurrency(quoteResult.breakdown.addOns.amount)}</span>
                </div>
              ` : ''}
            </div>

            <div>
              <div class="summary">
                <div class="summary-row">
                  <span>Subtotal (Excl. VAT)</span>
                  <span>${formatCurrency(quoteResult.subtotal)}</span>
                </div>
                <div class="summary-row">
                  <span>VAT (20%)</span>
                  <span>${formatCurrency(quoteResult.vatAmount)}</span>
                </div>
                <div class="summary-row total-row">
                  <span>Total Payable</span>
                  <span>${formatCurrency(quoteResult.totalIncVat)}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="footer">
            * Official indicative quote from Quality Conveyancing. All legal work performed by our highly skilled & experienced lawyers with transparent quotes. Regulated by the Council for Licensed Conveyancers (CLC Practice No. 11359).
          </div>

          <script>
            window.onload = function() {
              window.print();
              setTimeout(function() { window.close(); }, 500);
            };
          <\/script>
        </body>
      </html>
    `);
    
    printWindow.document.close();
  };

  return (
    <section className="py-28 md:py-40 bg-warmGray text-legalDark relative overflow-hidden" id="calculator">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-tealAccent opacity-[0.05] rounded-full blur-[150px] pointer-events-none mix-blend-multiply"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-tealAccent opacity-[0.03] rounded-full blur-[120px] pointer-events-none mix-blend-multiply"></div>

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 sticky top-28"
          >
            <div className="w-12 h-12 bg-tealAccent/20 rounded-xl flex items-center justify-center mb-8 border border-tealAccent/30">
              <Calculator className="text-tealAccent w-6 h-6" />
            </div>
            
            <p className="text-tealAccent text-sm font-semibold tracking-[0.2em] uppercase mb-4">Transparent Pricing</p>
            <h2 className="text-4xl md:text-5xl font-bold font-serif leading-[1.15] mb-6">
              Instant Conveyancing Fee Calculator
            </h2>
            <p className="text-textMuted text-lg leading-relaxed font-light mb-8">
              No hidden surprises. Calculate your exact conveyancing legal fees in seconds with our transparent pricing estimator.
            </p>

            <ul className="space-y-3.5">
              {[
                "*Transparent Quotes",
                "Highly Skilled & Experienced Lawyers",
                "Direct Solicitor Direct Dial Access",
                "Clear Itemised Disbursements Breakdown",
                "On panel of all major lenders",
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

            {/* Quick Info */}
            <div className="mt-8 p-4 bg-white/60 rounded-2xl border border-legalDark/10 shadow-sm">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-tealAccent mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs text-legalDark/80 leading-relaxed">
                    <span className="font-semibold text-legalDark">Note:</span> Transparent calculation tailored to your exact property price and transaction options. All fees subject to VAT at 20%.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <div className="bg-white border border-legalDark/10 rounded-2xl p-8 md:p-10 shadow-xl relative">
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-legalDark/5 pointer-events-none"></div>
              
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-8">
                
                {/* Transaction Type */}
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-semibold text-textMuted uppercase tracking-widest">What can we help you with?</label>
                  <div className="relative">
                    <select 
                      value={transactionType}
                      onChange={(e) => setTransactionType(e.target.value)}
                      className="w-full bg-lightBg border border-legalDark/20 rounded-lg px-4 py-4 text-legalDark focus:outline-none focus:border-tealAccent focus:bg-white transition-all appearance-none cursor-pointer hover:border-legalDark/40"
                    >
                      {Object.keys(PRICE_TABLES).map(type => (
                        <option key={type} value={type} className="bg-white text-legalDark">{type}</option>
                      ))}
                      <option value="Sale & Purchase" className="bg-white text-legalDark">Sale & Purchase</option>
                      <option value="Commercial Purchase" className="bg-white text-legalDark">Commercial Purchase</option>
                      <option value="Commercial Sale" className="bg-white text-legalDark">Commercial Sale</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-legalDark/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Property Value */}
                <div className="flex flex-col gap-3">
                  <label className="text-xs font-semibold text-textMuted uppercase tracking-widest">Property Value (£)</label>
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
                      className={`w-full bg-lightBg border ${errors.propertyValue ? 'border-red-400' : 'border-legalDark/20'} rounded-lg pl-10 pr-4 py-4 text-legalDark placeholder:text-legalDark/30 focus:outline-none focus:border-tealAccent focus:bg-white transition-all hover:border-legalDark/40`}
                    />
                  </div>
                  {errors.propertyValue && (
                    <p className="text-red-500 text-xs mt-1">{errors.propertyValue}</p>
                  )}
                </div>

                {/* Tenure Type */}
                <div className="flex flex-col gap-3 md:col-span-2">
                  <label className="text-xs font-semibold text-textMuted uppercase tracking-widest">Property Tenure</label>
                  <div className="flex bg-lightBg border border-legalDark/20 rounded-lg p-1.5 relative">
                    {['Freehold', 'Leasehold'].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => {
                          setTenureType(type);
                          setIsLeasehold(type === 'Leasehold');
                        }}
                        className={`flex-1 py-2.5 text-sm font-semibold rounded-md transition-all z-10 ${
                          tenureType === type ? 'text-white' : 'text-legalDark/60 hover:text-legalDark'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                    <motion.div 
                      layout
                      className="absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-tealAccent rounded-md z-0 shadow-sm"
                      animate={{ left: tenureType === 'Freehold' ? '6px' : 'calc(50% + 3px)' }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  </div>
                </div>

                {/* Leasehold Specific Options */}
                {isLeasehold && (
                  <div className="md:col-span-2 flex flex-col gap-3">
                    <label className="text-xs font-semibold text-textMuted uppercase tracking-widest">Leasehold Options</label>
                    <div className="flex flex-wrap gap-3">
                      {Object.keys(ADDITIONAL_FEES.Leasehold).map((option) => (
                        <label key={option} className="flex items-center gap-2 text-xs text-legalDark/80 hover:text-legalDark transition-colors cursor-pointer bg-lightBg px-3 py-2 rounded-lg border border-gray-200">
                          <input
                            type="checkbox"
                            checked={selectedAddOns.includes(option)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setSelectedAddOns([...selectedAddOns, option]);
                              } else {
                                setSelectedAddOns(selectedAddOns.filter(o => o !== option));
                              }
                            }}
                            className="rounded border-legalDark/30 text-tealAccent focus:ring-tealAccent"
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* General Add-ons */}
                <div className="md:col-span-2 flex flex-col gap-3">
                  <label className="text-xs font-semibold text-textMuted uppercase tracking-widest">Additional Services</label>
                  <div className="flex flex-wrap gap-3">
                    {Object.keys(ADDITIONAL_FEES.General).map((option) => (
                      <label key={option} className="flex items-center gap-2 text-xs text-legalDark/80 hover:text-legalDark transition-colors cursor-pointer bg-lightBg px-3 py-2 rounded-lg border border-gray-200">
                        <input
                          type="checkbox"
                          checked={selectedAddOns.includes(option)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedAddOns([...selectedAddOns, option]);
                            } else {
                              setSelectedAddOns(selectedAddOns.filter(o => o !== option));
                            }
                          }}
                          className="rounded border-legalDark/30 text-tealAccent focus:ring-tealAccent"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>

              </div>

              <div className="mt-10 pt-8 border-t border-legalDark/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <p className="text-xs text-textMuted font-light max-w-xs">
                  Your details are secure. We process all data in accordance with our Privacy Policy.
                </p>
                <div className="flex gap-3 w-full sm:w-auto">
                  {showQuote && (
                    <button 
                      type="button"
                      onClick={resetQuote}
                      className="px-6 py-3 rounded-lg border border-legalDark/20 hover:bg-legalDark/5 transition-colors text-xs font-semibold"
                    >
                      New Quote
                    </button>
                  )}
                  <button 
                    type="button"
                    onClick={calculateQuote}
                    className="w-full sm:w-auto bg-legalDark text-white font-bold px-8 py-3.5 rounded-xl hover:bg-legalNavy transition-all duration-300 flex items-center justify-center gap-2 group text-xs uppercase tracking-wider shadow-md"
                  >
                    {showQuote ? 'Update Quote' : 'Calculate Quote'}
                    <ArrowRight className="w-4 h-4 text-tealAccent group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
              
            </div>
          </motion.div>
        </div>

        {/* Quote Results Modal */}
        <AnimatePresence>
          {showQuote && quoteResult && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-22 overflow-y-auto">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={resetQuote}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              />

              {/* Modal Card */}
              <motion.div
                id="quote-result"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-legalDark/10 p-6 md:p-6 my-auto"
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={resetQuote}
                  className="absolute top-5 right-5 p-2.5 rounded-full bg-warmGray/60 hover:bg-legalDark hover:text-white text-legalDark transition-colors z-20"
                  aria-label="Close Quote Modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {quoteResult.type === "COMMERCIAL" ? (
                  <div className="text-center py-6 px-4">
                    <div className="inline-flex p-4 bg-teal-50 text-teal-800 rounded-full mb-6">
                      <Building2 className="w-8 h-8 text-teal-600" />
                    </div>
                    <h3 className="text-2xl font-bold font-serif text-legalDark mb-4">Commercial Conveyancing Request</h3>
                    <div className="p-6 bg-emerald-50/70 rounded-2xl border border-emerald-100 mb-8 max-w-2xl mx-auto">
                      <p className="text-legalDark text-sm sm:text-base font-bold leading-relaxed text-left">
                        {quoteResult.message}
                      </p>
                    </div>
                    <div className="flex justify-center gap-4 flex-wrap">
                      <a href="tel:02037636767" className="inline-flex items-center gap-2 bg-tealAccent text-legalDark font-bold px-6 py-3.5 rounded-xl hover:bg-teal-300 transition-all text-xs uppercase tracking-wider shadow-md">
                        <Phone className="w-4 h-4" /> Call 020 3763 6767
                      </a>
                      <a href="mailto:info@qconveyancing.com" className="inline-flex items-center gap-2 border border-legalDark/20 px-6 py-3.5 rounded-xl hover:bg-legalDark/5 transition-all text-xs uppercase tracking-wider font-bold">
                        <Mail className="w-4 h-4" /> Email Commercial Team
                      </a>
                    </div>
                  </div>
                ) : quoteResult.type === "POA" ? (
                  <div className="text-center py-6">
                    <div className="inline-flex p-4 bg-amber-50 rounded-full mb-6">
                      <AlertCircle className="w-8 h-8 text-amber-500" />
                    </div>
                    <h3 className="text-2xl font-bold font-serif mb-4">Price on Application</h3>
                    <p className="text-textMuted text-sm max-w-2xl mx-auto mb-8">
                      {quoteResult.message || "For this transaction type or value, please contact us directly for a bespoke quote tailored to your specific requirements."}
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap">
                      <a href="tel:02037636767" className="inline-flex items-center gap-2 bg-tealAccent text-legalDark font-bold px-6 py-3 rounded-xl hover:shadow-lg transition-all text-xs uppercase tracking-wider">
                        <Phone className="w-4 h-4" /> Call 020 3763 6767
                      </a>
                      <a href="mailto:info@qconveyancing.com" className="inline-flex items-center gap-2 border border-legalDark/20 px-6 py-3 rounded-xl hover:bg-legalDark/5 transition-all text-xs uppercase tracking-wider font-semibold">
                        <Mail className="w-4 h-4" /> Email Us
                      </a>
                    </div>
                  </div>
                ) : (
                  <div ref={printRef}>
                    {/* Print Header for Professional Output */}
                    <div className="hidden print:block mb-6 border-b border-gray-200 pb-4">
                      <h2 className="text-2xl font-bold font-serif text-legalDark">Quality Conveyancing</h2>
                      <p className="text-xs text-textMuted">Official Conveyancing Quote | Tel: 020 3763 6767 | info@qconveyancing.com</p>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start justify-between  gap-4 pb-6 border-b border-gray-100 pr-8">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <CheckCircle className="w-6 h-6 text-teal-600 no-print" />
                          <h3 className="text-2xl font-bold font-serif text-legalDark">Your Itemised Quote is Ready</h3>
                        </div>
                        <p className="text-textMuted text-xs sm:text-sm">
                          Based on a {transactionType} of a {tenureType.toLowerCase()} property valued at {formatCurrency(quoteResult.propertyValue)} with {quoteResult.clients} buyer{quoteResult.clients > 1 ? 's' : ''}
                        </p>
                      </div>
                      <div className="text-left md:text-right bg-warmGray/40 p-4 rounded-2xl border border-gray-100 shrink-0">
                        <p className="text-xs text-textMuted uppercase font-semibold">Total (Inc. VAT)</p>
                        <p className="text-3xl font-serif font-bold text-legalDark">{formatCurrency(quoteResult.totalIncVat)}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Left Column - Breakdown */}
                      <div className="space-y-4">
                        <h4 className="font-semibold font-serif text-lg text-legalDark mb-4">Fee Breakdown</h4>
                        
                        {/* Base Fee */}
                        <div className="flex justify-between items-start py-2.5 border-b border-gray-100 text-xs">
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

                        {/* Admin Fee */}
                        <div className="flex justify-between py-2.5 border-b border-gray-100 text-xs">
                          <span className="font-semibold text-legalDark">{quoteResult.breakdown.adminFee.label}</span>
                          <span className="font-bold text-legalDark">{formatCurrency(quoteResult.breakdown.adminFee.amount)}</span>
                        </div>

                        {/* ID Checks */}
                        <div className="flex justify-between py-2.5 border-b border-gray-100 text-xs">
                          <div>
                            <span className="font-semibold text-legalDark">{quoteResult.breakdown.idChecks.label}</span>
                            <div className="text-[11px] text-textMuted">{formatCurrency(quoteResult.breakdown.idChecks.perPerson)} per person</div>
                          </div>
                          <span className="font-bold text-legalDark">{formatCurrency(quoteResult.breakdown.idChecks.amount)}</span>
                        </div>

                        {/* Tenure Fees */}
                        {quoteResult.breakdown.tenureFees.amount > 0 && (
                          <div className="flex justify-between items-start py-2.5 border-b border-gray-100 text-xs">
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

                        {/* Add-ons */}
                        {quoteResult.breakdown.addOns.amount > 0 && (
                          <div className="flex justify-between items-start py-2.5 border-b border-gray-100 text-xs">
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

                      {/* Right Column - Summary */}
                      <div className="space-y-4">
                        <h4 className="font-semibold font-serif text-lg text-legalDark mb-4">Summary</h4>
                        
                        <div className="bg-warmGray/40 rounded-2xl p-6 space-y-3 border border-gray-100">
                          <div className="flex justify-between text-xs text-textMuted">
                            <span>Subtotal (Excl. VAT)</span>
                            <span className="font-semibold text-legalDark">{formatCurrency(quoteResult.subtotal)}</span>
                          </div>
                          <div className="flex justify-between text-xs text-textMuted">
                            <span>VAT (20%)</span>
                            <span className="font-semibold text-legalDark">{formatCurrency(quoteResult.vatAmount)}</span>
                          </div>
                          <div className="h-[1px] bg-gray-200 my-2"></div>
                          <div className="flex justify-between text-base font-serif font-bold text-legalDark">
                            <span>Total (Inc. VAT)</span>
                            <span className="text-legalDark">{formatCurrency(quoteResult.totalIncVat)}</span>
                          </div>
                        </div>

                        <div className="p-4 bg-tealAccent/10 rounded-2xl border border-tealAccent/20 text-xs text-legalDark space-y-1">
                          <p className="font-bold">Included in Your Legal Quote:</p>
                          <ul className="list-disc list-inside text-textMuted space-y-1">
                            <li>Full legal work for your {transactionType.toLowerCase()}</li>
                            <li>Land Registry registration & SDLT submission</li>
                            <li>Mortgage lender compliance & deed drafting</li>
                          </ul>
                        </div>

                        <div className="flex gap-3 pt-2 no-print">
                          <a
                            href="tel:02037636767"
                            className="flex-1 inline-flex items-center justify-center gap-2 bg-legalDark text-white px-4 py-3.5 rounded-xl hover:bg-legalNavy transition-all text-xs font-bold uppercase tracking-wider"
                          >
                            <Phone className="w-3.5 h-3.5 text-tealAccent" /> Speak to Lawyer
                          </a>
                          <button 
                            type="button"
                            onClick={handlePrint}
                            className="flex-1 inline-flex items-center justify-center gap-2 border border-gray-200 bg-white px-4 py-3.5 rounded-xl hover:bg-gray-50 transition-all text-xs font-semibold text-legalDark uppercase tracking-wider"
                          >
                            <Printer className="w-3.5 h-3.5" /> Print Quote
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100 space-y-2">
                      <p className="text-xs font-bold text-legalDark text-center leading-relaxed">
                        * We may have seasonal discounts available for your quote. Please get in touch at 020 3763 6767 to discuss
                      </p>
                      <p className="text-[11px] text-textMuted text-center leading-relaxed">
                        * Indicative quote for standard property transactions. Final fees may vary if your transaction becomes unusually complex or protracted. All fees subject to VAT at 20%.
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}