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
  const getVariantStyles = () => {
    if (variant === 'primary') {
      return { backgroundColor: 'rgba(58, 123, 213, 0.1)', color: '#3A7BD5' };
    } else if (variant === 'accent') {
      return { backgroundColor: 'rgba(255, 107, 107, 0.1)', color: '#FF6B6B' };
    } else {
      return { backgroundColor: '#F5F5F5', color: '#393E46' };
    }
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all",
        className
      )}
      style={{
        ...getVariantStyles(),
        fontFamily: 'IBM Plex Sans, sans-serif'
      }}
      {...props}
    >
      {children}
    </span>
  );
}
