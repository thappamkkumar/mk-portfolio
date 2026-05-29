// app/page.tsx

import HeroSection from "@/components/hero/hero-section";

export default function Home() {
  return (
    <section
      className="
        relative
        min-h-full
      "
    >
      <HeroSection />
    </section>
  );
}
