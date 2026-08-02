export interface ProjectItem {
  id: string;
  category: string;
  title: string;
  location: string;
  completionYear: string;
  imageSrc: string;
  href: string;
  details?: string;
}

export interface FeaturedProjectsData {
  badge: string;
  heading: string;
  description: string;
  defaultSpeed: number; // Controls base auto-scroll speed (e.g. 1, 2, 3)
  projects: ProjectItem[];
}