export const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export interface BlogItem {
  _id?: string;
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  readTime: string;
  coverImage?: string;
  tags?: string[];
  isPublished?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface ChatMessage {
  sender: "client" | "admin";
  senderName: string;
  text: string;
  timestamp: string | Date;
}

export interface ChatSession {
  _id: string;
  sessionId: string;
  clientName: string;
  clientEmail?: string;
  clientPhone?: string;
  status: "active" | "closed" | "waiting";
  messages: ChatMessage[];
  lastMessageText: string;
  lastMessageAt: string;
  unreadCountForAdmin: number;
  unreadCountForClient: number;
  lockedBy?: string | null;
  lockedByName?: string | null;
  lockedByRole?: string | null;
  lockedAt?: string | null;
  createdAt: string;
  updatedAt: string;
}

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

export interface AdminUserItem {
  id?: string;
  _id?: string;
  name: string;
  email: string;
  role: AdminRole;
  phone?: string;
  isActive?: boolean;
  lastLogin?: string;
  createdAt?: string;
}

export interface ContactSubmissionItem {
  _id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message?: string;
  status: "new" | "in_progress" | "contacted" | "completed";
  notes?: string;
  createdAt: string;
}

export interface QuoteItem {
  _id: string;
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
  status: "pending" | "contacted" | "instructed" | "cancelled";
  emailSentToCustomer: boolean;
  createdAt: string;
}
