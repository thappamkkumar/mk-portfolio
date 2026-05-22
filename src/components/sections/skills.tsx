import Container from "../ui/container";

const skillGroups = [
  {
    title: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
    ],
  },

  {
    title: "Backend",
    items: [
      "Laravel",
      "PHP",
      "REST APIs",
      "Node.js",
      "Authentication",
    ],
  },

  {
    title: "Database",
    items: [
      "MySQL",
      "PostgreSQL",
      "Supabase",
      "Database Design",
    ],
  },

  {
    title: "Tools",
    items: [
      "Git",
      "GitHub",
      "Linux",
      "AWS",
      "Vercel",
    ],
  },
];

export default function Skills() {
  return (
    <section className="pb-28">
      <Container>
        
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          
          {/* LEFT */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
              Technical Expertise
            </p>

            <h2 className="mt-5 text-5xl font-black leading-tight text-gray-900">
              Technologies
              <br />
              I work with.
            </h2>

            <p className="mt-8 max-w-md text-lg leading-8 text-gray-500">
              I build scalable and modern applications
              using frontend, backend, database and
              cloud technologies.
            </p>
          </div>

          {/* RIGHT */}
          <div className="space-y-10">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="border-b border-gray-200 pb-8 last:border-none"
              >
                
                <h3 className="text-xl font-bold text-gray-900">
                  {group.title}
                </h3>

                <div className="mt-5 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-600 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
