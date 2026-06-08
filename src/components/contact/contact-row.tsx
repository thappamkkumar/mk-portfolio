import { ReactNode } from "react";

interface ContactRowProps {
  icon: ReactNode;
  label: string;
  value: string;
  last?: boolean;
}

export default function ContactRow({
  icon,
  label,
  value,
  last,
}: ContactRowProps) {
  return (
    <div
      className={`
        flex items-center gap-4 p-5
        ${!last ? "border-b border-white/10" : ""}
      `}
    >
      <div className="text-emerald-400">
        {icon}
      </div>

      <div>
        <p className="text-xs text-white/40">
          {label}
        </p>

        <p className="mt-1 text-sm text-white/80">
          {value}
        </p>
      </div>
    </div>
  );
}