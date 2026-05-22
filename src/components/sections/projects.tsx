import {
  ArrowUpRight,
  Globe,
  CircleCheck,
} from "lucide-react";

import Container from "../ui/container";
import SectionHeading from "../ui/section-heading";

const projects = [
  {
    title: "SkillVilla",
    category:
      "Professional Media & Networking Platform",

    description:
      "A professional networking and media-sharing platform with communities, posts, jobs and real-time interactions.",

    features: [
      "Real-time Chat",
      "Communities",
      "Stories & Posts",
      "WebRTC Calls",
    ],

    tech: [
      "React.js",
      "Laravel",
      "MySQL",
      "WebSocket",
    ],
  },

  {
    title: "ShopHub",
    category:
      "Multi-Vendor E-Commerce Platform",

    description:
      "A scalable multi-vendor marketplace with vendor dashboards, order management and role-based access control.",

    features: [
      "Vendor Dashboard",
      "Order Management",
      "Secure Auth",
      "API Integrations",
    ],

    tech: [
      "Laravel",
      "PHP",
      "JavaScript",
      "MySQL",
    ],
  },

  {
    title: "VK Salon",
    category:
      "Appointment & Business Platform",

    description:
      "A modern salon showcase and booking platform with admin workflows and service management.",

    features: [
      "Booking System",
      "Admin Panel",
      "Responsive UI",
      "Supabase",
    ],

    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "PostgreSQL",
    ],
  },
];

export default function Projects() {
  return (
    <section className="pb-28">
      <Container>
        
        {/* Heading */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          
          <SectionHeading
            title="Projects"
            subtitle="Some of the things I've built"
          />

          <button className="inline-flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50">
            View All Projects
            <ArrowUpRight size={18} />
          </button>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-sm"
            >
              
              {/* Image */}
              <div className="aspect-video bg-gray-100" />

              {/* Content */}
              <div className="p-7">
                
                {/* Title */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-red-500">
                    {project.category}
                  </p>
                </div>

                {/* Description */}
                <p className="mt-6 leading-7 text-gray-500">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mt-6 grid gap-3">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >
                      <CircleCheck
                        size={16}
                        className="text-red-500"
                      />

                      <span className="text-sm text-gray-600">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-8 flex items-center gap-6">
                  
                  <button className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 transition hover:text-black">
                    <ArrowUpRight size={16} />
                    Live Demo
                  </button>

                  <button className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 transition hover:text-black">
                    <Globe size={16} />
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
