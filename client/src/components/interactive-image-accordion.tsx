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
        "relative w-full min-w-0 cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-black/40 text-left transition-[height,flex-grow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:h-[420px]",
        isActive ? "h-72 md:flex-[5]" : "h-16 md:flex-[0.72]",
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
        className="absolute inset-0 size-full object-cover"
        onError={handleImageError}
      />

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_transparent_0%,_rgba(0,0,0,0.72)_100%)]" />

      <span
        className={cn(
          "absolute whitespace-nowrap text-lg font-semibold text-white transition-all duration-300 ease-out",
          isActive
            ? "bottom-6 left-1/2 -translate-x-1/2 rotate-0"
            : "bottom-1/2 left-5 translate-y-1/2 rotate-0 md:bottom-24 md:left-1/2 md:-translate-x-1/2 md:translate-y-0 md:rotate-90",
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
