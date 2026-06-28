import { motionDuration, motionEase, motionSpring } from "@/motion/tokens";

export const transitionPreset = {
  micro: {
    duration: motionDuration.micro,
    ease: motionEase.standard,
  },
  fast: {
    duration: motionDuration.fast,
    ease: motionEase.standard,
  },
  normal: {
    duration: motionDuration.normal,
    ease: motionEase.standard,
  },
  slow: {
    duration: motionDuration.slow,
    ease: motionEase.standard,
  },
  cinematic: {
    duration: motionDuration.cinematic,
    ease: motionEase.soft,
  },
  springSoft: motionSpring.soft,
  springSnappy: motionSpring.snappy,
  springPremium: motionSpring.premium,
} as const;

export const staggerPreset = {
  default: {
    delayChildren: 0.03,
    staggerChildren: 0.055,
  },
  compact: {
    delayChildren: 0.02,
    staggerChildren: 0.035,
  },
} as const;
