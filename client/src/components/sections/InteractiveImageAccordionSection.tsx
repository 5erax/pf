import { ArrowRight, Eye, Layers3, Sparkles } from "lucide-react";

import { Container } from "@/components/common/Container";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { LandingAccordionItem } from "@/components/interactive-image-accordion";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";

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
    icon: Sparkles,
    label: "Interactive UI",
    value: "Add a memorable portfolio experience without losing clarity.",
  },
];

export function InteractiveImageAccordionSection() {
  return (
    <section className="relative border-t border-white/10 py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
              Showcase
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Interactive project experience for selected portfolio work.
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
              A visual section designed to present product ideas, interface
              direction, and technical highlights in a more engaging way. It
              helps visitors quickly understand what I build, how I think, and
              how each project can become a polished user experience.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="rounded-full bg-white px-5 text-black hover:bg-zinc-200"
              >
                <a href="#projects">
                  View projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="rounded-full border-white/10 bg-white/[0.05] px-5 text-white hover:bg-white/[0.1]"
              >
                <a href={`mailto:${profile.email}`}>Discuss a project</a>
              </Button>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {showcasePoints.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl"
                >
                  <Icon className="h-5 w-5 text-zinc-400" />

                  <p className="mt-4 text-sm font-medium text-white">
                    {item.label}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    {item.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12">
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
        </div>
      </Container>
    </section>
  );
}