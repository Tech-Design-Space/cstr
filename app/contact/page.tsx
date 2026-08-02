import ContactMainSection from "@/components/contact/ContactMainSection";
import PageHeroSection from "@/components/ui/PageHeroSection";
import { defaultContactHeroData } from "@/data/projectsContactData";

export default function Contact() {
  return (
    <>
      <PageHeroSection data={defaultContactHeroData} />

      <ContactMainSection />
    </>
  );
}
