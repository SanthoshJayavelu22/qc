// Land Registry & SDLT Calculation Utility for Quality Conveyancing

/**
 * HM Land Registry Registration Fees (Scale 1 & Scale 2)
 * Based on official HM Land Registry Fee Order:
 * https://www.gov.uk/guidance/hm-land-registry-registration-services-fees
 */

// Scale 1: Applies to purchases, first registrations and new leases
export interface LandRegistryBracket {
  min: number;
  max: number;
  portalFee: number;
  postalOrNewLeaseFee: number;
}

export const HM_LAND_REGISTRY_SCALE_1: LandRegistryBracket[] = [
  { min: 0, max: 80000, portalFee: 20, postalOrNewLeaseFee: 45 },
  { min: 80001, max: 100000, portalFee: 40, postalOrNewLeaseFee: 95 },
  { min: 100001, max: 200000, portalFee: 100, postalOrNewLeaseFee: 230 },
  { min: 200001, max: 500000, portalFee: 150, postalOrNewLeaseFee: 330 },
  { min: 500001, max: 1000000, portalFee: 295, postalOrNewLeaseFee: 655 },
  { min: 1000001, max: Infinity, portalFee: 500, postalOrNewLeaseFee: 1105 },
];

// Scale 2: Applies to remortgages, transfers of equity and gifts
export const HM_LAND_REGISTRY_SCALE_2: LandRegistryBracket[] = [
  { min: 0, max: 100000, portalFee: 20, postalOrNewLeaseFee: 45 },
  { min: 100001, max: 200000, portalFee: 30, postalOrNewLeaseFee: 70 },
  { min: 200001, max: 500000, portalFee: 45, postalOrNewLeaseFee: 100 },
  { min: 500001, max: 1000000, portalFee: 65, postalOrNewLeaseFee: 145 },
  { min: 1000001, max: Infinity, portalFee: 140, postalOrNewLeaseFee: 305 },
];

/**
 * Calculates HM Land Registry registration fee.
 * If isNewBuild or new lease, the portal transfer of whole discount does not apply,
 * and the postal/part/new lease rate is applicable per Land Registry guidelines.
 */
export function calculateLandRegistryFee(
  value: number,
  scale: 1 | 2,
  isTransferOfPartOrNewLease: boolean = false
): number {
  if (value <= 0) return 0;
  const table = scale === 1 ? HM_LAND_REGISTRY_SCALE_1 : HM_LAND_REGISTRY_SCALE_2;
  const bracket = table.find((b) => value >= b.min && value <= b.max);
  if (!bracket) return 0;
  return isTransferOfPartOrNewLease ? bracket.postalOrNewLeaseFee : bracket.portalFee;
}

/**
 * Stamp Duty Land Tax (SDLT) Calculations
 * Based on official HMRC rates and https://www.stampdutycalculator.org.uk/
 *
 * Slabs:
 * 1. First Time Buyer:
 *    - 0% up to £300,000
 *    - 5% from £300,001 to £500,000
 *    - If price > £500,000, relief is withdrawn and standard Moving Home rates apply to the entire price.
 *
 * 2. Moving Home (Standard Residential / Main Residence):
 *    - 0% up to £125,000
 *    - 2% on £125,001 to £250,000
 *    - 5% on £250,001 to £925,000
 *    - 10% on £925,001 to £1,500,000
 *    - 12% above £1,500,000
 *
 * 3. Additional Property (Second Home / Buy to Let):
 *    - Additional 5% surcharge on all bands (effective from Autumn 2024 / current):
 *    - 5% up to £125,000
 *    - 7% on £125,001 to £250,000
 *    - 10% on £250,001 to £925,000
 *    - 15% on £925,001 to £1,500,000
 *    - 17% above £1,500,000
 */

export interface SDLTBreakdownBand {
  range: string;
  rate: number;
  taxableAmount: number;
  taxDue: number;
}

export interface SDLTResult {
  totalSDLT: number;
  category: "First Time Buyer" | "Moving Home" | "Additional Property";
  reliefApplied: boolean;
  reliefNote?: string;
  bands: SDLTBreakdownBand[];
}

