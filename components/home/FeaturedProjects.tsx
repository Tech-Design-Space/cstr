'use client';

import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, Expand, MapPin } from 'lucide-react';
import { FeaturedProjectsData } from '@/types/projects';
import { defaultProjectsData } from '@/data/projectsData';
import ProjectLightbox from '../projects/ProjectLightbox';

interface FeaturedProjectsProps {
  data?: FeaturedProjectsData;
}

export default function FeaturedProjects({
  data = defaultProjectsData,
}: FeaturedProjectsProps) {
  // Initialize AutoScroll Plugin with admin-configured default speed
  const [autoScrollPlugin] = useState(() =>
    AutoScroll({
      speed: data.defaultSpeed || 1.5,
      startDelay: 0,
      stopOnInteraction: false,
      stopOnMouseEnter: true, // Pauses on hover for better user experience
    })
  );

  // Main Page Carousel Setup with AutoScroll integration
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [autoScrollPlugin]
  );

  // Lightbox Modal state management
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const openLightbox = (index: number) => {
    setActiveProjectIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <section className="bg-background text-foreground py-20 lg:py-28 border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block with Highlight Tag */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl space-y-4"
          >
            {/* Solid Gold Highlight Badge */}
            <div className="inline-block bg-brand-primary text-brand-dark px-3.5 py-1.5 font-sans font-bold text-xs uppercase tracking-widest">
              {data.badge}
            </div>

            {/* Title */}
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-brand-dark tracking-tight">
              {data.heading}
            </h2>

            {/* Description */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal pt-2">
              {data.description}
            </p>
          </motion.div>

          {/* Controls Block: View All Button + Carousel Nav Arrows */}
          <div className="flex items-center gap-4 sm:gap-6 ">
            {/* Desktop View All Projects Button */}
            <Link
              href="/projects"
              className="hidden sm:inline-flex items-center gap-2 px-6 py-3 border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300"
            >
              <span>View All Projects</span>
              <ArrowUpRight className="w-4 h-4 text-brand-primary" />
            </Link>

            {/* Carousel Navigation Buttons */}
            <div className="flex items-center gap-3 hidden">
              <button
                onClick={scrollPrev}
                aria-label="Previous Slide"
                className="p-3.5 rounded-full border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollNext}
                aria-label="Next Slide"
                className="p-3.5 rounded-full border-2 border-brand-dark text-brand-dark hover:bg-brand-primary hover:border-brand-primary hover:text-brand-dark transition-colors duration-200"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Embla Carousel Viewport */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing -mx-4 px-4" ref={emblaRef}>
          <div className="flex gap-6 sm:gap-8">
            {data.projects.map((project, index) => (
              <div
                key={project.id}
                className="flex-[0_0_88%] sm:flex-[0_0_48%] lg:flex-[0_0_31.5%] min-w-0"
              >
                {/* Clickable Card triggers Lightbox */}
                <div
                  onClick={() => openLightbox(index)}
                  className="group block relative h-[460px] rounded-2xl overflow-hidden shadow-md cursor-pointer select-none"
                >
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 88vw, (max-width: 1024px) 48vw, 31.5vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/40 to-transparent transition-opacity duration-300" />

                  {/* Expand / Lightbox Indicator Icon */}
                  <div className="absolute top-5 left-5 bg-brand-dark/80 backdrop-blur-md p-2.5 rounded-full text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10">
                    <Expand className="w-4 h-4" />
                  </div>

                  {/* Completion Year Tag */}
                  <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-brand-dark font-sans shadow-sm">
                    {project.completionYear}
                  </div>

                  {/* Bottom Text Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 flex flex-col justify-end">
                    <span className="text-brand-primary text-xs font-bold uppercase tracking-wider font-sans mb-2 block border-b-2 border-brand-primary inline-self-start pb-0.5 max-w-max">
                      {project.category}
                    </span>

                    <h3 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-brand-primary transition-colors">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-slate-300 text-xs font-sans">
                      <MapPin className="w-3.5 h-3.5 text-brand-primary" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View All Projects Button (Centered Below Carousel) */}
        <div className="mt-10 sm:hidden flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 w-full justify-center"
          >
            <span>View All Projects</span>
            <ArrowUpRight className="w-4 h-4 text-brand-primary" />
          </Link>
        </div>

      </div>

      {/* Lightbox / Modal Integration */}
      <ProjectLightbox
        isOpen={isLightboxOpen}
        projects={data.projects}
        selectedIndex={activeProjectIndex}
        onClose={() => setIsLightboxOpen(false)}
      />
    </section>
  );
}