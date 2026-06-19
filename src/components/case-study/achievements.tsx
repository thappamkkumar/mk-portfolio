import { Check } from "lucide-react";

import { CaseStudy } from "@/types/case-study";

interface AchievementsProps {
  project: CaseStudy;
}

export default function Achievements({
  project,
}: AchievementsProps) {
  if (!project.achievements?.length) {
    return null;
  }

  return (
    <section className="py-16">
      <div className="max-w-3xl">
        <p
          className="
            text-xs
            font-medium
            uppercase
            tracking-[0.2em]
            text-emerald-400
          "
        >
          Results
        </p>

        <h2
          className="
            mt-3
            text-3xl
            font-bold
            tracking-tight
            md:text-4xl
          "
        >
          Key Achievements
        </h2>

        <p
          className="
            mt-6
            text-lg
            leading-8
            text-zinc-400
          "
        >
          Major milestones and technical accomplishments achieved
          throughout the development of the platform.
        </p>
      </div>

      <div
        className="
          mt-12
          grid
          gap-5
          md:grid-cols-2
        "
      >
        {project.achievements.map((achievement, index) => (
          <div
            key={achievement}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-linear-to-br
              from-white/4
              to-white/1
              p-6
              transition-all
              duration-300
              hover:border-white/20
            "
          >
            <div className="flex items-start gap-4">
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-emerald-500/10
                  text-emerald-400
                "
              >
                <Check className="h-5 w-5" />
              </div>

              <div>
                <span
                  className="
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-zinc-600
                  "
                >
                  Achievement {(index + 1)
                    .toString()
                    .padStart(2, "0")}
                </span>

                <p
                  className="
                    mt-3
                    leading-7
                    text-zinc-300
                  "
                >
                  {achievement}
                </p>
              </div>
            </div>

            <div
              className="
                absolute
                bottom-0
                left-0
                h-1
                w-0
                bg-emerald-400
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
}