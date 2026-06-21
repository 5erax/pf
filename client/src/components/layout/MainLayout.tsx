import type { ReactNode } from "react";

import BackgroundPaperShaders from "@/components/background-paper-shaders";
import { ScrollProgress } from "@/components/common/ScrollProgress";
import { ScrollToTopButton } from "@/components/common/ScrollToTopButton";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

type MainLayoutProps = {
  children: ReactNode;
};

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <BackgroundPaperShaders />
      <ScrollProgress />

      <div className="relative z-10">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>

      <ScrollToTopButton />
    </div>
  );
}