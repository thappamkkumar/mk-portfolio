import { heroProjects } from "@/data/hero-projects";
import ProjectLink from "./project-link";

export default function ProjectList() {
  return (
    <div
      className="
        flex
        flex-wrap
        items-center
        justify-center

        gap-x-4
        gap-y-2
      "
    >
      {heroProjects.map((project, index) => (
        <div
          key={project.title}
          className="flex items-center gap-4"
        >
          <ProjectLink {...project} />

          {index !== heroProjects.length - 1 && (
            <span className="text-zinc-700">
              ·
            </span>
          )}
        </div>
      ))}
    </div>
  );
}