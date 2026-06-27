"use client";

import { memo, useCallback, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { scrollToSection } from "@/lib/scroll";

type AccordionItemData = {
  id: number;
  title: string;
  imageUrl: string;
};

const accordionItems: AccordionItemData[] = [
  {
    id: 1,
    title: "Voice Assistant",
    imageUrl:
      "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "AI Image Generation",
    imageUrl:
      "https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "AI Chatbot + Local RAG",
    imageUrl:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "AI Agent",
    imageUrl:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2090&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Visual Understanding",
    imageUrl:
      "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2070&auto=format&fit=crop",
  },
];

type AccordionItemProps = {
  item: AccordionItemData;
  index: number;
  isActive: boolean;
  onActivate: (index: number) => void;
};

const AccordionItem = memo(function AccordionItem({
  item,
  index,
  isActive,
  onActivate,
}: AccordionItemProps) {
  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src =
      "https://placehold.co/400x450/111827/ffffff?text=Image+Error";
  };

  return (
    <button
      type="button"
      aria-pressed={isActive}
      aria-label={`Show ${item.title}`}
      className={cn(
        "group relative h-64 w-full min-w-0 flex-1 cursor-pointer overflow-hidden rounded-2xl border bg-black/40 text-left transition-[border-color,box-shadow,opacity,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:h-72 md:h-[420px]",
        isActive
          ? "border-cyan-200/40 opacity-100 shadow-[0_24px_80px_rgba(34,211,238,0.14)]"
          : "border-white/12 opacity-70 hover:border-white/25 hover:opacity-95",
      )}
      onClick={() => onActivate(index)}
      onFocus={() => onActivate(index)}
      onMouseEnter={() => onActivate(index)}
    >
      <img
        src={item.imageUrl}
        alt=""
        width={640}
        height={720}
        loading={index === 0 ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={index === 0 ? "high" : "low"}
        className={cn(
          "absolute inset-0 size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isActive ? "scale-100" : "scale-[1.035]",
        )}
        onError={handleImageError}
      />

      <div
        className={cn(
          "absolute inset-0 transition-colors duration-300",
          isActive ? "bg-black/34" : "bg-black/58",
        )}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(0,0,0,0.08)_0%,_rgba(0,0,0,0.76)_100%)]" />
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-x-5 top-5 h-px origin-left bg-gradient-to-r from-cyan-200 via-white/60 to-transparent transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          isActive ? "scale-x-100 opacity-80" : "scale-x-0 opacity-0",
        )}
      />

      <span
        className={cn(
          "absolute bottom-6 left-5 right-5 text-lg font-semibold text-white transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:text-center",
          isActive
            ? "translate-y-0 opacity-100"
            : "translate-y-2 opacity-70 group-hover:translate-y-0 group-hover:opacity-95",
        )}
      >
        {item.title}
      </span>
    </button>
  );
});

type LandingAccordionItemProps = {
  className?: string;
};

export function LandingAccordionItem({
  className = "",
}: LandingAccordionItemProps) {
  const [activeIndex, setActiveIndex] = useState(4);

  const handleItemActivate = useCallback((index: number) => {
    setActiveIndex((currentIndex) =>
      currentIndex === index ? currentIndex : index,
    );
  }, []);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] font-sans shadow-2xl shadow-black/30 backdrop-blur-xl",
        className,
      )}
    >
      <section className="px-4 py-10 sm:px-6 md:py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 lg:flex-row">
          <div className="w-full text-center lg:w-2/5 lg:text-left">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
              AI Workflow
            </p>

            <h2 className="text-3xl font-bold leading-tight tracking-tighter text-white sm:text-4xl md:text-5xl">
              Accelerate Gen-AI Tasks on Any Device
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-400 md:mx-0">
              Build high-performance AI apps on-device without the hassle of
              model compression or edge deployment.
            </p>

            <Button asChild size="lg" className="mt-8 rounded-full px-6">
              <a
                href="#contact"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection("#contact");
                }}
              >
                Contact me
              </a>
            </Button>
          </div>

          <div className="w-full min-w-0 lg:w-3/5">
            <div
              aria-label="AI workflow examples"
              className="flex w-full min-w-0 flex-col gap-3 py-4 md:flex-row md:items-stretch md:gap-4"
            >
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  index={index}
                  isActive={index === activeIndex}
                  onActivate={handleItemActivate}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingAccordionItem;
