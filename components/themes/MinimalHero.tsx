"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function MinimalHero() {
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
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Avatar */}
        <div 
          className={`mb-12 flex justify-center transition-all duration-1000 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-gray-300">
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

        {/* Name */}
        <h1 
          className={`text-4xl md:text-6xl font-light mb-4 text-gray-900 transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Tanishq Somani
        </h1>

        {/* Title */}
        <p 
          className={`text-lg md:text-xl text-gray-600 mb-8 font-light transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Software Engineer
        </p>

        {/* Description */}
        <p 
          className={`text-base text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Building scalable systems, optimizing performance, and solving complex problems at the intersection of software engineering and AI.
        </p>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={scrollToProjects}
            aria-label="Scroll to projects section"
            className="px-8 py-3 bg-gray-900 text-white font-medium rounded-sm hover:bg-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          >
            View Projects
          </button>
          <button
            onClick={downloadResume}
            aria-label="View resume PDF"
            className="px-8 py-3 bg-transparent text-gray-900 font-medium rounded-sm border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          >
            View Resume
          </button>
        </div>
      </div>
    </section>
  );
}
