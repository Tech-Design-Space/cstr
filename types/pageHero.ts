export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeroSectionData {
  title: string;
  subtitle?: string;
  description?: string; // Optional subtitle / description
  breadcrumbs?: BreadcrumbItem[];
  showScrollIndicator?: boolean;
  bgImageUrl?: string;
  overlayOpacity?: string; // e.g. "bg-brand-dark/50"
}