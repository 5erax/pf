import { ArrowUp } from "lucide-react";

import { useElementVisibility } from "@/hooks/useElementVisibility";
import { scrollToSection } from "@/lib/scroll";

export function ScrollToTopButton() {
  const isHomeVisible = useElementVisibility("home");
  const visible = !isHomeVisible;

  return (
    <button
      type="button"
      onClick={() => scrollToSection("#home")}
      aria-label="Scroll to top"
      className={`fixed bottom-24 right-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white shadow-2xl shadow-black/40 backdrop-blur-2xl transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:bottom-8 md:right-8 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
