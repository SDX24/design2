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
    <div className="relative mx-auto flex min-h-screen max-w-[640px] flex-col">
      {/* Vibrant animated gradient background */}
      <div className="fixed inset-0 -z-10 mx-auto max-w-[640px]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#fcfcfc] via-[#f8f8f8] to-[#f5f5f5]" />
        <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-[var(--color-primary)]/8 via-[var(--color-accent)]/4 to-transparent animate-float" />
        <div className="absolute top-20 right-0 h-[200px] w-[200px] rounded-full bg-[var(--color-accent)]/8 blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-40 left-0 h-[250px] w-[250px] rounded-full bg-[var(--color-primary)]/8 blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
      </div>

      {showHeader && (
        <header className="sticky top-0 z-20 glass shadow-soft">
          <div className="flex items-center justify-between px-5 py-4">
            <h1 className="text-xl font-bold tracking-tight text-gradient-primary">
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
