"use client";

import { useEffect, useRef } from "react";

const COLORS = ["#ff7518", "#ffa733", "#9dff00", "#8b5cf6", "#ff073a", "#ffe9a8"];

export default function EmberCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf = 0;
    let w = 0;
    let h = 0;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const parts = Array.from({ length: 42 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      s: 3 + Math.random() * 6,
      vy: 0.4 + Math.random() * 1.2,
      vx: -0.4 + Math.random() * 0.8,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      shape: Math.floor(Math.random() * 3),
      rot: Math.random() * Math.PI,
      vr: -0.02 + Math.random() * 0.04,
      alpha: 0.35 + Math.random() * 0.6,
    }));

    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        p.y += p.vy;
        p.x += p.vx + Math.sin(p.y / 60) * 0.4;
        p.rot += p.vr;
        if (p.y > h + 30) {
          p.y = -30;
          p.x = Math.random() * w;
        }
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        if (p.shape === 0) {
          ctx.beginPath();
          ctx.arc(0, 0, p.s, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.shape === 1) {
          ctx.beginPath();
          ctx.ellipse(0, 0, p.s, p.s * 0.55, 0, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillRect(-p.s / 2, -p.s / 6, p.s, p.s / 3);
          ctx.fillRect(-p.s / 6, -p.s / 2, p.s / 3, p.s);
        }
        ctx.restore();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className="fx-canvas" aria-hidden="true" />;
}
