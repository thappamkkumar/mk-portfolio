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
  const wrapperClass = `flex items-center gap-4 p-5 ${!last ? "border-b border-white/10" : ""}`;

  const renderValue = () => {
    if (!value) return <span className="text-sm text-white/80">—</span>;

    if (label === "Email") {
      return (
        <a href={`mailto:${value}`} className="mt-1 text-sm text-white/80 hover:underline">
          {value}
        </a>
      );
    }

    if (label === "Phone") {
      return (
        <a href={`tel:${value.replace(/\s+/g, "")}`} className="mt-1 text-sm text-white/80 hover:underline">
          {value}
        </a>
      );
    }

    return <p className="mt-1 text-sm text-white/80">{value}</p>;
  };

  return (
    <div className={wrapperClass}>
      <div className="text-emerald-400">{icon}</div>

      <div>
        <p className="text-xs text-white/40">{label}</p>

        {renderValue()}
      </div>
    </div>
  );
}