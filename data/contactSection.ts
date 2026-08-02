import { ContactSectionData } from "@/types/contact";

export const defaultContactSectionData: ContactSectionData = {
  officeInfo: {
    officeTitle: "Nigeria Office",
    address: "Business Centre, Oluwole Street, 36, Ejigbo, Lagos State, Nigeria",
    phone: "+234 904 342 0796",
    email: "info@jibaconstruction.com",
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