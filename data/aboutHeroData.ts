import { AboutHeroSectionData } from "@/types/aboutHero";
import { PageHeroSectionData } from "@/types/pageHero";

export const defaultAboutHeroData: PageHeroSectionData = {
  title: "ABOUT US",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "About Us" },
  ],
  showScrollIndicator: true,
  bgImageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop"
};