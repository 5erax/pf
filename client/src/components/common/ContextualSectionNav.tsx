import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { useActiveSection } from "@/hooks/useActiveSection";
import { useElementVisibility } from "@/hooks/useElementVisibility";
import { cn } from "@/lib/utils";
import { scrollToSection } from "@/lib/scroll";

const sections = [
  { id: "home", number: "00", label: "Home" },
  { id: "about", number: "01", label: "About" },
  { id: "skills", number: "02", label: "Skills" },
  { id: "showcase", number: "03", label: "Showcase" },
  { id: "projects", number: "04", label: "Projects" },
  { id: "contact", number: "05", label: "Contact" },
] as const;

const observedSectionIds = sections.map((section) => section.id);

export function ContextualSectionNav() {
  const activeSection = useActiveSection(observedSectionIds);
  const isPrimaryNavVisible = useElementVisibility("primary-header");
  const shouldReduceMotion = useReducedMotion();
  const shouldShow = !isPrimaryNavVisible;
  const activeItem =
    sections.find((section) => section.id === activeSection) ?? sections[0];

  return (
    <AnimatePresence>
      {shouldShow ? (
        <motion.nav
          aria-label="Section progress"
          initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
          className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
        >
          <div className="w-44 rounded-2xl border border-white/10 bg-black/70 p-2 shadow-2xl shadow-black/40 backdrop-blur-2xl">
            <div className="overflow-hidden px-3 pb-2 pt-2">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Current section
              </p>
              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={activeItem.id}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.22 }}
                  className="mt-2 text-sm font-semibold text-white"
                >
                  {activeItem.number} / {activeItem.label}
                </motion.p>
              </AnimatePresence>
            </div>

            <ol className="flex flex-col gap-1">
              {sections.map((section) => {
                const isActive = section.id === activeSection;

                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      aria-current={isActive ? "location" : undefined}
                      onClick={(event) => {
                        event.preventDefault();
                        scrollToSection(`#${section.id}`);
                      }}
                      className={cn(
                        "relative flex min-h-10 items-center gap-3 overflow-hidden rounded-xl px-3 text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                        isActive
                          ? "text-white"
                          : "text-zinc-500 hover:bg-white/[0.05] hover:text-zinc-200",
                      )}
                    >
                      {isActive ? (
                        <motion.span
                          layoutId="contextual-section-active"
                          className="absolute inset-0 rounded-xl bg-white/10"
                          transition={{
                            duration: shouldReduceMotion ? 0 : 0.28,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        />
                      ) : null}
                      <span className="relative font-mono text-[0.65rem]">
                        {section.number}
                      </span>
                      <span className="relative font-medium">
                        {section.label}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ol>
          </div>
        </motion.nav>
      ) : null}
    </AnimatePresence>
  );
}
