"use client";

import { useEffect, useState } from "react";

export default function Starfield() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate stars with different layers for depth
  const starsFar = Array.from({ length: 100 }).map((_, i) => ({
    id: `far-${i}`,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 1 + 0.5,
    opacity: Math.random() * 0.3 + 0.2,
    twinkle: Math.random() * 4 + 3,
    drift: Math.random() * 20 + 10,
  }));

  const starsMid = Array.from({ length: 50 }).map((_, i) => ({
    id: `mid-${i}`,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.5 + 0.4,
    twinkle: Math.random() * 3 + 2,
    drift: Math.random() * 15 + 8,
  }));

  const starsNear = Array.from({ length: 20 }).map((_, i) => ({
    id: `near-${i}`,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 2,
    opacity: Math.random() * 0.7 + 0.5,
    twinkle: Math.random() * 2 + 1,
    drift: Math.random() * 10 + 5,
  }));

  // Shooting stars
  const shootingStars = Array.from({ length: 3 }).map((_, i) => ({
    id: `shooting-${i}`,
    startX: Math.random() * 100,
    startY: Math.random() * 50,
    duration: Math.random() * 2 + 1.5,
    delay: Math.random() * 5,
  }));

  return (
    <>
      <style jsx global>{`
        @keyframes starTwinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        @keyframes starDrift {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(var(--drift-x), var(--drift-y));
          }
        }
        @keyframes shootingStar {
          0% {
            transform: translate(0, 0) scale(0);
            opacity: 1;
          }
          10% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(200px, 200px) scale(0);
            opacity: 0;
          }
        }
      `}</style>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Far stars */}
        {starsFar.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animation: `starTwinkle ${star.twinkle}s ease-in-out infinite, starDrift ${star.drift}s ease-in-out infinite alternate`,
              animationDelay: `${Math.random() * star.twinkle}s`,
              '--drift-x': `${Math.random() * 20 - 10}px`,
              '--drift-y': `${Math.random() * 20 - 10}px`,
            } as React.CSSProperties}
          />
        ))}
        
        {/* Mid stars */}
        {starsMid.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animation: `starTwinkle ${star.twinkle}s ease-in-out infinite, starDrift ${star.drift}s ease-in-out infinite alternate`,
              animationDelay: `${Math.random() * star.twinkle}s`,
              '--drift-x': `${Math.random() * 15 - 7.5}px`,
              '--drift-y': `${Math.random() * 15 - 7.5}px`,
            } as React.CSSProperties}
          />
        ))}
        
        {/* Near stars */}
        {starsNear.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white shadow-lg shadow-teal-500/50"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animation: `starTwinkle ${star.twinkle}s ease-in-out infinite, starDrift ${star.drift}s ease-in-out infinite alternate`,
              animationDelay: `${Math.random() * star.twinkle}s`,
              '--drift-x': `${Math.random() * 10 - 5}px`,
              '--drift-y': `${Math.random() * 10 - 5}px`,
            } as React.CSSProperties}
          />
        ))}

        {/* Shooting stars */}
        {shootingStars.map((star) => (
          <div
            key={star.id}
            className="absolute w-1 h-20 bg-gradient-to-b from-white via-teal-300 to-transparent"
            style={{
              left: `${star.startX}%`,
              top: `${star.startY}%`,
              transform: 'rotate(45deg)',
              animation: `shootingStar ${star.duration}s linear infinite`,
              animationDelay: `${star.delay}s`,
              boxShadow: '0 0 10px rgba(94, 234, 212, 0.8)',
            }}
          />
        ))}
      </div>
    </>
  );
}
