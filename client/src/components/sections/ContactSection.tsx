import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Send,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Container } from "@/components/common/Container";
import { MotionGroup, MotionItem } from "@/components/common/Reveal";
import { SpotlightCard } from "@/components/common/SpotlightCard";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { scrollToSection } from "@/lib/scroll";

const contactMethods = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    primary: true,
  },
  {
    label: "GitHub",
    value: profile.github.replace("https://", ""),
    href: profile.github,
    icon: FaGithub,
    primary: false,
  },
  {
    label: "LinkedIn",
    value: profile.linkedin.replace("https://", ""),
    href: profile.linkedin,
    icon: FaLinkedin,
    primary: false,
  },
];

const contactHighlights = [
  {
    icon: Clock,
    label: "Timezone",
    value: profile.timezone,
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
  },
  {
    icon: MessageSquare,
    label: "Available for",
    value: "Frontend, fullstack, collaboration",
  },
];

const contactNotes = [
  "Frontend projects",
  "Fullstack collaboration",
  "React-based product development",
];

export function ContactSection() {
  return (
    <section id="contact" className="relative border-t border-white/10 py-24">
      <Container>
        <MotionGroup>
          <MotionItem kind="card">
        <SpotlightCard
          className="overflow-hidden p-0"
          spotlightColor="rgba(255, 255, 255, 0.14)"
        >
          <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
            <div className="relative p-8 sm:p-12">
              <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-28 right-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

              <MotionGroup className="relative">
                <MotionItem kind="eyebrow">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
                  Contact
                </p>
                </MotionItem>

                <MotionItem kind="heading">
                <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                  Let&apos;s build a clean, scalable, and polished product.
                </h2>
                </MotionItem>

                <MotionItem kind="paragraph">
                <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
                  I am open to frontend projects, fullstack collaboration,
                  internship opportunities, and React-based product development.
                  Send me a message if you want to build something practical and
                  production-ready.
                </p>
                </MotionItem>

                <MotionGroup compact className="mt-8 grid gap-3 sm:grid-cols-3">
                  {contactHighlights.map((item) => {
                    const Icon = item.icon;

                    return (
                      <MotionItem
                        key={item.label}
                        kind="card"
                        className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl"
                      >
                        <Icon className="h-5 w-5 text-zinc-400" />

                        <p className="mt-4 text-sm text-zinc-500">
                          {item.label}
                        </p>

                        <p className="mt-1 text-sm font-medium leading-6 text-white">
                          {item.value}
                        </p>
                      </MotionItem>
                    );
                  })}
                </MotionGroup>

                <MotionItem kind="cta">
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-white px-6 text-black shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5 hover:bg-zinc-200"
                  >
                    <a href={`mailto:${profile.email}`}>
                      <Send className="mr-2 h-4 w-4" />
                      Send email
                    </a>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-full border-white/10 bg-white/[0.05] px-6 text-white transition-transform hover:-translate-y-0.5 hover:bg-white/[0.1]"
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
                </div>
                </MotionItem>
              </MotionGroup>
            </div>

            <aside className="relative border-t border-white/10 bg-black/20 p-8 backdrop-blur-xl lg:border-l lg:border-t-0 sm:p-10">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent" />

              <MotionGroup compact className="relative flex h-full flex-col">
                <div>
                  <MotionItem kind="eyebrow">
                  <p className="text-sm font-medium uppercase tracking-[0.22em] text-zinc-500">
                    Reach me directly
                  </p>
                  </MotionItem>

                  <MotionGroup compact className="mt-8 flex flex-col gap-4">
                    {contactMethods.map((method) => {
                      const Icon = method.icon;

                      return (
                        <MotionItem key={method.label} kind="card" direction="right">
                        <a
                          href={method.href}
                          target={
                            method.href.startsWith("mailto:")
                              ? undefined
                              : "_blank"
                          }
                          rel={
                            method.href.startsWith("mailto:")
                              ? undefined
                              : "noreferrer"
                          }
                          className={`group flex items-center gap-4 rounded-2xl border p-4 transition ${
                            method.primary
                              ? "border-white/20 bg-white text-black hover:bg-zinc-200"
                              : "border-white/10 bg-white/[0.045] text-white hover:border-white/20 hover:bg-white/[0.08]"
                          }`}
                        >
                          <div
                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${
                              method.primary
                                ? "bg-black text-white"
                                : "border border-white/10 bg-black/30 text-zinc-300"
                            }`}
                          >
                            <Icon className="h-5 w-5" />
                          </div>

                          <div className="min-w-0">
                            <p
                              className={`text-sm ${
                                method.primary
                                  ? "text-black/60"
                                  : "text-zinc-500"
                              }`}
                            >
                              {method.label}
                            </p>

                            <p className="truncate text-sm font-semibold">
                              {method.value}
                            </p>
                          </div>

                          <ArrowRight
                            className={`ml-auto h-4 w-4 shrink-0 transition group-hover:translate-x-1 ${
                              method.primary ? "text-black" : "text-zinc-400"
                            }`}
                          />
                        </a>
                        </MotionItem>
                      );
                    })}
                  </MotionGroup>
                </div>

                <MotionItem kind="card" direction="right">
                <div className="mt-10 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-5">
                  <p className="text-sm font-semibold text-emerald-300">
                    {profile.status}
                  </p>

                  <div className="mt-4 grid gap-3">
                    {contactNotes.map((note) => (
                      <div
                        key={note}
                        className="flex items-center gap-3 text-sm text-zinc-300"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                        <span>{note}</span>
                      </div>
                    ))}
                  </div>
                </div>
                </MotionItem>
              </MotionGroup>
            </aside>
          </div>
        </SpotlightCard>
          </MotionItem>
        </MotionGroup>
      </Container>
    </section>
  );
}
