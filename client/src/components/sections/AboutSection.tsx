import type { LucideIcon } from "lucide-react";
import {
  Blocks,
  CheckCircle2,
  Code2,
  Layers3,
  MonitorSmartphone,
  ServerCog,
} from "lucide-react";

import { Container } from "@/components/common/Container";
import { MotionGroup, MotionItem } from "@/components/common/Reveal";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { profile } from "@/data/profile";

type ValueItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const values: ValueItem[] = [
  {
    icon: Code2,
    title: "Frontend architecture",
    description:
      "I build React interfaces with clear components, reusable patterns, and a structure that is easy to maintain.",
  },
  {
    icon: ServerCog,
    title: "Fullstack integration",
    description:
      "I connect UI flows with APIs, authentication, backend logic, and real product data requirements.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive product UI",
    description:
      "I design interfaces that stay clean, readable, and usable across desktop, tablet, and mobile screens.",
  },
];

const principles = [
  "Clean component boundaries",
  "Readable TypeScript code",
  "Consistent UI system",
  "Practical product thinking",
];

const metrics = [
  {
    label: "Role",
    value: profile.role,
  },
  {
    label: "Location",
    value: profile.location,
  },
  {
    label: "Focus",
    value: "Production-ready web apps",
  },
];

function CodePreviewCard() {
  return (
    <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/40 p-5">
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="relative">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </div>

          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-500">
            portfolio.tsx
          </span>
        </div>

        <div className="space-y-3 font-mono text-xs leading-6 text-zinc-500">
          <p>
            <span className="text-purple-300">const</span>{" "}
            <span className="text-cyan-300">developer</span>{" "}
            <span className="text-zinc-600">=</span>{" "}
            <span className="text-emerald-300">{"{"}</span>
          </p>

          <p className="pl-4">
            <span className="text-zinc-400">name:</span>{" "}
            <span className="text-white">&quot;{profile.name}&quot;</span>,
          </p>

          <p className="pl-4">
            <span className="text-zinc-400">stack:</span>{" "}
            <span className="text-white">
              [&quot;React&quot;, &quot;TypeScript&quot;, &quot;Node.js&quot;]
            </span>
            ,
          </p>

          <p className="pl-4">
            <span className="text-zinc-400">focus:</span>{" "}
            <span className="text-white">&quot;Clean product UI&quot;</span>,
          </p>

          <p>
            <span className="text-emerald-300">{"}"}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="relative border-t border-white/10 py-24">
      <Container>
        <div className="mx-auto max-w-6xl">
          <MotionGroup className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <MotionItem kind="eyebrow">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
                About
              </p>
              </MotionItem>

              <MotionItem kind="heading">
              <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                I turn ideas into clean, scalable, and production-ready web
                experiences.
              </h2>
              </MotionItem>
            </div>

            <MotionItem kind="paragraph" direction="right">
            <p className="max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              I am {profile.name}, also known as @{profile.alias}. I focus on
              building modern fullstack applications with React, TypeScript,
              Node.js, and MongoDB. I care about clean UI, maintainable
              code, practical architecture, and user flows that feel simple and
              reliable.
            </p>
            </MotionItem>
          </MotionGroup>

          <MotionGroup className="mt-12 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <MotionItem kind="card" direction="left">
            <SpotlightCard
              className="p-6 sm:p-8"
              spotlightColor="rgba(34, 211, 238, 0.14)"
            >
              <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
                    <Blocks className="size-6 text-cyan-300" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">
                    What I bring to a product team
                  </h3>

                  <p className="mt-4 leading-7 text-zinc-400">
                    I do not only focus on making screens look good. I care
                    about how the code is organized, how users move through the
                    product, and how the interface can grow without becoming
                    difficult to maintain.
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {principles.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-sm text-zinc-300"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <CodePreviewCard />
              </div>
            </SpotlightCard>
            </MotionItem>

            <MotionGroup compact className="grid gap-5">
              <MotionItem kind="card" direction="right">
              <SpotlightCard
                className="p-5"
                spotlightColor="rgba(16, 185, 129, 0.14)"
              >
                <div className="grid gap-3 sm:grid-cols-3">
                  {metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-white/10 bg-black/25 p-4"
                    >
                      <p className="text-sm text-zinc-500">{metric.label}</p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-white">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
              </MotionItem>

              <MotionItem kind="card" direction="right">
              <SpotlightCard
                className="p-5"
                spotlightColor="rgba(168, 85, 247, 0.14)"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10">
                    <Layers3 className="h-5 w-5 text-emerald-300" />
                  </div>

                  <div>
                    <p className="text-sm text-zinc-500">
                      Currently building
                    </p>

                    <h3 className="mt-2 font-semibold text-white">
                      {profile.currentlyBuilding}
                    </h3>

                    <p className="mt-3 leading-7 text-zinc-400">
                      {profile.currentFocus}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
              </MotionItem>
            </MotionGroup>
          </MotionGroup>

          <MotionGroup className="mt-5 grid gap-5 md:grid-cols-3">
            {values.map((item) => {
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
        </div>
      </Container>
    </section>
  );
}
