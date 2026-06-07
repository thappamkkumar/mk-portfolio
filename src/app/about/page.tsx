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
    <main className="mx-auto max-w-7xl px-4 py-10 md:px-6">
      <AboutSection
        aboutInfo={ABOUT_INFO}
        stats={STATS}
      />
    </main>
  );
}