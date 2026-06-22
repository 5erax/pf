let activeScrollFrame: number | null = null;

function stopActiveScroll() {
  if (activeScrollFrame !== null) {
    window.cancelAnimationFrame(activeScrollFrame);
    activeScrollFrame = null;
  }

  window.removeEventListener("wheel", stopActiveScroll);
  window.removeEventListener("touchstart", stopActiveScroll);
}

function animateScrollTo(targetTop: number, prefersReducedMotion: boolean) {
  stopActiveScroll();

  if (prefersReducedMotion) {
    window.scrollTo({ top: targetTop, behavior: "auto" });
    return;
  }

  const startTop = window.scrollY;
  const distance = targetTop - startTop;
  const duration = Math.min(620, Math.max(280, Math.abs(distance) * 0.06));
  const startTime = performance.now();

  window.addEventListener("wheel", stopActiveScroll, { passive: true });
  window.addEventListener("touchstart", stopActiveScroll, { passive: true });

  const step = (currentTime: number) => {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 5);
    const nextTop = startTop + distance * easedProgress;

    document.documentElement.scrollTop = nextTop;
    document.body.scrollTop = nextTop;

    if (progress < 1) {
      activeScrollFrame = window.requestAnimationFrame(step);
      return;
    }

    stopActiveScroll();
  };

  activeScrollFrame = window.requestAnimationFrame(step);
}

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

    animateScrollTo(0, prefersReducedMotion);

    return;
  }

  const sectionId = getSectionIdFromHash(hash);
  const element = document.getElementById(sectionId);

  if (!element) return;

  const elementTop = element.getBoundingClientRect().top + window.scrollY;
  const targetTop = Math.max(elementTop - 16, 0);

  window.history.pushState(null, "", hash);

  animateScrollTo(targetTop, prefersReducedMotion);
}
