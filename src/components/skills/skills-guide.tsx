export default function SkillsGuide() {
  return (
    <section
      className="
        mt-16
        rounded-3xl
        border
        border-white/10
        bg-white/[0.02]
        p-6
        md:p-8
      "
    >
      <p
        className="
          text-xs
          font-medium
          uppercase
          tracking-[0.2em]
          text-white/40
        "
      >
        Skill Level Guide
      </p>

      <div
        className="
          mt-6
          flex
          flex-wrap
          gap-x-8
          gap-y-4
        "
      >
        <div className="flex items-center gap-3">
          <span
            className="
              h-2
              w-2
              rounded-full
              bg-emerald-400
            "
          />

          <span
            className="
              text-sm
              text-white/70
            "
          >
            Comfortable
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span
            className="
              h-2
              w-2
              rounded-full
              bg-emerald-400/40
            "
          />

          <span
            className="
              text-sm
              text-white/70
            "
          >
            Working Knowledge
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span
            className="
              h-2
              w-2
              rounded-full
              border
              border-white/30
            "
          />

          <span
            className="
              text-sm
              text-white/70
            "
          >
            Familiar
          </span>
        </div>
      </div>
    </section>
  );
}