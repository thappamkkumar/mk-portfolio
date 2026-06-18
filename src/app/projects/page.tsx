// app/projects/page.tsx

import ProjectHero from "@/components/projects/project-hero";
import ProjectList from "@/components/projects/project-list";

import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    < >
      <ProjectHero />

      <ProjectList projects={projects} />
    </>
  );
}