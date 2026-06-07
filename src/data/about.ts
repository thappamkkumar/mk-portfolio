import {
  FolderGit2,
  BriefcaseBusiness,
  Code2,
  Layers3,
} from "lucide-react";

import type {
  AboutInfo,
  Stat,
} from "@/types/about";

export const ABOUT_INFO: AboutInfo = {
  name: "Mukesh Kumar",

  role: "Full Stack Developer",

  location: "Kathua, Jammu & Kashmir, India",

  email: "thappamkkumar@gmail.com",

  phone: "+91 60058 19576",

  image: "/images/profile-image.png",

  description: [
    "I build modern web applications using Next.js, TypeScript, Laravel and PostgreSQL.",

    "My experience includes business websites, e-commerce platforms, realtime applications, admin dashboards and booking systems.",

    "I enjoy working across the entire stack—from frontend interfaces to backend systems, databases and deployment.",
  ],
};

export const STATS: Stat[] = [
  {
    icon: FolderGit2,
    value: "10+",
    label: "Projects Built",
  },
  {
    icon: BriefcaseBusiness,
    value: "3+",
    label: "Client Projects",
  },
  {
    icon: Code2,
    value: "15+",
    label: "Technologies",
  },
  {
    icon: Layers3,
    value: "Full Stack",
    label: "End-to-End",
  },
];