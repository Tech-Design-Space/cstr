// 'use client';

// import React, { useState, useEffect, useCallback } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { HeroCarouselData } from '@/types/hero';
// import { defaultHeroData } from '@/data/HeroCarouselData';

// interface HeroCarouselProps {
//   data?: HeroCarouselData;
//   autoPlayInterval?: number;
// }

// export default function HeroCarousel({
//   data = defaultHeroData,
//   autoPlayInterval = 6000,
// }: HeroCarouselProps) {
//   const [currentIndex, setCurrentIndex] = useState<number>(0);
//   const [direction, setDirection] = useState<number>(1);
//   const [isHovered, setIsHovered] = useState<boolean>(false);

//   const slides = data.slides;

//   const nextSlide = useCallback(() => {
//     setDirection(1);
//     setCurrentIndex((prev) => (prev + 1) % slides.length);
//   }, [slides.length]);

//   const prevSlide = useCallback(() => {
//     setDirection(-1);
//     setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
//   }, [slides.length]);

//   const goToSlide = (index: number) => {
//     setDirection(index > currentIndex ? 1 : -1);
//     setCurrentIndex(index);
//   };

//   useEffect(() => {
//     if (isHovered) return;
//     const timer = setInterval(() => {
//       nextSlide();
//     }, autoPlayInterval);

//     return () => clearInterval(timer);
//   }, [nextSlide, autoPlayInterval, isHovered]);

//   const currentSlide = slides[currentIndex];

//   // Slide Animation Variants
//   const slideVariants = {
//     enter: (dir: number) => ({
//       x: dir > 0 ? '100%' : '-100%',
//       opacity: 0.6,
//     }),
//     center: {
//       x: '0%',
//       opacity: 1,
//     },
//     exit: (dir: number) => ({
//       x: dir > 0 ? '-100%' : '100%',
//       opacity: 0.6,
//     }),
//   };

//   return (
//     <section
//       aria-label="Hero Showcase Carousel"
//       className="relative w-full h-[85vh] min-h-[580px] max-h-[850px] bg-brand-dark overflow-hidden select-none"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Background Image Carousel Slider */}
//       <AnimatePresence initial={false} custom={direction}>
//         <motion.div
//           key={currentSlide.id}
//           custom={direction}
//           variants={slideVariants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
//           className="absolute inset-0 w-full h-full"
//         >
//           {/* Background Image */}
//           <Image
//             src={currentSlide.bgImageUrl}
//             alt={currentSlide.title}
//             fill
//             priority={currentIndex === 0}
//             className="object-cover object-center scale-105"
//             sizes="100vw"
//           />

//           {/* Dark Overlay with Gradient matching the screenshot */}
//           <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
//         </motion.div>
//       </AnimatePresence>

//       {/* Main Content Overlay */}
//       <div className="relative z-10 max-w-7xl mx-auto h-full px-6 sm:px-8 lg:px-12 flex items-center">
//         <div className="max-w-2xl text-white pt-10">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={currentSlide.id + '-content'}
//               initial={{ opacity: 0, y: 25 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.5, delay: 0.15 }}
//               className="space-y-6"
//             >
//               {/* Optional Badge */}
//               {currentSlide.badge && (
//                 <span className="inline-block text-xs uppercase tracking-widest font-semibold text-brand-primary bg-brand-primary/10 border border-brand-primary/30 px-3 py-1 rounded-full">
//                   {currentSlide.badge}
//                 </span>
//               )}

//               {/* Slide Headline */}
//               <h1 className="font-sans text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
//                 {currentSlide.title}
//               </h1>

//               {/* Slide Subtitle */}
//               <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed max-w-xl">
//                 {currentSlide.subtitle}
//               </p>

//               {/* Call to Action Buttons */}
//               <div className="pt-2 flex flex-wrap items-center gap-4">
//                 <Link
//                   href={currentSlide.primaryCta.href}
//                   className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-primary hover:bg-brand-primary-dark text-brand-dark font-extrabold text-xs uppercase tracking-widest transition-all duration-200 shadow-lg hover:shadow-brand-primary/20 transform hover:-translate-y-0.5"
//                 >
//                   {currentSlide.primaryCta.label}
//                 </Link>

//                 {currentSlide.secondaryCta && (
//                   <Link
//                     href={currentSlide.secondaryCta.href}
//                     className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs uppercase tracking-widest transition-all duration-200 border border-white/20 backdrop-blur-sm transform hover:-translate-y-0.5"
//                   >
//                     {currentSlide.secondaryCta.label}
//                   </Link>
//                 )}
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* Navigation Arrow Left */}
//       <button
//         type="button"
//         onClick={prevSlide}
//         aria-label="Previous Slide"
//         className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-brand-primary hover:text-brand-dark text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 group border border-white/10 cursor-pointer"
//       >
//         <ChevronLeft className="w-6 h-6 transform group-hover:-translate-x-0.5 transition-transform" />
//       </button>

