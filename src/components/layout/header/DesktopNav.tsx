"use client";

import clsx from "clsx";

import { navigationLinks } from "@/data/navigation";

interface Props {
  activeSection: string;
}

export default function DesktopNav({
  activeSection,
}: Props) {
  return (
    <nav className="hidden items-center gap-10 lg:flex">
      {navigationLinks.map((link) => {
        const isActive =
          activeSection === link.href;

        return (
          <a
            key={link.href}
            href={link.href}
            className={clsx(
              "relative text-sm font-medium transition-all duration-300",
              isActive
                ? "text-lime-300"
                : "text-zinc-300 hover:text-white"
            )}
          >
            {link.label}

            <span
              className={clsx(
                "absolute -bottom-2 left-0 h-[2px] bg-lime-300 transition-all duration-300",
                isActive
                  ? "w-full"
                  : "w-0"
              )}
            />
          </a>
        );
      })}
    </nav>
  );
}
