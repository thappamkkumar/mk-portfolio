import Image from "next/image";
import Link from "next/link";
import { ExternalLink, GitBranch  } from "lucide-react";

import { CaseStudy } from "@/types/case-study";

interface HeroProps {
  project: CaseStudy;
}

export default function Hero({ project }: HeroProps) {
  return (
    <section className="py-12 md:py-16">
      {/* Hero Content */}
      <div
        className="
          grid
          gap-12
          lg:grid-cols-[1.2fr_0.8fr]
          lg:items-center
        "
      >
        {/* Left */}
        <div>
          <span
            className="
              inline-flex
              rounded-full
              border
              border-emerald-500/20
              bg-emerald-500/10
              px-3
              py-1
              text-xs
              font-medium
              tracking-wider
              text-emerald-400
            "
          >
             {project.type.toUpperCase()}
          </span>

          <h1
            className="
              mt-6
              text-5xl
              font-bold
              tracking-tight
              md:text-7xl
            "
          >
            {project.title}
          </h1>

          <p
            className="
              mt-4
              text-xl
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
                    bg-white
                    px-4
                    py-2.5
                    text-sm
                    font-medium
                    text-black
                    transition-opacity
                    hover:opacity-90
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
                    bg-white/[0.03]
                    px-4
                    py-2.5
                    text-sm
                    font-medium
                    text-white
                    transition-colors
                    hover:bg-white/5
                  "
                >
                  <GitBranch  className="h-4 w-4" />
                  Source Code
                </Link>
              )}
            </div>
          )}


          {/* Overview Card */}
          <div
            className="
              mt-8
              rounded-3xl
              border
              border-white/10
              bg-white/[0.02]
              p-6
            "
          >
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

          {/* Technologies */}
          <div className="mt-8 flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-3
                  py-1.5
                  text-xs
                  text-zinc-300
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right */}
        <div>
          <div
            className="
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/[0.02]
              p-3
            "
          >
            <div
              className="
                relative
                aspect-[16/10]
                overflow-hidden
                rounded-2xl
              "
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
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
          md:grid-cols-4
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
            <p className="text-sm text-zinc-500">
              {metric.label}
            </p>

            <p className="mt-2 text-lg font-semibold text-white">
              {metric.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}