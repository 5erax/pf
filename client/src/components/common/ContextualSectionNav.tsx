import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { useActiveSection } from "@/hooks/useActiveSection";
import { useElementVisibility } from "@/hooks/useElementVisibility";
import { cn } from "@/lib/utils";
import { scrollToSection } from "@/lib/scroll";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "showcase", label: "Showcase" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

const observedSectionIds = sections.map((section) => section.id);

export function ContextualSectionNav() {
  const activeSection = useActiveSection(observedSectionIds);
  const isPrimaryNavVisible = useElementVisibility("primary-header");
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {!isPrimaryNavVisible ? (
        <motion.nav
          aria-label="Section progress"
          initial={shouldReduceMotion ? false : { opacity: 0, x: 14 }}
          animate={{ opacity: 1, x: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 14 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.28 }}
          className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
        >
          <ol className="relative flex flex-col items-center gap-2 py-1 before:absolute before:bottom-5 before:left-1/2 before:top-5 before:w-px before:-translate-x-1/2 before:bg-white/10">
            {sections.map((section) => {
              const isActive = section.id === activeSection;

              return (
                <li key={section.id} className="relative">
                  <a
                    href={`#${section.id}`}
                    aria-label={`Go to ${section.label}`}
                    aria-current={isActive ? "location" : undefined}
                    title={section.label}
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection(`#${section.id}`);
                    }}
                    className="group relative flex size-10 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <AnimatePresence initial={false}>
                      {isActive ? (
                        <motion.span
                          layoutId="contextual-section-label"
                          initial={shouldReduceMotion ? false : { opacity: 0, x: 8 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 8 }}
                          transition={{ duration: shouldReduceMotion ? 0 : 0.24 }}
                          className="absolute right-full mr-4 whitespace-nowrap text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-zinc-200"
                        >
                          {section.label}
                        </motion.span>
                      ) : null}
                    </AnimatePresence>

                    <motion.span
                      layout
                      className={cn(
                        "relative rounded-full transition-colors",
                        isActive
                          ? "size-3.5 bg-blue-500 shadow-[0_0_0_5px_rgba(59,130,246,0.12),0_0_18px_rgba(59,130,246,0.75)]"
                          : "size-1.5 bg-white/20 group-hover:bg-white/50",
                      )}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.25,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </a>
                </li>
              );
            })}
          </ol>
        </motion.nav>
      ) : null}
    </AnimatePresence>
  );
}
