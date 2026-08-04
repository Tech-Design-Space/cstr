import { SocialProofSectionData } from '@/types/socialProof';

export const defaultSocialProofData: SocialProofSectionData = {
  heading: 'Trusted by more than 3,000 clients around the world',
  subheading:
    'We are very proud of the service we provide and stand by every project we carry out. Read testimonials from our happy partners.',
  showTestimonials: false,
  showClientLogos: true,
  testimonials: [
    {
      id: 'test-1',
      name: 'Claire Olson',
      location: 'Seattle, Washington',
      role: 'Commercial Lead',
      avatarUrl:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
      quote:
        'Jiba Construction delivered our commercial complex ahead of schedule with unmatched precision and structural integrity. Truly outstanding work.',
      rating: 5,
    },
    {
      id: 'test-2',
      name: 'Phillip Hunt',
      location: 'Detroit, Michigan',
      role: 'Infrastructure Director',
      avatarUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      quote:
        'Working with Jiba was a smooth experience. Their engineering team handled complex blueprints with absolute structural perfection.',
      rating: 5,
    },
    {
      id: 'test-3',
      name: 'Amber Page',
      location: 'Portland, Oregon',
      role: 'Project Manager',
      avatarUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
      quote:
        'Standout professionalism, strict adherence to site safety standards, and fantastic ongoing project communication throughout.',
      rating: 5,
    },
    {
      id: 'test-4',
      name: 'Marcus Vance',
      location: 'Austin, Texas',
      role: 'Urban Developer',
      avatarUrl:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
      quote:
        'Their commitment to engineering accuracy and timely project delivery makes them our primary contractor choice for civil infrastructure.',
      rating: 5,
    },
  ],
  clientLogos: [
    { id: 'logo-1', name: 'AngelList' },
    { id: 'logo-2', name: 'J.P.Morgan' },
    { id: 'logo-3', name: 'Nike' },
    { id: 'logo-4', name: 'NASA' },
    { id: 'logo-5', name: 'Google' },
    { id: 'logo-6', name: 'Caterpillar' },
  ],
};