import { HeroCarouselData } from "@/types/hero";

export const defaultHeroData: HeroCarouselData = {
  slides: [
    {
      id: "slide-1",
      badge: "CONSTRUCTION EXCELLENCE",
      title: "Building lasting structural excellence across Uganda",
      subtitle:
        "From foundation to final build, T-Slab Construction delivers premier residential and commercial structural solutions built with precision and integrity.",
      bgImageUrl:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1920&auto=format&fit=crop",
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
      badge: "PROPERTY REFURBISHMENT",
      title: "Transforming existing spaces into modern masterpieces",
      subtitle:
        "Revitalize old structures with complete architectural refurbishment, structural enhancements, and modern facade upgrades in Namugongo and beyond.",
      bgImageUrl:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop",
      primaryCta: {
        label: "VIEW REFURBISHMENTS",
        href: "/services/refurbishment",
      },
      secondaryCta: {
        label: "REQUEST QUOTE",
        href: "#contact",
      },
    },
    {
      id: "slide-3",
      badge: "INTERIOR DESIGN & FIT-OUT",
      title: "Bespoke interior design and functional spatial finishing",
      subtitle:
        "Crafting beautiful, modern commercial and residential interiors with high-grade finishes, custom joinery, and functional layout optimization.",
      bgImageUrl:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1920&auto=format&fit=crop",
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