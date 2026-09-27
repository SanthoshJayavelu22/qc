import mongoose, { Document, Schema } from "mongoose";

export interface IBlog extends Document {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  readTime: string;
  coverImage?: string;
  tags?: string[];
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true, lowercase: true },
    excerpt: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    category: { type: String, required: true, default: "Conveyancing" },
    author: { type: String, required: true, default: "Quality Conveyancing Team" },
    readTime: { type: String, default: "5 min read" },
    coverImage: { type: String, default: "" },
    tags: [{ type: String, trim: true }],
    isPublished: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

// Auto-generate or sanitize slug before validation if not provided
BlogSchema.pre("validate", function () {
  if (this.title && !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }
});

export const Blog = mongoose.model<IBlog>("Blog", BlogSchema);
