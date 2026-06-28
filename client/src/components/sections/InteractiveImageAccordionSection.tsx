import type { LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  Code2,
  Eye,
  Layers3,
  MonitorSmartphone,
  Workflow,
} from "lucide-react";

import { Container } from "@/components/common/Container";
import { MotionGroup, MotionItem } from "@/components/common/Reveal";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { scrollToSection } from "@/lib/scroll";
import { GlowLine } from "@/motion/components/GlowLine";
import { useReducedMotionSafe } from "@/motion/hooks/useReducedMotionSafe";
import { motionEase } from "@/motion/tokens";

type ShowcaseStep = {
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
  previewTitle: string;
  previewMeta: string;
  tone: "cyan" | "emerald" | "violet" | "white";
};

const showcaseSteps: ShowcaseStep[] = [
  {
    icon: Eye,
    label: "01 / Scan",
    title: "Section enters with a clear orientation cue.",
    description:
      "The first layer tells visitors where they are before the heavier content appears.",
    previewTitle: "Context label",
    previewMeta: "eyebrow -> heading",
    tone: "cyan",
  },
  {
    icon: Layers3,
    label: "02 / Layer",
    title: "Content builds by priority, not all at once.",
    description:
      "Heading, summary, visual, and detail cards use a consistent stagger rhythm.",
    previewTitle: "Layered reveal",
    previewMeta: "text -> card -> chips",
    tone: "emerald",
  },
  {
    icon: Workflow,
    label: "03 / Connect",
    title: "Motion explains relationships between UI parts.",
    description:
      "Lines, progress states, and active cards show how the interface is connected.",
    previewTitle: "Connected state",
    previewMeta: "node -> line -> preview",
    tone: "violet",
  },
  {
    icon: Code2,
    label: "04 / Polish",
    title: "Micro-interactions stay lightweight and useful.",
    description:
      "Hover, focus, and CTA states use transform and opacity instead of layout-heavy motion.",
    previewTitle: "Micro motion",
    previewMeta: "hover -> focus -> action",
    tone: "white",
  },
  {
    icon: MonitorSmartphone,
    label: "05 / Adapt",
    title: "Desktop gets the scene; mobile gets direct cards.",
    description:
      "The responsive fallback avoids sticky scenes on small screens while preserving the story.",
    previewTitle: "Responsive fallback",
    previewMeta: "desktop scene / mobile cards",
    tone: "cyan",
  },
];

const toneClass = {
  cyan: "from-cyan-300/30 via-cyan-200/10 to-transparent",
  emerald: "from-emerald-300/30 via-emerald-200/10 to-transparent",
  violet: "from-violet-300/30 via-violet-200/10 to-transparent",
  white: "from-white/25 via-white/10 to-transparent",
};

