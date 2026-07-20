"use client";

import { useEffect, useRef } from "react";

const BUG_COUNT = 20;
const COLORS = ["#ff6c22", "#bed194", "#baeffa", "#3b6e68"];
const FLEE_RADIUS = 70;

export default function FleeingBugs() {
  const boxRef = useRef<HTMLDivElement>(null);
  const bugRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;

    const bugs = bugRefs.current.map(() => ({
      angle: Math.random() * Math.PI * 2,
      speed: 0.004 + Math.random() * 0.01,
      radius: 50 + Math.random() * 110,
      wobblePhase: Math.random() * Math.PI * 2,
      wobbleSpeed: 0.02 + Math.random() * 0.02,
      fleeX: 0,
      fleeY: 0,
    }));

    let mouseX = -9999;
    let mouseY = -9999;

    function handleMouseMove(e: MouseEvent) {
      const rect = box!.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    }

    function handleMouseLeave() {
      mouseX = -9999;
      mouseY = -9999;
    }

    box.addEventListener("mousemove", handleMouseMove);
    box.addEventListener("mouseleave", handleMouseLeave);

    let frameId: number;

    function tick() {
      const rect = box!.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2;

      bugs.forEach((bug, i) => {
        bug.angle += bug.speed;
        bug.wobblePhase += bug.wobbleSpeed;

        const r = bug.radius + Math.sin(bug.wobblePhase) * 15;
        let x = cx + Math.cos(bug.angle) * r;
        let y = cy + Math.sin(bug.angle) * r * 0.7;

        const dx = x - mouseX;
        const dy = y - mouseY;
        const dist = Math.max(Math.sqrt(dx * dx + dy * dy), 0.001);

        if (dist < FLEE_RADIUS) {
          const force = (FLEE_RADIUS - dist) / FLEE_RADIUS;
          bug.fleeX += (dx / dist) * force * 8;
          bug.fleeY += (dy / dist) * force * 8;
        }

        bug.fleeX *= 0.9;
        bug.fleeY *= 0.9;

        x += bug.fleeX;
        y += bug.fleeY;

        const el = bugRefs.current[i];
        if (el) {
          el.style.transform = `translate(${x}px, ${y}px)`;
        }
      });

      frameId = requestAnimationFrame(tick);
    }

    frameId = requestAnimationFrame(tick);

    return () => {
      box.removeEventListener("mousemove", handleMouseMove);
      box.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div
      ref={boxRef}
      className="relative aspect-square w-full overflow-hidden rounded-2xl"
    >
      {Array.from({ length: BUG_COUNT }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            bugRefs.current[i] = el;
          }}
          className="absolute h-2 w-2 rounded-full"
          style={{ backgroundColor: COLORS[i % COLORS.length] }}
        />
      ))}
    </div>
  );
}