import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { SectionHeader, GuideCard, Card } from "@/components/ui";

export default function HomePage() {
  return (
    <AppShell title="Adult" showHeader={false}>
      <div className="space-y-6 pb-8">
        {/* Welcome Header */}
        <header className="space-y-2 pt-6">
          <p className="text-sm text-[var(--color-text-muted)]">Welcome back</p>
          <h1 className="text-[32px] font-semibold leading-tight text-[var(--color-primary)]">
            What do you want to learn today?
          </h1>
        </header>

        {/* Starter Guide – HERO PROMINENCE per Assignment 08 feedback */}
        <Link
          href="/onboarding"
          className="group block rounded-[var(--radius-lg)] border-2 border-[var(--color-primary)] bg-gradient-to-br from-[var(--color-primary)]/8 to-[var(--color-primary)]/4 px-6 py-6 shadow-md transition-all hover:shadow-lg"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="label-uppercase text-[var(--color-accent)]">
                ⭐ Starter Guide
              </p>
              <h2 className="mt-2 text-xl font-semibold text-[var(--color-text)]">
                See your age-based roadmap
              </h2>
              <p className="mt-2 text-base leading-relaxed text-[var(--color-text)]">
                At 16, 18, 19+—see what documents, money tasks, and decisions to prepare for.
              </p>
            </div>
            <div className="ml-3 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-xl transition-transform group-hover:scale-110">
              📍
            </div>
          </div>
        </Link>

        {/* Local Guides – Clear label per Assignment 08 */}
        <Link href="/local-guides" className="block">
          <Card variant="interactive" className="hover:border-[var(--color-primary)]">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="label-uppercase text-[var(--color-text-muted)]">
                  📍 Local Guides
                </p>
                <h3 className="mt-2 text-lg font-semibold text-[var(--color-text)]">
                  See guides for your region
                </h3>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  Taxes, ID, renting and more tailored to where you live.
                </p>
              </div>
              <span className="ml-3 text-xl transition-transform group-hover:translate-x-1">
                →
              </span>
            </div>
          </Card>
        </Link>

        {/* Popular Guides */}
        <section className="space-y-4">
          <SectionHeader title="Popular guides" />
          <div className="space-y-3">
            <GuideCard
              title="Budgeting 101"
              summary="Learn how to track expenses and save money effectively"
              category="Finance"
              emoji="💰"
              href="/guides/budgeting-101"
              stepCount={5}
            />
            <GuideCard
              title="First rental checklist"
              summary="Everything you need to know before signing a lease"
              category="Housing"
              emoji="🏠"
              href="/guides/renting-checklist"
              stepCount={8}
            />
            <GuideCard
              title="Taxes in Canada: basic steps"
              summary="File your first tax return with confidence"
              category="Finance"
              emoji="📋"
              href="/guides/taxes-canada-basics"
              stepCount={6}
            />
          </div>
        </section>

        {/* Learning Paths */}
        <Link href="/learning-paths" className="block">
          <Card variant="interactive" className="hover:border-[var(--color-primary)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-lg">
                  🎯
                </div>
                <div>
                  <p className="label-uppercase text-[var(--color-text-muted)]">
                    Learning Paths
                  </p>
                  <p className="mt-1 text-base font-medium text-[var(--color-text)]">
                    Guided journeys to master adulting skills
                  </p>
                </div>
              </div>
              <span className="text-xl text-[var(--color-text-muted)] transition-transform group-hover:translate-x-1">
                →
              </span>
            </div>
          </Card>
        </Link>

        {/* Tools */}
        <Link href="/tools" className="block">
          <Card variant="interactive" className="hover:border-[var(--color-primary)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-lg">
                  🛠️
                </div>
                <div>
                  <p className="label-uppercase text-[var(--color-text-muted)]">
                    Tools
                  </p>
                  <p className="mt-1 text-base font-medium text-[var(--color-text)]">
                    Budget planner, calculators & trackers
                  </p>
                </div>
              </div>
              <span className="text-xl text-[var(--color-text-muted)] transition-transform group-hover:translate-x-1">
                →
              </span>
            </div>
          </Card>
        </Link>

        {/* Search Entry Point */}
        <Link href="/search" className="block">
          <Card variant="interactive" className="hover:border-[var(--color-primary)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)]/10 text-lg">
                  🔍
                </div>
                <div>
                  <p className="label-uppercase text-[var(--color-text-muted)]">
                    Search
                  </p>
                  <p className="mt-1 text-base font-medium text-[var(--color-text)]">
                    Search all guides and community posts
                  </p>
                </div>
              </div>
              <span className="text-xl text-[var(--color-text-muted)] transition-transform group-hover:translate-x-1">
                →
              </span>
            </div>
          </Card>
        </Link>

        {/* History Link */}
        <div className="pt-2 text-center">
          <Link
            href="/history"
            className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-primary)] underline decoration-2 underline-offset-4 transition-colors hover:text-[var(--color-accent)]"
          >
            <span>📚</span>
            View your recent guides & posts
          </Link>
        </div>
      </div>
    </AppShell>
  );
}
