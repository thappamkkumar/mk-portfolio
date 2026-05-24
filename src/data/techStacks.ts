import {
  Atom,
  Database,
  Zap,
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
    tech: "Laravel, REST APIs",
  },
  {
    icon: Zap,
    title: "Realtime",
    tech: "WebSocket, WebRTC",
  },
  {
    icon: Database,
    title: "Database",
    tech: "MySQL, PostgreSQL",
  },
];
