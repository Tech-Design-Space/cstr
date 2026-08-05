import { ContactSectionData } from "@/types/contact";

export const defaultContactSectionData: ContactSectionData = {
  officeInfo: {
    officeTitle: "Nigeria Office",
    address: "Sabon Lugbe / Pyakasa District, Abuja, FCT, Nigeria",
    phone: "+234 703 726 0013",
    email: "jibaconstructionltd@gmail.com",
    website: "www.jibaconstruction.com",
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
    "Civil Engineering & Infrastructure",
    "Design & Build Turnkey Proposal",
    "Facility Management & Renovation",
    "Partnership / Subcontracting",
  ],
};