import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { contact } from "@/data/contact";

import {
  ArrowUpRight,
  FileText,
  Mail,
  GitBranch,
  ExternalLink,
} from "lucide-react";

type ActionCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  external?: boolean;
};

const cards: ActionCard[] = [
  {
    title: "Resume",
    description: "View or download resume",
    icon: FileText,
    href: contact.resumeUrl ?? "/resume.pdf",
    external: true,
  },
  {
    title: "Contact",
    description: "Let's discuss opportunities",
    icon: Mail,
    href: "/contact",
  },
  ...(contact.linkedinUrl
    ? [
        {
          title: "LinkedIn",
          description: "Connect professionally",
          icon: ExternalLink,
          href: contact.linkedinUrl,
          external: true,
        },
      ]
    : []),
  ...(contact.githubUrl
    ? [
        {
          title: "GitHub",
          description: "Explore repositories",
          icon: GitBranch,
          href: contact.githubUrl,
          external: true,
        },
      ]
    : []),
];

export default function ActionCards() {
  return (
    <div
      className="
        mx-auto
        mt-12
        grid
        w-full
        max-w-5xl
        grid-cols-1
        gap-4

        sm:grid-cols-2
        lg:grid-cols-4
      "
    >
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <Link
            key={card.title}
            href={card.href}
            target={card.external ? "_blank" : undefined}
            rel={card.external ? "noreferrer" : undefined}
            className="
              group
              relative
              overflow-hidden

              rounded-2xl
              border
              border-white/10

              bg-linear-to-b
              from-zinc-900/70
              to-zinc-950/70

              p-5

              backdrop-blur-xl

              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-emerald-500/30
              hover:shadow-[0_0_30px_rgba(16,185,129,0.08)]
            "
          >
            {/* Glow */}
            <div
              className="
                absolute
                inset-0
                opacity-0
                transition-opacity
                duration-300
                group-hover:opacity-100
                bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_60%)]
              "
            />

            <div className="relative flex h-full flex-col">
              {/* Top */}
              <div className="flex items-center justify-between">
                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center

                    rounded-xl

                    border
                    border-white/10

                    bg-black/30
                  "
                >
                  <Icon className="h-5 w-5 text-emerald-400" />
                </div>

                <ArrowUpRight
                  className="
                    h-4
                    w-4

                    text-zinc-600

                    transition-all
                    duration-300

                    group-hover:text-white
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </div>

              {/* Content */}
              <div className="mt-6">
                <h3
                  className="
                    text-lg
                    font-semibold
                    text-white
                  "
                >
                  {card.title}
                </h3>

                <p
                  className="
                    mt-1
                    text-sm
                    text-zinc-400
                  "
                >
                  {card.description}
                </p>
              </div>

              {/* Bottom indicator */}
              <div
                className="
                  mt-5

                  flex
                  items-center
                  gap-2

                  text-xs
                  text-zinc-600

                  transition-colors
                  duration-300

                  group-hover:text-emerald-400
                "
              >
                <span>$</span>
                <span>open {card.title.toLowerCase()}</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}