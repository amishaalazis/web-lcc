import { LucideIcon } from 'lucide-react';

export interface FeatureType {
  icon: LucideIcon;
  text: string;
}

export interface ServiceType {
  title: string;
  description: string;
  image: string;
  features: FeatureType[];
}