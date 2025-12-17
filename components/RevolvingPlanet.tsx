"use client";

import { useEffect, useState } from "react";

export default function RevolvingPlanet({ size = 200 }: { size?: number }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes planetSpin {
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
        {/* Planet Sphere Base - Deep ocean blue */}
        <div
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{
            background: `
              radial-gradient(circle at 30% 30%, 
                rgba(30, 64, 175, 0.9) 0%,
                rgba(29, 78, 216, 0.85) 15%,
                rgba(37, 99, 235, 0.8) 30%,
                rgba(59, 130, 246, 0.75) 50%,
                rgba(30, 58, 138, 0.9) 100%
              )
            `,
            boxShadow: `
              inset -80px -80px 150px rgba(0, 0, 0, 0.7),
              inset 50px 50px 120px rgba(59, 130, 246, 0.4),
              0 0 120px rgba(59, 130, 246, 0.4),
              0 0 240px rgba(37, 99, 235, 0.3)
            `,
            animation: "planetSpin 25s linear infinite",
          }}
        >
          {/* Base ocean layer */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `
                radial-gradient(ellipse 100% 70% at 50% 50%, 
                  rgba(37, 99, 235, 0.8) 0%,
                  rgba(30, 64, 175, 0.9) 100%
                )
              `,
              animation: "planetSpin 25s linear infinite",
            }}
          />

          {/* Continent 1 - Large landmass (like Americas) */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `
                polygon(25% 20%, 35% 15%, 40% 25%, 38% 40%, 32% 55%, 28% 70%, 22% 75%, 18% 65%, 20% 50%, 22% 35%, 24% 25%),
                radial-gradient(ellipse 28% 45% at 30% 45%, 
                  rgba(34, 197, 94, 0.95) 0%,
                  rgba(22, 163, 74, 0.9) 30%,
                  rgba(20, 83, 45, 0.85) 60%,
                  transparent 100%
                )
              `,
              clipPath: `polygon(
                20% 15%, 35% 12%, 42% 22%, 40% 38%, 35% 52%, 30% 68%, 25% 72%, 18% 68%, 20% 55%, 22% 38%, 22% 25%, 20% 18%
              )`,
              animation: "planetSpin 25s linear infinite",
            }}
          />

          {/* Continent 2 - Medium landmass (like Africa/Europe) */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `
                radial-gradient(ellipse 22% 35% at 55% 50%, 
                  rgba(34, 197, 94, 0.9) 0%,
                  rgba(22, 163, 74, 0.85) 40%,
                  rgba(20, 83, 45, 0.8) 70%,
                  transparent 100%
                )
              `,
              clipPath: `polygon(
                50% 30%, 60% 28%, 65% 38%, 63% 52%, 58% 65%, 52% 72%, 48% 70%, 50% 58%, 52% 45%, 52% 35%
              )`,
              animation: "planetSpin 25s linear infinite",
            }}
          />

          {/* Continent 3 - Small landmass (like Asia) */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `
                radial-gradient(ellipse 20% 28% at 75% 35%, 
                  rgba(34, 197, 94, 0.9) 0%,
                  rgba(22, 163, 74, 0.85) 50%,
                  transparent 100%
                )
              `,
              clipPath: `polygon(
                70% 25%, 80% 22%, 82% 32%, 78% 45%, 72% 52%, 68% 48%, 70% 38%, 70% 30%
              )`,
              animation: "planetSpin 25s linear infinite",
            }}
          />

          {/* Continent 4 - Australia-like */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `
                radial-gradient(ellipse 15% 12% at 70% 75%, 
                  rgba(34, 197, 94, 0.85) 0%,
                  rgba(22, 163, 74, 0.8) 60%,
                  transparent 100%
                )
              `,
              clipPath: `polygon(
                65% 70%, 75% 68%, 76% 75%, 72% 80%, 68% 82%, 65% 78%, 65% 72%
              )`,
              animation: "planetSpin 25s linear infinite",
            }}
          />

          {/* Mountain ranges - darker green/brown */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `
                radial-gradient(ellipse 8% 12% at 32% 42%, rgba(20, 83, 45, 0.95) 0%, transparent 50%),
                radial-gradient(ellipse 6% 10% at 58% 52%, rgba(20, 83, 45, 0.9) 0%, transparent 45%),
                radial-gradient(ellipse 7% 9% at 76% 38%, rgba(20, 83, 45, 0.9) 0%, transparent 40%)
              `,
              animation: "planetSpin 25s linear infinite",
            }}
          />

          {/* Desert/arid regions - tan/brown */}
          <div
            className="absolute inset-0 rounded-full opacity-60"
            style={{
              background: `
                radial-gradient(ellipse 12% 8% at 38% 48%, rgba(217, 119, 6, 0.7) 0%, transparent 60%),
                radial-gradient(ellipse 10% 6% at 62% 58%, rgba(194, 65, 12, 0.6) 0%, transparent 55%)
              `,
              animation: "planetSpin 25s linear infinite",
            }}
          />

          {/* Cloud cover - realistic white clouds */}
          <div
            className="absolute inset-0 rounded-full opacity-50"
            style={{
              background: `
                radial-gradient(ellipse 18% 10% at 28% 32%, rgba(255, 255, 255, 0.7) 0%, transparent 50%),
                radial-gradient(ellipse 15% 8% at 52% 48%, rgba(255, 255, 255, 0.6) 0%, transparent 45%),
                radial-gradient(ellipse 12% 7% at 68% 35%, rgba(255, 255, 255, 0.65) 0%, transparent 40%),
                radial-gradient(ellipse 14% 9% at 45% 65%, rgba(255, 255, 255, 0.6) 0%, transparent 42%),
                radial-gradient(ellipse 10% 6% at 75% 72%, rgba(255, 255, 255, 0.55) 0%, transparent 35%)
              `,
              animation: "planetSpin 30s linear infinite",
            }}
          />

          {/* Terminator line - day/night transition */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `linear-gradient(
                90deg,
                rgba(0, 0, 0, 0.4) 0%,
                rgba(0, 0, 0, 0.2) 45%,
                transparent 50%,
                rgba(59, 130, 246, 0.1) 55%,
                transparent 100%
              )`,
              animation: "planetSpin 25s linear infinite",
            }}
          />

          {/* Atmospheric glow - blue halo */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `radial-gradient(circle at 30% 30%, 
                rgba(59, 130, 246, 0.3) 0%,
                rgba(37, 99, 235, 0.2) 40%,
                transparent 70%
              )`,
              animation: "planetSpin 25s linear infinite",
            }}
          />
        </div>

        {/* Outer atmospheric glow */}
        <div
          className="absolute inset-0 rounded-full blur-3xl opacity-40"
          style={{
            background: "radial-gradient(circle, rgba(59, 130, 246, 0.4), rgba(37, 99, 235, 0.3), transparent 70%)",
            animation: "glowPulse 6s ease-in-out infinite",
          }}
        />
      </div>
    </>
  );
}



