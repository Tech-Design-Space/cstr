export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface AboutHeroSectionData {
  title: string;
  breadcrumbs?: BreadcrumbItem[];
  showScrollIndicator?: boolean;
  bgImageUrl?: string;
  overlayOpacity?: string; // e.g. "bg-white/80" or "bg-brand-light/90"
}