export function getSectionIdFromHash(hash: string) {
  return hash.replace("#", "");
}

export function scrollToSection(hash: string) {
  if (typeof window === "undefined") return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (hash === "#" || hash === "#home") {
    window.history.pushState(null, "", "#home");

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });

    return;
  }

  const sectionId = getSectionIdFromHash(hash);
  const element = document.getElementById(sectionId);

  if (!element) return;

  window.history.pushState(null, "", hash);

  element.scrollIntoView({
    behavior: prefersReducedMotion ? "auto" : "smooth",
    block: "start",
  });
}
