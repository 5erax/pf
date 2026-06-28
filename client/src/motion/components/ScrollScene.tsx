import type { ReactNode } from "react";
import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";

type ScrollSceneStep = {
  id: string;
  label: string;
  content: ReactNode;
  preview: ReactNode;
};

type ScrollSceneProps = {
  steps: ScrollSceneStep[];
  className?: string;
};

export function ScrollScene({ steps, className }: ScrollSceneProps) {
  const [activeStepId, setActiveStepId] = useState(steps[0]?.id ?? "");
  const activeStep = useMemo(
    () => steps.find((step) => step.id === activeStepId) ?? steps[0],
    [activeStepId, steps],
  );

  if (!activeStep) return null;

  return (
    <div className={cn("grid gap-6 lg:grid-cols-[0.82fr_1.18fr]", className)}>
      <div className="grid gap-3">
        {steps.map((step) => {
          const isActive = step.id === activeStep.id;

          return (
            <button
              key={step.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveStepId(step.id)}
              className={cn(
                "rounded-2xl border p-4 text-left transition",
                isActive
                  ? "border-cyan-300/35 bg-cyan-300/[0.08] text-white"
                  : "border-white/10 bg-white/[0.035] text-zinc-400 hover:border-white/20 hover:text-white",
              )}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.22em]">
                {step.label}
              </span>
              <div className="mt-3 text-sm leading-6">{step.content}</div>
            </button>
          );
        })}
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5">
        {activeStep.preview}
      </div>
    </div>
  );
}
