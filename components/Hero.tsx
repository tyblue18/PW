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
    <section id="home" className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden pt-16">
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
        className="absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent z-10"
        style={{
          animation: "linePulse 3s ease-in-out infinite",
        }}
      ></div>
      <div 
        className="absolute bottom-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent z-10"
        style={{
          animation: "linePulse 3s ease-in-out infinite 1.5s",
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
      
      <div className="max-w-6xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Content */}
          <div className="text-left">
            {/* Name with typing */}
            <h1 
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-teal-200 to-cyan-200 bg-clip-text text-transparent ${
                mounted ? "opacity-100" : "opacity-0"
              }`}
            >
              {typedName}
              {typedName.length < "Tanishq Somani".length && (
                <span className="text-teal-400 animate-pulse">_</span>
              )}
            </h1>

            {/* Title with typing animation */}
            <div 
              className={`mb-6 ${
                mounted ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-semibold text-white mb-4 font-mono leading-tight">
                {typedTagline}
                {typedTagline.length < "Software Engineer | Backend & AI Systems | Performance Optimization".length && (
                  <span className="text-teal-400 animate-pulse">_</span>
                )}
                {typedTagline.length === "Software Engineer | Backend & AI Systems | Performance Optimization".length && (
                  <span className={`text-teal-400 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>_</span>
                )}
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-gray-400 font-mono">
                <span className="px-2.5 sm:px-3 py-1 bg-white/5 border border-white/10 rounded">
                  Backend Systems
                </span>
                <span className="px-2.5 sm:px-3 py-1 bg-white/5 border border-white/10 rounded">
                  AI/ML
                </span>
                <span className="px-2.5 sm:px-3 py-1 bg-white/5 border border-white/10 rounded">
                  HPC
                </span>
              </div>
            </div>

            {/* Description */}
            <p 
              className={`text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 leading-relaxed transition-all duration-1000 delay-300 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Building scalable systems, optimizing performance, and solving complex problems at the intersection of software engineering and AI.
            </p>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-3 sm:gap-4 transition-all duration-1000 delay-400 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <button
                onClick={scrollToProjects}
                aria-label="Scroll to projects section"
                className="px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded border border-teal-500/50 hover:from-teal-500 hover:to-cyan-500 transition-all duration-300 shadow-lg hover:shadow-teal-500/20 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-black touch-manipulation"
              >
                View Projects →
              </button>
              <button
                onClick={downloadResume}
                aria-label="View resume PDF"
                className="px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-white/5 backdrop-blur-sm text-white font-semibold rounded border border-white/20 hover:bg-white/10 hover:border-teal-500/50 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-black touch-manipulation"
              >
                View Resume
              </button>
            </div>
          </div>

          {/* Right: Avatar */}
          <div 
            className={`flex justify-center md:justify-end transition-all duration-1000 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-purple-500/20 blur-3xl rounded-full"></div>
              {/* Avatar container with code-like border */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-lg overflow-hidden border-2 border-teal-500/30 bg-gradient-to-br from-teal-900/20 to-purple-900/20 shadow-2xl">
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

