import { Request, Response } from "express";
import { ContactSubmission } from "../models/ContactSubmission";
import { QuoteSubmission } from "../models/QuoteSubmission";
import { sendCustomerQuoteEmail } from "../services/emailService";

// Submit Contact Form
export const submitContactForm = async (req: Request, res: Response) => {
  try {
    const { name, email, phone, service, message } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        error: "Full name, email address, and phone number are required.",
      });
    }

    const contact = await ContactSubmission.create({
      name,
      email: email.toLowerCase(),
      phone,
      service: service || "Property Purchase",
      message: message || "",
      status: "new",
    });

    // Also send email copy to management via FormSubmit in background
    try {
      await fetch("https://formsubmit.co/ajax/santhoshjayavelu57@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New Conveyancing Enquiry from ${name} (${service})`,
          _template: "table",
          "Client Name": name,
          "Client Email": email,
          "Client Phone": phone,
          "Requested Service": service,
          "Message": message || "No notes provided",
        }),
      });
    } catch (e) {
      console.error("[Contact API] Background notification error:", e);
    }

    res.status(201).json({
      success: true,
      message: "Thank you! Your enquiry has been received. Our conveyancers will contact you shortly.",
      contactId: contact._id,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get Contact Submissions for Admin Dashboard
export const getContactSubmissions = async (req: Request, res: Response) => {
  try {
    const contacts = await ContactSubmission.find().sort({ createdAt: -1 });
    res.json({ success: true, count: contacts.length, contacts });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update contact status
export const updateContactStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status, notes } = req.body;
    const contact = await ContactSubmission.findByIdAndUpdate(
      id,
      { ...(status && { status }), ...(notes !== undefined && { notes }) },
      { new: true }
    );
    res.json({ success: true, contact });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Submit Instant Quote and Send Email directly to Customer
export const submitQuoteAndSendEmail = async (req: Request, res: Response) => {
  try {
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
    } = req.body;

    if (!clientName || !clientEmail || !clientPhone) {
      return res.status(400).json({
        success: false,
        error: "Full name, telephone number, and email address are required.",
      });
    }

    // 1. Dispatch email directly to customer
    let emailSent = false;
    try {
      emailSent = await sendCustomerQuoteEmail({
        clientName,
        clientEmail,
        transactionType: transactionType || "Conveyancing",
        propertyValue: propertyValue || "",
        tenureType: tenureType || "Freehold",
        totalIncVat: totalIncVat || "£0.00",
        subtotal: subtotal || "£0.00",
        vatAmount: vatAmount || "£0.00",
      });
    } catch (mailErr) {
      console.error("[Quote API] Direct email dispatch error:", mailErr);
    }

    // 2. Save quote record in MongoDB
    const quote = await QuoteSubmission.create({
      clientName,
      clientEmail: clientEmail.toLowerCase(),
      clientPhone,
      transactionType: transactionType || "Conveyancing",
      propertyValue: propertyValue || "",
      tenureType: tenureType || "Freehold",
      subtotal: subtotal || "",
      vatAmount: vatAmount || "",
      totalIncVat: totalIncVat || "",
      questionnaireAnswers,
      seasonalDiscountNote,
      emailSentToCustomer: emailSent,
      status: "pending",
    });

    res.status(201).json({
      success: true,
      message: `Your instant quote has been generated and dispatched directly to ${clientEmail}!`,
      quoteId: quote._id,
      emailSent,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get Quotes for Admin Dashboard
export const getQuotes = async (_req: Request, res: Response) => {
  try {
    const quotes = await QuoteSubmission.find().sort({ createdAt: -1 });
    res.json({ success: true, count: quotes.length, quotes });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update quote status
export const updateQuoteStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const quote = await QuoteSubmission.findByIdAndUpdate(id, { status }, { new: true });
    res.json({ success: true, quote });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};
