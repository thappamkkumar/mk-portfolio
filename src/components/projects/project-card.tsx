import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Project } from "@/types/project";

import ProjectGallery from "./project-gallery";
import ProjectTechStack from "./project-tech-stack";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  return (
    <article
      className="
        border-b
        border-white/10
        py-16
        transition-colors
        duration-300
        hover:border-emerald-400/10
        md:py-24
      "
    >
      <div
        className="
          grid
          gap-12
          lg:grid-cols-[minmax(0,1fr)_500px]
          lg:items-start
        "
      >
        {/* Content */}
        <div>
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-emerald-400/20
              bg-emerald-400/5
              px-3
              py-1
              text-xs
              font-medium
              tracking-[0.2em]
              text-emerald-400
            "
          >
            {String(index).padStart(2, "0")}
          </span>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <h2
              className="
                text-4xl
                font-semibold
                tracking-tight
                md:text-5xl
              "
            >
              {project.name}
            </h2>

            <span
              className="
                rounded-full
                border
                border-white/10
                px-3
                py-1
                text-xs
                text-white/50
              "
            >
              {project.period}
            </span>
          </div>

          <p
            className="
              mt-4
              text-lg
              leading-relaxed
              text-white/60
            "
          >
            {project.tagline}
          </p>

          <p
            className="
              mt-8
              max-w-2xl
              leading-relaxed
              text-white/70
              md:text-[15px]
            "
          >
            {project.summary}
          </p>

          <ProjectTechStack
            technologies={project.technologies}
          />

          <div
            className="
              mt-10
              flex
              flex-wrap
              items-center
              gap-3
              border-t
              border-white/10
              pt-8
            "
          >
            {project.caseStudyUrl && (
              <Link
                href={project.caseStudyUrl}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-emerald-400
                  px-5
                  py-2.5
                  font-medium
                  text-black
                  shadow-lg
                  shadow-emerald-400/10
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:bg-emerald-300
                "
              >
                View Case Study

                <ArrowUpRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </Link>
            )}

            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                className="
                  rounded-full
                  border
                  border-white/10
                  px-5
                  py-2.5
                  text-white/70
                  transition-all
                  duration-300
                  hover:border-emerald-400/30
                  hover:bg-emerald-400/5
                  hover:text-white
                "
              >
                Live Demo
              </Link>
            )}

            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                className="
                  rounded-full
                  border
                  border-white/10
                  px-5
                  py-2.5
                  text-white/70
                  transition-all
                  duration-300
                  hover:border-emerald-400/30
                  hover:bg-emerald-400/5
                  hover:text-white
                "
              >
                GitHub
              </Link>
            )}
          </div>
        </div>

        {/* Gallery */}
        <ProjectGallery images={project.images} />
      </div>
    </article>
  );
}