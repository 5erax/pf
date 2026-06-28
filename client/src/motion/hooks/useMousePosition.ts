import { useCallback, useEffect, useRef, useState } from "react";

type MousePosition = {
  x: number;
  y: number;
};

export function useMousePosition() {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });
  const frameRef = useRef<number | null>(null);
  const nextPosition = useRef<MousePosition>({ x: 0, y: 0 });

  const flushPosition = useCallback(() => {
    frameRef.current = null;
    setPosition(nextPosition.current);
  }, []);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      nextPosition.current = {
        x: event.clientX,
        y: event.clientY,
      };

      if (frameRef.current === null) {
        frameRef.current = requestAnimationFrame(flushPosition);
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [flushPosition]);

  return position;
}
