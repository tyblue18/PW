"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    // Replace with actual resume URL or file path
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Avatar/Photo placeholder */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-4xl font-bold text-white shadow-2xl border-4 border-white/10">
            T
          </div>
        </div>

        {/* Name */}
        <h1 
          className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Tanishq
        </h1>

        {/* Tagline */}
        <p 
          className={`text-xl md:text-2xl text-gray-300 mb-12 font-light transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Software Engineer | Backend & AI Systems | Performance Optimization
        </p>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={scrollToProjects}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            View Projects
          </button>
          <button
            onClick={downloadResume}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            Download Resume
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}

