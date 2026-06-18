'use client';

import { useEffect, useRef, useState } from "react";

const CursorEffect = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      container.style.setProperty("--cursor-x", `${x}px`);
      container.style.setProperty("--cursor-y", `${y}px`);
      setActive(true);
    };

    const handleMouseLeave = () => {
      setActive(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden bg-black"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: ` 
            radial-gradient(circle at var(--cursor-x, 50%) var(--cursor-y, 50%), rgba(255,255,255,0.16), transparent 10%)
          `,
          backgroundBlendMode: "screen",
        }}
      />

      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 transition-opacity duration-150"
          style={{
            top: "var(--cursor-y, 50%)",
            left: "var(--cursor-x, 50%)",
            opacity: active ? 1 : 0,
          }}
        />
        <div
          className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 transition-opacity duration-150"
          style={{
            top: "var(--cursor-y, 50%)",
            left: "var(--cursor-x, 50%)",
            opacity: active ? 1 : 0,
          }}
        />
        <div
          className="absolute h-px w-24 bg-white/10 transition-opacity duration-150"
          style={{
            top: "var(--cursor-y, 50%)",
            left: "calc(var(--cursor-x, 50%) - 3rem)",
            opacity: active ? 0.9 : 0,
          }}
        />
        <div
          className="absolute w-px h-24 bg-white/10 transition-opacity duration-150"
          style={{
            left: "var(--cursor-x, 50%)",
            top: "calc(var(--cursor-y, 50%) - 3rem)",
            opacity: active ? 0.9 : 0,
          }}
        />
      </div>
    </div>
  );
};

export default CursorEffect;
