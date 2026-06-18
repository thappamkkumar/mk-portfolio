import SkillSection from "@/components/skills/skill-section";
import { skillCategories } from "@/data/skills";

export default function Page() {
  return (
    <div
      className=" relative min-h-screen overflow-hidden mx-auto max-w-7xl px-4 pt-10 pb-30 md:px-6      "
    >
      <SkillSection categories={skillCategories} />
    </div>
  );
}