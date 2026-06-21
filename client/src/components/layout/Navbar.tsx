import { Briefcase, Code2, Home, Mail, User } from "lucide-react";

import { Container } from "@/components/common/Container";
import { Button } from "@/components/ui/button";
import {
  NavBar as TubelightNavBar,
  type NavItem,
} from "@/components/ui/tubelight-navbar";
import { useActiveSection } from "@/hooks/useActiveSection";
import { scrollToSection } from "@/lib/scroll";

const navItems: NavItem[] = [
  {
    name: "Home",
    url: "#home",
    icon: Home,
  },
  {
    name: "About",
    url: "#about",
    icon: User,
  },
  {
    name: "Skills",
    url: "#skills",
    icon: Code2,
  },
  {
    name: "Projects",
    url: "#projects",
    icon: Briefcase,
  },
  {
    name: "Contact",
    url: "#contact",
    icon: Mail,
  },
];

const sectionIds = ["home", "about", "skills", "projects", "contact"];

export function Navbar() {
  const activeSection = useActiveSection(sectionIds);

  const activeItemName =
    navItems.find((item) => item.url === `#${activeSection}`)?.name ??
    navItems[0].name;

  const handleNavigate = (item: NavItem) => {
    scrollToSection(item.url);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/45 backdrop-blur-2xl">
        <Container>
          <nav className="relative flex h-20 items-center justify-between">
            <a
              href="#home"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("#home");
              }}
              className="z-10 text-sm font-semibold tracking-wide text-white"
            >
              lagna
            </a>

            <div className="pointer-events-auto absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
              <TubelightNavBar
                items={navItems}
                activeItemName={activeItemName}
                onNavigate={handleNavigate}
              />
            </div>

            <Button
              asChild
              className="z-10 hidden rounded-full bg-white px-5 text-black shadow-lg shadow-black/20 hover:bg-zinc-200 md:inline-flex"
            >
              <a
                href="#contact"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection("#contact");
                }}
              >
                Contact me
              </a>
            </Button>

            <Button
              asChild
              size="sm"
              className="z-10 rounded-full bg-white px-4 text-black hover:bg-zinc-200 md:hidden"
            >
              <a
                href="#contact"
                onClick={(event) => {
                  event.preventDefault();
                  scrollToSection("#contact");
                }}
              >
                Contact
              </a>
            </Button>
          </nav>
        </Container>
      </header>

      <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 md:hidden">
        <TubelightNavBar
          items={navItems}
          activeItemName={activeItemName}
          onNavigate={handleNavigate}
        />
      </div>
    </>
  );
}