import ProjectGuide from "./project-guide";
import ProjectList from "./project-list";

export default function ProjectStrip() {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Heading */}
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-emerald-400" />

        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">
          Project Highlights
        </span>
      </div>

      {/* Projects */}
      <ProjectList />

      {/* Legend */}
      <ProjectGuide />
    </div>
  );
}