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
        <p
          className="
            text-xs
            font-medium
            uppercase
            tracking-[0.2em]
            text-emerald-400
          "
        >
          Engineering
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
          Technical Challenges
        </h2>

        <p
          className="
            mt-6
            text-lg
            leading-8
            text-zinc-400
          "
        >
          Building this platform required solving challenges across
          content architecture, realtime communication, performance,
          and user experience.
        </p>
      </div>

      <div className="mt-12 space-y-6">
        {project.challenges.map((challenge, index) => (
          <div
            key={challenge.title}
            className="
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-linear-to-br
              from-white/4
              to-white/1
            "
          >
            <div className="p-6 md:p-8">
              <div className="flex items-start gap-5">
                <span
                  className="
                    shrink-0
                    text-4xl
                    font-bold
                    text-zinc-700
                  "
                >
                  {(index + 1).toString().padStart(2, "0")}
                </span>

                <div>
                  <h3
                    className="
                      text-xl
                      font-semibold
                      md:text-2xl
                    "
                  >
                    {challenge.title}
                  </h3>

                  <div className="mt-6 space-y-6">
                    <div>
                      <p
                        className="
                          text-xs
                          uppercase
                          tracking-[0.2em]
                          text-zinc-500
                        "
                      >
                        Problem
                      </p>

                      <p
                        className="
                          mt-3
                          leading-8
                          text-zinc-400
                        "
                      >
                        {challenge.problem}
                      </p>
                    </div>

                    <div
                      className="
                        rounded-2xl
                        border
                        border-emerald-500/20
                        bg-emerald-500/5
                        p-5
                      "
                    >
                      <p
                        className="
                          text-xs
                          uppercase
                          tracking-[0.2em]
                          text-emerald-400
                        "
                      >
                        Solution
                      </p>

                      <p
                        className="
                          mt-3
                          leading-8
                          text-zinc-300
                        "
                      >
                        {challenge.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}