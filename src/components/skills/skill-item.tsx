import clsx from "clsx";

import { Skill } from "@/types/skill";

interface SkillItemProps {
  skill: Skill;
}

const levelStyles = {
  comfortable: "bg-emerald-400",
  working: "bg-emerald-400/40",
  familiar: "border border-zinc-500",
};

export default function SkillItem({
  skill,
}: SkillItemProps) {
  return (
    <li>
      <div
        className="
          inline-flex
          items-center
          gap-2
          rounded-md
          border
          border-white/10
          bg-white/[0.02]
          px-3
          py-1.5
          text-xs
          text-zinc-400
          transition-all
          duration-200
          hover:border-emerald-500/30
          hover:bg-white/[0.04]
        "
      >
        <span>{skill.name}</span>

        <span
          aria-hidden="true"
          className={clsx(
            "h-1.5 w-1.5 rounded-full",
            levelStyles[skill.level]
          )}
        />
      </div>
    </li>
  );
}
