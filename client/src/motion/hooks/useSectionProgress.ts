import { useEffect, useState } from "react";

type SectionProgress = {
  activeSection: string;
  progress: number;
};

export function useSectionProgress(sectionIds: string[]) {
  const [state, setState] = useState<SectionProgress>({
    activeSection: sectionIds[0] ?? "",
    progress: 0,
  });

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    let frameId: number | null = null;

    const update = () => {
      frameId = null;
      const viewportAnchor = window.innerHeight * 0.38;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pageProgress =
        documentHeight <= 0 ? 0 : window.scrollY / documentHeight;

      const activeSection =
        sections
          .map((section) => ({
            id: section.id,
            distance: Math.abs(
              section.getBoundingClientRect().top +
                section.getBoundingClientRect().height / 2 -
                viewportAnchor,
            ),
          }))
          .sort((first, second) => first.distance - second.distance)[0]?.id ??
        sections[0].id;

      setState((current) =>
        current.activeSection === activeSection &&
        Math.abs(current.progress - pageProgress) < 0.002
          ? current
          : {
              activeSection,
              progress: Math.min(Math.max(pageProgress, 0), 1),
            },
      );
    };

    const handleScroll = () => {
      if (frameId !== null) return;
      frameId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }
    };
  }, [sectionIds]);

  return state;
}
