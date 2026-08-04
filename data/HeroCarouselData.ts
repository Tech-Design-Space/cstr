import { HeroCarouselData } from "@/types/hero";

export const defaultHeroData: HeroCarouselData = {
  slides: [
    {
      id: "slide-1",
      badge: "ENGINEERING EXCELLENCE",
      title: "Your most reliable construction partner",
      subtitle:
        "We collaborate with visionaries and organizations to deliver world-class infrastructure, commercial builds, and sustainable civil engineering solutions.",
      bgImageUrl: "/images/portfolio-1a.jpg",
      primaryCta: {
        label: "OUR SERVICES",
        href: "/services",
      },
      secondaryCta: {
        label: "EXPLORE PROJECTS",
        href: "/projects",
      },
    },
    {
      id: "slide-2",
      badge: "PRIME REAL ESTATE",
      title: "Building luxury estates & smart property sales",
      subtitle:
        "From premium residential developments to commercial hubs in prime locations across Abuja, we turn structural vision into high-yield real estate investments.",
      bgImageUrl: "/images/portfolio-1c.jpg",

      primaryCta: {
        label: "VIEW PROPERTIES",
        href: "/services/realtors",
      },
      secondaryCta: {
        label: "REQUEST QUOTE",
        href: "#contact",
      },
    },
    {
      id: "slide-3",
      badge: "PROJECT MANAGEMENT",
      title: "Precision execution from blueprint to key handover",
      subtitle:
        "End-to-end management guaranteeing structural integrity, strict budget compliance, and timely project delivery across all site operations.",
      bgImageUrl: "/images/portfolio-1b.jpg",

      primaryCta: {
        label: "CONSULT WITH US",
        href: "#contact",
      },
      secondaryCta: {
        label: "ABOUT US",
        href: "/about",
      },
    },
  ],
};
