"use client";

import { Metric } from "@/data/projects";

interface MetricsDisplayProps {
  metrics: Metric[];
}

export default function MetricsDisplay({ metrics }: MetricsDisplayProps) {
  if (!metrics || metrics.length === 0) return null;

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-6 text-white">Key Metrics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-teal-500/50 transition-all duration-300 text-center"
          >
            <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              {metric.value}
            </div>
            <div className="text-lg font-semibold text-white mb-2">
              {metric.label}
            </div>
            {metric.description && (
              <div className="text-sm text-gray-400">
                {metric.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}







