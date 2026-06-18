import ExperienceHero from "@/components/experience/experience-hero";
import ExperienceList from "@/components/experience/experience-list";

import { experiences } from "@/data/experiences";

export default function ExperiencePage() {
  return (
    < >
      <ExperienceHero />

      <ExperienceList
        experiences={experiences}
      />
    </>
  );
}