import { cn } from "@/lib/cn";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "premium" | "interactive";
}

export function Card({
  className,
  variant = "default",
  children,
  ...props
}: CardProps) {
  const variantClasses = {
    default: "",
    premium: "card-premium",
    interactive: "interactive hover:shadow-soft-md hover:border-[var(--color-primary)]",
  };

  return (
    <div
      className={cn(
        "rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-[var(--space-4)] shadow-soft transition-all duration-[var(--transition-base)]",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
