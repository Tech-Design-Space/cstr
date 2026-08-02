import CtaSection from "@/components/home/CtaSection";
import ProjectsListing from "@/components/projects/ProjectsListing";
import PageHeroSection from "@/components/ui/PageHeroSection";
import { defaultProjectsHeroData } from "@/data/projectsHeroData";


export default function Projects() {
  return (
    <>
         <PageHeroSection data={defaultProjectsHeroData}/>

         <ProjectsListing/>

         <CtaSection />
   
      
    </>
  );
}
