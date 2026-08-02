import AboutClientsSection from "@/components/about/AboutClientsSection";
import AboutGallerySection from "@/components/about/AboutGallerySection.tsx";
import AboutMissionVisionSection from "@/components/about/AboutMissionVisionSection";
import AboutOverviewSection from "@/components/about/AboutOverviewSection";
import CtaSection from "@/components/home/CtaSection";
import PageHeroSection from "@/components/ui/PageHeroSection";
import { defaultAboutHeroData } from "@/data/aboutHeroData";

export default function About() {
  return (
    <>
      <PageHeroSection data={defaultAboutHeroData}/>

      <AboutOverviewSection />

      <AboutMissionVisionSection />


      <AboutGallerySection/>

      <AboutClientsSection/>

      <CtaSection />
    </>
  );
}
