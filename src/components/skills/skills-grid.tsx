import SkillCategory from "./skill-category";

import { SkillCategory as SkillCategoryType } from "@/types/skill";

interface SkillsGridProps {
  categories: SkillCategoryType[];
}

export default function SkillsGrid({
  categories,
}: SkillsGridProps) {
  return (
    <div
      aria-label="Skills"
      className="space-y-0"
    >
      {categories.map((category) => (
        <SkillCategory
          key={category.id}
          category={category}
        />
      ))}
    </div>
  );
}