'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AboutOverviewSectionData } from '@/types/aboutOverview';
import { defaultAboutOverviewData } from '@/data/aboutOverview';

interface AboutOverviewProps {
  data?: Partial<AboutOverviewSectionData>;
}

export default function AboutOverviewSection({ data }: AboutOverviewProps) {
  const config = { ...defaultAboutOverviewData, ...data };
  const {
    eyebrow,
    title,
    subtitleHeading,
    watermarkText,
    paragraphs = [],
    keyHighlightsTitle,
    keyHighlights = [],
    businessScopeHeading,
    businessScopes = [],
    closingText,
  } = config;

  return (
    <section className="relative w-full py-20 lg:py-28 bg-white text-foreground overflow-hidden">
      
      {/* Background Watermark Text */}
      {watermarkText && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-[0.03]">
          <span className="text-[14vw] font-serif font-black tracking-widest text-brand-dark uppercase whitespace-nowrap">
            {watermarkText}
          </span>
        </div>
      )}

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16 space-y-3"
        >
          <p className="text-xs font-sans font-bold tracking-[0.25em] text-brand-primary uppercase">
            {eyebrow}
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-brand-dark tracking-tight uppercase">
            {title}
          </h2>
          <div className="w-12 h-[3px] bg-brand-dark mx-auto mt-3 rounded-full" />
        </motion.div>

        {/* Structured Long-Text Flow */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-10 text-slate-700 leading-relaxed font-sans text-base sm:text-lg"
        >

          {/* Subtitle / Main Pitch */}
          {subtitleHeading && (
            <div className="text-center sm:text-left border-l-4 border-brand-primary pl-4 sm:pl-6 py-1">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-dark uppercase tracking-wide">
                {subtitleHeading}
              </h3>
            </div>
          )}

          {/* Intro Paragraphs */}
          <div className="space-y-5 text-slate-600">
            {paragraphs.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Key Value Highlights Box */}
          {keyHighlights.length > 0 && (
            <div className="bg-brand-light/70 rounded-lg p-6 sm:p-8 border border-slate-200/80 space-y-4">
              {keyHighlightsTitle && (
                <h4 className="font-serif font-bold text-brand-dark text-sm sm:text-base uppercase tracking-wider">
                  {keyHighlightsTitle}
                </h4>
              )}
              <ul className="space-y-2.5 text-sm sm:text-base">
                {keyHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-brand-primary font-bold">✓</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Core Business Scopes */}
          {businessScopes.length > 0 && (
            <div className="pt-2 space-y-4">
              <h4 className="font-serif font-bold text-brand-dark text-base sm:text-lg uppercase tracking-wide">
                {businessScopeHeading}
              </h4>

              <div className="space-y-3 pt-1">
                {businessScopes.map((scope) => (
                  <div 
                    key={scope.id} 
                    className="flex items-start gap-4 p-4 rounded-md border border-slate-100 bg-white hover:border-brand-primary/40 transition-colors"
                  >
                    <span className="font-serif font-bold text-brand-primary-dark text-lg min-w-[24px]">
                      {scope.id}
                    </span>
                    <div>
                      <p className="font-semibold text-brand-dark">
                        {scope.title}
                      </p>
                      {scope.subtitle && (
                        <p className="italic text-slate-500 text-xs sm:text-sm mt-0.5">
                          {scope.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Closing Summary Paragraph */}
          {closingText && (
            <p className="text-slate-700 font-medium italic border-t border-slate-200 pt-6">
              {closingText}
            </p>
          )}

        </motion.div>

      </div>
    </section>
  );
}