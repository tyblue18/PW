"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Variation 3: Neon Tech - Bold & Vibrant
export default function HeroVariation3() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden pt-16">
      {/* Neon background */}
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(20,255,236,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.15),transparent_50%)]"></div>
      
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ffea_1px,transparent_1px),linear-gradient(to_bottom,#00ffea_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="text-left">
            {/* Neon greeting */}
            <div 
              className={`text-sm text-cyan-400 font-mono mb-4 transition-all duration-1000 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="text-purple-400">&gt;</span>{" "}
              <span className="text-cyan-300">Hello World</span>
              <span className="text-purple-400 animate-pulse">_</span>
            </div>

            {/* Name with glow */}
            <h1 
              className={`text-5xl md:text-7xl font-bold mb-4 transition-all duration-1000 delay-100 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="text-white drop-shadow-[0_0_20px_rgba(20,255,236,0.5)]">Tanishq</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 drop-shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                Somani
              </span>
            </h1>

            {/* Title */}
            <div 
              className={`mb-6 transition-all duration-1000 delay-200 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <p className="text-2xl md:text-3xl font-semibold text-white mb-3">
                Software Engineer
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded border border-cyan-500/50 shadow-[0_0_10px_rgba(20,255,236,0.3)]">
                  Backend
                </span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded border border-purple-500/50 shadow-[0_0_10px_rgba(139,92,246,0.3)]">
                  AI/ML
                </span>
                <span className="px-3 py-1 bg-pink-500/20 text-pink-300 text-sm rounded border border-pink-500/50 shadow-[0_0_10px_rgba(236,72,153,0.3)]">
                  HPC
                </span>
              </div>
            </div>

            {/* Description */}
            <p 
              className={`text-lg text-gray-300 mb-8 leading-relaxed transition-all duration-1000 delay-300 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Building scalable systems, optimizing performance, and solving complex problems at the intersection of software engineering and AI.
            </p>

            {/* CTA Buttons - Neon */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-400 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <button
                onClick={scrollToProjects}
                aria-label="Scroll to projects section"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded border border-cyan-400/50 hover:shadow-[0_0_20px_rgba(20,255,236,0.5)] transition-all duration-300 hover:scale-105"
              >
                View Projects →
              </button>
              <button
                onClick={downloadResume}
                aria-label="View resume PDF"
                className="px-6 py-3 bg-black/50 backdrop-blur-sm text-white font-semibold rounded border border-purple-500/50 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300 hover:scale-105"
              >
                View Resume
              </button>
            </div>
          </div>

          {/* Right: Avatar - Neon Frame */}
          <div 
            className={`flex justify-center md:justify-end transition-all duration-1000 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="relative">
              {/* Neon glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-3xl rounded-lg"></div>
              {/* Avatar container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden border-2 border-cyan-500/50 shadow-[0_0_30px_rgba(20,255,236,0.3)]">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10"></div>
                <div className="absolute inset-0 pt-6">
                  <Image
                    src="/avatar.jpg"
                    alt="Tanishq Somani"
                    fill
                    className="object-cover"
                    priority
                    style={{ objectPosition: 'center 65%', transform: 'scale(1.5)' }}
                    sizes="(max-width: 768px) 256px, 320px"
                  />
                </div>
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-purple-400"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-400"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
