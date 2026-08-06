"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { defaultPrivacyPolicyData } from "@/data/privacyPolicy";

export default function PrivacyPolicyPage() {
  const data = defaultPrivacyPolicyData;

  return (
    <main className="bg-white text-slate-800 min-h-screen">
      
      {/* SECTION 1: Hero Header */}
      <section className="relative w-full h-[45vh] min-h-[380px] max-h-[500px] flex items-center justify-center text-white overflow-hidden bg-brand-dark">
        {/* Background Image Container */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
          style={{ backgroundImage: `url('${data.bgImageUrl}')` }}
        />

        {/* Dark Brand Overlay */}
        <div className="absolute inset-0 bg-brand-dark/80 backdrop-blur-[1px]" />

        {/* Hero Banner Text */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center space-y-3">
          
          {/* Category Tag Line */}
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-300"
          >
            {data.categoryTag}
          </motion.span>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white"
          >
            {data.title}
          </motion.h1>

          {/* Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pt-2 flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-slate-400"
          >
            <Link href="/" className="hover:text-brand-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-brand-primary" />
            <span className="text-brand-primary">{data.title}</span>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Policy Content Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {data.sections.map((section) => (
            <div key={section.id} className="space-y-4">
              
              {/* Section Header */}
              {section.title && (
                <h2 className="text-lg sm:text-xl font-bold uppercase tracking-wider text-brand-dark border-b border-slate-200 pb-2">
                  {section.title}
                </h2>
              )}

              {/* Sub-Title */}
              {section.subTitle && (
                <h3 className="text-md sm:text-lg font-bold text-slate-800 pt-2">
                  {section.subTitle}
                </h3>
              )}

              {/* Text Paragraphs */}
              {section.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal"
                >
                  {paragraph}
                </p>
              ))}

              {/* Definitions List Format */}
              {section.definitions && section.definitions.length > 0 && (
                <ul className="space-y-3 pt-2 pl-2 sm:pl-4">
                  {section.definitions.map((def, idx) => (
                    <li
                      key={idx}
                      className="text-sm sm:text-base text-slate-600 leading-relaxed list-disc list-inside"
                    >
                      <strong className="font-semibold text-slate-900">{def.term}</strong>{" "}
                      {def.definition}
                    </li>
                  ))}
                </ul>
              )}

              {/* Bullet Points List Format */}
              {section.bullets && section.bullets.length > 0 && (
                <ul className="space-y-2 pt-2 pl-4 sm:pl-6 list-disc list-outside text-slate-600">
                  {section.bullets.map((bullet, idx) => (
                    <li key={idx} className="text-sm sm:text-base leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

            </div>
          ))}

          {/* Last Revision Footer Tag */}
          <div className="pt-8 border-t border-slate-200 text-xs text-slate-400 font-medium">
            Last Updated: {data.lastUpdated} —  T-Slab Construction Company Limited.
          </div>

        </div>
      </section>

    </main>
  );
}