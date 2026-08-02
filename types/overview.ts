export interface HighlightItem {
  id: string;
  value: string;
  label: string;
}

export interface CompanyOverviewData {
  badge: string;
  heading: string;
  paragraphs: string[];
  ctaText: string;
  ctaHref: string;
  highlights: HighlightItem[];
}