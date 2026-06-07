// components/projects/project-tech-stack.tsx

interface ProjectTechStackProps {
  technologies: string[];
}

export default function ProjectTechStack({
  technologies,
}: ProjectTechStackProps) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      {technologies.map((technology) => (
        <span
          key={technology}
          className="
            rounded-full
            border
            border-white/10
            px-3
            py-1
            text-sm
            text-white/70
          "
        >
          {technology}
        </span>
      ))}
    </div>
  );
}