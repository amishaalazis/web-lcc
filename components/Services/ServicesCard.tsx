'use client';

import { motion, MotionValue } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ServiceType } from '@/types/services';

interface ServiceCardProps {
  service: ServiceType;
  y: MotionValue<string>;
  rotate: MotionValue<number>;
}

export function ServiceCard({ service, y, rotate }: ServiceCardProps) {
  return (
    <motion.div
      style={{ y, rotate }}
      className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] transition-shadow duration-300 flex flex-col h-full min-h-[520px]"
    >
      <div className="relative h-56 w-full overflow-hidden group flex-shrink-0 bg-slate-100">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <h3 className="absolute bottom-5 left-6 pr-6 text-2xl font-bold text-white tracking-wide leading-tight">
          {service.title}
        </h3>
      </div>

      <div className="p-6 flex flex-col flex-grow bg-white">
        <p className="text-[14px] text-slate-500 leading-relaxed mb-6 flex-grow">
          {service.description}
        </p>

        <div className="space-y-3 mb-6">
          {service.features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="flex items-start gap-3">
                <Icon
                  className="w-[18px] h-[18px] text-[#FF6231] flex-shrink-0 mt-0.5"
                  strokeWidth={2.5}
                />
                <span className="text-[14px] font-medium text-slate-700 leading-snug">
                  {feature.text}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-auto pt-4 border-t border-slate-100">
          <a
            href="#"
            className="inline-flex items-center text-[14px] font-bold text-[#FF6231] hover:text-[#E85526] transition-colors group"
          >
            Lihat Detail
            <ArrowRight className="ml-1.5 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}