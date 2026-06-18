// components/hero/hero-section.tsx

import { TrendingUp } from 'lucide-react';

import ActionCards from "./action-cards";
import SearchBar from "./search-bar";
import TrendingTags from "./trending-tags";
import ProjectStrip from "./project-strip/project-strip";

const HeroSection = () => {
  return (
    <div
      className="
        relative
        flex
        min-h-screen
        flex-col
        items-center
        justify-center
        overflow-hidden
        px-4
        pt-10
        pb-16
        md:px-6
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
        
        <p
          className="
            text-lg
            tracking-wide
            text-emerald-400
          "
        >
          Hello, I&apos;m
        </p>
        

        {/* Name */}
        <h1
          className="
            bg-linear-to-b
            from-white/90
            via-zinc-100/80
            to-zinc-500/70
            bg-clip-text
            text-center
            text-5xl
            font-semibold
            tracking-[-0.06em]
            text-transparent
            sm:text-6xl
            md:text-7xl
          "
        >
          Mukesh Kumar
        </h1>

        {/* Role */}
        <h2
          className="
            mt-4
            text-center
            text-2xl
            font-medium
            text-zinc-400
            sm:text-3xl
          "
        >
          Full Stack Developer
        </h2>

        {/* Description */}
        <p
          className="
            mt-5
            max-w-3xl
            text-center
            text-base
            leading-8
            text-zinc-400
            sm:text-lg
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
        <div className="mt-6 w-full">
          <SearchBar />
        </div>

        {/* Trending */}
        <div
          className="
            mt-8
            flex
            flex-col
            items-center
            gap-5
          "
        >
          <p
            className="
              text-md
              text-zinc-400
              flex
              items-center
              gap-2
            "
          >
            <TrendingUp className="w-4 h-4" />
            Trending Searches
          </p>

          <TrendingTags />
        </div>

        <div className="mt-12">
          <ProjectStrip />
        </div>


        {/* Action Cards */}
        <div className="mt-12 w-full">
          <ActionCards />
        </div>

       

           
      </div>
    </div>
  );
};

export default HeroSection;
