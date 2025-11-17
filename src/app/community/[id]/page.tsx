import { notFound } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { posts } from "@/data/posts";

interface PostPageProps {
  params: { id: string };
}

export default function PostPage({ params }: PostPageProps) {
  const post = posts.find((p) => p.id === params.id);
  if (!post) return notFound();

  return (
    <AppShell title="Community">
      <article className="space-y-4">
        <div>
          <p className="text-[11px] text-[var(--color-accent)]">{post.tag}</p>
          <h1 className="mt-1 text-lg font-semibold">{post.title}</h1>
          <p className="mt-2 text-sm text-slate-700">{post.content}</p>
        </div>

        <section className="space-y-2">
          <h2 className="text-sm font-semibold">Replies</h2>
          <p className="text-xs text-slate-500">
            In a future version, users will be able to post replies and share
            tips here.
          </p>
        </section>
      </article>
    </AppShell>
  );
}