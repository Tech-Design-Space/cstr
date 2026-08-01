export interface NavDropdownItem {
  title: string;
  href: string;
}

export interface NavLinkItem {
  id: string;
  _key: string;
  title: string;
  href?: string;
  dropdownItems?: NavDropdownItem[];
}

export interface NavbarData {
  logoImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  logoText: string;
  rcNumber?: string;
  navLinks: NavLinkItem[];
  ctaButton: {
    label: string;
    href: string;
  };
}