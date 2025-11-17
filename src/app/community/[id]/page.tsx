"use client";

import { notFound, useRouter } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { posts } from "@/data/posts";
import { useState } from "react";

interface PostPageProps {
  params: { id: string };
}

const tagEmojis: Record<string, string> = {
  Question: "❓",
  Advice: "💡",
  Story: "📖",
  Review: "⭐",
};

const getEmojiForId = (id: string) => {
  const emojis = ["🧑", "👩", "👨", "🧔", "👱", "🧓"];
  const hash = id.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return emojis[hash % emojis.length];
};

// Mock replies data
const mockReplies = [
  {
    id: "r1",
    author: "user2",
    content: "Great question! I went through this recently and found it really helpful to...",
    timestamp: "1h ago",
    helpful: 12,
  },
  {
    id: "r2",
    author: "user3",
    content: "Adding to the above - don't forget to check your local resources too!",
    timestamp: "45m ago",
    helpful: 8,
  },
];

export default function PostPage({ params }: PostPageProps) {
  const router = useRouter();
  const post = posts.find((p) => p.id === params.id);
  const [replyText, setReplyText] = useState("");
  const [isLiked, setIsLiked] = useState(false);

  if (!post) return notFound();

  const replies = post.replies || mockReplies;

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
    <AppShell 
      title="Community"
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
        {/* Original Post */}
        <div className="rounded-[var(--radius-lg)] border-2 border-[var(--color-border)] bg-white p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 text-2xl">
              {getEmojiForId(post.id)}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-[var(--color-text)]">
                  {post.author?.username || "Anonymous User"}
                </span>
                <span className="text-xs text-[var(--color-text-muted)]">
                  {post.timestamp ? timeAgo(post.timestamp) : "2h ago"}
                </span>
              </div>
              <span className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-[var(--color-accent)]/10 px-3 py-1 text-xs font-semibold text-[var(--color-accent)]">
                {tagEmojis[post.tag]}
                {post.tag}
              </span>
            </div>
          </div>

          <h1 className="mt-4 text-xl font-bold text-[var(--color-text)]">
            {post.title}
          </h1>
          <p className="mt-3 text-base leading-relaxed text-[var(--color-text)]">
            {post.content}
          </p>

          {/* Engagement Actions */}
          <div className="mt-4 flex items-center gap-3 border-t border-[var(--color-border)] pt-4">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all ${
                isLiked
                  ? "bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                  : "bg-[var(--color-bg)] text-[var(--color-text-muted)] hover:bg-[var(--color-primary)]/10"
              }`}
            >
              <span className="text-base">{isLiked ? "👍" : "👍"}</span>
              {isLiked ? "Helpful" : "Mark helpful"}
            </button>
            <button className="flex items-center gap-2 rounded-full bg-[var(--color-bg)] px-4 py-2 text-sm font-medium text-[var(--color-text-muted)] transition-all hover:bg-[var(--color-primary)]/10">
              <span className="text-base">🔗</span>
              Share
            </button>
          </div>
        </div>

        {/* Replies Section */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-[var(--color-text)]">
            💬 Replies ({replies.length})
          </h2>

          {/* Reply Input */}
          <div className="rounded-[var(--radius-lg)] border-2 border-[var(--color-border)] bg-white p-4">
            <div className="flex gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 text-xl">
                🧑
              </div>
              <div className="flex-1">
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Share your thoughts or advice..."
                  className="w-full resize-none rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20"
                  rows={3}
                />
                <div className="mt-2 flex justify-end">
                  <button
                    disabled={!replyText.trim()}
                    className="rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] px-6 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Post reply
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Reply List */}
          <div className="space-y-3">
            {replies.map((reply, index) => (
              <div
                key={reply.id}
                className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-4"
                style={{
                  animation: "slideUp 0.5s ease-out",
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "backwards",
                }}
              >
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 text-xl">
                    {reply.author?.avatar || getEmojiForId(reply.author?.username || reply.id)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-[var(--color-text)]">
                        {reply.author?.username || "Anonymous User"}
                      </span>
                      <span className="text-xs text-[var(--color-text-muted)]">
                        {reply.timestamp ? timeAgo(reply.timestamp) : "1h ago"}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-[var(--color-text)]">
                      {reply.content}
                    </p>
                    <div className="mt-2 flex items-center gap-3 text-xs text-[var(--color-text-muted)]">
                      <button className="flex items-center gap-1 hover:text-[var(--color-primary)]">
                        <span>👍</span>
                        {reply.helpfulCount || reply.helpful || 0} helpful
                      </button>
                      <button className="hover:text-[var(--color-primary)]">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </article>
    </AppShell>
  );
}