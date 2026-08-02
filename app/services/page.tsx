import AboutClientsSection from "@/components/about/AboutClientsSection";
import CtaSection from "@/components/home/CtaSection";
import ServicesHighlightSection from "@/components/services/ServicesHighlightSection";
import PageHeroSection from "@/components/ui/PageHeroSection";
import { defaultServicesHeroData } from "@/data/pageHeroSectionData";

export default function Services() {
  return (
    <>
      <PageHeroSection data={defaultServicesHeroData} />

      <ServicesHighlightSection />

      <AboutClientsSection />

      <CtaSection />
    </>
  );
}
