// app/page.tsx

import HeroSection from "@/components/hero/hero-section";
import BackgroundGrid from "@/components/layout/background-grid";

export default function Home() {
  return (
    <section
      className="
        relative
        min-h-full
      "
    >
    	<BackgroundGrid />
      <HeroSection />
    </section>
  );
}
