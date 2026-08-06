import { ServicesSectionData, ServicesOverviewData } from "@/types/services";

export const defaultServicesData: ServicesSectionData = {
  badge: "OUR CORE CAPABILITIES",
  heading: "End-to-End Construction, Refurbishment & Interior Solutions",
  services: [
    {
      id: "service-1",
      categoryTag: "BUILDING CONSTRUCTION",
      title: "General Construction & Build",
      description:
        "Complete residential and commercial building solutions from ground site preparation and foundation laying to final structural execution.",
      href: "/services",
      iconName: "HardHat",
    },
    {
      id: "service-2",
      categoryTag: "PROPERTY REFURBISHMENT",
      title: "Structural Refurbishment & Renovation",
      description:
        "Comprehensive structural modernizations, building repairs, layout reconfigurations, and exterior facade upgrades for aging properties.",
      href: "/services",
      iconName: "Building2",
    },
    {
      id: "service-3",
      categoryTag: "INTERIOR DESIGN",
      title: "Bespoke Interior Design & Fit-Out",
      description:
        "Tailored interior planning, spatial optimization, high-grade material finishes, custom cabinetry, and modern lighting installation.",
      href: "/services",
      iconName: "Palette",
    },
    {
      id: "service-4",
      categoryTag: "PROJECT MANAGEMENT",
      title: "Site Supervision & Cost Management",
      description:
        "Rigorous project oversight, material sourcing, budget tracking, and timeline enforcement from initial concept to key handover.",
      href: "/services",
      iconName: "Compass",
    },
    {
      id: "service-5",
      categoryTag: "ARCHITECTURAL FIT-OUT",
      title: "Commercial & Office Space Planning",
      description:
        "Turnkey office re-designs and retail interior solutions engineered to boost functionality, corporate branding, and spatial flow.",
      href: "/services",
      iconName: "Layers",
    },
  ],
};




export const defaultServicesMainData: ServicesOverviewData = {
  subheading: "WE'RE HERE TO TRANSFORM YOUR SPACE",
  heading: "WHAT SERVICE DO YOU NEED TODAY?",
  bgImageUrl:
    "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRGnBHfsTH_k5SYLdtqfY9BP9frZsaFlMTBUH_vCdYHRtA9Bv58_dY23WDUL2ZZz8gwK9OzmBN7s8gauPg",
  services: [
    {
      id: "srv-1",
      title: "BUILDING CONSTRUCTION",
      description:
        "We combine expert engineering and skilled craftsmanship to deliver durable, high-quality residential and commercial structures.",
      iconName: "Building2",
      ctaText: "Get Quotation",
      ctaHref: "/contact",
    },
    {
      id: "srv-2",
      title: "PROPERTY REFURBISHMENT",
      description:
        "We revitalize outdated and damaged properties with total structural remodeling, contemporary finishes, and reinforced stability.",
      iconName: "Hammer",
      ctaText: "Get Quotation",
      ctaHref: "/contact",
    },
    {
      id: "srv-3",
      title: "INTERIOR DESIGN & FIT-OUT",
      description:
        "We design and execute luxury, functional interior spaces tailored to your personal style or corporate identity.",
      iconName: "Sparkles",
      ctaText: "Get Quotation",
      ctaHref: "/contact",
    },
  ],
};