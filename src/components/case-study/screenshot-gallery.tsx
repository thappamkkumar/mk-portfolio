import Image from "next/image";

import { CaseStudy } from "@/types/case-study";

interface ScreenshotGalleryProps {
  project: CaseStudy;
}

export default function ScreenshotGallery({
  project,
}: ScreenshotGalleryProps) {
  if (!project.screenshots?.length) {
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
          Showcase
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
          Product Screenshots
        </h2>

        <p
          className="
            mt-6
            text-lg
            leading-8
            text-zinc-400
          "
        >
          A closer look at the product experience and key workflows.
        </p>
      </div>

      <div
        className="
          mt-12
          grid
          gap-6
          md:grid-cols-2
        "
      >
        {project.screenshots.map((screenshot, index) => (
          <div
            key={screenshot.title}
            className="
              group
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-zinc-950
              transition-all
              duration-300
              hover:border-white/20
              hover:-translate-y-1
            "
          >
            {/* Browser Header */}
            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-white/10
                px-4
                py-3
              "
            >
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
              </div>

              <span
                className="
                  text-xs
                  uppercase
                  tracking-[0.15em]
                  text-zinc-500
                "
              >
                {(index + 1)
                  .toString()
                  .padStart(2, "0")}
              </span>
            </div>

            {/* Screenshot */}
            <div
              className="
                relative
                aspect-16/10
                overflow-hidden
              "
            >
              <Image
                src={screenshot.image}
                alt={screenshot.title}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />
            </div>

            {/* Footer */}
            <div className="p-5">
              <h3
                className="
                  text-lg
                  font-semibold
                  text-white
                "
              >
                {screenshot.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}