export function calculateSDLT(
  purchasePrice: number,
  buyerType: "firstTimeBuyer" | "movingHome" | "additionalProperty"
): SDLTResult {
  if (purchasePrice <= 0) {
    return {
      totalSDLT: 0,
      category: "Moving Home",
      reliefApplied: false,
      bands: [],
    };
  }

  // 1. FIRST TIME BUYER
  if (buyerType === "firstTimeBuyer") {
    // If purchase price is over £500,000, relief is completely lost -> revert to standard Moving Home rates
    if (purchasePrice > 500000) {
      const standardResult = calculateSDLT(purchasePrice, "movingHome");
      return {
        ...standardResult,
        category: "First Time Buyer",
        reliefApplied: false,
        reliefNote:
          "First-time buyer relief is only available on properties up to £500,000. As the purchase price exceeds £500,000, standard residential SDLT rates apply.",
      };
    }

    const bands: SDLTBreakdownBand[] = [];
    let totalSDLT = 0;

    // Band 1: £0 to £300,000 @ 0%
    const band1Taxable = Math.min(purchasePrice, 300000);
    bands.push({
      range: "£0 – £300,000",
      rate: 0,
      taxableAmount: band1Taxable,
      taxDue: 0,
    });

    // Band 2: £300,001 to £500,000 @ 5%
    if (purchasePrice > 300000) {
      const band2Taxable = Math.min(purchasePrice, 500000) - 300000;
      const band2Tax = Math.round(band2Taxable * 0.05);
      totalSDLT += band2Tax;
      bands.push({
        range: "£300,001 – £500,000",
        rate: 5,
        taxableAmount: band2Taxable,
        taxDue: band2Tax,
      });
    }

    return {
      totalSDLT,
      category: "First Time Buyer",
      reliefApplied: true,
      reliefNote: "First-Time Buyers' Relief applied (0% on first £300k, 5% on balance up to £500k).",
      bands,
    };
  }

  // 2. ADDITIONAL PROPERTY (SECOND HOME / BUY TO LET)
  if (buyerType === "additionalProperty") {
    const bands: SDLTBreakdownBand[] = [];
    let totalSDLT = 0;

    const brackets = [
      { min: 0, max: 125000, rate: 0.05, label: "£0 – £125,000 (inc. 5% surcharge)" },
      { min: 125000, max: 250000, rate: 0.07, label: "£125,001 – £250,000 (inc. 5% surcharge)" },
      { min: 250000, max: 925000, rate: 0.10, label: "£250,001 – £925,000 (inc. 5% surcharge)" },
      { min: 925000, max: 1500000, rate: 0.15, label: "£925,001 – £1,500,000 (inc. 5% surcharge)" },
      { min: 1500000, max: Infinity, rate: 0.17, label: "Over £1,500,000 (inc. 5% surcharge)" },
    ];

    for (const b of brackets) {
      if (purchasePrice > b.min) {
        const taxable = Math.min(purchasePrice, b.max) - b.min;
        const tax = Math.round(taxable * b.rate);
        totalSDLT += tax;
        bands.push({
          range: b.label,
          rate: Math.round(b.rate * 100),
          taxableAmount: taxable,
          taxDue: tax,
        });
      }
    }

    return {
      totalSDLT,
      category: "Additional Property",
      reliefApplied: false,
      reliefNote: "Includes the standard 5% higher rate surcharge for additional residential properties and buy-to-let investments.",
      bands,
    };
  }

  // 3. MOVING HOME (STANDARD MAIN RESIDENCE)
  const bands: SDLTBreakdownBand[] = [];
  let totalSDLT = 0;

  const brackets = [
    { min: 0, max: 125000, rate: 0.0, label: "£0 – £125,000" },
    { min: 125000, max: 250000, rate: 0.02, label: "£125,001 – £250,000" },
    { min: 250000, max: 925000, rate: 0.05, label: "£250,001 – £925,000" },
    { min: 925000, max: 1500000, rate: 0.10, label: "£925,001 – £1,500,000" },
    { min: 1500000, max: Infinity, rate: 0.12, label: "Over £1,500,000" },
  ];

  for (const b of brackets) {
    if (purchasePrice > b.min) {
      const taxable = Math.min(purchasePrice, b.max) - b.min;
      const tax = Math.round(taxable * b.rate);
      totalSDLT += tax;
      bands.push({
        range: b.label,
        rate: Math.round(b.rate * 100),
        taxableAmount: taxable,
        taxDue: tax,
      });
    }
  }

  return {
    totalSDLT,
    category: "Moving Home",
    reliefApplied: false,
    bands,
  };
}

/**
 * Calculates Estimated Disbursements for Quality Conveyancing
 * Disbursed third-party fees paid on behalf of client (No VAT on government statutory fees)
 */
export interface DisbursementItem {
  name: string;
  amount: number;
  description: string;
  isMandatory?: boolean;
}

export interface EstimatedDisbursementsResult {
  items: DisbursementItem[];
  totalDisbursements: number;
  sdltAmount: number;
  landRegistryFee: number;
}

