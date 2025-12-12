"use client";

import { ProjectGraph } from "@/data/projects";

interface GraphsSectionProps {
  graphs: ProjectGraph[];
}

export default function GraphsSection({ graphs }: GraphsSectionProps) {
  if (!graphs || graphs.length === 0) return null;

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-6 text-white">Data & Visualizations</h2>
      
      <div className="space-y-8">
        {graphs.map((graph, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-teal-500/50 transition-all duration-300"
          >
            {graph.title && (
              <h3 className="text-xl font-semibold mb-4 text-white">{graph.title}</h3>
            )}
            <div className="bg-black/30 rounded-lg p-4 mb-3 overflow-hidden">
              <img
                src={graph.src}
                alt={graph.alt}
                className="w-full h-auto rounded-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400'%3E%3Crect fill='%23111' width='800' height='400'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='20' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EGraph Placeholder%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
            {graph.caption && (
              <p className="text-gray-400 text-sm leading-relaxed">{graph.caption}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

