import { cn } from "@/lib/cn";
import { HTMLAttributes } from "react";

interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export function SectionHeader({
  title,
  subtitle,
  action,
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn("flex items-center justify-between", className)}
      {...props}
    >
      <div>
        <h2 
          className="font-bold"
          style={{ 
            fontSize: '28px',
            color: '#222831',
            fontFamily: 'JetBrains Mono, monospace'
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p 
            className="mt-1 text-sm"
            style={{ 
              color: '#393E46',
              fontFamily: 'IBM Plex Sans, sans-serif',
              fontSize: '16px'
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}
