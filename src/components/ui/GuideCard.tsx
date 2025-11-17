"use client";

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
        "group block rounded-[var(--radius-lg)] border-2 p-[var(--space-4)] shadow-soft transition-all tap-scale hover:shadow-soft-md",
        className
      )}
      style={{
        borderColor: '#E3E3E3',
        backgroundColor: '#FCFCFC',
        fontFamily: 'IBM Plex Sans, sans-serif'
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = '#3A7BD5';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = '#E3E3E3';
      }}
      {...props}
    >
      <div className="flex gap-[var(--space-4)]">
        <div 
          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-2xl transition-transform group-hover:scale-110"
          style={{
            background: 'linear-gradient(135deg, rgba(58, 123, 213, 0.1) 0%, rgba(255, 107, 107, 0.1) 100%)'
          }}
        >
          {emoji}
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-2">
            <h3 
              className="text-base font-bold"
              style={{ color: '#222831', fontFamily: 'IBM Plex Sans, sans-serif' }}
            >
              {title}
            </h3>
            {region && (
              <span 
                className="flex-shrink-0 rounded-full px-3 py-1 text-xs font-semibold"
                style={{ 
                  backgroundColor: 'rgba(58, 123, 213, 0.1)',
                  color: '#3A7BD5'
                }}
              >
                📍 {region}
              </span>
            )}
          </div>
          <p 
            className="mt-1 text-sm"
            style={{ color: '#393E46' }}
          >
            {summary}
          </p>
          <div 
            className="mt-2 flex items-center gap-3 text-xs"
            style={{ color: '#393E46' }}
          >
            {stepCount && (
              <>
                <span>{stepCount} steps</span>
                <span 
                  className="h-1 w-1 rounded-full"
                  style={{ backgroundColor: '#393E46' }}
                />
              </>
            )}
            <span className="capitalize">{category}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
