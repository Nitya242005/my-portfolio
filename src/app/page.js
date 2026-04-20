import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Certifications from "@/sections/Certifications";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-background text-text-primary selection:bg-accent/30 selection:text-white overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-20">
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-violet-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/10 blur-[150px] rounded-full" />
      </div>

      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Certifications />
      <Footer />
    </main>
  );
}
