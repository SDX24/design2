import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { guides } from "@/data/guides";

export default function GuidesPage() {
  const coreGuides = guides.filter((g) => g.type === "core");

  return (
    <AppShell title="Guides">
      <section className="space-y-3">
        <p className="text-sm text-slate-600">
          Step-by-step guides for common adulting tasks.
        </p>
        <div className="space-y-2">
          {coreGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="block rounded-xl border border-slate-200 px-3 py-3 hover:border-[var(--color-primary)]"
            >
              <h2 className="text-sm font-semibold">{guide.title}</h2>
              <p className="mt-1 text-xs text-slate-600">{guide.summary}</p>
              <p className="mt-1 text-[11px] text-slate-500">
                Category: {guide.category}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </AppShell>
  );
}