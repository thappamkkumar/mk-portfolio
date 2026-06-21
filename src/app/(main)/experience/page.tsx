import ExperienceSection from "@/components/experience/experience-section"; 

import { experiences } from "@/data/experiences";

export default function ExperiencePage() {
  return (
      <ExperienceSection
        experiences={experiences}
      />
     
  );
}