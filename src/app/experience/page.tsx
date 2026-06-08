import ExperienceHero from "@/components/experience/experience-hero";
import ExperienceList from "@/components/experience/experience-list";

import { experiences } from "@/data/experiences";

export default function ExperiencePage() {
  return (
    <section
      className=" mx-auto max-w-7xl px-4 py-10 md:px-6"
    >
      <ExperienceHero />

      <ExperienceList
        experiences={experiences}
      />
    </section>
  );
}