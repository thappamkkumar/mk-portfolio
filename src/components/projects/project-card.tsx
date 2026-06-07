import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Project } from "@/types/project";

import ProjectGallery from "./project-gallery";

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
        md:py-24
      "
    >
      <div
        className="
          grid
          gap-12
          lg:grid-cols-[minmax(0,1fr)_520px]
          lg:items-start
        "
      >
        {/* Content */}
        <div>
          <span
            className="
              text-sm
              tracking-widest
              text-white/40
            "
          >
            {String(index).padStart(2, "0")}
          </span>

          <h2
            className="
              mt-5
              text-3xl
              font-bold
              md:text-5xl
            "
          >
            {project.name}
          </h2>

          <p
            className="
              mt-2
              text-lg
              text-white/60
            "
          >
            {project.tagline}
          </p>

          <p
            className="
              mt-4
              text-sm
              text-white/40
            "
          >
            {project.period}
          </p>

          <p
            className="
              mt-8
              max-w-2xl
              leading-8
              text-white/70
            "
          >
            {project.summary}
          </p>

          <div
            className="
              mt-8
              flex
              flex-wrap
              gap-2
            "
          >
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.02]
                  px-3
                  py-1.5
                  text-sm
                  text-white/70
                "
              >
                {technology}
              </span>
            ))}
          </div>

          <div
            className="
              mt-10
              flex
              flex-wrap
              gap-6
            "
          >
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                className="
                  text-white/70
                  transition-colors
                  hover:text-white
                "
              >
                GitHub
              </Link>
            )}

            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                className="
                  text-white/70
                  transition-colors
                  hover:text-white
                "
              >
                Live Demo
              </Link>
            )}

            {project.caseStudyUrl && (
              <Link
                href={project.caseStudyUrl}
                className="
                  inline-flex
                  items-center
                  gap-2
                  text-white
                "
              >
                Case Study

                <ArrowUpRight size={16} />
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