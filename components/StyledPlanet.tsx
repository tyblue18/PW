"use client";

import { useEffect, useState } from "react";

type PlanetStyle = "hand-drawn" | "pixel" | "minimal" | "watercolor" | "neon" | "clean";

interface StyledPlanetProps {
  size?: number;
  style?: PlanetStyle;
}

export default function StyledPlanet({ size = 200, style = "hand-drawn" }: StyledPlanetProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderPlanet = () => {
    switch (style) {
      case "hand-drawn":
        return (
          <>
            {/* Outer atmospheric glow */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(circle at center, rgba(96, 165, 250, 0.2) 0%, transparent 70%)",
                filter: "blur(40px)",
                animation: "glowPulse 4s ease-in-out infinite",
              }}
            />
            {/* Main planet sphere */}
            <div
              className="absolute inset-0 rounded-full overflow-hidden"
              style={{
                background: `
                  radial-gradient(circle at 30% 30%, 
                    rgba(59, 130, 246, 0.95) 0%,
                    rgba(37, 99, 235, 0.9) 25%,
                    rgba(30, 64, 175, 0.85) 50%,
                    rgba(29, 78, 216, 0.9) 75%,
                    rgba(37, 99, 235, 0.95) 100%
                  )
                `,
                boxShadow: `
                  inset -80px -80px 120px rgba(0, 0, 0, 0.7),
                  inset 50px 50px 100px rgba(147, 197, 253, 0.4),
                  0 0 100px rgba(96, 165, 250, 0.5),
                  0 0 200px rgba(59, 130, 246, 0.4),
                  0 0 300px rgba(37, 99, 235, 0.3)
                `,
                animation: "planetSpin 30s linear infinite",
                filter: "contrast(1.15) brightness(1.05) saturate(1.1)",
              }}
            >
              {/* Enhanced continent shapes */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `
                    radial-gradient(ellipse 25% 45% at 28% 42%, rgba(74, 222, 128, 0.9) 0%, rgba(34, 197, 94, 0.8) 20%, rgba(22, 163, 74, 0.7) 35%, transparent 50%),
                    radial-gradient(ellipse 20% 35% at 58% 48%, rgba(34, 197, 94, 0.85) 0%, rgba(22, 163, 74, 0.75) 25%, transparent 48%),
                    radial-gradient(ellipse 22% 32% at 72% 30%, rgba(74, 222, 128, 0.8) 0%, rgba(34, 197, 94, 0.7) 30%, transparent 48%),
                    radial-gradient(ellipse 15% 12% at 68% 70%, rgba(34, 197, 94, 0.75) 0%, transparent 50%),
                    radial-gradient(ellipse 12% 18% at 45% 75%, rgba(22, 163, 74, 0.7) 0%, transparent 45%)
                  `,
                  animation: "planetSpin 30s linear infinite",
                  filter: "blur(0.8px)",
                }}
              />
              {/* Enhanced cloud layers */}
              <div
                className="absolute inset-0 rounded-full opacity-60"
                style={{
                  background: `
                    radial-gradient(ellipse 16% 10% at 26% 28%, rgba(255, 255, 255, 0.7) 0%, transparent 50%),
                    radial-gradient(ellipse 14% 8% at 52% 44%, rgba(255, 255, 255, 0.65) 0%, transparent 45%),
                    radial-gradient(ellipse 12% 7% at 70% 32%, rgba(255, 255, 255, 0.6) 0%, transparent 42%),
                    radial-gradient(ellipse 10% 6% at 35% 60%, rgba(255, 255, 255, 0.55) 0%, transparent 40%)
                  `,
                  animation: "planetSpin 35s linear infinite",
                  filter: "blur(1.5px)",
                }}
              />
              {/* Surface highlights for depth */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.15) 0%, transparent 50%)",
                  animation: "planetSpin 30s linear infinite",
                }}
              />
            </div>
          </>
        );

      case "pixel":
        return (
          <div
            className="absolute inset-0 rounded-full overflow-hidden"
            style={{
              background: `
                repeating-linear-gradient(
                  0deg,
                  rgba(59, 130, 246, 0.9) 0px,
                  rgba(37, 99, 235, 0.85) 2px,
                  rgba(59, 130, 246, 0.9) 4px
                ),
                radial-gradient(circle at 30% 30%, 
                  rgba(96, 165, 250, 0.8) 0%,
                  rgba(37, 99, 235, 0.9) 100%
                )
              `,
              imageRendering: "pixelated",
              boxShadow: `
                inset -50px -50px 80px rgba(0, 0, 0, 0.6),
                0 0 60px rgba(59, 130, 246, 0.4)
              `,
              animation: "planetSpin 20s linear infinite",
            }}
          >
            {/* Pixelated continents */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: `
                  repeating-linear-gradient(
                    45deg,
                    transparent 0px,
                    rgba(34, 197, 94, 0.8) 3px,
                    transparent 6px
                  ),
                  radial-gradient(ellipse 25% 40% at 30% 45%, rgba(34, 197, 94, 0.85) 0%, transparent 50%),
                  radial-gradient(ellipse 18% 30% at 60% 50%, rgba(22, 163, 74, 0.8) 0%, transparent 45%)
                `,
                animation: "planetSpin 20s linear infinite",
                imageRendering: "pixelated",
              }}
            />
          </div>
        );

      case "minimal":
        return (
          <div
            className="absolute inset-0 rounded-full overflow-hidden border-2 border-teal-500/30"
            style={{
              background: `
                radial-gradient(circle at 30% 30%, 
                  rgba(94, 234, 212, 0.3) 0%,
                  rgba(34, 211, 238, 0.2) 50%,
                  transparent 100%
                )
              `,
              boxShadow: `
                0 0 100px rgba(94, 234, 212, 0.3),
                inset 0 0 100px rgba(34, 211, 238, 0.2)
              `,
              animation: "planetSpin 30s linear infinite",
            }}
          >
            {/* Simple geometric shapes */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: `
                  radial-gradient(circle at 30% 50%, rgba(94, 234, 212, 0.4) 0%, transparent 40%),
                  radial-gradient(circle at 70% 50%, rgba(34, 211, 238, 0.3) 0%, transparent 35%)
                `,
                animation: "planetSpin 30s linear infinite",
              }}
            />
          </div>
        );

      case "watercolor":
        return (
          <div
            className="absolute inset-0 rounded-full overflow-hidden"
            style={{
              background: `
                radial-gradient(circle at 30% 30%, 
                  rgba(147, 197, 253, 0.7) 0%,
                  rgba(96, 165, 250, 0.6) 25%,
                  rgba(59, 130, 246, 0.5) 50%,
                  rgba(37, 99, 235, 0.6) 75%,
                  rgba(30, 64, 175, 0.7) 100%
                )
              `,
              boxShadow: `
                inset -40px -40px 60px rgba(0, 0, 0, 0.4),
                0 0 80px rgba(96, 165, 250, 0.3)
              `,
              animation: "planetSpin 25s linear infinite",
              filter: "blur(2px) contrast(0.9)",
            }}
          >
            {/* Watercolor-style continents - soft, blurred */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: `
                  radial-gradient(ellipse 30% 45% at 30% 45%, rgba(74, 222, 128, 0.6) 0%, transparent 50%),
                  radial-gradient(ellipse 25% 35% at 65% 50%, rgba(34, 197, 94, 0.5) 0%, transparent 45%),
                  radial-gradient(ellipse 22% 30% at 75% 30%, rgba(74, 222, 128, 0.55) 0%, transparent 48%)
                `,
                animation: "planetSpin 25s linear infinite",
                filter: "blur(3px)",
              }}
            />
          </div>
        );

      case "neon":
        return (
          <div
            className="absolute inset-0 rounded-full overflow-hidden"
            style={{
              background: `
                radial-gradient(circle at 30% 30%, 
                  rgba(16, 185, 129, 0.4) 0%,
                  rgba(5, 150, 105, 0.3) 50%,
                  transparent 100%
                )
              `,
              boxShadow: `
                0 0 120px rgba(16, 185, 129, 0.6),
                0 0 240px rgba(5, 150, 105, 0.4),
                inset 0 0 100px rgba(16, 185, 129, 0.3)
              `,
              animation: "planetSpin 20s linear infinite",
              border: "2px solid rgba(16, 185, 129, 0.5)",
            }}
          >
            {/* Neon continents */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: `
                  radial-gradient(ellipse 28% 42% at 30% 45%, rgba(16, 185, 129, 0.7) 0%, transparent 50%),
                  radial-gradient(ellipse 22% 32% at 60% 50%, rgba(5, 150, 105, 0.6) 0%, transparent 45%),
                  radial-gradient(ellipse 20% 28% at 72% 30%, rgba(16, 185, 129, 0.65) 0%, transparent 48%)
                `,
                animation: "planetSpin 20s linear infinite",
                filter: "blur(1px)",
                boxShadow: "0 0 40px rgba(16, 185, 129, 0.5)",
              }}
            />
          </div>
        );

      case "clean":
        return (
          <>
            {/* Soft outer atmospheric glow */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(circle at center, rgba(147, 197, 253, 0.3) 0%, rgba(96, 165, 250, 0.2) 30%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)",
                filter: "blur(60px)",
                animation: "glowPulse 8s ease-in-out infinite",
              }}
            />
            {/* Main planet sphere with realistic ocean colors */}
            <div
              className="absolute inset-0 rounded-full overflow-hidden"
              style={{
                background: `
                  radial-gradient(ellipse 110% 100% at 30% 30%, 
                    rgba(147, 197, 253, 0.98) 0%,
                    rgba(96, 165, 250, 0.95) 15%,
                    rgba(59, 130, 246, 0.92) 30%,
                    rgba(37, 99, 235, 0.9) 45%,
                    rgba(30, 64, 175, 0.92) 60%,
                    rgba(29, 78, 216, 0.95) 75%,
                    rgba(30, 58, 138, 0.98) 90%,
                    rgba(15, 23, 42, 1) 100%
                  )
                `,
                boxShadow: `
                  inset -120px -120px 180px rgba(0, 0, 0, 0.9),
                  inset 70px 70px 140px rgba(147, 197, 253, 0.5),
                  inset -30px -30px 60px rgba(0, 0, 0, 0.4),
                  0 0 100px rgba(96, 165, 250, 0.5),
                  0 0 200px rgba(59, 130, 246, 0.4),
                  0 0 300px rgba(37, 99, 235, 0.3)
                `,
                animation: "planetSpin 30s linear infinite",
                filter: "contrast(1.15) brightness(1.1) saturate(1.2)",
              }}
            >
              {/* Detailed continent shapes */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `
                    radial-gradient(ellipse 30% 50% at 28% 42%, rgba(34, 197, 94, 0.95) 0%, rgba(22, 163, 74, 0.9) 12%, rgba(20, 83, 45, 0.85) 25%, transparent 48%),
                    radial-gradient(ellipse 24% 40% at 32% 50%, rgba(22, 163, 74, 0.95) 0%, rgba(20, 83, 45, 0.9) 18%, transparent 44%),
                    radial-gradient(ellipse 22% 38% at 60% 48%, rgba(34, 197, 94, 0.9) 0%, rgba(22, 163, 74, 0.85) 22%, transparent 47%),
                    radial-gradient(ellipse 26% 32% at 72% 30%, rgba(74, 222, 128, 0.85) 0%, rgba(34, 197, 94, 0.8) 26%, transparent 45%),
                    radial-gradient(ellipse 18% 16% at 68% 70%, rgba(34, 197, 94, 0.8) 0%, transparent 48%),
                    radial-gradient(ellipse 16% 22% at 45% 75%, rgba(22, 163, 74, 0.75) 0%, transparent 44%),
                    radial-gradient(ellipse 12% 10% at 80% 60%, rgba(34, 197, 94, 0.7) 0%, transparent 38%)
                  `,
                  animation: "planetSpin 30s linear infinite",
                  filter: "blur(0.3px)",
                }}
              />
              {/* Terrain detail - mountains and valleys */}
              <div
                className="absolute inset-0 rounded-full opacity-80"
                style={{
                  background: `
                    radial-gradient(ellipse 10% 14% at 30% 40%, rgba(20, 83, 45, 0.95) 0%, transparent 52%),
                    radial-gradient(ellipse 8% 12% at 62% 48%, rgba(20, 83, 45, 0.9) 0%, transparent 46%),
                    radial-gradient(ellipse 9% 11% at 70% 32%, rgba(20, 83, 45, 0.85) 0%, transparent 42%),
                    radial-gradient(ellipse 6% 8% at 35% 55%, rgba(20, 83, 45, 0.8) 0%, transparent 40%)
                  `,
                  animation: "planetSpin 30s linear infinite",
                  filter: "blur(0.8px)",
                }}
              />
              {/* Realistic cloud layers */}
              <div
                className="absolute inset-0 rounded-full opacity-75"
                style={{
                  background: `
                    radial-gradient(ellipse 20% 14% at 26% 28%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.65) 25%, transparent 58%),
                    radial-gradient(ellipse 18% 12% at 52% 44%, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.6) 30%, transparent 53%),
                    radial-gradient(ellipse 16% 11% at 70% 32%, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.55) 28%, transparent 50%),
                    radial-gradient(ellipse 14% 10% at 35% 60%, rgba(255, 255, 255, 0.65) 0%, transparent 47%),
                    radial-gradient(ellipse 12% 9% at 75% 65%, rgba(255, 255, 255, 0.6) 0%, transparent 42%)
                  `,
                  animation: "planetSpin 36s linear infinite",
                  filter: "blur(2.5px)",
                }}
              />
              {/* Bright highlight for spherical effect */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "radial-gradient(ellipse 85% 65% at 30% 30%, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.15) 25%, rgba(255, 255, 255, 0.05) 50%, transparent 65%)",
                  animation: "planetSpin 30s linear infinite",
                }}
              />
            </div>
          </>
        );

      default:
        return null;
    }
  };

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
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.05);
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
        {renderPlanet()}
      </div>
    </>
  );
}
