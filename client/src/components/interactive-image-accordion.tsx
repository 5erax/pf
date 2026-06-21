"use client";

import { useState } from "react";

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
  isActive: boolean;
  onMouseEnter: () => void;
};

function AccordionItem({ item, isActive, onMouseEnter }: AccordionItemProps) {
  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src =
      "https://placehold.co/400x450/111827/ffffff?text=Image+Error";
  };

  return (
    <div
      className={`
        relative h-[450px] cursor-pointer overflow-hidden rounded-2xl
        border border-white/10 bg-black/40
        transition-all duration-700 ease-in-out
        ${isActive ? "w-[400px]" : "w-[60px]"}
      `}
      onMouseEnter={onMouseEnter}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover"
        onError={handleImageError}
      />

      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_transparent_0%,_rgba(0,0,0,0.72)_100%)]" />

      <span
        className={`
          absolute whitespace-nowrap text-lg font-semibold text-white
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? "bottom-6 left-1/2 -translate-x-1/2 rotate-0"
              : "bottom-24 left-1/2 w-auto -translate-x-1/2 rotate-90 text-left"
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
}

type LandingAccordionItemProps = {
  className?: string;
};

export function LandingAccordionItem({
  className = "",
}: LandingAccordionItemProps) {
  const [activeIndex, setActiveIndex] = useState(4);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div
      className={`
        overflow-hidden rounded-[2rem] border border-white/10
        bg-white/[0.04] font-sans shadow-2xl shadow-black/30 backdrop-blur-xl
        ${className}
      `}
    >
      <section className="px-4 py-12 md:py-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-12 md:flex-row">
          <div className="w-full text-center md:w-1/2 md:text-left">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
              AI Workflow
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tighter text-white md:text-6xl">
              Accelerate Gen-AI Tasks on Any Device
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-400 md:mx-0">
              Build high-performance AI apps on-device without the hassle of
              model compression or edge deployment.
            </p>

            <div className="mt-8">
              <a
                href="#contact"
                className="
                  inline-block rounded-lg bg-white px-8 py-3 font-semibold
                  text-black shadow-lg transition-colors duration-300
                  hover:bg-zinc-200
                "
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="flex flex-row items-center justify-center gap-4 overflow-x-auto p-4">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
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