"use client";

import { MeshGradient } from "@paper-design/shaders-react";
import { useEffect, useState } from "react";

function useAnimatedBackgroundEnabled() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopQuery = window.matchMedia("(min-width: 768px)");

    const sync = () => {
      setEnabled(desktopQuery.matches && !motionQuery.matches);
    };

    sync();
    motionQuery.addEventListener("change", sync);
    desktopQuery.addEventListener("change", sync);

    return () => {
      motionQuery.removeEventListener("change", sync);
      desktopQuery.removeEventListener("change", sync);
    };
  }, []);

  return enabled;
}

export default function BackgroundPaperShaders() {
  const animatedBackgroundEnabled = useAnimatedBackgroundEnabled();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 h-screen w-screen overflow-hidden bg-black"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(255,255,255,0.22),transparent_28%),radial-gradient(circle_at_78%_68%,rgba(34,211,238,0.13),transparent_30%),radial-gradient(circle_at_52%_82%,rgba(16,185,129,0.11),transparent_32%),linear-gradient(135deg,#000_0%,#1a1a1a_42%,#070707_100%)]" />

      {animatedBackgroundEnabled ? (
        <MeshGradient
          className="absolute inset-0 size-full opacity-45"
          colors={["#000000", "#1a1a1a", "#333333", "#ffffff"]}
          speed={0.18}
        />
      ) : null}

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.08)_42%,_rgba(0,0,0,0.72)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0.02)_0%,_rgba(0,0,0,0.14)_55%,_#000_100%)]" />
    </div>
  );
}
