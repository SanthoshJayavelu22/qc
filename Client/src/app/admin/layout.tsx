"use client";

import { usePathname } from "next/navigation";
import AdminPortal from "@/components/AdminPortal";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  if (
    pathname?.startsWith("/admin/forgot-password") ||
    pathname?.startsWith("/admin/reset-password")
  ) {
    return <>{children}</>;
  }

  return <AdminPortal />;
}
