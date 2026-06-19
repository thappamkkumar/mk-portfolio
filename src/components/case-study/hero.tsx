import Image from "next/image";
import Link from "next/link";
import { ExternalLink, GitBranch } from "lucide-react";

import { CaseStudy } from "@/types/case-study";

interface HeroProps {
  project: CaseStudy;
}

export default function Hero({ project }: HeroProps) {
  return (
    <section className="py-12 md:py-16">
      <div
        className="
          grid
          gap-12
          lg:grid-cols-[1.1fr_0.9fr]
          lg:items-center
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
              border-emerald-500/20
              bg-emerald-500/10
              px-3
              py-1.5
              text-xs
              font-medium
              tracking-[0.2em]
              text-emerald-400
              uppercase
            "
          >
            {project.type}
          </span>

          <h1
            className="
              mt-6
              max-w-4xl
              text-5xl
              font-bold
              tracking-tight
              sm:text-6xl
              lg:text-7xl
            "
          >
            {project.title}
          </h1>

          <p
            className="
              mt-4
              max-w-2xl
              text-lg
              leading-8
              text-zinc-400
              md:text-2xl
            "
          >
            {project.subtitle}
          </p>

          {(project.liveUrl || project.githubUrl) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.liveUrl && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-emerald-400
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-black
                    transition-all
                    hover:scale-[1.02]
                    hover:bg-emerald-300
                  "
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Preview
                </Link>
              )}

              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-white/10
                    bg-white/3
                    px-5
                    py-3
                    text-sm
                    font-medium
                    text-white
                    transition-all
                    hover:border-white/20
                    hover:bg-white/6
                  "
                >
                  <GitBranch className="h-4 w-4" />
                  Source Code
                </Link>
              )}
            </div>
          )}

          {/* Overview */}
          <div
            className="
              mt-8
              rounded-3xl
              border
              border-white/10
              bg-linear-to-br
              from-white/4
              to-white/1]
              p-6
              backdrop-blur-sm
            "
          >
            <p
              className="
                mb-3
                text-xs
                uppercase
                tracking-[0.2em]
                text-zinc-500
              "
            >
              Project Overview
            </p>

            <p
              className="
                text-base
                leading-8
                text-zinc-300
                md:text-lg
              "
            >
              {project.overview}
            </p>
          </div>
        </div>

        {/* Screenshot */}
        <div>
          <div
            className="
              group
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/2
              p-3
            "
          >
            <div
              className="
                relative
                aspect-16/10
                overflow-hidden
                rounded-2xl
              "
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />
            </div>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div
        className="
          mt-12
          grid
          gap-px
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-white/10
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        {project.metrics.map((metric) => (
          <div
            key={metric.label}
            className="
              bg-black/70
              p-6
            "
          >
            <p
              className="
                text-xs
                uppercase
                tracking-[0.2em]
                text-zinc-500
              "
            >
              {metric.label}
            </p>

            <p
              className="
                mt-3
                text-xl
                font-bold
                text-white
                md:text-2xl
              "
            >
              {metric.value}
            </p>
          </div>
        ))}
      </div>

      {/* Technologies */}
      <div className="mt-8">
        <p
          className="
            mb-4
            text-xs
            uppercase
            tracking-[0.2em]
            text-zinc-500
          "
        >
          Technology Stack
        </p>

        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-white/10
                bg-white/3
                px-4
                py-2
                text-sm
                text-zinc-300
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}