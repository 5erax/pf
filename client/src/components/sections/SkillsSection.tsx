import type { LucideIcon } from "lucide-react";
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
  return (
    <section id="skills" className="relative border-t border-white/10 py-24">
      <Container>
        <div className="mb-12 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
              Skills
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              A focused fullstack toolkit for building modern web products.
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-zinc-400">
              I work with a practical stack that helps me build clean
              interfaces, connect real backend services, and keep projects easy
              to maintain as they grow.
            </p>
          </div>

          <SpotlightCard
            className="p-5"
            spotlightColor="rgba(34, 211, 238, 0.14)"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {coreStrengths.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                  <span className="text-sm text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </div>

        <div className="mb-6 grid gap-5 md:grid-cols-3">
          {skillSummary.map((item) => {
            const Icon = item.icon;

            return (
              <SpotlightCard
                key={item.title}
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
            );
          })}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const meta = getSkillMeta(group.title, index);
            const Icon = meta.icon;

            return (
              <SpotlightCard
                key={group.title}
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

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-black/25 px-3.5 py-1.5 text-sm text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}