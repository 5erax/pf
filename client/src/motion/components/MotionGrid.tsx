import type { ReactNode } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { compactGroupVariants, groupVariants } from "@/motion/variants";
import { viewportPreset } from "@/motion/tokens";
import { useReducedMotionSafe } from "@/motion/hooks/useReducedMotionSafe";

type MotionGridProps = {
  children: ReactNode;
  className?: string;
  compact?: boolean;
};

export function MotionGrid({ children, className, compact = false }: MotionGridProps) {
  const shouldReduceMotion = useReducedMotionSafe();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={viewportPreset.content}
      variants={compact ? compactGroupVariants : groupVariants}
      className={cn("grid", className)}
    >
      {children}
    </motion.div>
  );
}
