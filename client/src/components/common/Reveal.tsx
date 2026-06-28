import type { ReactNode } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { SectionReveal } from "@/motion/components/SectionReveal";
import { useReducedMotionSafe } from "@/motion/hooks/useReducedMotionSafe";
import { viewportPreset } from "@/motion/tokens";
import {
  compactGroupVariants,
  fadeOnlyVariants,
  getDirectionalReveal,
  groupVariants,
  revealVariants,
} from "@/motion/variants";
import type { RevealDirection, RevealKind } from "@/motion/variants";

type RevealProps = {
  children: ReactNode;
  className?: string;
  index: number;
  label: string;
};

type MotionGroupProps = {
  children: ReactNode;
  className?: string;
  compact?: boolean;
  amount?: number;
};

type MotionItemProps = {
  children: ReactNode;
  className?: string;
  kind?: RevealKind;
  direction?: RevealDirection;
};

export function Reveal({ children, className, index, label }: RevealProps) {
  return (
    <SectionReveal className={className} index={index} label={label}>
      {children}
    </SectionReveal>
  );
}

export function MotionGroup({
  children,
  className,
  compact = false,
  amount = 0.22,
}: MotionGroupProps) {
  const shouldReduceMotion = useReducedMotionSafe();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ ...viewportPreset.content, amount }}
      variants={
        shouldReduceMotion
          ? fadeOnlyVariants
          : compact
            ? compactGroupVariants
            : groupVariants
      }
      className={cn("motion-reveal-group", className)}
    >
      {children}
    </motion.div>
  );
}

export function MotionItem({
  children,
  className,
  kind = "paragraph",
  direction = "none",
}: MotionItemProps) {
  const shouldReduceMotion = useReducedMotionSafe();
  const variants = shouldReduceMotion
    ? fadeOnlyVariants
    : getDirectionalReveal(kind, direction);

  return (
    <motion.div
      variants={variants}
      className={cn(
        "motion-reveal-item transform-gpu",
        kind === "card" && "motion-reveal-card",
        className,
      )}
    >
      {children}
    </motion.div>
  );
}

export function MotionChip({
  children,
  className,
}: Pick<MotionItemProps, "children" | "className">) {
  const shouldReduceMotion = useReducedMotionSafe();

  return (
    <motion.span
      variants={shouldReduceMotion ? fadeOnlyVariants : revealVariants.chip}
      className={cn("motion-reveal-item inline-flex transform-gpu", className)}
    >
      {children}
    </motion.span>
  );
}
