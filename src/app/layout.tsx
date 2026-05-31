import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Makoti Detergents | Powerful Cleaning, Everyday Living",
  description:
    "Makoti Detergents — premium detergents and hygiene products designed to deliver powerful cleaning, freshness, and reliable performance. Zimbabwe's trusted cleaning brand for homes and businesses.",
  keywords: [
    "Zimbabwe detergents", "cleaning chemicals Zimbabwe", "washing powder Zimbabwe",
    "dishwashing liquid Zimbabwe", "pine gel Zimbabwe", "bleach suppliers Zimbabwe",
    "cleaning products Zimbabwe", "hygiene products Zimbabwe",
    "industrial detergents Zimbabwe", "household cleaning chemicals",
  ],
  openGraph: {
    title: "Makoti Detergents | Professional Cleaning Solutions",
    description: "Premium detergents and hygiene products for homes and businesses across Zimbabwe and Southern Africa.",
    type: "website",
    locale: "en_ZW",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-ink text-snow">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
