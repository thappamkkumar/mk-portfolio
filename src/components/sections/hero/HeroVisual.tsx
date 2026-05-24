import HeroPanel from "./HeroPanel"; 
export default function HeroVisual() {
  return (
    <div className="relative  w-full      ">
       
      <div
        className=" 
          overflow-hidden
          rounded-xl 
          bg-[url('/images/hero-bg.png')] bg-no-repeat bg-right-bottom bg-[length:18rem]
        "
      >
         

        <div  className="  bg-white/[0.05]  "      >
          <HeroPanel />
 
        </div>
      </div>
      <div className="mt-auto p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500">
          <span>// building</span>
          <div className="h-1 w-1 rounded-full bg-zinc-500" />
          <span>learning</span>
          <div className="h-1 w-1 rounded-full bg-zinc-500" />
		<span>improving</span>
          <div className="h-1 w-1 rounded-full bg-lime-300/80" />
          <span className="text-lime-300/80">
            shipping
          </span>
        </div>
      </div>
      
    </div>
  );
}
