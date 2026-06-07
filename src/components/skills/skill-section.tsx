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
    <div className="mx-auto
        max-w-5xl
        px-4
        py-8
        md:px-6">
      <SkillsHeader />

      <SkillsGrid categories={categories} />

      <SkillsGuide />
    </div>
  );
}
