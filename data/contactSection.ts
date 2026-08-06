import { ContactSectionData } from "@/types/contact";

export const defaultContactSectionData: ContactSectionData = {
  officeInfo: {
    officeTitle: "Head Office - Uganda",
    address: "Namugongo Nalule Complex Second floor room N203 , Namugongo, Uganda, 207141",
    phone: "+256 787 768137",
    email: "info@tslabconstruction.com",
    website: "www.tslabconstruction.com",
  },
  businessHours: {
    weekdays: "Monday – Friday: 8:00 AM – 6:00 PM",
    saturday: "Saturday: 9:00 AM – 2:00 PM",
    sunday: "Sunday: Closed",
  },
  socialLinks: [
    { platform: "Facebook", url: "https://facebook.com", iconName: "Facebook" },
    { platform: "LinkedIn", url: "https://linkedin.com", iconName: "Linkedin" },
    { platform: "Twitter", url: "https://twitter.com", iconName: "Twitter" },
    { platform: "Instagram", url: "https://instagram.com", iconName: "Instagram" },
  ],
  subjectOptions: [
    "General Inquiry",
    "Building Construction Project",
    "Property Refurbishment & Renovation",
    "Interior Design & Fit-Out",
    "Design & Build Turnkey Proposal",
    "Partnership / Subcontracting",
  ],
};