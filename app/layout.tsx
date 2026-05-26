import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://ai-spend-audit-sigma-navy.vercel.app"),
  title: "AI Spend Audit",
  description:
    "Analyze AI tool spending and discover cost-saving opportunities instantly.",
  openGraph: {
    title: "AI Spend Audit",
    description:
      "Analyze AI tool spending and discover hidden overspending opportunities.",
    url: "https://ai-spend-audit-sigma-navy.vercel.app/",
    siteName: "AI Spend Audit",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Spend Audit",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Spend Audit",
    description:
      "Analyze AI tool spending and discover hidden overspending opportunities.",
    images: ["/og-image.png"],
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
