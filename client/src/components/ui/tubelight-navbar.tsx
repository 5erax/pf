"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export type NavItem = {
  name: string;
  url: string;
  icon: LucideIcon;
};

type NavBarProps = {
  items: NavItem[];
  activeItemName?: string;
  className?: string;
  onNavigate?: (item: NavItem) => void;
};

export function NavBar({
  items,
  activeItemName,
  className = "",
  onNavigate,
}: NavBarProps) {
  const layoutId = useId();
  const shouldReduceMotion = useReducedMotion();
  const activeTab = activeItemName ?? items[0]?.name ?? "";

  return (
    <div
      className={cn(
        "flex items-center gap-1 rounded-full border border-white/15 bg-black/75 p-1 shadow-2xl shadow-black/40 backdrop-blur-2xl",
        className,
      )}
    >
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.name;

        return (
          <a
            key={item.name}
            href={item.url}
            onClick={(event) => {
              if (onNavigate) {
                event.preventDefault();
                onNavigate(item);
              }
            }}
            aria-label={item.name}
            aria-current={isActive ? "location" : undefined}
            className={cn(
              "relative flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-full px-3 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-4",
              isActive ? "text-white" : "text-zinc-400 hover:text-white",
            )}
          >
            {isActive ? (
              <motion.div
                layoutId={`tubelight-${layoutId}`}
                className="absolute inset-0 rounded-full bg-white/10"
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 380, damping: 30 }
                }
              >
                <div className="absolute inset-x-4 -top-px h-px rounded-full bg-white/70" />
                <div className="absolute inset-x-6 -top-px h-px rounded-full bg-cyan-300 blur-sm" />
              </motion.div>
            ) : null}

            <Icon aria-hidden="true" className="relative z-10 size-4 shrink-0" />

            <span className="relative z-10 hidden sm:inline">
              {item.name}
            </span>
          </a>
        );
      })}
    </div>
  );
}
