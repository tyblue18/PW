"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function GrungeHero() {
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
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative pt-16 bg-gray-900">
      {/* Grunge texture overlay */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        mixBlendMode: 'overlay',
      }}></div>

      {/* Scratches and marks */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-1 bg-white rotate-12"></div>
        <div className="absolute top-40 right-20 w-24 h-1 bg-white -rotate-6"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-1 bg-white rotate-3"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-1 bg-white -rotate-12"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Avatar with grunge effect */}
        <div 
          className={`mb-8 flex justify-center transition-all duration-1000 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transform: 'rotate(-1deg)' }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-red-600 blur-xl opacity-30"></div>
            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-lg overflow-hidden border-2 border-red-600" style={{
              filter: 'contrast(1.2) brightness(0.9) saturate(1.1)',
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
            {/* Tape effect */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-yellow-400 opacity-60 rotate-2" style={{
              clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)',
            }}></div>
          </div>
        </div>

        {/* Name - distressed look */}
        <h1 
          className={`text-5xl md:text-7xl font-black mb-4 text-white transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            fontFamily: 'Impact, Arial Black, sans-serif',
            transform: 'rotate(-0.5deg)',
            textShadow: '4px 4px 0px rgba(220, 38, 38, 0.5), -2px -2px 0px rgba(0,0,0,0.8)',
            letterSpacing: '2px',
            textTransform: 'uppercase',
          }}
        >
          TANISHQ SOMANI
        </h1>

        {/* Title with underline */}
        <div className="mb-8 relative">
          <p 
            className={`text-xl md:text-2xl text-red-400 font-bold transition-all duration-1000 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
              transform: 'rotate(0.3deg)',
              fontFamily: 'monospace',
            }}
          >
            SOFTWARE ENGINEER
          </p>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-red-600" style={{
            transform: 'translateX(-50%) rotate(1deg)',
          }}></div>
        </div>

        {/* Description */}
        <p 
          className={`text-base text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            transform: 'rotate(-0.2deg)',
            fontFamily: 'monospace',
          }}
        >
          Building scalable systems, optimizing performance, and solving complex problems at the intersection of software engineering and AI.
        </p>

        {/* CTA Buttons - grunge style */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={scrollToProjects}
            aria-label="Scroll to projects section"
            className="px-8 py-3 bg-red-600 text-white font-bold border-2 border-red-800 hover:bg-red-700 transition-all duration-200 focus:outline-none"
            style={{
              transform: 'rotate(-1deg)',
              boxShadow: '4px 4px 0px rgba(0,0,0,0.5)',
              clipPath: 'polygon(5% 0%, 95% 2%, 98% 8%, 100% 15%, 95% 20%, 100% 30%, 95% 40%, 100% 50%, 95% 60%, 100% 70%, 95% 80%, 100% 90%, 95% 98%, 5% 100%, 2% 95%, 0% 85%, 5% 75%, 0% 65%, 5% 55%, 0% 45%, 5% 35%, 0% 25%, 5% 15%, 0% 8%, 2% 2%)',
            }}
          >
            View Projects
          </button>
          <button
            onClick={downloadResume}
            aria-label="View resume PDF"
            className="px-8 py-3 bg-transparent text-red-400 font-bold border-2 border-red-600 hover:bg-red-600 hover:text-white transition-all duration-200 focus:outline-none"
            style={{
              transform: 'rotate(1deg)',
              boxShadow: '4px 4px 0px rgba(0,0,0,0.5)',
              clipPath: 'polygon(5% 0%, 95% 2%, 98% 8%, 100% 15%, 95% 20%, 100% 30%, 95% 40%, 100% 50%, 95% 60%, 100% 70%, 95% 80%, 100% 90%, 95% 98%, 5% 100%, 2% 95%, 0% 85%, 5% 75%, 0% 65%, 5% 55%, 0% 45%, 5% 35%, 0% 25%, 5% 15%, 0% 8%, 2% 2%)',
            }}
          >
            View Resume
          </button>
        </div>
      </div>
    </section>
  );
}



