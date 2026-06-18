import ProjectGuide from "./project-guide";
import ProjectList from "./project-list";

export default function ProjectStrip() {
  return (
    <section className="w-full">
      <div className="flex flex-col items-center gap-5">
         
          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.3em]
              text-zinc-500
            "
          >
            Project Highlights
          </p>
         

        <ProjectList />

        <ProjectGuide />
      </div>
    </section>
  );
}