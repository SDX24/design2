import { cn } from "@/lib/cn";
import Link from "next/link";
import { HTMLAttributes } from "react";

interface GuideCardProps extends HTMLAttributes<HTMLAnchorElement> {
  title: string;
  summary: string;
  category: string;
  emoji: string;
  href: string;
  stepCount?: number;
  region?: string;
}

export function GuideCard({
  title,
  summary,
  category,
  emoji,
  href,
  stepCount,
  region,
  className,
  ...props
}: GuideCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group block rounded-[var(--radius-lg)] border-2 border-[var(--color-border)] bg-white p-[var(--space-4)] shadow-soft transition-all tap-scale hover:border-[var(--color-primary)] hover:shadow-soft-md",
        className
      )}
      {...props}
    >
      <div className="flex gap-[var(--space-4)]">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 text-2xl transition-transform group-hover:scale-110">
          {emoji}
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-base font-bold text-[var(--color-text)]">
              {title}
            </h3>
            {region && (
              <span className="flex-shrink-0 rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-xs font-semibold text-[var(--color-primary)]">
                📍 {region}
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-[var(--color-text-muted)]">{summary}</p>
          <div className="mt-2 flex items-center gap-3 text-xs text-[var(--color-text-muted)]">
            {stepCount && (
              <>
                <span>{stepCount} steps</span>
                <span className="h-1 w-1 rounded-full bg-[var(--color-text-muted)]" />
              </>
            )}
            <span className="capitalize">{category}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
