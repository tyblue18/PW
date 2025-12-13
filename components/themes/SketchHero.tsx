"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SketchHero() {
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
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative pt-16 bg-white">
      {/* Sketch paper texture */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      {/* Sketch lines/doodles */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full">
          <path d="M100,50 Q200,20 300,50 T500,50" stroke="black" strokeWidth="2" fill="none" style={{ strokeDasharray: '5,5' }} />
          <path d="M50,150 Q150,120 250,150 T450,150" stroke="black" strokeWidth="1.5" fill="none" style={{ strokeDasharray: '3,3' }} />
          <circle cx="600" cy="100" r="30" stroke="black" strokeWidth="2" fill="none" style={{ strokeDasharray: '4,4' }} />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Avatar with sketch border */}
        <div 
          className={`mb-8 flex justify-center transition-all duration-1000 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transform: 'rotate(-1deg)' }}
        >
          <div className="relative">
            {/* Sketch circle around avatar */}
            <svg className="absolute inset-0 w-44 h-44" style={{ transform: 'rotate(-2deg)' }}>
              <circle cx="88" cy="88" r="84" stroke="black" strokeWidth="3" fill="none" style={{ 
                strokeDasharray: '8,4',
                opacity: 0.6,
              }} />
            </svg>
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-black" style={{
              filter: 'grayscale(30%) contrast(1.1)',
              transform: 'rotate(1deg)',
            }}>
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

        {/* Name - sketchy font */}
        <h1 
          className={`text-5xl md:text-7xl font-bold mb-4 text-black transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            fontFamily: 'Georgia, serif',
            transform: 'rotate(-0.3deg)',
            letterSpacing: '-2px',
            textShadow: '2px 2px 0px rgba(0,0,0,0.1)',
            fontWeight: 700,
          }}
        >
          Tanishq Somani
        </h1>

        {/* Underline - sketchy */}
        <div className="mb-6 flex justify-center" style={{ transform: 'rotate(0.5deg)' }}>
          <svg width="300" height="4" className="overflow-visible">
            <path d="M0,2 Q150,0 300,2" stroke="black" strokeWidth="3" fill="none" style={{ 
              strokeDasharray: '6,3',
              opacity: 0.7,
            }} />
          </svg>
        </div>

        {/* Title */}
        <p 
          className={`text-xl md:text-2xl text-gray-700 mb-8 transition-all duration-1000 delay-300 ${
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

        {/* Description */}
        <p 
          className={`text-base text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            transform: 'rotate(-0.1deg)',
            fontFamily: 'Georgia, serif',
          }}
        >
          Building scalable systems, optimizing performance, and solving complex problems at the intersection of software engineering and AI.
        </p>

        {/* CTA Buttons - sketch style */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={scrollToProjects}
            aria-label="Scroll to projects section"
            className="px-8 py-3 bg-transparent text-black font-bold border-3 border-black hover:bg-black hover:text-white transition-all duration-200 focus:outline-none relative"
            style={{
              transform: 'rotate(-1deg)',
              borderWidth: '3px',
              fontFamily: 'Georgia, serif',
            }}
          >
            View Projects
            <svg className="absolute -top-1 -right-1 w-4 h-4" style={{ opacity: 0.5 }}>
              <path d="M0,4 Q2,0 4,4" stroke="black" strokeWidth="1.5" fill="none" />
            </svg>
          </button>
          <button
            onClick={downloadResume}
            aria-label="View resume PDF"
            className="px-8 py-3 bg-black text-white font-bold border-3 border-black hover:bg-transparent hover:text-black transition-all duration-200 focus:outline-none relative"
            style={{
              transform: 'rotate(1deg)',
              borderWidth: '3px',
              fontFamily: 'Georgia, serif',
            }}
          >
            View Resume
            <svg className="absolute -bottom-1 -left-1 w-4 h-4" style={{ opacity: 0.5 }}>
              <path d="M0,0 Q2,4 4,0" stroke="black" strokeWidth="1.5" fill="none" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
