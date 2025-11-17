import { notFound } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { guides } from "@/data/guides";

interface GuidePageProps {
  params: { slug: string };
}

export default function GuidePage({ params }: GuidePageProps) {
  const guide = guides.find((g) => g.slug === params.slug);

  if (!guide) return notFound();

  return (
    <AppShell title={guide.title}>
      <article className="space-y-4">
        <p className="text-sm text-slate-600">{guide.summary}</p>

        <section className="space-y-2">
          <h2 className="text-sm font-semibold">Steps</h2>
          <ol className="space-y-2">
            {guide.steps.map((step, index) => (
              <li
                key={step.id}
                className="flex gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm"
              >
                <span className="mt-0.5 h-6 w-6 flex-shrink-0 rounded-full bg-[var(--color-primary)]/10 text-center text-xs font-semibold text-[var(--color-primary)]">
                  {index + 1}
                </span>
                <div>
                  <p className="font-medium">{step.title}</p>
                  <p className="text-xs text-slate-600">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </article>
    </AppShell>
  );
}