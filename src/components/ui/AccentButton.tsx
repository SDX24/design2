"use client";

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
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const getVariantStyles = () => {
    if (variant === 'primary') {
      return {
        background: 'linear-gradient(90deg, #3A7BD5 0%, #4A8DE5 100%)',
        color: '#FFFFFF',
        boxShadow: '0 4px 12px rgba(58, 123, 213, 0.3)'
      };
    } else if (variant === 'accent') {
      return {
        background: 'linear-gradient(90deg, #FF6B6B 0%, #FF8B8B 100%)',
        color: '#FFFFFF',
        boxShadow: '0 4px 12px rgba(255, 107, 107, 0.3)'
      };
    } else {
      return {
        border: '2px solid #3A7BD5',
        color: '#3A7BD5',
        backgroundColor: 'transparent'
      };
    }
  };

  return (
    <button
      className={cn(
        "rounded-full font-semibold transition-all tap-scale disabled:opacity-50 disabled:cursor-not-allowed",
        sizeClasses[size],
        className
      )}
      style={{
        ...getVariantStyles(),
        fontFamily: 'IBM Plex Sans, sans-serif'
      }}
      onMouseEnter={(e) => {
        if (variant === 'outline') {
          e.currentTarget.style.backgroundColor = '#3A7BD5';
          e.currentTarget.style.color = '#FFFFFF';
        }
      }}
      onMouseLeave={(e) => {
        if (variant === 'outline') {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = '#3A7BD5';
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
}
