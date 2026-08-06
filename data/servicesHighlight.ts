import { ServicesHighlightData } from "@/types/servicesHighlight";

export const defaultServicesHighlightData: ServicesHighlightData = {
  badgeText: "WORLD CLASS EXPERTISE",
  mainHeading:
    "Leading Indigenous Provider of Building Construction, Property Refurbishment & Interior Design Services",
  subHeading:
    "T-Slab Construction Company Ltd is committed to executing every project with precision—delivering structural durability, high-end refurbishment, and luxury interior fit-outs within agreed timelines and budgets.",
  services: [
    {
      id: "1",
      title: "Building Construction",
      description:
        "Our team of experienced structural engineers and site experts collaborates closely with clients to build modern residential homes and commercial developments. We prioritize structural safety, quality materials, and architectural perfection from foundation to handover.",
      image: {
        src: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTQwl1-wi4LIDzhT9LiuQX0rmZx8mb48OCVd_Q9mzGjZz-24tS-N97dmrM5cQDa3C8-LHynCLpJpRRDokc",
        alt: "Modern Building Construction Site Operations",
      },
      slug: "building-construction",
    },
    {
      id: "2",
      title: "Property Refurbishment",
      description:
        "Transforming existing structures through comprehensive renovations, exterior facade modernizations, structural repairs, and layout upgrades. We breathe new life into older properties while ensuring full safety compliance and extended lifespan.",
      image: {
        src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
        alt: "Structural Property Refurbishment and Renovation",
      },
      slug: "property-refurbishment",
    },
    {
      id: "3",
      title: "Interior Design & Fit-Outs",
      description:
        "Delivering bespoke interior architecture, spatial planning, custom joinery, lighting concepts, and premium surface finishes for luxury homes and office spaces across Kampala and Namugongo.",
      image: {
        src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
        alt: "Luxury Interior Design and Commercial Fit-Out",
      },
      slug: "interior-design",
    },
    {
      id: "4",
      title: "Design & Build (Turnkey Solutions)",
      description:
        "Integrating architectural planning, material procurement, and construction under a single point of responsibility. Our turnkey approach reduces timelines, manages budgets efficiently, and guarantees seamless execution.",
      image: {
        src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop",
        alt: "Architectural Design and Turnkey Project Planning",
      },
      slug: "design-and-build",
    },
    {
      id: "5",
      title: "Property Development & Advisory",
      description:
        "End-to-end site selection, master planning, and residential development coordination. We build high-value, sustainable property projects tailored to client requirements and local market trends.",
      image: {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
        alt: "Residential Property Development",
      },
      slug: "property-development",
    },
    {
      id: "6",
      title: "Facility Maintenance & Restoration",
      description:
        "Proactive maintenance services, structural restoration, and ongoing asset management to keep residential estates and commercial buildings operationally sound and visually pristine.",
      image: {
        src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
        alt: "Building Maintenance and Structural Restoration",
      },
      slug: "facility-maintenance",
    },
  ],
};