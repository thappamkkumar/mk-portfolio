"use client";

// components/layout/top-navbar.tsx

import {
  Home,
  BriefcaseBusiness,
  Code2,
  Mail,
  User,
  X,
  Layers,
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const initialTabs = [
  {
    title: "Home",
    icon: Home,
    link: "/",
  },
  {
    title: "About",
    icon: User,
    link: "/about",
  },
  {
    title: "Skills",
    icon: Code2,
    link: "/skills",
  },
  {
    title: "Projects",
    icon: Layers,
    link: "/projects",
  },
  {
    title: "Experience",
    icon: BriefcaseBusiness,
    link: "/experience",
  },
  {
    title: "Contact",
    icon: Mail,
    link: "/contact",
  },
];

const TopNavbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [tabs, setTabs] = useState(initialTabs);

  const handleCloseTab = (tabLink: string) => {
    setTabs((currentTabs) => {
      const nextTabs = currentTabs.filter((tab) => tab.link !== tabLink);

      if (nextTabs.length === 0 && typeof window !== "undefined") {
        const win = window.open("", "_self");
        if (win) {
          win.close();
        }
        window.location.href = "about:blank";
      }

      if (pathname === tabLink && nextTabs.length > 0) {
        router.push(nextTabs[0].link);
      }

      return nextTabs;
    });
  };
  return (
    <header className="bg-zinc-500/50 backdrop-blur-2xl sticky top-0 z-40">
      <div className="relative flex h-full items-center justify-start gap-10 px-6">
        {/* Left Traffic Buttons */}
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <div className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>

        {/* Browser Tabs */}
        <div className="flex pt-3 items-center">
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            const isActive =
              pathname === tab.link ||
              (tab.link !== "/" && pathname.startsWith(tab.link));

            return (
              <div key={tab.title} className="flex items-center">
                <Link
                  href={tab.link}
                  className={`
                    group
                    relative
                    flex
                    items-center
                    gap-2
                    px-4
                    py-3
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    overflow-visible
                    ${
                      isActive
                        ? "text-white"
                        : "text-zinc-400 hover:text-zinc-200"
                    }
                  `}
                  style={isActive ? {
                    borderRadius: "8px 8px 0 0",
                    background: "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.3) 100%)",
                    boxShadow: "inset 0 -8px 8px -8px rgba(0,0,0,0.5)"
                  } : {}}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  <span className="flex-1">{tab.title}</span>

                  {/* Close Button */}
                  <button
                    className="ml-1 p-1 rounded  transition-all duration-200 hover:bg-white/20 text-zinc-400  hover:text-white  opacity-60   group-hover:opacity-100 "
                    onClick={(e) => {
                      e.preventDefault();
                      handleCloseTab(tab.link);
                    }}
                    aria-label={`Close ${tab.title} tab`}
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                </Link>

                {/* Separator */}
                {index < tabs.length - 1 && (
                  <div className="h-6 w-px bg-zinc-600/50" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default TopNavbar;
