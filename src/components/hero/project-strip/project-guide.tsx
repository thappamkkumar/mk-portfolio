export default function ProjectGuide() {
  return (
    <div
      className="
        flex
        flex-wrap
        items-center
        justify-center

        gap-4

        text-xs
        text-zinc-600
      "
    >
      <div className="flex items-center gap-1.5">
        <span className="text-emerald-400">
          ★
        </span>

        <span>Personal Project</span>
      </div>

      <div className="flex items-center gap-1.5">
        <span className="text-zinc-500">
          ◈
        </span>

        <span>Client Project</span>
      </div>
    </div>
  );
}