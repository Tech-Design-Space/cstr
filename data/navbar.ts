import { NavbarData } from "@/types/navbar";

export const defaultNavbarData: NavbarData = {
  logoImage: {
    src: "/jiba-logo.png",
    alt: "JIBA CONSTRUCTION LIMITED Logo",
    width: 180,
    height: 50,
  },
  logoText: "JIBA CONSTRUCTION",
  rcNumber: "RC: 1805786",
  navLinks: [
    {
      id: "nav-1",
      _key: "nav-1",
      title: "Home",
      href: "/",
    },
    {
      id: "nav-2",
      _key: "nav-1",

      title: "Services",
      href: "/serivices",
    },
    {
      id: "nav-3",
      _key: "nav-1",

      title: "Projects",
      dropdownItems: [
        { title: "All Projects", href: "/projects" },
        { title: "Commercial Buildings", href: "/projects/commercial" },
        { title: "Residential Estates", href: "/projects/residential" },
        { title: "Ongoing Sites", href: "/projects/ongoing" },
      ],
    },
    {
      id: "nav-4",
      _key: "nav-1",

      title: "About Us",
      href: "/about",
    },
  ],
  ctaButton: {
    label: "CONTACT US",
    href: "#contact",
  },
};
