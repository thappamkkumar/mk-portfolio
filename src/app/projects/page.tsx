// app/projects/page.tsx

import ProjectHero from "@/components/projects/project-hero";
import ProjectList from "@/components/projects/project-list";

import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-10">
      <ProjectHero />

      <ProjectList projects={projects} />
    </section>
  );
}