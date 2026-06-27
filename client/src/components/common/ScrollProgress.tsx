import { motion, useScroll } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed left-0 top-0 z-[60] h-px w-full bg-transparent">
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-cyan-300 via-white to-emerald-300"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}
