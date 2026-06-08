import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Experience } from "@/types/experience";

import ExperienceGallery from "./experience-gallery";

interface ExperienceItemProps {
  experience: Experience;
}

export default function ExperienceItem({
  experience,
}: ExperienceItemProps) {
  const hasImages =
    experience.images &&
    experience.images.length > 0;

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
        className={
          hasImages
            ? `
              grid
              gap-10
              lg:grid-cols-[1fr_500px]
              lg:items-start
            `
            : `
              max-w-3xl
            `
        }
      >
        <div>
          <p
            className="
              text-sm
              text-white/40
            "
          >
            {experience.period}
          </p>

          <h2
            className="
              mt-3
              text-3xl
              font-bold
            "
          >
            {experience.role}
          </h2>

          <p
            className="
              mt-2
              text-lg
              text-emerald-400
            "
          >
            {experience.company}
          </p>

          <p
            className="
              mt-6
              leading-8
              text-white/60
            "
          >
            {experience.description}
          </p>

          <div
            className="
              mt-6
              flex
              flex-wrap
              gap-2
            "
          >
            {experience.technologies.map(
              (technology) => (
                <span
                  key={technology}
                  className="
                    rounded-full
                    border
                    border-white/10
                    px-3
                    py-1
                    text-xs
                    text-white/60
                  "
                >
                  {technology}
                </span>
              )
            )}
          </div>

          {experience.liveUrl && (
            <Link
              href={experience.liveUrl}
              target="_blank"
              className="
                mt-8
                inline-flex
                items-center
                gap-2
                text-sm
                text-white
              "
            >
              Visit Website

              <ArrowUpRight size={16} />
            </Link>
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