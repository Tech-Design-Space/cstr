'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { AboutClientsSectionData, ClientLogo } from '@/types/aboutClients';
import { defaultAboutClientsData } from '@/data/aboutClientsData';

interface AboutClientsProps {
  data?: Partial<AboutClientsSectionData>;
}

export default function AboutClientsSection({ data }: AboutClientsProps) {
  const config = { ...defaultAboutClientsData, ...data };
  const { eyebrow, title, description, showCategories = true, categories = [], clients = [] } = config;

  return (
    <section className="relative w-full py-20 lg:py-28 bg-brand-light border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-3 max-w-3xl mx-auto"
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
          <div className="w-12 h-[3px] bg-brand-primary mx-auto my-3 rounded-full" />
          {description && (
            <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed pt-1">
              {description}
            </p>
          )}
        </motion.div>

        {/* Categorized Layout vs Flat Layout */}
        {showCategories && categories.length > 0 ? (
          <div className="space-y-12">
            {categories.map((cat, catIdx) => (
              <motion.div
                key={cat.id || catIdx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="space-y-4"
              >
                {/* Category Header Banner (Styled like reference) */}
                <div className="w-full bg-brand-light text-brand-dark  py-3 px-6 rounded-t-md shadow-sm border-b-2 border-brand-primary">
                  <h3 className="text-lg sm:text-xl font-serif font-semibold text-center tracking-wide text-brand-dark">
                    {cat.title}
                  </h3>
                </div>

                {/* Clients Grid Row for Category */}
                <div className="bg-white rounded-b-md p-6 border border-slate-200 shadow-sm grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
                  {cat.clients.map((client, idx) => (
                    <ClientCard key={client.id || idx} client={client} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Un-categorized / Flat Grid View */
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg p-8 border border-slate-200 shadow-sm grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 items-center"
          >
            {clients.map((client, idx) => (
              <ClientCard key={client.id || idx} client={client} />
            ))}
          </motion.div>
        )}

      </div>
    </section>
  );
}

{/* Individual Client Card Sub-component */}
function ClientCard({ client }: { client: ClientLogo }) {
  return (
    <div className="group relative flex flex-col items-center justify-center p-4 rounded-lg bg-white border border-slate-100 hover:border-brand-primary/40 hover:shadow-md transition-all duration-300 min-h-[110px]">
      <div className="relative w-full h-16 flex items-center justify-center">
        <img
          src={client.logoUrl}
          alt={client.name}
          className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
          loading="lazy"
        />
      </div>
      <span className="text-[11px] font-sans text-slate-500 font-medium mt-2 text-center line-clamp-1 group-hover:text-brand-dark transition-colors">
        {client.name}
      </span>
    </div>
  );
}