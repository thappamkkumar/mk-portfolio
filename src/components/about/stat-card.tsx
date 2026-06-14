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
        flex
        items-center
        gap-4

        rounded-2xl
        border
        border-white/10

        bg-white/2
        p-5

        transition-all
        duration-300

        hover:border-emerald-500/30
      "
    >
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-emerald-500/10
        "
      >
        <Icon
          size={22}
          className="text-emerald-400"
        />
      </div>

      <div>
        <h3 className="font-bold">
          {stat.value}
        </h3>

        <p className="text-sm text-zinc-400">
          {stat.label}
        </p>
      </div>
    </div>
  );
}