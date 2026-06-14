// app/page.tsx

import HeroSection from "@/components/hero/hero-section";
import ProjectStrip from "@/components/hero/project-strip";

export default function Home() {
  return (
    <section className="relative min-h-screen"> 
      <ProjectStrip />
      <HeroSection />
    </section>
  );
}
