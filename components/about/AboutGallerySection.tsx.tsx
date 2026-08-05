"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { AboutGallerySectionData } from "@/types/aboutGallery";
import { defaultAboutGalleryData } from "@/data/aboutGalleryData";

interface AboutGalleryProps {
  data?: Partial<AboutGallerySectionData>;
  /** Number of images to render per page batch */
  pageSize?: number;
  /** Optional custom async fetch handler to load more items from API */
  onFetchMore?: (page: number) => Promise<any[]>;
}

export default function AboutGallerySection({
  data,
  pageSize = 6,
  onFetchMore,
}: AboutGalleryProps) {
  const config = { ...defaultAboutGalleryData, ...data };
  const { eyebrow, title, images: initialImages = [] } = config;

  // State Management
  const [galleryImages, setGalleryImages] = useState(initialImages);
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Async Loading & Error Handling State
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Drag Constraints & Active Thumbnail Scroll Sync
  const stripRef = useRef<HTMLDivElement>(null);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Sync internal gallery images if props update
  useEffect(() => {
    if (initialImages.length > 0) {
      setGalleryImages(initialImages);
    }
  }, [initialImages]);

  // Lightbox Handlers
  const handleOpenLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedIndex(null);
  };

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    const totalVisible = displayedImages.length;
    if (totalVisible === 0) return;

    setSelectedIndex((prev) =>
      prev === null || prev === 0 ? totalVisible - 1 : prev - 1,
    );
  }, [selectedIndex, galleryImages.length]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    const totalVisible = displayedImages.length;
    if (totalVisible === 0) return;

    setSelectedIndex((prev) =>
      prev === null || prev === totalVisible - 1 ? 0 : prev + 1,
    );
  }, [selectedIndex, galleryImages.length]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleCloseLightbox();
    }
  };

  // Keyboard Navigation Support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") handleCloseLightbox();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handlePrev, handleNext]);

  // Auto-scroll selected thumbnail into view inside lightbox
  useEffect(() => {
    if (selectedIndex !== null && thumbRefs.current[selectedIndex]) {
      thumbRefs.current[selectedIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [selectedIndex]);

  // Load More Handler (Local Pagination + Async API Integration)
  const handleLoadMore = async () => {
    setFetchError(null);
    setIsLoadingMore(true);

    try {
      // If external fetcher provided, request next batch from API
      if (onFetchMore) {
        const nextPage = currentPage + 1;
        const newItems = await onFetchMore(nextPage);

        if (Array.isArray(newItems) && newItems.length > 0) {
          setGalleryImages((prev) => [...prev, ...newItems]);
          setCurrentPage(nextPage);
          setVisibleCount((prev) => prev + newItems.length);
        } else {
          // No more items available remotely
          setVisibleCount(galleryImages.length);
        }
      } else {
        // Fallback: Simulate standard paginated render of local data
        await new Promise((resolve) => setTimeout(resolve, 400));
        setVisibleCount((prev) =>
          Math.min(prev + pageSize, galleryImages.length),
        );
      }
    } catch (err) {
      console.error("Failed to load gallery images:", err);
      setFetchError("Unable to load additional images. Please try again.");
    } finally {
      setIsLoadingMore(false);
    }
  };

  const displayedImages = galleryImages.slice(0, visibleCount);
  const hasMoreToLoad =
    visibleCount < galleryImages.length || Boolean(onFetchMore);

  return (
    <section id={"gallery-section"} className="relative w-full py-20 lg:py-28 bg-white border-t border-slate-200/80 overflow-hidden">
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
          <AnimatePresence mode="popLayout">
            {displayedImages.map((img, idx) => (
              <motion.div
                key={img.id || `gallery-item-${idx}`}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: (idx % pageSize) * 0.05 }}
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
                <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/40">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Error Feedback Message */}
        {fetchError && (
          <div className="mt-8 flex items-center justify-center gap-2 text-rose-600 text-sm font-medium bg-rose-50 border border-rose-200 py-3 px-4 rounded-lg max-w-md mx-auto">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{fetchError}</span>
          </div>
        )}

        {/* Async Load More Button */}
        {hasMoreToLoad && (
          <div className="mt-12 text-center">
            <button
              type="button"
              onClick={handleLoadMore}
              disabled={isLoadingMore}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-brand-primary text-brand-dark font-sans font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-brand-primary-dark transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none cursor-pointer"
            >
              {isLoadingMore ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-brand-dark" />
                  <span>Loading Images...</span>
                </>
              ) : (
                <span>Load More Images</span>
              )}
            </button>
          </div>
        )}
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
                className="pointer-events-auto p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors focus:outline-none cursor-pointer"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            {/* Main Stage View */}
            <div
              onClick={handleBackdropClick}
              className="relative flex-1 flex items-center justify-center w-full my-auto px-4 sm:px-12"
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                aria-label="Previous Image"
                className="absolute left-2 sm:left-6 z-20 p-3 text-white/80 hover:text-white bg-black/50 hover:bg-black/80 rounded-full backdrop-blur-sm transition-all focus:outline-none cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              {/* Active Center Image View */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-5xl h-[55vh] sm:h-[70vh] flex items-center justify-center"
              >
                <AnimatePresence mode="wait">
                  {selectedIndex !== null &&
                    displayedImages[selectedIndex]?.src && (
                      <motion.div
                        key={selectedIndex}
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.2 }}
                        className="relative w-full h-full flex items-center justify-center"
                      >
                        <Image
                          src={displayedImages[selectedIndex].src}
                          alt={
                            displayedImages[selectedIndex].alt || "Gallery View"
                          }
                          fill
                          priority
                          unoptimized
                          className="object-contain"
                        />
                      </motion.div>
                    )}
                </AnimatePresence>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                aria-label="Next Image"
                className="absolute right-2 sm:right-6 z-20 p-3 text-white/80 hover:text-white bg-black/50 hover:bg-black/80 rounded-full backdrop-blur-sm transition-all focus:outline-none cursor-pointer"
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
            </div>

            {/* Draggable Bottom Thumbnails Navigation Strip */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl mx-auto pt-4 border-t border-white/10 overflow-hidden z-20"
              ref={stripRef}
            >
              <motion.div
                drag="x"
                dragConstraints={stripRef}
                dragElastic={0.1}
                className="flex items-center gap-2 sm:gap-3 cursor-grab active:cursor-grabbing px-4 py-1"
              >
                {displayedImages.map((thumb, idx) => {
                  const isActive = idx === selectedIndex;
                  return (
                    <button
                      key={thumb.id || `thumb-${idx}`}
                      ref={(el) => {
                        thumbRefs.current[idx] = el;
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedIndex(idx);
                      }}
                      className={`relative w-16 h-12 sm:w-20 sm:h-14 rounded overflow-hidden shrink-0 transition-all border-2 cursor-pointer ${
                        isActive
                          ? "border-brand-primary scale-105 opacity-100 shadow-lg"
                          : "border-transparent opacity-40 hover:opacity-80"
                      }`}
                    >
                      <img
                        src={thumb.src}
                        alt={thumb.alt || `Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover pointer-events-none"
                        loading="lazy"
                      />
                    </button>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
