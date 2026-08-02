'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { FaqSectionData } from '@/types/faq';
import { defaultFaqData } from '@/data/faqData';

interface FaqSectionProps {
  data?: Partial<FaqSectionData>;
}

export default function FaqSection({ data }: FaqSectionProps) {
  // Graceful data merging to prevent runtime crashes
  const config = { ...defaultFaqData, ...data };
  const { heading, subheading, description, faqs = [] } = config;

  // Track active accordion IDs (allows multiple to be open or single)
  const [openIds, setOpenIds] = useState<string[]>(
    faqs.slice(0, 2).map((item) => item.id) // Open first 2 items by default (matching reference screenshot)
  );

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  if (!faqs || faqs.length === 0) {
    return null;
  }

  // Split FAQs into 2 columns (matching the screenshot layout)
  const midpoint = Math.ceil(faqs.length / 2);
  const leftColumnFaqs = faqs.slice(0, midpoint);
  const rightColumnFaqs = faqs.slice(midpoint);

  const renderFaqItem = (faq: (typeof faqs)[0]) => {
    const isOpen = openIds.includes(faq.id);

    return (
      <div
        key={faq.id}
        className="bg-white rounded-xl border border-slate-200/80 shadow-sm transition-all duration-300 hover:border-brand-primary/40 overflow-hidden"
      >
        {/* Accordion Header / Trigger Button */}
        <button
          onClick={() => toggleFaq(faq.id)}
          className="w-full p-6 text-left flex items-start justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
          aria-expanded={isOpen}
        >
          <span className="font-serif font-bold text-base sm:text-lg text-brand-dark flex items-start gap-2.5 leading-snug">
            <span className="text-brand-primary shrink-0">{faq.number}</span>
            <span>{faq.question}</span>
          </span>

          {/* Plus/Minus Toggle Icon (Matching reference design) */}
          <div className="text-brand-dark shrink-0 pt-0.5 transition-transform duration-200">
            {isOpen ? (
              <Minus className="w-5 h-5 stroke-[2.5]" />
            ) : (
              <Plus className="w-5 h-5 stroke-[2.5]" />
            )}
          </div>
        </button>

        {/* Collapsible Answer Body */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="px-6 pb-6 pt-0 text-slate-600 font-sans text-sm sm:text-base leading-relaxed pl-10 border-t border-slate-100 mt-1">
                <p className="pt-3">{faq.answer}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <section className="w-full py-20 lg:py-28 bg-brand-light text-foreground border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          {subheading && (
            <span className="text-xs font-sans font-bold uppercase tracking-[0.25em] text-brand-primary block">
              {subheading}
            </span>
          )}

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-dark tracking-tight uppercase">
            {heading}
          </h2>

          <div className="w-14 h-[3px] bg-brand-primary mx-auto rounded-full mt-3" />

          {description && (
            <p className="text-slate-600 text-sm sm:text-base font-sans leading-relaxed pt-2">
              {description}
            </p>
          )}
        </motion.div>

        {/* 2-Column FAQ Layout (Matching Screenshot) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            {leftColumnFaqs.map((faq) => renderFaqItem(faq))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {rightColumnFaqs.map((faq) => renderFaqItem(faq))}
          </div>
        </div>

      </div>
    </section>
  );
}