export function calculateEstimatedDisbursements(params: {
  transactionType: string;
  propertyValue: number;
  tenure: "Freehold" | "Leasehold" | string;
  isNewBuild?: boolean;
  clientCount?: number;
  isFirstTimeBuyer?: boolean;
  isSecondHome?: boolean;
  sdltBuyerType?: "firstTimeBuyer" | "movingHome" | "additionalProperty";
}): EstimatedDisbursementsResult {
  const {
    transactionType,
    propertyValue,
    tenure,
    isNewBuild = false,
    clientCount = 1,
    isFirstTimeBuyer = false,
    isSecondHome = false,
  } = params;

  const items: DisbursementItem[] = [];
  let sdltAmount = 0;
  let landRegistryFee = 0;

  const effectiveClientCount = Math.max(1, clientCount);

  // Determine Buyer Type for SDLT if not explicitly provided
  let buyerCategory: "firstTimeBuyer" | "movingHome" | "additionalProperty" = "movingHome";
  if (params.sdltBuyerType) {
    buyerCategory = params.sdltBuyerType;
  } else if (isSecondHome) {
    buyerCategory = "additionalProperty";
  } else if (isFirstTimeBuyer) {
    buyerCategory = "firstTimeBuyer";
  }

  // 1. PURCHASE or SALE & PURCHASE (Purchase portion)
  if (transactionType === "Purchase" || transactionType === "Sale & Purchase") {
    // 1A. SDLT
    const sdltCalc = calculateSDLT(propertyValue, buyerCategory);
    sdltAmount = sdltCalc.totalSDLT;
    items.push({
      name: "Stamp Duty Land Tax (SDLT)",
      amount: sdltAmount,
      description: `${sdltCalc.category} rate (${formatGBP(sdltAmount)})`,
      isMandatory: true,
    });

    // 1B. Land Registry Registration Fee (Scale 1)
    // If New build or new lease, use postal/new lease rate per guidance; otherwise portal whole rate
    const isTransferOfPartOrNewLease = isNewBuild || tenure === "Leasehold";
    landRegistryFee = calculateLandRegistryFee(propertyValue, 1, isTransferOfPartOrNewLease);
    items.push({
      name: "HM Land Registry Registration Fee",
      amount: landRegistryFee,
      description: `Official scale 1 registration fee for ${formatGBP(propertyValue)}`,
      isMandatory: true,
    });

    // 1C. Priority Search (OS1 / OS2) - £7.00
    items.push({
      name: "Land Registry Priority Search (OS1/OS2)",
      amount: 7.0,
      description: "Secures legal priority over title prior to completion",
      isMandatory: true,
    });

    // 1D. Bankruptcy Search (K16 / K17) - £6.00 per client
    const bankruptcyTotal = 6.0 * effectiveClientCount;
    items.push({
      name: `Bankruptcy Search (K16/K17)`,
      amount: bankruptcyTotal,
      description: `£6.00 per client (${effectiveClientCount} applicant${effectiveClientCount > 1 ? "s" : ""})`,
      isMandatory: true,
    });

    // 1E. Standard Conveyancing Search Pack (Local Authority, Drainage, Environmental)
    items.push({
      name: "Standard Property Searches Pack",
      amount: 250.0,
      description: "Local Authority, Drainage & Environmental searches (estimated standard pack)",
      isMandatory: false,
    });
  }

  // 2. SALE
  if (transactionType === "Sale" || transactionType === "Sale & Purchase") {
    if (tenure === "Leasehold") {
      // Sale leasehold: Land Registry Official Search & Lease: £35.00
      items.push({
        name: "Land Registry Official Search & Lease",
        amount: 35.0,
        description: "Official copy of the lease and register entries",
        isMandatory: true,
      });
    } else {
      // Sale freehold: Land Registry Official Search & Title Plan: £14.00
      items.push({
        name: "Land Registry Official Search & Title Plan",
        amount: 14.0,
        description: "Official copies of freehold title register and title plan",
        isMandatory: true,
      });
    }
  }

  // 3. RE-MORTGAGE or TRANSFER OF EQUITY
  if (transactionType === "Re-Mortgage" || transactionType === "Transfer of Equity") {
    // Land Registry Scale 2 fee
    landRegistryFee = calculateLandRegistryFee(propertyValue, 2, false);
    items.push({
      name: "HM Land Registry Fee (Scale 2)",
      amount: landRegistryFee,
      description: `Scale 2 registration fee for ${transactionType.toLowerCase()}`,
      isMandatory: true,
    });

    // Priority Search - £7.00
    items.push({
      name: "Land Registry Priority Search (OS1)",
      amount: 7.0,
      description: "Official search with priority",
      isMandatory: true,
    });

    // Bankruptcy Search - £6.00 per client
    const bankruptcyTotal = 6.0 * effectiveClientCount;
    items.push({
      name: `Bankruptcy Search`,
      amount: bankruptcyTotal,
      description: `£6.00 per client (${effectiveClientCount} client${effectiveClientCount > 1 ? "s" : ""})`,
      isMandatory: true,
    });
  }

  const totalDisbursements = items.reduce((acc, it) => acc + it.amount, 0);

  return {
    items,
    totalDisbursements,
    sdltAmount,
    landRegistryFee,
  };
}

export function formatGBP(amount: number): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
