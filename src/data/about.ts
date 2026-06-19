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

  headline:
    "Full Stack Developer focused on building modern web applications.",

  yearsExperience: "3+",

  availability:
    "Available for Full-Time, Remote, Hybrid and Freelance Opportunities",
 
  description: [
    "I'm a Full Stack Developer specializing in React, Next.js, Laravel, TypeScript, and modern web technologies.",

    "I enjoy building products from idea to deployment, creating scalable applications with clean user experiences and reliable backend systems.",

    "My experience includes business websites, e-commerce platforms, admin dashboards, booking systems, and real-time applications. I'm always looking for opportunities to learn, solve challenging problems, and build meaningful digital products.",
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
    label: "Technologies Used",
  },
  {
    icon: Layers3,
    value: "Full Stack",
    label: "Development",
  },
];