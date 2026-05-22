import {
  BriefcaseBusiness,
  CircleCheck,
} from "lucide-react";

import Container from "../ui/container";
import SectionHeading from "../ui/section-heading";

const points = [
  "Designed and developed full stack web applications using Laravel, React.js, Next.js, PHP and MySQL.",

  "Built scalable systems including authentication, admin dashboards, vendor management and RESTful APIs.",

  "Implemented real-time communication using WebSocket and WebRTC.",

  "Developed responsive UI with reusable components and modern frontend technologies.",

  "Worked on database design, API integrations, application workflows and deployments.",

  "Built and deployed multiple production-ready applications independently.",
];

const techStack = [
  "Laravel",
  "React.js",
  "Next.js",
  "PHP",
  "MySQL",
  "WebSocket",
  "WebRTC",
  "Tailwind CSS",
  "Git",
  "AWS",
];

export default function Experience() {
  return (
    <section className="pb-28">
      <Container>
        
        {/* Heading */}
        <SectionHeading
          title="Experience"
          subtitle="My professional journey"
        />

        <div className="relative mt-14">
          
          {/* Timeline line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gray-200 lg:block" />

          <div className="flex gap-8">
            
            {/* Timeline Icon */}
            <div className="relative z-10 hidden lg:flex">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500 text-white shadow-lg">
                <BriefcaseBusiness size={24} />
              </div>
            </div>

            {/* Main Card */}
            <div className="flex-1 rounded-[32px] border border-gray-200 bg-white p-8 shadow-sm lg:p-10">
              
              {/* Top */}
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    Independent Full Stack Developer
                  </h3>

                  <p className="mt-2 font-medium text-red-500">
                    Self-Employed
                  </p>
                </div>

                <span className="text-sm font-semibold text-red-500">
                  2022 — Present
                </span>
              </div>

              {/* Grid Points */}
              <div className="mt-10 grid gap-6 lg:grid-cols-2">
                {points.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3"
                  >
                    <CircleCheck
                      size={18}
                      className="mt-1 shrink-0 text-red-500"
                    />

                    <p className="leading-7 text-gray-500">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="mt-10">
                <p className="text-sm font-semibold text-gray-700">
                  Tech Stack:
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
