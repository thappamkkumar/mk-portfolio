import type { LucideIcon } from "lucide-react";

export interface AboutInfo {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  image: string;
  description: string[];
}

export interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
}