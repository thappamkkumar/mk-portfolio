'use client'

import Container from "@/components/layout/Container";
import BackgroundGlow from "./BackgroundGlow";
import HeroContent from "./HeroContent";
import HeroVisual from "./HeroVisual";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section
      className="relative overflow-hidden   py-24 lg:py-32"
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
