import { ServiceType } from "@/types/services";
import { Clock, Hammer, MapPin, Settings, Shield, ShieldCheck, Truck, UserCheck, Users, Wrench, Zap } from "lucide-react";

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
    description: "Layanan derek/towing mobil 24 jam untuk pengangkutan antar kota dan antar pulau, serta kebutuhan evakuasi kendaraan. Didukung oleh berbagai jenis armada seperti derek hidrolik, derek gendong, dan derek gantung yang dapat disesuaikan dengan kebutuhan operasional.",
    image: "/layanan/derek.webp",
    features: [
      { icon: Truck, text: "Armada lengkap & banyak" },
      { icon: Settings, text: "Siaga 24 jam setiap hari" },
      { icon: Zap, text: "Profesional, resmi, dan terpercaya" }
    ]
  },
  {
    title: "Raja Crane",
    description: "Menyediakan layanan mobile crane dan truck mounted crane (TMC) dengan kapasitas angkat beragam. Didukung oleh tim berpengalaman untuk memastikan proses pengangkatan berjalan aman dan efisien.",
    image: "/layanan/crane.webp",
    features: [
      { icon: Hammer, text: "Kapasitas angkat hingga 60 ton" },
      { icon: Settings, text: "Operator & rigger berpengalaman" },
      { icon: Truck, text: "Standar keselamatan kerja terjaga" }
    ]
  },
  {
    title: "Raja Forklift",
    description: "Layanan penyewaan forklift untuk mendukung proses pemindahan dan penataan barang di berbagai kebutuhan operasional, mulai dari pergudangan hingga kegiatan industri. Didukung oleh unit yang terawat dan siap digunakan untuk memastikan pekerjaan berjalan efisien dan aman.",
    image: "layanan/forklift.webp",
    features: [
      { icon: Zap, text: "Daya angkat 2,5-7 ton" },
      { icon: Truck, text: "Unit banyak dan terawat" },
      { icon: Settings, text: "Operator andal dan berpengalaman" }
    ]
  },
  {
    title: "Raja Genset",
    description: "Menyediakan layanan penyewaan genset untuk mendukung kebutuhan daya listrik di berbagai kegiatan operasional, industri, dan acara. Didukung oleh unit yang terawat dan siap digunakan untuk memastikan pasokan listrik tetap stabil dan andal.",
    image: "layanan/genset.webp",
    features: [
      { icon: Zap, text: "Daya 50-150 kVA" },
      { icon: Settings, text: "Genset keluaran terbaru" },
      { icon: Hammer, text: "Unit banyak" }
    ]
  }
];

// Keunggulan
export const features = [
  {
    title: "Armada Lengkap dan Terawat",
    description: "Didukung berbagai jenis armada yang siap digunakan untuk memenuhi beragam kebutuhan operasional.",
    icon: "/icon/armada.png",
  },
  {
    title: "Tim Profesional dan Berpengalaman",
    description: "Dijalankan oleh tenaga kerja yang kompeten, termasuk operator dan teknisi berpengalaman di bidangnya.",
    icon: "/icon/team.png",
  },
  {
    title: "Jangkauan Operasional Luas",
    description: "Melayani berbagai kebutuhan di berbagai wilayah dengan dukungan sistem operasional yang terkoordinasi.",
    icon: "/icon/jangkauan.png",
  },
  {
    title: "Standar Keselamatan Kerja",
    description: "Mengutamakan aspek keselamatan dalam setiap proses kerja untuk memastikan operasional berjalan aman dan terkontrol.",
    icon: "/icon/P3K.png",
  },
  {
    title: "Respons Cepat dan Fleksibel",
    description: "Siap menyesuaikan kebutuhan operasional dengan respons yang cepat dan penanganan yang tepat.",
    icon: "/icon/respon.png",
  }
];

// Portofolio
export const portfolios = [
  { id: 1, image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Proyek Konstruksi Gedung" },
  { id: 2, image: "https://images.unsplash.com/photo-1610641018556-030e920d6999?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Evakuasi Darurat Malam Hari" },
  { id: 3, image: "https://images.unsplash.com/photo-1716191299984-a54043cac633?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Operasional Forklift di Gudang" },
  { id: 4, image: "https://images.unsplash.com/photo-1586458995526-09ce6839babe?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Instalasi Alat Berat" },
];





