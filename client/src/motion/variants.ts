import type { Variants } from "motion/react";

import { revealOffset } from "@/motion/tokens";
import { staggerPreset, transitionPreset } from "@/motion/transitions";

export type RevealKind = "eyebrow" | "heading" | "paragraph" | "card" | "chip" | "cta";
export type RevealDirection = "left" | "right" | "none";

export const groupVariants: Variants = {
  hidden: {},
  visible: {
    transition: staggerPreset.default,
  },
};

export const compactGroupVariants: Variants = {
  hidden: {},
  visible: {
    transition: staggerPreset.compact,
  },
};

export const revealVariants = {
  eyebrow: {
    hidden: {
      opacity: 0,
      y: revealOffset.eyebrow,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: transitionPreset.normal,
    },
  },
  heading: {
    hidden: {
      opacity: 0,
      y: revealOffset.heading,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: transitionPreset.normal.ease,
      },
    },
  },
  paragraph: {
    hidden: {
      opacity: 0,
      y: revealOffset.paragraph,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.44,
        ease: transitionPreset.normal.ease,
      },
    },
  },
  card: {
    hidden: {
      opacity: 0,
      y: revealOffset.card,
      scale: 0.992,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: transitionPreset.normal.ease,
      },
    },
  },
  chip: {
    hidden: {
      opacity: 0,
      y: revealOffset.chip,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.28,
        ease: transitionPreset.fast.ease,
      },
    },
  },
  cta: {
    hidden: {
      opacity: 0,
      y: revealOffset.cta,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.38,
        ease: transitionPreset.normal.ease,
      },
    },
  },
} satisfies Record<RevealKind, Variants>;

export function getDirectionalReveal(
  kind: RevealKind,
  direction: RevealDirection = "none",
): Variants {
  if (direction === "none") return revealVariants[kind];

  return {
    hidden: {
      ...revealVariants[kind].hidden,
      x: direction === "left" ? -revealOffset.directional : revealOffset.directional,
    },
    visible: {
      ...revealVariants[kind].visible,
      x: 0,
    },
  };
}

export const fadeOnlyVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitionPreset.fast,
  },
};
