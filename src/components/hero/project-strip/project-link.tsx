import Link from "next/link";
import { HeroProject } from "@/types/hero-project";

export default function ProjectLink({
  title,
  href,
  type,
}: HeroProject) {
  return (
    <Link
      href={href}
      className="
        group
        flex
        items-center
        gap-1.5
        text-sm
        text-zinc-400
        transition-all
        duration-300
        hover:text-white
      "
    >
      <span
        className={`transition-transform duration-300 group-hover:scale-110 ${
          type === "Personal"
            ? "text-emerald-400"
            : "text-zinc-500"
        }`}
      >
        {type === "Personal" ? "★" : "☆"}
      </span>

      <span>{title}</span>
    </Link>
  );
}