import { BottomNav } from "./BottomNav";

interface AppShellProps {
  title?: string;
  children: React.ReactNode;
  showHeader?: boolean;
  headerAction?: React.ReactNode;
}

export function AppShell({
  title,
  children,
  showHeader = true,
  headerAction,
}: AppShellProps) {
  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-gradient-to-b from-[var(--color-bg)] to-[var(--color-bg-light)] shadow-2xl">
      {showHeader && (
        <header className="sticky top-0 z-10 border-b border-[var(--color-border)] bg-white/98 px-5 py-4 shadow-sm backdrop-blur-md">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold tracking-tight text-[var(--color-primary)]">
              {title ?? "Adult"}
            </h1>
            {headerAction}
          </div>
        </header>
      )}

      <main className="flex-1 px-5 pb-24 pt-4">{children}</main>

      <BottomNav />
    </div>
  );
}
