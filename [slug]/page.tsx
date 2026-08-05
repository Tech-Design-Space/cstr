"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ArrowLeft, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { initialProjectsData, mockProjectData } from "@/data/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectSinglePage({ params }: PageProps) {
  // Unwrap Next.js 15+ async params
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  // Retrieve matching project data (or fallback mock)
  const project = mockProjectData[slug] || mockProjectData["sid-anambra"];

  // Fetch related projects excluding current slug
  const relatedProjects = initialProjectsData
    .filter((item) => item.slug?.current !== slug)
    .slice(0, 3);

  // Error boundary guard if project is invalid
  if (!project) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center py-20 px-4 text-center">
        <AlertCircle className="w-12 h-12 text-brand-accent mb-4" />
        <h2 className="text-2xl font-bold text-brand-dark mb-2">Project Not Found</h2>
        <p className="text-slate-600 mb-6">The requested project layout or record could not be loaded.</p>
        <Link
          href="/projects"
          className="inline-flex items-center px-6 py-3 border border-brand-dark text-brand-dark font-bold text-xs uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-colors"
        >
          Back To Projects
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-white text-slate-800 min-h-screen">
      
      {/* SECTION 1: Main Header with Hero Thumbnail */}
      <section className="relative w-full bg-brand-light pt-12 pb-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <div className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-slate-500 hover:text-brand-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </div>

          {/* Hero Header Title & Subtitle */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h1
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark tracking-tight mb-4"
            >
              {project.title}
            </motion.h1>
            {project.subtitle && (
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                {project.subtitle}
              </p>
            )}
          </div>

          {/* Featured Hero Image Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[16/9] w-full max-h-[550px] overflow-hidden rounded-xs shadow-md bg-slate-200"
          >
            <Image
              src={project.mainImage.src}
              alt={project.mainImage.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Project Showcase Information */}
      <section className="py-16 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Column A: Client Details */}
            <div className="md:col-span-3 space-y-6">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-brand-dark mb-1">
                  Client
                </h4>
                <p className="text-sm text-slate-600">{project.client}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-brand-dark mb-1">
                  Project
                </h4>
                <p className="text-sm text-slate-600">{project.projectName}</p>
              </div>
            </div>

            {/* Column B: Project Description */}
            <div className="md:col-span-6">
              <h4 className="text-sm font-bold uppercase tracking-wider text-brand-dark mb-2">
                Project Overview
              </h4>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal whitespace-pre-line">
                {project.description}
              </p>
            </div>

            {/* Column C: Categories List */}
            <div className="md:col-span-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-brand-dark mb-3">
                Categories
              </h4>
              <ul className="space-y-2">
                {project.categories.map((category, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-xs sm:text-sm text-slate-600"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mr-2.5 flex-shrink-0" />
                    {category}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: Related Images Grid (3 or 4 Column Responsive Grid) */}
      {project.galleryImages && project.galleryImages.length > 0 && (
        <section className="py-16 sm:py-20 bg-brand-light/50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-brand-dark">
                Project Gallery
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {project.galleryImages.map((img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="relative aspect-square w-full overflow-hidden bg-slate-200 shadow-xs border border-slate-200/80 group"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 4: Related Projects Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12 border-b border-slate-200 pb-4">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-dark">
              Related Projects
            </h3>
            <Link
              href="/projects"
              className="text-xs font-bold uppercase tracking-widest text-brand-primary hover:text-brand-primary-dark transition-colors"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProjects.map((item) => (
              <article key={item._id} className="group flex flex-col cursor-pointer">
                <Link href={`/projects/${item.slug?.current || "#"}`}>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-light mb-4 border border-slate-100">
                    <Image
                      src={item.mainImage.src}
                      alt={item.mainImage.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex items-start justify-between pr-2">
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500">
                        {item.categories.join(", ")}
                      </p>
                    </div>

                    <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-brand-primary group-hover:translate-x-1 transition-all duration-200 mt-1 flex-shrink-0" />
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}