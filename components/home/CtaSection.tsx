'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CtaSectionData } from '@/types/cta';
import { defaultCtaData } from '@/data/ctaData';

interface CtaSectionProps {
  data?: Partial<CtaSectionData>;
}

export default function CtaSection({ data }: CtaSectionProps) {
  // Graceful fallback with defaults to prevent runtime errors
  const config = { ...defaultCtaData, ...data };
  const { heading, subheading, ctaText, ctaHref } = config;

  return (
    <section className="w-full py-20 lg:py-28 bg-background text-foreground border-t border-slate-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center space-y-6"
        >
          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl  font-serif font-bold text-brand-dark uppercase tracking-tight max-w-4xl leading-tight">
            {heading}
          </h2>

          {/* Accent Line */}
          <div className="w-14 h-[3px] bg-brand-primary rounded-full my-2" />

          {/* Subheading / Description Paragraph */}
          {subheading && (
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg font-sans max-w-2xl leading-relaxed">
              {subheading}
            </p>
          )}

          {/* Primary CTA Button */}
          <div className="pt-4">
            <Link
              href={ctaHref || '/contact'}
              className="inline-block px-10 py-4 bg-brand-primary text-brand-dark font-sans font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-brand-primary-dark transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              {ctaText}
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}