import { techStacks } from "@/data/techStacks";

export default function TechStackCard() {
  return (
    <div
      className="
        rounded-lg
        border
        border-white/10
        bg-white/[0.06]
        p-3
        backdrop-blur-md
        w-full
        max-w-xs
      "
    >
      <div className="space-y-3">
        {techStacks.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center gap-4  "
            >
              <div
                className="text-white  "
              >
                <Icon className="h-6 w-6" />
              </div>

              <div>
                <h4 className="text-sm font-medium text-white">
                  {item.title}
                </h4>

                <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                  {item.tech}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
