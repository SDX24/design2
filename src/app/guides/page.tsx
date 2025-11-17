import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { guides } from "@/data/guides";

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
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-[var(--color-text)]">
            Step-by-step guides
          </h2>
          <p className="text-base text-[var(--color-text-muted)]">
            Clear, actionable instructions for essential adult life tasks
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2">
          <button className="rounded-full bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:shadow-md">
            All guides
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className="rounded-full border-2 border-[var(--color-border)] bg-white px-4 py-2 text-sm font-medium text-[var(--color-text)] transition-all hover:border-[var(--color-primary)] hover:shadow-sm"
            >
              {categoryEmojis[cat] || "📚"} {cat}
            </button>
          ))}
        </div>

        {/* Guide Cards */}
        <div className="space-y-3">
          {coreGuides.map((guide, index) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group block animate-slideUp rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-5 shadow-sm transition-all hover:border-[var(--color-primary)] hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 text-2xl">
                  {categoryEmojis[guide.category] || "📚"}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-[var(--color-text)] transition-colors group-hover:text-[var(--color-primary)]">
                      {guide.title}
                    </h3>
                  </div>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    {guide.summary}
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="label-uppercase text-[var(--color-text-muted)]">
                      {guide.category}
                    </span>
                    <span className="text-xs text-[var(--color-text-muted)]">
                      • {guide.steps.length} steps
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0 text-xl text-[var(--color-text-muted)] transition-transform group-hover:translate-x-1">
                  →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </AppShell>
  );
}