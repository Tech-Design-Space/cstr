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
        src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
        alt: "Building Construction Site Operations",
      },
      slug: "building-construction",
    },
    {
      id: "2",
      title: "Civil Engineering & Infrastructure",
      description:
        "Delivering heavy civil works, road network developments, drainage channels, and bridge structures. We utilize modern soil testing and reinforced concrete designs to build durable infrastructure that stands the test of time.",
      image: {
        src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
        alt: "Civil Engineering and Heavy Machinery",
      },
      slug: "civil-engineering",
    },
    {
      id: "3",
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
      id: "4",
      title: "Facility Management & Rehabilitation",
      description:
        "Providing proactive maintenance, structural renovations, and long-term asset management. We ensure your facilities remain compliant, energy-efficient, and operationally optimal throughout their lifecycle.",
      image: {
        src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
        alt: "Facility Maintenance Engineering Inspection",
      },
      slug: "facility-management",
    },
  ],
};