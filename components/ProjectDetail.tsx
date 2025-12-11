"use client";

import { Project } from "@/data/projects";
import { useEffect, useState } from "react";
import ImageGallery from "./ImageGallery";
import GraphsSection from "./GraphsSection";
import MetricsDisplay from "./MetricsDisplay";
import EmbeddedProject from "./EmbeddedProject";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div
        className={`mb-12 transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="text-6xl mb-6">{project.thumbnail}</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          {project.title}
        </h1>
        <p className="text-xl text-gray-300 mb-6">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-4">
          {project.paper && (
            <a
              href={project.paper}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 inline-flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              View Paper
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 inline-flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          )}
          {project.demo && project.demo !== "#demo" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 inline-flex items-center gap-2"
            >
              Live Demo
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          )}
          {project.demoVideo && (
            <a
              href={project.demoVideo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-300 inline-flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z"/>
              </svg>
              View Demo Video
            </a>
          )}
          {project.date && (
            <span className="px-6 py-3 text-gray-400 text-sm">
              {project.date}
            </span>
          )}
        </div>
      </div>

      {/* Long Description */}
      {project.longDescription && (
        <div
          className={`mb-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-2xl font-semibold mb-4 text-white">Overview</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            {project.longDescription}
          </p>
        </div>
      )}

      {/* Technologies */}
      {project.technologies && project.technologies.length > 0 && (
        <div
          className={`mb-12 transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-2xl font-semibold mb-4 text-white">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg border border-blue-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Challenges */}
      {project.challenges && project.challenges.length > 0 && (
        <div
          className={`mb-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 transition-all duration-1000 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-2xl font-semibold mb-4 text-white">Key Challenges</h2>
          <ul className="space-y-3">
            {project.challenges.map((challenge, index) => (
              <li key={index} className="text-gray-300 flex items-start">
                <span className="text-purple-400 mr-3">•</span>
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Embedded Demo */}
      {project.embeddedDemo && (
        <div
          className={`mb-12 transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-2xl font-semibold mb-6 text-white">Try It Live</h2>
          <EmbeddedProject embeddedDemo={project.embeddedDemo} />
        </div>
      )}

      {/* Metrics */}
      {project.metrics && project.metrics.length > 0 && (
        <div
          className={`transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <MetricsDisplay metrics={project.metrics} />
        </div>
      )}

      {/* Image Gallery */}
      {project.images && project.images.length > 0 && (
        <div
          className={`transition-all duration-1000 delay-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <ImageGallery images={project.images} title="Project Images" />
        </div>
      )}

      {/* Graphs & Data Visualizations */}
      {project.graphs && project.graphs.length > 0 && (
        <div
          className={`transition-all duration-1000 delay-800 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <GraphsSection graphs={project.graphs} />
        </div>
      )}

      {/* Results */}
      {project.results && project.results.length > 0 && (
        <div
          className={`mb-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 transition-all duration-1000 delay-900 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-2xl font-semibold mb-4 text-white">Results & Impact</h2>
          <ul className="space-y-3">
            {project.results.map((result, index) => (
              <li key={index} className="text-gray-300 flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

