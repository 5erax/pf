import { MainLayout } from "@/components/layout/MainLayout";
import { Reveal, type RevealState } from "@/components/common/Reveal";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { InteractiveImageAccordionSection } from "@/components/sections/InteractiveImageAccordionSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { useActiveSection } from "@/hooks/useActiveSection";

const sectionIds = [
  "home",
  "about",
  "skills",
  "showcase",
  "projects",
  "contact",
];

function getRevealState(activeIndex: number, sectionIndex: number): RevealState {
  if (activeIndex === sectionIndex) return "visible";
  return sectionIndex < activeIndex ? "hidden-above" : "hidden-below";
}

function App() {
  const activeSection = useActiveSection(sectionIds);
  const activeIndex = Math.max(sectionIds.indexOf(activeSection), 0);

  return (
    <MainLayout>
      <Reveal state={getRevealState(activeIndex, 0)}>
        <HeroSection />
      </Reveal>
      <Reveal state={getRevealState(activeIndex, 1)}>
        <AboutSection />
      </Reveal>
      <Reveal state={getRevealState(activeIndex, 2)}>
        <SkillsSection />
      </Reveal>
      <Reveal state={getRevealState(activeIndex, 3)}>
        <InteractiveImageAccordionSection />
      </Reveal>
      <Reveal state={getRevealState(activeIndex, 4)}>
        <ProjectsSection />
      </Reveal>
      <Reveal state={getRevealState(activeIndex, 5)}>
        <ContactSection />
      </Reveal>
    </MainLayout>
  );
}

export default App;
