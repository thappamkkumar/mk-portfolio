import { CaseStudy } from "@/types/case-study";

interface OverviewProps {
  project: CaseStudy;
}

export default function Overview({
  project,
}: OverviewProps) {
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
          Context
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
          The Challenge & My Role
        </h2>

        <p
          className="
            mt-6
            text-lg
            leading-8
            text-zinc-400
          "
        >
          Every project starts with a problem to solve. This section
          outlines the challenge behind the project and my
          responsibilities throughout the development process.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {/* Problem */}
        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-linear-to-br
            from-white/4
            to-white/1
            p-6
            backdrop-blur-sm
          "
        >
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

          <h3 className="mt-3 text-xl font-semibold">
            Why This Project Was Built
          </h3>

          <p
            className="
              mt-5
              leading-8
              text-zinc-400
            "
          >
            {project.problem}
          </p>
        </div>

        {/* Role */}
        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-linear-to-br
            from-white/4
            to-white/1
            p-6
            backdrop-blur-sm
          "
        >
          <p
            className="
              text-xs
              uppercase
              tracking-[0.2em]
              text-zinc-500
            "
          >
            Responsibility
          </p>

          <h3 className="mt-3 text-xl font-semibold">
            My Role
          </h3>

          <p
            className="
              mt-5
              leading-8
              text-zinc-400
            "
          >
            {project.role}
          </p>
        </div>
      </div>
    </section>
  );
}