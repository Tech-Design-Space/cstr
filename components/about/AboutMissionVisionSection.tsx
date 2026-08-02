'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Compass, 
  ShieldCheck, 
  Building2, 
  Lightbulb, 
  Handshake,
  Award
} from 'lucide-react';
import { AboutMissionVisionData } from '@/types/aboutMissionVision';
import { defaultAboutMissionVisionData } from '@/data/aboutMissionVisionData';

interface AboutMissionVisionProps {
  data?: Partial<AboutMissionVisionData>;
}

// Map string icon names to Lucide Icon components
const ICON_MAP: Record<string, React.ElementType> = {
  ShieldCheck,
  Building2,
  Lightbulb,
  Handshake,
  Award,
};

export default function AboutMissionVisionSection({ data }: AboutMissionVisionProps) {
  const config = { ...defaultAboutMissionVisionData, ...data };
  const { eyebrow, title, mission, vision, coreValuesHeading, coreValues = [] } = config;

  return (
    <section className="relative w-full py-20 lg:py-28 bg-brand-light text-foreground border-t border-slate-200/80 overflow-hidden">
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 space-y-3"
        >
          <p className="text-xs font-sans font-bold tracking-[0.25em] text-brand-primary uppercase">
            {eyebrow}
          </p>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-brand-dark tracking-tight uppercase">
            {title}
          </h2>
          <div className="w-12 h-[3px] bg-brand-primary mx-auto mt-3 rounded-full" />
        </motion.div>

        {/* Top Split Cards: Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white rounded-xl p-8 sm:p-10 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-primary" />
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-sans font-bold tracking-widest text-brand-primary uppercase bg-brand-light px-3 py-1.5 rounded-md border border-brand-primary/20">
                  {mission.badge}
                </span>
                <Target className="w-8 h-8 text-brand-primary opacity-80 group-hover:scale-110 transition-transform" />
              </div>

              <h3 className="text-2xl font-serif font-bold text-brand-dark pt-2">
                {mission.heading}
              </h3>

              <p className="text-slate-600 font-sans leading-relaxed text-sm sm:text-base">
                {mission.description}
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative bg-brand-dark text-white rounded-xl p-8 sm:p-10 border border-brand-dark-soft shadow-lg flex flex-col justify-between overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-primary" />
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-sans font-bold tracking-widest text-brand-primary uppercase bg-brand-dark-soft px-3 py-1.5 rounded-md border border-brand-primary/30">
                  {vision.badge}
                </span>
                <Compass className="w-8 h-8 text-brand-primary opacity-80 group-hover:scale-110 transition-transform" />
              </div>

              <h3 className="text-2xl font-serif font-bold text-white pt-2">
                {vision.heading}
              </h3>

              <p className="text-slate-300 font-sans leading-relaxed text-sm sm:text-base">
                {vision.description}
              </p>
            </div>
          </motion.div>

        </div>

        {/* Core Values Section */}
        {coreValues.length > 0 && (
          <div className="pt-8">
            <div className="text-center mb-10">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-dark uppercase tracking-wider">
                {coreValuesHeading}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, idx) => {
                const IconComponent = value.iconName ? ICON_MAP[value.iconName] || Award : Award;
                return (
                  <motion.div
                    key={value.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="bg-white rounded-lg p-6 border border-slate-200/80 hover:border-brand-primary/50 hover:shadow-md transition-all space-y-3"
                  >
                    <div className="w-12 h-12 rounded-lg bg-brand-light flex items-center justify-center text-brand-primary border border-brand-primary/20">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif font-bold text-brand-dark text-base pt-1">
                      {value.title}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}