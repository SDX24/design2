"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

const links = [
  { href: "/", label: "Home" },
  { href: "/guides", label: "Guides" },
  { href: "/local-guides", label: "Local Guides" },
  { href: "/community", label: "Community" },
  { href: "/profile", label: "Profile" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20 border-t border-slate-200 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-md items-center justify-between px-4 py-2">
        {links.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex flex-col items-center gap-0.5 text-[11px]",
                active
                  ? "text-[var(--color-primary)] font-medium"
                  : "text-slate-500"
              )}
            >
              <span>{link.label}</span>
              {active && (
                <span className="mt-0.5 h-1 w-6 rounded-full bg-[var(--color-accent)]" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
