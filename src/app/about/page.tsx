import type { Metadata } from "next";

import AboutSection from "@/components/about/about-section";

import {
  ABOUT_INFO,
  STATS,
} from "@/data/about";

export const metadata: Metadata = {
  title: "About | Mukesh Kumar",
  description:
    "Learn more about Mukesh Kumar, Full Stack Developer.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden mx-auto max-w-7xl px-4 pt-10 pb-30 md:px-6">
      <AboutSection
        aboutInfo={ABOUT_INFO}
        stats={STATS}
      />
    </div>
  );
}