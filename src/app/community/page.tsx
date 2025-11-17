import Link from "next/link";
import { AppShell } from "@/components/AppShell";
import { posts } from "@/data/posts";

export default function CommunityPage() {
  return (
    <AppShell title="Community">
      <section className="space-y-3">
        <p className="text-sm text-slate-600">
          See what others are asking and share your own experience.
        </p>
        <div className="space-y-2">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/community/${post.id}`}
              className="block rounded-xl border border-slate-200 px-3 py-3 hover:border-[var(--color-primary)]"
            >
              <p className="text-[11px] text-[var(--color-accent)]">
                {post.tag}
              </p>
              <h2 className="mt-1 text-sm font-semibold">{post.title}</h2>
              <p className="mt-1 text-xs text-slate-600">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </AppShell>
  );
}