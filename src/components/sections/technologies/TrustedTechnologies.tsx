import   TechnologyBackground   from "./TechnologyBackground";
import   TechnologyGrid   from "./TechnologyGrid";
import  TrustedTechnologiesHeader  from "./TrustedTechnologiesHeader";
import Container from "@/components/layout/Container";

export default function TrustedTechnologies() {
  return (
    <section
      aria-labelledby="trusted-technologies-heading"
      className="   border-y-2 border-white/10       bg-white/[0.06]  py-10"
    > 

       <Container>
          
            <TrustedTechnologiesHeader />

            <TechnologyGrid />
           
         
      </Container>
    </section>
  );
}
