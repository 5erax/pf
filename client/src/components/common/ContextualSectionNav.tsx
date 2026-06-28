import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { useActiveSection } from "@/hooks/useActiveSection";
import { useElementVisibility } from "@/hooks/useElementVisibility";
import { cn } from "@/lib/utils";
import { scrollToSection } from "@/lib/scroll";
import { useSectionProgress } from "@/motion/hooks/useSectionProgress";

const navEase = [0.22, 1, 0.36, 1] as const;

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
  const isTopSentinelVisible = useElementVisibility("primary-header-sentinel");
  const { progress } = useSectionProgress(sectionIds);
  const shouldReduceMotion = useReducedMotion();
  const activeIndex = Math.max(
    sections.findIndex((section) => section.id === activeSection),
    0,
  );

  return (
    <>
      <div
        className="fixed left-0 top-0 z-50 h-0.5 bg-gradient-to-r from-cyan-200 via-emerald-200 to-violet-200 transition-transform duration-150 lg:hidden"
        style={{ transform: `scaleX(${progress})`, transformOrigin: "left" }}
        aria-hidden="true"
      />

      <AnimatePresence>
      {!isTopSentinelVisible ? (
        <motion.nav
          aria-label="Portfolio sections"
          initial={shouldReduceMotion ? false : { opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 8 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.28, ease: navEase }}
          className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block xl:right-7"
        >
          <div className="relative rounded-[1.35rem] border border-white/10 bg-black/55 p-1 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
            <div className="pointer-events-none absolute inset-y-4 right-0 w-px bg-white/10" />
            <div
              className="pointer-events-none absolute right-0 top-4 w-px origin-top bg-gradient-to-b from-cyan-200 via-emerald-200 to-violet-200 transition-transform duration-150"
              style={{
                height: "calc(100% - 2rem)",
                transform: `scaleY(${progress})`,
              }}
            />

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
                          "relative z-10 block h-1.5 w-4 rounded-full transition-[transform,background-color,opacity] duration-300",
                          isActive
                            ? "scale-x-100 bg-cyan-200 opacity-100"
                            : "scale-x-[0.28] bg-zinc-600 opacity-80 group-hover:bg-zinc-300 group-hover:opacity-100",
                        )}
                      />
                      {isActive ? (
                        <>
                          <motion.span
                            layoutId="section-index-glow"
                            className="absolute inset-1 rounded-lg border border-cyan-300/15 bg-cyan-300/[0.07] shadow-[0_0_18px_rgba(103,232,249,0.12)]"
                            transition={{ duration: shouldReduceMotion ? 0 : 0.28, ease: navEase }}
                          />
                          <AnimatePresence mode="wait" initial={false}>
                            <motion.span
                              key={activeSection}
                              initial={shouldReduceMotion ? false : { opacity: 0, x: 6 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 6 }}
                              transition={{ duration: shouldReduceMotion ? 0 : 0.24, ease: navEase }}
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
                      {!isActive ? (
                        <span
                          className="pointer-events-none absolute right-full mr-3 flex translate-x-1 items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-black/65 px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-zinc-200 opacity-0 shadow-xl backdrop-blur-xl transition duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
                          aria-hidden="true"
                        >
                          <span className="font-mono text-[0.6rem] text-cyan-200">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="h-px w-3 bg-white/20" />
                          {section.label}
                        </span>
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
    </>
  );
}
