import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Database,
  HeartPulse,
  Mail,
  MapPin,
  ServerCog,
  Smartphone,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Container } from "@/components/common/Container";
import { MotionGroup, MotionItem } from "@/components/common/Reveal";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { scrollToSection } from "@/lib/scroll";

const highlights = [
  "React + TypeScript",
  "Node.js + MongoDB",
  "Product-focused UI",
];

const stackItems = [
  {
    label: "React",
    icon: Code2,
  },
  {
    label: "TypeScript",
    icon: Code2,
  },
  {
    label: "Node.js",
    icon: ServerCog,
  },
  {
    label: "MongoDB",
    icon: Database,
  },
  {
    label: "React Native",
    icon: Smartphone,
  },
];

const profileStats = [
  {
    label: "Role",
    value: profile.role,
  },
  {
    label: "Location",
    value: profile.location,
  },
];

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-16 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center xl:gap-16">
          <MotionGroup className="max-w-4xl" amount={0.18}>
            <MotionItem kind="eyebrow">
              <Badge className="mb-6 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-zinc-300 shadow-sm backdrop-blur-md hover:bg-white/[0.05]">
                {profile.status}
              </Badge>

              <p className="mb-5 mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400 sm:text-sm sm:tracking-[0.28em]">
                {profile.role} {" · "} {profile.location}
              </p>
            </MotionItem>

            <MotionItem kind="heading">
              <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                {profile.headline}
              </h1>
            </MotionItem>

            <MotionItem kind="paragraph">
              <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                {profile.summary}
              </p>
            </MotionItem>

            <MotionItem kind="cta">
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-white px-6 text-black shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5 hover:bg-zinc-200"
                >
                  <a
                    href="#projects"
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection("#projects");
                    }}
                  >
                    View selected work
                    <ArrowRight data-icon="inline-end" />
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-white/10 bg-white/[0.05] px-6 text-white backdrop-blur-md transition-transform hover:-translate-y-0.5 hover:bg-white/[0.1]"
                >
                  <a href={profile.github} target="_blank" rel="noreferrer">
                    <FaGithub data-icon="inline-start" />
                    GitHub
                  </a>
                </Button>
              </div>
            </MotionItem>

            <MotionGroup compact className="mt-10 grid gap-4 text-sm text-zinc-400 sm:grid-cols-3">
              {highlights.map((item, index) => (
                <MotionItem
                  key={item}
                  kind="chip"
                  direction={index % 2 === 0 ? "left" : "right"}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                  <span>{item}</span>
                </MotionItem>
              ))}
            </MotionGroup>
          </MotionGroup>

          <MotionGroup amount={0.18}>
            <MotionItem kind="card" direction="right">
              <SpotlightCard
                className="overflow-hidden p-0"
                spotlightColor="rgba(16, 185, 129, 0.16)"
              >
              <div className="relative p-7">
                <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

                <MotionGroup className="relative" compact amount={0.18}>
                  <div className="flex items-start justify-between gap-5">
                    <MotionItem kind="eyebrow">
                      <p className="text-sm font-medium uppercase tracking-[0.28em] text-zinc-500">
                        Developer Profile
                      </p>

                      <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        {profile.name}
                      </h2>

                      <p className="mt-2 text-base text-zinc-400">
                        @{profile.alias}
                      </p>
                    </MotionItem>

                    <MotionItem kind="chip">
                      <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                        Available
                      </span>
                    </MotionItem>
                  </div>

                  <div className="my-7 h-px bg-white/10" />

                  <MotionGroup compact className="grid gap-4 sm:grid-cols-2">
                    {profileStats.map((item) => (
                      <MotionItem
                        key={item.label}
                        kind="card"
                        className="rounded-2xl border border-white/10 bg-white/[0.045] p-5"
                      >
                        <p className="text-sm text-zinc-500">{item.label}</p>

                        <p className="mt-2 flex items-center gap-2 font-semibold text-white">
                          {item.label === "Location" ? (
                            <MapPin className="h-4 w-4 text-zinc-500" />
                          ) : null}

                          {item.value}
                        </p>
                      </MotionItem>
                    ))}
                  </MotionGroup>

                  <div className="my-7 h-px bg-white/10" />

                  <MotionItem kind="paragraph">
                    <p className="text-sm text-zinc-500">Core stack</p>

                    <MotionGroup compact className="mt-4 grid gap-3 sm:grid-cols-2">
                      {stackItems.map((item) => {
                        const Icon = item.icon;

                        return (
                          <MotionItem
                            key={item.label}
                            kind="chip"
                            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3"
                          >
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/25">
                              <Icon className="h-4 w-4 text-zinc-300" />
                            </div>

                            <span className="text-sm font-medium text-zinc-200">
                              {item.label}
                            </span>
                          </MotionItem>
                        );
                      })}
                    </MotionGroup>
                  </MotionItem>

                  <div className="my-7 h-px bg-white/10" />

                  <MotionItem kind="cta">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/20 bg-emerald-400/10">
                        <HeartPulse className="size-5 text-emerald-300" />
                      </div>

                      <div>
                        <p className="text-sm text-zinc-500">
                          Currently building
                        </p>

                        <h3 className="font-semibold leading-snug text-white">
                          {profile.currentlyBuilding}
                        </h3>
                      </div>
                    </div>

                    <p className="mt-4 max-w-md leading-7 text-zinc-400">
                      {profile.currentFocus}
                    </p>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                      <Button
                        asChild
                        className="rounded-full bg-white px-5 text-black transition-transform hover:-translate-y-0.5 hover:bg-zinc-200"
                      >
                        <a href={`mailto:${profile.email}`}>
                          <Mail className="mr-2 h-4 w-4" />
                          Email me
                        </a>
                      </Button>

                      <Button
                        asChild
                        variant="outline"
                        className="rounded-full border-white/10 bg-white/[0.05] px-5 text-white transition-transform hover:-translate-y-0.5 hover:bg-white/[0.1]"
                      >
                        <a
                          href={profile.linkedin}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FaLinkedin className="mr-2 h-4 w-4" />
                          LinkedIn
                        </a>
                      </Button>
                    </div>
                  </MotionItem>
                </MotionGroup>
              </div>
              </SpotlightCard>
            </MotionItem>
          </MotionGroup>
        </div>
      </Container>
    </section>
  );
}
