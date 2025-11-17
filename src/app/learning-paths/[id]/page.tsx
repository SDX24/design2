"use client";

import Link from "next/link";
import { learningPaths } from "@/data/learningPaths";
import { guides } from "@/data/guides";
import { GuideCard, Card, AccentButton } from "@/components/ui";
import { useEffect, useState } from "react";
import { notFound } from "next/navigation";

export default function LearningPathDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const path = learningPaths.find((p) => p.id === params.id);
  const [completedGuides, setCompletedGuides] = useState<string[]>([]);
  const [completedMilestones, setCompletedMilestones] = useState<number[]>([]);

  useEffect(() => {
    if (!path) return;

    // Load completed guides from localStorage
    const allCompleted: string[] = [];
    path.guideIds.forEach((guideId) => {
      const guide = guides.find((g) => g.slug === guideId);
      if (guide) {
        const progress = localStorage.getItem(`guide-${guide.slug}`);
        if (progress) {
          const completedSteps = JSON.parse(progress);
          if (completedSteps.length === guide.steps.length) {
            allCompleted.push(guideId);
          }
        }
      }
    });
    setCompletedGuides(allCompleted);

    // Update path progress in localStorage
    localStorage.setItem(
      "learningPathProgress",
      JSON.stringify({
        ...JSON.parse(
          localStorage.getItem("learningPathProgress") || "{}"
        ),
        [path.id]: allCompleted.length,
      })
    );

    // Load completed milestones
    const savedMilestones = localStorage.getItem(
      `path-milestones-${path.id}`
    );
    if (savedMilestones) {
      setCompletedMilestones(JSON.parse(savedMilestones));
    }
  }, [path]);

  if (!path) {
    notFound();
  }

  const pathGuides = guides.filter((g) => path.guideIds.includes(g.slug));
  const progressPercent = Math.round(
    (completedGuides.length / path.guideIds.length) * 100
  );

  const toggleMilestone = (index: number) => {
    const newMilestones = completedMilestones.includes(index)
      ? completedMilestones.filter((i) => i !== index)
      : [...completedMilestones, index];

    setCompletedMilestones(newMilestones);
    localStorage.setItem(
      `path-milestones-${path.id}`,
      JSON.stringify(newMilestones)
    );
  };

  return (
    <div className="min-h-screen bg-neutral-50 pb-24">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <Link
            href="/learning-paths"
            className="text-sm text-accent-600 mb-2 inline-block"
          >
            ← Back to Learning Paths
          </Link>
          <div className="flex items-start gap-3 mb-2">
            <div className="text-5xl">{path.emoji}</div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-neutral-900 mb-1">
                {path.title}
              </h1>
              <p className="text-neutral-600 mb-3">{path.description}</p>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs px-2 py-1 bg-neutral-100 text-neutral-700 rounded-full">
                  {path.difficulty}
                </span>
                <span className="text-xs px-2 py-1 bg-neutral-100 text-neutral-700 rounded-full">
                  {path.estimatedTime}
                </span>
                <span className="text-xs px-2 py-1 bg-neutral-100 text-neutral-700 rounded-full">
                  {path.guideIds.length} guides
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress */}
        <Card>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-neutral-900">Your Progress</h3>
              <span className="text-2xl font-bold text-accent-600">
                {progressPercent}%
              </span>
            </div>
            <div className="h-3 bg-neutral-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-accent-500 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="text-sm text-neutral-600">
              {completedGuides.length} of {path.guideIds.length} guides
              completed
            </p>
          </div>
        </Card>

        {/* Milestones */}
        <div>
          <h2 className="text-lg font-semibold text-neutral-900 mb-3">
            Milestones
          </h2>
          <div className="space-y-2">
            {path.milestones.map((milestone, index) => (
              <button
                key={index}
                onClick={() => toggleMilestone(index)}
                className="w-full text-left"
              >
                <Card variant="interactive">
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded border-2 shrink-0 mt-0.5 flex items-center justify-center transition-colors ${
                        completedMilestones.includes(index)
                          ? "bg-accent-500 border-accent-500"
                          : "border-neutral-300"
                      }`}
                    >
                      {completedMilestones.includes(index) && (
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                    <span
                      className={`text-sm ${
                        completedMilestones.includes(index)
                          ? "text-neutral-500 line-through"
                          : "text-neutral-900"
                      }`}
                    >
                      {milestone}
                    </span>
                  </div>
                </Card>
              </button>
            ))}
          </div>
        </div>

        {/* Guides */}
        <div>
          <h2 className="text-lg font-semibold text-neutral-900 mb-3">
            Guides in this Path
          </h2>
          <div className="space-y-3">
            {pathGuides.map((guide, index) => {
              const isCompleted = completedGuides.includes(guide.slug);
              return (
                <div key={guide.slug} className="relative">
                  {isCompleted && (
                    <div className="absolute -left-2 -top-2 z-10 bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                      ✓
                    </div>
                  )}
                  <GuideCard
                    title={guide.title}
                    summary={guide.summary}
                    category={guide.category}
                    stepCount={guide.steps.length}
                    href={`/guides/${guide.slug}`}
                    emoji={
                      guide.category === "Money"
                        ? "💰"
                        : guide.category === "Housing"
                        ? "🏠"
                        : guide.category === "Jobs"
                        ? "💼"
                        : guide.category === "Taxes"
                        ? "📋"
                        : guide.category === "Education"
                        ? "📚"
                        : guide.category === "Credit"
                        ? "💳"
                        : guide.category === "Documents"
                        ? "📄"
                        : guide.category === "Immigration"
                        ? "🌍"
                        : "🚗"
                    }
                    region={guide.region}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Completion CTA */}
        {progressPercent === 100 && (
          <Card variant="premium">
            <div className="text-center space-y-3">
              <div className="text-5xl">🎉</div>
              <h3 className="text-xl font-bold text-neutral-900">
                Path Complete!
              </h3>
              <p className="text-neutral-600">
                Congratulations on completing the {path.title} learning path.
                You're crushing it!
              </p>
              <Link href="/learning-paths">
                <AccentButton size="lg">Explore More Paths</AccentButton>
              </Link>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
