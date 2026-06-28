import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type GlowLineProps = HTMLAttributes<HTMLDivElement> & {
  tone?: "cyan" | "emerald" | "violet" | "white";
};

const toneClass = {
  cyan: "via-cyan-200 shadow-[0_0_18px_rgba(103,232,249,0.26)]",
  emerald: "via-emerald-200 shadow-[0_0_18px_rgba(167,243,208,0.22)]",
  violet: "via-violet-200 shadow-[0_0_18px_rgba(196,181,253,0.22)]",
  white: "via-white/80 shadow-[0_0_18px_rgba(255,255,255,0.18)]",
};

export function GlowLine({ className, tone = "cyan", ...props }: GlowLineProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none h-px origin-center bg-gradient-to-r from-transparent to-transparent opacity-60",
        toneClass[tone],
        className,
      )}
      {...props}
    />
  );
}
