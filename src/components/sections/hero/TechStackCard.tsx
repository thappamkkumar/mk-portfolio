import { techStacks } from "@/data/techStacks";

export default function TechStackCard() {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-black/20
        p-5
        backdrop-blur-xl
      "
    >
      <div className="space-y-5">
        {techStacks.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-start gap-4"
            >
              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  text-lime-400
                "
              >
                <Icon className="h-5 w-5" />
              </div>

              <div>
                <h4 className="text-sm font-medium text-white">
                  {item.title}
                </h4>

                <p className="mt-1 text-xs leading-relaxed text-zinc-500">
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
