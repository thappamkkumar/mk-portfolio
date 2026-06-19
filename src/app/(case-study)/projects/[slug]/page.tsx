import { notFound } from "next/navigation";

import { projects } from "@/data/projects/index";

import Hero from "@/components/case-study/hero";
import ScreenshotGallery from "@/components/case-study/screenshot-gallery";
import Overview from "@/components/case-study/overview";
import Architecture from "@/components/case-study/architecture";
import PlatformModules from "@/components/case-study/platform-modules";
import Challenges from "@/components/case-study/challenges";
import Achievements from "@/components/case-study/achievements";
import Outcome from "@/components/case-study/outcome";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project =
    projects[slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <>
      <Hero project={project} />

      <Overview project={project} />

      <ScreenshotGallery project={project} />

      <Architecture project={project} />

      <PlatformModules project={project} />

      <Challenges project={project} />

      <Achievements project={project} />

      <Outcome project={project} />
    </>
  );
}