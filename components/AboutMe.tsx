"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function AboutMe() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="about" className="py-24 px-4 bg-black relative">
      {/* Space background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
      {/* Animated Nebula effect */}
      <div 
        className="absolute top-1/3 right-1/3 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl"
        style={{
          animation: "nebulaFloat 10s ease-in-out infinite",
        }}
      ></div>
      
      <div className="max-w-5xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section header with code styling */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 sm:gap-4 mb-4">
            <span className="text-teal-400 font-mono text-xs sm:text-sm">04.</span>
            <h2 
              className={`text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-1000 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              About Me
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-teal-500/50 to-transparent"></div>
          </div>
        </div>
        
        <div 
          className={`bg-white/5 border border-white/10 rounded-lg p-6 sm:p-8 md:p-10 lg:p-12 transition-opacity duration-1000 delay-200 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
          style={{ 
            contain: 'layout style paint',
            willChange: mounted ? 'opacity' : 'auto'
          }}
        >
          {/* Running Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-full max-w-2xl rounded-lg overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/run.jpg"
                alt="Tanishq Somani running"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            {/* Introduction */}
            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed mb-6 font-medium">
              I&apos;m <strong className="text-teal-400">Tanishq</strong>, a software engineer with a background in microbiology. I now work as a <strong className="text-teal-400">Graduate Assistant</strong> specializing in programming and automation, building tools that streamline workflows and improve system efficiency.
            </p>
            
            {/* Key Achievements - Bullet Points */}
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-teal-400">→</span> Key Technical Achievements
              </h3>
              <ul className="space-y-3 text-base sm:text-lg text-gray-300 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">•</span>
                  <span>Built a <strong className="text-white">Particle Swarm Optimization (PSO) pipeline</strong> for MRI brain-tumor segmentation, achieving <strong className="text-teal-400">0.813 Dice score</strong> with <strong className="text-teal-400">zero false positives</strong> on 75,000+ scans</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">•</span>
                  <span>Developed <strong className="text-white">machine learning systems</strong> for authorship detection and financial market prediction</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">•</span>
                  <span>Created <strong className="text-white">high-performance dashboards</strong> for analyzing HPC metrics with 12 visualization types</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">•</span>
                  <span>Built <strong className="text-white">AI-powered security analysis platforms</strong> combining rule-based checking with RAG-enhanced LLM explanations</span>
                </li>
              </ul>
            </div>
            
            {/* Unique Perspective */}
            <div className="mb-6 p-4 bg-teal-500/5 border-l-4 border-teal-500/50 rounded-r-lg">
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                My path from <strong className="text-teal-400">life sciences into computer science</strong> gives me a unique perspective. I understand both the complexity of biological data and the engineering required to analyze, optimize, and build tools around it.
              </p>
            </div>
            
            {/* Long-term Goals */}
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-teal-400">→</span> Long-term Goals
              </h3>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                To sit at the intersection of <strong className="text-white">biology and computing</strong>, whether that&apos;s medical imaging, computational biology, bio-AI, or building tools that make scientific workflows faster, more accurate, and more scalable.
              </p>
            </div>
            
            {/* Personal Interests */}
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-teal-400">→</span> Outside Engineering
              </h3>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-3">
                My body is my ongoing experiment, where discipline meets curiosity:
              </p>
              <ul className="space-y-2 text-base sm:text-lg text-gray-300 list-none ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">🏋️</span>
                  <span><strong className="text-white">5 years</strong> of weight training, pursuing a Natural IFBB Pro card</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">🏃</span>
                  <span><strong className="text-white">Marathon runner</strong> with a PR of <strong className="text-purple-400">3:53</strong>, chasing a sub-3 goal</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">🎯</span>
                  <span>Dream of <strong className="text-white">coaching others</strong> and pushing human potential</span>
                </li>
              </ul>
            </div>
            
            {/* Closing */}
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-medium">
              I&apos;m always looking for opportunities to build systems that matter, especially where biology and software intersect, and grow as a developer, problem-solver, and athlete.
            </p>
          </div>

          {/* Visual indicators */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="text-3xl mb-2">🏃</div>
              <div className="text-sm text-gray-400">Marathon Runner</div>
              <div className="text-xs text-gray-500 mt-1">PR: 3:53</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="text-3xl mb-2">💪</div>
              <div className="text-sm text-gray-400">Bodybuilder</div>
              <div className="text-xs text-gray-500 mt-1">5 years training</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="text-3xl mb-2">🎯</div>
              <div className="text-sm text-gray-400">Goals</div>
              <div className="text-xs text-gray-500 mt-1">IFBB Pro & Sub-3</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

