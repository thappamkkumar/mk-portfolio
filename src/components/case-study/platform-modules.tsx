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
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
          Features
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Platform Modules
        </h2>

        <p className="mt-6 leading-8 text-zinc-400">
          SkillVilla was designed as a unified professional ecosystem
          where multiple workflows can coexist within a single platform.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {project.systems.map((system) => (
          <div
            key={system.title}
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.02]
              p-6
            "
          >
            <h3 className="text-xl font-semibold">
              {system.title}
            </h3>

            <p className="mt-4 leading-7 text-zinc-400">
              {system.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}