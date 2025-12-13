"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HandDrawnHero() {
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
      background: 'linear-gradient(135deg, #f5f5dc 0%, #e8e8d8 100%)',
    }}>
      {/* Paper texture */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
      }}></div>

      {/* Hand-drawn border */}
      <div className="absolute inset-4 border-4 border-black" style={{
        clipPath: 'polygon(2% 0%, 98% 1%, 99% 3%, 97% 5%, 100% 8%, 98% 12%, 100% 15%, 97% 18%, 99% 22%, 100% 25%, 98% 28%, 100% 32%, 97% 35%, 99% 38%, 100% 42%, 98% 45%, 100% 48%, 97% 52%, 99% 55%, 100% 58%, 98% 62%, 100% 65%, 97% 68%, 99% 72%, 100% 75%, 98% 78%, 100% 82%, 97% 85%, 99% 88%, 100% 92%, 98% 95%, 97% 98%, 2% 100%, 0% 97%, 1% 95%, 0% 92%, 2% 88%, 0% 85%, 3% 82%, 1% 78%, 0% 75%, 2% 72%, 0% 68%, 3% 65%, 1% 62%, 0% 58%, 2% 55%, 0% 52%, 3% 48%, 1% 45%, 0% 42%, 2% 38%, 0% 35%, 3% 32%, 1% 28%, 0% 25%, 2% 22%, 0% 18%, 3% 15%, 1% 12%, 0% 8%, 2% 5%, 0% 3%)',
      }}></div>

      <div className="max-w-5xl mx-auto text-center relative z-10" style={{ transform: 'rotate(-0.5deg)' }}>
        {/* Avatar with hand-drawn border */}
        <div 
          className={`mb-8 flex justify-center transition-all duration-1000 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transform: 'rotate(2deg)' }}
        >
          <div className="relative">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-black" style={{
              boxShadow: '8px 8px 0px rgba(0,0,0,0.2)',
              transform: 'rotate(-1deg)',
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
            {/* Hand-drawn circle accent */}
            <div className="absolute -top-2 -right-2 w-8 h-8 border-3 border-black rounded-full" style={{
              transform: 'rotate(15deg)',
              borderWidth: '3px',
            }}></div>
          </div>
        </div>

        {/* Name - handwritten style */}
        <h1 
          className={`text-5xl md:text-7xl font-bold mb-4 text-black transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            fontFamily: 'Georgia, serif',
            transform: 'rotate(-0.3deg)',
            letterSpacing: '-1px',
            textShadow: '3px 3px 0px rgba(0,0,0,0.1)',
          }}
        >
          Tanishq Somani
        </h1>

        {/* Underline - hand-drawn */}
        <div className="mb-6 flex justify-center" style={{ transform: 'rotate(0.5deg)' }}>
          <div className="w-48 h-1 bg-black" style={{
            clipPath: 'polygon(0% 0%, 95% 0%, 100% 50%, 5% 100%, 0% 50%)',
          }}></div>
        </div>

        {/* Title */}
        <p 
          className={`text-xl md:text-2xl text-gray-800 mb-8 transition-all duration-1000 delay-300 ${
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
          className={`text-base text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            transform: 'rotate(-0.2deg)',
            fontFamily: 'Georgia, serif',
          }}
        >
          Building scalable systems, optimizing performance, and solving complex problems at the intersection of software engineering and AI.
        </p>

        {/* CTA Buttons - hand-drawn style */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={scrollToProjects}
            aria-label="Scroll to projects section"
            className="px-8 py-3 bg-black text-white font-bold rounded-none border-4 border-black hover:bg-white hover:text-black transition-all duration-200 focus:outline-none"
            style={{
              transform: 'rotate(-1deg)',
              boxShadow: '6px 6px 0px rgba(0,0,0,0.2)',
              clipPath: 'polygon(2% 0%, 98% 0%, 100% 5%, 98% 10%, 100% 15%, 98% 20%, 100% 25%, 98% 30%, 100% 35%, 98% 40%, 100% 45%, 98% 50%, 100% 55%, 98% 60%, 100% 65%, 98% 70%, 100% 75%, 98% 80%, 100% 85%, 98% 90%, 100% 95%, 98% 100%, 2% 100%, 0% 95%, 2% 90%, 0% 85%, 2% 80%, 0% 75%, 2% 70%, 0% 65%, 2% 60%, 0% 55%, 2% 50%, 0% 45%, 2% 40%, 0% 35%, 2% 30%, 0% 25%, 2% 20%, 0% 15%, 2% 10%, 0% 5%)',
            }}
          >
            View Projects
          </button>
          <button
            onClick={downloadResume}
            aria-label="View resume PDF"
            className="px-8 py-3 bg-white text-black font-bold rounded-none border-4 border-black hover:bg-black hover:text-white transition-all duration-200 focus:outline-none"
            style={{
              transform: 'rotate(1deg)',
              boxShadow: '6px 6px 0px rgba(0,0,0,0.2)',
              clipPath: 'polygon(2% 0%, 98% 0%, 100% 5%, 98% 10%, 100% 15%, 98% 20%, 100% 25%, 98% 30%, 100% 35%, 98% 40%, 100% 45%, 98% 50%, 100% 55%, 98% 60%, 100% 65%, 98% 70%, 100% 75%, 98% 80%, 100% 85%, 98% 90%, 100% 95%, 98% 100%, 2% 100%, 0% 95%, 2% 90%, 0% 85%, 2% 80%, 0% 75%, 2% 70%, 0% 65%, 2% 60%, 0% 55%, 2% 50%, 0% 45%, 2% 40%, 0% 35%, 2% 30%, 0% 25%, 2% 20%, 0% 15%, 2% 10%, 0% 5%)',
            }}
          >
            View Resume
          </button>
        </div>
      </div>
    </section>
  );
}
