import { Router } from "express";
import {
  submitContactForm,
  getContactSubmissions,
  updateContactStatus,
  submitQuoteAndSendEmail,
  getQuotes,
  updateQuoteStatus,
} from "../controllers/inquiryController";

const router = Router();

// Public submissions
router.post("/contact", submitContactForm);
router.post("/quote", submitQuoteAndSendEmail);

// Admin retrieval
router.get("/contact", getContactSubmissions);
router.patch("/contact/:id", updateContactStatus);
router.get("/quotes", getQuotes);
router.patch("/quotes/:id", updateQuoteStatus);

export default router;
