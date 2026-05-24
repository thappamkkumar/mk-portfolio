"use client";

import clsx from "clsx";

import { navigationLinks } from "@/data/navigation";

interface Props {
  open: boolean;
  activeSection: string;
  closeMenu: () => void;
}

export default function MobileNav({
  open,
  activeSection,
  closeMenu,
}: Props) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeMenu}
        className={clsx(
          `
          fixed
          inset-0
          z-40
          bg-black/60
          backdrop-blur-sm
          transition-all
          duration-300
          lg:hidden
        `,
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      />

      {/* Sidebar */}
      <aside
        className={clsx(
          `
          fixed
          top-0
          right-0
          z-50
         
          h-screen
          w-[300px]
          
          border-l
          border-white/10
          bg-black
          
          backdrop-blur-2xl
          transition-all
          duration-300
          lg:hidden
        `,
          open
            ? "translate-x-0"
            : "translate-x-full"
        )}
      >
      <div className="w-full h-full bg-zinc-900  py-3  flex flex-col">
	  {/* Top */}
	  <div className="mb-10 px-6 flex items-center justify-between">
	    <div>
		<div
		  className="
		  flex
		  h-12
		  w-12
		  items-center
		  justify-center
		  rounded-md
		  border
		  border-white/10
		  bg-white/[0.03]
		  text-xl
		  font-bold
		  tracking-tight
		  text-white
		"
		>
		  MK
		</div>
	    </div>

	    <button
		onClick={closeMenu}
		className="
		flex
		h-10
		w-10
		items-center
		justify-center
		rounded-md
		border
		border-white/10
		bg-white/[0.1]
		text-zinc-400
		transition-all
		duration-300
		hover:text-white
		cursor-pointer
	    "
	    >
		✕
	    </button>
	  </div>

	  {/* Links */}
	  <nav className="flex flex-col gap-2 px-2">
	    {navigationLinks.map((link) => {
		const isActive =
		  activeSection === link.href;

		return (
		  <a
		    key={link.href}
		    href={link.href}
		    onClick={closeMenu}
		    className={clsx(
		      `
		      group
		      relative
		      flex
		      items-center
		      overflow-hidden
		      rounded-md
		      px-5
		      py-4
		      text-sm
		      font-medium
		      transition-all
		      duration-300
		    `,
		      isActive
		        ? `
		          bg-lime-300/10
		          text-lime-300
		        `
		        : `
		          text-zinc-400
		          hover:bg-white/[0.04]
		          hover:text-white
		        `
		    )}
		  >
		    {/* Active Glow */}
		    <span
		      className={clsx(
		        `
		        absolute
		        left-0
		        top-0
		        h-full
		        w-[3px]
		        rounded-full
		        bg-lime-300
		        transition-all
		        duration-300
		      `,
		        isActive
		          ? "opacity-100"
		          : "opacity-0"
		      )}
		    />

		    {link.label}
		  </a>
		);
	    })}
	  </nav>

	  {/* Bottom */}
	  <div className="mt-auto pt-10 px-6">
	    <a
		href="/resume/Mukesh_Kumar_Resume.pdf"
		target="_blank"
		className="
		flex
		w-full
		items-center
		justify-center
		rounded-md
		border
		border-lime-300/20
		bg-lime-300
		px-5
		py-4
		text-sm
		font-semibold
		text-black
		transition-all
		duration-300
		hover:scale-[1.02] hover:bg-lime-400
	    "
	    >
		View Resume
	    </a>
	  </div>
        </div>
      </aside>
    </>
  );
}
