"use client";

import { useEffect, useRef } from "react";

/**
 * Fixed full-viewport starfield.
 *
 * One canvas rather than ~170 animated DOM nodes: it draws far more stars for a
 * fraction of the cost, and lets depth actually mean something — each layer
 * parallaxes against scroll at its own rate, so the field has real space in it.
 *
 * Honours prefers-reduced-motion (renders a single static frame, no rAF loop)
 * and stops drawing entirely while the tab is hidden.
 */

type Star = {
  x: number;
  y: number;
  r: number;
  alpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  depth: number;
  glow: boolean;
  color: string;
};

type Shooting = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  len: number;
};

/** density = stars per square pixel, so coverage stays even across viewport sizes. */
const LAYERS = [
  { density: 0.000150, depth: 0.06, rMin: 0.35, rMax: 0.85, aMin: 0.25, aMax: 0.55, glow: false },
  { density: 0.000065, depth: 0.18, rMin: 0.65, rMax: 1.35, aMin: 0.40, aMax: 0.80, glow: false },
  { density: 0.000016, depth: 0.38, rMin: 1.10, rMax: 2.10, aMin: 0.60, aMax: 1.00, glow: true },
];

/** Mostly white, with a few cool and warm tints so the field isn't flat. */
const COLORS = [
  "255,255,255", "255,255,255", "255,255,255", "255,255,255",
  "203,229,255", // cool blue-white
  "173,216,255", // bluer
  "255,236,205", // warm
  "153,246,228", // faint teal, echoes the site accent
];

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let shooting: Shooting | null = null;
    let nextShootingAt = 0;
    let raf = 0;
    let running = false;
    let start = 0;

    // Pointer parallax, eased toward the real cursor so it never snaps.
    let pointerX = 0;
    let pointerY = 0;
    let targetX = 0;
    let targetY = 0;

    const build = () => {
      stars = [];
      const area = width * height;
      for (const layer of LAYERS) {
        // Cap per layer so a huge monitor doesn't run away with the frame budget.
        const count = Math.min(Math.round(area * layer.density), 520);
        for (let i = 0; i < count; i++) {
          stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            r: rand(layer.rMin, layer.rMax),
            alpha: rand(layer.aMin, layer.aMax),
            // A third of stars barely twinkle, which keeps it from looking like static.
            twinkleSpeed: Math.random() < 0.33 ? 0 : rand(0.4, 1.6),
            twinklePhase: Math.random() * Math.PI * 2,
            depth: layer.depth,
            glow: layer.glow && Math.random() < 0.5,
            color: COLORS[(Math.random() * COLORS.length) | 0],
          });
        }
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    };

    const spawnShooting = () => {
      // Always travels down-right, starting off the top-left quadrant.
      const angle = rand(Math.PI / 9, Math.PI / 3.6); // ~20°–50°
      const speed = rand(0.55, 0.95);
      shooting = {
        x: rand(-0.1, 0.7) * width,
        y: rand(-0.05, 0.35) * height,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        maxLife: rand(750, 1250),
        len: rand(90, 190),
      };
    };

    const drawStars = (elapsed: number, scrollY: number, animate: boolean) => {
      ctx.clearRect(0, 0, width, height);

      for (const s of stars) {
        // Parallax: nearer layers slide further against scroll and pointer.
        const px = s.x + pointerX * s.depth * 26;
        let py = s.y - scrollY * s.depth + pointerY * s.depth * 26;

        // Wrap vertically so the field is effectively infinite as you scroll.
        py = ((py % height) + height) % height;

        const twinkle =
          animate && s.twinkleSpeed > 0
            ? 0.62 + 0.38 * Math.sin(elapsed * 0.001 * s.twinkleSpeed + s.twinklePhase)
            : 1;
        const a = s.alpha * twinkle;

        if (s.glow) {
          const g = ctx.createRadialGradient(px, py, 0, px, py, s.r * 5);
          g.addColorStop(0, `rgba(${s.color},${a * 0.55})`);
          g.addColorStop(1, `rgba(${s.color},0)`);
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(px, py, s.r * 5, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = `rgba(${s.color},${a})`;
        ctx.beginPath();
        ctx.arc(px, py, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawShooting = (dt: number) => {
      if (!shooting) return;
      shooting.life += dt;
      if (shooting.life >= shooting.maxLife) {
        shooting = null;
        return;
      }

      const p = shooting.life / shooting.maxLife;
      // Fade in fast, fade out slow.
      const fade = p < 0.15 ? p / 0.15 : 1 - (p - 0.15) / 0.85;

      const x = shooting.x + shooting.vx * shooting.life;
      const y = shooting.y + shooting.vy * shooting.life;
      const tailX = x - shooting.vx * shooting.len;
      const tailY = y - shooting.vy * shooting.len;

      const grad = ctx.createLinearGradient(x, y, tailX, tailY);
      grad.addColorStop(0, `rgba(255,255,255,${0.9 * fade})`);
      grad.addColorStop(0.35, `rgba(153,246,228,${0.45 * fade})`);
      grad.addColorStop(1, "rgba(153,246,228,0)");

      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.7;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(tailX, tailY);
      ctx.stroke();

      // Bright head.
      ctx.fillStyle = `rgba(255,255,255,${fade})`;
      ctx.beginPath();
      ctx.arc(x, y, 1.5, 0, Math.PI * 2);
      ctx.fill();
    };

    let last = 0;
    const frame = (now: number) => {
      if (!start) start = now;
      const elapsed = now - start;
      const dt = last ? Math.min(now - last, 64) : 16;
      last = now;

      // Ease pointer influence.
      pointerX += (targetX - pointerX) * 0.045;
      pointerY += (targetY - pointerY) * 0.045;

      drawStars(elapsed, window.scrollY, true);

      if (!shooting && elapsed > nextShootingAt) {
        spawnShooting();
        nextShootingAt = elapsed + rand(7000, 16000);
      }
      drawShooting(dt);

      raf = requestAnimationFrame(frame);
    };

    const startLoop = () => {
      if (running || motionQuery.matches) return;
      running = true;
      last = 0;
      raf = requestAnimationFrame(frame);
    };

    const stopLoop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const renderStatic = () => {
      pointerX = 0;
      pointerY = 0;
      drawStars(0, window.scrollY, false);
    };

    const onVisibility = () => {
      if (document.hidden) stopLoop();
      else if (!motionQuery.matches) startLoop();
    };

    const onPointerMove = (e: PointerEvent) => {
      targetX = (e.clientX / window.innerWidth) * 2 - 1;
      targetY = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const onResize = () => {
      resize();
      if (motionQuery.matches) renderStatic();
    };

    const onMotionChange = () => {
      stopLoop();
      if (motionQuery.matches) renderStatic();
      else startLoop();
    };

    // Reduced motion still needs a repaint on scroll, since parallax is scroll-driven.
    const onScroll = () => {
      if (motionQuery.matches) renderStatic();
    };

    resize();
    if (motionQuery.matches) renderStatic();
    else startLoop();

    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    motionQuery.addEventListener("change", onMotionChange);

    return () => {
      stopLoop();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
      motionQuery.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}
