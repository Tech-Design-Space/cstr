export interface NavLinkItem {
  label: string;
  href: string;
}

export interface SocialLinkItem {
  platform: string;
  href: string;
  iconName: 'facebook' | 'twitter' | 'linkedin' | 'instagram';
}

export interface FooterSectionData {
  logoType?: 'text' | 'image';
  logoImageUrl?: string;
  companyName: string;
  tagline?: string;
  description: string;
  officeAddress?: string;
  email?: string;
  workingHours?: string;
  quickLinks: NavLinkItem[];
  // servicesLinks: NavLinkItem[];
  socialLinks: SocialLinkItem[];
  copyrightText: string;
}