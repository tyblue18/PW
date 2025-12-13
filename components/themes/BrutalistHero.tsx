"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function BrutalistHero() {
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
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative pt-16 bg-yellow-400">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(black 2px, transparent 2px),
          linear-gradient(90deg, black 2px, transparent 2px)
        `,
        backgroundSize: '40px 40px',
      }}></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Avatar with brutalist border */}
        <div 
          className={`mb-8 flex justify-center transition-all duration-1000 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="w-32 h-32 md:w-40 md:h-40 border-8 border-black bg-black p-2" style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)',
          }}>
            <div className="w-full h-full overflow-hidden bg-black">
              <Image
                src="/avatar.jpg"
                alt="Tanishq Somani"
                width={160}
                height={160}
                className="object-cover w-full h-full"
                priority
                style={{ objectPosition: 'center 65%' }}
              />
            </div>
          </div>
        </div>

        {/* Name */}
        <h1 
          className={`text-5xl md:text-7xl font-black mb-4 text-black transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            textTransform: 'uppercase',
            letterSpacing: '-2px',
            textShadow: '8px 8px 0px rgba(0,0,0,0.3)',
          }}
        >
          TANISHQ SOMANI
        </h1>

        {/* Title */}
        <div 
          className={`mb-8 transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="inline-block bg-black text-yellow-400 px-6 py-2 font-bold text-xl md:text-2xl border-4 border-black">
            SOFTWARE ENGINEER
          </div>
        </div>

        {/* Description */}
        <p 
          className={`text-lg text-black mb-12 max-w-2xl mx-auto leading-relaxed font-bold transition-all duration-1000 delay-400 ${
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
            className="px-8 py-4 bg-black text-yellow-400 font-black text-lg border-4 border-black hover:bg-yellow-400 hover:text-black transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-black"
            style={{
              boxShadow: '8px 8px 0px rgba(0,0,0,0.3)',
            }}
          >
            VIEW PROJECTS
          </button>
          <button
            onClick={downloadResume}
            aria-label="View resume PDF"
            className="px-8 py-4 bg-yellow-400 text-black font-black text-lg border-4 border-black hover:bg-black hover:text-yellow-400 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-black"
            style={{
              boxShadow: '8px 8px 0px rgba(0,0,0,0.3)',
            }}
          >
            VIEW RESUME
          </button>
        </div>
      </div>
    </section>
  );
}
