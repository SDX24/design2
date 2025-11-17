"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

const links = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/guides", label: "Guides", icon: "📚" },
  { href: "/local-guides", label: "Local", icon: "📍" },
  { href: "/community", label: "Community", icon: "👥" },
  { href: "/profile", label: "Profile", icon: "👤" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav 
      className="fixed bottom-0 left-0 right-0 z-20 border-t border-[var(--color-border)] bg-white/95 shadow-lg backdrop-blur-sm"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-md items-center justify-between px-2 py-2">
        {links.map((link) => {
          const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex min-h-[44px] flex-1 flex-col items-center justify-center gap-1 rounded-lg px-2 py-1 transition-all",
                active
                  ? "text-[var(--color-primary)]"
                  : "text-[var(--color-text-muted)] hover:bg-[var(--color-primary)]/5"
              )}
            >
              <span className="text-lg leading-none" aria-hidden="true">
                {link.icon}
              </span>
              <span className={cn(
                "text-[11px] font-medium leading-none",
                active && "font-semibold"
              )}>
                {link.label}
              </span>
              {active && (
                <span 
                  className="mt-0.5 h-1 w-8 rounded-full bg-[var(--color-accent)]" 
                  aria-hidden="true"
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
