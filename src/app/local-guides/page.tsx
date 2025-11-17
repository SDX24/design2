import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { guides } from "@/data/guides";

export default function LocalGuidesPage() {
  const localGuides = guides.filter((g) => g.type === "local");

  return (
    <AppShell title="Local Guides">
      <section className="space-y-3">
        <p className="text-sm text-slate-600">
          Guides tailored to your region, like taxes and IDs.
        </p>
        {localGuides.length === 0 && (
          <p className="text-xs text-slate-500">
            No local guides yet. They will appear here when available.
          </p>
        )}
        <div className="space-y-2">
          {localGuides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="block rounded-xl border border-slate-200 px-3 py-3 hover:border-[var(--color-primary)]"
            >
              <h2 className="text-sm font-semibold">{guide.title}</h2>
              <p className="mt-1 text-xs text-slate-600">{guide.summary}</p>
              {guide.region && (
                <p className="mt-1 text-[11px] text-slate-500">
                  Region: {guide.region}
                </p>
              )}
            </Link>
          ))}
        </div>
      </section>
    </AppShell>
  );
}