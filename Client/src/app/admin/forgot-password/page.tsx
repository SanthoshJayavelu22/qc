"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Mail, KeyRound, CheckCircle2, AlertCircle, ShieldCheck } from "lucide-react";
import { API_URL } from "@/lib/api";
import logoImg from "@/assets/qc-logo.png";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [devToken, setDevToken] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage(null);
    setErrorMessage(null);
    setDevToken(null);

    try {
      const res = await fetch(`${API_URL}/api/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatusMessage(data.message);
        if (data.resetTokenInDev) {
          setDevToken(data.resetTokenInDev);
        }
      } else {
        setErrorMessage(data.error || "Failed to process request");
      }
    } catch (err: any) {
      setErrorMessage(err.message || "Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-lightBg text-legalDark flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-md bg-white border border-[#4a7c59]/20 rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
        {/* Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1c3327] via-[#4a7c59] to-[#8fae98]"></div>

        <Link
          href="/admin"
          className="inline-flex items-center gap-2 text-xs font-semibold text-textMuted hover:text-legalDark transition mb-6 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1 text-tealAccent" />
          Back to Admin Login
        </Link>

        <div className="text-center mb-8">
          <div className="relative h-12 w-44 mx-auto mb-4">
            <Image
              src={logoImg}
              alt="Quality Conveyancing"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="w-12 h-12 bg-[#e8f5ed] text-tealAccent rounded-2xl flex items-center justify-center mx-auto mb-3 border border-tealAccent/20 shadow-xs">
            <KeyRound className="w-6 h-6 text-tealAccent" />
          </div>
          <h1 className="text-2xl font-serif font-bold text-legalDark">Reset Staff Password</h1>
          <p className="text-xs text-textMuted mt-1.5 leading-relaxed">
            Enter your official Quality Conveyancing email to receive a secure reset authorization link.
          </p>
        </div>

        {statusMessage && (
          <div className="p-4 mb-6 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-xs space-y-2">
            <div className="flex items-center gap-2 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Link Dispatched</span>
            </div>
            <p>{statusMessage}</p>

            {devToken && (
              <div className="mt-3 pt-3 border-t border-emerald-200">
                <span className="text-[10px] text-emerald-700 font-mono block mb-1">
                  Local Dev Direct Link:
                </span>
                <Link
                  href={`/admin/reset-password?token=${devToken}`}
                  className="underline font-bold text-tealAccent hover:text-legalDark break-all"
                >
                  Click here to set new password now
                </Link>
              </div>
            )}
          </div>
        )}

        {errorMessage && (
          <div className="p-4 mb-6 bg-rose-50 border border-rose-200 text-rose-700 rounded-2xl text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-legalDark uppercase tracking-wider mb-2">
              Staff Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-textMuted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="e.g. sarah@qualityconveyancing.co.uk"
                className="w-full bg-[#f7faf7] border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm text-legalDark placeholder-gray-400 focus:outline-none focus:border-tealAccent focus:ring-2 focus:ring-tealAccent/20 transition"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-legalDark hover:bg-legalNavy disabled:opacity-50 text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition shadow-md flex items-center justify-center gap-2"
          >
            {loading ? "Processing..." : "Send Reset Link"}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          <p className="text-[11px] text-textMuted flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-tealAccent" />
            Quality Conveyancing London Internal Systems
          </p>
        </div>
      </div>
    </div>
  );
}
