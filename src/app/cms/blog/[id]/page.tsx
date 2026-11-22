import { CardBadge } from "@/app/ui/cards";
import { PageShell } from "@/app/ui/page-parts";
import { microcms } from "@/lib/microcms";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./content.module.css";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await microcms
    .get({
      endpoint: "blogs",
      contentId: id,
    })
    .catch(() => null);

  if (!post) notFound();

  const categoryLabel =
    typeof post.category === "string" ? post.category : post.category?.name;

  return (
    <PageShell>
      <div className="mx-auto max-w-3xl px-6 pt-8">
        <Link
          href="/cms/blog"
          className="inline-flex items-center gap-2 rounded-full bg-[#fffaf9] px-5 py-2 text-sm font-bold text-[#15181d] shadow-[0_10px_30px_-18px_rgba(21,24,29,0.45)] transition hover:bg-white"
        >
          <span aria-hidden>←</span>
          ブログ一覧に戻る
        </Link>

        <header className="mt-6 rounded-[1.75rem] border border-white/60 bg-[#fffaf9] p-6 shadow-[0_30px_60px_-30px_rgba(21,24,29,0.55)] sm:p-10">
          <CardBadge>BLOG ENTRY</CardBadge>
          <h1 className="mt-3 text-2xl font-semibold leading-tight text-[#15181d] sm:text-3xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-semibold text-zinc-600">
            {categoryLabel && (
              <span className="rounded-full bg-[#aaacff]/30 px-2.5 py-1 text-[#2a2c5a]">
                {categoryLabel}
              </span>
            )}
            {post.publishedAt && (
              <time
                dateTime={post.publishedAt}
                className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-zinc-500"
              >
                {post.publishedAt.slice(0, 10)}
              </time>
            )}
          </div>
          {post.eyecatch && (
            <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl bg-zinc-100">
              <Image
                src={post.eyecatch.url}
                alt={post.title}
                fill
                sizes="(min-width: 768px) 720px, 92vw"
                className="object-cover"
                priority
              />
            </div>
          )}
        </header>

        <article className="mt-4 rounded-[1.75rem] border border-white/60 bg-[#fffaf9] p-6 shadow-[0_30px_60px_-30px_rgba(21,24,29,0.55)] sm:p-10">
          <div
            className={styles.post}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </PageShell>
  );
}
