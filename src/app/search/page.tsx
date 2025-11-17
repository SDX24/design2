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
      <div className="space-y-6">
        <div className="space-y-3">
          <label className="text-lg font-semibold text-[var(--color-text)]" htmlFor="search">
            Search guides and community
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xl">
              🔍
            </div>
            <input
              id="search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try 'budget', 'renting', or 'taxes'"
              autoFocus
              className="w-full rounded-[var(--radius-md)] border-2 border-[var(--color-border)] bg-white px-12 py-4 text-base shadow-sm transition-all placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:shadow-md focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-lg text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
          <p className="caption">
            Results update as you type. This is a prototype with sample data.
          </p>
        </div>

        {!trimmedQuery && (
          <div className="rounded-[var(--radius-md)] bg-[var(--color-bg-light)] px-6 py-8 text-center">
            <div className="mb-3 text-4xl">🔎</div>
            <p className="text-base text-[var(--color-text-muted)]">
              Start typing to search for guides or community posts
            </p>
          </div>
        )}

        {trimmedQuery && !hasResults && (
          <div className="rounded-[var(--radius-md)] bg-[var(--color-bg-light)] px-6 py-8 text-center">
            <div className="mb-3 text-4xl">😔</div>
            <p className="text-base text-[var(--color-text)]">
              No results for <strong>"{query}"</strong>
            </p>
            <p className="mt-2 caption">
              Try another term like "budget", "rent", or "taxes"
            </p>
          </div>
        )}

        {guideResults.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-[var(--color-text)]">
              Guides ({guideResults.length})
            </h2>
            <div className="space-y-2">
              {guideResults.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="group block rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white px-4 py-3 shadow-sm transition-all hover:border-[var(--color-primary)] hover:shadow-md"
                >
                  <p className="label-uppercase text-[var(--color-text-muted)]">
                    📚 Guide · {guide.category}
                  </p>
                  <p className="mt-1 text-base font-semibold text-[var(--color-text)]">
                    {guide.title}
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    {guide.summary}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {postResults.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-[var(--color-text)]">
              Community posts ({postResults.length})
            </h2>
            <div className="space-y-2">
              {postResults.map((post) => (
                <Link
                  key={post.id}
                  href={`/community/${post.id}`}
                  className="group block rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white px-4 py-3 shadow-sm transition-all hover:border-[var(--color-primary)] hover:shadow-md"
                >
                  <p className="label-uppercase text-[var(--color-accent)]">
                    {post.tag}
                  </p>
                  <p className="mt-1 text-base font-semibold text-[var(--color-text)]">
                    {post.title}
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    {post.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </AppShell>
  );
}