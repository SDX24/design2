import Link from "next/link";
import { AppShell } from "@/components/AppShell";

function GuideLink({ href, title }: { href: string; title: string }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between rounded-xl border border-slate-200 px-3 py-2 text-sm"
    >
      <span>{title}</span>
      <span className="text-xs text-slate-500">Open →</span>
    </Link>
  );
}

export default function HomePage() {
  return (
    <AppShell title="Adult" showHeader={false}>
      <section className="space-y-4">
        <div className="mt-4">
          <p className="text-sm text-slate-600">Welcome back</p>
          <h2 className="mt-1 text-2xl font-semibold text-[var(--color-primary)]">
            What do you want to learn today?
          </h2>
        </div>

        {/* Starter Guide – make this hero-level obvious */}
        <Link
          href="/onboarding"
          className="block rounded-2xl border border-[var(--color-primary)] bg-[var(--color-primary)]/5 px-4 py-4"
        >
          <p className="text-[11px] font-heading text-[var(--color-accent)] uppercase tracking-wide">
            Starter Guide
          </p>
          <h3 className="mt-1 text-lg font-semibold">
            See your age-based roadmap
          </h3>
          <p className="mt-1 text-sm text-slate-700">
            At 16, 18, 19+—see what documents, money tasks, and decisions to
            prepare for.
          </p>
        </Link>

        {/* Local Guides */}
        <Link
          href="/local-guides"
          className="block rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
        >
          <p className="text-[11px] font-heading text-slate-500 uppercase tracking-wide">
            Local Guides
          </p>
          <h3 className="mt-1 text-base font-medium">
            See guides for your region
          </h3>
          <p className="mt-1 text-xs text-slate-600">
            Taxes, ID, renting and more tailored to where you live.
          </p>
        </Link>

        {/* Popular guides */}
        <section className="mt-2 space-y-2">
          <h3 className="text-sm font-semibold">Popular guides</h3>
          <div className="space-y-2">
            <GuideLink href="/guides/budgeting-101" title="Budgeting 101" />
            <GuideLink
              href="/guides/renting-checklist"
              title="First rental checklist"
            />
            <GuideLink
              href="/guides/taxes-canada-basics"
              title="Taxes in Canada: basic steps"
            />
          </div>
        </section>

        {/* Search entry point */}
        <section className="mt-4">
          <Link
            href="/search"
            className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm hover:border-[var(--color-primary)]"
          >
            <div>
              <p className="text-xs font-heading text-slate-500 uppercase tracking-wide">
                Search
              </p>
              <p className="mt-1 text-sm">Search all guides and community posts</p>
            </div>
            <span className="text-xs text-slate-500">Open →</span>
          </Link>
        </section>

        {/* History link */}
        <section className="mt-2">
          <Link
            href="/history"
            className="text-xs text-[var(--color-primary)] underline"
          >
            View your recent guides & posts
          </Link>
        </section>
      </section>
    </AppShell>
  );
}
