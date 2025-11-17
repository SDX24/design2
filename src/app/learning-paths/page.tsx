"use client";

import Link from "next/link";
import { learningPaths } from "@/data/learningPaths";
import { Card, SectionHeader } from "@/components/ui";
import { useEffect, useState } from "react";

export default function LearningPathsPage() {
  const [progress, setProgress] = useState<Record<string, number>>({});

  useEffect(() => {
    // Load progress from localStorage
    const savedProgress = localStorage.getItem("learningPathProgress");
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  const getProgressPercentage = (pathId: string, totalGuides: number) => {
    const completed = progress[pathId] || 0;
    return Math.round((completed / totalGuides) * 100);
  };

  return (
    <div className="min-h-screen bg-neutral-50 pb-24">
      <div className="p-6 space-y-6">
        <SectionHeader
          title="Learning Paths"
          subtitle="Guided journeys to master key adulting skills"
        />

        <div className="space-y-4">
          {learningPaths.map((path) => {
            const progressPercent = getProgressPercentage(
              path.id,
              path.guideIds.length
            );

            return (
              <Link key={path.id} href={`/learning-paths/${path.id}`}>
                <Card variant="interactive">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{path.emoji}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="font-semibold text-neutral-900">
                          {path.title}
                        </h3>
                        <span className="text-xs text-neutral-500 shrink-0">
                          {path.estimatedTime}
                        </span>
                      </div>
                      <p className="text-sm text-neutral-600 mb-3 line-clamp-2">
                        {path.description}
                      </p>

                      {/* Progress bar */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-neutral-600">
                            {progress[path.id] || 0} of {path.guideIds.length}{" "}
                            guides
                          </span>
                          <span className="font-medium text-accent-600">
                            {progressPercent}%
                          </span>
                        </div>
                        <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-accent-500 rounded-full transition-all duration-300"
                            style={{ width: `${progressPercent}%` }}
                          />
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex items-center gap-2 mt-3 flex-wrap">
                        <span className="text-xs px-2 py-1 bg-neutral-100 text-neutral-700 rounded-full">
                          {path.difficulty}
                        </span>
                        <span className="text-xs px-2 py-1 bg-neutral-100 text-neutral-700 rounded-full">
                          {path.category}
                        </span>
                        <span className="text-xs px-2 py-1 bg-neutral-100 text-neutral-700 rounded-full">
                          {path.guideIds.length} guides
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
