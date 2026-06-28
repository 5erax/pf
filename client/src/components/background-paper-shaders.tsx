"use client";

import { MeshGradient } from "@paper-design/shaders-react";
import { useEffect, useState } from "react";

import { useActiveSection } from "@/hooks/useActiveSection";

const sectionIds = ["home", "about", "skills", "showcase", "projects", "contact"];

const sectionThemes = {
  home: {
    staticGradient:
      "radial-gradient(circle at 18% 12%, rgba(255,255,255,0.16), transparent 28%), radial-gradient(circle at 78% 68%, rgba(34,211,238,0.12), transparent 30%), radial-gradient(circle at 52% 82%, rgba(16,185,129,0.1), transparent 32%), linear-gradient(135deg,#000 0%,#171717 42%,#050505 100%)",
    shaderColors: ["#000000", "#111111", "#1f2937", "#67e8f9"],
  },
  about: {
    staticGradient:
      "radial-gradient(circle at 22% 20%, rgba(34,211,238,0.1), transparent 30%), radial-gradient(circle at 72% 78%, rgba(148,163,184,0.12), transparent 34%), linear-gradient(135deg,#020617 0%,#0a0a0a 48%,#000 100%)",
    shaderColors: ["#000000", "#0f172a", "#164e63", "#e5e7eb"],
  },
  skills: {
    staticGradient:
      "radial-gradient(circle at 24% 70%, rgba(16,185,129,0.13), transparent 32%), radial-gradient(circle at 74% 22%, rgba(34,211,238,0.1), transparent 30%), linear-gradient(135deg,#000 0%,#05110c 45%,#020617 100%)",
    shaderColors: ["#000000", "#052e2b", "#064e3b", "#67e8f9"],
  },
  showcase: {
    staticGradient:
      "radial-gradient(circle at 28% 24%, rgba(168,85,247,0.13), transparent 32%), radial-gradient(circle at 76% 68%, rgba(34,211,238,0.11), transparent 31%), linear-gradient(135deg,#05020a 0%,#080808 48%,#000 100%)",
    shaderColors: ["#000000", "#1e1b4b", "#312e81", "#a78bfa"],
  },
  projects: {
    staticGradient:
      "radial-gradient(circle at 18% 78%, rgba(34,211,238,0.11), transparent 32%), radial-gradient(circle at 78% 24%, rgba(16,185,129,0.13), transparent 32%), linear-gradient(135deg,#020617 0%,#03130e 48%,#000 100%)",
    shaderColors: ["#000000", "#022c22", "#155e75", "#6ee7b7"],
  },
  contact: {
    staticGradient:
      "radial-gradient(circle at 20% 28%, rgba(255,255,255,0.12), transparent 30%), radial-gradient(circle at 78% 74%, rgba(16,185,129,0.14), transparent 34%), linear-gradient(135deg,#000 0%,#0f1115 48%,#020617 100%)",
    shaderColors: ["#000000", "#111827", "#064e3b", "#ffffff"],
  },
} as const;

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
  const activeSection = useActiveSection(sectionIds);
  const theme =
    sectionThemes[activeSection as keyof typeof sectionThemes] ?? sectionThemes.home;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 h-screen w-screen overflow-hidden bg-black"
    >
      <div
        className="absolute inset-0 transition-[background] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ background: theme.staticGradient }}
      />

      {animatedBackgroundEnabled ? (
        <MeshGradient
          className="absolute inset-0 size-full opacity-30"
          colors={[...theme.shaderColors]}
          speed={0.08}
        />
      ) : null}

      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.12)_42%,_rgba(0,0,0,0.78)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0.08)_0%,_rgba(0,0,0,0.22)_55%,_#000_100%)]" />
    </div>
  );
}
