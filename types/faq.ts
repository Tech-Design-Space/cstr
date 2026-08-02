export interface FaqItem {
  id: string;
  number: string; // e.g., "1.", "2."
  question: string;
  answer: string;
}

export interface FaqSectionData {
  subheading?: string;
  heading: string;
  description?: string;
  faqs: FaqItem[];
}