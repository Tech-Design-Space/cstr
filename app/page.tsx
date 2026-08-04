
import HeroCarousel from "@/components/home/HeroCarousel";
import ServicesGrid from "@/components/home/ServicesGrid";
import CompanyOverview from "@/components/home/CompanyOverview";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ServicesOverview from "@/components/home/ServicesOverview";
import CtaSection from "@/components/home/CtaSection";
import FaqSection from "@/components/home/FaqSection";
import AboutClientsSection from "@/components/about/AboutClientsSection";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <CompanyOverview />

      {/* <StatsBar /> */}
      <ServicesGrid />

      <FeaturedProjects />

      <ServicesOverview />

        <AboutClientsSection/>

      <FaqSection/>

      <CtaSection />

      
    </>
  );
}
