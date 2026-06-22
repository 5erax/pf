import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const updateFromReadingLine = () => {
      const readingLine = window.innerHeight * 0.28;
      const currentSection = sections.find((section) => {
        const bounds = section.getBoundingClientRect();
        return bounds.top <= readingLine && bounds.bottom >= readingLine;
      });

      if (currentSection) {
        setActiveSection((previousSection) =>
          previousSection === currentSection.id
            ? previousSection
            : currentSection.id,
        );
      }
    };

    const observer = new IntersectionObserver(updateFromReadingLine, {
      rootMargin: "-27% 0px -71% 0px",
      threshold: 0,
    });

    sections.forEach((section) => observer.observe(section));
    updateFromReadingLine();

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}
