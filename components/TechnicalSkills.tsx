"use client";

import { useEffect, useState } from "react";

const skills = [
  // Row 1 - Top Priority
  {
    category: "Core Languages & Platforms",
    items: ["Python", "C++", "C#", "Bash", "Git"],
    icon: "🐍",
  },
  {
    category: "Web & Backend Development",
    items: ["FastAPI", "Dash", "REST APIs", "OpenRouter API"],
    icon: "🌐",
  },
  {
    category: "Data Visualization & Analysis",
    items: ["Plotly", "Pandas", "NumPy", "Streamlit", "SciPy"],
    icon: "📊",
  },
  // Row 2 - Specialized Skills
  {
    category: "Machine Learning & AI",
    items: ["LangChain", "RAG", "LLMs", "scikit-learn"],
    icon: "🧠",
  },
  {
    category: "Performance & Systems Eng.",
    items: ["Caliper", "LLNL Thicket", "Performance Engineering", "PSO"],
    icon: "💻",
  },
  {
    category: "Data & Vector Databases",
    items: ["ChromaDB", "HuggingFace Embeddings", "Vector Stores"],
    icon: "🗄️",
  },
  // Row 3 - Secondary/Supporting
  {
    category: "Build/Ops & Infrastructure",
    items: ["CMake", "Shell Scripts"],
    icon: "⚙️",
  },
  {
    category: "Game Development",
    items: ["Unity", "C#", "WebGL"],
    icon: "🎮",
  },
  {
    category: "Computer Vision",
    items: ["OpenCV", "Image Processing"],
    icon: "👁️",
  },
];

export default function TechnicalSkills() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="skills" className="py-24 px-4 bg-black relative">
      {/* Space background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
      {/* Animated Nebula effect */}
      <div 
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
        style={{
          animation: "nebulaFloat 12s ease-in-out infinite",
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section header with code styling */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 sm:gap-4 mb-4">
            <span className="text-teal-400 font-mono text-xs sm:text-sm">02.</span>
            <h2 
              className={`text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-1000 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Technical Stack
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-teal-500/50 to-transparent"></div>
          </div>
          <p className="text-gray-400 text-base sm:text-lg ml-8 sm:ml-12">
            Technologies and tools I work with
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
          {skills.map((skill, index) => {
            // Fixed random values per card to avoid re-renders
            const cardRotation = [-0.2, 0.15, -0.1, 0.2, -0.15, 0.1, -0.25, 0.18, -0.12][index % 9];
            const iconRotation = [-1.5, 2, -2.5, 1.8, -2.2, 1.5, -1.8, 2.3, -1.2][index % 9];
            const lineOffset = [-0.5, 0.3, -0.8, 0.6, -0.4, 0.7, -0.6, 0.4, -0.3][index % 9];
            
            return (
              <div
                key={skill.category}
                className={`group bg-white/5 border border-white/10 rounded-lg p-4 sm:p-6 hover:bg-white/10 hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] touch-manipulation ${
                  mounted ? "opacity-100" : "opacity-0"
                }`}
                style={{ 
                  contain: 'layout style paint',
                  willChange: 'transform, opacity',
                  transitionDelay: `${index * 50}ms`,
                  transform: `rotate(${cardRotation}deg)`,
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl" style={{ transform: `rotate(${iconRotation}deg)` }}>{skill.icon}</div>
                  <div className="w-8 h-px bg-teal-500/50 group-hover:w-12 transition-all" style={{ 
                    transform: `translateY(${lineOffset}px)`,
                  }}></div>
                </div>
                
                <h3 className="text-lg font-semibold mb-4 text-white font-mono">
                  {skill.category}
                </h3>
                
                {/* Skills list with code-like styling */}
                <div className="space-y-2">
                  {skill.items.map((item, itemIndex) => {
                    const itemOffset = [-1, 0.5, -0.8, 1.2, -0.6, 0.9, -1.1, 0.7, -0.4, 1][itemIndex % 10];
                    const codeRotation = [-0.1, 0.08, -0.12, 0.15, -0.09, 0.11, -0.13, 0.07, -0.14, 0.1][itemIndex % 10];
                    
                    return (
                      <div 
                        key={item} 
                        className="flex items-center text-sm text-gray-400 hover:text-teal-400 transition-colors"
                        style={{
                          transform: `translateX(${itemOffset}px)`,
                        }}
                      >
                        <span className="text-teal-500/70 mr-2 font-mono">→</span>
                        <code className="text-xs bg-black/30 px-2 py-1 rounded border border-white/5" style={{
                          transform: `rotate(${codeRotation}deg)`,
                        }}>
                          {item}
                        </code>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}







