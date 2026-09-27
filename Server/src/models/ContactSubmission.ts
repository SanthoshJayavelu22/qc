import mongoose, { Document, Schema } from "mongoose";

export interface IContactSubmission extends Document {
  name: string;
  email: string;
  phone: string;
  service: string;
  message?: string;
  status: "new" | "in_progress" | "contacted" | "completed";
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ContactSubmissionSchema = new Schema<IContactSubmission>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    service: { type: String, default: "Property Purchase" },
    message: { type: String, default: "" },
    status: {
      type: String,
      enum: ["new", "in_progress", "contacted", "completed"],
      default: "new",
    },
    notes: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);

export const ContactSubmission = mongoose.model<IContactSubmission>(
  "ContactSubmission",
  ContactSubmissionSchema
);
