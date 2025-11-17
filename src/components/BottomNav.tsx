"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

const links = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/guides", label: "Guides", icon: "📚" },
  { href: "/more", label: "More", icon: "✨" },
  { href: "/community", label: "Community", icon: "👥" },
  { href: "/profile", label: "Profile", icon: "👤" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav 
      className="fixed bottom-0 left-0 right-0 z-20 border-t shadow-lg backdrop-blur-sm"
      style={{ 
        borderColor: '#E3E3E3',
        backgroundColor: '#FCFCFC',
        fontFamily: 'IBM Plex Sans, sans-serif',
        fontSize: '14px'
      }}
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
              )}
              style={{
                color: active ? '#3A7BD5' : '#393E46'
              }}
              onMouseEnter={(e) => {
                if (!active) {
                  e.currentTarget.style.backgroundColor = 'rgba(58, 123, 213, 0.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (!active) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
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
                  className="mt-0.5 h-1 w-8 rounded-full"
                  style={{ backgroundColor: '#FF6B6B' }}
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
