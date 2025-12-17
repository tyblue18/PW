"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [typedTagline, setTypedTagline] = useState("");
  const [typedName, setTypedName] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setMounted(true);
    
    const intervals: NodeJS.Timeout[] = [];
    const timeouts: NodeJS.Timeout[] = [];
    
    // Step 1: Name
    const nameText = "Tanishq Somani";
    let nameIndex = 0;
    const nameInterval = setInterval(() => {
      if (nameIndex < nameText.length) {
        setTypedName(nameText.slice(0, nameIndex + 1));
        nameIndex++;
      } else {
        clearInterval(nameInterval);
        const timeout1 = setTimeout(() => {
          // Step 2: Tagline
          const taglineText = "Software Engineer | Backend & AI Systems | Performance Optimization";
          let taglineIndex = 0;
          const taglineInterval = setInterval(() => {
            if (taglineIndex < taglineText.length) {
              setTypedTagline(taglineText.slice(0, taglineIndex + 1));
              taglineIndex++;
            } else {
              clearInterval(taglineInterval);
              // Blink cursor
              const cursorInterval = setInterval(() => {
                setShowCursor(prev => !prev);
              }, 530);
              intervals.push(cursorInterval);
            }
          }, 50);
          intervals.push(taglineInterval);
        }, 300);
        timeouts.push(timeout1);
      }
    }, 80);
    intervals.push(nameInterval);
    
    return () => {
      intervals.forEach(interval => clearInterval(interval));
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-visible pt-16">
      {/* Space background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/10 via-purple-900/10 to-cyan-900/10"></div>
      
      {/* Animated Nebula effects */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl z-0"
        style={{
          animation: "nebulaFloat 8s ease-in-out infinite",
        }}
      ></div>
      <div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl z-0"
        style={{
          animation: "nebulaFloat 10s ease-in-out infinite reverse",
        }}
      ></div>
      
      {/* Terminal-like accent lines with animation */}
      <div 
        className="absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent z-0 pointer-events-none"
        style={{
          animation: "linePulse 3s ease-in-out infinite"
        }}
      ></div>
      {/* Bottom line - positioned well below buttons to avoid overlap */}
      <div 
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent z-0 pointer-events-none"
        style={{
          animation: "linePulse 3s ease-in-out infinite 1.5s",
          bottom: '10vh' // Position well below buttons
        }}
      ></div>

      <style jsx global>{`
        @keyframes nebulaFloat {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(30px, -30px) scale(1.2);
            opacity: 0.5;
          }
        }
        @keyframes linePulse {
          0%, 100% {
            opacity: 0.3;
            transform: scaleX(1);
          }
          50% {
            opacity: 0.7;
            transform: scaleX(1.05);
          }
        }
      `}</style>
      
      <div className="max-w-6xl mx-auto relative z-10 px-4 sm:px-6 md:px-8 lg:px-8 overflow-visible">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Left: Content */}
          <div className="text-left overflow-visible">
            {/* Name with typing - reserve space to prevent layout shift */}
            <h1 
              className={`text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-white via-teal-200 to-cyan-200 bg-clip-text text-transparent ${
                mounted ? "opacity-100" : "opacity-0"
              }`}
              style={{ 
                willChange: mounted ? 'opacity' : 'auto',
                whiteSpace: 'nowrap',
                overflow: 'visible',
                display: 'inline-block',
                minHeight: '1.2em',
                height: '1.2em' // Fixed height to prevent shifting
              }}
            >
              {typedName || "Tanishq Somani"}
              {typedName.length < "Tanishq Somani".length && (
                <span className="text-teal-400 animate-pulse inline-block w-2">_</span>
              )}
            </h1>

            {/* Title with typing animation - reserve space */}
            <div 
              className={`mb-4 md:mb-6 ${
                mounted ? "opacity-100" : "opacity-0"
              }`}
              style={{ 
                contain: 'layout style paint',
                willChange: mounted ? 'opacity' : 'auto',
                minHeight: '6em' // Increased to fit tagline + tags
              }}
            >
              <p className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-3 md:mb-4 leading-tight break-words min-h-[1.5em]">
                <span className="inline-block min-w-0">
                  {typedTagline || "\u00A0"}
                  {typedTagline.length < "Software Engineer | Backend & AI Systems | Performance Optimization".length && (
                    <span className="text-teal-400 animate-pulse inline-block w-2">_</span>
                  )}
                  {typedTagline.length === "Software Engineer | Backend & AI Systems | Performance Optimization".length && (
                    <span className={`text-teal-400 inline-block w-2 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>_</span>
                  )}
                </span>
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-gray-300 font-mono mb-4">
                <span className="px-2.5 sm:px-3 py-1 bg-teal-500/10 border border-teal-500/30 rounded text-teal-300">
                  Backend Systems
                </span>
                <span className="px-2.5 sm:px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded text-purple-300">
                  AI/ML
                </span>
                <span className="px-2.5 sm:px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-cyan-300">
                  HPC
                </span>
              </div>
            </div>

            {/* Description - More impactful */}
            <p 
              className={`text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 md:mb-10 leading-relaxed transition-opacity duration-1000 delay-300 font-medium ${
                mounted ? "opacity-100" : "opacity-0"
              }`}
              style={{ 
                contain: 'layout style paint',
                willChange: mounted ? 'opacity' : 'auto',
                minHeight: '3em' // Reserve space to prevent shifting
              }}
            >
              Building scalable systems, optimizing performance, and solving complex problems at the intersection of software engineering and AI.
            </p>

            {/* CTA Buttons - More prominent */}
            <div 
              id="hero-buttons"
              className={`flex flex-col sm:flex-row gap-4 sm:gap-5 transition-opacity duration-1000 delay-400 ${
                mounted ? "opacity-100" : "opacity-0"
              }`}
              style={{ 
                contain: 'layout style paint',
                willChange: mounted ? 'opacity' : 'auto',
                minHeight: '52px' // Reserve space for buttons
              }}
            >
              <button
                onClick={scrollToProjects}
                aria-label="Scroll to projects section"
                className="px-8 sm:px-10 py-3.5 sm:py-4 text-base sm:text-lg bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold rounded-lg border-2 border-teal-500/50 hover:from-teal-500 hover:to-cyan-500 transition-all duration-300 shadow-xl hover:shadow-teal-500/30 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-teal-500/50 focus:ring-offset-2 focus:ring-offset-black touch-manipulation min-h-[52px] flex items-center justify-center"
              >
                View Projects →
              </button>
              <button
                onClick={downloadResume}
                aria-label="View resume PDF"
                className="px-8 sm:px-10 py-3.5 sm:py-4 text-base sm:text-lg bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg border-2 border-white/30 hover:bg-white/20 hover:border-teal-500/50 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-teal-500/50 focus:ring-offset-2 focus:ring-offset-black touch-manipulation min-h-[52px] flex items-center justify-center"
              >
                View Resume
              </button>
            </div>
          </div>

          {/* Right: Avatar */}
          <div 
            className={`flex justify-center lg:justify-end transition-opacity duration-1000 delay-200 mt-6 lg:mt-0 ${
              mounted ? "opacity-100" : "opacity-0"
            }`}
            style={{ 
              contain: 'layout style paint',
              willChange: mounted ? 'opacity' : 'auto'
            }}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-purple-500/20 blur-3xl rounded-full"></div>
              {/* Avatar container with code-like border */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-lg overflow-hidden border-2 border-teal-500/30 bg-gradient-to-br from-teal-900/20 to-purple-900/20 shadow-2xl">
                <div className="absolute top-2 left-2 flex gap-1.5 z-10">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="absolute inset-0 pt-6">
                  <Image
                    src="/avatar.jpg"
                    alt="Tanishq Somani"
                    fill
                    className="object-cover"
                    priority
                    style={{ objectPosition: 'center 65%', transform: 'scale(1.5)' }}
                    sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

