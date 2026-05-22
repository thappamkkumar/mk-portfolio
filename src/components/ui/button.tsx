import { ArrowRight } from "lucide-react";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: Props) {
  const base =
    "inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-all duration-300";

  const styles = {
    primary:
      "bg-red-500 text-white hover:bg-red-600",
    secondary:
      "border border-gray-300 bg-white hover:bg-gray-100",
  };

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
      <ArrowRight size={16} />
    </button>
  );
}
