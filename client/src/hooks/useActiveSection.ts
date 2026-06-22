import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const visibleSections = new Map<string, IntersectionObserverEntry>();
    const updateActiveSection = () => {
      const readingLine = window.innerHeight * 0.38;
      const currentSection = [...visibleSections.values()]
        .filter((entry) => entry.isIntersecting)
        .sort((first, second) => {
          const firstDistance = Math.abs(
            first.boundingClientRect.top + first.boundingClientRect.height / 2 - readingLine,
          );
          const secondDistance = Math.abs(
            second.boundingClientRect.top + second.boundingClientRect.height / 2 - readingLine,
          );
          return firstDistance - secondDistance;
        })[0];

      if (!currentSection) return;

      setActiveSection((previousSection) =>
        previousSection === currentSection.target.id
          ? previousSection
          : currentSection.target.id,
      );
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => visibleSections.set(entry.target.id, entry));
        updateActiveSection();
      },
      { rootMargin: "-12% 0px -12% 0px", threshold: [0, 0.2, 0.45, 0.7] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}
