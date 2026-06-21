"use client";

import clsx from "clsx";
import { useSearchParams } from "next/navigation";

import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Experience } from "@/types/experience";

import ExperienceGallery from "./experience-gallery";
import ExperienceTechStack from "./experience-tech-stack";

interface ExperienceItemProps {
  experience: Experience;
}

export default function ExperienceItem({
  experience,
}: ExperienceItemProps) {
  const hasImages =
    experience.images &&
    experience.images.length > 0;

  const hasLinks =
  experience.liveUrl ||
  experience.caseStudyUrl;



  const searchParams =
  useSearchParams();

  const selectedExperience =
    searchParams.get("experience");

  const isSelected =
  selectedExperience === experience.id;

  return (
    <article
      id={experience.id}
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
        className={clsx(
            `
              grid
              gap-12
              lg:grid-cols-[minmax(0,1fr)_500px]
              lg:items-start
            `,
          isSelected &&
            `
               rounded-4xl
              p-5 lg:p-6 xl:p-8 
                 
              bg-zinc-900 
            `
        )}
      >
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
            {experience.period}
          </span>

          <div className="mt-6">
            <h2
              className="
                text-4xl
                font-semibold
                tracking-tight
                md:text-5xl
              "
            >
              {experience.role}
            </h2>

            <p
              className="
                mt-3
                text-lg
                font-medium
                text-emerald-400
              "
            >
              {experience.company}
            </p>
          </div>

          <p
            className="
              mt-8
              max-w-2xl
              leading-relaxed
              text-white/70
              md:text-[15px]
            "
          >
            {experience.description}
          </p>

          <ExperienceTechStack
            technologies={experience.technologies}
          />
          {hasLinks && (
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
              {experience.liveUrl && (
                <Link
                  href={experience.liveUrl}
                  target="_blank"
                  className="
                    group
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
                  Visit Website

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

              {experience.caseStudyUrl && (
                <Link
                  href={experience.caseStudyUrl}
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
                  Case Study
                </Link>
              )}
            </div>
          )}
        </div>
        
        {hasImages && (
          <ExperienceGallery
            images={experience.images}
          />
        )}
      </div>
    </article>
  );
}