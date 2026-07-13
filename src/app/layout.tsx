import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quality Conveyancing | Specialist Property Solicitors London",
  description: "Expert property solicitors in London offering residential conveyancing, leasehold, remortgages, and more. No completion, no legal fee. Get a fixed-fee quote today.",
  keywords: ["Conveyancing Solicitors London", "Property Solicitors Ealing", "Residential Conveyancing", "Fixed Fee Conveyancing", "Property Lawyers", "Quality Conveyancing"],
  openGraph: {
    title: "Quality Conveyancing | Specialist Property Solicitors London",
    description: "Expert property solicitors offering swift, transparent, fixed-fee conveyancing. No completion, no legal fee.",
    type: "website",
    locale: "en_GB",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen bg-lightBg font-sans text-legalDark">{children}</body>
    </html>
  );
}
