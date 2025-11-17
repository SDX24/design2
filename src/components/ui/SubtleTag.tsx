import { cn } from "@/lib/cn";
import { HTMLAttributes } from "react";

interface SubtleTagProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "accent" | "neutral";
  children: React.ReactNode;
}

export function SubtleTag({
  variant = "neutral",
  children,
  className,
  ...props
}: SubtleTagProps) {
  const variantClasses = {
    primary: "bg-[var(--color-primary)]/10 text-[var(--color-primary)]",
    accent: "bg-[var(--color-accent)]/10 text-[var(--color-accent)]",
    neutral: "bg-[var(--color-bg-subtle)] text-[var(--color-text-muted)]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
