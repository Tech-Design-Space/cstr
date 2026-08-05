"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ServicesHighlightData } from "@/types/servicesHighlight";
import { defaultServicesHighlightData } from "@/data/servicesHighlight";

interface ServicesHighlightProps {
  data?: ServicesHighlightData;
}

export default function ServicesHighlightSection({
  data = defaultServicesHighlightData,
}: ServicesHighlightProps) {
  return (
    <section className="py-20 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-16 space-y-6">
          {/* Badge Banner */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block"
          >
            <span className="bg-brand-primary text-brand-dark text-xs font-bold px-3 py-1.5 uppercase tracking-widest inline-block shadow-xs">
              {data.badgeText}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark leading-tight"
          >
            {data.mainHeading}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-3xl"
          >
            {data.subHeading}
          </motion.p>
        </div>

        {/* Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
          {data.services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group flex flex-col bg-white border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 rounded-xs overflow-hidden"
            >
              {/* Card Image */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Content - Full Description without truncating */}
              <div className="p-4 flex flex-col flex-grow  space-y-3">
                <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-primary transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}