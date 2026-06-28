import { useEffect, useRef, useState } from "react";

export type ScrollDirection = "up" | "down" | "idle";

export function useScrollDirection(threshold = 8) {
  const [direction, setDirection] = useState<ScrollDirection>("idle");
  const lastScrollY = useRef(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const updateDirection = () => {
      frameRef.current = null;
      const currentScrollY = window.scrollY;
      const distance = currentScrollY - lastScrollY.current;

      if (Math.abs(distance) < threshold) return;

      setDirection(distance > 0 ? "down" : "up");
      lastScrollY.current = currentScrollY;
    };

    const handleScroll = () => {
      if (frameRef.current !== null) return;
      frameRef.current = requestAnimationFrame(updateDirection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [threshold]);

  return direction;
}
