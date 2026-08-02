export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

export interface AboutGallerySectionData {
  eyebrow?: string;
  title?: string;
  images: GalleryImage[];
}