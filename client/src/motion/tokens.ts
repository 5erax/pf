export const motionEase = {
  standard: [0.22, 1, 0.36, 1],
  sharp: [0.4, 0, 0.2, 1],
  soft: [0.16, 1, 0.3, 1],
} as const;

export const motionDuration = {
  micro: 0.16,
  fast: 0.24,
  normal: 0.42,
  slow: 0.72,
  cinematic: 1.05,
} as const;

export const motionSpring = {
  soft: {
    type: "spring",
    stiffness: 220,
    damping: 28,
  },
  snappy: {
    type: "spring",
    stiffness: 420,
    damping: 34,
  },
  premium: {
    type: "spring",
    stiffness: 180,
    damping: 24,
    mass: 0.8,
  },
} as const;

export const revealOffset = {
  eyebrow: 8,
  heading: 12,
  paragraph: 10,
  card: 14,
  chip: 6,
  cta: 10,
  directional: 8,
} as const;

export const viewportPreset = {
  section: { once: false, amount: 0.12, margin: "0px 0px -12% 0px" },
  content: { once: false, amount: 0.28, margin: "0px 0px -12% 0px" },
} as const;
