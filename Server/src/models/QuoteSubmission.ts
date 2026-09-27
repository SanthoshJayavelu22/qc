import mongoose, { Document, Schema } from "mongoose";

export interface IQuoteSubmission extends Document {
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  transactionType: string;
  propertyValue: string;
  tenureType: string;
  subtotal: string;
  vatAmount: string;
  totalIncVat: string;
  questionnaireAnswers?: any;
  seasonalDiscountNote?: string;
  emailSentToCustomer: boolean;
  status: "pending" | "contacted" | "instructed" | "cancelled";
  createdAt: Date;
  updatedAt: Date;
}

const QuoteSubmissionSchema = new Schema<IQuoteSubmission>(
  {
    clientName: { type: String, required: true, trim: true },
    clientEmail: { type: String, required: true, trim: true, lowercase: true },
    clientPhone: { type: String, required: true, trim: true },
    transactionType: { type: String, required: true },
    propertyValue: { type: String, default: "" },
    tenureType: { type: String, default: "Freehold" },
    subtotal: { type: String, default: "" },
    vatAmount: { type: String, default: "" },
    totalIncVat: { type: String, default: "" },
    questionnaireAnswers: { type: Schema.Types.Mixed },
    seasonalDiscountNote: { type: String, default: "" },
    emailSentToCustomer: { type: Boolean, default: false },
    status: {
      type: String,
      enum: ["pending", "contacted", "instructed", "cancelled"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

export const QuoteSubmission = mongoose.model<IQuoteSubmission>(
  "QuoteSubmission",
  QuoteSubmissionSchema
);
