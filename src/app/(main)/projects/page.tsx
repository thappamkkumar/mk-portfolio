// app/projects/page.tsx

import ProjectSection from "@/components/projects/project-section"; 

import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <ProjectSection projects={projects}/>
  );
}