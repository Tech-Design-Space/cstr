import { Project } from "@/types/project";

export const initialProjectsData = [
  {
    _id: "1",
    title: "SID, Anambra",
    categories: ["BUILDING CONSTRUCTION", "DESIGN & BUILD", "CIVIL ENGINEERING"],
    mainImage: {
      src: "/images/project1.webp",
      alt: "SID, Anambra Building Construction",
    },
    slug: { current: "sid-anambra" },
  },
  {
    _id: "2",
    title: "Kingsuite, Lagos",
    categories: ["BUILDING CONSTRUCTION", "DESIGN & BUILD"],
    mainImage: {
      src: "/images/project2.webp",
      alt: "Kingsuite, Lagos Construction Site",
    },
    slug: { current: "kingsuite-lagos" },
  },
  {
    _id: "3",
    title: "Sky Chef, Abuja",
    categories: ["BUILDING CONSTRUCTION", "DESIGN & BUILD", "CIVIL ENGINEERING"],
    mainImage: {
      src: "/images/project3.webp",
      alt: "Sky Chef Facility in Abuja",
    },
    slug: { current: "sky-chef-abuja" },
  },
  {
    _id: "4",
    title: "Oakwood Residence, Lekki",
    categories: ["BUILDING CONSTRUCTION", "DESIGN & BUILD"],
    mainImage: {
      src: "/images/project4.webp",
      alt: "Oakwood Residence Structure",
    },
    slug: { current: "oakwood-residence-lekki" },
  },
  {
    _id: "5",
    title: "Greenfield Estate, Ibadan",
    categories: ["CIVIL ENGINEERING", "DESIGN & BUILD"],
    mainImage: {
      src: "/images/project5.webp",
      alt: "Greenfield Estate Infrastructure",
    },
    slug: { current: "greenfield-estate-ibadan" },
  },
  {
    _id: "6",
    title: "Zenith Heights, Victoria Island",
    categories: ["BUILDING CONSTRUCTION", "CIVIL ENGINEERING"],
    mainImage: {
      src: "/images/project6.webp",
      alt: "Zenith Heights Foundation Work",
    },
    slug: { current: "zenith-heights-vi" },
  },
  {
    _id: "7",
    title: "Metro Plaza, Ikeja",
    categories: ["BUILDING CONSTRUCTION", "DESIGN & BUILD"],
    mainImage: {
      src: "/images/project7.webp",
      alt: "Metro Plaza Commercial Complex",
    },
    slug: { current: "metro-plaza-ikeja" },
  },
  {
    _id: "8",
    title: "Coral Gardens, Port Harcourt",
    categories: ["CIVIL ENGINEERING", "DESIGN & BUILD"],
    mainImage: {
      src: "/images/project8.webp",
      alt: "Coral Gardens Site Development",
    },
    slug: { current: "coral-gardens-ph" },
  },
  {
    _id: "9",
    title: "Sapphire Towers, Abuja",
    categories: ["BUILDING CONSTRUCTION", "DESIGN & BUILD", "CIVIL ENGINEERING"],
    mainImage: {
      src: "/images/project9.webp",
      alt: "Sapphire Towers Construction Progress",
    },
    slug: { current: "sapphire-towers-abuja" },
  },
  {
    _id: "10",
    title: "Pearl Executive Home, Enugu",
    categories: ["BUILDING CONSTRUCTION", "DESIGN & BUILD"],
    mainImage: {
      src: "/images/project10.webp",
      alt: "Pearl Executive Home Framing",
    },
    slug: { current: "pearl-home-enugu" },
  },
  {
    _id: "11",
    title: "Summit Mall, Kano",
    categories: ["BUILDING CONSTRUCTION", "CIVIL ENGINEERING"],
    mainImage: {
      src: "/images/project11.webp",
      alt: "Summit Mall Superstructure",
    },
    slug: { current: "summit-mall-kano" },
  },
  {
    _id: "12",
    title: "Prime Ville, Asaba",
    categories: ["DESIGN & BUILD", "CIVIL ENGINEERING"],
    mainImage: {
      src: "/images/project12.webp",
      alt: "Prime Ville Residential Layout",
    },
    slug: { current: "prime-ville-asaba" },
  },
  {
    _id: "13",
    title: "Grand atrium, Benin",
    categories: ["BUILDING CONSTRUCTION", "DESIGN & BUILD"],
    mainImage: {
      src: "/images/project13.webp",
      alt: "Grand Atrium Structure",
    },
    slug: { current: "grand-atrium-benin" },
  },
  {
    _id: "14",
    title: "Nova Tech Hub, Calabar",
    categories: ["BUILDING CONSTRUCTION", "CIVIL ENGINEERING", "DESIGN & BUILD"],
    mainImage: {
      src: "/images/project14.webp",
      alt: "Nova Tech Hub Facility",
    },
    slug: { current: "nova-tech-calabar" },
  },
  {
    _id: "15",
    title: "Lakeside Terraces, Akure",
    categories: ["BUILDING CONSTRUCTION", "DESIGN & BUILD"],
    mainImage: {
      src: "/images/project15.webp",
      alt: "Lakeside Terraces Framing",
    },
    slug: { current: "lakeside-terrraces-akure" },
  },
  {
    _id: "16",
    title: "Vanguard Plaza, Owerri",
    categories: ["BUILDING CONSTRUCTION", "CIVIL ENGINEERING"],
    mainImage: {
      src: "/images/project16.webp",
      alt: "Vanguard Plaza Construction",
    },
    slug: { current: "vanguard-plaza-owerri" },
  },
  {
    _id: "17",
    title: "Bluecrest Apartments, Ibadan",
    categories: ["DESIGN & BUILD", "BUILDING CONSTRUCTION"],
    mainImage: {
      src: "/images/project17.webp",
      alt: "Bluecrest Apartments Complex",
    },
    slug: { current: "bluecrest-ibadan" },
  },
  {
    _id: "18",
    title: "Imperial Suites, Abuja",
    categories: ["BUILDING CONSTRUCTION", "DESIGN & BUILD", "CIVIL ENGINEERING"],
    mainImage: {
      src: "/images/project18.webp",
      alt: "Imperial Suites Structure",
    },
    slug: { current: "imperial-suites-abuja" },
  },
  {
    _id: "19",
    title: "Gateway Park, Abeokuta",
    categories: ["CIVIL ENGINEERING", "DESIGN & BUILD"],
    mainImage: {
      src: "/images/project19.webp",
      alt: "Gateway Park Infrastructure",
    },
    slug: { current: "gateway-park-abeokuta" },
  },
  {
    _id: "20",
    title: "Crystal Heights, Victoria Island",
    categories: ["BUILDING CONSTRUCTION", "DESIGN & BUILD"],
    mainImage: {
      src: "/images/project20.webp",
      alt: "Crystal Heights Exterior Work",
    },
    slug: { current: "crystal-heights-vi" },
  },
  {
    _id: "21",
    title: "Harmony Duplexes, Lekki",
    categories: ["BUILDING CONSTRUCTION", "DESIGN & BUILD"],
    mainImage: {
      src: "/images/project21.webp",
      alt: "Harmony Duplexes Site",
    },
    slug: { current: "harmony-duplexes-lekki" },
  },
  {
    _id: "22",
    title: "Apex Business Center, Ikeja",
    categories: ["BUILDING CONSTRUCTION", "CIVIL ENGINEERING"],
    mainImage: {
      src: "/images/project22.webp",
      alt: "Apex Business Center Framework",
    },
    slug: { current: "apex-center-ikeja" },
  },
  {
    _id: "23",
    title: "Pinnacle Villa, Kaduna",
    categories: ["BUILDING CONSTRUCTION", "DESIGN & BUILD"],
    mainImage: {
      src: "/images/project23.webp",
      alt: "Pinnacle Villa Construction",
    },
    slug: { current: "pinnacle-villa-kaduna" },
  },
  {
    _id: "24",
    title: "Silverline Office Complex, Jos",
    categories: ["CIVIL ENGINEERING", "DESIGN & BUILD"],
    mainImage: {
      src: "/images/project24.webp",
      alt: "Silverline Office Complex Groundwork",
    },
    slug: { current: "silverline-jos" },
  },
  {
    _id: "25",
    title: "Royal Palm Estate, Uyo",
    categories: ["BUILDING CONSTRUCTION", "CIVIL ENGINEERING", "DESIGN & BUILD"],
    mainImage: {
      src: "/images/project25.webp",
      alt: "Royal Palm Estate Development",
    },
    slug: { current: "royal-palm-uyo" },
  },
  {
    _id: "26",
    title: "Horizon Towers, Lagos",
    categories: ["BUILDING CONSTRUCTION", "DESIGN & BUILD"],
    mainImage: {
      src: "/images/project26.webp",
      alt: "Horizon Towers Structure",
    },
    slug: { current: "horizon-towers-lagos" },
  },
  {
    _id: "27",
    title: "Metro Heights, Enugu",
    categories: ["BUILDING CONSTRUCTION", "CIVIL ENGINEERING"],
    mainImage: {
      src: "/images/project27.webp",
      alt: "Metro Heights Construction Phase",
    },
    slug: { current: "metro-heights-enugu" },
  },
  {
    _id: "28",
    title: "Alpha Commercial Hub, Port Harcourt",
    categories: ["BUILDING CONSTRUCTION", "DESIGN & BUILD"],
    mainImage: {
      src: "/images/project28.webp",
      alt: "Alpha Commercial Hub Site",
    },
    slug: { current: "alpha-hub-ph" },
  },
  {
    _id: "29",
    title: "Eagles Nest Residence, Abuja",
    categories: ["BUILDING CONSTRUCTION", "DESIGN & BUILD", "CIVIL ENGINEERING"],
    mainImage: {
      src: "/images/project29.webp",
      alt: "Eagles Nest Residence Structure",
    },
    slug: { current: "eagles-nest-abuja" },
  },
  {
    _id: "30",
    title: "Signature Apartments, Ibadan",
    categories: ["BUILDING CONSTRUCTION", "DESIGN & BUILD"],
    mainImage: {
      src: "/images/project30.webp",
      alt: "Signature Apartments Framing",
    },
    slug: { current: "signature-apartments-ibadan" },
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