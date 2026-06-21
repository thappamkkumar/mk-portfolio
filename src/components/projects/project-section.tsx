
import ProjectHero from "./project-hero";
import ProjectList from "./project-list";
import ProjectFocus from "./project-focus";

import { Project } from "@/types/project";


interface ProjectListProps {
  projects: Project[];
}

export default function ProjectSection({
  projects,
}: ProjectListProps) {
  return (
    <div>
      
      <ProjectFocus />

      <ProjectHero />

      <ProjectList projects={projects} />
    </div>
  );
}