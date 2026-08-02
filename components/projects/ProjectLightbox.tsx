





'use client';

import React, { useCallback, useEffect } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowRight, MapPin, ExternalLink } from 'lucide-react';
import { ProjectItem } from '@/types/projects';

interface ProjectLightboxProps {
  isOpen: boolean;
  projects: ProjectItem[];
  selectedIndex: number;
  onClose: () => void;
}

export default function ProjectLightbox({
  isOpen,
  projects,
  selectedIndex,
  onClose,
}: ProjectLightboxProps) {
  // Modal Embla carousel instance with infinite looping enabled
  const [modalEmblaRef, modalEmblaApi] = useEmblaCarousel({
    loop: true,
    startIndex: selectedIndex,
  });

  const scrollPrev = useCallback(() => modalEmblaApi && modalEmblaApi.scrollPrev(), [modalEmblaApi]);
  const scrollNext = useCallback(() => modalEmblaApi && modalEmblaApi.scrollNext(), [modalEmblaApi]);

  // Jump to selected image whenever the lightbox is opened
  useEffect(() => {
    if (modalEmblaApi && isOpen) {
      modalEmblaApi.scrollTo(selectedIndex, true);
    }
  }, [modalEmblaApi, isOpen, selectedIndex]);

  // FIX 1: Lock body background scroll when lightbox is active
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Keyboard Navigation: Esc (close), Arrow Left/Right (navigate slider)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') scrollPrev();
      if (e.key === 'ArrowRight') scrollNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, scrollPrev, scrollNext]);

  return (
    <AnimatePresence>
      {isOpen && (
        /* FIX 2: Added onClick={onClose} to backdrop */
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 select-none"
        >
          {/* Top Bar Actions */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center gap-3">
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Slider Control Left */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevents backdrop close click
              scrollPrev();
            }}
            aria-label="Previous image"
            className="absolute left-4 sm:left-8 z-50 p-3.5 rounded-full bg-brand-dark/80 hover:bg-brand-primary text-white hover:text-brand-dark transition-all duration-200 border border-white/10 shadow-lg hidden sm:flex items-center justify-center"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          {/* Slider Control Right */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevents backdrop close click
              scrollNext();
            }}
            aria-label="Next image"
            className="absolute right-4 sm:right-8 z-50 p-3.5 rounded-full bg-brand-dark/80 hover:bg-brand-primary text-white hover:text-brand-dark transition-all duration-200 border border-white/10 shadow-lg hidden sm:flex items-center justify-center"
          >
            <ArrowRight className="w-6 h-6" />
          </button>

          {/* Embla Modal Viewport (e.stopPropagation prevents closing when clicking inside content) */}
          <div
            className="w-full max-w-5xl overflow-hidden"
            ref={modalEmblaRef}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex">
              {projects.map((project) => (
                <div key={project.id} className="flex-[0_0_100%] min-w-0 px-2 sm:px-4">
                  <div className="bg-brand-dark/40 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[85vh]">
                    
                    {/* Main High-Res Image Container */}
                    <div className="relative w-full lg:w-3/5 h-[320px] sm:h-[450px] lg:h-[540px]">
                      <Image
                        src={project.imageSrc}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>

                    {/* Side Info Overlay Panel */}
                    <div className="w-full lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-brand-dark text-white">
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-brand-primary text-xs font-bold uppercase tracking-widest">
                            {project.category}
                          </span>
                          <span className="text-xs bg-white/10 px-2.5 py-1 rounded-full text-slate-300">
                            {project.completionYear}
                          </span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-3 text-white">
                          {project.title}
                        </h3>

                        <div className="flex items-center gap-1.5 text-slate-300 text-xs font-sans mb-4">
                          <MapPin className="w-4 h-4 text-brand-primary" />
                          <span>{project.location}</span>
                        </div>

                        {project.details && (
                          <p className="text-slate-300 text-sm leading-relaxed border-t border-white/10 pt-4 font-sans">
                            {project.details}
                          </p>
                        )}
                      </div>

                      {/* External Details Link & Mobile Nav Controls */}
                      <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
                        <a
                          href={project.href}
                          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-primary hover:underline"
                        >
                          View Full Case Study
                          <ExternalLink className="w-4 h-4" />
                        </a>

                        {/* Mobile Arrows */}
                        <div className="flex sm:hidden items-center gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              scrollPrev();
                            }}
                            className="p-2 rounded-full bg-white/10 text-white"
                          >
                            <ArrowLeft className="w-4 h-4" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              scrollNext();
                            }}
                            className="p-2 rounded-full bg-white/10 text-white"
                          >
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}