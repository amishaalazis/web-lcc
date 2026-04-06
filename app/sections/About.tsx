'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { checkItems } from '@/app/constants/dummy';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://images.unsplash.com/photo-1603201667141-5a2d4c673378?q=80&w=1496&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1496&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504307651254-35680f356f27?q=80&w=1496&auto=format&fit=crop"
];

const viewportSettings = { once: true, amount: 0.3 };
const transitionSettings = { duration: 0.8, ease: "easeOut" as const };

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemAnimation: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: transitionSettings },
};

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const bgParallaxRef = useRef<HTMLDivElement>(null);
  const scrollLineRef = useRef<HTMLDivElement>(null);
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageWrapperRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });

      gsap.to(badgeRef.current, {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        }
      });

      gsap.to(bgParallaxRef.current, {
        yPercent: 25,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });

      gsap.fromTo(scrollLineRef.current, 
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id='tentang' ref={sectionRef} className="relative py-20 lg:py-32 bg-white overflow-hidden">
      <div 
        ref={bgParallaxRef}
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "url('/towing.svg')",
          backgroundSize: "40%",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
          height: "130%", 
          top: "-15%", 
        }}
      />

      <div className="absolute left-4 lg:left-12 top-0 bottom-0 w-[2px] z-10 hidden md:block">
        <div className="w-full h-full bg-slate-100" />
        <div 
          ref={scrollLineRef}
          className="absolute top-0 left-0 w-full h-full bg-[#FF6231] origin-top"
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportSettings}
            transition={transitionSettings}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-4/3 lg:aspect-4/3 shadow-sm bg-slate-100" ref={imageWrapperRef}>
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentImg}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                  src={images[currentImg]}
                  alt="Tim Lintas Cakra Cipta" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
            </div>

            <div 
              ref={badgeRef}
              className="absolute -bottom-8 right-4 lg:-bottom-8 lg:-right-8 bg-[#f5792c] rounded-xl p-6 shadow-xl shadow-orange-500/20 text-white z-20 min-w-[180px]"
            >
              <h3 className="text-4xl md:text-[40px] font-bold mb-1 tracking-tight">10+</h3>
              <p className="text-[13px] font-medium opacity-90 tracking-wide">Tahun Pengalaman</p>
            </div>
          </motion.div>

          <motion.div 
            className="space-y-6 lg:pl-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={staggerContainer}
          >
            <div className="space-y-3">
              <motion.h4 
                className="text-[#FF6231] font-bold text-[13px] tracking-[0.15em] uppercase"
                variants={itemAnimation}
              >
                Tentang Kami
              </motion.h4>
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#1e293b] leading-[1.2] tracking-tight"
                variants={itemAnimation}
              >
                Mitra Terpercaya untuk Solusi Alat Berat
              </motion.h2>
            </div>

            <motion.p 
              className="text-[15px] text-slate-500 leading-relaxed max-w-lg"
              variants={itemAnimation}
            >
             PT Lintas Cakra Cipta merupakan perusahaan yang bergerak di bidang penyediaan alat berat dan transportasi industri, melayani berbagai kebutuhan operasional di sektor industri, logistik, dan bisnis di seluruh Indonesia.
            Didukung oleh armada yang lengkap dan terawat, kami menyediakan layanan towing, mobile crane, forklift, dan TMC, serta dukungan kebutuhan daya melalui penyediaan genset, dengan standar operasional yang mengutamakan keselamatan, ketepatan, dan keandalan.
            </motion.p>

            <motion.div 
              className="pt-2 space-y-3.5"
              variants={itemAnimation}
            >
              {checkItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6231] shrink-0 stroke-[2.5]" />
                  <span className="text-[15px] font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}