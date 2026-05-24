import { heroStats } from "@/data/hero";

export default function HeroStats() {
  return (
    <div className="grid grid-cols-2 gap-4 pt-15 sm:grid-cols-4">
      {heroStats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label} 
          >
            <div className=" ">
              <div
                className="
                  flex   
                  items-center
                  justify-start 
                  text-lime-300 
                  gap-2
                "
              >
                <Icon className="h-5 w-5" />
                <h4 className="text-2xl font-semibold text-white">
                  {item.value}
                </h4>
              </div>
 
                <p className="mt-0.5 text-sm text-zinc-500">
                  {item.label}
                </p> 
            </div>
          </div>
        );
      })}
    </div>
  );
}
