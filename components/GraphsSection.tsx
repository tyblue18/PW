"use client";

import Image from "next/image";
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
            <div className="bg-black/30 rounded-lg p-4 mb-3 overflow-hidden relative aspect-video">
              <Image
                src={graph.src}
                alt={graph.alt}
                fill
                className="object-contain rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                loading="lazy"
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

