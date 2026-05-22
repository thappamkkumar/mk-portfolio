import Container from "../ui/container";
import SectionHeading from "../ui/section-heading";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Freelance & Personal Projects",
    period: "2023 - Present",
  },
  {
    role: "Frontend Developer",
    company: "Modern Web Applications",
    period: "2022 - 2023",
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Laravel",
  "PHP",
  "MySQL",
  "Node.js",
];

export default function About() {
  return (
    <section className="pb-24">
      <Container>
        <SectionHeading
          title="About Me"
          subtitle="Passionate about building scalable and modern web applications."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          
          {/* Left */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900">
              Who I Am
            </h3>

            <p className="mt-6 leading-8 text-gray-500">
              I am a full stack developer focused on
              creating modern, performant, and user-friendly
              applications. I enjoy solving real-world
              problems and working with modern technologies.
            </p>

            <p className="mt-4 leading-8 text-gray-500">
              My main focus is frontend engineering with
              strong backend understanding using Laravel,
              APIs, databases, and scalable architecture.
            </p>
          </div>

          {/* Right */}
          <div className="space-y-6">
            
            {/* Experience */}
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900">
                Experience
              </h3>

              <div className="mt-6 space-y-6">
                {experiences.map((item) => (
                  <div
                    key={item.role}
                    className="border-b border-gray-100 pb-4 last:border-none"
                  >
                    <h4 className="font-semibold text-gray-900">
                      {item.role}
                    </h4>

                    <p className="mt-1 text-gray-500">
                      {item.company}
                    </p>

                    <span className="mt-2 inline-block text-sm text-red-500">
                      {item.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900">
                Tech Stack
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
