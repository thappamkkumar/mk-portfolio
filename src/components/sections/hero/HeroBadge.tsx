export default function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-gray-800  bg-gray-800/20 px-4 py-2 text-xs text-zinc-300 backdrop-blur-xl">
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
      Available for Full-Time Remote Roles
    </div>
  );
}
