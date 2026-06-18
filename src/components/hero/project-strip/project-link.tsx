import Link from "next/link";
import { HeroProject } from "@/types/hero-project";

export default function ProjectLink({
  title,
  href,
  type,
}: HeroProject) {
  const isPersonal = type === "Personal";

  return (
    <Link
      href={href}
      className="
        group
        flex
        items-center
        gap-2

        text-sm
        text-zinc-400

        transition-all
        duration-300

        hover:text-white
      "
    >
      <span
        className={`
          transition-transform
          duration-300
          group-hover:scale-110

          ${
            isPersonal
              ? "text-emerald-400"
              : "text-zinc-500"
          }
        `}
      >
        {isPersonal ? "★" : "◈"}
      </span>

      <span
        className="
          border-b
          border-transparent

          transition-all
          duration-300

          group-hover:border-emerald-400/60
        "
      >
        {title}
      </span>
    </Link>
  );
}