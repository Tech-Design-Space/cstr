'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import {
  LuBuilding2,
  LuCompass,
  LuHammer,
  LuHardHat,
  LuLayers,
  LuPalette,
  LuArrowUpRight,
} from 'react-icons/lu';
import { ServicesSectionData, ServiceItem } from '@/types/services';
import { defaultServicesData } from '@/data/servicesData';

const iconMap: Record<ServiceItem['iconName'], IconType> = {
  Building2: LuBuilding2,
  Compass: LuCompass,
  Home: LuHammer,
  HardHat: LuHardHat,
  Layers: LuLayers,
  Palette: LuPalette, // Now matches ServiceItem['iconName'] type definition
};

interface ServicesGridProps {
  data?: ServicesSectionData;
}

export default function ServicesGrid({
  data = defaultServicesData,
}: ServicesGridProps) {
  return (
    <section className="bg-brand-light text-foreground py-20 lg:py-28 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-10 lg:gap-x-12">
          {/* Header Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-start space-y-4 pr-4"
          >
            <span className="text-brand-primary text-xs font-bold uppercase tracking-widest block font-sans">
              {data.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-serif font-extrabold text-brand-dark leading-tight">
              {data.heading}
            </h2>
          </motion.div>

          {/* Service Cards */}
          {data.services.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || LuBuilding2;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: (index + 1) * 0.08 }}
                className="group flex flex-col justify-between p-2 rounded-xl transition-all"
              >
                <div>
                  <div className="mb-6 inline-flex items-center justify-center">
                    <IconComponent className="w-12 h-12 text-brand-primary transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <span className="block text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2 font-sans">
                    {service.categoryTag}
                  </span>

                  <h3 className="text-2xl font-serif font-bold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors flex items-center gap-2">
                    {service.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-2">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-dark hover:text-brand-primary transition-colors font-sans"
                  >
                    Learn More
                    <LuArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}