import { SkillCategory } from "@/types/skill";

export const skillCategories: SkillCategory[] = [
 {
  id: "languages",
  title: "Languages",
  skills: [
    { id: "javascript", name: "JavaScript", level: "comfortable" },
    { id: "typescript", name: "TypeScript", level: "working" },
    { id: "php", name: "PHP", level: "comfortable" },
    { id: "html5", name: "HTML5", level: "comfortable" },
    { id: "css3", name: "CSS3", level: "comfortable" },
    { id: "sass", name: "Sass", level: "working" },
  ],
},

  {
  id: "frontend",
  title: "Frontend",
  skills: [
    { id: "react", name: "React.js", level: "comfortable" },
    { id: "nextjs", name: "Next.js", level: "working" },
    { id: "tailwind", name: "Tailwind CSS", level: "working" },
    { id: "bootstrap", name: "Bootstrap", level: "comfortable" },
    { id: "redux-toolkit", name: "Redux Toolkit", level: "working" },
    { id: "framer-motion", name: "Framer Motion", level: "working" },
  ],
},

  {
  id: "backend",
  title: "Backend",
  skills: [
    { id: "laravel", name: "Laravel", level: "comfortable" },
    { id: "rest-api", name: "REST APIs", level: "comfortable" },
    { id: "jwt-auth", name: "JWT Authentication", level: "working" },
    { id: "websocket", name: "WebSockets", level: "working" },
    { id: "webrtc", name: "WebRTC", level: "working" },
  ],
},

 {
  id: "databases",
  title: "Databases",
  skills: [
    { id: "mysql", name: "MySQL", level: "comfortable" },
    { id: "postgresql", name: "PostgreSQL", level: "working" },
    { id: "supabase", name: "Supabase", level: "working" },
  ],
},

 {
  id: "tools",
  title: "Tools & Platforms",
  skills: [
    { id: "git", name: "Git", level: "comfortable" },
    { id: "github", name: "GitHub", level: "comfortable" },
    { id: "vs-code", name: "VS Code", level: "comfortable" },
    { id: "postman", name: "Postman", level: "familiar" },
    { id: "vercel", name: "Vercel", level: "working" },
  ],
},

  {
  id: "deployment",
  title: "DevOps & Deployment",
  skills: [
    { id: "linux", name: "Linux", level: "familiar" },
    { id: "aws", name: "AWS", level: "familiar" },
  ],
},
];
