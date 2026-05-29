import {
  ArrowUpRight,
  FolderCode,
  User,
  FileText,
} from "lucide-react";

const cards = [
  {
    title: "Projects",
    description: "Explore featured builds and architectures.",
    icon: FolderCode,
  },
  {
    title: "About Me",
    description: "Background, skills and development journey.",
    icon: User,
  },
  {
    title: "Resume",
    description: "View experience, stack and capabilities.",
    icon: FileText,
  },
];

const ActionCards = () => {
  return (
    <div
      className="
        grid
        gap-4
        md:grid-cols-3
      "
    >
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <button
            key={card.title}
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-zinc-800
              bg-zinc-900/70
              p-5
              text-left
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-zinc-700
              hover:bg-zinc-900
            "
          >
            <div
              className="
                flex
                items-start
                justify-between
              "
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-zinc-800
                  bg-zinc-950
                "
              >
                <Icon className="h-5 w-5 text-zinc-300" />
              </div>

              <ArrowUpRight
                className="
                  h-5
                  w-5
                  text-zinc-600
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </div>

            <h3
              className="
                mt-6
                text-lg
                font-semibold
                text-white
              "
            >
              {card.title}
            </h3>

            <p
              className="
                mt-2
                text-sm
                leading-6
                text-zinc-500
              "
            >
              {card.description}
            </p>
          </button>
        );
      })}
    </div>
  );
};

export default ActionCards;
