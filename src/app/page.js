import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import WhatIBuild from "@/sections/WhatIBuild";
import HowIBuild from "@/sections/HowIBuild";
import QuickStats from "@/sections/QuickStats";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Education from "@/sections/Education";
import Certifications from "@/sections/Certifications";
import Contact from "@/sections/Contact";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main className="relative bg-background text-text-primary selection:bg-accent/30 selection:text-white overflow-hidden">
      <Navbar />
      <Hero />
      <WhatIBuild />
      <SectionDivider />
      <HowIBuild />
      <SectionDivider />
      <QuickStats />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Education />
      <SectionDivider />
      <Certifications />
      <Contact />
    </main>
  );
}
