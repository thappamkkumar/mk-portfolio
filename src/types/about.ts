import type { LucideIcon } from "lucide-react";

export interface AboutInfo {
  name: string;
  role: string;

  location: string;
  email: string;
  phone: string;

  image: string;

  headline: string;

  availability: string;

  yearsExperience: string;

  description: string[];
}

export interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
}