"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "SkillVilla",
    href: "/projects/skillvilla",
    tech: ["React", "Laravel", "MySQL", "WebRTC"],
  },
  {
    title: "ShopHub",
    href: "/projects/shophub",
    tech: ["Laravel", "MySQL", "Bootstrap"],
  },
  {
    title: "StyleLoop",
    href: "/projects/styleloop",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    title: "VK Salon",
    href: "/experience/vk-salon",
    tech: ["Next.js", "Tailwind", "PostgreSQL"],
  },
  {
    title: "Kundal Makeover",
    href: "/experience/kundal",
    tech: ["React", "PHP", "MySQL"],
  },
  {
    title: "Shivam Electro Tools",
    href: "/experience/shivam",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

export default function ProjectStrip() {
  return (
    <section className="border-b border-white/5 bg-black/20 backdrop-blur-sm">
      <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Left */}
        <div className="flex min-w-0 items-center gap-3">
          <div className="h-2 w-2 shrink-0 rounded-full bg-emerald-400" />

          <span className="hidden shrink-0 text-sm font-medium text-zinc-300 sm:block">
            Featured Work
          </span>

          <div className="flex min-w-0 items-center gap-3 overflow-x-auto scrollbar-none">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative flex shrink-0 items-center gap-3"
              >
                <Link
                  href={project.href}
                  className="text-sm text-zinc-400 transition-colors duration-300 hover:text-white"
                >
                  {project.title}
                </Link>

                {/* Tooltip */}
                <div
                  className="
                    invisible absolute left-1/2 top-full z-50 mt-3
                    w-max -translate-x-1/2 rounded-xl
                    border border-white/10
                    bg-zinc-900/95
                    px-3 py-2
                    opacity-0 shadow-xl backdrop-blur-xl
                    transition-all duration-200
                    group-hover:visible
                    group-hover:opacity-100
                  "
                >
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-white/5 px-2 py-1 text-xs text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {index !== projects.length - 1 && (
                  <span className="text-zinc-700">•</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <Link
          href="/projects"
          className="hidden shrink-0 items-center gap-1 text-sm text-zinc-500 transition-colors hover:text-white md:flex"
        >
          View All
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}