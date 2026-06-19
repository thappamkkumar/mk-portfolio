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
        <p
          className="
            text-xs
            font-medium
            uppercase
            tracking-[0.2em]
            text-emerald-400
          "
        >
          Architecture
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
          System Architecture
        </h2>

        <p
          className="
            mt-6
            text-lg
            leading-8
            text-zinc-400
          "
        >
          The platform is built using a modular architecture that
          separates frontend, backend, realtime communication, and
          infrastructure concerns while supporting multiple
          interconnected features.
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
        {project.architecture.layers.map((layer) => (
          <div
            key={layer.title}
            className="
              group
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
            <div className="flex items-center justify-between">
              <h3
                className="
                  text-lg
                  font-semibold
                  text-white
                "
              >
                {layer.title}
              </h3>

              <span
                className="
                  rounded-full
                  border
                  border-white/10
                  px-2.5
                  py-1
                  text-xs
                  text-zinc-500
                "
              >
                {layer.items.length}
              </span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {layer.items.map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-black/30
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