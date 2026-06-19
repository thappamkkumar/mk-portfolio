import { CaseStudy } from "@/types/case-study";

interface ChallengesProps {
  project: CaseStudy;
}

export default function Challenges({
  project,
}: ChallengesProps) {
  if (!project.challenges?.length) {
    return null;
  }

  return (
    <section className="py-16">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
          Engineering
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Technical Challenges
        </h2>

        <p className="mt-6 leading-8 text-zinc-400">
          Building SkillVilla required solving challenges across
          realtime communication, content architecture, and platform
          scalability.
        </p>
      </div>

      <div className="mt-12 space-y-6">
        {project.challenges.map((challenge) => (
          <div
            key={challenge.title}
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.02]
              p-6
            "
          >
            <h3 className="text-xl font-semibold">
              {challenge.title}
            </h3>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-sm font-medium text-zinc-500">
                  Problem
                </p>

                <p className="mt-3 leading-7 text-zinc-400">
                  {challenge.problem}
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-zinc-500">
                  Solution
                </p>

                <p className="mt-3 leading-7 text-zinc-400">
                  {challenge.solution}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}