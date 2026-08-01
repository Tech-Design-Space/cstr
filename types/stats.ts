export interface StatItem {
  id: string;
  value: number;
  suffix: string; // e.g., "+", "%", "k+"
  label: string;
  description: string;
  iconName: 'Building2' | 'Ruler' | 'HardHat' | 'Award';
}

export interface StatsSectionData {
  badge?: string;
  heading?: string;
  stats: StatItem[];
}