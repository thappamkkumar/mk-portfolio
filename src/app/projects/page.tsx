// app/projects/page.tsx

import ProjectHero from "@/components/projects/project-hero";
import ProjectList from "@/components/projects/project-list";

import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <ProjectHero />

      <ProjectList projects={projects} />
    </section>
  );
}