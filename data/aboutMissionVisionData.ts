import { AboutMissionVisionData } from "@/types/aboutMissionVision";

export const defaultAboutMissionVisionData: AboutMissionVisionData = {
  eyebrow: "GUIDING PRINCIPLES",
  title: "OUR MISSION, VISION & VALUES",
  mission: {
    badge: "OUR MISSION",
    heading: "Precision Execution & Client-Centric Delivery",
    description:
      "To build, refurbish, and design exceptional residential and commercial spaces. We commit to delivering superior craftsmanship, using high-grade materials, and prioritizing structural safety, spatial functionality, and transparency across every project stage.",
  },
  vision: {
    badge: "OUR VISION",
    heading: "Setting New Standards in Construction & Interior Design",
    description:
      "To be Uganda’s premier construction and property development partner, recognized for architectural artistry, structural integrity, and transformative interior solutions.",
  },
  coreValuesHeading: "CORE VALUES THAT DRIVE US",
  coreValues: [
    {
      id: "1",
      title: "Uncompromising Safety",
      description: "Zero-compromise protocols ensuring the health and safety of our site workers, clients, and surrounding spaces.",
      iconName: "ShieldCheck",
    },
    {
      id: "2",
      title: "Structural Integrity",
      description: "Adhering strictly to engineering standards, top-grade building materials, and meticulous quality control.",
      iconName: "Building2",
    },
    {
      id: "3",
      title: "Artistic Craftsmanship",
      description: "Infusing innovation, modern layout design, and refined finishing into every building, renovation, and interior fit-out.",
      iconName: "Lightbulb",
    },
    {
      id: "4",
      title: "Transparency & Trust",
      description: "Fostering long-term client relationships built on clear budgets, timely project delivery, and open communication.",
      iconName: "Handshake",
    },
  ],
};