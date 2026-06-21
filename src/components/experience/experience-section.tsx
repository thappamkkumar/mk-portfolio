
 
import ExperienceHero from "./experience-hero";
import ExperienceList from "./experience-list";
import ExperienceFocus from "./experience-focus";

import { Experience } from "@/types/experience";


interface ExperienceListProps {
  experiences: Experience[];
}

export default function ExperienceSection({
  experiences,
}: ExperienceListProps) {
  return (
    <div>
      
      <ExperienceFocus />
      
     <ExperienceHero />

      <ExperienceList
        experiences={experiences}
      />
    </div>
  );
}