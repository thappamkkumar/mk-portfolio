// components/projects/project-links.tsx

import Link from "next/link";

import { Project } from "@/types/project";

interface ProjectLinksProps {
  project: Project;
}

export default function ProjectLinks({
  project,
}: ProjectLinksProps) {
  return (
    <div className="mt-8 flex flex-wrap gap-6">
      {project.githubUrl && (
        <Link
          href={project.githubUrl}
          target="_blank"
        >
          GitHub
        </Link>
      )}

      {project.liveUrl && (
        <Link
          href={project.liveUrl}
          target="_blank"
        >
          Live Demo
        </Link>
      )}

      {project.caseStudyUrl && (
        <Link href={project.caseStudyUrl}>
          Case Study →
        </Link>
      )}
    </div>
  );
}