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
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
          Delivery
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Deployment & Outcome
        </h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/[0.02]
            p-6
          "
        >
          <h3 className="text-lg font-semibold">
            Deployment
          </h3>

          <ul className="mt-5 space-y-3">
            {project.deployment?.map((item) => (
              <li
                key={item}
                className="text-zinc-400"
              >
                • {item}
              </li>
            ))}
          </ul>
        </div>

        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/[0.02]
            p-6
          "
        >
          <h3 className="text-lg font-semibold">
            Outcome
          </h3>

          <ul className="mt-5 space-y-3">
            {project.outcomes?.map((item) => (
              <li
                key={item}
                className="text-zinc-400"
              >
                • {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}