"use client";

import { useEffect, useState } from "react";
import Container from "../ui/container";
import { Download, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navItems.map((item) =>
      document.getElementById(item.id)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full">
        <div className="absolute inset-0 border-b border-black/[0.04] bg-white/75 backdrop-blur-xl" />

        <Container>
          <div className="relative flex h-[78px] items-center justify-between">

            {/* LEFT */}
            <div className="group flex items-center gap-2">
  
		  {/* Logo */}
		  <div
		    className="
			relative flex h-10 w-10 items-center justify-center
			overflow-hidden rounded-full
			bg-gradient-to-br from-red-500 via-red-600 to-red-700
			shadow-[0_10px_30px_rgba(239,68,68,0.28)]
			transition-all duration-300
			group-hover:scale-105
			group-hover:shadow-[0_15px_40px_rgba(239,68,68,0.35)]
		    "
		  >
		    
		    {/* Glow */}
		    <div
			className="
			  absolute inset-0
			  bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_70%)]
			"
		    />

		    <span
			className="
			  relative text-md
			  font-black tracking-[-0.08em]
			  text-white
			"
		    >
			MK
		    </span>
		  </div>

		  {/* Text */}
		  <div className="hidden flex-col sm:flex">
		    
		    <span
			className="
			  text-md
			  font-bold
			  leading-none
			  tracking-[-0.03em]
			  text-zinc-900
			"
		    >
			Mukesh Kumar
		    </span>
		 
		  </div>
		</div>

            {/* DESKTOP NAV */}
            <nav className="hidden items-center gap-8 lg:flex xl:gap-10">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`relative text-sm  transition-all duration-300 ${
                      isActive
                        ? "text-red-600 font-bold"
                        : "text-zinc-950/75 hover:text-zinc-950 font-medium "
                    }`}
                  >
                    {item.label}

                    {isActive && (
                      <span className="absolute -bottom-[5px] left-0 h-[2px] w-full rounded-full bg-red-600" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* RIGHT */}
            <div className="flex items-center gap-3">

              <button
                className={`
                  hidden md:inline-flex
                  items-center gap-2
                  rounded-md
                  bg-red-600
                  px-5 py-3
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_10px_30px_rgba(255,45,45,0.20)]
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-red-700
                  cursor-pointer
                `}
              >
                Download Resume
                <Download size={15} />
              </button>

              {/* MOBILE BUTTON */}
              <button
                onClick={() => setOpen(true)}
                className={`
                  flex h-10 w-10 items-center justify-center
                  rounded-xl border border-black/[0.06]
                  bg-white/80 text-zinc-800
                  transition-all duration-300
                  hover:bg-black/[0.03]
                  lg:hidden
                  cursor-pointer
                `}
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-300 lg:hidden ${
          open
            ? "pointer-events-auto bg-black/30 backdrop-blur-sm"
            : "pointer-events-none bg-transparent"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`
            absolute right-0 top-0 h-full w-[290px]
            border-l border-black/[0.06]
            bg-white/95 backdrop-blur-2xl
            shadow-[-10px_0_50px_rgba(0,0,0,0.08)]
            transition-transform duration-300 ease-out
            ${open ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-black/[0.05] px-6 py-5">
            <div className="group flex items-center gap-2">
  
		  {/* Logo */}
		  <div
		    className="
			relative flex h-10 w-10 items-center justify-center
			overflow-hidden rounded-full
			bg-gradient-to-br from-red-500 via-red-600 to-red-700
			shadow-[0_10px_30px_rgba(239,68,68,0.28)]
			transition-all duration-300
			group-hover:scale-105
			group-hover:shadow-[0_15px_40px_rgba(239,68,68,0.35)]
		    "
		  >
		    
		    {/* Glow */}
		    <div
			className="
			  absolute inset-0
			  bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_70%)]
			"
		    />

		    <span
			className="
			  relative text-md
			  font-black tracking-[-0.08em]
			  text-white
			"
		    >
			MK
		    </span>
		  </div>

		  {/* Text */}
		  <div className="  flex-col  ">
		    
		    <span
			className="
			  text-md
			  font-bold
			  leading-none
			  tracking-[-0.03em]
			  text-zinc-900
			"
		    >
			Mukesh Kumar
		    </span>
		 
		  </div>
		</div>

            <button
              onClick={() => setOpen(false)}
              className={`
                flex h-10 w-10 items-center justify-center
                rounded-xl border border-black/[0.06] text-zinc-800 cursor-pointer
                hover:bg-black/[0.03]
              `}
            >
              <X size={18} />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col px-6 py-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`
                    flex items-center justify-between
                    rounded-xl px-4 py-4
                    text-[15px] font-medium
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-red-600/10 text-red-600"
                        : "text-zinc-950 hover:bg-black/[0.03]"
                    }
                  `}
                >
                  {item.label}

                  {isActive && (
                    <span className="h-2 w-2 rounded-full bg-[#ff2d2d]" />
                  )}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
