"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Variation 4: Centered Layout - Classic & Balanced
export default function HeroVariation4() {
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
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20"></div>
      
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Avatar - Centered */}
        <div 
          className={`mb-8 flex justify-center transition-all duration-1000 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 blur-2xl rounded-full"></div>
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-teal-500/30 shadow-2xl">
              <Image
                src="/avatar.jpg"
                alt="Tanishq Somani"
                fill
                className="object-cover"
                priority
                style={{ objectPosition: 'center 65%' }}
                sizes="(max-width: 768px) 192px, 224px"
              />
            </div>
          </div>
        </div>

        {/* Code greeting */}
        <div 
          className={`text-sm text-teal-400 font-mono mb-6 transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-gray-500">$</span>{" "}
          <span className="text-cyan-400">whoami</span>
          <br />
          <span className="text-teal-300">Tanishq Somani</span>
        </div>

        {/* Name */}
        <h1 
          className={`text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-teal-200 to-cyan-200 bg-clip-text text-transparent transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Tanishq Somani
        </h1>

        {/* Title */}
        <div 
          className={`mb-6 transition-all duration-1000 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Software Engineer
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-400 font-mono">
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded">
              Backend Systems
            </span>
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded">
              AI/ML
            </span>
            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded">
              Performance Optimization
            </span>
          </div>
        </div>

        {/* Description */}
        <p 
          className={`text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Building scalable systems, optimizing performance, and solving complex problems at the intersection of software engineering and AI.
        </p>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-600 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={scrollToProjects}
            aria-label="Scroll to projects section"
            className="px-8 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-lg border border-teal-500/50 hover:from-teal-500 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-teal-500/20 hover:scale-105"
          >
            View Projects →
          </button>
          <button
            onClick={downloadResume}
            aria-label="View resume PDF"
            className="px-8 py-3 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/10 hover:border-teal-500/50 transition-all duration-300 hover:scale-105"
          >
            View Resume
          </button>
        </div>
      </div>
    </section>
  );
}
