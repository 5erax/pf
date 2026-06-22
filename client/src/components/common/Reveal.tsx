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
  index: number;
  label: string;
};

export function Reveal({ children, className, index, label }: RevealProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const direction = index % 2 === 0 ? 1 : -1;
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 96%", "end 4%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 135,
    damping: 26,
    mass: 0.28,
  });
  const opacity = useTransform(progress, [0, 0.12, 0.82, 1], [0.08, 1, 1, 0.08]);
  const y = useTransform(progress, [0, 0.16, 0.8, 1], [72, 0, 0, -58]);
  const x = useTransform(
    progress,
    [0, 0.16, 0.82, 1],
    [30 * direction, 0, 0, -22 * direction],
  );
  const scale = useTransform(progress, [0, 0.16, 0.82, 1], [0.955, 1, 1, 0.97]);
  const rotateX = useTransform(progress, [0, 0.16, 0.82, 1], [3.5, 0, 0, -2.5]);
  const clipPath = useTransform(
    progress,
    [0, 0.14, 0.84, 1],
    [
      "inset(9% 7% 9% 7% round 2.5rem)",
      "inset(0% 0% 0% 0% round 0rem)",
      "inset(0% 0% 0% 0% round 0rem)",
      "inset(7% 5% 7% 5% round 2.5rem)",
    ],
  );
  const sweepOpacity = useTransform(
    progress,
    [0, 0.05, 0.16, 0.25, 0.78, 0.88, 1],
    [0, 0.95, 0.7, 0, 0, 0.65, 0],
  );
  const sweepScale = useTransform(
    progress,
    [0, 0.12, 0.24, 0.8, 0.9, 1],
    [0.05, 1, 0.2, 0.2, 1, 0.05],
  );
  const chapterOpacity = useTransform(
    progress,
    [0, 0.06, 0.2, 0.36],
    [0, 0.36, 0.24, 0],
  );
  const chapterY = useTransform(progress, [0, 0.24], [64, -18]);
  const chapterScale = useTransform(progress, [0, 0.24], [0.82, 1.08]);

  return (
    <motion.div
      ref={sectionRef}
      style={
        shouldReduceMotion
          ? undefined
          : {
              opacity,
              x,
              y,
              scale,
              rotateX,
              clipPath,
              transformPerspective: 1200,
            }
      }
      className={cn(
        "relative transform-gpu origin-center will-change-[transform,opacity,clip-path]",
        className,
      )}
    >
      {!shouldReduceMotion ? (
        <>
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[6%] top-0 z-30 h-px origin-center bg-gradient-to-r from-transparent via-cyan-100 to-transparent shadow-[0_0_26px_rgba(103,232,249,0.72)]"
            style={{ opacity: sweepOpacity, scaleX: sweepScale }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[10%] bottom-0 z-30 h-px origin-center bg-gradient-to-r from-transparent via-emerald-200/80 to-transparent shadow-[0_0_22px_rgba(52,211,153,0.56)]"
            style={{ opacity: sweepOpacity, scaleX: sweepScale }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute right-[5%] top-8 z-20 select-none text-right font-mono leading-none text-white sm:top-12"
            style={{ opacity: chapterOpacity, y: chapterY, scale: chapterScale }}
          >
            <span className="block text-[clamp(5rem,14vw,11rem)] font-semibold tracking-[-0.09em]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="mt-2 block text-[0.58rem] font-medium uppercase tracking-[0.38em] text-cyan-100">
              {label}
            </span>
          </motion.div>
        </>
      ) : null}
      {children}
    </motion.div>
  );
}
