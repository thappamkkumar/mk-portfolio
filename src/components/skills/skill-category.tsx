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
        py-8
        md:py-10
      "
    >
      <div
        className="
          flex
          flex-col
          gap-5

          md:grid
          md:grid-cols-[220px_1fr]
          md:gap-8
        "
      >
        <div>
          <h2
            id={category.id}
            className="
              text-sm
              font-medium
              uppercase
              tracking-[0.15em]
              text-white/50
            "
          >
            {category.title}
          </h2>
        </div>

        <ul
          className="
            flex
            flex-wrap
            gap-2
            md:gap-3
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