import Link from "next/link";
import { AppShell } from "@/components/AppShell";

const dummyHistory = [
  {
    id: "budgeting-101",
    title: "Budgeting 101",
    type: "Guide",
    href: "/guides/budgeting-101",
    visited: "Today · 10:15",
  },
  {
    id: "post-1",
    title: "What should I check before signing my first lease?",
    type: "Post",
    href: "/community/1",
    visited: "Yesterday · 21:03",
  },
];

export default function HistoryPage() {
  return (
    <AppShell title="History">
      <section className="space-y-3">
        <p className="text-sm text-slate-600">
          Recently viewed guides and community posts.
        </p>
        <div className="space-y-2">
          {dummyHistory.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="flex flex-col rounded-xl border border-slate-200 px-3 py-2 text-sm hover:border-[var(--color-primary)]"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">
                  {item.type}
                </span>
                <span className="text-[11px] text-slate-400">
                  {item.visited}
                </span>
              </div>
              <p className="mt-1 text-sm">{item.title}</p>
            </Link>
          ))}
        </div>
      </section>
    </AppShell>
  );
}