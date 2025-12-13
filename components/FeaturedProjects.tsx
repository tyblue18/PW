"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getFeaturedProjects } from "@/data/projects";

export default function FeaturedProjects() {
  const [mounted, setMounted] = useState(false);
  const projects = getFeaturedProjects();

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="projects" className="py-24 px-4 bg-gradient-to-b from-black via-purple-950/10 to-black relative">
      {/* Space background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
      {/* Animated Nebula effect */}
      <div 
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
        style={{
          animation: "nebulaFloat 15s ease-in-out infinite reverse",
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section header with code styling */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 sm:gap-4 mb-4">
            <span className="text-teal-400 font-mono text-xs sm:text-sm">03.</span>
            <h2 
              className={`text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-1000 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Featured Projects
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-teal-500/50 to-transparent"></div>
          </div>
          <p className="text-gray-400 text-base sm:text-lg ml-8 sm:ml-12">
            Real projects demonstrating technical depth and applied engineering skills
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, index) => {
            // Fixed random values per project
            const cardRotation = [-0.15, 0.18, -0.12, 0.2, -0.1][index % 5];
            const numberRotation = [-0.8, 0.6, -0.9, 0.7, -0.5][index % 5];
            const lineOffset = [-0.3, 0.4, -0.2, 0.5, -0.4][index % 5];
            
            return (
              <div
                key={project.slug}
                className={`group bg-white/5 border border-white/10 rounded-lg p-4 sm:p-6 hover:bg-white/10 hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10 hover:scale-[1.02] hover:-translate-y-1 active:scale-[0.98] transition-all duration-1000 touch-manipulation ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ 
                  transitionDelay: `${index * 50}ms`,
                  transform: `rotate(${cardRotation}deg)`,
                }}
              >
                {/* Project number */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-teal-400/50 font-mono text-xs" style={{
                    transform: `rotate(${numberRotation}deg)`,
                  }}>
                    {String(index + 1).padStart(2, '0')}.
                  </span>
                  <div className="w-12 h-px bg-teal-500/30 group-hover:w-16 group-hover:bg-teal-500/50 transition-all" style={{
                    transform: `translateY(${lineOffset}px)`,
                  }}></div>
                </div>
              
                <Link href={`/projects/${project.slug}`}>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white group-hover:text-teal-400 transition-colors cursor-pointer font-mono">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-gray-400 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-black/30 text-teal-300 text-xs rounded border border-teal-500/20 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 sm:gap-3 mt-4 sm:mt-6 flex-wrap">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded border border-teal-500/50 hover:from-teal-500 hover:to-cyan-500 transition-all duration-300 text-xs sm:text-sm active:scale-95 touch-manipulation"
                  >
                    View Details →
                  </Link>
                  {project.demo && project.demo === "#demo" && (
                    <button
                      onClick={scrollToDemo}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-xs sm:text-sm active:scale-95 touch-manipulation"
                    >
                      Live Demo
                    </button>
                  )}
                  {project.demo && project.demo !== "#demo" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-xs sm:text-sm active:scale-95 touch-manipulation"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.embeddedDemo && !project.demo && (
                    <Link
                      href={`/projects/${project.slug}#interactive-demo`}
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-xs sm:text-sm active:scale-95 touch-manipulation"
                    >
                      Live Demo
                    </Link>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-xs sm:text-sm active:scale-95 touch-manipulation"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

