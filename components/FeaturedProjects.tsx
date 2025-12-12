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
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <h2 
          className={`text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Featured Projects
        </h2>
        <p className="text-gray-400 text-center mb-16">
          Real projects that demonstrate depth, breadth, and applied technical skills
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-teal-500/50 group transition-all duration-1000 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Link href={`/projects/${project.slug}`}>
                <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-teal-400 transition-colors cursor-pointer">
                  {project.title}
                </h3>
              </Link>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-teal-500/20 text-teal-300 text-sm rounded-full border border-teal-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-6 flex-wrap">
                <Link
                  href={`/projects/${project.slug}`}
                  className="px-4 py-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 text-sm"
                >
                  View Details
                </Link>
                {project.demo && project.demo === "#demo" && (
                  <button
                    onClick={scrollToDemo}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-sm"
                  >
                    Live Demo
                  </button>
                )}
                {project.demo && project.demo !== "#demo" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-sm"
                  >
                    Live Demo
                  </a>
                )}
                {project.embeddedDemo && !project.demo && (
                  <Link
                    href={`/projects/${project.slug}#interactive-demo`}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-sm"
                  >
                    Live Demo
                  </Link>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

