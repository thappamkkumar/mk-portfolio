import { Experience } from "@/types/experience";

import ExperienceItem from "./experience-item";

interface ExperienceListProps {
  experiences: Experience[];
}

export default function ExperienceList({
  experiences,
}: ExperienceListProps) {
  return (
    <div
      aria-label="Projects"
      className="space-y-2"
    >
      {experiences.map((experience) => (
        <ExperienceItem
          key={experience.id}
          experience={experience}
        />
      ))}
    </div>
  );
}