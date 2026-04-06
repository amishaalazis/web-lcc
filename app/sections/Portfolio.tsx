'use client';

import { motion } from 'framer-motion';
import { primaryColor } from '@/lib/constants';
import { portfolios
 } from '../constants/dummy';
 
export function Portfolio() {

  return (
    <section id='portfolio' className="py-24 bg-[#F8F9FA]"> 
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolios.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-sm cursor-pointer"
            >
              <img 
                src={item.image} 
                alt={item.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
    
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}