"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function NotebookHero() {
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
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative pt-16" style={{
      background: 'linear-gradient(to bottom, #fffef7 0%, #f9f7f0 100%)',
    }}>
      {/* Notebook lines */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #e0e0e0 31px, #e0e0e0 32px)',
        backgroundPosition: '0 60px',
      }}></div>

      {/* Red margin line */}
      <div className="absolute left-16 top-0 bottom-0 w-1 bg-red-300 opacity-40"></div>

      {/* Coffee stain */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-amber-900 opacity-10 blur-2xl" style={{
        transform: 'rotate(45deg)',
      }}></div>

      <div className="max-w-4xl mx-auto relative z-10 pl-20" style={{ transform: 'rotate(-0.2deg)' }}>
        {/* Handwritten date */}
        <div 
          className={`text-sm text-gray-500 mb-8 transition-all duration-1000 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            fontFamily: 'Georgia, serif',
            fontStyle: 'italic',
            transform: 'rotate(-1deg)',
          }}
        >
          {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </div>

        {/* Avatar - taped photo */}
        <div 
          className={`mb-8 flex justify-start transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transform: 'rotate(2deg)' }}
        >
          <div className="relative">
            <div className="absolute -top-2 -left-2 w-8 h-8 bg-yellow-300 opacity-60 rotate-12" style={{
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            }}></div>
            <div className="w-32 h-32 md:w-40 md:h-40 rounded overflow-hidden border-2 border-gray-400 shadow-lg" style={{
              filter: 'sepia(20%) contrast(1.1)',
            }}>
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

        {/* Name - handwritten style */}
        <h1 
          className={`text-4xl md:text-6xl font-bold mb-4 text-black transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            fontFamily: 'Georgia, serif',
            transform: 'rotate(-0.5deg)',
            letterSpacing: '-1px',
            lineHeight: '1.2',
          }}
        >
          Tanishq Somani
        </h1>

        {/* Underline - hand drawn */}
        <div className="mb-6" style={{ transform: 'rotate(0.3deg)' }}>
          <div className="w-64 h-1 bg-black" style={{
            clipPath: 'polygon(0% 0%, 92% 0%, 100% 50%, 8% 100%, 0% 50%)',
          }}></div>
        </div>

        {/* Title - like a note */}
        <p 
          className={`text-lg md:text-xl text-gray-700 mb-6 transition-all duration-1000 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            fontFamily: 'Georgia, serif',
            transform: 'rotate(0.2deg)',
            fontStyle: 'italic',
          }}
        >
          Software Engineer
        </p>

        {/* Description - like journal entry */}
        <p 
          className={`text-base text-gray-600 mb-12 max-w-xl leading-relaxed transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            transform: 'rotate(-0.1deg)',
            fontFamily: 'Georgia, serif',
            lineHeight: '1.8',
          }}
        >
          Building scalable systems, optimizing performance, and solving complex problems at the intersection of software engineering and AI.
        </p>

        {/* CTA Buttons - like checkboxes or notes */}
        <div 
          className={`flex flex-col gap-3 transition-all duration-1000 delay-600 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={scrollToProjects}
            aria-label="Scroll to projects section"
            className="px-6 py-2 bg-yellow-200 text-black font-medium rounded-sm border-2 border-black hover:bg-yellow-300 transition-all duration-200 focus:outline-none text-left w-fit"
            style={{
              transform: 'rotate(-0.5deg)',
              boxShadow: '3px 3px 0px rgba(0,0,0,0.2)',
              fontFamily: 'Georgia, serif',
            }}
          >
            ✓ View Projects
          </button>
          <button
            onClick={downloadResume}
            aria-label="View resume PDF"
            className="px-6 py-2 bg-blue-200 text-black font-medium rounded-sm border-2 border-black hover:bg-blue-300 transition-all duration-200 focus:outline-none text-left w-fit"
            style={{
              transform: 'rotate(0.5deg)',
              boxShadow: '3px 3px 0px rgba(0,0,0,0.2)',
              fontFamily: 'Georgia, serif',
            }}
          >
            ✓ View Resume
          </button>
        </div>
      </div>
    </section>
  );
}



