"use client";

import { MeshGradient } from "@paper-design/shaders-react";

export default function BackgroundPaperShaders() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 h-screen w-screen overflow-hidden bg-black"
    >
      <MeshGradient
        className="absolute inset-0 size-full opacity-30"
        colors={["#000000", "#1a1a1a", "#333333", "#ffffff"]}
        speed={0.65}
      />

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.08)_42%,_rgba(0,0,0,0.72)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0.02)_0%,_rgba(0,0,0,0.14)_55%,_#000_100%)]" />
    </div>
  );
}
