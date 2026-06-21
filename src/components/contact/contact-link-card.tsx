import { ArrowUpRight } from "lucide-react";

interface ContactLinkCardProps {
  title: string;
  description: string;
  href: string;
}

export default function ContactLinkCard({
  title,
  description,
  href,
}: ContactLinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        rounded-3xl
        border
        border-white/10
        bg-white/2
        p-6
        transition-all
        duration-300
        hover:border-emerald-400/20
        hover:bg-white/3
      "
    >
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between">
          <h3
            className="
              text-lg
              font-medium
              transition-colors
              duration-300
              group-hover:text-emerald-400
            "
          >
            {title}
          </h3>

          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              transition-all
              duration-300
              group-hover:border-emerald-400/20
              group-hover:bg-emerald-400/5
            "
          >
            <ArrowUpRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </div>
        </div>

        <p
          className="
            mt-4
            text-sm
            leading-relaxed
            text-white/60
          "
        >
          {description}
        </p>
      </div>
    </a>
  );
}