export interface ServiceCardItem {
  id: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  slug: string;
}

export interface ServicesHighlightData {
  badgeText: string;
  mainHeading: string;
  subHeading: string;
  services: ServiceCardItem[];
}