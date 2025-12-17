"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ColorfulHero() {
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
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative pt-16 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 animate-pulse"></div>
      
      {/* Colorful shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-400 rounded-full blur-3xl opacity-40 animate-bounce" style={{ animationDuration: '3s' }}></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-400 rounded-full blur-3xl opacity-40 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Avatar with colorful border */}
        <div 
          className={`mb-8 flex justify-center transition-all duration-1000 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 blur-2xl opacity-60 animate-pulse"></div>
            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src="/avatar.jpg"
                alt="Tanishq Somani"
                width={176}
                height={176}
                className="object-cover w-full h-full"
                priority
                style={{ objectPosition: 'center 65%' }}
              />
            </div>
          </div>
        </div>

        {/* Name */}
        <h1 
          className={`text-5xl md:text-7xl font-bold mb-4 text-white transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            textShadow: '4px 4px 0px rgba(0,0,0,0.2)',
          }}
        >
          Tanishq Somani
        </h1>

        {/* Title */}
        <p 
          className={`text-2xl md:text-3xl text-white mb-8 font-bold transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            textShadow: '2px 2px 0px rgba(0,0,0,0.2)',
          }}
        >
          Software Engineer
        </p>

        {/* Description */}
        <p 
          className={`text-lg text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Building scalable systems, optimizing performance, and solving complex problems at the intersection of software engineering and AI.
        </p>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={scrollToProjects}
            aria-label="Scroll to projects section"
            className="px-8 py-4 bg-white text-purple-600 font-bold rounded-full hover:bg-yellow-400 hover:text-purple-900 transition-all duration-300 shadow-xl hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white"
            style={{
              transform: 'rotate(-2deg)',
            }}
          >
            View Projects
          </button>
          <button
            onClick={downloadResume}
            aria-label="View resume PDF"
            className="px-8 py-4 bg-cyan-500 text-white font-bold rounded-full hover:bg-pink-500 transition-all duration-300 shadow-xl hover:scale-110 focus:outline-none focus:ring-4 focus:ring-cyan-300"
            style={{
              transform: 'rotate(2deg)',
            }}
          >
            View Resume
          </button>
        </div>
      </div>
    </section>
  );
}



