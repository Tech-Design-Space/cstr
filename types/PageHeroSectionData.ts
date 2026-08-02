export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface ServicesHeroSectionData {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
  showScrollIndicator?: boolean;
  bgImageUrl: string;
  overlayOpacity?: string;
}