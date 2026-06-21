"use client";

import { useId } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

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
  const activeTab = activeItemName ?? items[0]?.name ?? "";

  return (
    <div
      className={`flex items-center gap-1 rounded-full border border-white/10 bg-black/45 p-1.5 shadow-2xl shadow-black/30 backdrop-blur-2xl ${className}`}
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
            aria-current={isActive ? "page" : undefined}
            className={`relative flex items-center gap-2 rounded-full px-3.5 py-2 text-sm font-medium transition sm:px-4 ${
              isActive ? "text-white" : "text-zinc-400 hover:text-white"
            }`}
          >
            {isActive ? (
              <motion.div
                layoutId={`tubelight-${layoutId}`}
                className="absolute inset-0 rounded-full bg-white/10"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              >
                <div className="absolute inset-x-4 -top-px h-px rounded-full bg-white/70" />
                <div className="absolute inset-x-6 -top-px h-px rounded-full bg-cyan-300 blur-sm" />
              </motion.div>
            ) : null}

            <Icon className="relative z-10 h-4 w-4 shrink-0" />

            <span className="relative z-10 hidden sm:inline">
              {item.name}
            </span>
          </a>
        );
      })}
    </div>
  );
}