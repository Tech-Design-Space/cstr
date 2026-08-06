// types/project.ts

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  id: string; // Changed from _id to id to match requested data style
  category: string; // Changed from categories[] to single category
  title: string;
  location: string;
  completionYear: string;
  imageSrc: string; // Changed from mainImage object to imageSrc string
  details: string;
}

export type CategoryFilter =
  | "ALL"
  | "BUILDING CONSTRUCTION"
  | "PROPERTY REFURBISHMENT"
  | "INTERIOR DESIGN & FIT-OUT";