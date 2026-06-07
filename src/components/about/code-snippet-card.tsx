interface CodeSnippetCardProps {
  className?: string;
}

export default function CodeSnippetCard({
  className,
}: CodeSnippetCardProps) {
  return (
    <div
      className={`
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-[#0d1117]
        ${className}
      `}
    >
      <div
        className="
          flex
          items-center
          gap-2
          border-b
          border-white/10
          px-4
          py-3
        "
      >
        <div className="h-3 w-3 rounded-full bg-red-500" />
        <div className="h-3 w-3 rounded-full bg-yellow-500" />
        <div className="h-3 w-3 rounded-full bg-green-500" />
      </div>

      <pre className="overflow-x-auto p-6 text-sm leading-7">
        <code>
          <span className="text-purple-400">
            const
          </span>{" "}
          <span className="text-blue-400">
            developer
          </span>{" "}
          = {"{"}
          {"\n"}
          {"  "}
          <span className="text-green-400">
            name
          </span>
          :{" "}
          <span className="text-orange-300">
            "Mukesh Kumar"
          </span>
          ,
          {"\n"}
          {"  "}
          <span className="text-green-400">
            role
          </span>
          :{" "}
          <span className="text-orange-300">
            "Full Stack Developer"
          </span>
          ,
          {"\n"}
          {"  "}
          <span className="text-green-400">
            stack
          </span>
          : [
          {"\n"}
          {"    "}
          <span className="text-orange-300">
            "Next.js"
          </span>
          ,
          {"\n"}
          {"    "}
          <span className="text-orange-300">
            "TypeScript"
          </span>
          ,
          {"\n"}
          {"    "}
          <span className="text-orange-300">
            "Laravel"
          </span>
          ,
          {"\n"}
          {"    "}
          <span className="text-orange-300">
            "PostgreSQL"
          </span>
          ,
          {"\n"}
          {"  "}],
          {"\n"}
          {"}"}
        </code>
      </pre>
    </div>
  );
}