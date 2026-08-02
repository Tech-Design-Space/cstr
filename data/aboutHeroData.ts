import { AboutHeroSectionData } from "@/types/aboutHero";

export const defaultAboutHeroData: AboutHeroSectionData = {
  title: "ABOUT US",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "About Us" },
  ],
  showScrollIndicator: true,
  bgImageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop", // Path to your hero background image
  overlayOpacity: "bg-brand-dark/50", // Light overlay ensuring dark text legibility
};