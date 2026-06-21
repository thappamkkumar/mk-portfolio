import clsx from "clsx";

import { Skill } from "@/types/skill";

interface SkillItemProps {
  skill: Skill;
}

const levelStyles = {
  comfortable: "bg-emerald-400",
  working: "bg-emerald-400/40",
  familiar: "border border-white/30",
};

export default function SkillItem({
  skill,
}: SkillItemProps) {
  return (
    <li>
      <div
        id={skill.id}
        className="
          inline-flex
          items-center
          gap-2.5
          rounded-full
          border
          border-white/10
          bg-white/3
          px-4
          py-2
          text-sm
          text-white/70
          transition-all
          duration-300
          hover:border-emerald-400/20
          hover:bg-emerald-400/5
          hover:text-white
        "
      >
        <span>{skill.name}</span>

        <span
          aria-hidden="true"
          className={clsx(
            "h-2 w-2 rounded-full",
            levelStyles[skill.level]
          )}
        />
      </div>
    </li>
  );
}