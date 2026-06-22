import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

export type RevealState = "hidden-above" | "visible" | "hidden-below";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  state: RevealState;
};

const variants = {
  "hidden-above": { opacity: 0, y: -32, scale: 0.985 },
  visible: { opacity: 1, y: 0, scale: 1 },
  "hidden-below": { opacity: 0, y: 36, scale: 0.985 },
};

export function Reveal({
  children,
  className,
  delay = 0,
  state,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={false}
      animate={shouldReduceMotion ? "visible" : state}
      variants={variants}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.52,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn("transform-gpu origin-center", className)}
    >
      {children}
    </motion.div>
  );
}
