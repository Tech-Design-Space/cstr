export interface HeroSlide {
  id: string;
  badge?: string;
  title: string;
  subtitle: string;
  bgImageUrl: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
}

export interface HeroCarouselData {
  slides: HeroSlide[];
}