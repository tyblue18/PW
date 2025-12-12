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
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 
          className={`text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-teal-500/50 transition-all duration-1000 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl mb-3">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {skill.category}
              </h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-400 flex items-center">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



