import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";

import { cn } from "@/lib/utils";

const interfaceEase = [0.22, 1, 0.36, 1] as const;
const viewport = { once: false, amount: 0.28, margin: "0px 0px -12% 0px" };

const groupVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.03,
      staggerChildren: 0.055,
    },
  },
};

const compactGroupVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.02,
      staggerChildren: 0.035,
    },
  },
};

const revealVariants = {
  eyebrow: {
    hidden: {
      opacity: 0,
      y: 8,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.36, ease: interfaceEase },
    },
  },
  heading: {
    hidden: {
      opacity: 0,
      y: 12,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: interfaceEase },
    },
  },
  paragraph: {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.44, ease: interfaceEase },
    },
  },
  card: {
    hidden: {
      opacity: 0,
      y: 14,
      scale: 0.992,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: interfaceEase },
    },
  },
  chip: {
    hidden: {
      opacity: 0,
      y: 6,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.28, ease: interfaceEase },
    },
  },
  cta: {
    hidden: {
      opacity: 0,
      y: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.38, ease: interfaceEase },
    },
  },
} satisfies Record<string, Variants>;

type RevealKind = keyof typeof revealVariants;

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
  direction?: "left" | "right" | "none";
};

export function Reveal({ children, className, index, label }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={false}
      whileInView="visible"
      viewport={{ ...viewport, amount: 0.12 }}
      variants={{
        hidden: { opacity: 0.92 },
        visible: {
          opacity: 1,
          transition: { duration: 0.44, ease: interfaceEase },
        },
      }}
      className={cn("section-reveal-shell relative", className)}
    >
      {!shouldReduceMotion ? (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[6%] top-0 z-30 h-px origin-center bg-gradient-to-r from-transparent via-cyan-100/80 to-transparent opacity-55 shadow-[0_0_20px_rgba(103,232,249,0.38)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[10%] bottom-0 z-30 h-px origin-center bg-gradient-to-r from-transparent via-emerald-200/70 to-transparent opacity-35 shadow-[0_0_18px_rgba(52,211,153,0.28)]"
          />
          <motion.div
            aria-hidden="true"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 0.13,
                transition: { duration: 0.45, ease: interfaceEase },
              },
            }}
            className="pointer-events-none absolute right-[5%] top-8 z-20 select-none text-right font-mono leading-none text-white sm:top-12"
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

export function MotionGroup({
  children,
  className,
  compact = false,
  amount = 0.22,
}: MotionGroupProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ ...viewport, amount }}
      variants={compact ? compactGroupVariants : groupVariants}
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
  const variants: Variants =
    direction === "none"
      ? revealVariants[kind]
      : {
          hidden: {
            ...revealVariants[kind].hidden,
            x: direction === "left" ? -8 : 8,
          },
          visible: {
            ...revealVariants[kind].visible,
            x: 0,
          },
        };

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
  return (
    <motion.span
      variants={revealVariants.chip}
      className={cn("motion-reveal-item inline-flex transform-gpu", className)}
    >
      {children}
    </motion.span>
  );
}
