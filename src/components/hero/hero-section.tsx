 

import ActionCards from "./action-cards";
import SearchBar from "./search-bar";
import TrendingTags from "./trending-tags";
import ProjectStrip from "./project-strip/project-strip";

const HeroSection = () => {
  return (
    <section
      className="
        relative
        flex
        min-h-[calc(100vh-4rem)]
        items-center
        justify-center
        px-4
        py-16
        sm:px-6
        lg:px-8
      "
    >
      <div
        className="
          relative
          z-10

          mx-auto
          flex
          w-full
          max-w-6xl
          flex-col
          items-center
          text-center
        "
      >
        {/* Eyebrow */}
        <p
          className="
            text-xs
            font-medium
            uppercase
            tracking-[0.35em]
            text-emerald-400
          "
        >
          Full Stack Developer
        </p>

        {/* Name */}
        <h1
          className="
            mt-5

            bg-linear-to-b
            from-white
            via-zinc-100
            to-zinc-500

            bg-clip-text
            text-transparent

            text-5xl
            font-bold
            tracking-[-0.08em]

            sm:text-6xl
            md:text-7xl
            lg:text-8xl
          "
        >
          Mukesh Kumar
        </h1>

        {/* Description */}
        <p
          className="
            mt-6

            max-w-2xl

            text-sm
            leading-7
            text-zinc-400

            sm:text-base
            md:text-lg
          "
        >
          Building modern web applications with{" "}
          <span className="text-emerald-400">
            React
          </span>
          ,{" "}
          <span className="text-emerald-400">
            Next.js
          </span>
          ,{" "}
          <span className="text-emerald-400">
            Laravel
          </span>{" "}
          and TypeScript, with a focus on performance,
          realtime systems and user experience.
        </p>

        {/* Search */}
        <div className="mt-10 w-full">
          <SearchBar />
        </div>

        {/* Popular Searches */}
        <div
          className="
            mt-8
            
          "
        >
           

          <TrendingTags />
        </div>

        {/* Projects */}
        <div className="mt-12 w-full">
          <ProjectStrip />
        </div>

        {/* Quick Links */}
        <div className="mt-12 w-full">
          <div
            className="
              mb-5

              flex
              items-center
              justify-center
              gap-2

              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
              text-zinc-500
            "
          > 
            Quick Links
          </div>

          <ActionCards />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;