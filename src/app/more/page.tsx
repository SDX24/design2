"use client";

import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { Card } from "@/components/ui";

export default function MorePage() {
  const helpers = [
    {
      emoji: "🎯",
      title: "Learning Paths",
      description: "Structured courses to master adulting",
      href: "/learning-paths",
      color: "#3A7BD5",
    },
    {
      emoji: "🛠️",
      title: "Tools & Calculators",
      description: "Budget, rent, savings, and more",
      href: "/tools",
      color: "#3A7BD5",
    },
    {
      emoji: "🔍",
      title: "Search",
      description: "Find guides and resources quickly",
      href: "/search",
      color: "#393E46",
    },
    {
      emoji: "📍",
      title: "Local Guides",
      description: "Region-specific information",
      href: "/local-guides",
      color: "#393E46",
    },
    {
      emoji: "📚",
      title: "History",
      description: "Continue where you left off",
      href: "/history",
      color: "#FF6B6B",
    },
  ];

  return (
    <AppShell title="More">
      <section className="space-y-6">
        <div>
          <h1
            className="text-3xl font-bold mb-2"
            style={{ color: "#222831", fontFamily: "JetBrains Mono, monospace" }}
          >
            More Features
          </h1>
          <p
            style={{
              color: "#393E46",
              fontFamily: "IBM Plex Sans, sans-serif",
            }}
          >
            Explore all the tools and resources to help you adult
          </p>
        </div>

        <div className="grid gap-4">
          {helpers.map((helper) => (
            <Link key={helper.href} href={helper.href}>
              <Card
                className="hover:shadow-lg transition-shadow cursor-pointer"
                style={{
                  borderLeft: `4px solid ${helper.color}`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{helper.emoji}</div>
                  <div className="flex-1">
                    <h3
                      className="text-xl font-bold mb-1"
                      style={{
                        color: "#222831",
                        fontFamily: "JetBrains Mono, monospace",
                      }}
                    >
                      {helper.title}
                    </h3>
                    <p
                      className="text-sm"
                      style={{
                        color: "#393E46",
                        fontFamily: "IBM Plex Sans, sans-serif",
                      }}
                    >
                      {helper.description}
                    </p>
                  </div>
                  <div style={{ color: "#3A7BD5", fontSize: "24px" }}>→</div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
