import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export interface GeneratePdfParams {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  transactionType: string;
  tenureType: string;
  propertyValue: string | number;
  quoteResult: any;
  formatCurrency: (val: number | string) => string;
}

export function downloadQuotePdf({
  clientName,
  clientEmail,
  clientPhone,
  transactionType,
  tenureType,
  propertyValue,
  quoteResult,
  formatCurrency,
}: GeneratePdfParams) {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = doc.internal.pageSize.getWidth();

  // 1. Brand Header Bar
  doc.setFillColor(28, 51, 39); // #1c3327 Legal Dark Green
  doc.rect(0, 0, pageWidth, 26, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("Quality Conveyancing", 14, 12);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(116, 198, 157); // #74c69d Teal Accent
  doc.text("Specialist Property Conveyancing Lawyers • Aurora House, Ealing, London W5 5SL", 14, 18);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(255, 255, 255);
  doc.text("OFFICIAL QUOTE", pageWidth - 14, 12, { align: "right" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(235, 242, 236);
  doc.text(`Tel: 020 3763 6767 | info@qconveyancing.com`, pageWidth - 14, 18, { align: "right" });

  // 2. Client & Transaction Summary Box
  doc.setFillColor(247, 250, 247);
  doc.setDrawColor(229, 231, 235);
  doc.roundedRect(14, 32, pageWidth - 28, 26, 3, 3, "FD");

  doc.setTextColor(28, 51, 39);
  doc.setFontSize(8);
  doc.setFont("helvetica", "bold");
  doc.text("PREPARED FOR:", 18, 38);
  doc.text("TRANSACTION DETAILS:", pageWidth / 2 + 5, 38);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.text(`Client: ${clientName || "Valued Client"}`, 18, 43);
  doc.text(`Email: ${clientEmail || "N/A"}`, 18, 48);
  doc.text(`Phone: ${clientPhone || "N/A"}`, 18, 53);

  doc.text(`Type: ${transactionType} (${tenureType})`, pageWidth / 2 + 5, 43);
  doc.text(`Property Value: ${formatCurrency(propertyValue)}`, pageWidth / 2 + 5, 48);
  doc.text(`Quote Date: ${new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })} (Valid: 30 Days)`, pageWidth / 2 + 5, 53);

  let startY = 64;

  // 3. Legal Fees Table
  const feeRows: any[] = [];

  if (quoteResult.saleBreakdown) {
    feeRows.push(["Sale Legal Base Fee", formatCurrency(quoteResult.saleBreakdown.baseFee)]);
  }
  if (quoteResult.purchaseBreakdown) {
    feeRows.push(["Purchase Legal Base Fee", formatCurrency(quoteResult.purchaseBreakdown.baseFee)]);
  }
  if (!quoteResult.saleBreakdown && !quoteResult.purchaseBreakdown && quoteResult.breakdown?.baseFee) {
    feeRows.push([quoteResult.breakdown.baseFee.label, formatCurrency(quoteResult.breakdown.baseFee.amount)]);
  }
  if (quoteResult.breakdown?.adminFee) {
    feeRows.push([quoteResult.breakdown.adminFee.label, formatCurrency(quoteResult.breakdown.adminFee.amount)]);
  }
  if (quoteResult.breakdown?.idCheck) {
    feeRows.push([quoteResult.breakdown.idCheck.label, formatCurrency(quoteResult.breakdown.idCheck.amount)]);
  }
  if (quoteResult.breakdown?.sourceOfFunds) {
    feeRows.push([quoteResult.breakdown.sourceOfFunds.label, formatCurrency(quoteResult.breakdown.sourceOfFunds.amount)]);
  }
  if (quoteResult.breakdown?.ttFee) {
    feeRows.push([quoteResult.breakdown.ttFee.label, formatCurrency(quoteResult.breakdown.ttFee.amount)]);
  }
  if (quoteResult.breakdown?.tenureFees?.amount > 0) {
    feeRows.push([quoteResult.breakdown.tenureFees.label, formatCurrency(quoteResult.breakdown.tenureFees.amount)]);
  }
  if (quoteResult.breakdown?.addOns?.amount > 0) {
    feeRows.push([quoteResult.breakdown.addOns.label, formatCurrency(quoteResult.breakdown.addOns.amount)]);
  }

  feeRows.push(["Legal Fees Subtotal (Excl. VAT)", formatCurrency(quoteResult.subtotal || 0)]);
  feeRows.push(["VAT (20%)", formatCurrency(quoteResult.vatAmount || 0)]);
  feeRows.push(["Total Legal Fees (Inc. VAT)", formatCurrency(quoteResult.totalIncVat || 0)]);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(28, 51, 39);
  doc.text("1. Itemised Legal Fees Breakdown", 14, startY - 2);

  autoTable(doc, {
    startY: startY,
    head: [["Legal Service Item", "Amount (£)"]],
    body: feeRows,
    theme: "striped",
    headStyles: { fillColor: [28, 51, 39], textColor: [255, 255, 255], fontStyle: "bold", fontSize: 8.5 },
    bodyStyles: { fontSize: 8, textColor: [50, 50, 50] },
    columnStyles: {
      0: { cellWidth: "auto" },
      1: { cellWidth: 40, halign: "right", fontStyle: "bold" },
    },
    margin: { left: 14, right: 14 },
  });

  startY = (doc as any).lastAutoTable.finalY + 8;

  // 4. Disbursements Table
  if (quoteResult.disbursements?.items && quoteResult.disbursements.items.length > 0) {
    const disbRows = quoteResult.disbursements.items.map((d: any) => [
      d.name,
      d.description || "Third-party statutory fee",
      formatCurrency(d.amount),
    ]);
    disbRows.push(["Total Estimated Disbursements", "", formatCurrency(quoteResult.disbursements.totalDisbursements)]);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(28, 51, 39);
    doc.text("2. Estimated Third-Party Disbursements", 14, startY - 2);

    autoTable(doc, {
      startY: startY,
      head: [["Disbursement Item", "Details", "Amount (£)"]],
      body: disbRows,
      theme: "striped",
      headStyles: { fillColor: [45, 74, 60], textColor: [255, 255, 255], fontStyle: "bold", fontSize: 8.5 },
      bodyStyles: { fontSize: 8, textColor: [50, 50, 50] },
      columnStyles: {
        0: { cellWidth: 70 },
        1: { cellWidth: "auto" },
        2: { cellWidth: 40, halign: "right", fontStyle: "bold" },
      },
      margin: { left: 14, right: 14 },
    });

    startY = (doc as any).lastAutoTable.finalY + 8;
  }

  // Check if we need page break for totals box
  if (startY > 235) {
    doc.addPage();
    startY = 20;
  }

  // 5. Grand Total Banner Box
  doc.setFillColor(28, 51, 39);
  doc.roundedRect(14, startY, pageWidth - 28, 22, 3, 3, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(116, 198, 157);
  doc.text("ESTIMATED GRAND TOTAL (COMPLETION FUNDS REQUIRED):", 20, startY + 8);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(235, 242, 236);
  doc.text(`Legal Fees: ${formatCurrency(quoteResult.totalIncVat)} | Disbursements: ${formatCurrency(quoteResult.disbursements?.totalDisbursements || 0)}`, 20, startY + 15);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.setTextColor(255, 255, 255);
  doc.text(formatCurrency(quoteResult.grandTotal || quoteResult.totalIncVat), pageWidth - 20, startY + 13, { align: "right" });

  // 6. Footer Notice
  startY += 28;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(100, 110, 105);
  doc.text("* This quote is valid for 30 days subject to receiving your instruction to proceed.", 14, startY);
  doc.text("* Seasonal discounts may apply. For questions or urgent queries, call our team directly on 020 3763 6767.", 14, startY + 5);

  // Trigger Instant 1-Click Browser File Download
  const cleanName = (clientName || "Client").replace(/[^a-zA-Z0-9_-]/g, "_");
  doc.save(`Quality_Conveyancing_Quote_${cleanName}.pdf`);
}
