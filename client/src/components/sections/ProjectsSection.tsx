import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Code2,
  Database,
  GitBranch,
  Layers3,
  MonitorSmartphone,
  ServerCog,
  Sparkles,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Container } from "@/components/common/Container";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

type ProjectVisual = {
  icon: LucideIcon;
  label: string;
  subtitle: string;
  gradient: string;
  spotlightColor: string;
};

const projectVisuals: ProjectVisual[] = [
  {
    icon: Sparkles,
    label: "AI Product",
    subtitle: "Smart workflows · Clean dashboard · Product logic",
    gradient:
      "from-cyan-400/20 via-emerald-400/10 to-transparent",
    spotlightColor: "rgba(34, 211, 238, 0.16)",
  },
  {
    icon: ServerCog,
    label: "Fullstack System",
    subtitle: "API integration · Auth flow · Backend services",
    gradient:
      "from-emerald-400/20 via-indigo-400/10 to-transparent",
    spotlightColor: "rgba(16, 185, 129, 0.16)",
  },
  {
    icon: MonitorSmartphone,
    label: "Responsive UI",
    subtitle: "Web experience · Component design · Mobile ready",
    gradient:
      "from-violet-400/20 via-cyan-400/10 to-transparent",
    spotlightColor: "rgba(168, 85, 247, 0.16)",
  },
];

function getProjectVisual(index: number) {
  return projectVisuals[index % projectVisuals.length];
}

function ProjectMockup({
  index,
  title,
  visual,
}: {
  index: number;
  title: string;
  visual: ProjectVisual;
}) {
  const Icon = visual.icon;

  return (
    <div className="relative h-full min-h-[320px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/40 p-5">
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${visual.gradient}`}
      />

      <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-start justify-between gap-4">
          <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium text-zinc-300">
            Project 0{index + 1}
          </span>

          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/35 backdrop-blur-xl">
            <Icon className="h-5 w-5 text-white" />
          </div>
        </div>

        <div className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/45 shadow-2xl shadow-black/30">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </div>

              <span className="text-xs text-zinc-500">case-study.tsx</span>
            </div>

            <div className="space-y-3 p-4">
              <div className="h-3 w-2/3 rounded-full bg-white/20" />
              <div className="h-3 w-1/2 rounded-full bg-white/10" />
              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className="h-16 rounded-xl border border-white/10 bg-white/[0.06]" />
                <div className="h-16 rounded-xl border border-white/10 bg-white/[0.04]" />
                <div className="h-16 rounded-xl border border-white/10 bg-white/[0.04]" />
              </div>
              <div className="mt-4 h-24 rounded-xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
            </div>
          </div>

          <div className="mt-5">
            <p className="text-sm font-medium text-zinc-300">
              {visual.label}
            </p>

            <h3 className="mt-2 line-clamp-2 text-2xl font-semibold tracking-tight text-white">
              {title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              {visual.subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="relative border-t border-white/10 py-24">
      <Container>
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
              Projects
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Selected work focused on product UI, fullstack logic, and clean
              implementation.
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-zinc-400">
              These projects show how I structure interfaces, connect frontend
              workflows with APIs, design reusable components, and turn product
              ideas into maintainable web applications.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
            <p className="text-sm text-zinc-500">Project focus</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {["React", "TypeScript", "API", "UI System"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs font-medium text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          {projects.map((project, index) => {
            const visual = getProjectVisual(index);

            return (
              <SpotlightCard
                key={project.title}
                className="group overflow-hidden p-0"
                spotlightColor={visual.spotlightColor}
              >
                <article className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
                  <div className="border-b border-white/10 p-4 lg:border-b-0 lg:border-r">
                    <ProjectMockup
                      index={index}
                      title={project.title}
                      visual={visual}
                    />
                  </div>

                  <div className="flex flex-col justify-between p-6 sm:p-8">
                    <div>
                      <div className="mb-6 flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                          <Layers3 className="h-3.5 w-3.5" />
                          Case study
                        </span>

                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
                          <GitBranch className="h-3.5 w-3.5" />
                          Practical build
                        </span>
                      </div>

                      <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                        {project.title}
                      </h3>

                      <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
                        {project.description}
                      </p>

                      <div className="mt-7 grid gap-3 sm:grid-cols-3">
                        <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                          <Code2 className="h-5 w-5 text-zinc-400" />
                          <p className="mt-3 text-sm font-medium text-white">
                            UI structure
                          </p>
                          <p className="mt-2 text-sm leading-6 text-zinc-500">
                            Reusable components and clear layout decisions.
                          </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                          <ServerCog className="h-5 w-5 text-zinc-400" />
                          <p className="mt-3 text-sm font-medium text-white">
                            Integration
                          </p>
                          <p className="mt-2 text-sm leading-6 text-zinc-500">
                            API-ready flow with real product requirements.
                          </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
                          <Database className="h-5 w-5 text-zinc-400" />
                          <p className="mt-3 text-sm font-medium text-white">
                            Data handling
                          </p>
                          <p className="mt-2 text-sm leading-6 text-zinc-500">
                            Organized state, forms, and backend data flow.
                          </p>
                        </div>
                      </div>

                      <div className="mt-7 flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-sm text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <Button
                        asChild
                        className="rounded-full bg-white px-5 text-black hover:bg-zinc-200"
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live demo
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>

                      <Button
                        asChild
                        variant="outline"
                        className="rounded-full border-white/10 bg-white/[0.05] px-5 text-white hover:bg-white/[0.1]"
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaGithub className="mr-2 h-4 w-4" />
                          Source code
                        </a>
                      </Button>
                    </div>
                  </div>
                </article>
              </SpotlightCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}