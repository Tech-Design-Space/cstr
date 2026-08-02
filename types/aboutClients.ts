export interface ClientLogo {
  id: string;
  name: string;
  logoUrl: string;
  category?: string; // Optional category association
}

export interface ClientCategory {
  id: string;
  title: string;
  clients: ClientLogo[];
}

export interface AboutClientsSectionData {
  eyebrow?: string;
  title?: string;
  description?: string;
  showCategories?: boolean; // Toggle categorized layout vs flat grid
  categories?: ClientCategory[];
  clients?: ClientLogo[]; // Used when showCategories is false
}