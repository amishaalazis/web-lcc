'use client';

import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { ServiceCard } from '@/components/Services/ServicesCard';
import { services } from '../constants/dummy';

export function Services() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const y1 = useTransform(scrollYProgress, [0, 0.4], ['100vh', '0vh']);
  const y2 = useTransform(scrollYProgress, [0, 0.5], ['120vh', '0vh']);
  const y3 = useTransform(scrollYProgress, [0, 0.6], ['140vh', '0vh']);
  const y4 = useTransform(scrollYProgress, [0, 0.7], ['160vh', '0vh']);

  const rotate1 = useTransform(scrollYProgress, [0, 0.4], [-8, 0]);
  const rotate2 = useTransform(scrollYProgress, [0, 0.5], [5, 0]);
  const rotate3 = useTransform(scrollYProgress, [0, 0.6], [-6, 0]);
  const rotate4 = useTransform(scrollYProgress, [0, 0.7], [7, 0]);

  const transforms = [
    { y: y1, rotate: rotate1 },
    { y: y2, rotate: rotate2 },
    { y: y3, rotate: rotate3 },
    { y: y4, rotate: rotate4 },
  ];

  return (
    <section
      ref={containerRef}
      id="layanan"
      className="relative h-[300vh] bg-[#F8F9FA]"
    >
      <div className="sticky top-0 h-screen w-full overflow-x-hidden overflow-y-visible flex flex-col justify-center py-20">
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0 px-4 text-center">
          <h4 className="text-[#FF6231] font-bold text-[14px] md:text-[18px] tracking-[0.3em] uppercase mb-4">
            Lini Bisnis Utama
          </h4>
          <h2 className="text-[4rem] sm:text-[6rem] md:text-[9rem] lg:text-[12rem] xl:text-[14rem] font-extrabold text-slate-200/50 leading-none tracking-tighter uppercase whitespace-nowrap">
            Services
          </h2>
        </div>

        <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 items-stretch">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                y={transforms[index].y}
                rotate={transforms[index].rotate}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}