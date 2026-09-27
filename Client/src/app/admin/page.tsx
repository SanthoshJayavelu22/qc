"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MessageSquare,
  FileText,
  PlusCircle,
  Trash2,
  Edit,
  Send,
  User,
  Clock,
  Sparkles,
  Search,
  ExternalLink,
  CheckCircle,
  Eye,
  LogOut,
  RefreshCw,
  Image as ImageIcon,
  ChevronRight,
  Shield,
  Layers,
  Users,
  Inbox,
  Calculator,
  Lock,
  Mail,
  ShieldAlert,
  Phone,
  Check,
  TrendingUp,
  FileSpreadsheet,
  AlertCircle,
  Calendar,
  Filter,
  ChevronLeft,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { getSocket } from "@/lib/socket";
import {
  API_URL,
  BlogItem,
  ChatSession,
  ChatMessage,
  AdminUserItem,
  ContactSubmissionItem,
  QuoteItem,
  AdminRole,
} from "@/lib/api";
import logoImg from "@/assets/qc-logo.png";

type TabType = "dashboard" | "chat" | "blogs" | "new_blog" | "quotes" | "contacts" | "team_roles";

const ALL_ROLES: AdminRole[] = [
  "Super Admin",
  "Director (Senior Solicitor)",
  "Director (Licensed Conveyancer)",
  "Conveyancer",
  "Conveyancing Fee Earner",
  "Head Of Business Development",
  "Business Development",
  "Head Of Operations",
  "PA To Conveyancers",
];

