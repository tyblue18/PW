"use client";

import { useEffect, useState } from "react";

export default function Moon({ size = 200 }: { size?: number }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes moonSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes glowPulse {
          0%, 100% {
            opacity: 0.2;
            filter: blur(50px);
          }
          50% {
            opacity: 0.4;
            filter: blur(70px);
          }
        }
      `}</style>
      <div
        className={`relative ${mounted ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}
        style={{ 
          width: size, 
          height: size,
        }}
      >
        {/* Moon Base - Gray surface */}
        <div
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{
            background: `
              radial-gradient(circle at 30% 30%, 
                rgba(209, 213, 219, 0.95) 0%,
                rgba(156, 163, 175, 0.9) 20%,
                rgba(107, 114, 128, 0.85) 40%,
                rgba(75, 85, 99, 0.9) 60%,
                rgba(55, 65, 81, 0.95) 100%
              )
            `,
            boxShadow: `
              inset -80px -80px 150px rgba(0, 0, 0, 0.6),
              inset 50px 50px 120px rgba(255, 255, 255, 0.2),
              0 0 100px rgba(209, 213, 219, 0.3),
              0 0 200px rgba(156, 163, 175, 0.2)
            `,
            animation: "moonSpin 40s linear infinite",
          }}
        >
          {/* Moon surface texture - lighter areas */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `
                radial-gradient(ellipse 15% 12% at 25% 30%, rgba(229, 231, 235, 0.9) 0%, transparent 50%),
                radial-gradient(ellipse 12% 10% at 60% 45%, rgba(243, 244, 246, 0.85) 0%, transparent 45%),
                radial-gradient(ellipse 10% 8% at 45% 65%, rgba(229, 231, 235, 0.8) 0%, transparent 40%),
                radial-gradient(ellipse 8% 6% at 70% 25%, rgba(243, 244, 246, 0.75) 0%, transparent 35%),
                radial-gradient(ellipse 9% 7% at 30% 70%, rgba(229, 231, 235, 0.8) 0%, transparent 38%)
              `,
              animation: "moonSpin 40s linear infinite",
            }}
          />

          {/* Craters - Dark circular depressions */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `
                radial-gradient(circle at 20% 25%, rgba(55, 65, 81, 0.8) 0%, rgba(75, 85, 99, 0.6) 30%, transparent 50%),
                radial-gradient(circle at 55% 40%, rgba(55, 65, 81, 0.75) 0%, rgba(75, 85, 99, 0.55) 28%, transparent 48%),
                radial-gradient(circle at 40% 60%, rgba(55, 65, 81, 0.7) 0%, rgba(75, 85, 99, 0.5) 25%, transparent 45%),
                radial-gradient(circle at 70% 20%, rgba(55, 65, 81, 0.75) 0%, rgba(75, 85, 99, 0.55) 30%, transparent 52%),
                radial-gradient(circle at 25% 75%, rgba(55, 65, 81, 0.7) 0%, rgba(75, 85, 99, 0.5) 27%, transparent 47%),
                radial-gradient(circle at 65% 70%, rgba(55, 65, 81, 0.65) 0%, rgba(75, 85, 99, 0.45) 22%, transparent 42%),
                radial-gradient(circle at 80% 50%, rgba(55, 65, 81, 0.7) 0%, rgba(75, 85, 99, 0.5) 26%, transparent 46%),
                radial-gradient(circle at 15% 50%, rgba(55, 65, 81, 0.68) 0%, rgba(75, 85, 99, 0.48) 24%, transparent 44%),
                radial-gradient(circle at 50% 25%, rgba(55, 65, 81, 0.72) 0%, rgba(75, 85, 99, 0.52) 29%, transparent 49%),
                radial-gradient(circle at 35% 45%, rgba(55, 65, 81, 0.66) 0%, rgba(75, 85, 99, 0.46) 23%, transparent 43%)
              `,
              animation: "moonSpin 40s linear infinite",
            }}
          />

          {/* Large craters with rims */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `
                radial-gradient(circle at 30% 35%, 
                  transparent 0%,
                  rgba(107, 114, 128, 0.3) 35%,
                  rgba(55, 65, 81, 0.7) 45%,
                  rgba(75, 85, 99, 0.5) 55%,
                  transparent 65%
                ),
                radial-gradient(circle at 60% 50%, 
                  transparent 0%,
                  rgba(107, 114, 128, 0.3) 32%,
                  rgba(55, 65, 81, 0.7) 42%,
                  rgba(75, 85, 99, 0.5) 52%,
                  transparent 62%
                ),
                radial-gradient(circle at 45% 70%, 
                  transparent 0%,
                  rgba(107, 114, 128, 0.25) 30%,
                  rgba(55, 65, 81, 0.65) 40%,
                  rgba(75, 85, 99, 0.45) 50%,
                  transparent 60%
                )
              `,
              animation: "moonSpin 40s linear infinite",
            }}
          />

          {/* Surface variations - darker patches */}
          <div
            className="absolute inset-0 rounded-full opacity-60"
            style={{
              background: `
                radial-gradient(ellipse 20% 15% at 40% 50%, rgba(75, 85, 99, 0.6) 0%, transparent 50%),
                radial-gradient(ellipse 15% 12% at 65% 35%, rgba(75, 85, 99, 0.55) 0%, transparent 45%),
                radial-gradient(ellipse 18% 14% at 25% 60%, rgba(75, 85, 99, 0.58) 0%, transparent 48%)
              `,
              animation: "moonSpin 40s linear infinite",
            }}
          />

          {/* Terminator line - day/night on moon */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `linear-gradient(
                90deg,
                rgba(0, 0, 0, 0.6) 0%,
                rgba(0, 0, 0, 0.4) 45%,
                transparent 48%,
                rgba(229, 231, 235, 0.1) 52%,
                transparent 100%
              )`,
              animation: "moonSpin 40s linear infinite",
            }}
          />

          {/* Highlight from sun */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `radial-gradient(circle at 30% 30%, 
                rgba(255, 255, 255, 0.3) 0%,
                rgba(243, 244, 246, 0.2) 30%,
                transparent 60%
              )`,
              animation: "moonSpin 40s linear infinite",
            }}
          />
        </div>

        {/* Outer glow - moon glow */}
        <div
          className="absolute inset-0 rounded-full blur-3xl opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(209, 213, 219, 0.4), rgba(156, 163, 175, 0.3), transparent 70%)",
            animation: "glowPulse 8s ease-in-out infinite",
          }}
        />
      </div>
    </>
  );
}
