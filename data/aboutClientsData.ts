import { AboutClientsSectionData } from "@/types/aboutClients";

export const defaultAboutClientsData: AboutClientsSectionData = {
  eyebrow: "TRUSTED PARTNERSHIPS",
  title: "OUR CLIENTS & PARTNERS",
  description:
    "We have built enduring relationships with private homeowners, corporate organizations, and property developers across Uganda through consistent delivery of structural excellence, quality refurbishment, and luxury interiors.",
  showCategories: false, // Set to false for a flat grid
  categories: [
    {
      id: "corp",
      title: "Corporate & Commercial Clients",
      clients: [
        {
          id: "c1",
          name: "Namugongo Commercial Hubs",
          logoUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=300&q=80",
        },
        {
          id: "c2",
          name: "Kampala Retail Outlets",
          logoUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=300&q=80",
        },
        {
          id: "c3",
          name: "Uganda Enterprise Estates",
          logoUrl: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=300&q=80",
        },
        {
          id: "c4",
          name: "Wakiso Hospitality Group",
          logoUrl: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=300&q=80",
        },
        {
          id: "c5",
          name: "Nalule Business Complex",
          logoUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80",
        },
      ],
    },
    {
      id: "dev",
      title: "Private Developers & Estates",
      clients: [
        {
          id: "d1",
          name: "Uganda Residential Developers",
          logoUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=300&q=80",
        },
        {
          id: "d2",
          name: "Namugongo Estate Ventures",
          logoUrl: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=300&q=80",
        },
        {
          id: "d3",
          name: "Kampala Luxury Villa Holdings",
          logoUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=300&q=80",
        },
        {
          id: "d4",
          name: "Urban Fit-Out Investments",
          logoUrl: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=300&q=80",
        },
      ],
    },
  ],
  // Flat fallback list if showCategories is set to false
  clients: [
    {
      id: "1",
      name: "Namugongo Commercial Hubs",
      logoUrl: "/images/client1.png",
    },
    {
      id: "2",
      name: "Uganda Residential Developers",
      logoUrl: "/images/client-2.jpg",
    },
    {
      id: "3",
      name: "Kampala Retail Outlets",
      logoUrl: "/images/client-3.jpg",
    },
    {
      id: "4",
      name: "Nalule Business Complex",
      logoUrl: "/images/client-2.jpg",
    },
  ],
};