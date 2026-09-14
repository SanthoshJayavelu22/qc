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
      questionnaireAnswers,
      seasonalDiscountNote,
    } = data;

    if (!clientName || !clientEmail || !clientPhone) {
      return NextResponse.json(
        { error: "Full name, phone number, and email address are required." },
        { status: 400 }
      );
    }

    const emailSubject = `Your Instant Conveyancing Quote: ${transactionType} (${totalIncVat || ""})`;

    const emailPayload = {
      _subject: emailSubject,
      _template: "table",
      _replyto: clientEmail,
      "Client Name": clientName,
      "Client Email": clientEmail,
      "Client Phone": clientPhone,
      "Transaction Type": transactionType,
      "Property Value": propertyValue,
      "Tenure": tenureType,
      "Subtotal (Excl. VAT)": subtotal,
      "VAT (20%)": vatAmount,
      "Estimated Total (Inc. VAT)": totalIncVat,
      "Questionnaire Responses": questionnaireAnswers ? JSON.stringify(questionnaireAnswers, null, 2) : "N/A",
      "Seasonal Discount Notice": seasonalDiscountNote || "We may have seasonal discounts available for your quote. Please get in touch at 020 3763 6767 to discuss",
    };

    try {
      await fetch("https://formsubmit.co/ajax/santhoshjayavelu57@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(emailPayload),
      });
    } catch (err) {
      console.error("Quote email dispatch background error:", err);
    }

    return NextResponse.json({
      success: true,
      message: `Instant quote copy dispatched to ${clientEmail}`,
    });
  } catch (error: any) {
    console.error("Quote API error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to process quote" },
      { status: 500 }
    );
  }
}
