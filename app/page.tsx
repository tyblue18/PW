import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Starfield from "@/components/Starfield";
import Hero from "@/components/Hero";

// Lazy load below-the-fold components for better initial load performance
const TechnicalSkills = dynamic(() => import("@/components/TechnicalSkills"), {
  loading: () => <div className="py-24" />,
});
const FeaturedProjects = dynamic(() => import("@/components/FeaturedProjects"), {
  loading: () => <div className="py-24" />,
});
const AboutMe = dynamic(() => import("@/components/AboutMe"), {
  loading: () => <div className="py-24" />,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <div className="py-24" />,
});

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Starfield />
      <Navigation />
      <Hero />
      <TechnicalSkills />
      <FeaturedProjects />
      <AboutMe />
      <Contact />
    </main>
  );
}




