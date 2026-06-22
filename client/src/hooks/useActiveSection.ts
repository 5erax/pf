import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    let animationFrame = 0;

    const updateActiveSection = () => {
      animationFrame = 0;

      const headerHeight = document.querySelector("header")?.getBoundingClientRect()
        .height ?? 80;
      const readingLine =
        window.scrollY + headerHeight + Math.min(window.innerHeight * 0.28, 240);

      let currentSection = sections[0].id;

      for (const section of sections) {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;

        if (readingLine >= sectionTop) {
          currentSection = section.id;
        }
      }

      setActiveSection((previousSection) =>
        previousSection === currentSection ? previousSection : currentSection,
      );
    };

    const scheduleUpdate = () => {
      if (animationFrame === 0) {
        animationFrame = window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);

      if (animationFrame !== 0) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [sectionIds]);

  return activeSection;
}
