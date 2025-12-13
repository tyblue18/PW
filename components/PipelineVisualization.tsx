"use client";

import { PipelineStep } from "@/data/projects";

interface PipelineVisualizationProps {
  pipeline: PipelineStep[];
}

export default function PipelineVisualization({ pipeline }: PipelineVisualizationProps) {
  if (!pipeline || pipeline.length === 0) return null;

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-8 text-white">Pipeline</h2>
      
      <div className="relative">
        {/* Connection line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 via-cyan-500 to-teal-500 hidden md:block"></div>
        
        <div className="space-y-6">
          {pipeline.map((step, index) => (
            <div
              key={index}
              className="relative flex items-start gap-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-teal-500/50 transition-all duration-300"
            >
              {/* Step number circle */}
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center text-white font-bold text-lg border-4 border-black shadow-lg">
                {step.icon || step.step}
              </div>
              
              {/* Step content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Arrow (hidden on mobile) */}
              {index < pipeline.length - 1 && (
                <div className="hidden md:block absolute left-8 top-16 transform -translate-x-1/2">
                  <svg
                    className="w-6 h-6 text-teal-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}




