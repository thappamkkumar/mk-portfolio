const tags = [
  "React",
  "Laravel",
  "Next.js",
  "SkillVilla",
  "WebRTC",
  "PostgreSQL",
];

export default function TrendingTags() {
  return (
    <section className="w-full">
      <div className="flex flex-col items-center gap-4">
         
          <span
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.3em]
              text-zinc-500
            "
          >
            Popular Searches
          </span>
         
         

        <div
          className="
            flex
            flex-wrap
            items-center
            justify-center
            gap-2
            sm:gap-3
          "
        >
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              className="
                group
                flex
                items-center
                gap-1.5

                rounded-full

                border
                border-white/10

                bg-zinc-900/40

                px-3
                py-2

                text-xs
                text-zinc-300

                backdrop-blur-xl

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:border-emerald-500/30
                hover:bg-zinc-900/70
                hover:text-white

                sm:px-4
              "
            >
              <span
                className="
                  text-emerald-400
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              >
                #
              </span>

              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}