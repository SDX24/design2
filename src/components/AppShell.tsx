import { BottomNav } from "./BottomNav";

interface AppShellProps {
  title?: string;
  children: React.ReactNode;
  showHeader?: boolean;
}

export function AppShell({
  title,
  children,
  showHeader = true,
}: AppShellProps) {
  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-white shadow-md">
      {showHeader && (
        <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 px-4 py-3">
          <h1 className="text-lg font-semibold text-[var(--color-primary)]">
            {title ?? "Adult"}
          </h1>
        </header>
      )}

      <main className="flex-1 px-4 pb-20 pt-4">{children}</main>

      <BottomNav />
    </div>
  );
}
