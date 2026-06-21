interface CodeSnippetCardProps {
  className?: string;
}

export default function CodeSnippetCard({
  className,
}: CodeSnippetCardProps) {
  const items = [
    {
      title: "Frontend",
      value:
        "React, Next.js, TypeScript, Tailwind CSS",
    },
    {
      title: "Backend",
      value:
        "Laravel, PHP, REST APIs",
    },
    {
      title: "Database",
      value:
        "PostgreSQL, MySQL",
    },
    {
      title: "Currently Exploring",
      value:
        "Node.js, Docker, AWS",
    },
  ];

  return (
    <section
      className={`
        rounded-3xl
        border
        border-white/10
        bg-white/2
        p-6
        ${className}
      `}
    >
      <p
        className="
          text-xs
          uppercase
          tracking-[0.2em]
          text-emerald-400
        "
      >
        Developer Snapshot
      </p>

      <div className="mt-6 space-y-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="
              border-b
              border-white/10
              pb-5
              last:border-0
              last:pb-0
            "
          >
            <h3
              className="
                text-sm
                font-medium
                text-white
              "
            >
              {item.title}
            </h3>

            <p
              className="
                mt-2
                text-sm
                leading-relaxed
                text-white/60
              "
            >
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}