import type { ReactNode } from "react";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

export function Reveal({ children, className }: RevealProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 92%", "end 8%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 28,
    mass: 0.22,
  });
  const opacity = useTransform(progress, [0, 0.13, 0.84, 1], [0.16, 1, 1, 0.16]);
  const y = useTransform(progress, [0, 0.16, 0.82, 1], [44, 0, 0, -38]);
  const scale = useTransform(progress, [0, 0.16, 0.84, 1], [0.985, 1, 1, 0.988]);
  const sweepOpacity = useTransform(progress, [0, 0.08, 0.2], [0, 0.72, 0]);
  const sweepScale = useTransform(progress, [0, 0.1, 0.22], [0.08, 1, 0.2]);

  return (
    <motion.div
      ref={sectionRef}
      style={
        shouldReduceMotion
          ? undefined
          : { opacity, y, scale }
      }
      className={cn(
        "relative transform-gpu origin-center will-change-[transform,opacity]",
        className,
      )}
    >
      {!shouldReduceMotion ? (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-[8%] top-0 z-20 h-px origin-center bg-gradient-to-r from-transparent via-cyan-200/80 to-transparent shadow-[0_0_20px_rgba(103,232,249,0.45)]"
          style={{ opacity: sweepOpacity, scaleX: sweepScale }}
        />
      ) : null}
      {children}
    </motion.div>
  );
}
