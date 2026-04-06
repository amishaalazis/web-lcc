'use client';

import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CTA() {
  const darkColor = "#1e293b"; 

  return (
    <section className="relative w-full py-24 bg-[#f5792c]">
      <div className="container mx-auto px-6 max-w-[1400px] text-center flex flex-col items-center justify-center min-h-[300px]">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl space-y-6 flex flex-col items-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Butuh Jasa Derek, Crane, atau Forklift?
          </h1>

          <p className="text-lg text-white/90 max-w-xl leading-relaxed">
            Hubungi kami sekarang untuk penawaran terbaik dan konsultasi gratis
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6 w-full max-w-lg mx-auto"
          >
            <Button 
              className="bg-[#1e293b] hover:bg-[#1e293b]/90 text-white w-full sm:w-auto h-14 px-8 rounded-xl text-base font-semibold transition-all hover:-translate-y-1"
            >
              <Phone className="mr-2.5 w-5 h-5" />
              Hubungi Kami Sekarang
            </Button>
            
            <Button 
              variant="outline" 
              className="bg-transparent text-white border-white hover:bg-white hover:text-[#FF6231] w-full sm:w-auto h-14 px-8 rounded-xl text-base font-semibold transition-all hover:-translate-y-1"
            >
              Konsultasi Gratis
              <ArrowRight className="ml-2.5 w-5 h-5" />
            </Button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}