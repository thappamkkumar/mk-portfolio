
import SkillCategory from "./skill-category"; 
import { SkillCategory as SkillCategoryType } from "@/types/skill";


interface SkillsSectionsProps {
  categories: SkillCategoryType[];
}

export default function SkillsGrid({
  categories,
}: SkillsSectionsProps) {


  return (
    <>
      {categories.map((category) => (
        <SkillCategory
          key={category.id}
          category={category}
        />
      ))}
    </>
  );
}


