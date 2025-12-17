"use client";

import { useEffect, useState } from "react";

export default function EarthPlanet({ size = 200 }: { size?: number }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes earthSpin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes cloudMove {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes glowPulse {
          0%, 100% {
            opacity: 0.3;
            filter: blur(40px);
          }
          50% {
            opacity: 0.5;
            filter: blur(60px);
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
        {/* Planet Base - Ocean Blue */}
        <div
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{
            background: `
              radial-gradient(circle at 30% 30%, 
                rgba(30, 64, 175, 0.95) 0%,
                rgba(29, 78, 216, 0.9) 20%,
                rgba(37, 99, 235, 0.85) 40%,
                rgba(59, 130, 246, 0.8) 60%,
                rgba(30, 58, 138, 0.95) 100%
              )
            `,
            boxShadow: `
              inset -100px -100px 200px rgba(0, 0, 0, 0.8),
              inset 60px 60px 150px rgba(59, 130, 246, 0.5),
              0 0 150px rgba(59, 130, 246, 0.5),
              0 0 300px rgba(37, 99, 235, 0.4)
            `,
            animation: "earthSpin 30s linear infinite",
          }}
        >
          {/* Continent shapes using complex radial gradients */}
          
          {/* Large continent (Americas-like) */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `
                radial-gradient(ellipse 25% 50% at 28% 45%, rgba(34, 197, 94, 0.95) 0%, rgba(34, 197, 94, 0.9) 15%, rgba(22, 163, 74, 0.85) 30%, transparent 50%),
                radial-gradient(ellipse 20% 35% at 32% 50%, rgba(22, 163, 74, 0.9) 0%, rgba(20, 83, 45, 0.85) 25%, transparent 45%),
                radial-gradient(ellipse 15% 25% at 30% 40%, rgba(20, 83, 45, 0.9) 0%, transparent 40%)
              `,
              animation: "earthSpin 30s linear infinite",
            }}
          />

          {/* Medium continent (Africa/Europe-like) */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `
                radial-gradient(ellipse 18% 40% at 52% 48%, rgba(34, 197, 94, 0.9) 0%, rgba(22, 163, 74, 0.85) 30%, transparent 50%),
                radial-gradient(ellipse 12% 20% at 55% 52%, rgba(20, 83, 45, 0.85) 0%, transparent 35%)
              `,
              animation: "earthSpin 30s linear infinite",
            }}
          />

          {/* Asia-like continent */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `
                radial-gradient(ellipse 22% 30% at 72% 32%, rgba(34, 197, 94, 0.9) 0%, rgba(22, 163, 74, 0.85) 35%, transparent 55%),
                radial-gradient(ellipse 15% 18% at 75% 38%, rgba(20, 83, 45, 0.85) 0%, transparent 40%)
              `,
              animation: "earthSpin 30s linear infinite",
            }}
          />

          {/* Australia-like */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `
                radial-gradient(ellipse 12% 10% at 68% 72%, rgba(34, 197, 94, 0.85) 0%, rgba(22, 163, 74, 0.8) 50%, transparent 70%)
              `,
              animation: "earthSpin 30s linear infinite",
            }}
          />

          {/* Desert regions */}
          <div
            className="absolute inset-0 rounded-full opacity-70"
            style={{
              background: `
                radial-gradient(ellipse 10% 8% at 40% 50%, rgba(217, 119, 6, 0.7) 0%, transparent 60%),
                radial-gradient(ellipse 8% 6% at 60% 60%, rgba(194, 65, 12, 0.6) 0%, transparent 55%)
              `,
              animation: "earthSpin 30s linear infinite",
            }}
          />

          {/* Cloud layer */}
          <div
            className="absolute inset-0 rounded-full opacity-60"
            style={{
              background: `
                radial-gradient(ellipse 16% 9% at 26% 30%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.6) 30%, transparent 55%),
                radial-gradient(ellipse 14% 7% at 50% 46%, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.5) 25%, transparent 50%),
                radial-gradient(ellipse 12% 6% at 66% 33%, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.5) 28%, transparent 48%),
                radial-gradient(ellipse 13% 8% at 43% 63%, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.5) 30%, transparent 52%),
                radial-gradient(ellipse 10% 5% at 73% 70%, rgba(255, 255, 255, 0.65) 0%, transparent 40%)
              `,
              animation: "cloudMove 35s linear infinite",
            }}
          />

          {/* Terminator line - day/night */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `linear-gradient(
                90deg,
                rgba(0, 0, 0, 0.5) 0%,
                rgba(0, 0, 0, 0.3) 42%,
                transparent 48%,
                rgba(59, 130, 246, 0.15) 52%,
                transparent 100%
              )`,
              animation: "earthSpin 30s linear infinite",
            }}
          />
        </div>

        {/* Atmospheric glow */}
        <div
          className="absolute inset-0 rounded-full blur-3xl opacity-50"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.5), rgba(37, 99, 235, 0.4), transparent 70%)",
            animation: "glowPulse 7s ease-in-out infinite",
          }}
        />
      </div>
    </>
  );
}



