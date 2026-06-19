// components/projects/project-list.tsx

import { Project } from "@/types/project";
import ProjectCard from "./project-card";

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({
  projects,
}: ProjectListProps) {
  return (
    <section
      aria-label="Projects"
      className="space-y-2"
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index + 1}
        />
      ))}
    </section>
  );
}