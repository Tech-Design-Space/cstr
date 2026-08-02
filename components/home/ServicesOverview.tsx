"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, HardHat, LandPlot, Wand } from "lucide-react";
import { ServicesOverviewData, ServiceCardItem } from "@/types/services";
import { defaultServicesMainData } from "@/data/servicesData";

interface ServicesOverviewProps {
  data?: ServicesOverviewData;
}

const renderServiceIcon = (iconName: ServiceCardItem["iconName"]) => {
  switch (iconName) {
    case "Building2":
      return <Building2 className="w-12 h-12 stroke-[1.5]" />;
    case "Road":
      return <Wand className="w-12 h-12 stroke-[1.5]" />;
    case "Bridge":
      return <LandPlot className="w-12 h-12 stroke-[1.5]" />;
    default:
      return <HardHat className="w-12 h-12 stroke-[1.5]" />;
  }
};

export default function ServicesOverview({
  data = defaultServicesMainData,
}: ServicesOverviewProps) {
  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-brand-dark text-white">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src={data.bgImageUrl}
          alt="Jiba Construction Equipment and Civil Works"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* <div className="absolute inset-0 bg-brand-dark/90 mix-blend-multiply" /> */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/95 via-brand-dark/85 to-brand-dark/95" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-16 lg:mb-20 space-y-3"
        >
          {/* Subheading Badge / Line */}
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-primary font-sans block">
            {data.subheading}
          </span>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white uppercase">
            {data.heading}
          </h2>

          {/* Centered Accent Line */}
          <div className="w-12 h-[3px] bg-brand-primary mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 items-stretch">
          {data.services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group flex flex-col justify-between items-center text-center p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-brand-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col items-center">
                {/* Custom Line-Art Icon */}
                <div className="text-brand-primary mb-6 transition-transform duration-300 group-hover:scale-110">
                  {renderServiceIcon(service.iconName)}
                </div>

                {/* Service Card Header */}
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide uppercase mb-3">
                  {service.title}
                </h3>

                {/* Divider Line */}
                <div className="w-10 h-[2px] bg-brand-primary/80 mb-5 transition-all duration-300 group-hover:w-16" />

                {/* Service Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans max-w-sm mb-8">
                  {service.description}
                </p>
              </div>

              {/* Action Button matching reference layout */}
              <Link
                href={service.ctaHref}
                className="w-full sm:w-auto inline-block px-8 py-3.5 bg-brand-light text-brand-dark font-sans font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-brand-primary hover:text-brand-dark transition-all duration-300 shadow-md"
              >
                {service.ctaText}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
