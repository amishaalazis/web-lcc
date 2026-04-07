'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ServiceType } from '@/types/services';
import { services } from '../constants/dummy';
import { AnimatedButton } from '@/components/AnimatedButton';

interface ServiceSectionProps {
  service: ServiceType;
  index: number;
  isEven: boolean;
}

function ServiceSection({ service, index, isEven }: ServiceSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 0.5, 1], ['-15%', '0%', '15%']);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5, 1], ['60px', '0px', '-60px']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const progressWidth = useTransform(scrollYProgress, [0.3, 0.7], ['0%', '100%']);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-12 lg:py-16 flex items-center min-h-[70vh] overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-[1200px]">
        <div
          className={`flex flex-col ${
            isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
          } gap-10 lg:gap-16 items-center`}
        >
          <motion.div
            style={{ y: imageY, scale: imageScale, opacity: imageOpacity }}
            className="w-full lg:w-1/2 relative h-[40vh] md:h-[50vh] lg:h-[65vh] rounded-[2rem] overflow-hidden shadow-[0_15px_40px_-12px_rgba(0,0,0,0.12)] bg-slate-900 will-change-transform"
          >
            <div className="absolute inset-0 w-full h-full">
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            style={{ y: contentY, opacity: contentOpacity }}
            className="w-full lg:w-1/2 flex flex-col justify-center py-6 lg:py-0 will-change-transform"
          >
            <div className="flex items-center gap-5 mb-6">
              <span className="text-[#FF6231] font-mono text-lg lg:text-xl font-bold">
                0{index + 1}
              </span>
              <div className="h-px bg-slate-200 flex-grow max-w-[120px] relative overflow-hidden">
                <motion.div
                  style={{ width: progressWidth }}
                  className="absolute top-0 left-0 h-full bg-[#FF6231]"
                />
              </div>
            </div>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight leading-tight">
              {service.title}
            </h3>

            <p className="text-base md:text-lg text-slate-500 leading-relaxed mb-8">
              {service.description}
            </p>

            <div className="space-y-4 mb-10">
              {service.features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:bg-[#FF6231] group-hover:border-[#FF6231] group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#FF6231]/20">
                      <Icon
                        className="w-5 h-5 md:w-6 md:h-6 text-[#FF6231] transition-colors duration-500 group-hover:text-white"
                        strokeWidth={2}
                      />
                    </div>
                    <span className="text-sm md:text-base font-semibold text-slate-700 transition-colors duration-300 group-hover:text-[#FF6231]">
                      {feature.text}
                    </span>
                  </div>
                );
              })}
            </div>

            <div>
              <AnimatedButton
                className="bg-slate-900 border-slate-900 text-white rounded-full text-sm md:text-base"
                hoverContent={
                  <span className="flex items-center gap-2">
                    Kunjungi
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                  </span>
                }
              >
                Lihat Selengkapnya
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  const headerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ['start end', 'end start'],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], ['-40px', '40px']);
  const opacityY = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);
  const scaleY = useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.98]);

  return (
    <div className="bg-[#F8F9FA] w-full overflow-hidden">
      <section
        ref={headerRef}
        className="pt-16 pb-8 md:pt-24 md:pb-12 lg:pt-32 lg:pb-16 relative z-10"
      >
        <motion.div
          style={{ y: headerY, opacity: opacityY, scale: scaleY }}
          className="container mx-auto px-6 lg:px-12 max-w-4xl text-center flex flex-col items-center will-change-transform"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-4">
            Mendukung Berbagai Kebutuhan Operasional
          </h2>

          <p className="text-base md:text-lg lg:text-xl text-slate-500 leading-relaxed max-w-2xl font-medium">
            Tersedia berbagai pilihan layanan untuk menunjang aktivitas di berbagai sektor
          </p>
        </motion.div>
      </section>

      <div className="flex flex-col w-full pb-16 lg:pb-24">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <ServiceSection
              key={index}
              service={service}
              index={index}
              isEven={isEven}
            />
          );
        })}
      </div>
    </div>
  );
}