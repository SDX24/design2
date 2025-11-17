"use client";

import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { AccentButton } from "@/components/ui";
import { useState } from "react";

export default function ProfilePage() {
  const [region, setRegion] = useState("Ontario");
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("English");

  const stats = [
    { label: "Guides completed", value: 8, emoji: "✅" },
    { label: "Community posts", value: 3, emoji: "💬" },
    { label: "Days streak", value: 12, emoji: "🔥" },
  ];

  const savedGuides = [
    { title: "Budgeting 101", category: "Money", emoji: "💰" },
    { title: "Renting Checklist", category: "Housing", emoji: "🏠" },
  ];

  return (
    <AppShell title="Profile">
      <section className="space-y-6 py-4">
        {/* Profile Header */}
        <div className="rounded-[var(--radius-lg)] border-2 border-[var(--color-border)] bg-gradient-to-br from-[var(--color-primary)]/5 to-[var(--color-accent)]/5 p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] text-4xl shadow-lg">
              👤
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[var(--color-text)]">
                Adult Learner
              </h1>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                📍 {region} • Learning since Jan 2024
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="rounded-xl bg-white p-3 text-center shadow-sm"
                style={{
                  animation: "slideUp 0.5s ease-out",
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "backwards",
                }}
              >
                <div className="text-2xl">{stat.emoji}</div>
                <p className="mt-1 text-lg font-bold text-[var(--color-primary)]">
                  {stat.value}
                </p>
                <p className="caption mt-0.5 text-[var(--color-text-muted)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Saved Guides */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-[var(--color-text)]">
            📚 Saved Guides
          </h2>
          {savedGuides.length === 0 ? (
            <div className="rounded-[var(--radius-lg)] border-2 border-dashed border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-8 text-center">
              <div className="text-4xl mb-2">🔖</div>
              <p className="text-sm text-[var(--color-text-muted)]">
                No saved guides yet
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              {savedGuides.map((guide, index) => (
                <div
                  key={guide.title}
                  className="flex items-center gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-3 shadow-sm transition-all hover:border-[var(--color-primary)] hover:shadow-md"
                  style={{
                    animation: "slideUp 0.5s ease-out",
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: "backwards",
                  }}
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 text-xl">
                    {guide.emoji}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-[var(--color-text)]">
                      {guide.title}
                    </p>
                    <p className="caption text-[var(--color-text-muted)]">
                      {guide.category}
                    </p>
                  </div>
                  <button className="text-xl transition-transform hover:scale-110">
                    🗑️
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Settings */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-[var(--color-text)]">
            ⚙️ Settings
          </h2>

          {/* Region */}
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-4 shadow-sm">
            <label className="block text-sm font-semibold text-[var(--color-text)]">
              📍 Your region
            </label>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="mt-2 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm text-[var(--color-text)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20"
            >
              <option>Ontario</option>
              <option>British Columbia</option>
              <option>Quebec</option>
              <option>Alberta</option>
            </select>
          </div>

          {/* Language */}
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-4 shadow-sm">
            <label className="block text-sm font-semibold text-[var(--color-text)]">
              🌐 Language
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="mt-2 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm text-[var(--color-text)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20"
            >
              <option>English</option>
              <option>Français</option>
            </select>
          </div>

          {/* Notifications */}
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-[var(--color-text)]">
                  🔔 Notifications
                </p>
                <p className="caption mt-1 text-[var(--color-text-muted)]">
                  Get updates about new guides
                </p>
              </div>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`relative h-8 w-14 rounded-full transition-colors ${
                  notifications
                    ? "bg-[var(--color-primary)]"
                    : "bg-[var(--color-border)]"
                }`}
              >
                <span
                  className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow-sm transition-all ${
                    notifications ? "right-1" : "left-1"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Auth Actions */}
          <Link href="/auth/signin" className="block">
            <AccentButton variant="primary" size="lg" className="w-full">
              🔐 Sign in to save progress
            </AccentButton>
          </Link>
          
          <button className="w-full rounded-[var(--radius-lg)] border-2 border-[var(--color-accent)] bg-white px-4 py-3 text-sm font-semibold text-[var(--color-accent)] transition-all hover:bg-[var(--color-accent)] hover:text-white">
            🚪 Sign out
          </button>
        </div>

        {/* Achievement Badges */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-[var(--color-text)]">
            🏆 Achievements
          </h2>
          <div className="grid grid-cols-4 gap-3">
            {["🎯", "⭐", "🚀", "💎", "🎓", "🔥", "💪", "🌟"].map((emoji, i) => (
              <div
                key={i}
                className="flex aspect-square items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 text-3xl shadow-sm transition-all hover:scale-110"
                style={{
                  animation: "fadeIn 0.6s ease-out",
                  animationDelay: `${i * 0.05}s`,
                  animationFillMode: "backwards",
                }}
              >
                {emoji}
              </div>
            ))}
          </div>
        </div>
      </section>
    </AppShell>
  );
}