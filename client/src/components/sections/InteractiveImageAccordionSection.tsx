import { ArrowRight, Eye, Layers3, Workflow } from "lucide-react";

import { Container } from "@/components/common/Container";
import { MotionGroup, MotionItem } from "@/components/common/Reveal";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { LandingAccordionItem } from "@/components/interactive-image-accordion";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { scrollToSection } from "@/lib/scroll";

const showcasePoints = [
  {
    icon: Eye,
    label: "Visual storytelling",
    value: "Show selected work with motion and rich imagery.",
  },
  {
    icon: Layers3,
    label: "Product sections",
    value: "Present features, case studies, and UI decisions clearly.",
  },
  {
    icon: Workflow,
    label: "Interactive UI",
    value: "Add a memorable portfolio experience without losing clarity.",
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
              Showcase
            </p>
            </MotionItem>

            <MotionItem kind="heading">
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Interactive project experience for selected portfolio work.
            </h2>
            </MotionItem>

            <MotionItem kind="paragraph">
            <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
              A visual section designed to present product ideas, interface
              direction, and technical highlights in a more engaging way. It
              helps visitors quickly understand what I build, how I think, and
              how each project can become a polished user experience.
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
              className="overflow-hidden p-0"
              spotlightColor="rgba(34, 211, 238, 0.14)"
            >
              <div className="relative">
                <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-28 right-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

                <div className="relative">
                  <LandingAccordionItem />
                </div>
              </div>
            </SpotlightCard>
          </MotionItem>
        </MotionGroup>
      </Container>
    </section>
  );
}
