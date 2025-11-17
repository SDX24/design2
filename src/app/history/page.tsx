"use client";

import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { useState } from "react";

const dummyHistory = [
  {
    id: "budgeting-101",
    title: "Budgeting 101",
    type: "Guide" as const,
    category: "Money",
    href: "/guides/budgeting-101",
    visited: "Today · 10:15",
  },
  {
    id: "post-1",
    title: "What should I check before signing my first lease?",
    type: "Post" as const,
    category: "Question",
    href: "/community/1",
    visited: "Yesterday · 21:03",
  },
  {
    id: "renting-checklist",
    title: "Renting Checklist",
    type: "Guide" as const,
    category: "Housing",
    href: "/guides/renting-checklist",
    visited: "2 days ago · 14:30",
  },
  {
    id: "post-2",
    title: "Best advice for a first-time tax filer",
    type: "Post" as const,
    category: "Advice",
    href: "/community/2",
    visited: "3 days ago · 09:12",
  },
];

export default function HistoryPage() {
  const [filter, setFilter] = useState<"All" | "Guide" | "Post">("All");

  const filteredHistory =
    filter === "All" ? dummyHistory : dummyHistory.filter((item) => item.type === filter);

  const typeConfig = {
    Guide: { emoji: "📚", color: "var(--color-primary)", bg: "var(--color-primary)/10" },
    Post: { emoji: "💬", color: "var(--color-accent)", bg: "var(--color-accent)/10" },
  };

  return (
    <AppShell title="History">
      <section className="space-y-6 py-4">
        {/* Hero */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] text-3xl shadow-lg">
              🕐
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[var(--color-text)]">
                History
              </h1>
              <p className="text-sm text-[var(--color-text-muted)]">
                Your recent activity
              </p>
            </div>
          </div>
          <p className="text-base leading-relaxed text-[var(--color-text-muted)]">
            Keep track of the guides and community posts you've recently viewed. Pick up where you left off!
          </p>
        </div>

        {/* Filter */}
        <div>
          <h3 className="mb-3 text-sm font-semibold text-[var(--color-text)]">
            Filter by type
          </h3>
          <div className="flex gap-2">
            {(["All", "Guide", "Post"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  filter === type
                    ? "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white shadow-md"
                    : "bg-[var(--color-bg)] text-[var(--color-text-muted)] hover:bg-[var(--color-primary)]/10"
                }`}
              >
                {type === "Guide" && "📚"}
                {type === "Post" && "💬"}
                {type === "All" && "🗂️"}
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* History Items */}
        <div className="space-y-3">
          <p className="text-sm font-semibold text-[var(--color-text-muted)]">
            {filteredHistory.length} {filteredHistory.length === 1 ? "item" : "items"}
          </p>

          {filteredHistory.length === 0 ? (
            <div className="rounded-[var(--radius-lg)] border-2 border-dashed border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-12 text-center">
              <div className="text-5xl mb-4">📭</div>
              <h3 className="text-lg font-bold text-[var(--color-text)]">
                No history yet
              </h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                Start exploring guides and community posts!
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredHistory.map((item, index) => {
                const config = typeConfig[item.type];
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="group block rounded-[var(--radius-lg)] border-2 border-[var(--color-border)] bg-white p-4 shadow-sm transition-all hover:border-[var(--color-primary)] hover:shadow-md"
                    style={{
                      animation: "slideUp 0.5s ease-out",
                      animationDelay: `${index * 0.1}s`,
                      animationFillMode: "backwards",
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl text-2xl transition-all group-hover:scale-110"
                        style={{
                          background: `linear-gradient(135deg, ${config.bg}, ${config.bg})`,
                        }}
                      >
                        {config.emoji}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <span
                            className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold"
                            style={{
                              background: `linear-gradient(135deg, ${config.bg}, ${config.bg})`,
                              color: config.color,
                            }}
                          >
                            {config.emoji}
                            {item.type}
                          </span>
                          <span className="caption flex-shrink-0 text-[var(--color-text-muted)]">
                            {item.visited}
                          </span>
                        </div>
                        <h2 className="mt-2 text-base font-bold text-[var(--color-text)]">
                          {item.title}
                        </h2>
                        <p className="caption mt-1 text-[var(--color-text-muted)]">
                          {item.category}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* Clear History */}
        {filteredHistory.length > 0 && (
          <button className="w-full rounded-[var(--radius-lg)] border-2 border-[var(--color-border)] bg-white px-4 py-3 text-sm font-semibold text-[var(--color-text-muted)] transition-all hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]">
            🗑️ Clear all history
          </button>
        )}
      </section>
    </AppShell>
  );
}