export default function AdminPortalPage() {
  // Authentication State
  const [currentUser, setCurrentUser] = useState<AdminUserItem | null>(null);
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  // Active Navigation
  const [activeTab, setActiveTab] = useState<TabType>("dashboard");

  // Chat states
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [selectedSessionId, setSelectedSessionId] = useState<string>("");
  const [currentSession, setCurrentSession] = useState<ChatSession | null>(null);
  const [adminReply, setAdminReply] = useState("");
  const [clientIsTyping, setClientIsTyping] = useState(false);
  const [searchChat, setSearchChat] = useState("");

  // Blog states
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [editingBlogId, setEditingBlogId] = useState<string | null>(null);
  const [blogFormData, setBlogFormData] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: "Conveyancing",
    author: "",
    readTime: "5 min read",
    coverImage: "",
    tags: "",
    isPublished: true,
  });
  const [uploadingImage, setUploadingImage] = useState(false);
  const [blogSaveStatus, setBlogSaveStatus] = useState<string | null>(null);

  // Quote & Contact submissions
  const [quotes, setQuotes] = useState<QuoteItem[]>([]);
  const [contacts, setContacts] = useState<ContactSubmissionItem[]>([]);
  const [selectedQuoteDetails, setSelectedQuoteDetails] = useState<QuoteItem | null>(null);

  // Team Admin Management (Super Admin)
  const [adminUsers, setAdminUsers] = useState<AdminUserItem[]>([]);
  const [newAdminData, setNewAdminData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Conveyancing Fee Earner" as AdminRole,
    phone: "",
  });
  const [adminCreateStatus, setAdminCreateStatus] = useState<string | null>(null);

  // Pagination States (8-10 items per page)
  const [quotesPage, setQuotesPage] = useState(1);
  const quotesPerPage = 8;

  const [contactsPage, setContactsPage] = useState(1);
  const contactsPerPage = 6;

  const [blogsPage, setBlogsPage] = useState(1);
  const blogsPerPage = 6;

  const [staffPage, setStaffPage] = useState(1);
  const staffPerPage = 8;

  const [chatPage, setChatPage] = useState(1);
  const chatPerPage = 10;

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Check existing session
  useEffect(() => {
    const savedUser = localStorage.getItem("qc_admin_user");
    const savedToken = localStorage.getItem("qc_admin_token");
    if (savedUser && savedToken) {
      try {
        const parsed = JSON.parse(savedUser);
        setCurrentUser(parsed);
        setAuthToken(savedToken);
        setBlogFormData((prev) => ({ ...prev, author: parsed.name || "Quality Conveyancing Team" }));
      } catch (e) {
        localStorage.removeItem("qc_admin_user");
      }
    }
  }, []);

  // Real-time Socket & Initial Data
  useEffect(() => {
    if (!currentUser) return;

    fetchDashboardData();

    const socket = getSocket();
    socket.emit("join_room", {
      sessionId: "admin_global",
      role: "admin",
    });

    const handleNewSession = (session: ChatSession) => {
      setSessions((prev) => [session, ...prev.filter((s) => s.sessionId !== session.sessionId)]);
    };

    const handleSessionUpdated = (session: ChatSession) => {
      setSessions((prev) => [session, ...prev.filter((s) => s.sessionId !== session.sessionId)]);
      setCurrentSession((prev) => {
        if (prev && prev.sessionId === session.sessionId) {
          return session;
        }
        return prev;
      });
    };

    const handleReceiveMessage = (data: { sessionId: string; message: ChatMessage }) => {
      setCurrentSession((prev) => {
        if (prev && prev.sessionId === data.sessionId) {
          return {
            ...prev,
            messages: [...prev.messages, data.message],
            lastMessageText: data.message.text,
            lastMessageAt: new Date().toISOString(),
          };
        }
        return prev;
      });
    };

    const handleTyping = (data: { sender: string; isTyping: boolean }) => {
      if (data.sender === "client") {
        setClientIsTyping(data.isTyping);
      }
    };

    const handleLockUpdated = (lockData: {
      sessionId: string;
      lockedBy: string | null;
      lockedByName: string | null;
      lockedByRole: string | null;
    }) => {
      setSessions((prev) =>
        prev.map((s) =>
          s.sessionId === lockData.sessionId
            ? {
                ...s,
                lockedBy: lockData.lockedBy,
                lockedByName: lockData.lockedByName,
                lockedByRole: lockData.lockedByRole,
              }
            : s
        )
      );

      setCurrentSession((prev) => {
        if (prev && prev.sessionId === lockData.sessionId) {
          return {
            ...prev,
            lockedBy: lockData.lockedBy,
            lockedByName: lockData.lockedByName,
            lockedByRole: lockData.lockedByRole,
          };
        }
        return prev;
      });
    };

    socket.on("new_session_created", handleNewSession);
    socket.on("session_updated", handleSessionUpdated);
    socket.on("receive_message", handleReceiveMessage);
    socket.on("user_typing", handleTyping);
    socket.on("chat_lock_updated", handleLockUpdated);

    return () => {
      socket.off("new_session_created", handleNewSession);
      socket.off("session_updated", handleSessionUpdated);
      socket.off("receive_message", handleReceiveMessage);
      socket.off("user_typing", handleTyping);
      socket.off("chat_lock_updated", handleLockUpdated);
    };
  }, [currentUser]);

  // Scroll active chat messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentSession?.messages, clientIsTyping]);

  // Load selected session details and claim exclusive lock
  useEffect(() => {
    if (!selectedSessionId || !currentUser) return;

    const socket = getSocket();
    socket.emit("join_room", {
      sessionId: selectedSessionId,
      role: "admin",
      adminId: currentUser._id || currentUser.id,
      adminName: currentUser.name,
      adminRole: currentUser.role,
    });

    socket.emit("claim_chat_lock", {
      sessionId: selectedSessionId,
      adminId: currentUser._id || currentUser.id,
      adminName: currentUser.name,
      adminRole: currentUser.role,
    });

    fetch(`${API_URL}/api/chat/sessions/${selectedSessionId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.session) {
          setCurrentSession(data.session);
          fetch(`${API_URL}/api/chat/sessions/${selectedSessionId}/read`, { method: "PATCH" });
          setSessions((prev) =>
            prev.map((s) => (s.sessionId === selectedSessionId ? { ...s, unreadCountForAdmin: 0 } : s))
          );
        }
      })
      .catch((err) => console.error("Error loading chat session:", err));
  }, [selectedSessionId, currentUser]);

  const fetchDashboardData = async () => {
    try {
      const chatRes = await fetch(`${API_URL}/api/chat/sessions`);
      const chatData = await chatRes.json();
      if (chatData.success) {
        setSessions(chatData.sessions);
        if (!selectedSessionId && chatData.sessions.length > 0) {
          setSelectedSessionId(chatData.sessions[0].sessionId);
        }
      }

      const blogRes = await fetch(`${API_URL}/api/blogs?all=true`);
      const blogData = await blogRes.json();
      if (blogData.success) setBlogs(blogData.blogs);

      const quoteRes = await fetch(`${API_URL}/api/inquiries/quotes`);
      const quoteData = await quoteRes.json();
      if (quoteData.success) setQuotes(quoteData.quotes);

      const contactRes = await fetch(`${API_URL}/api/inquiries/contact`);
      const contactData = await contactRes.json();
      if (contactData.success) setContacts(contactData.contacts);

      const usersRes = await fetch(`${API_URL}/api/auth/users`);
      const usersData = await usersRes.json();
      if (usersData.success) setAdminUsers(usersData.users);
    } catch (e) {
      console.error("Dashboard fetch error:", e);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError(null);

    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      });
      const data = await res.json();
      if (data.success) {
        setCurrentUser(data.user);
        setAuthToken(data.token);
        localStorage.setItem("qc_admin_user", JSON.stringify(data.user));
        localStorage.setItem("qc_admin_token", data.token);
        setBlogFormData((prev) => ({ ...prev, author: data.user.name }));
      } else {
        setLoginError(data.error || "Login failed");
      }
    } catch (err: any) {
      setLoginError(err.message || "Failed to reach server");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("qc_admin_user");
    localStorage.removeItem("qc_admin_token");
    setCurrentUser(null);
    setAuthToken(null);
  };

  const handleSendAdminReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminReply.trim() || !selectedSessionId || !currentUser) return;

    const socket = getSocket();
    const displayName = `${currentUser.name} (${currentUser.role})`;

    socket.emit("send_message", {
      sessionId: selectedSessionId,
      sender: "admin",
      senderName: displayName,
      text: adminReply.trim(),
      adminId: currentUser._id || currentUser.id,
    });

    setAdminReply("");
  };

  const handleCreateAdminUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setAdminCreateStatus("Creating account...");

    try {
      const res = await fetch(`${API_URL}/api/auth/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newAdminData),
      });
      const data = await res.json();
      if (data.success) {
        setAdminCreateStatus("Admin account successfully created!");
        setAdminUsers((prev) => [data.user, ...prev]);
        setNewAdminData({
          name: "",
          email: "",
          password: "",
          role: "Conveyancing Fee Earner",
          phone: "",
        });
        setTimeout(() => setAdminCreateStatus(null), 3000);
      } else {
        setAdminCreateStatus(`Error: ${data.error}`);
      }
    } catch (err: any) {
      setAdminCreateStatus(`Error: ${err.message}`);
    }
  };

  const handleDeleteAdminUser = async (id?: string) => {
    if (!id || !confirm("Are you sure you want to delete this staff account?")) return;
    try {
      const res = await fetch(`${API_URL}/api/auth/users/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setAdminUsers((prev) => prev.filter((u) => u._id !== id && u.id !== id));
      } else {
        alert(data.error);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      setUploadingImage(true);
      const res = await fetch(`${API_URL}/api/blogs/upload`, { method: "POST", body: formData });
      const data = await res.json();
      if (data.success && data.url) {
        setBlogFormData((prev) => ({ ...prev, coverImage: data.url }));
      } else {
        alert(data.error || "Failed to upload image");
      }
    } catch (err) {
      alert("Error uploading image");
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSaveBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    setBlogSaveStatus("Saving...");

    try {
      const url = editingBlogId ? `${API_URL}/api/blogs/${editingBlogId}` : `${API_URL}/api/blogs`;
      const method = editingBlogId ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...blogFormData,
          author: blogFormData.author || currentUser?.name || "Quality Conveyancing Team",
        }),
      });

      const data = await res.json();
      if (data.success) {
        setBlogSaveStatus("Saved successfully!");
        fetchDashboardData();
        setTimeout(() => {
          setBlogSaveStatus(null);
          setActiveTab("blogs");
          resetBlogForm();
        }, 1200);
      } else {
        setBlogSaveStatus(`Error: ${data.error}`);
      }
    } catch (err: any) {
      setBlogSaveStatus(`Error: ${err.message}`);
    }
  };

  const resetBlogForm = () => {
    setEditingBlogId(null);
    setBlogFormData({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      category: "Conveyancing",
      author: currentUser?.name || "Quality Conveyancing Team",
      readTime: "5 min read",
      coverImage: "",
      tags: "",
      isPublished: true,
    });
    setBlogSaveStatus(null);
  };

  const handleEditBlog = (blog: BlogItem) => {
    setEditingBlogId(blog._id || blog.id || null);
    setBlogFormData({
      title: blog.title,
      slug: blog.slug,
      excerpt: blog.excerpt,
      content: blog.content,
      category: blog.category,
      author: blog.author,
      readTime: blog.readTime,
      coverImage: blog.coverImage || "",
      tags: blog.tags ? blog.tags.join(", ") : "",
      isPublished: blog.isPublished !== undefined ? blog.isPublished : true,
    });
    setActiveTab("new_blog");
  };

  const handleDeleteBlog = async (id?: string) => {
    if (!id || !confirm("Delete this blog article?")) return;
    try {
      await fetch(`${API_URL}/api/blogs/${id}`, { method: "DELETE" });
      setBlogs((prev) => prev.filter((b) => b._id !== id && b.id !== id));
    } catch (e) {
      console.error(e);
    }
  };

  // -------------------------------------------------------------------------------------------------
  // 1. LOGIN SCREEN (Sage & Deep Forest Theme)
  // -------------------------------------------------------------------------------------------------
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-lightBg text-legalDark flex items-center justify-center p-6 font-sans">
        <div className="w-full max-w-md bg-white border border-[#4a7c59]/20 rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1c3327] via-[#4a7c59] to-[#8fae98]"></div>

          <div className="text-center mb-8">
            <div className="relative h-14 w-48 mx-auto mb-3">
              <Image
                src={logoImg}
                alt="Quality Conveyancing"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="inline-block text-[11px] font-bold text-tealAccent uppercase tracking-widest bg-[#e8f5ed] px-3 py-1 rounded-full border border-tealAccent/20">
              Admin & Staff Portal
            </span>
          </div>

          {loginError && (
            <div className="p-3.5 mb-5 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-legalDark uppercase tracking-wider mb-2">
                Staff Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-textMuted absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="admin@qualityconveyancing.co.uk"
                  className="w-full bg-[#f7faf7] border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm text-legalDark placeholder-gray-400 focus:outline-none focus:border-tealAccent focus:ring-2 focus:ring-tealAccent/20 transition"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-bold text-legalDark uppercase tracking-wider">
                  Password
                </label>
                <Link
                  href="/admin/forgot-password"
                  className="text-xs text-tealAccent hover:underline font-semibold transition"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-textMuted absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full bg-[#f7faf7] border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm text-legalDark focus:outline-none focus:border-tealAccent focus:ring-2 focus:ring-tealAccent/20 transition"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full bg-legalDark hover:bg-legalNavy disabled:opacity-50 text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition shadow-md flex items-center justify-center gap-2 mt-2"
            >
              {loginLoading ? "Authenticating..." : "Sign In to Admin Portal"}
            </button>
          </form>

          {/* Quick Demo Credentials Box for Evaluation */}
          <div className="mt-8 p-4 bg-[#f7faf7] rounded-2xl border border-gray-200 text-[11px] space-y-1 text-textMuted">
            <span className="font-bold text-legalDark block mb-1">Pre-seeded Staff Logins:</span>
            <div>• <strong className="text-legalDark">admin@qualityconveyancing.co.uk</strong> (Super Admin)</div>
            <div>• <strong className="text-legalDark">brinda@qualityconveyancing.co.uk</strong> (Director)</div>
            <div>• Password: <strong className="text-legalDark font-mono">Admin@123456</strong></div>
          </div>

          <div className="mt-6 text-center">
            <Link href="/" className="text-xs text-textMuted hover:text-legalDark transition font-semibold">
              ← Return to public website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------------------------------------------
  // 2. AUTHENTICATED ADMIN DASHBOARD UI (Matching Sage Green & Deep Forest Brand Aesthetic)
  // -------------------------------------------------------------------------------------------------
  const totalUnreadChat = sessions.reduce((acc, s) => acc + (s.unreadCountForAdmin || 0), 0);
  const isSuperAdmin = currentUser.role === "Super Admin";

  // Filtered & Paginated Chat Sessions
  const filteredChatSessions = sessions.filter(
    (s) =>
      s.clientName?.toLowerCase().includes(searchChat.toLowerCase()) ||
      s.lastMessageText?.toLowerCase().includes(searchChat.toLowerCase())
  );
  const totalChatPages = Math.max(1, Math.ceil(filteredChatSessions.length / chatPerPage));
  const paginatedChatSessions = filteredChatSessions.slice((chatPage - 1) * chatPerPage, chatPage * chatPerPage);

  // Paginated Quotes
  const totalQuotesPages = Math.max(1, Math.ceil(quotes.length / quotesPerPage));
  const paginatedQuotes = quotes.slice((quotesPage - 1) * quotesPerPage, quotesPage * quotesPerPage);

  // Paginated Contacts
  const totalContactsPages = Math.max(1, Math.ceil(contacts.length / contactsPerPage));
  const paginatedContacts = contacts.slice((contactsPage - 1) * contactsPerPage, contactsPage * contactsPerPage);

  // Paginated Blogs
  const totalBlogsPages = Math.max(1, Math.ceil(blogs.length / blogsPerPage));
  const paginatedBlogs = blogs.slice((blogsPage - 1) * blogsPerPage, blogsPage * blogsPerPage);

  // Paginated Staff
  const totalStaffPages = Math.max(1, Math.ceil(adminUsers.length / staffPerPage));
  const paginatedStaff = adminUsers.slice((staffPage - 1) * staffPerPage, staffPage * staffPerPage);

  return (
    <div className="min-h-screen bg-lightBg text-legalDark flex flex-col font-sans">
      {/* Top Header - Sage Forest Theme */}
      <header className="bg-[#0A1E1B] text-white border-b border-white/10 px-6 py-3.5 flex items-center justify-between shadow-md sticky top-0 z-30">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-36">
              <Image
                src={logoImg}
                alt="Quality Conveyancing"
                fill
                className="object-contain object-left filter brightness-110"
                priority
              />
            </div>
            <div className="hidden sm:block border-l border-white/20 pl-3">
              <span className="block text-[10px] text-tealAccent uppercase tracking-widest font-bold">
                Admin Control Center
              </span>
            </div>
          </Link>
        </div>

        {/* Current Active Staff Badge & Logout */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-3 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-xl">
            <div className="w-7 h-7 rounded-full bg-tealAccent/30 text-tealAccent flex items-center justify-center font-bold text-xs border border-tealAccent/40">
              {currentUser.name.charAt(0)}
            </div>
            <div className="text-left">
              <span className="block text-xs font-bold text-white leading-tight">{currentUser.name}</span>
              <span className="block text-[10px] text-tealAccent font-medium">{currentUser.role}</span>
            </div>
          </div>

          <Link
            href="/"
            target="_blank"
            className="hidden sm:flex items-center gap-1.5 text-xs text-white/80 hover:text-white transition bg-white/10 border border-white/15 px-3 py-1.5 rounded-lg"
          >
            <span>Live Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 text-xs text-rose-300 hover:text-white bg-rose-950/60 border border-rose-800/80 px-3 py-1.5 rounded-lg transition"
            title="Sign out"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      {/* Main Workspace with Brand Styled Navigation Sidebar */}
      <div className="flex-1 flex overflow-hidden">
        {/* Navigation Sidebar */}
        <nav className="w-64 bg-[#0d2622] text-white border-r border-white/10 flex flex-col justify-between p-4 shrink-0">
          <div className="space-y-1.5">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold tracking-wide transition ${
                activeTab === "dashboard"
                  ? "bg-tealAccent text-white shadow-md"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              <TrendingUp className="w-4 h-4 text-emerald-300" />
              <span>Executive Dashboard</span>
            </button>

            <button
              onClick={() => setActiveTab("chat")}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold tracking-wide transition ${
                activeTab === "chat"
                  ? "bg-tealAccent text-white shadow-md"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-emerald-300" />
                <span>Live Chat Support</span>
              </span>
              {totalUnreadChat > 0 && (
                <span className="bg-rose-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold animate-pulse">
                  {totalUnreadChat}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab("quotes")}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold tracking-wide transition ${
                activeTab === "quotes"
                  ? "bg-tealAccent text-white shadow-md"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="flex items-center gap-3">
                <Calculator className="w-4 h-4 text-emerald-300" />
                <span>Quote Inquiries</span>
              </span>
              <span className="text-[11px] text-white/50 font-mono">{quotes.length}</span>
            </button>

            <button
              onClick={() => setActiveTab("contacts")}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold tracking-wide transition ${
                activeTab === "contacts"
                  ? "bg-tealAccent text-white shadow-md"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="flex items-center gap-3">
                <Inbox className="w-4 h-4 text-emerald-300" />
                <span>Contact Form Leads</span>
              </span>
              <span className="text-[11px] text-white/50 font-mono">{contacts.length}</span>
            </button>

            <div className="pt-4 pb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-tealAccent/90 px-3">
                Content & Publishing
              </span>
            </div>

            <button
              onClick={() => setActiveTab("blogs")}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold tracking-wide transition ${
                activeTab === "blogs"
                  ? "bg-tealAccent text-white shadow-md"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="flex items-center gap-3">
                <FileText className="w-4 h-4 text-emerald-300" />
                <span>Manage Articles</span>
              </span>
              <span className="text-[11px] text-white/50 font-mono">{blogs.length}</span>
            </button>

            <button
              onClick={() => {
                resetBlogForm();
                setActiveTab("new_blog");
              }}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold tracking-wide transition ${
                activeTab === "new_blog"
                  ? "bg-tealAccent text-white shadow-md"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              <PlusCircle className="w-4 h-4 text-emerald-300" />
              <span>{editingBlogId ? "Editing Article" : "Write Article"}</span>
            </button>

            {/* SUPER ADMIN RESTRICTED: Role & User Management */}
            {isSuperAdmin && (
              <>
                <div className="pt-4 pb-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 px-3 flex items-center gap-1.5">
                    <Shield className="w-3 h-3" /> Staff Roles
                  </span>
                </div>

                <button
                  onClick={() => setActiveTab("team_roles")}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold tracking-wide transition ${
                    activeTab === "team_roles"
                      ? "bg-amber-700 text-white shadow-md"
                      : "text-amber-300/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Users className="w-4 h-4 text-amber-300" />
                    <span>Manage Staff & Roles</span>
                  </span>
                  <span className="text-[11px] font-mono">{adminUsers.length}</span>
                </button>
              </>
            )}
          </div>

          <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-[11px] text-white/70 leading-relaxed">
            <span className="font-bold text-tealAccent block mb-0.5">Role System Active:</span>
            Replying as <strong className="text-white">{currentUser.name}</strong> ({currentUser.role}).
          </div>
        </nav>

        {/* Main Content Viewport */}
        <main className="flex-1 flex overflow-hidden bg-lightBg">
          {/* ========================================================================= */}
          {/* TAB 1: EXECUTIVE DASHBOARD */}
          {/* ========================================================================= */}
          {activeTab === "dashboard" && (
            <div className="flex-1 overflow-y-auto p-8 max-w-6xl mx-auto w-full space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-tealAccent block mb-1">
                  Conveyancing Operations Overview
                </span>
                <h1 className="text-3xl font-serif font-bold text-legalDark">
                  Welcome back, {currentUser.name}
                </h1>
                <p className="text-xs text-textMuted mt-1">
                  Overview of customer live chats, instant fee calculations, and published legal guides.
                </p>
              </div>

              {/* Metric Cards (Brand Warm Palette) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="bg-white border border-[#4a7c59]/20 rounded-2xl p-5 shadow-xs">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-textMuted uppercase tracking-wider">
                      Live Inquiries
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#e8f5ed] text-tealAccent flex items-center justify-center">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-legalDark font-serif">{sessions.length}</div>
                  <span className="text-[11px] text-tealAccent font-semibold block mt-1">
                    {totalUnreadChat} waiting for response
                  </span>
                </div>

                <div className="bg-white border border-[#4a7c59]/20 rounded-2xl p-5 shadow-xs">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-textMuted uppercase tracking-wider">
                      Instant Quotes
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#fcf0e8] text-amber-700 flex items-center justify-center">
                      <Calculator className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-legalDark font-serif">{quotes.length}</div>
                  <span className="text-[11px] text-amber-800 font-semibold block mt-1">
                    Calculated & saved to database
                  </span>
                </div>

                <div className="bg-white border border-[#4a7c59]/20 rounded-2xl p-5 shadow-xs">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-textMuted uppercase tracking-wider">
                      Contact Inquiries
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#f3effa] text-purple-700 flex items-center justify-center">
                      <Inbox className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-legalDark font-serif">{contacts.length}</div>
                  <span className="text-[11px] text-purple-800 font-semibold block mt-1">
                    {contacts.filter((c) => c.status === "new").length} new leads
                  </span>
                </div>

                <div className="bg-white border border-[#4a7c59]/20 rounded-2xl p-5 shadow-xs">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-textMuted uppercase tracking-wider">
                      Published Blogs
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#e8f1f5] text-sky-700 flex items-center justify-center">
                      <FileText className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-legalDark font-serif">{blogs.length}</div>
                  <span className="text-[11px] text-sky-800 font-semibold block mt-1">
                    Active on public site
                  </span>
                </div>
              </div>

              {/* Two Column Section */}
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Recent Live Chats */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                    <h3 className="font-bold text-sm text-legalDark flex items-center gap-2 font-serif">
                      <MessageSquare className="w-4 h-4 text-tealAccent" />
                      Recent Live Chats
                    </h3>
                    <button
                      onClick={() => setActiveTab("chat")}
                      className="text-xs text-tealAccent hover:underline font-bold"
                    >
                      Open Live Window →
                    </button>
                  </div>

                  <div className="space-y-3">
                    {sessions.slice(0, 4).map((s) => (
                      <div
                        key={s.sessionId}
                        onClick={() => {
                          setSelectedSessionId(s.sessionId);
                          setActiveTab("chat");
                        }}
                        className="p-3 bg-warmGray/50 hover:bg-warmGray rounded-xl cursor-pointer transition flex items-center justify-between border border-transparent hover:border-gray-200"
                      >
                        <div>
                          <div className="font-bold text-xs text-legalDark flex items-center gap-1.5">
                            {s.clientName}
                            {s.unreadCountForAdmin > 0 && (
                              <span className="bg-rose-500 text-white text-[9px] px-1.5 py-0.2 rounded-full font-bold">
                                {s.unreadCountForAdmin}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-textMuted truncate max-w-xs mt-0.5">
                            {s.lastMessageText || "Session started"}
                          </p>
                        </div>
                        <span className="text-[10px] text-textMuted">
                          {s.lastMessageAt ? new Date(s.lastMessageAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : ""}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent Quotes */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                    <h3 className="font-bold text-sm text-legalDark flex items-center gap-2 font-serif">
                      <Calculator className="w-4 h-4 text-tealAccent" />
                      Recent Quote Inquiries
                    </h3>
                    <button
                      onClick={() => setActiveTab("quotes")}
                      className="text-xs text-tealAccent hover:underline font-bold"
                    >
                      View All Quotes →
                    </button>
                  </div>

                  <div className="space-y-3">
                    {quotes.slice(0, 4).map((q) => (
                      <div
                        key={q._id}
                        className="p-3 bg-warmGray/50 rounded-xl flex items-center justify-between border border-gray-100"
                      >
                        <div>
                          <div className="font-bold text-xs text-legalDark">
                            {q.clientName} • <span className="text-tealAccent font-semibold">{q.transactionType}</span>
                          </div>
                          <p className="text-[11px] text-textMuted mt-0.5">
                            {q.clientEmail} • {q.clientPhone}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="font-bold text-xs text-legalDark block font-serif">{q.totalIncVat}</span>
                          <span className="text-[10px] text-tealAccent font-semibold flex items-center gap-1 justify-end">
                            <Check className="w-3 h-3" /> Saved & Emailed
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 2: LIVE CHAT SYSTEM */}
          {/* ========================================================================= */}
          {activeTab === "chat" && (
            <div className="flex-1 flex overflow-hidden">
              {/* Sessions Sidebar */}
              <aside className="w-80 sm:w-96 bg-white border-r border-gray-200 flex flex-col">
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-3">
                    <h2 className="text-sm font-bold uppercase tracking-wider text-legalDark flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-tealAccent" />
                      Client Inquiries ({sessions.length})
                    </h2>
                    <button
                      onClick={fetchDashboardData}
                      className="p-1 text-textMuted hover:text-legalDark rounded transition"
                      title="Refresh"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="relative">
                    <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={searchChat}
                      onChange={(e) => setSearchChat(e.target.value)}
                      placeholder="Search conversations..."
                      className="w-full pl-9 pr-3 py-1.5 bg-[#f7faf7] border border-gray-200 rounded-lg text-xs text-legalDark placeholder-gray-400 focus:outline-none focus:border-tealAccent"
                    />
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto divide-y divide-gray-100">
                  {filteredChatSessions.length === 0 ? (
                    <div className="p-8 text-center text-textMuted text-xs">No active chat sessions.</div>
                  ) : (
                    paginatedChatSessions.map((session) => {
                        const isSelected = session.sessionId === selectedSessionId;
                        return (
                          <div
                            key={session.sessionId}
                            onClick={() => setSelectedSessionId(session.sessionId)}
                            className={`p-4 cursor-pointer transition ${
                              isSelected
                                ? "bg-warmGray border-l-4 border-tealAccent"
                                : "hover:bg-gray-50"
                            }`}
                          >
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-bold text-xs text-legalDark truncate">
                                {session.clientName || "Visitor"}
                              </span>
                              <div className="flex items-center gap-1">
                                {session.lockedBy && session.lockedBy !== (currentUser._id || currentUser.id) && (
                                  <span className="bg-amber-100 text-amber-800 border border-amber-300 text-[9px] px-1.5 py-0.5 rounded-full font-bold flex items-center gap-1">
                                    <Lock className="w-2.5 h-2.5" />
                                    Active by {session.lockedByName?.split(" ")[0]}
                                  </span>
                                )}
                                {session.unreadCountForAdmin > 0 && (
                                  <span className="bg-tealAccent text-white font-bold text-[9px] px-1.5 py-0.5 rounded-full">
                                    {session.unreadCountForAdmin} new
                                  </span>
                                )}
                              </div>
                            </div>
                            <p className="text-[11px] text-textMuted truncate">
                              {session.lastMessageText || "No messages yet"}
                            </p>
                            <span className="text-[10px] text-textMuted block mt-1">
                              {session.lastMessageAt
                                ? new Date(session.lastMessageAt).toLocaleTimeString([], {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })
                                : ""}
                            </span>
                          </div>
                        );
                      })
                  )}
                </div>

                {/* Chat Sessions Pagination */}
                {totalChatPages > 1 && (
                  <div className="p-3 bg-[#f7faf7] border-t border-gray-200 flex items-center justify-between text-xs text-textMuted">
                    <span className="text-[10px]">
                      Page {chatPage} of {totalChatPages}
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setChatPage((p) => Math.max(1, p - 1))}
                        disabled={chatPage === 1}
                        className="p-1 rounded border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-white text-legalDark"
                        title="Previous page"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => setChatPage((p) => Math.min(totalChatPages, p + 1))}
                        disabled={chatPage === totalChatPages}
                        className="p-1 rounded border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-white text-legalDark"
                        title="Next page"
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </aside>

              {/* Chat Viewport */}
              <section className="flex-1 flex flex-col bg-[#f7faf7]">
                {currentSession ? (
                  <>
                    <div className="p-4 bg-white border-b border-gray-200 flex items-center justify-between shadow-xs">
                      <div>
                        <h3 className="font-bold text-sm text-legalDark flex items-center gap-2 font-serif">
                          {currentSession.clientName}
                          <span className="w-2.5 h-2.5 rounded-full bg-tealAccent animate-pulse"></span>
                        </h3>
                        <p className="text-xs text-textMuted">
                          {currentSession.clientEmail ? `${currentSession.clientEmail} • ` : ""}
                          {currentSession.clientPhone ? `${currentSession.clientPhone} • ` : ""}
                          Session: {currentSession.sessionId}
                        </p>
                      </div>

                      <div className="text-right">
                        <span className="text-xs text-textMuted">Responding as:</span>
                        <span className="block text-xs font-bold text-tealAccent">
                          {currentUser.name} ({currentUser.role})
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6 space-y-4">
                      {currentSession.messages?.map((msg, index) => {
                        const isAdmin = msg.sender === "admin";
                        return (
                          <div
                            key={index}
                            className={`flex flex-col ${isAdmin ? "items-end" : "items-start"}`}
                          >
                            <span className="text-[10px] text-textMuted mb-1 px-1">
                              {msg.senderName} •{" "}
                              {new Date(msg.timestamp).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </span>
                            <div
                              className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                                isAdmin
                                  ? "bg-legalDark text-white rounded-br-none shadow-sm"
                                  : "bg-white text-legalDark border border-gray-200 rounded-bl-none shadow-sm"
                              }`}
                            >
                              {msg.text}
                            </div>
                          </div>
                        );
                      })}

                      {clientIsTyping && (
                        <div className="text-xs text-tealAccent italic flex items-center gap-2 py-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-tealAccent animate-bounce"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-tealAccent animate-bounce [animation-delay:0.2s]"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-tealAccent animate-bounce [animation-delay:0.4s]"></div>
                          {currentSession.clientName} is typing...
                        </div>
                      )}
                      <div ref={messagesEndRef} />
                    </div>

                    {/* Lock Warning Banner or Active Form */}
                    {currentSession.lockedBy && currentSession.lockedBy !== (currentUser._id || currentUser.id) ? (
                      <div className="p-4 bg-amber-50 border-t border-amber-200 flex items-center justify-between text-xs text-amber-900">
                        <div className="flex items-center gap-2">
                          <Lock className="w-4 h-4 text-amber-700 shrink-0" />
                          <span>
                            This chat is currently claimed and being answered by{" "}
                            <strong className="text-legalDark">{currentSession.lockedByName}</strong> (
                            {currentSession.lockedByRole || "Solicitor"}). Other staff members cannot send replies to avoid conflicting responses.
                          </span>
                        </div>
                        {currentUser.role === "Super Admin" && (
                          <button
                            onClick={() => {
                              const socket = getSocket();
                              socket.emit("release_chat_lock", {
                                sessionId: currentSession.sessionId,
                                adminId: currentUser._id || currentUser.id,
                                force: true,
                              });
                            }}
                            className="bg-amber-800 hover:bg-amber-900 text-white px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider shrink-0 transition"
                          >
                            Force Unlock (Admin)
                          </button>
                        )}
                      </div>
                    ) : (
                      <form
                        onSubmit={handleSendAdminReply}
                        className="p-4 bg-white border-t border-gray-200 flex items-center gap-3 shadow-xs"
                      >
                        <input
                          type="text"
                          value={adminReply}
                          onChange={(e) => setAdminReply(e.target.value)}
                          placeholder={`Reply directly as ${currentUser.name} (${currentUser.role})...`}
                          className="flex-1 bg-[#f7faf7] border border-gray-200 rounded-xl px-4 py-3 text-sm text-legalDark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-tealAccent/20 focus:border-tealAccent"
                        />
                        <button
                          type="submit"
                          disabled={!adminReply.trim()}
                          className="bg-legalDark hover:bg-legalNavy disabled:opacity-40 text-white px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition shadow-md"
                        >
                          <Send className="w-4 h-4" />
                          Send Reply
                        </button>
                      </form>
                    )}
                  </>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center text-textMuted p-8">
                    <MessageSquare className="w-12 h-12 mb-3 text-gray-300" />
                    <p className="text-sm font-medium">Select a live chat session from the left to answer questions.</p>
                  </div>
                )}
              </section>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 3: QUOTE INQUIRIES LIST (Saved in DB & Automatic Email Dispatch) */}
          {/* ========================================================================= */}
          {activeTab === "quotes" && (
            <div className="flex-1 overflow-y-auto p-8 max-w-6xl mx-auto w-full space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-tealAccent block mb-1">
                    Calculated Quotes Database
                  </span>
                  <h2 className="text-2xl font-serif font-bold text-legalDark">Instant Quote Inquiries</h2>
                  <p className="text-xs text-textMuted mt-1">
                    All calculations from Home & Quotes fee calculator are saved in MongoDB and dispatched to the customer.
                  </p>
                </div>
                <button
                  onClick={fetchDashboardData}
                  className="bg-white hover:bg-gray-50 border border-gray-200 text-legalDark px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition shadow-xs"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-tealAccent" /> Refresh Quotes
                </button>
              </div>

              {quotes.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
                  <Calculator className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-sm text-textMuted">No quote calculations submitted yet.</p>
                </div>
              ) : (
                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs text-legalDark">
                      <thead className="bg-[#f7faf7] border-b border-gray-200 text-[11px] font-bold uppercase tracking-wider text-textMuted">
                        <tr>
                          <th className="p-4">Customer</th>
                          <th className="p-4">Transaction</th>
                          <th className="p-4">Property Value</th>
                          <th className="p-4">Estimated Total</th>
                          <th className="p-4">Direct Email</th>
                          <th className="p-4">Date</th>
                          <th className="p-4 text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {paginatedQuotes.map((q) => (
                          <tr key={q._id} className="hover:bg-warmGray/40 transition">
                            <td className="p-4">
                              <span className="font-bold text-legalDark block">{q.clientName}</span>
                              <span className="text-textMuted text-[11px] block">{q.clientEmail}</span>
                              <span className="text-textMuted text-[11px] block">{q.clientPhone}</span>
                            </td>
                            <td className="p-4 font-semibold text-tealAccent">{q.transactionType} ({q.tenureType})</td>
                            <td className="p-4 font-mono font-medium">£{q.propertyValue || "N/A"}</td>
                            <td className="p-4 font-bold text-legalDark font-serif text-sm">
                              {q.totalIncVat}
                            </td>
                            <td className="p-4">
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#e8f5ed] text-tealAccent border border-tealAccent/20">
                                <CheckCircle className="w-3 h-3 text-tealAccent" />
                                Automated Sent
                              </span>
                            </td>
                            <td className="p-4 text-textMuted text-[11px]">
                              {new Date(q.createdAt).toLocaleDateString("en-GB", {
                                day: "numeric",
                                month: "short",
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </td>
                            <td className="p-4 text-right">
                              <button
                                onClick={() => setSelectedQuoteDetails(q)}
                                className="bg-[#e8f5ed] hover:bg-tealAccent hover:text-white text-tealAccent px-3 py-1.5 rounded-lg text-xs font-bold inline-flex items-center gap-1.5 transition"
                              >
                                <Eye className="w-3.5 h-3.5" />
                                View Details
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Quotes Pagination Bar */}
                  {totalQuotesPages > 1 && (
                    <div className="p-4 bg-[#f7faf7] border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-textMuted">
                      <div>
                        Showing <strong className="text-legalDark">{(quotesPage - 1) * quotesPerPage + 1}</strong> to{" "}
                        <strong className="text-legalDark">
                          {Math.min(quotesPage * quotesPerPage, quotes.length)}
                        </strong>{" "}
                        of <strong className="text-legalDark">{quotes.length}</strong> inquiries
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => setQuotesPage(1)}
                          disabled={quotesPage === 1}
                          className="p-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-white text-legalDark"
                          title="First page"
                        >
                          <ChevronsLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setQuotesPage((p) => Math.max(1, p - 1))}
                          disabled={quotesPage === 1}
                          className="p-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-white text-legalDark"
                          title="Previous page"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>

                        <div className="px-3 py-1 font-semibold text-legalDark text-xs">
                          Page {quotesPage} of {totalQuotesPages}
                        </div>

                        <button
                          onClick={() => setQuotesPage((p) => Math.min(totalQuotesPages, p + 1))}
                          disabled={quotesPage === totalQuotesPages}
                          className="p-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-white text-legalDark"
                          title="Next page"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setQuotesPage(totalQuotesPages)}
                          disabled={quotesPage === totalQuotesPages}
                          className="p-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-white text-legalDark"
                          title="Last page"
                        >
                          <ChevronsRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Quote Questionnaire Details Modal */}
              {selectedQuoteDetails && (
                <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
                  <div className="bg-white border border-gray-200 rounded-3xl max-w-xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
                    <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-tealAccent block mb-0.5">
                          Quote Enquiry Details
                        </span>
                        <h3 className="text-xl font-bold font-serif text-legalDark">
                          {selectedQuoteDetails.clientName}
                        </h3>
                      </div>
                      <button
                        onClick={() => setSelectedQuoteDetails(null)}
                        className="p-1.5 text-textMuted hover:text-legalDark bg-gray-100 rounded-xl"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="space-y-4 text-xs">
                      {/* Contact Info Card */}
                      <div className="bg-[#f7faf7] p-4 rounded-2xl border border-gray-200 grid grid-cols-2 gap-3">
                        <div>
                          <span className="text-textMuted block mb-0.5">Email Address:</span>
                          <a href={`mailto:${selectedQuoteDetails.clientEmail}`} className="text-tealAccent font-bold underline">
                            {selectedQuoteDetails.clientEmail}
                          </a>
                        </div>
                        <div>
                          <span className="text-textMuted block mb-0.5">Telephone Number:</span>
                          <a href={`tel:${selectedQuoteDetails.clientPhone}`} className="text-tealAccent font-bold">
                            {selectedQuoteDetails.clientPhone}
                          </a>
                        </div>
                        <div>
                          <span className="text-textMuted block mb-0.5">Transaction Type:</span>
                          <span className="text-legalDark font-bold">{selectedQuoteDetails.transactionType}</span>
                        </div>
                        <div>
                          <span className="text-textMuted block mb-0.5">Property Tenure:</span>
                          <span className="text-legalDark font-bold">{selectedQuoteDetails.tenureType}</span>
                        </div>
                      </div>

                      {/* Fee Breakdown Card */}
                      <div className="bg-[#f7faf7] p-4 rounded-2xl border border-gray-200 space-y-2">
                        <span className="font-bold text-legalDark block mb-1">Financial Calculation:</span>
                        <div className="flex justify-between text-textMuted">
                          <span>Property Value:</span>
                          <span className="text-legalDark font-mono font-bold">£{selectedQuoteDetails.propertyValue}</span>
                        </div>
                        <div className="flex justify-between text-textMuted">
                          <span>Legal Subtotal (Excl. VAT):</span>
                          <span className="text-legalDark font-mono">{selectedQuoteDetails.subtotal}</span>
                        </div>
                        <div className="flex justify-between text-textMuted">
                          <span>VAT (20%):</span>
                          <span className="text-legalDark font-mono">{selectedQuoteDetails.vatAmount}</span>
                        </div>
                        <div className="border-t border-gray-200 pt-2 flex justify-between font-bold text-sm text-legalDark font-serif">
                          <span>Total Estimated Fee:</span>
                          <span>{selectedQuoteDetails.totalIncVat}</span>
                        </div>
                      </div>

                      {/* Questionnaire Specific Responses */}
                      {selectedQuoteDetails.questionnaireAnswers && (
                        <div className="bg-[#f7faf7] p-4 rounded-2xl border border-gray-200">
                          <span className="font-bold text-legalDark block mb-2">Questionnaire Answers:</span>
                          <div className="bg-white p-3 rounded-xl border border-gray-200 space-y-1.5 font-mono text-[11px] text-textMuted">
                            {typeof selectedQuoteDetails.questionnaireAnswers === "object" ? (
                              Object.entries(selectedQuoteDetails.questionnaireAnswers).map(([k, v]) => (
                                <div key={k} className="flex justify-between gap-4 py-0.5 border-b border-gray-100">
                                  <span className="text-textMuted">{k}:</span>
                                  <span className="text-legalDark font-semibold text-right">{String(v)}</span>
                                </div>
                              ))
                            ) : (
                              <span>{String(selectedQuoteDetails.questionnaireAnswers)}</span>
                            )}
                          </div>
                        </div>
                      )}

                      <div className="pt-2 flex items-center justify-between text-[11px] text-textMuted">
                        <span>Submitted on {new Date(selectedQuoteDetails.createdAt).toLocaleString("en-GB")}</span>
                        <span className="text-tealAccent font-bold">✓ Client Copy Dispatched</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 4: CONTACT FORM LEADS */}
          {/* ========================================================================= */}
          {activeTab === "contacts" && (
            <div className="flex-1 overflow-y-auto p-8 max-w-6xl mx-auto w-full space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-tealAccent block mb-1">
                    Client Submissions
                  </span>
                  <h2 className="text-2xl font-serif font-bold text-legalDark">Contact Page Inquiries</h2>
                  <p className="text-xs text-textMuted mt-1">
                    Direct inquiries submitted via the public Contact Us form.
                  </p>
                </div>
                <button
                  onClick={fetchDashboardData}
                  className="bg-white hover:bg-gray-50 border border-gray-200 text-legalDark px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition shadow-xs"
                >
                  <RefreshCw className="w-3.5 h-3.5 text-tealAccent" /> Refresh Leads
                </button>
              </div>

              {contacts.length === 0 ? (
                <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
                  <Inbox className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-sm text-textMuted">No contact inquiries submitted yet.</p>
                </div>
              ) : (
                <div className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    {paginatedContacts.map((c) => (
                      <div
                        key={c._id}
                        className="bg-white border border-gray-200 rounded-2xl p-5 shadow-xs space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-legalDark font-serif">{c.name}</span>
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#f3effa] text-purple-800 border border-purple-200">
                            {c.service}
                          </span>
                        </div>

                        <div className="text-xs text-textMuted space-y-1">
                          <div>Email: <a href={`mailto:${c.email}`} className="text-tealAccent font-semibold underline">{c.email}</a></div>
                          <div>Phone: <a href={`tel:${c.phone}`} className="text-tealAccent font-semibold">{c.phone}</a></div>
                        </div>

                        {c.message && (
                          <div className="bg-[#f7faf7] p-3 rounded-xl text-xs text-legalDark leading-relaxed border border-gray-200 font-sans italic">
                            "{c.message}"
                          </div>
                        )}

                        <div className="text-[10px] text-textMuted pt-1">
                          Received on {new Date(c.createdAt).toLocaleString("en-GB")}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Contacts Pagination Bar */}
                  {totalContactsPages > 1 && (
                    <div className="p-4 bg-white border border-gray-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-textMuted shadow-xs">
                      <div>
                        Showing <strong className="text-legalDark">{(contactsPage - 1) * contactsPerPage + 1}</strong> to{" "}
                        <strong className="text-legalDark">
                          {Math.min(contactsPage * contactsPerPage, contacts.length)}
                        </strong>{" "}
                        of <strong className="text-legalDark">{contacts.length}</strong> inquiries
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => setContactsPage(1)}
                          disabled={contactsPage === 1}
                          className="p-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-white text-legalDark"
                          title="First page"
                        >
                          <ChevronsLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setContactsPage((p) => Math.max(1, p - 1))}
                          disabled={contactsPage === 1}
                          className="p-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-white text-legalDark"
                          title="Previous page"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>

                        <div className="px-3 py-1 font-semibold text-legalDark text-xs">
                          Page {contactsPage} of {totalContactsPages}
                        </div>

                        <button
                          onClick={() => setContactsPage((p) => Math.min(totalContactsPages, p + 1))}
                          disabled={contactsPage === totalContactsPages}
                          className="p-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-white text-legalDark"
                          title="Next page"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setContactsPage(totalContactsPages)}
                          disabled={contactsPage === totalContactsPages}
                          className="p-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-white text-legalDark"
                          title="Last page"
                        >
                          <ChevronsRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 5: BLOG DIRECTORY */}
          {/* ========================================================================= */}
          {activeTab === "blogs" && (
            <div className="flex-1 overflow-y-auto p-8 max-w-6xl mx-auto w-full space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-tealAccent block mb-1">
                    Editorial Publications
                  </span>
                  <h2 className="text-2xl font-serif font-bold text-legalDark">Articles & Publications</h2>
                  <p className="text-xs text-textMuted mt-1">
                    Manage, edit, or publish legal articles to the Quality Conveyancing public website.
                  </p>
                </div>

                <button
                  onClick={() => {
                    resetBlogForm();
                    setActiveTab("new_blog");
                  }}
                  className="bg-legalDark hover:bg-legalNavy text-white px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition shadow-md"
                >
                  <PlusCircle className="w-4 h-4 text-tealAccent" />
                  Write New Post
                </button>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {paginatedBlogs.map((blog) => (
                    <div
                      key={blog._id || blog.slug}
                      className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs flex flex-col justify-between hover:border-tealAccent/50 transition"
                    >
                      <div>
                        {blog.coverImage && (
                          <div className="h-44 w-full overflow-hidden bg-warmGray">
                            <img
                              src={blog.coverImage}
                              alt={blog.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div className="p-5">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#e8f5ed] text-tealAccent rounded-full border border-tealAccent/20">
                              {blog.category}
                            </span>
                            <span
                              className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                blog.isPublished
                                  ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                                  : "bg-amber-50 text-amber-800 border border-amber-200"
                              }`}
                            >
                              {blog.isPublished ? "Published" : "Draft"}
                            </span>
                          </div>

                          <h3 className="text-base font-bold font-serif text-legalDark mb-2 leading-snug">
                            {blog.title}
                          </h3>

                          <p className="text-xs text-textMuted line-clamp-2 leading-relaxed">
                            {blog.excerpt}
                          </p>
                        </div>
                      </div>

                      <div className="p-5 pt-0 border-t border-gray-100 mt-4 flex items-center justify-between">
                        <span className="text-[11px] text-textMuted">
                          {blog.author} • {blog.readTime}
                        </span>

                        <div className="flex items-center gap-2">
                          <Link
                            href={`/blogs/${blog.slug}`}
                            target="_blank"
                            className="p-2 text-textMuted hover:text-legalDark hover:bg-gray-100 rounded-lg transition"
                            title="View on site"
                          >
                            <Eye className="w-4 h-4" />
                          </Link>

                          <button
                            onClick={() => handleEditBlog(blog)}
                            className="p-2 text-tealAccent hover:bg-[#e8f5ed] rounded-lg transition"
                            title="Edit Blog"
                          >
                            <Edit className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => handleDeleteBlog(blog._id || blog.id)}
                            className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition"
                            title="Delete Blog"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Blogs Pagination Bar */}
                {totalBlogsPages > 1 && (
                  <div className="p-4 bg-white border border-gray-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-textMuted shadow-xs">
                    <div>
                      Showing <strong className="text-legalDark">{(blogsPage - 1) * blogsPerPage + 1}</strong> to{" "}
                      <strong className="text-legalDark">
                        {Math.min(blogsPage * blogsPerPage, blogs.length)}
                      </strong>{" "}
                      of <strong className="text-legalDark">{blogs.length}</strong> articles
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setBlogsPage(1)}
                        disabled={blogsPage === 1}
                        className="p-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-white text-legalDark"
                        title="First page"
                      >
                        <ChevronsLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setBlogsPage((p) => Math.max(1, p - 1))}
                        disabled={blogsPage === 1}
                        className="p-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-white text-legalDark"
                        title="Previous page"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>

                      <div className="px-3 py-1 font-semibold text-legalDark text-xs">
                        Page {blogsPage} of {totalBlogsPages}
                      </div>

                      <button
                        onClick={() => setBlogsPage((p) => Math.min(totalBlogsPages, p + 1))}
                        disabled={blogsPage === totalBlogsPages}
                        className="p-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-white text-legalDark"
                        title="Next page"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setBlogsPage(totalBlogsPages)}
                        disabled={blogsPage === totalBlogsPages}
                        className="p-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-white text-legalDark"
                        title="Last page"
                      >
                        <ChevronsRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 6: WRITE / EDIT BLOG */}
          {/* ========================================================================= */}
          {activeTab === "new_blog" && (
            <div className="flex-1 overflow-y-auto p-8 max-w-4xl mx-auto w-full">
              <div className="mb-6 flex items-center justify-between pb-4 border-b border-gray-200">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-tealAccent block mb-1">
                    Article Publishing
                  </span>
                  <h2 className="text-2xl font-serif font-bold text-legalDark">
                    {editingBlogId ? "Edit Article" : "Create New Legal Article"}
                  </h2>
                  <p className="text-xs text-textMuted mt-1">
                    Posting directly as <strong className="text-tealAccent">{currentUser.name}</strong> ({currentUser.role}).
                  </p>
                </div>

                <button
                  onClick={() => {
                    resetBlogForm();
                    setActiveTab("blogs");
                  }}
                  className="text-xs font-semibold text-textMuted hover:text-legalDark transition"
                >
                  Cancel
                </button>
              </div>

              {blogSaveStatus && (
                <div className="p-3 mb-6 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  {blogSaveStatus}
                </div>
              )}

              <form onSubmit={handleSaveBlog} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-legalDark uppercase tracking-wider mb-2">
                      Article Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={blogFormData.title}
                      onChange={(e) => setBlogFormData({ ...blogFormData, title: e.target.value })}
                      placeholder="e.g. Navigating 2026 Stamp Duty Thresholds"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-legalDark focus:outline-none focus:border-tealAccent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-legalDark uppercase tracking-wider mb-2">
                      URL Slug
                    </label>
                    <input
                      type="text"
                      value={blogFormData.slug}
                      onChange={(e) => setBlogFormData({ ...blogFormData, slug: e.target.value })}
                      placeholder="e.g. stamp-duty-thresholds-guide"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-legalDark focus:outline-none focus:border-tealAccent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-legalDark uppercase tracking-wider mb-2">
                      Category
                    </label>
                    <select
                      value={blogFormData.category}
                      onChange={(e) => setBlogFormData({ ...blogFormData, category: e.target.value })}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-legalDark focus:outline-none focus:border-tealAccent"
                    >
                      <option value="Conveyancing">Conveyancing</option>
                      <option value="Property Law">Property Law</option>
                      <option value="Leasehold">Leasehold</option>
                      <option value="Guides">Guides</option>
                      <option value="Remortgage">Remortgage</option>
                      <option value="New Build">New Build</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-legalDark uppercase tracking-wider mb-2">
                      Author Name
                    </label>
                    <input
                      type="text"
                      value={blogFormData.author}
                      onChange={(e) => setBlogFormData({ ...blogFormData, author: e.target.value })}
                      placeholder={currentUser.name}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-legalDark focus:outline-none focus:border-tealAccent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-legalDark uppercase tracking-wider mb-2">
                      Read Duration
                    </label>
                    <input
                      type="text"
                      value={blogFormData.readTime}
                      onChange={(e) => setBlogFormData({ ...blogFormData, readTime: e.target.value })}
                      placeholder="5 min read"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-legalDark focus:outline-none focus:border-tealAccent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-legalDark uppercase tracking-wider mb-2">
                    Cover Image
                  </label>
                  <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <input
                      type="text"
                      value={blogFormData.coverImage}
                      onChange={(e) => setBlogFormData({ ...blogFormData, coverImage: e.target.value })}
                      placeholder="Image URL or upload from disk..."
                      className="flex-1 bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-legalDark focus:outline-none focus:border-tealAccent"
                    />

                    <label className="cursor-pointer bg-legalDark hover:bg-legalNavy text-white text-xs px-4 py-2.5 rounded-xl font-bold uppercase tracking-wider transition flex items-center gap-2 shadow-xs">
                      <ImageIcon className="w-4 h-4 text-tealAccent" />
                      <span>{uploadingImage ? "Uploading..." : "Upload File"}</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        disabled={uploadingImage}
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-legalDark uppercase tracking-wider mb-2">
                    Summary / Excerpt *
                  </label>
                  <textarea
                    rows={2}
                    required
                    value={blogFormData.excerpt}
                    onChange={(e) => setBlogFormData({ ...blogFormData, excerpt: e.target.value })}
                    placeholder="Short summary displayed on cards..."
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-legalDark focus:outline-none focus:border-tealAccent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-legalDark uppercase tracking-wider mb-2">
                    Content (HTML formatting supported) *
                  </label>
                  <textarea
                    rows={10}
                    required
                    value={blogFormData.content}
                    onChange={(e) => setBlogFormData({ ...blogFormData, content: e.target.value })}
                    placeholder="<h2>Key Legal Insights</h2><p>Full article paragraphs...</p>"
                    className="w-full font-mono bg-[#f7faf7] border border-gray-200 rounded-xl p-4 text-xs text-legalDark focus:outline-none focus:border-tealAccent leading-relaxed"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="publishCheck"
                      checked={blogFormData.isPublished}
                      onChange={(e) => setBlogFormData({ ...blogFormData, isPublished: e.target.checked })}
                      className="w-4 h-4 rounded text-tealAccent focus:ring-tealAccent"
                    />
                    <label htmlFor="publishCheck" className="text-xs font-medium text-legalDark cursor-pointer">
                      Publish immediately to public website
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="bg-legalDark hover:bg-legalNavy text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition shadow-md flex items-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4 text-tealAccent" />
                    {editingBlogId ? "Save Article Updates" : "Publish Article"}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 7: TEAM & ROLE MANAGEMENT (Super Admin Only) */}
          {/* ========================================================================= */}
          {activeTab === "team_roles" && isSuperAdmin && (
            <div className="flex-1 overflow-y-auto p-8 max-w-6xl mx-auto w-full space-y-8">
              <div className="pb-4 border-b border-gray-200">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-[10px] font-bold uppercase tracking-wider mb-2 border border-amber-200">
                  <Shield className="w-3 h-3 text-amber-700" /> Super Admin Control
                </span>
                <h2 className="text-2xl font-serif font-bold text-legalDark">Staff Account & Role Control</h2>
                <p className="text-xs text-textMuted mt-1">
                  Create admin accounts and assign specific conveyancing roles (matching the Meet the Team structure).
                </p>
              </div>

              {/* Create Staff Account Form */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-xs">
                <h3 className="text-sm font-bold text-legalDark uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Users className="w-4 h-4 text-tealAccent" />
                  Create New Staff Account
                </h3>

                {adminCreateStatus && (
                  <div className="p-3 mb-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    {adminCreateStatus}
                  </div>
                )}

                <form onSubmit={handleCreateAdminUser} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-legalDark uppercase tracking-wider mb-2">
                        Staff Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={newAdminData.name}
                        onChange={(e) => setNewAdminData({ ...newAdminData, name: e.target.value })}
                        placeholder="e.g. Brinda Nicholson"
                        className="w-full bg-[#f7faf7] border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-legalDark focus:outline-none focus:border-tealAccent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-legalDark uppercase tracking-wider mb-2">
                        Staff Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={newAdminData.email}
                        onChange={(e) => setNewAdminData({ ...newAdminData, email: e.target.value })}
                        placeholder="e.g. brinda@qualityconveyancing.co.uk"
                        className="w-full bg-[#f7faf7] border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-legalDark focus:outline-none focus:border-tealAccent"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-legalDark uppercase tracking-wider mb-2">
                        Assigned Role *
                      </label>
                      <select
                        value={newAdminData.role}
                        onChange={(e) => setNewAdminData({ ...newAdminData, role: e.target.value as AdminRole })}
                        className="w-full bg-[#f7faf7] border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-legalDark focus:outline-none focus:border-tealAccent"
                      >
                        {ALL_ROLES.map((r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-legalDark uppercase tracking-wider mb-2">
                        Initial Password *
                      </label>
                      <input
                        type="password"
                        required
                        value={newAdminData.password}
                        onChange={(e) => setNewAdminData({ ...newAdminData, password: e.target.value })}
                        placeholder="At least 6 characters"
                        className="w-full bg-[#f7faf7] border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-legalDark focus:outline-none focus:border-tealAccent"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-legalDark uppercase tracking-wider mb-2">
                        Contact Phone
                      </label>
                      <input
                        type="text"
                        value={newAdminData.phone}
                        onChange={(e) => setNewAdminData({ ...newAdminData, phone: e.target.value })}
                        placeholder="020 3763 6767"
                        className="w-full bg-[#f7faf7] border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-legalDark focus:outline-none focus:border-tealAccent"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="bg-legalDark hover:bg-legalNavy text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition shadow-md flex items-center gap-2"
                  >
                    <PlusCircle className="w-4 h-4 text-tealAccent" />
                    Register Staff Account
                  </button>
                </form>
              </div>

              {/* Staff Accounts List */}
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xs">
                <div className="p-4 bg-[#f7faf7] border-b border-gray-200">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-legalDark">
                    Existing Staff & Conveyancers ({adminUsers.length})
                  </h4>
                </div>

                <div className="divide-y divide-gray-100">
                  {paginatedStaff.map((user) => (
                    <div
                      key={user._id || user.id}
                      className="p-4 flex items-center justify-between hover:bg-warmGray/40 transition"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#e8f5ed] text-tealAccent font-bold flex items-center justify-center text-sm border border-tealAccent/20">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-sm text-legalDark flex items-center gap-2 font-serif">
                            {user.name}
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#e8f5ed] text-tealAccent border border-tealAccent/30">
                              {user.role}
                            </span>
                          </div>
                          <span className="text-xs text-textMuted">{user.email}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        {user.role !== "Super Admin" && (
                          <button
                            onClick={() => handleDeleteAdminUser(user._id || user.id)}
                            className="text-rose-500 hover:text-rose-700 p-2 rounded-lg hover:bg-rose-50 transition"
                            title="Remove account"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Staff Pagination Bar */}
                {totalStaffPages > 1 && (
                  <div className="p-4 bg-[#f7faf7] border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-textMuted">
                    <div>
                      Showing <strong className="text-legalDark">{(staffPage - 1) * staffPerPage + 1}</strong> to{" "}
                      <strong className="text-legalDark">
                        {Math.min(staffPage * staffPerPage, adminUsers.length)}
                      </strong>{" "}
                      of <strong className="text-legalDark">{adminUsers.length}</strong> staff accounts
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setStaffPage(1)}
                        disabled={staffPage === 1}
                        className="p-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-white text-legalDark"
                        title="First page"
                      >
                        <ChevronsLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setStaffPage((p) => Math.max(1, p - 1))}
                        disabled={staffPage === 1}
                        className="p-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-white text-legalDark"
                        title="Previous page"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>

                      <div className="px-3 py-1 font-semibold text-legalDark text-xs">
                        Page {staffPage} of {totalStaffPages}
                      </div>

                      <button
                        onClick={() => setStaffPage((p) => Math.min(totalStaffPages, p + 1))}
                        disabled={staffPage === totalStaffPages}
                        className="p-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-white text-legalDark"
                        title="Next page"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setStaffPage(totalStaffPages)}
                        disabled={staffPage === totalStaffPages}
                        className="p-1.5 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-white text-legalDark"
                        title="Last page"
                      >
                        <ChevronsRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
