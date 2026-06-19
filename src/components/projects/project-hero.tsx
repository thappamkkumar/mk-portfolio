// components/projects/project-hero.tsx

export default function ProjectHero() {
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
        Projects
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
        Things I&apos;ve Built
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
        A collection of products, platforms, and applications
        I&apos;ve designed and developed using modern web
        technologies. From business websites and e-commerce
        platforms to full-scale SaaS products and social
        applications.
      </p>
    </section>
  );
}