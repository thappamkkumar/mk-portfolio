import {
  Code2,
  Database,
  Monitor,
  Wrench,
} from "lucide-react";

import Container from "../ui/container";

const expertise = [
  {
    title: "Frontend",
    icon: Monitor,

    skills: [
      { name: "React.js", level: "expert" },
      { name: "Next.js", level: "expert" },
      { name: "TypeScript", level: "medium" },
      { name: "Tailwind CSS", level: "expert" },
      { name: "Redux", level: "medium" },
      { name: "Framer Motion", level: "basic" },
    ],
  },

  {
    title: "Backend",
    icon: Code2,

    skills: [
      { name: "Laravel", level: "expert" },
      { name: "PHP", level: "expert" },
      { name: "REST APIs", level: "expert" },
      { name: "WebSocket", level: "medium" },
      { name: "WebRTC", level: "basic" },
      { name: "Axios", level: "medium" },
    ],
  },

  {
    title: "Databases",
    icon: Database,

    skills: [
      { name: "MySQL", level: "expert" },
      { name: "PostgreSQL", level: "medium" },
      { name: "Supabase", level: "medium" },
      { name: "phpMyAdmin", level: "basic" },
    ],
  },

  {
    title: "Tools & Platforms",
    icon: Wrench,

    skills: [
      { name: "Git & GitHub", level: "expert" },
      { name: "AWS", level: "basic" },
      { name: "Vercel", level: "medium" },
      { name: "VS Code", level: "expert" },
      { name: "Postman", level: "medium" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="pb-28">
      <Container>
        
        {/* Heading */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Technical Expertise
          </h2>

          <p className="mt-2 text-gray-500">
            Technologies and tools I work with
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          {expertise.map((section) => {
            const Icon = section.icon;

            return (
              <div
                key={section.title}
                className="rounded-[28px] border border-gray-200 bg-white p-7 shadow-sm"
              >
                
                {/* Top */}
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50">
                    <Icon
                      size={20}
                      className="text-red-500"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900">
                    {section.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="mt-7 flex flex-wrap gap-x-5 gap-y-4">
                  {section.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2"
                    >
                      
                      {/* Skill Level Dot */}
                      <div
                        className={`h-2 w-2 rounded-full ${
                          skill.level === "expert"
                            ? "bg-red-500"

                            : skill.level === "medium"
                            ? "bg-gray-500"

                            : "border border-black bg-white"
                        }`}
                      />

                      <span className="text-sm text-gray-600">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