//       {/* Navigation Arrow Right */}
//       <button
//         type="button"
//         onClick={nextSlide}
//         aria-label="Next Slide"
//         className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-brand-primary hover:text-brand-dark text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 group border border-white/10 cursor-pointer"
//       >
//         <ChevronRight className="w-6 h-6 transform group-hover:translate-x-0.5 transition-transform" />
//       </button>

//       {/* Slide Indicator Dots Bottom */}
//       <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2.5">
//         {slides.map((_, idx) => (
//           <button
//             key={`dot-${idx}`}
//             type="button"
//             onClick={() => goToSlide(idx)}
//             aria-label={`Go to slide ${idx + 1}`}
//             className={`transition-all duration-300 rounded-full cursor-pointer ${
//               idx === currentIndex
//                 ? 'w-7 h-2.5 bg-brand-primary'
//                 : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

















'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HeroCarouselData } from '@/types/hero';
import { defaultHeroData } from '@/data/HeroCarouselData';

interface HeroCarouselProps {
  data?: HeroCarouselData;
  autoPlayInterval?: number;
}

export default function HeroCarousel({
  data = defaultHeroData,
  autoPlayInterval = 6000,
}: HeroCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Initialize Embla with Autoplay Plugin
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 30 },
    [
      Autoplay({
        delay: autoPlayInterval,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  const slides = data.slides;
  const currentSlide = slides[selectedIndex];

  return (
    <section
      aria-label="Hero Showcase Carousel"
      className="relative w-full md:h-[85vh] h-[65vh]  min-h-[480px] max-h-[750px] md:min-h-[580px] md:max-h-[850px] bg-brand-dark overflow-hidden select-none"
    //   className="relative w-full h-[85vh] min-h-[580px] max-h-[850px] bg-brand-dark overflow-hidden select-none"
    >
      {/* Embla Viewport */}
      <div className="overflow-hidden w-full h-full" ref={emblaRef}>
        <div className="flex w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="relative flex-[0_0_100%] min-w-0 h-full w-full"
            >
              {/* Background Image */}
              <Image
                src={slide.bgImageUrl}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover w-full object-center scale-105"
                sizes="100vw"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
            </div>
          ))}
        </div>
      </div>

      {/* Floating Animated Text Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl text-white pt-10 pointer-events-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id + '-content'}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="space-y-6"
              >
                {/* {currentSlide.badge && (
                  <span className="inline-block text-xs uppercase tracking-widest font-semibold text-brand-primary bg-brand-primary/10 border border-brand-primary/30 px-3 py-1 rounded-full">
                    {currentSlide.badge}
                  </span>
                )} */}

                <h1 className="font-sans text-3xl sm:text-5xl  font-extrabold tracking-tight text-white leading-tight">
                  {currentSlide.title}
                </h1>

                <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-normal leading-relaxed max-w-xl">
                  {currentSlide.subtitle}
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    href={currentSlide.primaryCta.href}
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-primary hover:bg-brand-primary-dark text-brand-dark font-extrabold text-xs uppercase tracking-widest transition-all duration-200 shadow-lg hover:shadow-brand-primary/20 transform hover:-translate-y-0.5"
                  >
                    {currentSlide.primaryCta.label}
                  </Link>

                  {currentSlide.secondaryCta && (
                    <Link
                      href={currentSlide.secondaryCta.href}
                      className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs uppercase tracking-widest transition-all duration-200 border border-white/20 backdrop-blur-sm transform hover:-translate-y-0.5"
                    >
                      {currentSlide.secondaryCta.label}
                    </Link>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Arrow Left */}
      <button
        type="button"
        onClick={scrollPrev}
        aria-label="Previous Slide"
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-7 h-7 md:w-10 md:h-10   sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-brand-primary hover:text-brand-dark text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 group border border-white/10 cursor-pointer"
      >
        <ChevronLeft className="w-3 h-3 md:w-6 md:h-6 transform group-hover:-translate-x-0.5 transition-transform" />
      </button>

      {/* Navigation Arrow Right */}
      <button
        type="button"
        onClick={scrollNext}
        aria-label="Next Slide"
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-7 h-7 md:w-10 md:h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-brand-primary hover:text-brand-dark text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 group border border-white/10 cursor-pointer"
      >
        <ChevronRight className="w-3 h-3 md:w-6 md:h-6 transform group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Slide Indicator Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center space-x-2.5">
        {slides.map((_, idx) => (
          <button
            key={`dot-${idx}`}
            type="button"
            onClick={() => scrollTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              idx === selectedIndex
                ? 'w-7 h-2.5 bg-brand-primary'
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}