export default function SkillsHeader() {
  return (
    <section className="pb-16 md:pb-24">
      <p
        className="
          mb-4
          text-sm
          font-medium
          uppercase
          tracking-[0.2em]
          text-emerald-400
        "
      >
        My Toolbox
      </p>

      <h1
        className="
          max-w-4xl
          text-5xl
          font-semibold
          tracking-tight
          md:text-6xl
          lg:text-7xl
        "
      >
        Skills & Technologies
      </h1>

      <p
        className="
          mt-6
          max-w-2xl
          text-base
          leading-relaxed
          text-white/70
          md:text-lg
        "
      >
        Technologies, frameworks, databases, and
        tools I use to design, develop, deploy,
        and maintain modern web applications.
      </p>
    </section>
  );
}