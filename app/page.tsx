
import HeroCarousel from "@/components/home/HeroCarousel";
import ServicesGrid from "@/components/home/ServicesGrid";
import CompanyOverview from "@/components/home/CompanyOverview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ServicesOverview from "@/components/home/ServicesOverview";
import SocialProofSection from "@/components/home/SocialProofSection";
import CtaSection from "@/components/home/CtaSection";
import FaqSection from "@/components/home/FaqSection";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <CompanyOverview />

      {/* <StatsBar /> */}
      <ServicesGrid />

      <FeaturedProjects />

      <ServicesOverview />

      <SocialProofSection/>

      <FaqSection/>

      <CtaSection />

      
    </>
  );
}
