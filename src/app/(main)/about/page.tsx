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
       <AboutSection
        aboutInfo={ABOUT_INFO}
        stats={STATS}
      />
     
  );
}