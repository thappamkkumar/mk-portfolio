import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Folder,
  MessageCircle,
  PlaySquare,
  Zap,
} from "lucide-react";

const projects = [
  {
    title: "Chat App",
    icon: MessageCircle,
  },
  {
    title: "Media Platform",
    icon: PlaySquare,
  },
  {
    title: "Realtime Engine",
    icon: Zap,
  },
  {
    title: "Portfolio v1",
    icon: Folder,
  },
  {
    title: "Task Manager",
    icon: CheckCircle2,
  },
  {
    title: "API Gateway",
    icon: Cloud,
  },
];

const ProjectStrip = () => {
  return (
    <section
      className="
         
        bg-zinc-900 
      "
    >
      <div
        className="
          flex 
          items-center
          gap-5
          overflow-x-auto
          px-6
          py-3 
        "
      >
        {/* Left Title */}
        <button
          className="
            flex
            min-w-fit
            items-center
            gap-3
            text-lg
            md:text-xl
            font-medium
            text-white

          "
        >
          <span className="  ">Projects</span>

          <ArrowRight className="h-5 w-5" />
        </button>

        {/* Project Pills */}
        <div
          className="
            flex
            items-center
            gap-4
          "
        >
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <button
                key={project.title}
                className="
                  group
                  flex 
                  min-w-fit
                  items-center
                  gap-3
                  rounded-lg
                  border
                  border-white/10
                  bg-white/[0.02]
                  px-4
                  py-3
                  text-sm
                  text-zinc-300
                  transition-all
                  duration-300
                  hover:bg-white/[0.05]
                "
              >
                <Icon
                  className="
                    h-4
                    w-4
                    text-zinc-500
                    transition-all
                    duration-300
                    group-hover:text-white
                  "
                />

                {project.title}
              </button>
            );
          })}
        </div>

         
      </div>
    </section>
  );
};

export default ProjectStrip;
