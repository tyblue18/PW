"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function TerminalHero() {
  const [mounted, setMounted] = useState(false);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    setMounted(true);
    const text = "Software Engineer | Backend & AI Systems | Performance Optimization";
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setTypedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative pt-16 bg-black">
      {/* Terminal scanlines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 0, 0.1) 2px, rgba(0, 255, 0, 0.1) 4px)',
      }}></div>

      <div className="max-w-5xl mx-auto relative z-10 font-mono">
        {/* Terminal prompt */}
        <div 
          className={`mb-8 transition-all duration-1000 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="text-green-400 text-sm mb-2">
            <span className="text-amber-400">tanishq@portfolio</span>:<span className="text-blue-400">~</span>$ cat about.txt
          </div>
        </div>

        {/* Avatar in ASCII art style */}
        <div 
          className={`mb-8 flex justify-center transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-green-400 blur-2xl opacity-30"></div>
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded overflow-hidden border-2 border-green-400" style={{
              filter: 'contrast(1.2) brightness(0.9)',
            }}>
              <Image
                src="/avatar.jpg"
                alt="Tanishq Somani"
                width={160}
                height={160}
                className="object-cover w-full h-full grayscale"
                priority
                style={{ objectPosition: 'center 65%' }}
              />
            </div>
          </div>
        </div>

        {/* Name */}
        <h1 
          className={`text-4xl md:text-6xl font-bold mb-4 text-green-400 transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            textShadow: '0 0 10px rgba(0, 255, 0, 0.8)',
          }}
        >
          TANISHQ SOMANI
        </h1>

        {/* Typing effect */}
        <div 
          className={`text-lg md:text-xl text-amber-400 mb-8 font-mono transition-all duration-1000 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {typedText}
          <span className="animate-pulse text-green-400">_</span>
        </div>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={scrollToProjects}
            aria-label="Scroll to projects section"
            className="px-6 py-3 bg-green-400 text-black font-bold font-mono rounded border-2 border-green-400 hover:bg-black hover:text-green-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            style={{
              boxShadow: '0 0 15px rgba(0, 255, 0, 0.5)',
            }}
          >
            $ ./view_projects.sh
          </button>
          <button
            onClick={downloadResume}
            aria-label="View resume PDF"
            className="px-6 py-3 bg-transparent text-green-400 font-bold font-mono rounded border-2 border-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            style={{
              boxShadow: '0 0 10px rgba(0, 255, 0, 0.3)',
            }}
          >
            $ cat resume.pdf
          </button>
        </div>
      </div>
    </section>
  );
}



