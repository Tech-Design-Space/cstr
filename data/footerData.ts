import { FooterSectionData } from "@/types/footer";

export const defaultFooterData: FooterSectionData = {
  logoType: "text", 
  logoImageUrl: "/jiba-logo.png", 

  companyName: "JIBA CONSTRUCTION",
  tagline: "Engineering Excellence & Structural Integrity",
  description:
    "Delivering premier commercial, civil infrastructure, and luxury residential projects with uncompromising safety and craftsmanship.",
  officeAddress: "Plot 12, Industrial Layout, Commercial Avenue, City Center",
  email: "info@jibaconstruction.com",
  workingHours: "Mon - Sat: 8:00 AM - 6:00 PM",
  quickLinks: [
    { label: "About Our Firm", href: "/about" },
    { label: "Featured Projects", href: "/projects" },
    { label: "Engineering Services", href: "/services" },
    { label: "Request Quotation", href: "/contact" },
    { label: "Privacy & Policy", href: "/privacy-policy" },
  ],
  servicesLinks: [
    { label: "Civil Infrastructure", href: "/services#civil" },
    { label: "Commercial Building", href: "/services#commercial" },
    { label: "Structural Engineering", href: "/services#structural" },
    { label: "Project Management", href: "/services#management" },
    { label: "Architectural Planning", href: "/services#architecture" },
  ],
  socialLinks: [
    { platform: "LinkedIn", href: "#", iconName: "linkedin" },
    { platform: "Twitter", href: "#", iconName: "twitter" },
    { platform: "Facebook", href: "#", iconName: "facebook" },
    { platform: "Instagram", href: "#", iconName: "instagram" },
  ],
  copyrightText: "© 2026 Jiba Construction. All rights reserved.",
};