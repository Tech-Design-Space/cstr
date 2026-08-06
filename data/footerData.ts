import { FooterSectionData } from "@/types/footer";

export const defaultFooterData: FooterSectionData = {
  logoType: "image",
  logoImageUrl: "/tslab-logo.png",

  companyName: "T-SLAB CONSTRUCTION COMPANY LTD",
  tagline: "Construction, Property Refurbishment & Interior Design",
  description:
    "Delivering premier residential builds, high-end property refurbishments, and bespoke interior fit-outs with uncompromising craftsmanship and structural integrity.",
  officeAddress: "Namugongo, Kampala, Uganda",
  email: "info@tslabconstruction.com",
  workingHours: "Mon - Sat: 8:00 AM - 6:00 PM",
  quickLinks: [
    { label: "About Our Firm", href: "/about" },
    { label: "Featured Projects", href: "/projects" },
    { label: "Our Services", href: "/services" },
    { label: "Request Quotation", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],

  socialLinks: [
    { platform: "LinkedIn", href: "#", iconName: "linkedin" },
    { platform: "Twitter", href: "#", iconName: "twitter" },
    { platform: "Facebook", href: "#", iconName: "facebook" },
    { platform: "Instagram", href: "#", iconName: "instagram" },
  ],
  copyrightText: "© 2026 T-Slab Construction Company Ltd. All rights reserved.",
};