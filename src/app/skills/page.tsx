import SkillSection from "@/components/skills/skill-section";
import { skillCategories } from "@/data/skills";

export default function Page() {
  return (
    < >
      <SkillSection categories={skillCategories} />
    </>
  );
}