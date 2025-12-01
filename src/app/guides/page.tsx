"use client";

import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { guides } from "@/data/guides";
import { SectionHeader, GuideCard, SubtleTag } from "@/components/ui";
import { useState, useEffect } from "react";

const categoryEmojis: Record<string, string> = {
  Money: "💰",
  Housing: "🏠",
  Career: "💼",
  Health: "🏥",
  Legal: "⚖️",
};

export default function GuidesPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [savedGuides, setSavedGuides] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("savedGuides");
    if (saved) {
      setSavedGuides(JSON.parse(saved));
    }
  }, []);

  const coreGuides = guides.filter((g) => g.type === "core");
  const categories = Array.from(new Set(coreGuides.map((g) => g.category)));

  // Filter guides based on selection
  const filteredGuides = selectedFilter === "saved" 
    ? coreGuides.filter((g) => savedGuides.includes(g.slug))
    : selectedFilter === "all"
    ? coreGuides
    : coreGuides.filter((g) => g.category === selectedFilter);

  return (
    <AppShell title="Guides">
      <div className="space-y-6 py-4">
        {/* Header */}
        <SectionHeader 
          title="Step-by-step guides" 
          subtitle="Clear, actionable instructions for essential adult life tasks"
        />

        {/* Saved Guides Section - High Priority */}
        {savedGuides.length > 0 && (
          <div 
            className="rounded-[16px] border-2 p-4"
            style={{ 
              borderColor: "#FF6B6B",
              backgroundColor: "rgba(255, 107, 107, 0.05)"
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 
                className="text-lg font-semibold"
                style={{ color: "#222831", fontFamily: "IBM Plex Sans, sans-serif" }}
              >
                ⭐ Your saved guides ({savedGuides.length})
              </h3>
              <button
                onClick={() => setSelectedFilter("saved")}
                className="text-sm font-medium px-3 py-1 rounded-full transition-colors"
                style={{ 
                  color: selectedFilter === "saved" ? "#FFFFFF" : "#FF6B6B",
                  backgroundColor: selectedFilter === "saved" ? "#FF6B6B" : "transparent",
                  border: selectedFilter === "saved" ? "none" : "2px solid #FF6B6B",
                  fontFamily: "IBM Plex Sans, sans-serif"
                }}
              >
                {selectedFilter === "saved" ? "Viewing saved" : "View all saved"}
              </button>
            </div>
            <p 
              className="text-sm"
              style={{ color: "#393E46", fontFamily: "IBM Plex Sans, sans-serif" }}
            >
              Quick access to your favorite guides
            </p>
          </div>
        )}

        {/* Category Filter Pills */}
        <div>
          <h4 
            className="text-sm font-semibold mb-3"
            style={{ color: "#393E46", fontFamily: "IBM Plex Sans, sans-serif" }}
          >
            Filter by category
          </h4>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedFilter("all")}
              className="transition-all"
            >
              <SubtleTag variant={selectedFilter === "all" ? "primary" : "neutral"}>
                All guides
              </SubtleTag>
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className="transition-all"
              >
                <SubtleTag variant={selectedFilter === cat ? "primary" : "neutral"}>
                  {categoryEmojis[cat] || "📚"} {cat}
                </SubtleTag>
              </button>
            ))}
          </div>
        </div>

        {/* Guide Cards */}
        <div className="space-y-3">
          {filteredGuides.length === 0 ? (
            <div 
              className="text-center py-12 rounded-[16px] border-2 border-dashed"
              style={{ borderColor: "#E3E3E3", backgroundColor: "#F5F5F5" }}
            >
              <div className="text-5xl mb-3">📭</div>
              <p 
                className="text-lg font-semibold"
                style={{ color: "#222831", fontFamily: "IBM Plex Sans, sans-serif" }}
              >
                No guides found
              </p>
              <p 
                className="text-sm mt-2"
                style={{ color: "#393E46", fontFamily: "IBM Plex Sans, sans-serif" }}
              >
                {selectedFilter === "saved" ? "Save some guides to see them here!" : "Try a different filter"}
              </p>
            </div>
          ) : (
            <>
              <p 
                className="text-sm font-medium"
                style={{ color: "#393E46", fontFamily: "IBM Plex Sans, sans-serif" }}
              >
                {filteredGuides.length} {filteredGuides.length === 1 ? "guide" : "guides"}
              </p>
              {filteredGuides.map((guide) => (
                <GuideCard
                  key={guide.slug}
                  title={guide.title}
                  summary={guide.summary}
                  category={guide.category}
                  emoji={categoryEmojis[guide.category] || "📚"}
                  href={`/guides/${guide.slug}`}
                  stepCount={guide.steps.length}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </AppShell>
  );
}