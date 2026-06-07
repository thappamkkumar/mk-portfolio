import { Project } from "@/types/project";
import ProjectCard from "./project-card";

interface ProjectListProps {
  projects: Project[];
}

export default function ProjectList({
  projects,
}: ProjectListProps) {
  return (
    <div>
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          index={index + 1}
        />
      ))}
    </div>
  );
}