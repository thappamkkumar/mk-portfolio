import ExperienceHero from "@/components/experience/experience-hero";
import ExperienceList from "@/components/experience/experience-list";

import { experiences } from "@/data/experiences";

export default function ExperiencePage() {
  return (
    <div
      className="relative min-h-screen overflow-hidden mx-auto max-w-7xl px-4 pt-10 pb-30 md:px-6"
    >
      <ExperienceHero />

      <ExperienceList
        experiences={experiences}
      />
    </div>
  );
}