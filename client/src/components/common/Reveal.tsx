import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? false
          : { opacity: 0.22, y: 24, filter: "blur(4px)" }
      }
      whileInView={
        shouldReduceMotion
          ? undefined
          : { opacity: 1, y: 0, filter: "blur(0px)" }
      }
      viewport={{ once: true, amount: 0.04, margin: "0px 0px -4% 0px" }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.62,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
