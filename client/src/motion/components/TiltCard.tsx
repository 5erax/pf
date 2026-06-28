import type { HTMLAttributes, PointerEvent, ReactNode } from "react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { useReducedMotionSafe } from "@/motion/hooks/useReducedMotionSafe";

type TiltCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  maxRotateX?: number;
  maxRotateY?: number;
};

export function TiltCard({
  children,
  className,
  maxRotateX = 4,
  maxRotateY = 6,
  ...props
}: TiltCardProps) {
  const shouldReduceMotion = useReducedMotionSafe();
  const [transform, setTransform] = useState("perspective(900px) rotateX(0deg) rotateY(0deg)");

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || event.pointerType === "touch") return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    const rotateX = (-y * maxRotateX).toFixed(2);
    const rotateY = (x * maxRotateY).toFixed(2);

    setTransform(`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handlePointerLeave = () => {
    setTransform("perspective(900px) rotateX(0deg) rotateY(0deg)");
  };

  return (
    <div
      className={cn(
        "transform-gpu transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
        className,
      )}
      style={{ transform }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      {...props}
    >
      {children}
    </div>
  );
}
