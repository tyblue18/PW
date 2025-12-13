"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Variation 2: Minimalist Dark - Clean & Professional
export default function HeroVariation2() {
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
      {/* Clean dark background */}
      <div className="absolute inset-0 bg-black"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="text-left">
            {/* Minimal greeting */}
            <div 
              className={`text-xs text-gray-500 font-mono mb-6 tracking-widest uppercase transition-all duration-1000 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Software Engineer
            </div>

            {/* Name - Clean & Bold */}
            <h1 
              className={`text-6xl md:text-8xl font-bold mb-6 text-white transition-all duration-1000 delay-100 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Tanishq
              <br />
              <span className="text-teal-400">Somani</span>
            </h1>

            {/* Title */}
            <div 
              className={`mb-8 transition-all duration-1000 delay-200 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <p className="text-xl text-gray-400 mb-4 leading-relaxed">
                Backend & AI Systems | Performance Optimization
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-teal-500/10 text-teal-400 text-xs rounded border border-teal-500/20">
                  Python
                </span>
                <span className="px-3 py-1 bg-teal-500/10 text-teal-400 text-xs rounded border border-teal-500/20">
                  C++
                </span>
                <span className="px-3 py-1 bg-teal-500/10 text-teal-400 text-xs rounded border border-teal-500/20">
                  AI/ML
                </span>
              </div>
            </div>

            {/* Description */}
            <p 
              className={`text-base text-gray-500 mb-10 leading-relaxed max-w-lg transition-all duration-1000 delay-300 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Building scalable systems, optimizing performance, and solving complex problems at the intersection of software engineering and AI.
            </p>

            {/* CTA Buttons - Minimal */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-400 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <button
                onClick={scrollToProjects}
                aria-label="Scroll to projects section"
                className="px-8 py-3 bg-teal-500 text-white font-medium rounded-sm hover:bg-teal-600 transition-all duration-300 border border-teal-500/50"
              >
                View Projects
              </button>
              <button
                onClick={downloadResume}
                aria-label="View resume PDF"
                className="px-8 py-3 bg-transparent text-gray-300 font-medium rounded-sm border border-gray-700 hover:border-gray-600 hover:text-white transition-all duration-300"
              >
                View Resume
              </button>
            </div>
          </div>

          {/* Right: Avatar - Clean Frame */}
          <div 
            className={`flex justify-center md:justify-end transition-all duration-1000 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 border-2 border-gray-800"></div>
              <div className="absolute inset-2 border border-teal-500/30"></div>
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/avatar.jpg"
                  alt="Tanishq Somani"
                  fill
                  className="object-cover"
                  priority
                  style={{ objectPosition: 'center 65%' }}
                  sizes="(max-width: 768px) 288px, 384px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
