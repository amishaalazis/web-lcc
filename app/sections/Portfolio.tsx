'use client';

import { motion } from 'framer-motion';
import { primaryColor } from '@/lib/constants';
import { portfolios } from '../constants/dummy';

export function Portfolio() {
  return (
    <section id='portfolio' className="py-24 bg-[#F8F9FA] overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] mb-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-bold text-[12px] tracking-[0.2em] uppercase"
            style={{ color: primaryColor }}
          >
            Portfolio
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight"
          >
            Proyek yang Telah Kami Kerjakan
          </motion.h2>
        </div>
      </div>

      <div className="relative flex w-full flex-col justify-center items-center">
        <motion.div
          className="flex w-max gap-6 px-3"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
        >
          {[...portfolios, ...portfolios].map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="group relative rounded-2xl overflow-hidden shadow-sm cursor-pointer w-[280px] sm:w-[320px] lg:w-[400px] aspect-[4/3] flex-shrink-0"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}