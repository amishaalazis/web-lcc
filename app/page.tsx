"use client";

import { useState } from "react";
import { Hero } from "@/app/sections/Hero";
import { About } from "@/app/sections/About";
import { Services } from "@/app/sections/Services";
import { Features } from "@/app/sections/Features";
import { Portfolio } from "@/app/sections/Portfolio";
import { CTA } from "@/app/sections/CTA";
import { IntroTransition } from "@/components/IntoTransaction";
import { Navbar } from "@/components/sections/Navbar";

export default function Home() {
  const [isIntroDone, setIsIntroDone] = useState<boolean>(false);
  return (
    <main className="flex flex-col min-h-screen">
      {!isIntroDone && (
        <IntroTransition onComplete={() => setIsIntroDone(true)} />
      )}
      <Navbar startAnimation={isIntroDone} />
      <Hero startAnimation={isIntroDone} />
      <About />
      <Services />
      <Features />
      <Portfolio />
      {/* <CTA /> */}
    </main>
  );
}