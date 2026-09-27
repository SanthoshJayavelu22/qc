import mongoose, { Document, Schema } from "mongoose";

export type AdminRole =
  | "Super Admin"
  | "Director (Senior Solicitor)"
  | "Director (Licensed Conveyancer)"
  | "Conveyancer"
  | "Conveyancing Fee Earner"
  | "Head Of Business Development"
  | "Business Development"
  | "Head Of Operations"
  | "PA To Conveyancers";

export interface IAdminUser extends Document {
  name: string;
  email: string;
  password: string;
  role: AdminRole;
  phone?: string;
  isActive: boolean;
  avatar?: string;
  resetPasswordToken?: string;
  resetPasswordExpires?: Date;
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const AdminUserSchema = new Schema<IAdminUser>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    password: { type: String, required: true },
    role: {
      type: String,
      required: true,
      enum: [
        "Super Admin",
        "Director (Senior Solicitor)",
        "Director (Licensed Conveyancer)",
        "Conveyancer",
        "Conveyancing Fee Earner",
        "Head Of Business Development",
        "Business Development",
        "Head Of Operations",
        "PA To Conveyancers",
      ],
      default: "Conveyancing Fee Earner",
    },
    phone: { type: String, default: "" },
    isActive: { type: Boolean, default: true },
    avatar: { type: String, default: "" },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
    lastLogin: { type: Date },
  },
  {
    timestamps: true,
  }
);

export const AdminUser = mongoose.model<IAdminUser>("AdminUser", AdminUserSchema);
