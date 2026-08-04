import { Project } from "@/types/project";

export const initialProjectsData: Project[] = [
  {
    _id: "1",
    title: "SID, Anambra",
    categories: ["BUILDING CONSTRUCTION", "DESIGN & BUILD", "CIVIL ENGINEERING"],
    mainImage: {
      src: "/images/portfolio-1.jpg",
      alt: "SID, Anambra Building Construction",
    },
    slug: { current: "sid-anambra" },
  },
  {
    _id: "2",
    title: "Kingsuite, Lagos",
    categories: ["BUILDING CONSTRUCTION", "DESIGN & BUILD"],
    mainImage: {
      src: "/images/portfolio-1a.jpg",
      alt: "Kingsuite, Lagos Construction Site",
    },
    slug: { current: "kingsuite-lagos" },
  },
  {
    _id: "3",
    title: "Sky Chef, Abuja",
    categories: ["BUILDING CONSTRUCTION", "DESIGN & BUILD", "CIVIL ENGINEERING"],
    mainImage: {
      src: "/images/portfolio-1c.jpg",
      alt: "Sky Chef Facility in Abuja",
    },
    slug: { current: "sky-chef-abuja" },
  },
  {
    _id: "4",
    title: "Sky Chef, Abuja",
    categories: ["BUILDING CONSTRUCTION", "DESIGN & BUILD"],
    mainImage: {
      src: "/images/portfolio-2.jpg",
      alt: "Sky Chef Facility in Abuja",
    },
    slug: { current: "sky-chef-abuja" },
  },
  {
    _id: "5",
    title: "Sky Chef, Abuja",
    categories: ["BUILDING CONSTRUCTION", "DESIGN & BUILD"],
    mainImage: {
      src: "/images/portfolio-4.jpg",
      alt: "Sky Chef Facility in Abuja",
    },
    slug: { current: "sky-chef-abuja" },
  },
];







import { ProjectDetails } from "@/types/project";

export const mockProjectData: Record<string, ProjectDetails> = {
  "sid-anambra": {
    _id: "1",
    title: "SID Innovation Hub",
    subtitle: "A state-of-the-art technological ecosystem engineered for future innovators in Anambra State.",
    client: "Anambra State Government",
    projectName: "SID, Anambra",
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit.",
    categories: ["BUILDING CONSTRUCTION", "DESIGN & BUILD", "CIVIL ENGINEERING"],
    mainImage: {
      src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      alt: "SID Anambra Main Complex Overview",
    },
    galleryImages: [
      { src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80", alt: "Structural Decking Detail" },
      { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80", alt: "Aerial Foundation Inspection" },
      { src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80", alt: "Steel Beam Elevation" },
      { src: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80", alt: "Interior Structural Framing" },
    ],
    slug: { current: "sid-anambra" },
  },
};