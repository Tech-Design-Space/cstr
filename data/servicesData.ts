import { ServicesSectionData } from "@/types/services";

export const defaultServicesData: ServicesSectionData = {
  badge: "OUR CORE CAPABILITIES",
  heading: "Full project management & construction services",
  services: [
    {
      id: "service-1",
      categoryTag: "CIVIL ENGINEERING",
      title: "General Contracting",
      description:
        "Comprehensive structural engineering, site management, and heavy infrastructure developments delivered to regulatory standards.",
      href: "/services/civil-engineering",
      iconName: "HardHat",
    },
    {
      id: "service-2",
      categoryTag: "PROPERTY DEVELOPMENT",
      title: "Real Estate Development",
      description:
        "Turnkey residential estates, commercial hubs, and luxury multi-unit developments built for longevity and high ROI.",
      href: "/services/real-estate",
      iconName: "Building2",
    },
    {
      id: "service-3",
      categoryTag: "PROPERTY SALES",
      title: "Realtors & Land Sales",
      description:
        "Verified land acquisition, luxury property marketing, and seamless title transfer documentation across prime locations.",
      href: "/services/realtors",
      iconName: "Home",
    },
    {
      id: "service-4",
      categoryTag: "PROJECT MANAGEMENT",
      title: "End-to-End Supervision",
      description:
        "Rigorous quality assurance, material procurement, budgeting, and timeline enforcement from foundation to key handover.",
      href: "/services/project-management",
      iconName: "Compass",
    },
    {
      id: "service-5",
      categoryTag: "ARCHITECTURAL PLANNING",
      title: "Structural Design & Planning",
      description:
        "Precision structural modeling, BIM integration, and architectural blueprints tailored for durability and urban compliance.",
      href: "/services/structural-design",
      iconName: "Layers",
    },
  ],
};






import { ServicesOverviewData } from "@/types/services";

export const defaultServicesMainData: ServicesOverviewData = {
  subheading: "WE'RE HERE TO HELP YOU",
  heading: "WHAT ARE YOU LOOKING FOR?",
  bgImageUrl: "/images/project63.webp",
  services: [
    {
      id: "srv-1",
      title: "BUILDING CONSTRUCTION",
      description:
        "We continuously train and retrain our team members—that’s why we never fail to deliver top-tier commercial and residential construction.",
      iconName: "Building2",
      ctaText: "Get Quotation",
      ctaHref: "/contact",
    },
    {
      id: "srv-2",
      title: "ROAD CONSTRUCTION",
      description:
        "We strive to maintain the highest standard of quality and structural longevity while staying strictly on time and within budget.",
      iconName: "Road",
      ctaText: "Get Quotation",
      ctaHref: "/contact",
    },
    {
      id: "srv-3",
      title: "BRIDGE & CIVIL WORKS",
      description:
        "We have the technical resources and strategies in place to build modern bridges and complex civil infrastructure at tight deadlines.",
      iconName: "Bridge",
      ctaText: "Get Quotation",
      ctaHref: "/contact",
    },
  ],
};