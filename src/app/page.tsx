"use client";

import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { SectionHeader, GuideCard, Card } from "@/components/ui";
import { Logo } from "@/components/Logo";
import { useState, useEffect } from "react";
import { guides } from "@/data/guides";

export default function HomePage() {
  const [savedGuides, setSavedGuides] = useState<string[]>([]);
  const [recentActivity, setRecentActivity] = useState<any[]>([]);

  useEffect(() => {
    // Load saved guides
    const saved = localStorage.getItem("savedGuides");
    if (saved) {
      setSavedGuides(JSON.parse(saved));
    }

    // Load recent history (last 3 items)
    const historyData = [
      { id: "budgeting-101", title: "Budgeting 101", type: "Guide", href: "/guides/budgeting-101" },
      { id: "renting-checklist", title: "First rental checklist", type: "Guide", href: "/guides/renting-checklist" },
    ];
    setRecentActivity(historyData.slice(0, 3));
  }, []);

  const savedGuidesList = guides.filter((g) => savedGuides.includes(g.slug)).slice(0, 3);

  return (
    <AppShell title="Adult" showHeader={false}>
      <div className="space-y-6 pb-8">
        {/* Welcome Header */}
        <header className="space-y-3 pt-6">
          <p className="text-sm" style={{ color: "#393E46", fontFamily: "IBM Plex Sans, sans-serif" }}>
            Welcome back
          </p>
          <h1 
            className="text-[32px] font-semibold leading-tight"
            style={{ color: "#3A7BD5", fontFamily: "IBM Plex Sans, sans-serif" }}
          >
            What do you want to learn today?
          </h1>
          {/* Onboarding hint text */}
          <p 
            className="text-sm leading-relaxed"
            style={{ color: "#393E46", fontFamily: "IBM Plex Sans, sans-serif", opacity: 0.85 }}
          >
            💡 <span className="font-medium">New here?</span> Start with the Starter Guide, or explore Local Guides for your region.
          </p>
        </header>

        {/* Starter Guide – HERO PROMINENCE with Logo */}
        <Link
          href="/onboarding"
          className="group block rounded-[16px] border-2 px-6 py-6 shadow-md transition-all hover:shadow-lg"
          style={{ 
            borderColor: "#3A7BD5",
            background: "linear-gradient(135deg, rgba(58, 123, 213, 0.08) 0%, rgba(58, 123, 213, 0.04) 100%)"
          }}
        >
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p 
                className="text-xs font-bold uppercase tracking-wide"
                style={{ color: "#FF6B6B", fontFamily: "IBM Plex Sans, sans-serif" }}
              >
                ⭐ Starter Guide — Start here
              </p>
              <h2 
                className="mt-3 text-xl font-semibold"
                style={{ color: "#222831", fontFamily: "IBM Plex Sans, sans-serif" }}
              >
                See your age-based roadmap
              </h2>
              <p 
                className="mt-2 text-base leading-relaxed"
                style={{ color: "#393E46", fontFamily: "IBM Plex Sans, sans-serif" }}
              >
                At 16, 18, 19+—see what documents, money tasks, and decisions to prepare for.
              </p>
            </div>
            <div className="ml-4 flex flex-shrink-0 items-center justify-center transition-transform group-hover:scale-110">
              <Logo size={48} />
            </div>
          </div>
        </Link>

        {/* Continue Where You Left Off */}
        {recentActivity.length > 0 && (
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 
                className="text-xl font-semibold"
                style={{ color: "#222831", fontFamily: "IBM Plex Sans, sans-serif" }}
              >
                📚 Continue where you left off
              </h3>
              <Link 
                href="/history"
                className="text-sm font-medium transition-colors"
                style={{ color: "#3A7BD5", fontFamily: "IBM Plex Sans, sans-serif" }}
              >
                View all →
              </Link>
            </div>
            <div className="space-y-2">
              {recentActivity.map((item) => (
                <Link key={item.id} href={item.href} className="block">
                  <div 
                    className="flex items-center gap-3 rounded-[12px] border-2 px-4 py-3 transition-all hover:shadow-md"
                    style={{ 
                      borderColor: "#E3E3E3",
                      backgroundColor: "#FCFCFC"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "#3A7BD5";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "#E3E3E3";
                    }}
                  >
                    <span className="text-2xl">📖</span>
                    <span 
                      className="flex-1 font-medium"
                      style={{ color: "#222831", fontFamily: "IBM Plex Sans, sans-serif", fontSize: "16px" }}
                    >
                      {item.title}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Saved Guides / Favorites */}
        {savedGuidesList.length > 0 && (
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 
                className="text-xl font-semibold"
                style={{ color: "#222831", fontFamily: "IBM Plex Sans, sans-serif" }}
              >
                ⭐ Your saved guides
              </h3>
              <Link 
                href="/guides"
                className="text-sm font-medium transition-colors"
                style={{ color: "#3A7BD5", fontFamily: "IBM Plex Sans, sans-serif" }}
              >
                See all →
              </Link>
            </div>
            <div className="space-y-3">
              {savedGuidesList.map((guide) => (
                <GuideCard
                  key={guide.slug}
                  title={guide.title}
                  summary={guide.summary}
                  category={guide.category}
                  emoji={guide.category === "Money" ? "💰" : guide.category === "Housing" ? "🏠" : "📚"}
                  href={`/guides/${guide.slug}`}
                  stepCount={guide.steps.length}
                />
              ))}
            </div>
          </section>
        )}

        {/* Local Guides – Clear label per Assignment 08 */}
        <Link href="/local-guides" className="block">
          <Card variant="interactive" className="hover:border-[var(--color-primary)]">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p 
                  className="text-xs font-bold uppercase tracking-wide"
                  style={{ color: "#393E46", fontFamily: "IBM Plex Sans, sans-serif" }}
                >
                  📍 Local Guides
                </p>
                <h3 
                  className="mt-2 text-lg font-semibold"
                  style={{ color: "#222831", fontFamily: "IBM Plex Sans, sans-serif" }}
                >
                  See guides for your region
                </h3>
                <p 
                  className="mt-1 text-sm"
                  style={{ color: "#393E46", fontFamily: "IBM Plex Sans, sans-serif" }}
                >
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
