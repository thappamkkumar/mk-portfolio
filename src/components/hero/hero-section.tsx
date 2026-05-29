// components/hero/hero-section.tsx

import ActionCards from "./action-cards";
import SearchBar from "./search-bar";
import TrendingTags from "./trending-tags";

const HeroSection = () => {
  return (
    <section
      className="
        relative
        flex
         
        flex-col
        items-center
        justify-center
        overflow-hidden
        px-6
        py-20
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
        "
      >
        {/* Intro */}
        <div
          className="
            flex
            items-center
            gap-3
            text-emerald-400
          "
        >
          <span className="text-xl">&gt;</span>

          <p
            className="
              text-lg
              tracking-wide
            "
          >
            Hello, I&apos;m
          </p>
        </div>

        {/* Name */}
        <h1
          className="
            mt-6
            bg-gradient-to-b
            from-white
            via-zinc-100
            to-zinc-500
            bg-clip-text
            text-center
            text-6xl
            font-semibold
            tracking-[-0.06em]
            text-transparent
            sm:text-7xl
            md:text-8xl
          "
        >
          Mukesh Kumar
        </h1>

        {/* Role */}
        <h2
          className="
            mt-4
            text-center
            text-3xl
            font-medium
            text-zinc-500
          "
        >
          Full Stack Developer
        </h2>

        {/* Description */}
        <p
          className="
            mt-6
            max-w-3xl
            text-center
            text-lg
            leading-8
            text-zinc-400
          "
        >
          I build scalable,
          <span className="text-emerald-400">
            {" "}
            realtime{" "}
          </span>
          and performant web applications.
        </p>

        {/* Search */}
        <div className="mt-14 w-full">
          <SearchBar />
        </div>

        {/* Trending */}
        <div
          className="
            mt-10
            flex
            flex-col
            items-center
            gap-5
          "
        >
          <p
            className="
              text-lg
              text-zinc-400
            "
          >
            Trending Searches
          </p>

          <TrendingTags />
        </div>

        {/* Action Cards */}
        <div className="mt-14 w-full">
          <ActionCards />
        </div>

        {/* Scroll */}
        <div
          className="
            mt-16
            flex
            flex-col
            items-center
            gap-3
            text-zinc-500
          "
        >
          <div
            className="
              flex
              h-12
              w-7
              items-start
              justify-center
              rounded-full
              border
              border-white/10
              p-1
            "
          >
            <div
              className="
                h-2
                w-2
                rounded-full
                bg-zinc-400
              "
            />
          </div>

          <p className="text-sm">
            Scroll to explore
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
