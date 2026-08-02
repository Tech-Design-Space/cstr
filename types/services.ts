export interface ServiceItem {
  id: string;
  categoryTag: string;
  title: string;
  description: string;
  href: string;
  iconName: 'Building2' | 'Compass' | 'Home' | 'HardHat' | 'Layers';
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
  iconName: 'Building2' | 'HardHat' | 'Bridge' | 'Road';
  ctaText: string;
  ctaHref: string;
}

export interface ServicesOverviewData {
  subheading: string;
  heading: string;
  bgImageUrl: string;
  services: ServiceCardItem[];
}