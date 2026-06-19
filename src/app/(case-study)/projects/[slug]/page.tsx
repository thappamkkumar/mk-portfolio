

import { skillVilla } from "@/data/projects/skillvilla";
import Hero from "@/components/case-study/hero";
import Overview from "@/components/case-study/overview";
import Architecture from "@/components/case-study/architecture";
import PlatformModules from "@/components/case-study/platform-modules";
import Challenges from "@/components/case-study/challenges";
import Achievements from "@/components/case-study/achievements";
import Outcome from "@/components/case-study/outcome";
 

export default function ProjectPage() {
  const project = skillVilla;

  return (
    <>
      <Hero project={project} />
      <Overview project={project} />
      <Architecture project={project} />
      <PlatformModules project={project} />
      <Challenges project={project} />
      <Achievements project={project} />  
      <Outcome project={project} />
    </>
  );
}