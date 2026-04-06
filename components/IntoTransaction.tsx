"use client";

import { primaryColor } from "@/lib/constants";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { interpolate } from "flubber";
import { useEffect, useState } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["600", "800"] });

interface IntroTransitionProps {
  onComplete: () => void;
}

export function IntroTransition({ onComplete }: IntroTransitionProps) {
  const [isPresent, setIsPresent] = useState<boolean>(true);
  const pathL = "M25,20 L25,80 L75,80 L75,60 L45,60 L45,20 Z";
  const pathC1 = "M75,20 L25,20 L25,80 L75,80 L75,60 L45,60 L45,40 L75,40 Z";
  const pathC2 = "M80,15 L20,15 L20,85 L80,85 L80,65 L45,65 L45,35 L80,35 Z";
  const startCurtain = "M 0 0 L 100 0 L 100 100 Q 50 100 0 100 Z";
  const midCurtain = "M 0 0 L 100 0 L 100 20 Q 50 60 0 20 Z";
  const endCurtain = "M 0 0 L 100 0 L 100 0 Q 50 0 0 0 Z";
  const premiumEase = [0.76, 0, 0.24, 1] as const;
  const progress = useMotionValue(0);
  const morphPath = useTransform(progress, [0, 1, 2], [pathL, pathC1, pathC2], {
    mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 1 }),
  });

  useEffect(() => {
    const morphAnimation = animate(progress, 2, {
      duration: 3,
      ease: "easeInOut",
      times: [0, 0.8, 1],
    });

    const timer = setTimeout(() => {
      setIsPresent(false);
      onComplete();
    }, 4500);

    return () => {
      morphAnimation.stop();
      clearTimeout(timer);
    };
  }, [progress, onComplete]);

  if (!isPresent) return null;

  return (
    <div className="fixed inset-0 z-9999 flex flex-col items-center justify-center pointer-events-none">
      <motion.div
        className="absolute z-10 flex flex-col items-center justify-center"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 0, y: -50 }}
        transition={{ delay: 3, duration: 1.2, ease: premiumEase }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: premiumEase }}
        >
          <svg viewBox="0 0 100 100" className="w-32 h-32 mb-4 drop-shadow-xl">
            <motion.path d={morphPath as unknown as string} fill="#ffffff" />
          </svg>
        </motion.div>

        <motion.h1
          className={`${montserrat.className} text-2xl md:text-xl font-extrabold tracking-[0.2em] text-white drop-shadow-md text-center`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          LINTAS CAKRA CIPTA
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
          transition={{
            duration: 1.2,
            ease: premiumEase,
            delay: 3.1,
          }}
        />

        <motion.path
          fill={primaryColor}
          initial={{ d: startCurtain }}
          animate={{ d: [startCurtain, midCurtain, endCurtain] }}
          transition={{
            duration: 1.2,
            ease: premiumEase,
            delay: 2.95,
          }}
        />
      </svg>
    </div>
  );
}