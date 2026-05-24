import Header from "@/components/layout/header/Header";
import Hero from "@/components/sections/hero/Hero"; 
import TrustedTechnologies from "@/components/sections/technologies/TrustedTechnologies"; 

export default function Home() {
  return (
    <main className="h-[2000px]">
      <Header /> 
      <Hero />
      <TrustedTechnologies />
    </main>
    
  );
}
