import ProjectCarousel from "@/components/home/Carousel";
import Navbar from "@/components/ui/headerLayout";

import HeroCarousel from "@/components/home/HeroCarousel";
import StatsBar from "@/components/home/StatsBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroCarousel />
      <StatsBar />
    </>
  );
}
