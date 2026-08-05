import { ServicesHighlightData } from "@/types/servicesHighlight";

export const defaultServicesHighlightData: ServicesHighlightData = {
  badgeText: "WORLD CLASS EXPERTISE",
  mainHeading:
    "Leading Indigenous Provider of Engineering, Procurement, Construction & Facility Management Services",
  subHeading:
    "Jiba Construction's utmost priority is to flawlessly execute projects within defined timelines, budgets, and quality benchmarks, overseeing every facet from structural design to construction and long-term asset maintenance.",
  services: [
    {
      id: "1",
      title: "Building Construction",
      description:
        "Our team of experienced structural engineers and site experts collaborates closely with clients to construct commercial, residential, and industrial complexes. We prioritize safety, structural integrity, and architectural perfection from foundation to completion.",
      image: {
  src: "/images/project27.webp",
        alt: "Building Construction Site Operations",
      },
      slug: "building-construction",
    },
    {
      id: "2",
      title: "Civil Engineering",
      description:
        "Delivering heavy civil works, road network developments, drainage channels, and bridge structures. We utilize modern soil testing and reinforced concrete designs to build durable infrastructure that stands the test of time.",
      image: {
        src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
        alt: "Civil Engineering and Infrastructure Construction",
      },
      slug: "civil-engineering",
    },
    {
      id: "3",
      title: "Real Estate",
      description:
        "Strategic acquisition, valuation, and advisory services across prime commercial and residential properties. We assist investors and stakeholders in navigating land title perfection, portfolio growth, and high-yield real estate investments.",
      image: {
  src: "/images/project26.webp",
        alt: "Modern Luxury Real Estate Property",
      },
      slug: "real-estate",
    },
    {
      id: "4",
      title: "Developers",
      description:
        "End-to-end property development solutions from site selection and master planning to construction management and handover. We build sustainable, high-value developments tailored to market demand.",
      image: {
   src: "/images/project54.webp",
        alt: "Commercial Property Development Building",
      },
      slug: "developers",
    },

    {
      id: "6",
      title: "Design & Build (Turnkey Solutions)",
      description:
        "Integrating architectural design, procurement, and construction under a single point of responsibility. Our turnkey approach reduces project timelines, eliminates cost inflation, and guarantees seamless execution.",
      image: {
        src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
        alt: "Architectural Blueprint and Design Planning",
      },
      slug: "design-and-build",
    },
    {
      id: "7",
      title: "Facility Management & Rehabilitation",
      description:
        "Providing proactive maintenance, structural renovations, and long-term asset management. We ensure your facilities remain compliant, energy-efficient, and operationally optimal throughout their lifecycle.",
      image: {
        src: "/images/services1.jpg",
        alt: "Facility Maintenance Engineering Inspection",
      },
      slug: "facility-management",
    },
  ],
};
