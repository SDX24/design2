"use client";

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
    interactive: "interactive hover:shadow-soft-md",
  };

  return (
    <div
      className={cn(
        "rounded-[var(--radius-lg)] border p-[var(--space-4)] shadow-soft transition-all duration-[var(--transition-base)]",
        variantClasses[variant],
        className
      )}
      style={{
        borderColor: '#E3E3E3',
        backgroundColor: '#FCFCFC',
        fontFamily: 'IBM Plex Sans, sans-serif'
      }}
      onMouseEnter={(e) => {
        if (variant === 'interactive') {
          (e.currentTarget as HTMLElement).style.borderColor = '#3A7BD5';
        }
      }}
      onMouseLeave={(e) => {
        if (variant === 'interactive') {
          (e.currentTarget as HTMLElement).style.borderColor = '#E3E3E3';
        }
      }}
      {...props}
    >
      {children}
    </div>
  );
}
