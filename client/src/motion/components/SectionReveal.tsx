import type { ReactNode } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { GlowLine } from "@/motion/components/GlowLine";
import { useReducedMotionSafe } from "@/motion/hooks/useReducedMotionSafe";
import { viewportPreset } from "@/motion/tokens";
import { fadeOnlyVariants, groupVariants } from "@/motion/variants";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  index: number;
  label: string;
};

export function SectionReveal({ children, className, index, label }: SectionRevealProps) {
  const shouldReduceMotion = useReducedMotionSafe();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={viewportPreset.section}
      variants={shouldReduceMotion ? fadeOnlyVariants : groupVariants}
      className={cn("section-reveal-shell relative", className)}
    >
      {!shouldReduceMotion ? (
        <>
          <GlowLine className="absolute inset-x-[6%] top-0 z-30" />
          <GlowLine tone="emerald" className="absolute inset-x-[10%] bottom-0 z-30 opacity-35" />
          <motion.div
            aria-hidden="true"
            variants={fadeOnlyVariants}
            className="pointer-events-none absolute right-[5%] top-8 z-20 select-none text-right font-mono leading-none text-white opacity-15 sm:top-12"
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
