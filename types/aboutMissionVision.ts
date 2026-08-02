import { LucideIcon } from 'lucide-react';

export interface CoreValueItem {
  id: string;
  title: string;
  description: string;
  iconName?: string;
}

export interface AboutMissionVisionData {
  eyebrow: string;
  title: string;
  mission: {
    badge: string;
    heading: string;
    description: string;
  };
  vision: {
    badge: string;
    heading: string;
    description: string;
  };
  coreValuesHeading: string;
  coreValues: CoreValueItem[];
}