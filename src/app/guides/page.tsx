import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { guides } from "@/data/guides";
import { SectionHeader, GuideCard, SubtleTag } from "@/components/ui";

const categoryEmojis: Record<string, string> = {
  Money: "💰",
  Housing: "🏠",
  Career: "💼",
  Health: "🏥",
  Legal: "⚖️",
};

export default function GuidesPage() {
  const coreGuides = guides.filter((g) => g.type === "core");
  const categories = Array.from(new Set(coreGuides.map((g) => g.category)));

  return (
    <AppShell title="Guides">
      <div className="space-y-6 py-4">
        {/* Header */}
        <SectionHeader 
          title="Step-by-step guides" 
          subtitle="Clear, actionable instructions for essential adult life tasks"
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2">
          <SubtleTag variant="primary">All guides</SubtleTag>
          {categories.map((cat) => (
            <SubtleTag key={cat} variant="neutral">
              {categoryEmojis[cat] || "📚"} {cat}
            </SubtleTag>
          ))}
        </div>

        {/* Guide Cards */}
        <div className="space-y-3">
          {coreGuides.map((guide) => (
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
        </div>
      </div>
    </AppShell>
  );
}