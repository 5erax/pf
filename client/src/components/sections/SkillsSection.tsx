import type { LucideIcon } from "lucide-react";
import { useState } from "react";
import {
  CheckCircle2,
  Code2,
  Database,
  Layers3,
  LayoutDashboard,
  MonitorSmartphone,
  Palette,
  ServerCog,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import { Container } from "@/components/common/Container";
import { MotionChip, MotionGroup, MotionItem } from "@/components/common/Reveal";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { skillGroups } from "@/data/skills";

type SkillMeta = {
  icon: LucideIcon;
  label: string;
  description: string;
  spotlightColor: string;
};

const skillSummary = [
  {
    icon: Code2,
    title: "Frontend",
    description: "React, TypeScript, component architecture, and UI systems.",
  },
  {
    icon: ServerCog,
    title: "Backend",
    description: "API integration, backend logic, authentication, and services.",
  },
  {
    icon: LayoutDashboard,
    title: "Product UI",
    description: "Responsive layouts, polished interfaces, and user flows.",
  },
];

const coreStrengths = [
  "Reusable component systems",
  "Type-safe implementation",
  "Responsive interface design",
  "API-ready frontend flows",
];

const constellationPositions = [
  { x: 25, y: 26 },
  { x: 74, y: 28 },
  { x: 25, y: 72 },
  { x: 74, y: 70 },
];

function getSkillMeta(title: string, index: number): SkillMeta {
  const normalizedTitle = title.toLowerCase();

  if (
    normalizedTitle.includes("frontend") ||
    normalizedTitle.includes("react") ||
    normalizedTitle.includes("ui")
  ) {
    return {
      icon: Code2,
      label: "Interface layer",
      description:
        "Tools I use to build polished, reusable, and maintainable user interfaces.",
      spotlightColor: "rgba(34, 211, 238, 0.14)",
    };
  }

  if (
    normalizedTitle.includes("backend") ||
    normalizedTitle.includes("server") ||
    normalizedTitle.includes("api")
  ) {
    return {
      icon: ServerCog,
      label: "Application logic",
      description:
        "Technologies for connecting frontend flows with APIs, backend services, and product data.",
      spotlightColor: "rgba(16, 185, 129, 0.14)",
    };
  }

  if (
    normalizedTitle.includes("database") ||
    normalizedTitle.includes("data") ||
    normalizedTitle.includes("sql")
  ) {
    return {
      icon: Database,
      label: "Data layer",
      description:
        "Skills for storing, organizing, and working with real application data.",
      spotlightColor: "rgba(168, 85, 247, 0.14)",
    };
  }

  if (
    normalizedTitle.includes("design") ||
    normalizedTitle.includes("style") ||
    normalizedTitle.includes("tailwind")
  ) {
    return {
      icon: Palette,
      label: "Visual system",
      description:
        "Tools and practices for creating consistent, responsive, and professional UI.",
      spotlightColor: "rgba(236, 72, 153, 0.14)",
    };
  }

  if (
    normalizedTitle.includes("tool") ||
    normalizedTitle.includes("workflow") ||
    normalizedTitle.includes("dev")
  ) {
    return {
      icon: Wrench,
      label: "Development workflow",
      description:
        "Tools that help me build, debug, ship, and maintain projects more effectively.",
      spotlightColor: "rgba(250, 204, 21, 0.12)",
    };
  }

  const fallback: SkillMeta[] = [
    {
      icon: Layers3,
      label: "Engineering stack",
      description:
        "A focused set of tools used to build practical, maintainable web applications.",
      spotlightColor: "rgba(255, 255, 255, 0.12)",
    },
    {
      icon: MonitorSmartphone,
      label: "Product experience",
      description:
        "Skills that support responsive layouts, usability, and clean product delivery.",
      spotlightColor: "rgba(34, 211, 238, 0.12)",
    },
    {
      icon: ShieldCheck,
      label: "Reliable delivery",
      description:
        "Practices that improve code quality, maintainability, and long-term project stability.",
      spotlightColor: "rgba(16, 185, 129, 0.12)",
    },
  ];

  return fallback[index % fallback.length];
}

export function SkillsSection() {
  const [activeSkillGroup, setActiveSkillGroup] = useState<string | null>(null);

  return (
    <section id="skills" className="relative border-t border-white/10 py-24">
      <Container>
        <MotionGroup className="mb-12 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="max-w-3xl">
            <MotionItem kind="eyebrow">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
              Skills
            </p>
            </MotionItem>

            <MotionItem kind="heading">
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              A focused fullstack toolkit for building modern web products.
            </h2>
            </MotionItem>

            <MotionItem kind="paragraph">
            <p className="mt-5 max-w-2xl leading-8 text-zinc-400">
              I work with a practical stack that helps me build clean
              interfaces, connect real backend services, and keep projects easy
              to maintain as they grow.
            </p>
            </MotionItem>
          </div>

          <MotionItem kind="card" direction="right">
          <SpotlightCard
            className="p-5"
            spotlightColor="rgba(34, 211, 238, 0.14)"
          >
            <MotionGroup compact className="grid gap-4 sm:grid-cols-2">
              {coreStrengths.map((item) => (
                <MotionItem key={item} kind="chip" className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                  <span className="text-sm text-zinc-300">{item}</span>
                </MotionItem>
              ))}
            </MotionGroup>
          </SpotlightCard>
          </MotionItem>
        </MotionGroup>

        <MotionGroup className="mb-6 grid gap-5 md:grid-cols-3">
          {skillSummary.map((item) => {
            const Icon = item.icon;

            return (
              <MotionItem key={item.title} kind="card">
              <SpotlightCard
                className="p-6"
                spotlightColor="rgba(255, 255, 255, 0.12)"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                  <Icon className="h-6 w-6 text-zinc-300" />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {item.description}
                </p>
              </SpotlightCard>
              </MotionItem>
            );
          })}
        </MotionGroup>

        <MotionItem kind="card" className="mb-6 hidden lg:block">
          <SpotlightCard
            className="p-8"
            spotlightColor="rgba(34, 211, 238, 0.12)"
          >
            <div className="mb-8 flex items-end justify-between gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
                  Skills constellation
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                  Capability map around fullstack delivery
                </h3>
              </div>

              <p className="max-w-sm text-sm leading-7 text-zinc-400">
                Focus or hover each node to see how the stack connects to the
                center role without hiding the mobile grouped-chip fallback.
              </p>
            </div>

            <div className="relative min-h-[34rem] overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/30">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_38%)]" />

              <svg
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                {skillGroups.map((group, index) => {
                  const position = constellationPositions[index];
                  const isActive =
                    activeSkillGroup === null || activeSkillGroup === group.title;

                  return (
                    <line
                      key={group.title}
                      x1="50"
                      y1="50"
                      x2={position.x}
                      y2={position.y}
                      className="transition-opacity duration-300"
                      stroke={activeSkillGroup === group.title ? "#67e8f9" : "#ffffff"}
                      strokeOpacity={isActive ? 0.32 : 0.08}
                      strokeWidth={activeSkillGroup === group.title ? 0.55 : 0.28}
                    />
                  );
                })}
              </svg>

              <div className="absolute left-1/2 top-1/2 z-10 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-center shadow-2xl shadow-cyan-950/40">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">
                    Center node
                  </p>
                  <p className="mt-2 text-xl font-semibold text-white">
                    Fullstack Developer
                  </p>
                </div>
              </div>

              {skillGroups.map((group, index) => {
                const meta = getSkillMeta(group.title, index);
                const Icon = meta.icon;
                const position = constellationPositions[index];
                const descriptionId = `skill-node-${index}`;

                return (
                  <button
                    key={group.title}
                    type="button"
                    aria-describedby={descriptionId}
                    className="group absolute z-20 w-64 -translate-x-1/2 -translate-y-1/2 rounded-[1.5rem] border border-white/10 bg-zinc-950/80 p-4 text-left shadow-2xl shadow-black/30 backdrop-blur-xl transition duration-300 hover:-translate-y-[52%] hover:border-cyan-300/35 hover:bg-zinc-900/90 focus-visible:-translate-y-[52%] focus-visible:border-cyan-300/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/40"
                    style={{
                      left: `${position.x}%`,
                      top: `${position.y}%`,
                    }}
                    onBlur={() => setActiveSkillGroup(null)}
                    onFocus={() => setActiveSkillGroup(group.title)}
                    onMouseEnter={() => setActiveSkillGroup(group.title)}
                    onMouseLeave={() => setActiveSkillGroup(null)}
                  >
                    <span className="flex items-start gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                        <Icon className="h-5 w-5 text-cyan-100" />
                      </span>

                      <span>
                        <span className="block text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                          {meta.label}
                        </span>
                        <span className="mt-1 block font-semibold text-white">
                          {group.title}
                        </span>
                      </span>
                    </span>

                    <span className="mt-4 flex flex-wrap gap-1.5">
                      {group.skills.slice(0, 4).map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 bg-black/25 px-2.5 py-1 text-xs text-zinc-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </span>

                    <span
                      id={descriptionId}
                      className="pointer-events-none absolute left-4 right-4 top-[calc(100%+0.75rem)] z-30 rounded-2xl border border-cyan-300/20 bg-black/90 p-3 text-xs leading-6 text-zinc-300 opacity-0 shadow-2xl shadow-black/40 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
                    >
                      {meta.description}
                    </span>
                  </button>
                );
              })}
            </div>
          </SpotlightCard>
        </MotionItem>

        <MotionGroup className="grid gap-5 md:grid-cols-2 lg:hidden">
          {skillGroups.map((group, index) => {
            const meta = getSkillMeta(group.title, index);
            const Icon = meta.icon;

            return (
              <MotionItem
                key={group.title}
                kind="card"
                direction={index % 2 === 0 ? "left" : "right"}
              >
              <SpotlightCard
                className="p-6"
                spotlightColor={meta.spotlightColor}
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/25">
                      <Icon className="h-6 w-6 text-zinc-300" />
                    </div>

                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
                        {meta.label}
                      </p>

                      <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">
                        {group.title}
                      </h3>
                    </div>
                  </div>

                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-500">
                    {group.skills.length} tools
                  </span>
                </div>

                <p className="mt-5 leading-7 text-zinc-400">
                  {meta.description}
                </p>

                <MotionGroup compact className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <MotionChip
                      key={skill}
                      className="rounded-full border border-white/10 bg-black/25 px-3.5 py-1.5 text-sm text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
                    >
                      {skill}
                    </MotionChip>
                  ))}
                </MotionGroup>
              </SpotlightCard>
              </MotionItem>
            );
          })}
        </MotionGroup>
      </Container>
    </section>
  );
}
