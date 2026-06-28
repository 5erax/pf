import type { LucideIcon } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  GitBranch,
  Layers3,
  MonitorSmartphone,
  Orbit,
  ServerCog,
  Target,
  TrendingUp,
  Wrench,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { Container } from "@/components/common/Container";
import { MotionChip, MotionGroup, MotionItem } from "@/components/common/Reveal";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { Button } from "@/components/ui/button";
import { projects, type Project, type ProjectCategory } from "@/data/projects";

type ProjectVisual = {
  icon: LucideIcon;
  label: string;
  subtitle: string;
  gradient: string;
  spotlightColor: string;
};

const projectVisuals: ProjectVisual[] = [
  {
    icon: Orbit,
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

const caseStudyMeta = [
  { key: "challenge", label: "Challenge", icon: Target },
  { key: "solution", label: "Solution", icon: Wrench },
  { key: "outcome", label: "Outcome", icon: TrendingUp },
] as const;

const projectFilters: Array<"All" | ProjectCategory> = [
  "All",
  "Frontend",
  "Fullstack",
  "Mobile",
  "AI",
];

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

function CaseStudyDrawer({
  project,
  visual,
  onClose,
}: {
  project: Project | null;
  visual: ProjectVisual;
  onClose: () => void;
}) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!project) return;

    previousFocusRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = drawerRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

      if (!focusableElements || focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [onClose, project]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      aria-describedby="case-study-description"
      className="fixed inset-0 z-50"
    >
      <button
        type="button"
        aria-label="Close case study"
        className="absolute inset-0 cursor-default bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        ref={drawerRef}
        initial={{ opacity: 0, x: 36 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-y-0 right-0 flex w-full max-w-2xl flex-col overflow-y-auto border-l border-white/10 bg-zinc-950/95 text-white shadow-2xl shadow-black/50"
      >
        <header className="relative border-b border-white/10 p-6">
          <button
            ref={closeButtonRef}
            type="button"
            className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-sm text-zinc-300 transition hover:bg-white/[0.1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/50"
            onClick={onClose}
          >
            Close
          </button>

          <p className="pr-20 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
            Case study / {project.category}
          </p>
          <h2
            id="case-study-title"
            className="mt-3 pr-20 text-3xl font-semibold tracking-tight text-white"
          >
            <motion.span layoutId={`project-title-${project.title}`}>
              {project.title}
            </motion.span>
          </h2>
          <p
            id="case-study-description"
            className="mt-3 text-base leading-7 text-zinc-400"
          >
            {project.oneLiner}
          </p>
        </header>

        <div className="grid gap-6 p-6">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm text-zinc-500">Role</p>
                <p className="mt-2 font-semibold text-white">{project.role}</p>
              </div>
              <div>
                <p className="text-sm text-zinc-500">Stack</p>
                <p className="mt-2 font-semibold text-white">
                  {project.techStack.join(", ")}
                </p>
              </div>
            </div>
          </div>

        <div className="grid gap-4">
          {caseStudyMeta.map((item) => {
            const Icon = item.icon;

            return (
              <section
                key={item.key}
                className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                    <Icon className="h-5 w-5 text-zinc-300" />
                  </div>
                  <h3 className="font-semibold text-white">
                    {item.key === "challenge" ? "Problem" : item.label}
                  </h3>
                </div>
                <p className="mt-4 leading-7 text-zinc-400">
                  {project.caseStudy[item.key]}
                </p>
              </section>
            );
          })}
        </div>

        <section className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
          <h3 className="font-semibold text-white">Tech decisions</h3>
          <ul className="mt-4 grid gap-3">
            {project.techDecisions.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-zinc-400">
                <CheckDot />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
          <h3 className="font-semibold text-white">Key screens</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {project.keyScreens.map((screen, index) => (
              <div
                key={screen}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
              >
                <p className="font-mono text-xs text-zinc-500">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-sm font-medium text-white">{screen}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
          <h3 className="font-semibold text-white">Lessons learned</h3>
          <ul className="mt-4 grid gap-3">
            {project.lessonsLearned.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-zinc-400">
                <CheckDot />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <div
          className={`rounded-[1.5rem] border border-white/10 bg-gradient-to-br p-5 ${visual.gradient}`}
        >
          <p className="text-sm font-medium text-white">{visual.label}</p>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            {project.liveUrl
              ? "Live preview is available through the project link."
              : "No verified live deployment is attached yet, so the live demo action is intentionally hidden."}
          </p>
        </div>
        </div>

        <footer className="mt-auto flex flex-col gap-3 border-t border-white/10 p-6 sm:flex-row">
          {project.liveUrl ? (
            <Button
              asChild
              className="rounded-full bg-white px-5 text-black hover:bg-zinc-200"
            >
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                Live demo
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          ) : null}

          <Button
            asChild
            variant="outline"
            className="rounded-full border-white/10 bg-white/[0.05] px-5 text-white hover:bg-white/[0.1]"
          >
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              <FaGithub className="mr-2 h-4 w-4" />
              Source code
            </a>
          </Button>
        </footer>
      </motion.div>
    </div>
  );
}

function CheckDot() {
  return (
    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200 shadow-[0_0_12px_rgba(103,232,249,0.55)]" />
  );
}

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<"All" | ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const filteredProjects = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );
  const selectedIndex = selectedProject
    ? projects.findIndex((project) => project.title === selectedProject.title)
    : 0;
  const selectedVisual = getProjectVisual(Math.max(selectedIndex, 0));
  const closeCaseStudy = useCallback(() => setSelectedProject(null), []);

  return (
    <>
      <section id="projects" className="relative border-t border-white/10 py-24">
      <Container>
        <MotionGroup className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <MotionItem kind="eyebrow">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
              Projects
            </p>
            </MotionItem>

            <MotionItem kind="heading">
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Selected work focused on product UI, fullstack logic, and clean
              implementation.
            </h2>
            </MotionItem>

            <MotionItem kind="paragraph">
            <p className="mt-5 max-w-2xl leading-8 text-zinc-400">
              These projects show how I structure interfaces, connect frontend
              workflows with APIs, design reusable components, and turn product
              ideas into maintainable web applications.
            </p>
            </MotionItem>
          </div>

          <MotionItem kind="card" direction="right">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl">
            <p className="text-sm text-zinc-500">Project focus</p>

            <MotionGroup compact className="mt-3 flex flex-wrap gap-2">
              {["React", "TypeScript", "API", "UI System"].map((item) => (
                <MotionChip
                  key={item}
                  className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs font-medium text-zinc-300"
                >
                  {item}
                </MotionChip>
              ))}
            </MotionGroup>
          </div>
          </MotionItem>
        </MotionGroup>

        <MotionGroup compact className="mb-6 flex flex-wrap gap-2">
          {projectFilters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <MotionChip key={filter}>
                <button
                  type="button"
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "border-cyan-300/40 bg-cyan-300/10 text-cyan-100"
                      : "border-white/10 bg-white/[0.04] text-zinc-400 hover:border-white/20 hover:text-white"
                  }`}
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              </MotionChip>
            );
          })}
        </MotionGroup>

        <MotionGroup className="grid gap-6">
          {filteredProjects.map((project) => {
            const projectIndex = projects.findIndex(
              (item) => item.title === project.title,
            );
            const visual = getProjectVisual(Math.max(projectIndex, 0));
            const liveUrl = project.liveUrl;

            return (
              <MotionItem key={project.title} kind="card">
              <SpotlightCard
                className="group overflow-hidden p-0"
                spotlightColor={visual.spotlightColor}
              >
                <article className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
                  <MotionItem
                    kind="card"
                    direction={projectIndex % 2 === 0 ? "left" : "right"}
                    className="border-b border-white/10 p-4 lg:border-b-0 lg:border-r"
                  >
                    <ProjectMockup
                      index={projectIndex}
                      title={project.title}
                      visual={visual}
                    />
                  </MotionItem>

                  <MotionGroup compact className="flex flex-col justify-between p-6 sm:p-8">
                    <div>
                      <MotionItem kind="eyebrow">
                      <div className="mb-6 flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                          <Layers3 className="h-3.5 w-3.5" />
                          {project.category}
                        </span>

                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
                          <GitBranch className="h-3.5 w-3.5" />
                          {project.role}
                        </span>
                      </div>
                      </MotionItem>

                      <MotionItem kind="heading">
                      <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                        <motion.span layoutId={`project-title-${project.title}`}>
                          {project.title}
                        </motion.span>
                      </h3>
                      </MotionItem>

                      <MotionItem kind="paragraph">
                      <p className="mt-4 text-base font-medium leading-7 text-zinc-200">
                        {project.oneLiner}
                      </p>

                      <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg">
                        {project.description}
                      </p>
                      </MotionItem>

                      <MotionGroup compact className="mt-7 grid gap-3 sm:grid-cols-3">
                        {caseStudyMeta.map((item) => {
                          const Icon = item.icon;

                          return (
                            <MotionItem
                              key={item.key}
                              kind="card"
                              className="rounded-2xl border border-white/10 bg-black/25 p-4"
                            >
                              <Icon className="size-5 text-zinc-400" />
                              <p className="mt-3 text-sm font-medium text-white">
                                {item.label}
                              </p>
                              <p className="mt-2 text-sm leading-6 text-zinc-400">
                                {project.caseStudy[item.key]}
                              </p>
                            </MotionItem>
                          );
                        })}
                      </MotionGroup>

                      <MotionGroup compact className="mt-7 flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <MotionChip
                            key={tech}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-sm text-zinc-300"
                          >
                            {tech}
                          </MotionChip>
                        ))}
                      </MotionGroup>
                    </div>

                    <MotionItem kind="cta">
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <Button
                        type="button"
                        className="group rounded-full bg-white px-5 text-black transition-transform hover:-translate-y-0.5 hover:bg-zinc-200"
                        onClick={() => setSelectedProject(project)}
                      >
                        Open case study
                        <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
                      </Button>

                      {liveUrl ? (
                        <Button
                          asChild
                          variant="outline"
                          className="group rounded-full border-white/10 bg-white/[0.05] px-5 text-white transition-transform hover:-translate-y-0.5 hover:bg-white/[0.1]"
                        >
                          <a
                            href={liveUrl}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Live demo
                            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5" />
                          </a>
                        </Button>
                      ) : (
                        <span className="inline-flex min-h-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-5 text-sm font-medium text-zinc-500">
                          Demo coming soon
                        </span>
                      )}

                      <Button
                        asChild
                        variant="outline"
                        className="rounded-full border-white/10 bg-white/[0.05] px-5 text-white transition-transform hover:-translate-y-0.5 hover:bg-white/[0.1]"
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
                    </MotionItem>
                  </MotionGroup>
                </article>
              </SpotlightCard>
              </MotionItem>
            );
          })}
        </MotionGroup>
      </Container>
      </section>

      <CaseStudyDrawer
        project={selectedProject}
        visual={selectedVisual}
        onClose={closeCaseStudy}
      />
    </>
  );
}
