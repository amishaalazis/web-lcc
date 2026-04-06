import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { SmoothScroll } from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PT Lintas Cakra Cipta",
  description: "Penyedia jasa alat berat dan transportasi terpercaya di Indonesia.",
  icons: {
    icon: "/logolcc.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar startAnimation={true} />
        <main className="grow">
          <CustomCursor />
         <SmoothScroll>{children}</SmoothScroll>
        </main>
        <Footer />
      </body>
    </html>
  );
}