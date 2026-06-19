import type { Stat } from "@/types/about";

interface StatCardProps {
  stat: Stat;
}

export default function StatCard({
  stat,
}: StatCardProps) {
  const Icon = stat.icon;

  return (
    <div
      className="
        group
        rounded-3xl
        border
        border-white/10
        bg-white/[0.02]
        p-6

        transition-all
        duration-300

        hover:border-emerald-400/20
        hover:bg-white/[0.03]
      "
    >
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          border
          border-emerald-400/20
          bg-emerald-400/5
        "
      >
        <Icon
          size={22}
          className="
            text-emerald-400
          "
        />
      </div>

      <div className="mt-6">
        <h3
          className="
            text-3xl
            font-semibold
            tracking-tight
          "
        >
          {stat.value}
        </h3>

        <p
          className="
            mt-1
            text-sm
            text-white/60
          "
        >
          {stat.label}
        </p>
      </div>
    </div>
  );
}