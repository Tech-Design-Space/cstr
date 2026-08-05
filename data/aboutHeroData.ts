import { AboutHeroSectionData } from "@/types/aboutHero";
import { PageHeroSectionData } from "@/types/pageHero";

export const defaultAboutHeroData: PageHeroSectionData = {
  title: "ABOUT US",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "About Us" },
  ],
  showScrollIndicator: true,
  bgImageUrl: "/images/project34.webp", // Path to your hero background image
  overlayOpacity: "bg-brand-dark/50", // Light overlay ensuring dark text legibility
};