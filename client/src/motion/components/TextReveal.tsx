import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { motionEase } from "@/motion/tokens";
import { useReducedMotionSafe } from "@/motion/hooks/useReducedMotionSafe";

type TextRevealProps = {
  text: string;
  className?: string;
  wordClassName?: string;
};

export function TextReveal({ text, className, wordClassName }: TextRevealProps) {
  const shouldReduceMotion = useReducedMotionSafe();
  const words = text.split(" ");

  return (
    <span className={cn("inline-flex flex-wrap gap-x-[0.25em]", className)}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className={cn("inline-block", wordClassName)}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.42,
            delay: shouldReduceMotion ? 0 : index * 0.035,
            ease: motionEase.standard,
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
