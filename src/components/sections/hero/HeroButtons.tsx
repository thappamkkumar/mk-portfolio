import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="flex flex-col	 gap-4 pt-10 sm:flex-row">
       
	<Link
	href="#work"
	className="w-fit  inline-flex items-center gap-3 rounded-md border px-8 py-4 text-sm font-medium transition-all duration-300 border-lime-300/30 bg-lime-300 text-black hover:bg-lime-400"
	   
	>
		Explore My Work
		<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
	</Link>
    
	<Link
	href="#contact"
	className= " w-fit  inline-flex items-center gap-3 rounded-md border px-8 py-4  text-sm font-medium transition-all duration-300 border-white/10 bg-white/[0.03] text-white hover:border-lime-400/30 hover:bg-white/[0.05]"
	
	>
		Let&apos;s Connect 
		 <div className="relative flex h-4 w-4 items-center justify-center">
  
		  {/* Animated Ring */}
		  <span
		    className="
			absolute inline-flex h-full w-full
			animate-ping rounded-full
			bg-lime-300/20
		    "
		  />

		  {/* Solid Dot */}
		  <span
		    className="
			relative inline-flex h-2.5 w-2.5
			rounded-full bg-lime-300
		    "
		  />
	  </div>
	</Link>
     
    </div>
  );
}
