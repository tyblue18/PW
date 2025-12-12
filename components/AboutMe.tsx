"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function AboutMe() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto">
        <h2 
          className={`text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          About Me
        </h2>
        
        <div 
          className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-12 transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
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
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              I&apos;m Tanishq, a software engineer with a background in microbiology. I now work as a Graduate Assistant specializing in programming and automation, building tools that streamline workflows and improve system efficiency. My path from life sciences into computer science gives me a unique perspective. I understand both the complexity of biological data and the engineering that&apos;s required to analyze, optimize, and build tools around it.
            </p>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              During my transition into CS, I discovered a passion for computational problem-solving, especially in systems that blend data, performance, and AI. This led me to projects like a Particle Swarm Optimization (PSO) pipeline for MRI brain-tumor segmentation, where I combined my understanding of biological structures with algorithmic optimizations to achieve a 0.8130 average Dice score with zero false positives on healthy images. I&apos;ve also built machine learning systems for authorship detection, interactive web apps, and high-performance dashboards for analyzing HPC metrics.
            </p>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              My long-term goal is to sit at the intersection of biology and computing, whether that&apos;s medical imaging, computational biology, bio-AI, or building tools that make scientific workflows faster, more accurate, and more scalable.
            </p>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
              Outside of engineering, my body is my ongoing experiment, a place where discipline meets curiosity. I&apos;ve spent five years weight training, shaping strength rep by rep, and I dream of coaching others someday. I&apos;ve run multiple marathons, with a fastest time of 3:53, and I&apos;m chasing two big goals: a Natural IFBB Pro card and a sub-3 marathon. The pursuit of those extremes constantly reminds me how remarkable the human body is, and how much potential we hold when we choose to push our limits.
            </p>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
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

