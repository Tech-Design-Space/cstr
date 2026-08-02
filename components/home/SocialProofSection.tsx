'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { Star, User } from 'lucide-react';
import { SocialProofSectionData } from '@/types/socialProof';
import { defaultSocialProofData } from '@/data/socialProofData';

interface SocialProofProps {
  data?: Partial<SocialProofSectionData>;
}

export default function SocialProofSection({ data }: SocialProofProps) {
  const config = { ...defaultSocialProofData, ...data };
  const {
    heading,
    subheading,
    showTestimonials = true,
    showClientLogos = true,
    testimonials = [],
    clientLogos = [],
  } = config;

  // Determine actual render eligibility based on flags AND available data
  const hasValidTestimonials = showTestimonials && testimonials.length > 0;
  const hasValidLogos = showClientLogos && clientLogos.length > 0;

  // Embla Carousel setup for Testimonials
  const [testimonialEmblaRef, testimonialEmblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  );

  // Embla Carousel setup for Client Logos (Infinite Marquee/Slider effect)
  const [logoEmblaRef] = useEmblaCarousel(
    { loop: true, align: 'center', dragFree: true },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => testimonialEmblaApi && testimonialEmblaApi.scrollTo(index),
    [testimonialEmblaApi]
  );

  const onSelect = useCallback(() => {
    if (!testimonialEmblaApi) return;
    setSelectedIndex(testimonialEmblaApi.selectedScrollSnap());
  }, [testimonialEmblaApi]);

  useEffect(() => {
    if (!testimonialEmblaApi) return;
    onSelect();
    setScrollSnaps(testimonialEmblaApi.scrollSnapList());
    testimonialEmblaApi.on('select', onSelect);
    testimonialEmblaApi.on('reInit', onSelect);
  }, [testimonialEmblaApi, onSelect]);

  // If both toggles are false or both data sets are empty, exit cleanly without crashing the page
  if (!hasValidTestimonials && !hasValidLogos) {
    return null;
  }

  return (
    <section className="w-full py-20 lg:py-28 bg-background text-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CONSTANT SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-dark tracking-tight">
            {heading}
          </h2>

          <div className="w-16 h-[3px] bg-brand-primary mx-auto rounded-full" />

          {subheading && (
            <p className="text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
              {subheading}
            </p>
          )}
        </motion.div>

        {/* TESTIMONIALS SLIDER (Conditionally Rendered) */}
        {hasValidTestimonials && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            {/* Embla Viewport */}
            <div className="overflow-hidden" ref={testimonialEmblaRef}>
              <div className="flex -ml-4 sm:-ml-6">
                {testimonials.map((item) => (
                  <div
                    key={item.id}
                    className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 sm:pl-6"
                  >
                    <div className="h-full bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
                      <div>
                        {/* Client Identity Header (Matching Screenshot Layout) */}
                        <div className="flex items-center gap-4 mb-5">
                          {item.avatarUrl ? (
                            <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-brand-primary/30">
                              <Image
                                src={item.avatarUrl}
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ) : (
                            <div className="w-12 h-12 rounded-full bg-brand-dark/10 text-brand-dark flex items-center justify-center shrink-0">
                              <User className="w-6 h-6" />
                            </div>
                          )}

                          <div>
                            <h4 className="text-base font-serif font-bold text-brand-dark leading-snug">
                              {item.name}
                            </h4>
                            <p className="text-xs text-slate-500 font-sans">
                              {item.location}
                              {item.role ? ` • ${item.role}` : ''}
                            </p>
                          </div>
                        </div>

                        {/* Testimonial Quote */}
                        <p className="text-slate-600 text-sm leading-relaxed font-sans mb-6">
                          "{item.quote}"
                        </p>
                      </div>

                      {/* Rating Stars (Matching Screenshot Standard) */}
                      <div className="flex items-center gap-1 text-brand-primary">
                        {Array.from({ length: item.rating || 5 }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-brand-primary stroke-none" />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots (Matching Screenshot 1) */}
            {scrollSnaps.length > 1 && (
              <div className="flex justify-center items-center gap-2 mt-8">
                {scrollSnaps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      selectedIndex === index
                        ? 'w-8 bg-brand-primary'
                        : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}

        {/* DIVIDER LINE (Shown only if both sections exist) */}
        {hasValidTestimonials && hasValidLogos && (
          <div className="w-full max-w-4xl mx-auto border-t border-slate-200/80 my-12" />
        )}

        {/* CLIENT LOGOS SLIDER (Conditionally Rendered - Matching Screenshot 2) */}
        {hasValidLogos && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <p className="text-center text-xs font-sans font-bold uppercase tracking-widest text-slate-400 mb-8">
              Trusted Corporate Clients & Strategic Partners
            </p>

            <div className="overflow-hidden" ref={logoEmblaRef}>
              <div className="flex items-center justify-between">
                {clientLogos.map((client) => (
                  <div
                    key={client.id}
                    className="flex-[0_0_50%] sm:flex-[0_0_33.333%] md:flex-[0_0_25%] lg:flex-[0_0_20%] min-w-0 flex items-center justify-center px-4"
                  >
                    <div className="opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 text-slate-500 hover:text-brand-dark py-2">
                      {client.logoUrl ? (
                        <Image
                          src={client.logoUrl}
                          alt={client.name}
                          width={140}
                          height={40}
                          className="object-contain max-h-10 w-auto"
                        />
                      ) : client.svgIcon ? (
                        client.svgIcon
                      ) : (
                        <span className="font-serif text-lg font-bold tracking-wider uppercase text-slate-600 hover:text-brand-dark">
                          {client.name}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}