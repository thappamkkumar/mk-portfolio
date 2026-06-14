interface IntroContentProps {
  description: string[];
}

export default function IntroContent({
  description,
}: IntroContentProps) {
  return (
    <div
      className="
        
      "
    >
      <p className="mb-3 text-sm text-emerald-400">
        About Me
      </p>

      <h1
        className="
          text-4xl
          font-medium
          leading-tight
          md:text-5xl
        "
      >
        I&apos;m a Full Stack Developer who enjoys
        turning ideas into{" "}
        <span className="text-emerald-400">
          real-world products
        </span>
        .
      </h1>

      <div className="mt-6 space-y-4 text-zinc-400">
        {description.map((paragraph) => (
          <p key={paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}