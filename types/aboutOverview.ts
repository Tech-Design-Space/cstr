export interface OverviewBusinessScope {
  id: string;
  title: string;
  subtitle?: string;
}

export interface AboutOverviewSectionData {
  eyebrow: string;
  title: string;
  subtitleHeading: string;
  watermarkText?: string;
  paragraphs: string[];
  keyHighlightsTitle?: string;
  keyHighlights: string[];
  // businessScopeHeading: string;
  // businessScopes: OverviewBusinessScope[];
  closingText?: string;
}