"use client";

import { primaryColor } from "@/lib/constants";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "800"] });

interface IntroTransitionProps {
  onComplete: () => void;
}

const startCurtain = "M 0 0 L 100 0 L 100 100 Q 50 100 0 100 Z";
const midCurtain = "M 0 0 L 100 0 L 100 20 Q 50 60 0 20 Z";
const endCurtain = "M 0 0 L 100 0 L 100 0 Q 50 0 0 0 Z";
const premiumEase = [0.76, 0, 0.24, 1] as const;

const letterVariants: Variants = {
  initial: { opacity: 0, y: 50, scale: 0.5, rotate: -15 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      type: "spring",
      stiffness: 120,
    },
  }),
};

export function IntroTransition({ onComplete }: IntroTransitionProps) {
  const [isPresent, setIsPresent] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPresent(false);
      onComplete();
    }, 4500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isPresent) return null;

  return (
    <div className="fixed inset-0 z-9999 flex flex-col items-center justify-center pointer-events-none">
      <motion.div
        className="absolute z-10 flex flex-col items-center justify-center w-full px-4"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 0, y: -50 }}
        transition={{ delay: 3.2, duration: 0.8, ease: premiumEase }}
      >

          <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: premiumEase }}
          className="relative mb-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
        >
          <Image
            src="/towing.svg"
            alt="Logo Towing Lintas Cakra Cipta"
            fill
            className="object-contain drop-shadow-lg brightness-0 invert"
            priority
          />
        </motion.div>
        <div className="flex gap-2 sm:gap-4 mb-6">
          {["L", "C", "C"].map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="initial"
              animate="animate"
              className={`${montserrat.className} text-4xl sm:text-5xl md:text-7xl font-extrabold text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.3)]`}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        <motion.h1
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "0.15em" }}
          transition={{ delay: 1.2, duration: 1 }}
          className={`${montserrat.className} text-white text-center text-xs sm:text-sm md:text-xl font-bold uppercase`}
        >
          Lintas Cakra Cipta
        </motion.h1>
      </motion.div>

      

        

      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.path
          fill="#8c8c8c"
          initial={{ d: startCurtain }}
          animate={{ d: [startCurtain, midCurtain, endCurtain] }}
          transition={{ duration: 1.2, ease: premiumEase, delay: 3.3 }}
        />
        <motion.path
          fill={primaryColor}
          initial={{ d: startCurtain }}
          animate={{ d: [startCurtain, midCurtain, endCurtain] }}
          transition={{ duration: 1.2, ease: premiumEase, delay: 3.1 }}
        />
      </svg>
    </div>
  );
}