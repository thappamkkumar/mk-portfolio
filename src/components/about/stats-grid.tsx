import type { Stat } from "@/types/about";

import StatCard from "./stat-card";

interface StatsGridProps {
  stats: Stat[];
}

export default function StatsGrid({
  stats,
}: StatsGridProps) {
  return (
    <section
      className="
        grid
        gap-4

        sm:grid-cols-2
        xl:grid-cols-4
      "
    >
      {stats.map((stat) => (
        <StatCard
          key={stat.label}
          stat={stat}
        />
      ))}
    </section>
  );
}