function ShowcasePreview({
  activeStep,
  activeIndex,
}: {
  activeStep: ShowcaseStep;
  activeIndex: number;
}) {
  const shouldReduceMotion = useReducedMotionSafe();
  const Icon = activeStep.icon;

  return (
    <div className="relative min-h-[30rem] overflow-hidden rounded-[2rem] border border-white/10 bg-black/35 p-6">
      <div
        className={`pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br blur-3xl ${toneClass[activeStep.tone]}`}
      />
      <div className="pointer-events-none absolute inset-x-8 top-8">
        <GlowLine tone={activeStep.tone} />
      </div>

      <motion.div
        key={activeStep.label}
        initial={shouldReduceMotion ? false : { opacity: 0, y: 18, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.45, ease: motionEase.standard }}
        className="relative z-10 flex h-full min-h-[27rem] flex-col justify-between"
      >
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
            Live preview
          </span>
          <span className="font-mono text-xs text-zinc-500">
            {String(activeIndex + 1).padStart(2, "0")} / 05
          </span>
        </div>

        <div className="mx-auto flex h-52 w-52 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/30">
          <div className="flex h-32 w-32 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10">
            <Icon className="h-12 w-12 text-cyan-100" />
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500">
            {activeStep.previewMeta}
          </p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
            {activeStep.previewTitle}
          </h3>

          <div className="mt-6 grid grid-cols-5 gap-2">
            {showcaseSteps.map((step, index) => (
              <span
                key={step.label}
                className={`h-1.5 rounded-full transition-colors duration-300 ${
                  index <= activeIndex ? "bg-cyan-200" : "bg-white/10"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function MotionShowcaseScene() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const activeStep = showcaseSteps[activeIndex] ?? showcaseSteps[0];

  useEffect(() => {
    const nodes = stepRefs.current.filter((node): node is HTMLDivElement => node !== null);
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (!visibleEntry) return;

        const nextIndex = Number(visibleEntry.target.getAttribute("data-step-index"));
        if (Number.isFinite(nextIndex)) {
          setActiveIndex(nextIndex);
        }
      },
      {
        root: null,
        threshold: [0.35, 0.55, 0.75],
        rootMargin: "-22% 0px -36% 0px",
      },
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="hidden lg:grid lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
      <div className="grid gap-5">
        {showcaseSteps.map((step, index) => {
          const Icon = step.icon;
          const isActive = index === activeIndex;

          return (
            <div
              key={step.label}
              ref={(node) => {
                stepRefs.current[index] = node;
              }}
              data-step-index={index}
              className={`min-h-[18rem] rounded-[1.5rem] border p-5 transition duration-300 ${
                isActive
                  ? "border-cyan-300/35 bg-cyan-300/[0.07] text-white"
                  : "border-white/10 bg-white/[0.035] text-zinc-400"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/25">
                  <Icon className="h-5 w-5 text-cyan-100" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                    {step.label}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                </div>
              </div>
              <p className="mt-5 leading-7 text-zinc-400">{step.description}</p>
            </div>
          );
        })}
      </div>

      <div className="sticky top-24 h-fit">
        <ShowcasePreview activeStep={activeStep} activeIndex={activeIndex} />
      </div>
    </div>
  );
}

function MobileMotionShowcase() {
  return (
    <MotionGroup className="grid gap-4 lg:hidden">
      {showcaseSteps.map((step) => {
        const Icon = step.icon;

        return (
          <MotionItem key={step.label} kind="card">
            <SpotlightCard
              className="p-5"
              spotlightColor="rgba(34, 211, 238, 0.12)"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                  <Icon className="h-5 w-5 text-cyan-100" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                    {step.label}
                  </p>
                  <h3 className="mt-2 font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">
                    {step.description}
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </MotionItem>
        );
      })}
    </MotionGroup>
  );
}

const showcasePoints = [
  {
    icon: Eye,
    label: "Viewport-aware reveal",
    value: "Each layer enters, exits, and responds to section state.",
  },
  {
    icon: Layers3,
    label: "Controlled depth",
    value: "Cards, labels, and preview states animate without layout shift.",
  },
  {
    icon: Workflow,
    label: "Responsive fallback",
    value: "Desktop gets sticky storytelling; mobile gets direct readable cards.",
  },
];

export function InteractiveImageAccordionSection() {
  return (
    <section id="showcase" className="relative border-t border-white/10 py-24">
      <Container>
        <MotionGroup className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <MotionItem kind="eyebrow">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
                Motion Showcase
              </p>
            </MotionItem>

            <MotionItem kind="heading">
              <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                A scroll-led scene showing how interface motion guides attention.
              </h2>
            </MotionItem>

            <MotionItem kind="paragraph">
              <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
                This section demonstrates the portfolio motion system as a
                product experience: orientation first, layered reveal second,
                then connected states, micro-interactions, and responsive
                fallback.
              </p>
            </MotionItem>

            <MotionItem kind="cta">
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="rounded-full bg-white px-5 text-black transition-transform hover:-translate-y-0.5 hover:bg-zinc-200"
                >
                  <a
                    href="#projects"
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection("#projects");
                    }}
                  >
                    View projects
                    <ArrowRight data-icon="inline-end" />
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-white/10 bg-white/[0.05] px-5 text-white transition-transform hover:-translate-y-0.5 hover:bg-white/[0.1]"
                >
                  <a href={`mailto:${profile.email}`}>Discuss a project</a>
                </Button>
              </div>
            </MotionItem>
          </div>

          <MotionGroup compact className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {showcasePoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <MotionItem
                  key={item.label}
                  kind="card"
                  direction={index % 2 === 0 ? "right" : "left"}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl"
                >
                  <Icon className="h-5 w-5 text-zinc-400" />

                  <p className="mt-4 text-sm font-medium text-white">
                    {item.label}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    {item.value}
                  </p>
                </MotionItem>
              );
            })}
          </MotionGroup>
        </MotionGroup>

        <MotionGroup className="mt-12">
          <MotionItem kind="card">
            <SpotlightCard
              className="overflow-hidden p-5 sm:p-6"
              spotlightColor="rgba(34, 211, 238, 0.14)"
            >
              <MotionShowcaseScene />
              <MobileMotionShowcase />
            </SpotlightCard>
          </MotionItem>
        </MotionGroup>
      </Container>
    </section>
  );
}
