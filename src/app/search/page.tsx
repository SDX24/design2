"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { guides } from "@/data/guides";
import { posts } from "@/data/posts";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const trimmedQuery = query.trim().toLowerCase();

  const { guideResults, postResults } = useMemo(() => {
    if (!trimmedQuery) {
      return { guideResults: [], postResults: [] };
    }

    const guideResults = guides.filter((g) => {
      return (
        g.title.toLowerCase().includes(trimmedQuery) ||
        g.summary.toLowerCase().includes(trimmedQuery) ||
        g.category.toLowerCase().includes(trimmedQuery)
      );
    });

    const postResults = posts.filter((p) => {
      return (
        p.title.toLowerCase().includes(trimmedQuery) ||
        p.excerpt.toLowerCase().includes(trimmedQuery) ||
        p.tag.toLowerCase().includes(trimmedQuery)
      );
    });

    return { guideResults, postResults };
  }, [trimmedQuery]);

  const hasResults = guideResults.length > 0 || postResults.length > 0;

  return (
    <AppShell title="Search">
      <section className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium" htmlFor="search">
            Search guides and community
          </label>
          <input
            id="search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Try 'budget', 'renting', or 'taxes'"
            className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm focus:border-[var(--color-primary)] focus:outline-none"
          />
          <p className="text-xs text-slate-500">
            Results update as you type. This is a prototype; results are from sample data.
          </p>
        </div>

        {!trimmedQuery && (
          <p className="text-xs text-slate-500">
            Start typing to search for guides or community posts.
          </p>
        )}

        {trimmedQuery && !hasResults && (
          <p className="text-xs text-slate-500">
            No results for "{query}". Try another term like "budget" or "rent".
          </p>
        )}

        {guideResults.length > 0 && (
          <section className="space-y-2">
            <h2 className="text-sm font-semibold">Guides</h2>
            <div className="space-y-2">
              {guideResults.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="block rounded-xl border border-slate-200 px-3 py-2 text-sm hover:border-[var(--color-primary)]"
                >
                  <p className="text-[11px] text-slate-500">Guide · {guide.category}</p>
                  <p className="mt-1 text-sm font-medium">{guide.title}</p>
                  <p className="mt-1 text-xs text-slate-600">{guide.summary}</p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {postResults.length > 0 && (
          <section className="space-y-2">
            <h2 className="text-sm font-semibold">Community posts</h2>
            <div className="space-y-2">
              {postResults.map((post) => (
                <Link
                  key={post.id}
                  href={`/community/${post.id}`}
                  className="block rounded-xl border border-slate-200 px-3 py-2 text-sm hover:border-[var(--color-primary)]"
                >
                  <p className="text-[11px] text-[var(--color-accent)]">
                    {post.tag}
                  </p>
                  <p className="mt-1 text-sm font-medium">{post.title}</p>
                  <p className="mt-1 text-xs text-slate-600">{post.excerpt}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </section>
    </AppShell>
  );
}