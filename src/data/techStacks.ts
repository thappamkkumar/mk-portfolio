import {
  Atom,
  Database,
  Globe,
  Layers3,
} from "lucide-react";

import { TechStackItem } from "@/types/hero";

export const techStacks: TechStackItem[] = [
  {
    icon: Atom,
    title: "Frontend",
    tech: "React, Next.js, Tailwind",
  },
  {
    icon: Layers3,
    title: "Backend",
    tech: "Node.js, Laravel, REST APIs",
  },
  {
    icon: Globe,
    title: "Realtime",
    tech: "WebSocket, WebRTC",
  },
  {
    icon: Database,
    title: "Database",
    tech: "MySQL, PostgreSQL, Redis",
  },
];
