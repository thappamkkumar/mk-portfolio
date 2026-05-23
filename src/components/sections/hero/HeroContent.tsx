import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div className="relative z-10 max-w-2xl">
      <HeroBadge />

      <h1 className="mt-8 max-w-2xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-white md:text-6xl xl:text-7xl">
        I engineer{" "}
        <span className="italic text-lime-400">
          scalable 
        </span>{" "}
        systems that solve real problems.
      </h1>

      <p className="mt-7 max-w-xl text-base leading-8 text-zinc-400 md:text-lg">
        Full Stack Developer focused on  building realtime
        applications, clean artchitectures and delightful user experiecnes.
      </p>

      <HeroButtons />

      <HeroStats />
    </div>
  );
}
