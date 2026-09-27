"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Lock, CheckCircle2, AlertCircle, ShieldCheck } from "lucide-react";
import { API_URL } from "@/lib/api";
import logoImg from "@/assets/qc-logo.png";

function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    if (newPassword.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }

    setLoading(true);
    setStatusMessage(null);
    setErrorMessage(null);

    try {
      const res = await fetch(`${API_URL}/api/auth/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, newPassword }),
      });
      const data = await res.json();
      if (data.success) {
        setStatusMessage(data.message);
        setTimeout(() => {
          router.push("/admin");
        }, 2000);
      } else {
        setErrorMessage(data.error || "Failed to reset password.");
      }
    } catch (err: any) {
      setErrorMessage(err.message || "Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md bg-white border border-[#4a7c59]/20 rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1c3327] via-[#4a7c59] to-[#8fae98]"></div>

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
        <div className="w-12 h-12 bg-[#e8f5ed] text-tealAccent rounded-2xl flex items-center justify-center mx-auto mb-3 border border-tealAccent/20">
          <Lock className="w-6 h-6 text-tealAccent" />
        </div>
        <h1 className="text-2xl font-serif font-bold text-legalDark">Set New Password</h1>
        <p className="text-xs text-textMuted mt-1.5">
          Create a secure password for your conveyancer admin portal access.
        </p>
      </div>

      {statusMessage && (
        <div className="p-4 mb-6 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-600" />
          <span>{statusMessage} Redirecting to login...</span>
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
            New Password
          </label>
          <input
            type="password"
            required
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="At least 6 characters"
            className="w-full bg-[#f7faf7] border border-gray-200 rounded-xl px-4 py-3 text-sm text-legalDark focus:outline-none focus:border-tealAccent focus:ring-2 focus:ring-tealAccent/20 transition"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-legalDark uppercase tracking-wider mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Re-enter new password"
            className="w-full bg-[#f7faf7] border border-gray-200 rounded-xl px-4 py-3 text-sm text-legalDark focus:outline-none focus:border-tealAccent focus:ring-2 focus:ring-tealAccent/20 transition"
          />
        </div>

        <button
          type="submit"
          disabled={loading || !token}
          className="w-full bg-legalDark hover:bg-legalNavy disabled:opacity-50 text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition shadow-md flex items-center justify-center gap-2"
        >
          {loading ? "Updating..." : "Update Password"}
        </button>
      </form>

      <div className="mt-6 text-center">
        <Link href="/admin" className="text-xs text-textMuted hover:text-legalDark transition font-semibold">
          ← Return to Login
        </Link>
      </div>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen bg-lightBg text-legalDark flex items-center justify-center p-6 font-sans">
      <Suspense fallback={<div className="text-textMuted">Loading security parameters...</div>}>
        <ResetPasswordForm />
      </Suspense>
    </div>
  );
}
