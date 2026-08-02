'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';
import { AboutGallerySectionData } from '@/types/aboutGallery';
import { defaultAboutGalleryData } from '@/data/aboutGalleryData';

interface AboutGalleryProps {
  data?: Partial<AboutGallerySectionData>;
}

export default function AboutGallerySection({ data }: AboutGalleryProps) {
  const config = { ...defaultAboutGalleryData, ...data };
  const { eyebrow, title, images = [] } = config;

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleOpenLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedIndex(null);
  };

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : (prev as number) - 1));
  }, [selectedIndex, images.length]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : (prev as number) + 1));
  }, [selectedIndex, images.length]);

  // Handle overlay/backdrop click (close lightbox when clicking outer area)
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleCloseLightbox();
    }
  };

  // Keyboard navigation support (Escape, Left, Right)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handlePrev, handleNext]);

  return (
    <section className="relative w-full py-20 lg:py-28 bg-white border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        {(eyebrow || title) && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 space-y-3"
          >
            {eyebrow && (
              <p className="text-xs font-sans font-bold tracking-[0.25em] text-brand-primary uppercase">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl sm:text-5xl font-serif font-bold text-brand-dark tracking-tight uppercase">
                {title}
              </h2>
            )}
            <div className="w-12 h-[3px] bg-brand-primary mx-auto mt-3 rounded-full" />
          </motion.div>
        )}

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <motion.div
              key={img.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx % 6) * 0.08 }}
              onClick={() => handleOpenLightbox(idx)}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 cursor-pointer border border-slate-200 shadow-sm hover:shadow-md transition-all"
            >
              <Image
                src={img.src}
                alt={img.alt || `Gallery Image ${idx + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Subtle hover overlay icon */}
              <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/40">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={handleBackdropClick}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 select-none"
          >
            {/* Top Bar / Close Button */}
            <div className="flex justify-end items-center z-20 w-full pointer-events-none">
              <button
                onClick={handleCloseLightbox}
                aria-label="Close Lightbox"
                className="pointer-events-auto p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors focus:outline-none"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            {/* Main Stage Container (Clicking empty areas here closes modal) */}
            <div 
              onClick={handleBackdropClick}
              className="relative flex-1 flex items-center justify-center w-full my-auto px-4 sm:px-12"
            >
              {/* Previous Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                aria-label="Previous Image"
                className="absolute left-2 sm:left-6 z-20 p-3 text-white/80 hover:text-white bg-black/50 hover:bg-black/80 rounded-full backdrop-blur-sm transition-all focus:outline-none"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              {/* Active Center Image View */}
              <div 
                onClick={(e) => e.stopPropagation()} 
                className="relative w-full max-w-5xl h-[55vh] sm:h-[70vh] flex items-center justify-center"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedIndex}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="relative w-full h-full flex items-center justify-center"
                  >
                    <Image
                      src={images[selectedIndex].src}
                      alt={images[selectedIndex].alt || 'Gallery View'}
                      fill
                      priority
                      unoptimized
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Next Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Next Image"
                className="absolute right-2 sm:right-6 z-20 p-3 text-white/80 hover:text-white bg-black/50 hover:bg-black/80 rounded-full backdrop-blur-sm transition-all focus:outline-none"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
            </div>

            {/* Bottom Thumbnails Navigation Strip */}
            <div 
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl mx-auto pt-4 border-t border-white/10 flex justify-center gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-none z-20"
            >
              {images.map((thumb, idx) => {
                const isActive = idx === selectedIndex;
                return (
                  <button
                    key={thumb.id || idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedIndex(idx);
                    }}
                    className={`relative w-16 h-12 sm:w-20 sm:h-14 rounded overflow-hidden shrink-0 transition-all border-2 ${
                      isActive
                        ? 'border-brand-primary scale-105 opacity-100 shadow-md'
                        : 'border-transparent opacity-40 hover:opacity-80'
                    }`}
                  >
                    {/* Standard <img> tag prevents layout collapse in flex containers */}
                    <img
                      src={thumb.src}
                      alt={thumb.alt || `Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                );
              })}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}