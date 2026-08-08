
"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Technology from "@/components/Technology";
import Projects from "@/components/Projects";
import Plans from "@/components/Plans";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-brand-bg">
  
      <Hero />
      <About />
      <Services />
      <Technology />
      <Projects />
      <Plans />

    </main>
  );
}
