import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      clientName,
      clientEmail,
      clientPhone,
      transactionType,
      propertyValue,
      tenureType,
      totalIncVat,
      subtotal,
      vatAmount,
      sdltAmount,
      totalDisbursements,
      grandTotal,
      disbursements,
      sdltBreakdown,
      questionnaireAnswers,
      seasonalDiscountNote,
    } = data;

    if (!clientName || !clientEmail || !clientPhone) {
      return NextResponse.json(
        { error: "Full name, phone number, and email address are required." },
        { status: 400 }
      );
    }

    const emailSubject = `Your Instant Conveyancing Quote: ${transactionType} (${grandTotal || totalIncVat || ""})`;

    const emailPayload: Record<string, any> = {
      _subject: emailSubject,
      _template: "table",
      _replyto: clientEmail,
      "Client Name": clientName,
      "Client Email": clientEmail,
      "Client Phone": clientPhone,
      "Transaction Type": transactionType,
      "Property Value": propertyValue,
      "Tenure": tenureType,
      "Legal Fee Subtotal (Excl. VAT)": subtotal,
      "VAT (20%)": vatAmount,
      "Total Legal Fees (Inc. VAT)": totalIncVat,
      "Stamp Duty Land Tax (SDLT)": sdltAmount || "£0",
      "Total Estimated Disbursements": totalDisbursements || "£0",
      "Estimated Grand Total": grandTotal || totalIncVat,
      "Disbursements Breakdown": disbursements ? JSON.stringify(disbursements, null, 2) : "N/A",
      "Questionnaire Responses": questionnaireAnswers ? JSON.stringify(questionnaireAnswers, null, 2) : "N/A",
      "Seasonal Discount Notice": seasonalDiscountNote || "We may have seasonal discounts available for your quote. Please get in touch at 020 3763 6767 to discuss",
    };

    // Dispatch to Server backend which automatically emails the customer & saves to database
    const backendUrl = process.env.INTERNAL_BACKEND_URL || process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:5001";
    try {
      await fetch(`${backendUrl}/api/inquiries/quote`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch (serverErr) {
      console.error("Server quote API error:", serverErr);
      // Fallback try localhost:5000 if 5001 failed
      try {
        await fetch("http://127.0.0.1:5000/api/inquiries/quote", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      } catch (fallbackErr) {
        console.error("Fallback server quote API error:", fallbackErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: `Instant quote registered and forwarded to conveyancing team`,
    });
  } catch (error: any) {
    console.error("Quote API error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to process quote" },
      { status: 500 }
    );
  }
}
