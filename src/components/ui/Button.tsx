import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

interface Props {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-medium transition-all duration-300",
        variant === "primary" &&
          "border-lime-400/30 bg-lime-400 text-black hover:bg-lime-300",
        variant === "secondary" &&
          "border-white/10 bg-white/[0.03] text-white hover:border-lime-400/30 hover:bg-white/[0.05]"
      )}
    >
      {children}

      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}
