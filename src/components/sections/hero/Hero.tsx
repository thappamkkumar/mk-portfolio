import Container from "@/components/layout/Container";
import BackgroundGlow from "./BackgroundGlow";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden   bg-black py-24 lg:py-32"
      aria-label="Hero Section"
    >
        
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-[1.1fr_0.9fr]">
          <HeroContent />

          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
