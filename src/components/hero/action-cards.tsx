import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { contact } from "@/data/contact";

import {
  ExternalLink,
  FileText,
  Mail,
  GitBranch,
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
    description: "View or download my resume",
    icon: FileText,
    href: contact.resumeUrl ?? "/resume.pdf",
    external: true,
  },
  {
    title: "Contact",
    description: "Open the contact page",
    icon: Mail,
    href: "/contact",
    external: false,
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
          description: "Explore my repositories",
          icon: GitBranch,
          href: contact.githubUrl,
          external: true,
        },
      ]
    : []),
];

const ActionCards = () => {
  return (
    <div
      className="
        mx-auto
        grid
        max-w-5xl
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
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-900/70
              p-5
              text-left
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:border-zinc-700
              hover:bg-zinc-900
            "
          >
            <div
              className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-xl
                border
                border-zinc-800
                bg-zinc-950
              "
            >
              <Icon
                className="
                  h-6
                  w-6
                  text-emerald-400
                "
              />
            </div>

            <div>
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
          </Link>
        );
      })}
    </div>
  );
};

export default ActionCards;