import SkillItem from "./skill-item";

import { SkillCategory as SkillCategoryType } from "@/types/skill";

interface SkillCategoryProps {
  category: SkillCategoryType;
}

export default function SkillCategory({
  category,
}: SkillCategoryProps) {
  return (
    <section
      aria-labelledby={category.id}
      className="
        border-b
        border-white/10
        py-5
      "
    >
      <div
        className="
          flex
          flex-col
          gap-4

          md:grid
          md:grid-cols-[180px_1fr]
          md:gap-8
        "
      >
        <h2
          id={category.id}
          className="
            text-sm
            font-medium
            text-zinc-100
          "
        >
          {category.title}
        </h2>

        <ul
          className="
            flex
            flex-wrap
            gap-2
          "
        >
          {category.skills.map((skill) => (
            <SkillItem
              key={skill.name}
              skill={skill}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
