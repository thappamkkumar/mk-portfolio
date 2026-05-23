"use client";

import { useEffect, useState } from "react";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import MobileMenuButton from "./MobileMenuButton";

import ResumeButton from "@/components/ui/ResumeButton";

import { navigationLinks } from "@/data/navigation";

import { getActiveSection } from "@/lib/get-active-section";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [activeSection, setActiveSection] =
    useState("");

  useEffect(() => {
    const sections = navigationLinks.map(
      (link) =>
        document.querySelector(link.href)
    );

    const observer =
      new IntersectionObserver(
        (entries) =>
          getActiveSection(
            entries,
            setActiveSection
          ),
        {
          rootMargin:
            "-40% 0px -50% 0px",
        }
      );

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full  bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <DesktopNav
          activeSection={activeSection}
        />

        <div className="flex items-center gap-3">
          <ResumeButton />

          <MobileMenuButton
            isOpen={mobileMenuOpen}
            onClick={() =>
              setMobileMenuOpen(
                !mobileMenuOpen
              )
            }
          />
        </div>
      </div>

      <MobileNav 
        open={mobileMenuOpen}
        activeSection={activeSection}
        closeMenu={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}
