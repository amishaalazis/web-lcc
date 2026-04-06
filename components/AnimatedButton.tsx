"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  hoverContent?: React.ReactNode; 
}

export const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, children, hoverContent = "Konsultasi", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative overflow-hidden rounded-xl border-2 transition-all duration-500 ease-in-out hover:shadow-[0_5px_30px_rgba(245,121,44,0.3)]",
          className
        )}
        {...props}
      >
        <span className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out transform group-hover:-translate-y-full group-hover:scale-0 group-hover:rotate-120">
          {children}
        </span>

        <span className="absolute inset-0 flex items-center justify-center bg-[#f5792c] text-white font-semibold transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
          {hoverContent}
        </span>
        
        <span className="invisible flex items-center justify-center px-6 py-2.5">
          {children}
        </span>
      </button>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";