const HEADER_OFFSET = 96;

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

  const elementTop = element.getBoundingClientRect().top + window.scrollY;
  const targetTop = Math.max(elementTop - HEADER_OFFSET, 0);

  window.history.pushState(null, "", hash);

  window.scrollTo({
    top: targetTop,
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
}