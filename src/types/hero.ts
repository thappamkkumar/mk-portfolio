
import { LucideIcon } from "lucide-react";


export interface HeroStat {
  value: string;
  label: string;
}

export interface TerminalLog {
  label: string;
  status: string;
}

export interface TechStackItem {
  icon: LucideIcon;
  title: string;
  tech: string;
}
