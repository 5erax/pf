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
      <Reveal>
        <HeroSection />
      </Reveal>
      <Reveal>
        <AboutSection />
      </Reveal>
      <Reveal>
        <SkillsSection />
      </Reveal>
      <Reveal>
        <InteractiveImageAccordionSection />
      </Reveal>
      <Reveal>
        <ProjectsSection />
      </Reveal>
      <Reveal>
        <ContactSection />
      </Reveal>
    </MainLayout>
  );
}

export default App;
