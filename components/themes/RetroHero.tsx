"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function RetroHero() {
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
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative pt-16 bg-gradient-to-br from-purple-900 via-pink-900 to-cyan-900">
      {/* CRT scanlines effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.1) 2px, rgba(0, 255, 255, 0.1) 4px)',
      }}></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `
          linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
      }}></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Avatar with retro border */}
        <div 
          className={`mb-8 flex justify-center transition-all duration-1000 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-50"></div>
            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-lg overflow-hidden border-4 border-cyan-400 shadow-[0_0_20px_rgba(0,255,255,0.5)]" style={{
              imageRendering: 'pixelated',
            }}>
              <Image
                src="/avatar.jpg"
                alt="Tanishq Somani"
                width={176}
                height={176}
                className="object-cover w-full h-full"
                priority
                style={{ objectPosition: 'center 65%', imageRendering: 'pixelated' }}
              />
            </div>
          </div>
        </div>

        {/* Name with retro glow */}
        <h1 
          className={`text-5xl md:text-7xl font-bold mb-4 text-cyan-400 transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            textShadow: '0 0 10px rgba(0, 255, 255, 0.8), 0 0 20px rgba(0, 255, 255, 0.6), 0 0 30px rgba(0, 255, 255, 0.4)',
            fontFamily: 'monospace',
          }}
        >
          TANISHQ SOMANI
        </h1>

        {/* Title */}
        <p 
          className={`text-xl md:text-2xl text-pink-400 mb-8 font-mono transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            textShadow: '0 0 10px rgba(236, 72, 153, 0.6)',
          }}
        >
          &gt; SOFTWARE_ENGINEER.exe
        </p>

        {/* Description */}
        <p 
          className={`text-base text-cyan-300 mb-12 max-w-2xl mx-auto leading-relaxed font-mono transition-all duration-1000 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Building scalable systems, optimizing performance, and solving complex problems.
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
            className="px-8 py-3 bg-cyan-400 text-black font-bold font-mono rounded-none border-4 border-pink-400 hover:bg-pink-400 hover:border-cyan-400 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.5)] focus:outline-none focus:ring-2 focus:ring-cyan-400"
            style={{
              boxShadow: '0 0 20px rgba(0, 255, 255, 0.5), inset 0 0 20px rgba(0, 255, 255, 0.2)',
            }}
          >
            [VIEW_PROJECTS]
          </button>
          <button
            onClick={downloadResume}
            aria-label="View resume PDF"
            className="px-8 py-3 bg-transparent text-cyan-400 font-bold font-mono rounded-none border-4 border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            style={{
              boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)',
            }}
          >
            [VIEW_RESUME]
          </button>
        </div>
      </div>
    </section>
  );
}



