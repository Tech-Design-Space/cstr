import { AboutMissionVisionData } from "@/types/aboutMissionVision";

export const defaultAboutMissionVisionData: AboutMissionVisionData = {
  eyebrow: "GUIDING PRINCIPLES",
  title: "OUR MISSION, VISION & VALUES",
  mission: {
    badge: "OUR MISSION",
    heading: "Precision Engineering & Client-Centric Delivery",
    description:
      "To engineer and build sustainable, high-performance infrastructure and structural solutions. We commit to delivering superior workmanship, utilizing modern technologies, and prioritizing safety and transparency across every stage of development.",
  },
  vision: {
    badge: "OUR VISION",
    heading: "Setting New Standards in Civil Infrastructure",
    description:
      "To be the premier construction and engineering partner known globally for structural excellence, innovative project management, and sustainable environmental stewardship that transforms communities.",
  },
  coreValuesHeading: "CORE VALUES THAT DRIVE US",
  coreValues: [
    {
      id: "1",
      title: "Uncompromising Safety",
      description: "Zero-compromise protocols ensuring the health and safety of our workforce, sites, and surrounding communities.",
      iconName: "ShieldCheck",
    },
    {
      id: "2",
      title: "Structural Integrity",
      description: "Adhering strictly to international engineering standards, top-tier materials, and meticulous quality control.",
      iconName: "Building2",
    },
    {
      id: "3",
      title: "Innovation & Tech",
      description: "Leveraging modern construction methodologies, smart project management systems, and sustainable practices.",
      iconName: "Lightbulb",
    },
    {
      id: "4",
      title: "Transparency & Respect",
      description: "Fostering long-term partnerships built on honest communication, reliable scheduling, and budget accountability.",
      iconName: "Handshake",
    },
  ],
};