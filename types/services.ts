export interface ServiceItem {
  id: string;
  categoryTag: string;
  title: string;
  description: string;
  href: string;
  // Expanded union type to accept 'Palette'
  iconName: 'Building2' | 'Compass' | 'Home' | 'HardHat' | 'Layers' | 'Palette';
}

export interface ServicesSectionData {
  badge: string;
  heading: string;
  services: ServiceItem[];
}

export interface ServiceCardItem {
  id: string;
  title: string;
  description: string;
  // Expanded union type to accept 'Hammer' and 'Sparkles'
  iconName: 'Building2' | 'HardHat' | 'Bridge' | 'Road' | 'Hammer' | 'Sparkles';
  ctaText: string;
  ctaHref: string;
}

export interface ServicesOverviewData {
  subheading: string;
  heading: string;
  bgImageUrl: string;
  services: ServiceCardItem[];
}