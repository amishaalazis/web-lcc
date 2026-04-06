'use client';

import { motion } from 'framer-motion';
import { primaryColor } from '@/lib/constants';
import { features } from '@/app/constants/dummy';

export function Features() {
  const iconBgColor = "#FFEFE9"; 
  
  return (
    <section id='keunggulan' className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#FF6231] font-bold text-[20px] tracking-[0.2em] uppercase"
          >
            Mengapa Kami
          </motion.h4>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl lg:text-[18px] text-slate-900 tracking-tight"
          >
            Komitmen kami dalam menghadirkan layanan yang dapat diandalkan di setiap kebutuhan operasional
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              className="bg-[#F8F9FA] rounded-2xl p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-1 duration-300"
            >
              <div 
                className="w-[60px] h-[60px] rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: iconBgColor }}
              >
                <feature.icon 
                  className="w-7 h-7" 
                  style={{ color: primaryColor }} 
                  strokeWidth={2}
                />
              </div>

              <h3 className="text-[17px] font-bold text-slate-900 mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-[14px] text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}