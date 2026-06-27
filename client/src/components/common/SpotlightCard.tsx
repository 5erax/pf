import type { CSSProperties, PointerEvent, ReactNode } from "react";
import { useCallback, useEffect, useRef } from "react";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
};

export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.16)",
}: SpotlightCardProps) {
  const animationFrameRef = useRef<number | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef({ x: "50%", y: "50%" });

  const flushSpotlightPosition = useCallback(() => {
    animationFrameRef.current = null;
    const card = cardRef.current;

    if (!card) return;

    card.style.setProperty("--spotlight-x", pointerRef.current.x);
    card.style.setProperty("--spotlight-y", pointerRef.current.y);
  }, []);

  const handlePointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      if (event.pointerType === "touch") return;

      const rect = event.currentTarget.getBoundingClientRect();
      pointerRef.current = {
        x: `${event.clientX - rect.left}px`,
        y: `${event.clientY - rect.top}px`,
      };

      if (animationFrameRef.current === null) {
        animationFrameRef.current = requestAnimationFrame(flushSpotlightPosition);
      }
    },
    [flushSpotlightPosition],
  );

  useEffect(() => {
    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      style={
        {
          "--spotlight-x": "50%",
          "--spotlight-y": "50%",
          "--spotlight-color": spotlightColor,
        } as CSSProperties
      }
      className={`
        group relative overflow-hidden rounded-[2rem]
        border border-white/10 bg-white/[0.04]
        shadow-2xl shadow-black/30 backdrop-blur-xl
        ${className}
      `}
    >
      <div
        className="
          pointer-events-none absolute -inset-px opacity-0 transition duration-500
          group-hover:opacity-100
        "
        style={{
          background:
            "radial-gradient(520px circle at var(--spotlight-x) var(--spotlight-y), var(--spotlight-color), transparent 42%)",
        }}
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent opacity-70" />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
