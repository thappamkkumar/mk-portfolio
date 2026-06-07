export default function SkillsGuide() {
  return (
    <div className="pt-20 ">
      <h2 className="mb-5 text-sm font-medium text-zinc-200">
        Skill Level Guide
      </h2>

      <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />

          <span className="text-zinc-400">
            Comfortable
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-emerald-400/40" />

          <span className="text-zinc-400">
            Working Knowledge
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full border border-zinc-500" />

          <span className="text-zinc-400">
            Familiar
          </span>
        </div>
      </div>
    </div>
  );
}	
