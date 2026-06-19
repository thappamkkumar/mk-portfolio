import { CaseStudy } from "@/types/case-study";

interface ArchitectureProps {
  project: CaseStudy;
}

export default function Architecture({
  project,
}: ArchitectureProps) {
  if (!project.architecture?.layers.length) {
    return null;
  }

  return (
    <section className="py-16">
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
          Architecture
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          System Architecture
        </h2>

        <p className="mt-6 leading-8 text-zinc-400">
          SkillVilla follows a modular full-stack architecture that
          separates application logic, realtime communication,
          media streaming, and infrastructure concerns while
          supporting multiple interconnected platform modules.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {project.architecture.layers.map((layer) => (
          <div
            key={layer.title}
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.02]
              p-6
            "
          >
            <h3 className="text-lg font-semibold">
              {layer.title}
            </h3>

            <div className="mt-5 flex flex-wrap gap-2">
              {layer.items.map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/5
                    px-3
                    py-1.5
                    text-sm
                    text-zinc-300
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}