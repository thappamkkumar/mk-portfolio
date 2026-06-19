import { CheckCircle2, Rocket } from "lucide-react";

import { CaseStudy } from "@/types/case-study";

interface OutcomeProps {
  project: CaseStudy;
}

export default function Outcome({
  project,
}: OutcomeProps) {
  if (
    !project.deployment?.length &&
    !project.outcomes?.length
  ) {
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
          Delivery
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
          Deployment & Outcome
        </h2>

        <p
          className="
            mt-6
            text-lg
            leading-8
            text-zinc-400
          "
        >
          The final stage focused on deployment, platform
          availability, and the overall impact of the project.
        </p>
      </div>

      <div
        className="
          mt-12
          grid
          gap-6
          lg:grid-cols-2
        "
      >
        {/* Deployment */}
        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-linear-to-br
            from-white/4
            to-white/1
            p-6
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-emerald-500/10
              "
            >
              <Rocket className="h-5 w-5 text-emerald-400" />
            </div>

            <div>
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-zinc-500
                "
              >
                Deployment
              </p>

              <h3 className="mt-1 text-xl font-semibold">
                Platform Delivery
              </h3>
            </div>
          </div>

          <ul className="mt-8 space-y-4">
            {project.deployment?.map((item) => (
              <li
                key={item}
                className="
                  flex
                  items-start
                  gap-3
                "
              >
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-400" />

                <span className="leading-7 text-zinc-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Outcome */}
        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-linear-to-br
            from-white/4
            to-white/1
            p-6
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-emerald-500/10
              "
            >
              <CheckCircle2 className="h-5 w-5 text-emerald-400" />
            </div>

            <div>
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  text-zinc-500
                "
              >
                Outcome
              </p>

              <h3 className="mt-1 text-xl font-semibold">
                Project Impact
              </h3>
            </div>
          </div>

          <ul className="mt-8 space-y-4">
            {project.outcomes?.map((item) => (
              <li
                key={item}
                className="
                  flex
                  items-start
                  gap-3
                "
              >
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-400" />

                <span className="leading-7 text-zinc-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}