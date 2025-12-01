"use client";

import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { Card, AccentButton } from "@/components/ui";
import { useState, useEffect } from "react";
import { guides } from "@/data/guides";

export default function ProfilePage() {
  const [region, setRegion] = useState("Ontario");
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("English");
  const [savedGuides, setSavedGuides] = useState<string[]>([]);
  const [guidesCompleted, setGuidesCompleted] = useState(0);

  useEffect(() => {
    // Load saved guides from localStorage
    const saved = localStorage.getItem("savedGuides");
    if (saved) {
      setSavedGuides(JSON.parse(saved));
    }

    // Count completed guides
    let completed = 0;
    guides.forEach((guide) => {
      const progress = localStorage.getItem(`guide-${guide.slug}`);
      if (progress) {
        const completedSteps = JSON.parse(progress);
        if (completedSteps.length === guide.steps.length) {
          completed++;
        }
      }
    });
    setGuidesCompleted(completed);
  }, []);

  return (
    <AppShell title="Profile">
      <section className="space-y-6">
        {/* Profile Header */}
        <Card>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-3xl text-white font-bold">
              👤
            </div>
            <div>
              <h2
                className="text-2xl font-bold"
                style={{
                  color: "#222831",
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                Adult Learner
              </h2>
              <p style={{ color: "#393E46", fontFamily: "IBM Plex Sans, sans-serif" }}>
                📍 {region} • Learning since Jan 2024
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-200">
            <div>
              <p className="text-2xl font-bold" style={{ color: "#3A7BD5" }}>
                {guidesCompleted}
              </p>
              <p className="text-sm" style={{ color: "#393E46" }}>
                Guides Completed
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold" style={{ color: "#FF6B6B" }}>
                {savedGuides.length}
              </p>
              <p className="text-sm" style={{ color: "#393E46" }}>
                Saved Guides
              </p>
            </div>
          </div>
        </Card>

        {/* History & Recent Activity - HIGH PRIORITY */}
        <Link href="/history">
          <Card 
            className="cursor-pointer transition-all hover:shadow-lg"
            style={{ borderLeft: "4px solid #FF6B6B" }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div 
                  className="flex h-14 w-14 items-center justify-center rounded-xl text-3xl"
                  style={{ 
                    background: "linear-gradient(135deg, rgba(58, 123, 213, 0.1), rgba(255, 107, 107, 0.1))"
                  }}
                >
                  📚
                </div>
                <div>
                  <h3
                    className="text-lg font-bold"
                    style={{
                      color: "#222831",
                      fontFamily: "IBM Plex Sans, sans-serif",
                    }}
                  >
                    View your history
                  </h3>
                  <p
                    className="text-sm mt-1"
                    style={{ color: "#393E46", fontFamily: "IBM Plex Sans, sans-serif" }}
                  >
                    Continue where you left off
                  </p>
                </div>
              </div>
              <div style={{ color: "#3A7BD5", fontSize: "24px" }}>→</div>
            </div>
          </Card>
        </Link>

        {/* Achievements */}
        <div>
          <h3
            className="text-xl font-bold mb-4"
            style={{
              color: "#222831",
              fontFamily: "IBM Plex Sans, sans-serif",
            }}
          >
            🏆 Achievements
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {guidesCompleted >= 1 && (
              <Card className="text-center p-4">
                <div className="text-3xl mb-2">🌱</div>
                <p className="text-xs font-bold" style={{ color: "#222831", fontFamily: "IBM Plex Sans, sans-serif" }}>
                  First Steps
                </p>
              </Card>
            )}
            {guidesCompleted >= 5 && (
              <Card className="text-center p-4">
                <div className="text-3xl mb-2">🚀</div>
                <p className="text-xs font-bold" style={{ color: "#222831", fontFamily: "IBM Plex Sans, sans-serif" }}>
                  Quick Learner
                </p>
              </Card>
            )}
            {guidesCompleted >= 10 && (
              <Card className="text-center p-4">
                <div className="text-3xl mb-2">⭐</div>
                <p className="text-xs font-bold" style={{ color: "#222831", fontFamily: "IBM Plex Sans, sans-serif" }}>
                  Adult Master
                </p>
              </Card>
            )}
            {savedGuides.length >= 5 && (
              <Card className="text-center p-4">
                <div className="text-3xl mb-2">📚</div>
                <p className="text-xs font-bold" style={{ color: "#222831", fontFamily: "IBM Plex Sans, sans-serif" }}>
                  Bookworm
                </p>
              </Card>
            )}
            {guidesCompleted === 0 && savedGuides.length === 0 && (
              <Card className="text-center p-4 col-span-3">
                <div className="text-3xl mb-2">🎯</div>
                <p className="text-xs" style={{ color: "#393E46", fontFamily: "IBM Plex Sans, sans-serif" }}>
                  Complete guides to unlock achievements
                </p>
              </Card>
            )}
          </div>
        </div>

        {/* Saved Guides */}
        <div>
          <h3
            className="text-2xl font-bold mb-4"
            style={{
              color: "#222831",
              fontFamily: "JetBrains Mono, monospace",
            }}
          >
            💾 Saved Guides
          </h3>
          {savedGuides.length > 0 ? (
            <div className="space-y-3">
              {savedGuides.slice(0, 5).map((slug) => {
                const guide = guides.find((g) => g.slug === slug);
                return guide ? (
                  <Link key={slug} href={`/guides/${slug}`}>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div style={{ color: "#FF6B6B", fontSize: "24px" }}>
                          ❤️
                        </div>
                        <div className="flex-1">
                          <h4
                            className="font-bold"
                            style={{
                              color: "#222831",
                              fontFamily: "JetBrains Mono, monospace",
                            }}
                          >
                            {guide.title}
                          </h4>
                          <p
                            className="text-sm"
                            style={{ color: "#393E46" }}
                          >
                            {guide.category}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ) : null;
              })}
            </div>
          ) : (
            <Card>
              <p
                className="text-center py-4"
                style={{ color: "#393E46" }}
              >
                No saved guides yet. Save guides to access them quickly!
              </p>
            </Card>
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