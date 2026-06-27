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

const sectionIds = sections.map((section) => section.id);

export function ContextualSectionNav() {
  const activeSection = useActiveSection(sectionIds);
  const isPrimaryNavVisible = useElementVisibility("primary-header");
  const shouldReduceMotion = useReducedMotion();
  const activeIndex = Math.max(
    sections.findIndex((section) => section.id === activeSection),
    0,
  );

  return (
    <AnimatePresence>
      {!isPrimaryNavVisible ? (
        <motion.nav
          aria-label="Portfolio sections"
          initial={shouldReduceMotion ? false : { opacity: 0, x: 20, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 18, scale: 0.96 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.34, ease: [0.22, 1, 0.36, 1] }}
          className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block xl:right-7"
        >
          <div className="relative rounded-[1.35rem] border border-white/10 bg-black/55 p-1 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
            <div className="pointer-events-none absolute inset-y-4 right-0 w-px bg-gradient-to-b from-transparent via-cyan-300/60 to-transparent" />

            <ol className="flex flex-col" aria-label="Jump to section">
              {sections.map((section, index) => {
                const isActive = section.id === activeSection;

                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      aria-label={`Go to ${section.label}`}
                      aria-current={isActive ? "location" : undefined}
                      onClick={(event) => {
                        event.preventDefault();
                        scrollToSection(`#${section.id}`);
                      }}
                      className="group relative flex size-11 items-center justify-center rounded-xl"
                    >
                      <span
                        className={cn(
                          "relative z-10 block rounded-full transition-[width,height,background-color] duration-300",
                          isActive
                            ? "h-1.5 w-4 bg-cyan-200"
                            : "size-1 bg-zinc-600 group-hover:bg-zinc-300",
                        )}
                      />
                      {isActive ? (
                        <>
                          <motion.span
                            layoutId="section-index-glow"
                            className="absolute inset-1 rounded-lg border border-cyan-300/15 bg-cyan-300/[0.07] shadow-[0_0_18px_rgba(103,232,249,0.12)]"
                            transition={{ duration: shouldReduceMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
                          />
                          <AnimatePresence mode="wait" initial={false}>
                            <motion.span
                              key={activeSection}
                              initial={shouldReduceMotion ? false : { opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 8 }}
                              transition={{ duration: shouldReduceMotion ? 0 : 0.24 }}
                              className="absolute right-full mr-3 flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-black/65 px-3 py-2 shadow-xl backdrop-blur-xl"
                              aria-hidden="true"
                            >
                              <span className="font-mono text-[0.6rem] text-cyan-200">
                                {String(activeIndex + 1).padStart(2, "0")}
                              </span>
                              <span className="h-px w-3 bg-white/20" />
                              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-zinc-200">
                                {sections[activeIndex].label}
                              </span>
                            </motion.span>
                          </AnimatePresence>
                        </>
                      ) : null}
                      <span className="sr-only">
                        {String(index + 1).padStart(2, "0")} {section.label}
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
