import Hero from "@/components/Hero";
import TechnicalSkills from "@/components/TechnicalSkills";
import FeaturedProjects from "@/components/FeaturedProjects";
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TechnicalSkills />
      <FeaturedProjects />
      <AboutMe />
      <Contact />
    </main>
  );
}



