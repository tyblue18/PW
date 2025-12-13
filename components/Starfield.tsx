"use client";

import { useEffect, useState, useMemo } from "react";

export default function Starfield() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Memoize star generation to prevent recalculation on every render
  const { starsFar, starsMid, starsNear, shootingStars } = useMemo(() => {
    // Generate stars with different layers for depth
    const far = Array.from({ length: 100 }).map((_, i) => ({
      id: `far-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1 + 0.5,
      opacity: Math.random() * 0.3 + 0.2,
      twinkle: Math.random() * 4 + 3,
      drift: Math.random() * 20 + 10,
      driftX: Math.random() * 20 - 10,
      driftY: Math.random() * 20 - 10,
      delay: Math.random() * 4,
    }));

    const mid = Array.from({ length: 50 }).map((_, i) => ({
      id: `mid-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.4,
      twinkle: Math.random() * 3 + 2,
      drift: Math.random() * 15 + 8,
      driftX: Math.random() * 15 - 7.5,
      driftY: Math.random() * 15 - 7.5,
      delay: Math.random() * 3,
    }));

    const near = Array.from({ length: 20 }).map((_, i) => ({
      id: `near-${i}`,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 2,
      opacity: Math.random() * 0.7 + 0.5,
      twinkle: Math.random() * 2 + 1,
      drift: Math.random() * 10 + 5,
      driftX: Math.random() * 10 - 5,
      driftY: Math.random() * 10 - 5,
      delay: Math.random() * 2,
    }));

    // Shooting stars
    const shooting = Array.from({ length: 3 }).map((_, i) => ({
      id: `shooting-${i}`,
      startX: Math.random() * 100,
      startY: Math.random() * 50,
      duration: Math.random() * 2 + 1.5,
      delay: Math.random() * 5,
    }));

    return { starsFar: far, starsMid: mid, starsNear: near, shootingStars: shooting };
  }, []);

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
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" style={{ contain: 'layout style paint', willChange: 'transform' }}>
        {/* Far stars */}
        {starsFar.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white will-change-transform"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animation: `starTwinkle ${star.twinkle}s ease-in-out infinite, starDrift ${star.drift}s ease-in-out infinite alternate`,
              animationDelay: `${star.delay}s`,
              '--drift-x': `${star.driftX}px`,
              '--drift-y': `${star.driftY}px`,
            } as React.CSSProperties}
          />
        ))}
        
        {/* Mid stars */}
        {starsMid.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white will-change-transform"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animation: `starTwinkle ${star.twinkle}s ease-in-out infinite, starDrift ${star.drift}s ease-in-out infinite alternate`,
              animationDelay: `${star.delay}s`,
              '--drift-x': `${star.driftX}px`,
              '--drift-y': `${star.driftY}px`,
            } as React.CSSProperties}
          />
        ))}
        
        {/* Near stars */}
        {starsNear.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white shadow-lg shadow-teal-500/50 will-change-transform"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animation: `starTwinkle ${star.twinkle}s ease-in-out infinite, starDrift ${star.drift}s ease-in-out infinite alternate`,
              animationDelay: `${star.delay}s`,
              '--drift-x': `${star.driftX}px`,
              '--drift-y': `${star.driftY}px`,
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
