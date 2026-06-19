import SkillsGrid from "./skills-grid";
import SkillsHeader from "./skills-header";
import SkillsGuide from "./skills-guide";

import { SkillCategory } from "@/types/skill";

interface SkillsPageProps {
  categories: SkillCategory[];
}

export default function SkillSection({
  categories,
}: SkillsPageProps) {
  return (
    <div>
      <SkillsHeader />

      <SkillsGrid categories={categories} />

      <SkillsGuide />
    </div>
  );
}