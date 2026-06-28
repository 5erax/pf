import type { AnchorHTMLAttributes, ButtonHTMLAttributes, PointerEvent, ReactNode } from "react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { useReducedMotionSafe } from "@/motion/hooks/useReducedMotionSafe";

type MagneticButtonBaseProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

type MagneticButtonProps =
  | (MagneticButtonBaseProps &
      ButtonHTMLAttributes<HTMLButtonElement> & {
        as?: "button";
      })
  | (MagneticButtonBaseProps &
      AnchorHTMLAttributes<HTMLAnchorElement> & {
        as: "a";
      });

export function MagneticButton(props: MagneticButtonProps) {
  const { children, className, strength = 0.16 } = props;
  const shouldReduceMotion = useReducedMotionSafe();
  const [transform, setTransform] = useState("translate3d(0, 0, 0)");

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (shouldReduceMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * strength;
    const y = (event.clientY - rect.top - rect.height / 2) * strength;
    setTransform(`translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`);
  };

  const handlePointerLeave = () => {
    setTransform("translate3d(0, 0, 0)");
  };

  const sharedClassName = cn(
    "inline-flex transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
    className,
  );

  if (props.as === "a") {
    const {
      as: omittedAs,
      children: omittedChildren,
      className: omittedClassName,
      strength: omittedStrength,
      ...anchorProps
    } = props;
    void omittedAs;
    void omittedChildren;
    void omittedClassName;
    void omittedStrength;

    return (
      <a
        {...anchorProps}
        className={sharedClassName}
        style={{ ...anchorProps.style, transform }}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        {children}
      </a>
    );
  }

  const {
    as: omittedAs,
    children: omittedChildren,
    className: omittedClassName,
    strength: omittedStrength,
    ...buttonProps
  } = props;
  void omittedAs;
  void omittedChildren;
  void omittedClassName;
  void omittedStrength;

  return (
    <button
      type="button"
      {...buttonProps}
      className={sharedClassName}
      style={{ ...buttonProps.style, transform }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {children}
    </button>
  );
}
