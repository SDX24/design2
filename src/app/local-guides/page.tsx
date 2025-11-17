"use client";

import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { guides } from "@/data/guides";
import { useState } from "react";

const regions = ["All regions", "Ontario", "British Columbia", "Quebec", "Alberta"];

const categoryEmojis: Record<string, string> = {
  Money: "💰",
  Housing: "🏠",
  Career: "💼",
  Health: "🏥",
  Legal: "⚖️",
};

export default function LocalGuidesPage() {
  const [selectedRegion, setSelectedRegion] = useState("All regions");
  const localGuides = guides.filter((g) => g.type === "local");

  const filteredGuides =
    selectedRegion === "All regions"
      ? localGuides
      : localGuides.filter((g) => g.region === selectedRegion);

  return (
    <AppShell title="Local Guides">
      <section className="space-y-6 py-4">
        {/* Hero */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] text-3xl shadow-lg">
              📍
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[var(--color-text)]">
                Local Guides
              </h1>
              <p className="text-sm text-[var(--color-text-muted)]">
                Guides tailored to your region
              </p>
            </div>
          </div>
          <p className="text-base leading-relaxed text-[var(--color-text-muted)]">
            Region-specific information about taxes, IDs, healthcare, and more. Select your province to see relevant guides.
          </p>
        </div>

        {/* Region Filter */}
        <div>
          <h3 className="mb-3 text-sm font-semibold text-[var(--color-text)]">
            Filter by region
          </h3>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`flex-shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  selectedRegion === region
                    ? "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white shadow-md"
                    : "bg-[var(--color-bg)] text-[var(--color-text-muted)] hover:bg-[var(--color-primary)]/10"
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredGuides.length === 0 && (
          <div className="rounded-[var(--radius-lg)] border-2 border-dashed border-[var(--color-border)] bg-[var(--color-bg)] px-6 py-12 text-center">
            <div className="text-5xl mb-4">🗺️</div>
            <h3 className="text-lg font-bold text-[var(--color-text)]">
              No guides yet
            </h3>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              {selectedRegion === "All regions"
                ? "Local guides will appear here when available."
                : `No guides for ${selectedRegion} yet.`}
            </p>
            {selectedRegion !== "All regions" && (
              <button
                onClick={() => setSelectedRegion("All regions")}
                className="mt-4 text-sm font-medium text-[var(--color-primary)] hover:underline"
              >
                View all regions
              </button>
            )}
          </div>
        )}

        {/* Guides List */}
        {filteredGuides.length > 0 && (
          <div className="space-y-3">
            <p className="text-sm font-semibold text-[var(--color-text-muted)]">
              {filteredGuides.length} {filteredGuides.length === 1 ? "guide" : "guides"} found
            </p>
            <div className="space-y-3">
              {filteredGuides.map((guide, index) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="group block rounded-[var(--radius-lg)] border-2 border-[var(--color-border)] bg-white p-4 shadow-sm transition-all hover:border-[var(--color-primary)] hover:shadow-md"
                  style={{
                    animation: "slideUp 0.5s ease-out",
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: "backwards",
                  }}
                >
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 text-2xl transition-all group-hover:scale-110">
                      {categoryEmojis[guide.category] || "📄"}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h2 className="text-base font-bold text-[var(--color-text)]">
                          {guide.title}
                        </h2>
                        {guide.region && (
                          <span className="flex-shrink-0 rounded-full bg-[var(--color-primary)]/10 px-3 py-1 text-xs font-semibold text-[var(--color-primary)]">
                            📍 {guide.region}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                        {guide.summary}
                      </p>
                      <div className="mt-2 flex items-center gap-3 text-xs text-[var(--color-text-muted)]">
                        <span>{guide.steps.length} steps</span>
                        <span className="h-1 w-1 rounded-full bg-[var(--color-text-muted)]" />
                        <span className="capitalize">{guide.category}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </AppShell>
  );
}