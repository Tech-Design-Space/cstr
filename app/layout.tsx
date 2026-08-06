import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/headerLayout";
import Footer from "@/components/ui/footerLayout";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans-app",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-heading-app",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title:
    "T-SLAB CONSTRUCTION LIMITED | Structural Engineering, Real Estate & Development",
  description:
    "Innovative structural solutions and premium civil engineering services. Building durable structures and modern real estate solutions.",
  keywords: [
    "T-Slab Construction",
    "Structural Engineering",
    "T-Slab Decking",
    "Civil Engineering Nigeria",
    "Real Estate Developers",
    "Property Construction",
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
      className={`${plusJakartaSans.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <Navbar />

        {children}

        <Footer />

        <WhatsAppButton phoneNumber="+256787768137" />
      </body>
    </html>
  );
}