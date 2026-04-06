import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1C202B] text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-[#FF6633] text-white font-bold p-2 rounded-lg text-xl leading-none flex items-center justify-center w-10 h-10">
                LC
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-bold text-white text-base leading-tight">
                  Lintas Cakra
                </span>
                <span className="text-[#FF6633] font-semibold text-sm leading-tight">
                  Cipta
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Penyedia jasa alat berat dan transportasi terpercaya di Indonesia.
            </p>
          </div>

          {/* Column 2: Layanan */}
          <div>
            <h3 className="text-white font-semibold mb-6">Layanan</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Raja Derek
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Raja Crane
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Raja Forklift
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Perusahaan */}
          <div>
            <h3 className="text-white font-semibold mb-6">Perusahaan</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>
                <Link href="#tentang" className="hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#keunggulan" className="hover:text-white transition-colors">
                  Keunggulan
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Kontak */}
          <div>
            <h3 className="text-white font-semibold mb-6">Kontak</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#FF6633] shrink-0" />
                <span>Bandung, Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#FF6633] shrink-0" />
                <span>(021) 1234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#FF6633] shrink-0" />
                <span>info@lintascakracipta.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700/50 pt-8 mt-8 text-center">
          <p className="text-sm text-slate-500">
            © 2026 PT Lintas Cakra Cipta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
