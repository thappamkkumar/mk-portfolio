import ExperienceHero from "@/components/experience/experience-hero";
import ExperienceList from "@/components/experience/experience-list";

import { experiences } from "@/data/experiences";

export default function ExperiencePage() {
  return (
    <main
      className="
        mx-auto
        max-w-7xl
        px-6
        pb-24
      "
    >
      <ExperienceHero />

      <ExperienceList
        experiences={experiences}
      />
    </main>
  );
}