import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { Card, SectionHeader } from "@/components/ui";

const tools = [
  {
    id: "budget",
    title: "Budget Planner",
    description: "Track your income and expenses to stay on top of your finances.",
    emoji: "💰",
    href: "/tools/budget",
  },
  {
    id: "rent-calculator",
    title: "Rent Calculator",
    description: "Calculate how much rent you can afford based on the 30% rule.",
    emoji: "🏠",
    href: "/tools/rent-calculator",
  },
  {
    id: "subscriptions",
    title: "Subscriptions Tracker",
    description: "Keep track of all your monthly subscriptions and recurring costs.",
    emoji: "📱",
    href: "/tools/subscriptions",
  },
  {
    id: "savings",
    title: "Savings Goal Tracker",
    description: "Set savings goals and track your progress toward them.",
    emoji: "🎯",
    href: "/tools/savings",
  },
  {
    id: "packing",
    title: "Packing Lists",
    description: "Customizable checklists for moving, travel, and campus packing.",
    emoji: "✈️",
    href: "/tools/packing",
  },
];

export default function ToolsPage() {
  return (
    <AppShell title="Tools">
      <section className="space-y-6 py-4">
        <SectionHeader
          title="Tools"
          subtitle="Practical calculators and trackers to help you adult"
        />

        <div className="grid gap-4">
          {tools.map((tool) => (
            <Link key={tool.id} href={tool.href}>
              <Card variant="interactive">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{tool.emoji}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-neutral-900 mb-1">
                      {tool.title}
                    </h3>
                    <p className="text-sm text-neutral-600">
                      {tool.description}
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 text-neutral-400 shrink-0 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </AppShell>
  );
}
