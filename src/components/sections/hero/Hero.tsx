'use client'

import Container from "@/components/layout/Container";
import BackgroundGlow from "./BackgroundGlow";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section
      className="relative overflow-hidden   pt-24 lg:pt-32  pb-10"
      aria-label="Hero Section"
    >
       
      <Container>
        <div className="grid items-start  gap-10 lg:grid-cols-[1.1fr_0.9fr] ">
          <HeroContent />

          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
