"use client";

import clsx from "clsx";
import { useSearchParams } from "next/navigation";

import { Skill } from "@/types/skill";

interface SkillItemProps {
  skill: Skill;
}

const levelStyles = {
  comfortable: "bg-emerald-400",
  working: "bg-emerald-800 ",
  familiar: "border border-white/30",
};

export default function SkillItem({
  skill,
}: SkillItemProps) {

  const searchParams = useSearchParams();

  const selectedSkill =
    searchParams.get("skill");

  const isSelected =
    selectedSkill === skill.id;


  return (
    <li>
      <div
        id={skill.id}
        className={clsx(
          `
            inline-flex
            items-center
            gap-2.5
            rounded-full
            border
            px-4
            py-2
            text-sm
            transition-all
            duration-300
          `,
          isSelected
            ? ` 
              border-zinc-600
              bg-zinc-800
              text-white
            `
            : `
              border-white/10
              bg-white/3
              text-white/70
              hover:border-emerald-400/20
              hover:bg-emerald-400/5
              hover:text-white
            `
        )}
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