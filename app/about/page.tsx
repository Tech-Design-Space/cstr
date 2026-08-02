import AboutClientsSection from "@/components/about/AboutClientsSection";
import AboutGallerySection from "@/components/about/AboutGallerySection.tsx";
import AboutMissionVisionSection from "@/components/about/AboutMissionVisionSection";
import AboutOverviewSection from "@/components/about/AboutOverviewSection";
import CtaSection from "@/components/home/CtaSection";
import AboutHeroSection from "@/components/ui/AboutHeroSection";

export default function About() {
  return (
    <>
      <AboutHeroSection />

      <AboutOverviewSection />

      <AboutMissionVisionSection />


      <AboutGallerySection/>

      <AboutClientsSection/>

      <CtaSection />
    </>
  );
}
