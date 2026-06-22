import { useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const [viewportState, setViewportState] = useState<
    "hidden-above" | "visible" | "hidden-below"
  >("hidden-below");

  const variants = {
    "hidden-above": { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    "hidden-below": { opacity: 0, y: 28 },
  };

  return (
    <motion.div
      initial={shouldReduceMotion ? false : "hidden-below"}
      animate={shouldReduceMotion ? "visible" : viewportState}
      variants={variants}
      onViewportEnter={() => setViewportState("visible")}
      onViewportLeave={(entry) => {
        setViewportState(
          (entry?.boundingClientRect.top ?? 1) < 0
            ? "hidden-above"
            : "hidden-below",
        );
      }}
      viewport={{ once: false, amount: "some", margin: "10% 0px 10% 0px" }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.44,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn("transform-gpu", className)}
    >
      {children}
    </motion.div>
  );
}
