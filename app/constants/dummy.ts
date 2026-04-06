import { ServiceType } from "@/types/services";
import { Battery, CheckCircle2, Clock, Hammer, MapPin, Settings, Shield, ShieldCheck, Truck, UserCheck, Users, Wrench, Zap } from "lucide-react";

// About
export   const checkItems = [
    "Berpengalaman lebih dari 10 tahun",
    "Tim profesional & bersertifikat",
    "Jangkauan operasional seluruh Indonesia",
    "Armada terawat & siap operasional"
  ];

// Services
export const services: ServiceType[] = [
  {
    title: "Raja Derek",
    description: "Layanan derek profesional 24 jam untuk berbagai jenis kendaraan bermasalah atau kecelakaan dengan penanganan aman dan cepat.",
    image: "https://images.unsplash.com/photo-1543465077-db45d34b88a5?q=80&w=800&auto=format&fit=crop",
    features: [
      { icon: Truck, text: "Layanan Darurat 24/7" },
      { icon: Settings, text: "Armada Derek Modern" },
      { icon: Zap, text: "Respon Cepat" }
    ]
  },
  {
    title: "Raja Crane",
    description: "Penyewaan crane dengan berbagai kapasitas beban untuk kebutuhan proyek konstruksi, pemindahan barang berat, dan industri.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356f58?q=80&w=800&auto=format&fit=crop",
    features: [
      { icon: Hammer, text: "Kapasitas 10T - 100T" },
      { icon: Settings, text: "Operator Tersertifikasi" },
      { icon: Truck, text: "Maintenance Rutin" }
    ]
  },
  {
    title: "Raja Forklift",
    description: "Solusi alat angkut pergudangan dan logistik. Menyediakan berbagai tipe forklift mulai dari elektrik hingga diesel.",
    image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=800&auto=format&fit=crop",
    features: [
      { icon: Zap, text: "Pilihan Elektrik & Diesel" },
      { icon: Truck, text: "Sewa Harian/Bulanan" },
      { icon: Settings, text: "Free Maintenance" }
    ]
  },
  {
    title: "Raja Genset",
    description: "Menyewakan generator set untuk backup kelistrikan event, proyek, maupun pabrik dengan kapasitas yang bisa disesuaikan.",
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=800&auto=format&fit=crop",
    features: [
      { icon: Zap, text: "Kapasitas 10kVA - 500kVA" },
      { icon: Settings, text: "Silent Mode Tersedia" },
      { icon: Hammer, text: "Instalasi & Operator" }
    ]
  }
];

// Keunggulan
export const features = [
  {
    title: "Respon Cepat",
    description: "Tim kami siap merespon dalam hitungan menit untuk kebutuhan darurat Anda",
    icon: Zap,
  },
  {
    title: "Layanan 24 Jam",
    description: "Beroperasi tanpa henti, siap membantu kapanpun Anda membutuhkan",
    icon: Clock,
  },
  {
    title: "Tim Profesional",
    description: "Operator bersertifikat dan berpengalaman di bidangnya",
    icon: Users,
  },
  {
    title: "Armada Lengkap",
    description: "Berbagai jenis dan kapasitas alat berat tersedia sesuai kebutuhan",
    icon: Truck,
  },
  {
    title: "Jangkauan Luas",
    description: "Melayani area Jabodetabek, Bandung, Surabaya, dan kota besar lainnya",
    icon: MapPin,
  }
];

// Portofolio
export const portfolios = [
  { id: 1, image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Proyek Konstruksi Gedung" },
  { id: 2, image: "https://images.unsplash.com/photo-1610641018556-030e920d6999?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Evakuasi Darurat Malam Hari" },
  { id: 3, image: "https://images.unsplash.com/photo-1716191299984-a54043cac633?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Operasional Forklift di Gudang" },
  { id: 4, image: "https://images.unsplash.com/photo-1586458995526-09ce6839babe?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Instalasi Alat Berat" },
];





