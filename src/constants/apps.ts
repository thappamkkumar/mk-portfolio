 
import type { LucideIcon }
  from "lucide-react";

import {
  User,
  Folder,
  Briefcase,
  Brain,
  FileText,
  Mail,
} from "lucide-react";

import type {
  AppId,
} from "@/types/app";

export const APPS: {
  id: AppId;
  label: string;
  icon: LucideIcon;
}[] = [
  {
    id: "about",
    label: "About",
    icon: User,
  },
  {
    id: "projects",
    label: "Projects",
    icon: Folder,
  },
  {
    id: "experience",
    label: "Experience",
    icon: Briefcase,
  },
  {
    id: "skills",
    label: "Skills",
    icon: Brain,
  },
  {
    id: "resume",
    label: "Resume",
    icon: FileText,
  },
  {
    id: "contact",
    label: "Contact",
    icon: Mail,
  },
];

