import {
  lazy,
  type ReactNode,
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { MainLayout } from "@/components/layout/MainLayout";
import { Reveal } from "@/components/common/Reveal";
import { HeroSection } from "@/components/sections/HeroSection";

const loadAboutSection = () =>
  import("@/components/sections/AboutSection").then((module) => ({
    default: module.AboutSection,
  }));
const loadSkillsSection = () =>
  import("@/components/sections/SkillsSection").then((module) => ({
    default: module.SkillsSection,
  }));
const loadInteractiveImageAccordionSection = () =>
  import("@/components/sections/InteractiveImageAccordionSection").then((module) => ({
    default: module.InteractiveImageAccordionSection,
  }));
const loadProjectsSection = () =>
  import("@/components/sections/ProjectsSection").then((module) => ({
    default: module.ProjectsSection,
  }));
const loadContactSection = () =>
  import("@/components/sections/ContactSection").then((module) => ({
    default: module.ContactSection,
  }));

const AboutSection = lazy(loadAboutSection);
const SkillsSection = lazy(loadSkillsSection);
const InteractiveImageAccordionSection = lazy(loadInteractiveImageAccordionSection);
const ProjectsSection = lazy(loadProjectsSection);
const ContactSection = lazy(loadContactSection);

const sectionFallbackHeights = {
  about: "min-h-[48rem]",
  skills: "min-h-[56rem]",
  showcase: "min-h-[58rem]",
  projects: "min-h-[72rem]",
  contact: "min-h-[42rem]",
};

function SectionFallback({
  id,
}: {
  id: keyof typeof sectionFallbackHeights;
}) {
  return (
    <section
      id={id}
      className={`relative border-t border-white/10 py-24 ${sectionFallbackHeights[id]}`}
      aria-busy="true"
    />
  );
}

function DeferredSection({
  id,
  children,
}: {
  id: keyof typeof sectionFallbackHeights;
  children: ReactNode;
}) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [shouldRender, setShouldRender] = useState(
    () =>
      typeof window !== "undefined" &&
      (!("IntersectionObserver" in window) || window.location.hash === `#${id}`),
  );

  const checkShouldRender = useCallback(() => {
    if (shouldRender) {
      return;
    }

    const node = rootRef.current;
    if (!node) {
      return;
    }

    const rect = node.getBoundingClientRect();
    const preloadMargin = Math.max(window.innerHeight * 0.75, 640);

    if (rect.top < window.innerHeight + preloadMargin && rect.bottom > -preloadMargin) {
      setShouldRender(true);
    }
  }, [shouldRender]);

  useEffect(() => {
    if (shouldRender) {
      return;
    }

    const runCheck = () => window.requestAnimationFrame(checkShouldRender);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: "900px 0px" },
    );

    const node = rootRef.current;
    if (node) {
      observer.observe(node);
    }

    window.addEventListener("scroll", runCheck, { passive: true });
    window.addEventListener("resize", runCheck);
    window.addEventListener("hashchange", runCheck);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", runCheck);
      window.removeEventListener("resize", runCheck);
      window.removeEventListener("hashchange", runCheck);
    };
  }, [checkShouldRender, shouldRender]);

  if (shouldRender) {
    return <Suspense fallback={<SectionFallback id={id} />}>{children}</Suspense>;
  }

  return (
    <div ref={rootRef}>
      <SectionFallback id={id} />
    </div>
  );
}

function App() {
  return (
    <MainLayout>
      <Reveal index={0} label="Home">
        <HeroSection />
      </Reveal>
      <Reveal index={1} label="About">
        <DeferredSection id="about">
          <AboutSection />
        </DeferredSection>
      </Reveal>
      <Reveal index={2} label="Skills">
        <DeferredSection id="skills">
          <SkillsSection />
        </DeferredSection>
      </Reveal>
      <Reveal index={3} label="Showcase">
        <DeferredSection id="showcase">
          <InteractiveImageAccordionSection />
        </DeferredSection>
      </Reveal>
      <Reveal index={4} label="Projects">
        <DeferredSection id="projects">
          <ProjectsSection />
        </DeferredSection>
      </Reveal>
      <Reveal index={5} label="Contact">
        <DeferredSection id="contact">
          <ContactSection />
        </DeferredSection>
      </Reveal>
    </MainLayout>
  );
}

export default App;
