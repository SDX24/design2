"use client";

import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { posts } from "@/data/posts";
import { useState } from "react";

const allTags = ["All posts", ...Array.from(new Set(posts.map((p) => p.tag)))];

const tagEmojis: Record<string, string> = {
  Question: "❓",
  Advice: "💡",
  Story: "📖",
  Review: "⭐",
};

// Simple hash for consistent emoji avatars
const getEmojiForId = (id: string) => {
  const emojis = ["🧑", "👩", "👨", "🧔", "👱", "🧓"];
  const hash = id.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return emojis[hash % emojis.length];
};

export default function CommunityPage() {
  const [selectedTag, setSelectedTag] = useState("All posts");

  const filteredPosts =
    selectedTag === "All posts"
      ? posts
      : posts.filter((p) => p.tag === selectedTag);

  return (
    <AppShell title="Community">
      <section className="space-y-6 py-4">
        {/* Hero */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] text-3xl shadow-lg">
              💬
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[var(--color-text)]">
                Community
              </h1>
              <p className="text-sm text-[var(--color-text-muted)]">
                Connect, learn, share
              </p>
            </div>
          </div>
          <p className="text-base leading-relaxed text-[var(--color-text-muted)]">
            See what others are asking and share your own experience. Everyone here is learning to adult together!
          </p>
        </div>

        {/* Tag Filter */}
        <div>
          <h3 className="mb-3 text-sm font-semibold text-[var(--color-text)]">
            Filter by topic
          </h3>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`flex flex-shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  selectedTag === tag
                    ? "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white shadow-md"
                    : "bg-[var(--color-bg)] text-[var(--color-text-muted)] hover:bg-[var(--color-primary)]/10"
                }`}
              >
                {tag !== "All posts" && tagEmojis[tag]}
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Post Count */}
        {filteredPosts.length > 0 && (
          <p className="text-sm font-semibold text-[var(--color-text-muted)]">
            {filteredPosts.length} {filteredPosts.length === 1 ? "post" : "posts"}
          </p>
        )}

        {/* Posts List */}
        <div className="space-y-3">
          {filteredPosts.map((post, index) => (
            <Link
              key={post.id}
              href={`/community/${post.id}`}
              className="group block rounded-[var(--radius-lg)] border-2 border-[var(--color-border)] bg-white p-4 shadow-sm transition-all hover:border-[var(--color-primary)] hover:shadow-md"
              style={{
                animation: "slideUp 0.5s ease-out",
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "backwards",
              }}
            >
              {/* Post Header */}
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 text-xl">
                  {getEmojiForId(post.id)}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <span className="flex items-center gap-1.5 rounded-full bg-[var(--color-accent)]/10 px-3 py-1 text-xs font-semibold text-[var(--color-accent)]">
                      {tagEmojis[post.tag]}
                      {post.tag}
                    </span>
                    <span className="text-xs text-[var(--color-text-muted)]">
                      2h ago
                    </span>
                  </div>
                  <h2 className="mt-2 text-base font-bold text-[var(--color-text)]">
                    {post.title}
                  </h2>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    {post.excerpt}
                  </p>
                  {/* Engagement */}
                  <div className="mt-3 flex items-center gap-4 text-xs text-[var(--color-text-muted)]">
                    <span className="flex items-center gap-1">
                      <span className="text-base">💬</span>
                      {Math.floor(Math.random() * 20) + 1} replies
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-base">👍</span>
                      {Math.floor(Math.random() * 50) + 5} helpful
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* FAB - New Post Button */}
        <button
          className="fixed bottom-24 right-6 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-2xl text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl active:scale-95"
          aria-label="Create new post"
        >
          ✍️
        </button>
      </section>
    </AppShell>
  );
}