import AboutApp
  from "@/components/apps/about/AboutApp";

import ProjectsApp
  from "@/components/apps/projects/ProjectsApp";

import ExperienceApp
  from "@/components/apps/experience/ExperienceApp";

import SkillsApp
  from "@/components/apps/skills/SkillsApp";
  
import ResumeApp
  from "@/components/apps/resume/ResumeApp";

import ContactApp
  from "@/components/apps/contact/ContactApp";

import type { AppId }
  from "@/types/app";

export const renderApp = (
  id: AppId
) => {
  switch (id) {
    case "about":
      return <AboutApp />;

    case "projects":
      return <ProjectsApp />;

    case "experience":
      return <ExperienceApp />;

    case "skills":
      return <SkillsApp />;
      
    case "resume":
      return <ResumeApp />;

    case "contact":
      return <ContactApp />;

    default:
      return null;
  }
};
