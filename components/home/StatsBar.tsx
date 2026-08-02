'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Ruler, HardHat, Award, LucideIcon } from 'lucide-react';
import { StatsSectionData, StatItem } from '@/types/stats';
import { defaultStatsData } from '@/data/stats';

const iconMap: Record<StatItem['iconName'], LucideIcon> = {
  Building2,
  Ruler,
  HardHat,
  Award,
};

interface StatsBarProps {
  data?: StatsSectionData;
}

export default function StatsBar({ data = defaultStatsData }: StatsBarProps) {
  return (
    // Shifted from dark background to the clean white/main background of the site.
    <section className="relative z-20 bg-background text-foreground py-16 lg:py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Optional Section Header */}
        {(data.badge || data.heading) && (
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            {data.badge && (
              // Badge color changed to brand gold for prominence against white.
              <span className="text-brand-primary text-xs font-bold uppercase tracking-widest inline-block mb-3 border border-brand-primary/20 bg-brand-primary/5 px-4 py-1 rounded-full">
                {data.badge}
              </span>
            )}
            {data.heading && (
              // Main heading changed to Deep Emerald Green.
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-dark tracking-tight leading-tight">
                {data.heading}
              </h2>
            )}
          </div>
        )}

        {/* Responsive Grid Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.stats.map((stat, index) => {
            const IconComponent = iconMap[stat.iconName] || Building2;

            return (
              // LAYER 3: Interaction (Framer Motion Animation Boundary)
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                // Card styling updated: Subtle shadow and light gray border replace dark background.
                className="relative group bg-white hover:bg-white border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-lg rounded-2xl p-7 transition-all duration-300"
              >
                {/* Visual Accent Top Highlight */}
                <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-center gap-5 mb-5">
                  {/* Icon Box: Color scheme flipped (Gold Icon, Emerald background). */}
                  <div className="p-4 rounded-xl bg-brand-dark/5 text-brand-primary border border-brand-dark/10 group-hover:scale-105 transition-transform">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Stat Value: Flipped to Deep Emerald Green (Brand Dark). */}
                  <div className="flex-1 text-right">
                    <span className="text-4xl sm:text-5xl font-extrabold font-sans text-brand-dark tracking-tighter">
                      {stat.value}
                      <span className="text-brand-primary">{stat.suffix}</span>
                    </span>
                  </div>
                </div>

                {/* Stat Label & Description */}
                <div>
                  {/* Flipped to Deep Emerald Green. */}
                  <h3 className="text-xl font-serif font-bold text-brand-dark mb-2 tracking-tight">
                    {stat.label}
                  </h3>
                  {/* Flipped to standard dark foreground text. */}
                  <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}