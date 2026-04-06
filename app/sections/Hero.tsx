"use client";

import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { primaryColor } from "@/lib/constants";
import { useRef } from "react";
import { Counter } from "@/components/Counter";

interface HeroProps {
  startAnimation: boolean;
}

export function Hero({ startAnimation }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const mainVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <section
      ref={containerRef}
      id="beranda"
      className="relative w-full min-h-screen flex items-center bg-zinc-950 overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y, opacity }}
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />

      <div className="container relative z-10 mx-auto px-6 lg:px-12 w-full max-w-[1400px]">
        <motion.div
          variants={mainVariants}
          initial="hidden"
          animate={startAnimation ? "visible" : "hidden"}
          className="max-w-2xl space-y-8"
        >
          {/* <motion.div variants={itemVariants} className="inline-block">
            <Badge
              variant="outline"
              className="bg-orange-500/20 text-white border-white/10 px-4 py-4 gap-2 text-sm font-medium rounded-full"
            >
              <span
                className={`w-2 h-2 rounded-full`}
                style={{ backgroundColor: primaryColor }}
              />
              10+ Tahun Pengalaman
            </Badge>
          </motion.div> */}

          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]"
          >
            Solusi Andal untuk Kebutuhan Alat Berat dan Transportasi
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-sm text-slate-300 max-w-xl leading-relaxed"
          >
            Layanan derek/towing, crane, forklift, TMC, dan genset dengan armada lengkap untuk kebutuhan industri, logistik, serta bisnis
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <motion.div variants={buttonVariants}>
              <Button
                className="hover:opacity-90 text-white h-14 px-8 rounded-lg text-base font-semibold shadow-lg shadow-orange-500/20"
                style={{ backgroundColor: primaryColor }}
              >
                Layanan Kami
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div variants={buttonVariants}>
              {/* <Button
                variant="outline"
                className="bg-white/20 hover:bg-white/10 hover:text-white text-white border-white/10 h-14 px-8 rounded-lg text-base font-semibold"
              >
                Lihat Layanan
                <ChevronDown className="ml-2 h-5 w-5 text-white" />
              </Button> */}
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center gap-12 pt-8 mt-8 border-t border-white/10"
          >
            <div>
              <h4 className="text-4xl font-bold" style={{ color: primaryColor }}>
                <Counter to={10} suffix="+" duration={2} start={startAnimation} />
              </h4>
              <p className="text-sm text-white mt-1 font-medium">Tahun Pengalaman</p>
            </div>

            <div>
              <h4 className="text-4xl font-bold" style={{ color: primaryColor }}>
                <Counter to={500} suffix="+" duration={2.5} start={startAnimation} />
              </h4>
              <p className="text-sm text-white mt-1 font-medium">Proyek Selesai</p>
            </div>

            <div>
              <h4 className="text-4xl font-bold" style={{ color: primaryColor }}>
                <Counter to={50} suffix="+" duration={2} start={startAnimation} />
              </h4>
              <p className="text-sm text-white mt-1 font-medium">Armada</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}