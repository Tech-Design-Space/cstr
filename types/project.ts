export interface Project {
  _id: string;
  title: string;
  categories: string[];
  mainImage: {
    src: string;
    alt: string;
  };
  slug?: {
    current: string;
  };
}

export type CategoryFilter = 
  | "ALL"
  | "BUILDING CONSTRUCTION"
  | "CIVIL ENGINEERING"
  | "DESIGN & BUILD"
  | "FACILITY MANAGEMENT";











  export interface ProjectGalleryImage {
  src: string;
  alt: string;
}

export interface ProjectDetails {
  _id: string;
  title: string;
  subtitle?: string;
  client: string;
  projectName: string;
  description: string;
  categories: string[];
  mainImage: {
    src: string;
    alt: string;
  };
  galleryImages: ProjectGalleryImage[];
  slug: {
    current: string;
  };
}