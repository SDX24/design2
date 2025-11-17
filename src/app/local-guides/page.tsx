"use client";

import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { guides } from "@/data/guides";
import { SectionHeader, GuideCard, SubtleTag, Card } from "@/components/ui";
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
              <SectionHeader 
                title="Local Guides" 
                subtitle="Guides tailored to your region"
                className="mb-0"
              />
            </div>
          </div>
          <p className="text-base leading-relaxed text-[var(--color-text-muted)]">
            Region-specific information about taxes, IDs, healthcare, and more. Select your province to see relevant guides.
          </p>
        </div>

        {/* Region Filter */}
        <div>
          <h3 
            className="mb-3 text-sm font-semibold"
            style={{ color: '#222831' }}
          >
            Filter by region
          </h3>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
              >
                <SubtleTag 
                  variant={selectedRegion === region ? "primary" : "neutral"}
                  className={selectedRegion === region ? "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] shadow-md" : ""}
                  style={selectedRegion === region ? { color: '#000000' } : undefined}
                >
                  {region}
                </SubtleTag>
              </button>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredGuides.length === 0 && (
          <Card className="border-2 border-dashed text-center py-8">
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
          </Card>
        )}

        {/* Guides List */}
        {filteredGuides.length > 0 && (
          <div className="space-y-3">
            <p className="text-sm font-semibold text-[var(--color-text-muted)]">
              {filteredGuides.length} {filteredGuides.length === 1 ? "guide" : "guides"} found
            </p>
            <div className="space-y-3">
              {filteredGuides.map((guide) => (
                <GuideCard
                  key={guide.slug}
                  title={guide.title}
                  summary={guide.summary}
                  category={guide.category}
                  emoji={categoryEmojis[guide.category] || "📄"}
                  href={`/guides/${guide.slug}`}
                  stepCount={guide.steps.length}
                  region={guide.region}
                />
              ))}
            </div>
          </div>
        )}
      </section>
    </AppShell>
  );
}