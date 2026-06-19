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
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
          Results
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Key Achievements
        </h2>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {project.achievements.map((achievement) => (
          <div
            key={achievement}
            className="
              flex
              gap-4
              rounded-2xl
              border
              border-white/10
              bg-white/[0.02]
              p-5
            "
          >
            <Check className="mt-1 h-5 w-5 shrink-0 text-emerald-400" />

            <p className="leading-7 text-zinc-300">
              {achievement}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}