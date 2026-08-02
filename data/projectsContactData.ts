import { PageHeroSectionData } from "@/types/pageHero";

export const defaultContactHeroData: PageHeroSectionData = {
  title: "Contact Us",
  description:
    "Get in touch with our engineering and project management team to discuss your construction, civil infrastructure, or facility management needs.",
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Contact Us" },
  ],
  showScrollIndicator: true,
  bgImageUrl:
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
  overlayOpacity: "bg-brand-dark/75",
};