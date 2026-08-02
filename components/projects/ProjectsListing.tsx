"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Loader2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Project, CategoryFilter } from "@/types/project";
import { initialProjectsData } from "@/data/projects";

const CATEGORIES: CategoryFilter[] = [
  "ALL",
  "BUILDING CONSTRUCTION",
  "CIVIL ENGINEERING",
  "DESIGN & BUILD",
  "FACILITY MANAGEMENT",
];

const ITEMS_PER_PAGE = 3;

export default function ProjectsListing() {
  const [projects, setProjects] = useState<Project[]>(initialProjectsData);
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("ALL");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Filter projects dynamically based on active category
  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "ALL") return true;
    return project.categories.some(
      (cat) => cat.toUpperCase() === activeCategory
    );
  });

  // Asynchronous Fetching function (Ready for Sanity GROQ Integration)
  const handleLoadMore = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Sanity GROQ query placeholder:
      /*
      const query = `*[_type == "project" ${
        activeCategory !== "ALL" ? '&& $category in categories' : ''
      }] | order(_createdAt desc) [$start..$end] {
        _id,
        title,
        categories,
        mainImage,
        slug
      }`;
      const params = { 
        start: projects.length, 
        end: projects.length + ITEMS_PER_PAGE - 1,
        category: activeCategory 
      };
      const newProjects = await sanityClient.fetch(query, params);
      */

      // Simulated delay & data load
      await new Promise((resolve) => setTimeout(resolve, 1200));

      const mockMoreProjects: Project[] = [
        {
          _id: `proj-${projects.length + 1}`,
          title: "Civic Center Expansion, Port Harcourt",
          categories: ["CIVIL ENGINEERING", "FACILITY MANAGEMENT"],
          mainImage: {
            src: "/images/projects/sid-anambra.jpg",
            alt: "Civic Center Expansion",
          },
          slug: { current: "civic-center-ph" },
        },
        {
          _id: `proj-${projects.length + 2}`,
          title: "Eko Tech Hub, Lagos",
          categories: ["DESIGN & BUILD", "BUILDING CONSTRUCTION"],
          mainImage: {
            src: "/images/projects/kingsuite-lagos.jpg",
            alt: "Eko Tech Hub Construction",
          },
          slug: { current: "eko-tech-hub" },
        },
      ];

      if (mockMoreProjects.length < ITEMS_PER_PAGE) {
        setHasMore(false);
      }

      setProjects((prev) => [...prev, ...mockMoreProjects]);
    } catch (err) {
      console.error("Error fetching more projects:", err);
      setError("Failed to load more projects. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Tabs Navigation */}
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 border-b border-slate-200 pb-4 mb-12">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setError(null);
                }}
                className={`text-xs sm:text-sm font-semibold tracking-wider transition-colors duration-200 relative pb-2 cursor-pointer ${
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

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 text-slate-500 font-medium">
            No projects found in this category.
          </div>
    ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.article
                  key={project._id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group flex flex-col cursor-pointer"
                >
                  <Link href={`/projects/${project.slug?.current || "#"}`}>
                    {/* Project Image Frame */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-light mb-4">
                      <Image
                        src={project.mainImage.src}
                        alt={project.mainImage.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content Details */}
                    <div className="flex items-start justify-between pr-2">
                      <div className="space-y-1">
                        <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 font-normal">
                          {project.categories.join(", ")}
                        </p>
                      </div>

                      {/* Arrow Icon Indicator */}
                      <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-brand-primary group-hover:translate-x-1 transition-all duration-200 mt-1 flex-shrink-0" />
                    </div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Error Notification Handling */}
        {error && (
          <div className="mt-8 flex items-center justify-center gap-2 text-brand-accent text-sm font-medium">
            <AlertCircle className="w-4 h-4" />
            <span>{error}</span>
          </div>
        )}

        {/* Load More Button Controls */}
        {hasMore && (
          <div className="mt-16 text-center">
            <button
              onClick={handleLoadMore}
              disabled={isLoading}
              className="inline-flex items-center justify-center px-8 py-3.5 border border-brand-dark text-brand-dark font-bold text-xs uppercase tracking-widest hover:bg-brand-dark hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin text-brand-primary" />
                  Loading...
                </>
              ) : (
                "Load More Projects"
              )}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}