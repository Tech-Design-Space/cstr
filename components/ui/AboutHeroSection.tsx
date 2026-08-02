'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { AboutHeroSectionData } from '@/types/aboutHero';
import { defaultAboutHeroData } from '@/data/aboutHeroData';

interface AboutHeroProps {
  data?: Partial<AboutHeroSectionData>;
}

export default function AboutHeroSection({ data }: AboutHeroProps) {
  const config = { ...defaultAboutHeroData, ...data };
  const {
    title,
    breadcrumbs = [],
    showScrollIndicator = true,
    bgImageUrl,
    overlayOpacity
  } = config;

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight * 0.5,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative w-full py-20 lg:py-24 text-foreground border-b border-slate-200/80 overflow-hidden flex flex-col justify-center min-h-[300px]  bg-brand-light">
      
      {/* Background Image Container */}
      {bgImageUrl && (
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src={bgImageUrl}
            alt="Hero Background"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      )}

      {/* Light Tint Overlay */}
      <div className={`absolute inset-0 z-10 ${overlayOpacity}`} />

      {/* Decorative Subtle Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(var(--brand-dark) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }} 
      />

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-4"
        >
          {/* Breadcrumbs Navigation */}
          {breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs uppercase tracking-widest font-sans font-semibold text-brand-primary">
              {breadcrumbs.map((crumb, idx) => {
                const isLast = idx === breadcrumbs.length - 1;
                return (
                  <React.Fragment key={idx}>
                    {crumb.href && !isLast ? (
                      <Link 
                        href={crumb.href} 
                        className="text-brand-light hover:text-brand-primary transition-colors"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className={isLast ? 'text-brand-primary font-bold' : 'text-brand-primary'}>
                        {crumb.label}
                      </span>
                    )}

                    {!isLast && (
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    )}
                  </React.Fragment>
                );
              })}
            </nav>
          )}

          {/* Main Title Header */}
          <h1 className="text-4xl sm:text-6xl lg:text-6xl font-serif font-bold text-brand-light tracking-tight uppercase leading-none">
            {title}
          </h1>

          {/* Accent Gold Bar */}
          <div className="w-16 h-[3px] bg-brand-primary rounded-full" />
        </motion.div>
      </div>

      {/* Centered Scroll Indicator Arrow */}
      {showScrollIndicator && (
        <motion.button
          onClick={scrollToNextSection}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            y: { repeat: Infinity, duration: 1.8, ease: 'easeInOut' },
            opacity: { duration: 0.5 }
          }}
          aria-label="Scroll to next section"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-brand-accent hover:text-brand-primary transition-colors focus:outline-none p-2"
        >
          <ChevronDown className="w-6 h-6 stroke-[3]" />
        </motion.button>
      )}

    </section>
  );
}