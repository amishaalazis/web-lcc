'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { features } from '@/app/constants/dummy';

interface FeatureProps {
  feature: {
    title: string;
    description: string;
    icon: string;
  };
  index: number;
}

function FeatureCard({ feature, index }: FeatureProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const primaryHex = "#FF6231";
  const iconBgColor = "#FFEFE9";

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const yMove = useTransform(
    scrollYProgress,
    [0, 1],
    [100 + index * 25, -100 - index * 25]
  );
  const opacityMove = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.3]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y: yMove, opacity: opacityMove }}
      className="h-full"
    >
      <motion.div
        whileHover={{
          y: -12,
          scale: 1.03,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)",
          transition: { type: "spring", stiffness: 400, damping: 15 },
        }}
        className="bg-[#F8F9FA] rounded-3xl p-8 flex flex-col items-center text-center shadow-sm cursor-default border border-slate-50 transition-colors hover:bg-white h-full"
      >
        <div
          className="w-[72px] h-[72px] rounded-2xl flex items-center justify-center mb-6 flex-shrink-0"
          style={{ backgroundColor: iconBgColor }}
        >
          <div
            className="w-8 h-8"
            style={{
              backgroundColor: primaryHex,
              WebkitMaskImage: `url(${feature.icon})`,
              WebkitMaskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskImage: `url(${feature.icon})`,
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "center",
            }}
          />
        </div>

        <h3 className="text-[17px] font-bold text-slate-900 mb-3 tracking-tight">
          {feature.title}
        </h3>
        <p className="text-[14px] text-slate-500 leading-relaxed">
          {feature.description}
        </p>
      </motion.div>
    </motion.div>
  );
}

export function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 20%"],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={sectionRef} id="keunggulan" className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="text-center max-w-2xl mx-auto mb-20 flex flex-col items-center gap-3"
        >
          <h4 className="text-[#FF6231] font-bold text-[20px] tracking-[0.2em] uppercase">
            Mengapa Kami
          </h4>
          <p className="text-lg md:text-xl lg:text-[18px] text-slate-900 tracking-tight">
            Komitmen kami dalam menghadirkan layanan yang dapat diandalkan di setiap kebutuhan operasional
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={`${feature.title}-${index}`} feature={feature} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}