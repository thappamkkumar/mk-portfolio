import { CaseStudy } from "@/types/case-study";

interface PlatformModulesProps {
  project: CaseStudy;
}

export default function PlatformModules({
  project,
}: PlatformModulesProps) {
  if (!project.systems?.length) {
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
          Features
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
          Platform Modules
        </h2>

        <p
          className="
            mt-6
            text-lg
            leading-8
            text-zinc-400
          "
        >
          SkillVilla brings together content sharing, networking,
          communities, opportunities, and realtime communication
          within a single platform experience.
        </p>
      </div>

      <div
        className="
          mt-12
          grid
          gap-5
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {project.systems.map((system, index) => (
          <div
            key={system.title}
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
              hover:bg-white/4
            "
          >
            {/* Number */}
            <span
              className="
                text-xs
                font-medium
                tracking-[0.2em]
                text-zinc-600
              "
            >
              {(index + 1).toString().padStart(2, "0")}
            </span>

            <h3
              className="
                mt-4
                text-xl
                font-semibold
                text-white
              "
            >
              {system.title}
            </h3>

            <p
              className="
                mt-4
                leading-7
                text-zinc-400
              "
            >
              {system.content}
            </p>

            {/* Hover Accent */}
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