import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";

export default function Home() {
  return (
    <main className="py-20">
      <Container>
        <SectionHeading
          title="Mukesh Kumar"
          subtitle="Full Stack Developer"
        />

        <div className="flex gap-4">
          <Button>View Work</Button>

          <Button variant="secondary">
            Let's Connect
          </Button>
        </div>
      </Container>
    </main>
  );
}
