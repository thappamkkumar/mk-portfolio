import { ReactNode } from "react";

interface ContactRowProps {
  icon: ReactNode;
  label: string;
  value?: string;
  last?: boolean;
}

export default function ContactRow({
  icon,
  label,
  value,
  last,
}: ContactRowProps) {
  const wrapperClass = `
    flex
    items-start
    gap-4
    p-5
    transition-colors
    duration-300
    hover:bg-white/[0.02]
    ${!last ? "border-b border-white/10" : ""}
  `;

  const renderValue = () => {
    if (!value) {
      return (
        <span className="text-sm text-white/50">
          —
        </span>
      );
    }

    if (label === "Email") {
      return (
        <a
          href={`mailto:${value}`}
          className="
            mt-1
            inline-block
            text-sm
            text-white/80
            transition-colors
            hover:text-emerald-400
          "
        >
          {value}
        </a>
      );
    }

    if (label === "Phone") {
      return (
        <a
          href={`tel:${value.replace(/\s+/g, "")}`}
          className="
            mt-1
            inline-block
            text-sm
            text-white/80
            transition-colors
            hover:text-emerald-400
          "
        >
          {value}
        </a>
      );
    }

    return (
      <p className="mt-1 text-sm text-white/80">
        {value}
      </p>
    );
  };

  return (
    <div className={wrapperClass}>
      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-emerald-400/20
          bg-emerald-400/5
          text-emerald-400
        "
      >
        {icon}
      </div>

      <div className="min-w-0">
        <p
          className="
            text-xs
            uppercase
            tracking-[0.15em]
            text-white/40
          "
        >
          {label}
        </p>

        {renderValue()}
      </div>
    </div>
  );
}