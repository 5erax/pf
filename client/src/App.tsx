import { MainLayout } from "@/components/layout/MainLayout";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { InteractiveImageAccordionSection } from "@/components/sections/InteractiveImageAccordionSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";

function App() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <InteractiveImageAccordionSection />
      <ProjectsSection />
      <ContactSection />
    </MainLayout>
  );
}

export default App;