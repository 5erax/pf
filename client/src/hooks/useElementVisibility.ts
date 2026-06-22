import { useEffect, useState } from "react";

export function useElementVisibility(elementId: string) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const element = document.getElementById(elementId);

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.01 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [elementId]);

  return isVisible;
}
