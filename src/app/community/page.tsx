"use client";

import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { posts } from "@/data/posts";
import { SectionHeader, Card, SubtleTag, AccentButton } from "@/components/ui";
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
              <SectionHeader 
                title="Community" 
                subtitle="Connect, learn, share"
                className="mb-0"
              />
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
              >
                <SubtleTag 
                  variant={selectedTag === tag ? "accent" : "neutral"}
                  className={selectedTag === tag ? "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white shadow-md" : ""}
                >
                  {tag !== "All posts" && tagEmojis[tag]} {tag}
                </SubtleTag>
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
          {filteredPosts.map((post) => {
            const timeAgo = (timestamp: string) => {
              const now = new Date();
              const posted = new Date(timestamp);
              const diffHours = Math.floor(
                (now.getTime() - posted.getTime()) / (1000 * 60 * 60)
              );
              if (diffHours < 1) return "Just now";
              if (diffHours < 24) return `${diffHours}h ago`;
              const diffDays = Math.floor(diffHours / 24);
              if (diffDays === 1) return "1 day ago";
              return `${diffDays} days ago`;
            };

            return (
              <Link key={post.id} href={`/community/${post.id}`} className="block">
                <Card variant="interactive" className="hover:border-[var(--color-primary)]">
                  {/* Post Header */}
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 text-xl">
                      {post.author?.avatar || getEmojiForId(post.id)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <SubtleTag variant="accent">
                            {tagEmojis[post.tag]} {post.tag}
                          </SubtleTag>
                          {post.author && (
                            <span className="text-xs text-[var(--color-text-muted)]">
                              by {post.author.username}
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-[var(--color-text-muted)]">
                          {post.timestamp ? timeAgo(post.timestamp) : "2h ago"}
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
                          {post.replyCount || 0} replies
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="text-base">👍</span>
                          {post.helpfulCount || 0} helpful
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* FAB - New Post Button */}
        <AccentButton
          variant="primary"
          className="fixed bottom-24 right-6 z-10 h-14 w-14 !p-0 text-2xl shadow-lg hover:scale-110 hover:shadow-xl active:scale-95"
          aria-label="Create new post"
        >
          ✍️
        </AccentButton>
      </section>
    </AppShell>
  );
}