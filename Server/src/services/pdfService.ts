import PDFDocument from "pdfkit";

export interface QuotePdfParams {
  clientName: string;
  clientEmail: string;
  transactionType: string;
  propertyValue: string;
  tenureType: string;
  totalIncVat: string;
  subtotal: string;
  vatAmount: string;
  sdltAmount?: string;
  totalDisbursements?: string;
  grandTotal?: string;
  disbursements?: Array<{ name: string; amount: string; description: string }>;
}

export const generateQuotePdfBuffer = (params: QuotePdfParams): Promise<Buffer> => {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ size: "A4", margin: 45 });
      const chunks: Buffer[] = [];

      doc.on("data", (chunk) => chunks.push(chunk));
      doc.on("end", () => resolve(Buffer.concat(chunks)));
      doc.on("error", (err) => reject(err));

      const brandDark = "#1c3327";
      const brandAccent = "#74c69d";
      const textDark = "#1e293b";
      const textMuted = "#64748b";
      const borderLight = "#e2e8f0";
      const bgSoft = "#f8fafc";

      // Header Banner
      doc.rect(0, 0, doc.page.width, 95).fill(brandDark);
      doc
        .fillColor(brandAccent)
        .font("Helvetica-Bold")
        .fontSize(20)
        .text("QUALITY CONVEYANCING", 45, 28);
      doc
        .fillColor("#cbd5e1")
        .font("Helvetica")
        .fontSize(9.5)
        .text("SPECIALIST PROPERTY SOLICITORS  |  CLC PRACTICE NO. 11359", 45, 54);
      doc
        .fillColor("#ffffff")
        .font("Helvetica")
        .fontSize(9)
        .text(`Date: ${new Date().toLocaleDateString("en-GB")}`, 45, 32, {
          align: "right",
          width: doc.page.width - 90,
        });

      let y = 115;

      // Title & Client Greeting
      doc
        .fillColor(textDark)
        .font("Helvetica-Bold")
        .fontSize(16)
        .text("Instant Conveyancing Fee Quotation", 45, y);
      y += 24;

      doc
        .fillColor(textMuted)
        .font("Helvetica")
        .fontSize(10.5)
        .text(
          `Prepared for ${params.clientName} (${params.clientEmail})`,
          45,
          y
        );
      y += 22;

      // Property & Transaction Summary Box
      doc
        .roundedRect(45, y, doc.page.width - 90, 68, 6)
        .fillAndStroke(bgSoft, borderLight);

      const col1X = 60;
      const col2X = 240;
      const col3X = 410;

      doc.fillColor(textMuted).font("Helvetica-Bold").fontSize(8.5);
      doc.text("TRANSACTION TYPE", col1X, y + 14);
      doc.text("PROPERTY VALUE", col2X, y + 14);
      doc.text("TENURE", col3X, y + 14);

      doc.fillColor(textDark).font("Helvetica-Bold").fontSize(11.5);
      doc.text(params.transactionType || "Conveyancing", col1X, y + 32, { width: 170 });
      doc.text(params.propertyValue || "N/A", col2X, y + 32, { width: 150 });
      doc.text(params.tenureType || "Freehold", col3X, y + 32, { width: 120 });

      y += 88;

      // Legal Fees Breakdown Section
      doc
        .fillColor(brandDark)
        .font("Helvetica-Bold")
        .fontSize(12)
        .text("1. Legal Fees Breakdown", 45, y);
      y += 18;

      const drawRow = (label: string, value: string, isBold = false, bg = false) => {
        if (bg) {
          doc.rect(45, y - 4, doc.page.width - 90, 22).fill("#ecfdf5");
        }
        doc
          .fillColor(isBold ? brandDark : textDark)
          .font(isBold ? "Helvetica-Bold" : "Helvetica")
          .fontSize(10)
          .text(label, 55, y);
        doc
          .fillColor(isBold ? brandDark : textDark)
          .font(isBold ? "Helvetica-Bold" : "Helvetica")
          .fontSize(10)
          .text(value, 55, y, { align: "right", width: doc.page.width - 110 });
        y += 22;
        doc
          .moveTo(45, y - 4)
          .lineTo(doc.page.width - 45, y - 4)
          .strokeColor(borderLight)
          .lineWidth(0.5)
          .stroke();
      };

      drawRow("Base Legal Fee (Excl. VAT)", params.subtotal);
      drawRow("VAT (20%)", params.vatAmount);
      drawRow("Total Legal Fees (Inc. VAT)", params.totalIncVat, true, true);

      y += 12;

      // Disbursements & SDLT Section
      if (
        (params.disbursements && params.disbursements.length > 0) ||
        params.sdltAmount ||
        params.totalDisbursements
      ) {
        doc
          .fillColor(brandDark)
          .font("Helvetica-Bold")
          .fontSize(12)
          .text("2. Estimated Disbursements & Stamp Duty", 45, y);
        y += 18;

        if (params.sdltAmount) {
          drawRow("Stamp Duty Land Tax (SDLT)", params.sdltAmount);
        }
        if (params.disbursements && params.disbursements.length > 0) {
          for (const item of params.disbursements) {
            if (y > doc.page.height - 110) {
              doc.addPage();
              y = 50;
            }
            drawRow(item.name, item.amount);
          }
        }
        if (params.totalDisbursements) {
          drawRow("Total Estimated Disbursements", params.totalDisbursements, true);
        }
        y += 10;
      }

      // Grand Total Box
      if (params.grandTotal) {
        if (y > doc.page.height - 130) {
          doc.addPage();
          y = 50;
        }
        doc.roundedRect(45, y, doc.page.width - 90, 44, 6).fill(brandDark);
        doc
          .fillColor("#ffffff")
          .font("Helvetica-Bold")
          .fontSize(12)
          .text("ESTIMATED GRAND TOTAL", 60, y + 15);
        doc
          .fillColor(brandAccent)
          .font("Helvetica-Bold")
          .fontSize(14)
          .text(params.grandTotal, 60, y + 14, {
            align: "right",
            width: doc.page.width - 120,
          });
        y += 62;
      }

      // Footer / Contact Info
      if (y > doc.page.height - 90) {
        doc.addPage();
        y = 50;
      }
      doc
        .fillColor(textMuted)
        .font("Helvetica")
        .fontSize(8.5)
        .text(
          "This quotation is an estimate based on the information provided. Seasonal discounts may be available — please call our Business Development Team on 020 3763 6767 or email info@qconveyancing.com to instruct us.",
          45,
          y,
          { width: doc.page.width - 90, lineGap: 3 }
        );

      doc
        .fillColor(textMuted)
        .font("Helvetica")
        .fontSize(8)
        .text(
          "Quality Conveyancing Limited | Aurora House, 71-75 Uxbridge Road, Ealing, London W5 5SL | Regulated by CLC (No. 11359)",
          45,
          doc.page.height - 40,
          { align: "center", width: doc.page.width - 90 }
        );

      doc.end();
    } catch (err) {
      reject(err);
    }
  });
};
