export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  role?: string;
  avatarUrl?: string;
  quote: string;
  rating?: number; // 1 to 5 stars
}

export interface ClientLogoItem {
  id: string;
  name: string;
  logoUrl?: string; // Optional image URL fallback to textual logo
  svgIcon?: React.ReactNode;
}

export interface SocialProofSectionData {
  heading: string;
  subheading?: string;
  showTestimonials?: boolean;
  showClientLogos?: boolean;
  testimonials?: TestimonialItem[];
  clientLogos?: ClientLogoItem[];
}