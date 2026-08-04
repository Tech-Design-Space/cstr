import { AboutClientsSectionData } from "@/types/aboutClients";

export const defaultAboutClientsData: AboutClientsSectionData = {
  eyebrow: "TRUSTED PARTNERSHIPS",
  title: "OUR CLIENTS",
  description:
    "We have built enduring relationships with government bodies, financial institutions, and global corporations through consistent delivery of landmark projects.",
  showCategories: false, // Set to false for a flat grid
  categories: [
    {
      id: "gov",
      title: "Government & Public Sector",
      clients: [
        {
          id: "g1",
          name: "Federal Government of Nigeria",
          logoUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=300&q=80",
        },
        {
          id: "g2",
          name: "Lagos State Government",
          logoUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=300&q=80",
        },
        {
          id: "g3",
          name: "LSDPC",
          logoUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300&q=80",
        },
        {
          id: "g4",
          name: "Ekiti State Government",
          logoUrl: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=300&q=80",
        },
        {
          id: "g5",
          name: "Osun State Government",
          logoUrl: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=300&q=80",
        },
      ],
    },
    {
      id: "corp",
      title: "Corporate Organisations",
      clients: [
        {
          id: "c1",
          name: "UNDP",
          logoUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=300&q=80",
        },
        {
          id: "c2",
          name: "Lifecare Ventures",
          logoUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=80",
        },
        {
          id: "c3",
          name: "NICAPACO",
          logoUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=300&q=80",
        },
        {
          id: "c4",
          name: "Wemabod",
          logoUrl: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=300&q=80",
        },
        {
          id: "c5",
          name: "Oando",
          logoUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80",
        },
      ],
    },
  ],
  // Flat fallback list if showCategories is set to false
  clients: [
    {
      id: "1",
      name: "Federal Government of Nigeria",
      logoUrl: "/images/client-2.jpg",
    },
    {
      id: "2",
      name: "Lagos State Government",
      logoUrl: "/images/client1.png",
    },
    {
      id: "3",
      name: "UNDP",
     logoUrl: "/images/client-3.jpg",
    },
    {
      id: "4",
      name: "Oando",
        logoUrl: "/images/client1.png",
    },
  ],
};