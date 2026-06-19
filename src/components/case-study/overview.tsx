import { CaseStudy } from "@/types/case-study";

interface OverviewProps {
  project: CaseStudy;
}

export default function Overview({
  project,
}: OverviewProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-4xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
          Overview
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Project Overview
        </h2>

        <p className="mt-6 text-zinc-300 leading-8">
          {project.overview}
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {/* Problem */}
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
            Problem
          </h3>

          <p className="mt-4 text-sm leading-7 text-zinc-400">
            {project.problem}
          </p>
        </div>

        {/* Role */}
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
            My Role
          </h3>

          <p className="mt-4 text-sm leading-7 text-zinc-400">
            {project.role}
          </p>
        </div>
      </div>
    </section>
  );
}