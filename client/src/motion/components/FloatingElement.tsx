import type { ReactNode } from "react";
import { motion } from "motion/react";

import { motionDuration, motionEase } from "@/motion/tokens";
import { useReducedMotionSafe } from "@/motion/hooks/useReducedMotionSafe";

type FloatingElementProps = {
  children: ReactNode;
  className?: string;
  distance?: number;
  duration?: number;
  delay?: number;
};

export function FloatingElement({
  children,
  className,
  distance = 8,
  duration = motionDuration.cinematic * 4,
  delay = 0,
}: FloatingElementProps) {
  const shouldReduceMotion = useReducedMotionSafe();

  return (
    <motion.div
      className={className}
      animate={
        shouldReduceMotion
          ? undefined
          : {
              y: [0, -distance, 0],
            }
      }
      transition={{
        duration,
        delay,
        ease: motionEase.soft,
        repeat: Infinity,
        repeatType: "mirror",
      }}
    >
      {children}
    </motion.div>
  );
}
