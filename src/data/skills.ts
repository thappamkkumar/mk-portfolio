import { SkillCategory } from "@/types/skill";

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    skills: [
      { name: "JavaScript", level: "comfortable" },
      { name: "TypeScript", level: "comfortable" },
      { name: "PHP", level: "comfortable" },
      { name: "HTML5", level: "comfortable" },
      { name: "CSS3", level: "comfortable" },
      { name: "Sass", level: "working" },
    ],
  },

  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "React.js", level: "comfortable" },
      { name: "Next.js", level: "comfortable" },
      { name: "Tailwind CSS", level: "comfortable" },
      { name: "Bootstrap", level: "comfortable" },
      { name: "Redux Toolkit", level: "working" },
      { name: "Framer Motion", level: "working" },
    ],
  },

  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "Laravel", level: "comfortable" },
      { name: "REST APIs", level: "comfortable" },
      { name: "JWT Authentication", level: "working" },
      { name: "WebSockets", level: "working" },
      { name: "WebRTC", level: "working" },
    ],
  },

  {
    id: "databases",
    title: "Databases",
    skills: [
      { name: "MySQL", level: "comfortable" },
      { name: "PostgreSQL", level: "comfortable" },
      { name: "Supabase", level: "working" },
      { name: "MongoDB", level: "familiar" },
    ],
  },

  {
    id: "tools",
    title: "Tools & Platforms",
    skills: [
      { name: "Git", level: "comfortable" },
      { name: "GitHub", level: "comfortable" },
      { name: "VS Code", level: "comfortable" },
      { name: "Postman", level: "comfortable" },
      { name: "Vercel", level: "comfortable" },
    ],
  },

  {
    id: "deployment",
    title: "DevOps & Deployment",
    skills: [
      { name: "Linux", level: "working" },
      { name: "Docker", level: "working" },
      { name: "AWS", level: "familiar" },
    ],
  },
];
