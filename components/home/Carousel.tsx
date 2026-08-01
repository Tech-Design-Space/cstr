'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { Building2, ArrowRight, ArrowLeft } from 'lucide-react';

const projects = [
  { title: "Gudu Commercial Plaza", category: "Civil Engineering", image: "/placeholder-1.jpg" },
  { title: "Abuja Residential Estate", category: "Real Estate Development", image: "/placeholder-2.jpg" },
  { title: "Luxury Duplex Complex", category: "Realtors & Housing", image: "/placeholder-3.jpg" },
];

export default function ProjectCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="py-16 bg-brand-light px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header & Controls */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-brand-primary font-semibold text-sm uppercase tracking-wider">Our Portfolio</span>
            <h2 className="text-3xl font-serif text-brand-dark mt-1">Featured Construction Projects</h2>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={scrollPrev} 
              className="p-3 rounded-md bg-brand-dark text-white hover:bg-brand-dark-soft transition-colors"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={scrollNext} 
              className="p-3 rounded-md bg-brand-dark text-white hover:bg-brand-dark-soft transition-colors"
              aria-label="Next slide"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {projects.map((project, index) => (
              <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4 min-w-0">
                <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="h-56 bg-slate-200 flex items-center justify-center relative">
                    <Building2 className="w-12 h-12 text-slate-400" />
                    <span className="absolute top-3 left-3 bg-brand-dark text-brand-primary text-xs font-semibold px-2.5 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-serif text-brand-dark mb-2">{project.title}</h3>
                    <p className="text-sm text-slate-600 mb-4 flex-grow">
                      Executed with precision structural engineering and modern architectural standards.
                    </p>
                    <span className="text-brand-primary-dark font-semibold text-sm inline-flex items-center gap-1 cursor-pointer hover:underline">
                      View Project Details <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}