import { ABOUT_INFO } from "@/data/about";

export default function IntroContent() {
  return (
    <section>
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
        About Me
      </p>

      <h1
        className="
          max-w-3xl
          text-4xl
          font-medium
          leading-tight
          tracking-tight
          md:text-5xl
        "
      >
        {ABOUT_INFO.headline}
      </h1>

      <div
        className="
          mt-8
          max-w-3xl
          space-y-5
          leading-relaxed
          text-white/70
        "
      >
        {ABOUT_INFO.description.map((paragraph) => (
          <p key={paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}