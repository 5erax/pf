import type { ReactNode } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { useReducedMotionSafe } from "@/motion/hooks/useReducedMotionSafe";

type ParallaxLayerProps = {
  children: ReactNode;
  className?: string;
  offset?: number;
};

export function ParallaxLayer({ children, className, offset = 24 }: ParallaxLayerProps) {
  const shouldReduceMotion = useReducedMotionSafe();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [-offset, offset]);

  return (
    <motion.div className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}
