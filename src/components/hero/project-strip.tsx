'use client';

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "SkillVilla",
    slug: "skillvilla",
    href: "/projects/skillvilla",
  },
  {
    title: "ShopHub",
    slug: "shophub",
    href: "/projects/shophub",
  },
  {
    title: "StyleLoop",
    slug: "styleloop",
    href: "/projects/styleloop",
  },
  {
    title: "VK Salon",
    slug: "vk-salon",
    href: "/experience/vk-salon",
  },
  {
    title: "Kundal Makeover",
    slug: "kundal",
    href: "/experience/kundal",
  },
  {
    title: "Shivam Electro Tools",
    slug: "shivam",
    href: "/experience/shivam",
  },
];

const ProjectStrip = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 border-b border-white/10">
       

        <div className="flex flex-wrap items-center gap-2 md:gap-3">

          <div className="pe-2 flex items-center gap-1 sm:gap-2 lg:gap-3 text-sm sm:text-base md:text-lg font-semibold text-zinc-200 " >
            <span className=" ">Projects</span>
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>

          {projects.map((project, index) => (
            <div key={project.slug} className="flex items-center gap-2 md:gap-4 whitespace-nowrap">
              <Link
                href={project.href}
                className="text-xs sm:text-sm text-zinc-300 hover:text-zinc-500 transition-colors duration-300 font-medium"
              >
                {project.title}
              </Link>
              {index !== projects.length - 1 ? (
                <span className="text-zinc-700">|</span>
              ) : null}
            </div>
          ))}
        </div>
       
    </div>
  );
};

export default ProjectStrip;
