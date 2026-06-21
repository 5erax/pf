import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { Container } from "@/components/common/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10">
      <Container>
        <div className="flex flex-col gap-4 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Lagna. Built with React and TypeScript.</p>

          <div className="flex items-center gap-4">
            <a href="#" aria-label="GitHub" className="transition hover:text-white">
              <FaGithub className="h-5 w-5" />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="transition hover:text-white"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>

            <a
              href="mailto:your-email@example.com"
              aria-label="Email"
              className="transition hover:text-white"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}