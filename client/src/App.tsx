import { MainLayout } from "@/components/layout/MainLayout";
import { Reveal } from "@/components/common/Reveal";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { InteractiveImageAccordionSection } from "@/components/sections/InteractiveImageAccordionSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";

function App() {
  return (
    <MainLayout>
      <Reveal index={0} label="Home">
        <HeroSection />
      </Reveal>
      <Reveal index={1} label="About">
        <AboutSection />
      </Reveal>
      <Reveal index={2} label="Skills">
        <SkillsSection />
      </Reveal>
      <Reveal index={3} label="Showcase">
        <InteractiveImageAccordionSection />
      </Reveal>
      <Reveal index={4} label="Projects">
        <ProjectsSection />
      </Reveal>
      <Reveal index={5} label="Contact">
        <ContactSection />
      </Reveal>
    </MainLayout>
  );
}

export default App;
