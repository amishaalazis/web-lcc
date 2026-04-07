"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";
import { AnimatedButton } from "@/components/AnimatedButton";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { name: "Beranda", href: "#beranda" },
  { name: "Layanan", href: "#layanan" },
  { name: "Mengapa Kami", href: "#tentang" },
  // { name: "Keunggulan", href: "#keunggulan" },
  { name: "Portofolio", href: "#portfolio" },
  { name: "Kontak", href: "#kontak" },
];

const Logo = () => (
  <div className="flex items-center">
    <Image
      src="/logo-lcc.png"
      alt="Lintas Cakra Cipta Logo"
      width={300}
      height={100}
      className="h-[56px] w-auto object-contain"
      priority
    />
  </div>
);

interface NavbarProps {
  startAnimation: boolean;
}

export function Navbar({ startAnimation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerVariants: Variants = {
    hidden: { y: -100 },
    visible: {
      y: 0,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate={startAnimation ? "visible" : "hidden"}
      className={`fixed top-0 z-50 w-full transition-colors duration-500 ease-in-out ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-0"
          : "bg-linear-to-b from-black/50 to-transparent border-transparent py-4"
      }`}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={startAnimation ? "visible" : "hidden"}
        className="max-w-[1400px] mx-auto px-6 lg:px-12 flex h-[80px] md:h-[90px] items-center justify-between"
      >
        <motion.div variants={itemVariants} className="flex-1 flex justify-start">
          <Link
            href="#beranda"
            className="flex items-center shrink-0 transition-transform duration-300 hover:scale-105"
          >
            <Logo />
          </Link>
        </motion.div>

        <nav className="hidden lg:flex flex-1 justify-center items-center gap-10">
          {navLinks.map((link) => (
            <motion.div key={link.name} variants={itemVariants}>
              <Link
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                className={`relative whitespace-nowrap text-[15px] font-medium py-2 px-1 transition-colors duration-300 ${
                  isScrolled
                    ? "text-slate-600 hover:text-[#f5792c]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.name}
                {hoveredLink === link.name && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#f5792c] rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </nav>

        <motion.div variants={itemVariants} className="hidden lg:flex flex-1 justify-end">
          <AnimatedButton
            className={`h-[46px] px-7 ${
              isScrolled
                ? "border-[#f5792c] text-[#f5792c]"
                : "border-white/80 text-white hover:border-[#f5792c]"
            }`}
            hoverContent="Konsultasi"
          >
            <Phone className="mr-2 h-[18px] w-[18px]" />
            Hubungi Kami
          </AnimatedButton>
        </motion.div>

        <motion.div variants={itemVariants} className="flex lg:hidden flex-1 justify-end">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`transition-colors duration-300 ${
                  isScrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/20"
                } rounded-full`}
              >
                <Menu className="h-7 w-7" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="bg-white/95 backdrop-blur-xl w-[85vw] max-w-[400px] border-l-0 shadow-2xl p-6 flex flex-col z-99999"
            >
              <SheetHeader className="text-left mb-8 border-b border-slate-100 pb-6">
                <SheetTitle className="sr-only">Menu Navigasi</SheetTitle>
                <SheetDescription className="sr-only">Daftar tautan menu</SheetDescription>
                <div className="pt-2">
                  <Logo />
                </div>
              </SheetHeader>

              <div className="flex flex-col gap-3">
                {navLinks.map((link, i) => (
                  <SheetClose asChild key={link.name}>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className="flex items-center text-[17px] font-semibold text-slate-700 hover:text-[#f5792c] hover:bg-orange-50/50 px-4 py-3.5 rounded-xl transition-all"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  </SheetClose>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <SheetClose asChild>
                  <AnimatedButton
                    className="w-full h-14 border-[#f5792c] text-[#f5792c]"
                    hoverContent="Konsultasi"
                  >
                    <Phone className="mr-2 h-[20px] w-[20px]" />
                    Hubungi Kami
                  </AnimatedButton>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </motion.div>
      </motion.div>
    </motion.header>
  );
}