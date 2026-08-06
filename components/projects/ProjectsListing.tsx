"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Loader2, AlertCircle, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Project, CategoryFilter } from "@/types/project";
import { initialProjectsData } from "@/data/projects";

const CATEGORIES: CategoryFilter[] = [
  "ALL",
  "BUILDING CONSTRUCTION",
  "PROPERTY REFURBISHMENT",
  "INTERIOR DESIGN & FIT-OUT",
];

interface ProjectsListingProps {
  initialProjects?: Project[];
  pageSize?: number;
  onFetchMore?: (page: number, category: CategoryFilter) => Promise<Project[]>;
}

export default function ProjectsListing({
  initialProjects = initialProjectsData,
  pageSize = 3,
  onFetchMore,
}: ProjectsListingProps) {
  // Core State
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("ALL");
  const [visibleCount, setVisibleCount] = useState<number>(pageSize);

  // Async & Error State
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Sync internal state if initialProjects prop updates
  useEffect(() => {
    if (initialProjects.length > 0) {
      setProjects(initialProjects);
    }
  }, [initialProjects]);

  // Reset pagination state when switching active category
  const handleCategoryChange = (category: CategoryFilter) => {
    setActiveCategory(category);
    setFetchError(null);
    setVisibleCount(pageSize);
  };

  // Filter projects dynamically based on active category
  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "ALL") return true;
    return project.category.toUpperCase() === activeCategory.toUpperCase();
  });

  // Load More Handler matching reference pattern
  const handleLoadMore = async () => {
    setFetchError(null);
    setIsLoadingMore(true);

    try {
      if (onFetchMore) {
        const nextPage = currentPage + 1;
        const newItems = await onFetchMore(nextPage, activeCategory);

        if (Array.isArray(newItems) && newItems.length > 0) {
          setProjects((prev) => [...prev, ...newItems]);
          setCurrentPage(nextPage);
          setVisibleCount((prev) => prev + newItems.length);
        } else {
          // No additional remote items available
          setVisibleCount(filteredProjects.length);
        }
      } else {
        // Local pagination state advancement
        setVisibleCount((prev) =>
          Math.min(prev + pageSize, filteredProjects.length)
        );
      }
    } catch (err) {
      console.error("Failed to load more projects:", err);
      setFetchError("Unable to load additional projects. Please try again.");
    }  finally {
      setIsLoadingMore(false);
    }
  };

  const openLightbox = (projectId: string) => {
    // Placeholder lightbox execution handler
    console.log(`Open lightbox for project ID: ${projectId}`);
  };

  // Computed displayed slice & threshold check
  const displayedProjects = filteredProjects.slice(0, visibleCount);
  const hasMoreToLoad =
    visibleCount < filteredProjects.length || Boolean(onFetchMore);

  return (
    <section className="relative w-full py-20 lg:py-28 bg-white border-t border-slate-200/80 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Filter Navigation */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-b border-slate-200 pb-4 mb-16">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryChange(category)}
                className={`text-xs sm:text-sm font-semibold tracking-wider font-sans transition-colors duration-200 relative pb-2 cursor-pointer uppercase ${
                  isActive
                    ? "text-brand-dark border-b-2 border-brand-primary font-bold"
                    : "text-slate-500 hover:text-brand-dark"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid Container */}
        {displayedProjects.length === 0 ? (
          <div className="text-center py-24 text-slate-500 font-medium bg-slate-50 rounded-xl border border-slate-100">
            No projects found in this category.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            <AnimatePresence mode="popLayout">
              {displayedProjects.map((project, idx) => (
                <motion.div
                  key={project.id || `proj-item-${idx}`}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    duration: 0.35,
                    delay: (idx % pageSize) * 0.05,
                  }}
                  className="group"
                >
                  {/* Card Triggering Lightbox */}
                  <div
                    onClick={() => openLightbox(project.id)}
                    className="relative h-[480px] rounded-3xl overflow-hidden shadow-lg cursor-pointer select-none border border-slate-100"
                  >
                    <Image
                      src={project.imageSrc}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/45 to-transparent transition-opacity duration-300" />

                    {/* Bottom Details Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end z-10">
                      <span className="text-brand-primary text-xs font-bold uppercase tracking-widest font-sans mb-3 block border-b-2 border-brand-primary self-start pb-0.5">
                        {project.category}
                      </span>

                      <h3 className="text-2xl lg:text-3xl font-serif font-bold text-white mb-3 leading-tight group-hover:text-brand-primary transition-colors duration-300">
                        {project.title}
                      </h3>

                      <div className="flex items-center gap-2 text-slate-300 text-sm font-sans font-normal border-t border-white/10 pt-3 mt-1">
                        <MapPin className="w-4 h-4 text-brand-primary shrink-0" />
                        <span>{project.location}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Error Feedback Message */}
        {fetchError && (
          <div className="mt-8 flex items-center justify-center gap-2 text-rose-600 text-sm font-medium bg-rose-50 border border-rose-200 py-3 px-4 rounded-lg max-w-md mx-auto">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{fetchError}</span>
          </div>
        )}

        {/* Async Load More Button */}
        {hasMoreToLoad && (
          <div className="mt-16 text-center">
            <button
              type="button"
              onClick={handleLoadMore}
              disabled={isLoadingMore}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-brand-primary text-brand-dark font-sans font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-brand-primary-dark transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none cursor-pointer"
            >
              {isLoadingMore ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-brand-dark" />
                  <span>Loading Projects...</span>
                </>
              ) : (
                <span>Load More Projects</span>
              )}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}