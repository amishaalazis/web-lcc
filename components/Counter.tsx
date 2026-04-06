"use client";

import { useEffect } from "react";
import { useMotionValue, useTransform, animate, motion } from "framer-motion";

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  start?: boolean;
}

export function Counter({ 
  from = 0, 
  to, 
  duration = 2, 
  suffix = "", 
  prefix = "", 
  start = true 
}: CounterProps) {
  
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => `${prefix}${Math.round(latest)}${suffix}`);

  useEffect(() => {
    if (start) {
      const controls = animate(count, to, { 
        duration: duration, 
        ease: "easeOut" 
      });
      return () => controls.stop();
    }
  }, [count, to, duration, start]);

  return <motion.span>{rounded}</motion.span>;
}