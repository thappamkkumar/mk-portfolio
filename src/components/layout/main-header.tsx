"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { title: "About", link: "/about" },
  { title: "Skills", link: "/skills" },
  { title: "Projects", link: "/projects" },
  { title: "Experience", link: "/experience" },
  { title: "Contact", link: "/contact" },
];

export default function MainHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <Link
            href="/"
            className="font-mono text-lg font-semibold tracking-tight text-white"
          >
            {"<"}MK
            <span className="text-emerald-400">.</span>
            {" />"}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => {
              const isActive =
                pathname === item.link ||
                (item.link !== "/" && pathname.startsWith(item.link));

              return (
                <Link
                  key={item.link}
                  href={item.link}
                  className={`
                    group relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-white/6 text-white"
                        : "text-zinc-400 hover:text-white"
                    }
                  `}
                >
                  <span
                    className={`
                      h-1.5 w-1.5 rounded-full transition-all duration-300
                      ${
                        isActive
                          ? "bg-emerald-400 scale-100"
                          : "bg-zinc-700 scale-0 group-hover:scale-100"
                      }
                    `}
                  />

                  <span>{item.title}</span>

                  <span
                    className={`
                      absolute inset-0 -z-10 rounded-xl transition-all duration-300
                      ${
                        isActive
                          ? "bg-white/4"
                          : "bg-transparent group-hover:bg-white/3"
                      }
                    `}
                  />

                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-px bg-emerald-400" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="rounded-xl p-2 text-zinc-300 transition-colors hover:bg-white/5 md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-100 md:hidden transition-all duration-300 ${
          isOpen
            ? "pointer-events-auto translate-x-0 opacity-100"
            : "pointer-events-none translate-x-full opacity-0"
        }`}
      >
        <div className="flex h-full flex-col bg-zinc-950/95 backdrop-blur-2xl">
          {/* Top Bar */}
          <div className="flex h-16 items-center justify-between border-b border-white/10 px-6">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="font-mono text-lg font-semibold"
            >
              {"<"}MK
              <span className="text-emerald-400">.</span>
              {" />"}
            </Link>

            <button
              onClick={() => setIsOpen(false)}
              className="rounded-xl p-2 hover:bg-white/5"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex flex-1 flex-col justify-center px-6">
            <div className="space-y-2">
              {navItems.map((item, index) => {
                const isActive =
                  pathname === item.link ||
                  (item.link !== "/" && pathname.startsWith(item.link));

                return (
                  <Link
                    key={item.link}
                    href={item.link}
                    onClick={() => setIsOpen(false)}
                    className={`
                      group flex items-center justify-between rounded-2xl px-5 py-4
                      text-2xl font-medium transition-all duration-300
                      ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-zinc-400 hover:bg-white/5 hover:text-white"
                      }
                    `}
                  >
                    <div className="flex items-center">
                      <span className="mr-4 text-sm text-zinc-600">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>

                      <span
                        className={`
                          mr-4 h-2 w-2 rounded-full transition-all
                          ${
                            isActive
                              ? "bg-emerald-400"
                              : "bg-transparent group-hover:bg-zinc-500"
                          }
                        `}
                      />

                      {item.title}
                    </div>
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Footer */}
          <div className="border-t border-white/10 p-6">
            <div className="flex flex-wrap gap-5 text-sm text-zinc-400">
              <Link
                href="https://github.com"
                target="_blank"
                className="hover:text-white"
              >
                GitHub
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-white"
              >
                LinkedIn
              </Link>

              <Link href="/resume" className="hover:text-white">
                Resume
              </Link>
            </div>

            <p className="mt-4 text-xs text-zinc-500">
              Mukesh Kumar · Full Stack Developer
            </p>
          </div>
        </div>
      </div>
    </>
  );
}