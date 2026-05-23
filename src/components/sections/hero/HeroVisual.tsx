import HeroPanel from "./HeroPanel";
import ArchitectureVisual from "./ArchitectureVisual"; 
export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[640px]">
       
      <div
        className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-2xl
        "
      >
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-white/[0.04]
            via-transparent
            to-lime-400/[0.03]
          "
        />

        <div
          className="
            relative
            z-10
            grid
            min-h-[540px]
            grid-cols-1

            lg:min-h-[640px]
            lg:grid-cols-[1fr_280px]
          "
        >
          <HeroPanel />

          <ArchitectureVisual />
        </div>
      </div>
    </div>
  );
}
