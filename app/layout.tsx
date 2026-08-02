import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/headerLayout";
import Footer from "@/components/ui/footerLayout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "JIBA CONSTRUCTION LIMITED | Real Estate, Developers & Civil Engineering",
  description:
    "Building today, securing tomorrow. Premium real estate development, realtor services, and civil engineering based in Abuja, Nigeria.",
  keywords: [
    "Jiba Construction",
    "Real Estate Abuja",
    "Civil Engineering Nigeria",
    "Realtors Abuja",
    "Property Developers",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cinzel.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
