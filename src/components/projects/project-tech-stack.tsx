// components/projects/project-tech-stack.tsx

interface ProjectTechStackProps {
  technologies: string[];
}

export default function ProjectTechStack({
  technologies,
}: ProjectTechStackProps) {
  return (
    <div className="mt-8">
      <p
        className="
          mb-3
          text-xs
          font-medium
          uppercase
          tracking-[0.2em]
          text-white/40
        "
      >
        Tech Stack
      </p>

      <div
        className="
          flex
          flex-wrap
          gap-2
        "
      >
        {technologies.map((technology) => (
          <span
            key={technology}
            className="
              rounded-full
              border
              border-white/10
              bg-white/3
              px-4
              py-2
              text-sm
              text-white/70
              transition-all
              duration-300
              hover:border-emerald-400/20
              hover:bg-emerald-400/5
              hover:text-white
            "
          >
            {technology}
          </span>
        ))}
      </div>
    </div>
  );
}