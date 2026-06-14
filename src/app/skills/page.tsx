import SkillSection from "@/components/skills/skill-section";
import { skillCategories } from "@/data/skills";

export default function Page() {
  return (
    <section
      className=" mx-auto max-w-7xl px-4 pt-10 pb-30 md:px-6      "
    >
      <SkillSection categories={skillCategories} />
    </section>
  );
}