"use client";

import { notFound, useRouter } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { guides } from "@/data/guides";
import { useState } from "react";

interface GuidePageProps {
  params: { slug: string };
}

const categoryEmojis: Record<string, string> = {
  Money: "💰",
  Housing: "🏠",
  Career: "💼",
  Health: "🏥",
  Legal: "⚖️",
};

export default function GuidePage({ params }: GuidePageProps) {
  const router = useRouter();
  const guide = guides.find((g) => g.slug === params.slug);
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());

  if (!guide) return notFound();

  const toggleStep = (stepId: string) => {
    setCompletedSteps((prev) => {
      const next = new Set(prev);
      if (next.has(stepId)) {
        next.delete(stepId);
      } else {
        next.add(stepId);
      }
      return next;
    });
  };

  const progress = (completedSteps.size / guide.steps.length) * 100;

  return (
    <AppShell 
      title={guide.title}
      headerAction={
        <button
          onClick={() => router.back()}
          className="text-sm font-medium text-[var(--color-primary)] transition-colors hover:text-[var(--color-accent)]"
        >
          ← Back
        </button>
      }
    >
      <article className="space-y-6 py-4">
        {/* Hero Section */}
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] text-3xl shadow-lg">
              {categoryEmojis[guide.category] || "📚"}
            </div>
            <div className="flex-1">
              <span className="label-uppercase text-[var(--color-text-muted)]">
                {guide.category} Guide
              </span>
              <h1 className="mt-1 text-2xl font-bold text-[var(--color-text)]">
                {guide.title}
              </h1>
            </div>
          </div>
          <p className="text-base leading-relaxed text-[var(--color-text-muted)]">
            {guide.summary}
          </p>
        </div>

        {/* Progress Bar */}
        {completedSteps.size > 0 && (
          <div className="rounded-[var(--radius-lg)] bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-accent)]/10 p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-[var(--color-text)]">
                Your Progress
              </span>
              <span className="text-sm font-bold text-[var(--color-primary)]">
                {completedSteps.size}/{guide.steps.length} completed
              </span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-white/50">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Steps */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[var(--color-text)]">
            Step-by-step guide
          </h2>
          <ol className="space-y-3">
            {guide.steps.map((step, index) => {
              const isCompleted = completedSteps.has(step.id);
              return (
                <li
                  key={step.id}
                  className={`group rounded-[var(--radius-lg)] border-2 p-4 shadow-sm transition-all ${
                    isCompleted
                      ? "border-[var(--color-primary)] bg-[var(--color-primary)]/5"
                      : "border-[var(--color-border)] bg-white hover:border-[var(--color-primary)]/50 hover:shadow-md"
                  }`}
                >
                  <div className="flex gap-4">
                    <button
                      onClick={() => toggleStep(step.id)}
                      className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-base font-bold transition-all ${
                        isCompleted
                          ? "bg-[var(--color-primary)] text-white shadow-md"
                          : "bg-[var(--color-primary)]/10 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)]/20"
                      }`}
                    >
                      {isCompleted ? "✓" : index + 1}
                    </button>
                    <div className="flex-1">
                      <h3 className={`text-base font-semibold ${
                        isCompleted
                          ? "text-[var(--color-primary)] line-through"
                          : "text-[var(--color-text)]"
                      }`}>
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>

        {/* Completion CTA */}
        {completedSteps.size === guide.steps.length && (
          <div className="animate-slideUp rounded-[var(--radius-lg)] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] p-6 text-center text-white shadow-lg">
            <div className="text-4xl mb-3">🎉</div>
            <h3 className="text-xl font-bold">Congratulations!</h3>
            <p className="mt-2 text-sm opacity-90">
              You've completed this guide. Keep learning!
            </p>
            <button
              onClick={() => router.push("/guides")}
              className="mt-4 rounded-full bg-white px-6 py-3 text-base font-semibold text-[var(--color-primary)] transition-all hover:shadow-lg hover:scale-105"
            >
              Explore more guides
            </button>
          </div>
        )}
      </article>
    </AppShell>
  );
}