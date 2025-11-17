import { cn } from "@/lib/cn";
import { ButtonHTMLAttributes } from "react";

interface AccentButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "outline";
  size?: "sm" | "md" | "lg";
}

export function AccentButton({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: AccentButtonProps) {
  const variantClasses = {
    primary:
      "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] text-white shadow-glow-primary hover:shadow-glow-primary",
    accent:
      "bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-light)] text-white shadow-glow-accent hover:shadow-glow-accent",
    outline:
      "border-2 border-[var(--color-primary)] text-[var(--color-primary)] bg-transparent hover:bg-[var(--color-primary)] hover:text-white",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(
        "rounded-full font-semibold transition-all tap-scale disabled:opacity-50 disabled:cursor-not-allowed",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
