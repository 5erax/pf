import type { CSSProperties, ReactNode } from "react";

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
  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    event.currentTarget.style.setProperty(
      "--spotlight-x",
      `${event.clientX - rect.left}px`
    );

    event.currentTarget.style.setProperty(
      "--spotlight-y",
      `${event.clientY - rect.top}px`
    );
  };

  return (
    <div
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