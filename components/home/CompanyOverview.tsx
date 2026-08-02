'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CompanyOverviewData } from '@/types/overview';
import { defaultOverviewData } from '@/data/overviewData';

interface CompanyOverviewProps {
  data?: CompanyOverviewData;
}

export default function CompanyOverview({
  data = defaultOverviewData,
}: CompanyOverviewProps) {
  return (
    <section className="bg-background text-foreground py-20 lg:py-28 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block with Brand Line Accent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 lg:mb-16"
        >
          {/* Line Prefix in Brand Primary Gold + Category Badge */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-brand-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-primary-dark font-sans">
              {data.badge}
            </span>
          </div>

          {/* Main Title in Brand Dark (Deep Emerald) */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-brand-dark tracking-tight">
            {data.heading}
          </h2>
        </motion.div>

        {/* Content Split: Left Editorial Story / Right Key Metrics Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Story Paragraphs & Branded Outlined CTA */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-6 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              {data.paragraphs.map((paragraph, index) => (
                <p key={`p-${index}`}>{paragraph}</p>
              ))}
            </div>

            {/* Outlined CTA Button with Hover State */}
            <div className="pt-6">
              <Link
                href={data.ctaHref}
                className="inline-block px-8 py-3.5 border-2 border-brand-dark text-brand-dark hover:bg-brand-primary hover:border-brand-primary hover:text-brand-dark font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-sm"
              >
                {data.ctaText}
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Key Highlights Vertical Stack */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 space-y-10 lg:pl-10 border-t lg:border-t-0 lg:border-l border-slate-200/80 pt-10 lg:pt-0"
          >
            {data.highlights.map((item) => (
              <div key={item.id} className="space-y-1.5 group">
                {/* Metric Big Value in Deep Emerald Green */}
                <div className="text-4xl sm:text-5xl font-extrabold font-sans text-brand-dark tracking-tight transition-colors group-hover:text-brand-primary">
                  {item.value}
                </div>
                {/* Metric Label in Clean Dark Foreground */}
                <p className="text-base sm:text-lg font-serif font-bold text-foreground leading-snug">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}