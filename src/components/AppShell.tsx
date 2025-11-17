import { BottomNav } from "./BottomNav";
import { Logo } from "./Logo";
import Link from "next/link";

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
        <div className="absolute inset-0 bg-[#F5F5F5]" />
        <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-[#3A7BD5]/8 via-[#FF6B6B]/4 to-transparent animate-float" />
        <div className="absolute top-20 right-0 h-[200px] w-[200px] rounded-full bg-[#FF6B6B]/8 blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-40 left-0 h-[250px] w-[250px] rounded-full bg-[#3A7BD5]/8 blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
      </div>

      {showHeader && (
        <header className="sticky top-0 z-20 glass shadow-soft">
          <div className="flex items-center justify-between px-5 py-4">
            <Link href="/" className="flex items-center">
              <Logo size={32} showText={true} />
            </Link>
            
            {headerAction ? (
              headerAction
            ) : (
              <div className="flex items-center gap-3">
                <Link 
                  href="/search"
                  className="flex h-9 w-9 items-center justify-center rounded-lg transition-all hover:bg-[#3A7BD5]/10"
                  aria-label="Search"
                >
                  <span className="text-xl">🔍</span>
                </Link>
                <Link 
                  href="/tools"
                  className="flex h-9 w-9 items-center justify-center rounded-lg transition-all hover:bg-[#3A7BD5]/10"
                  aria-label="Tools"
                >
                  <span className="text-xl">🛠️</span>
                </Link>
              </div>
            )}
          </div>
        </header>
      )}

      <main className="flex-1 px-5 pb-24 pt-4">{children}</main>

      <BottomNav />
    </div>
  );
}
