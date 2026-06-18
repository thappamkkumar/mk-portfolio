import { heroProjects } from "@/data/hero-projects";
import ProjectLink from "./project-link";

export default function ProjectList() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
      {heroProjects.map((project) => (
        <ProjectLink
          key={project.title}
          {...project}
        />
      ))}
    </div>
  );
}