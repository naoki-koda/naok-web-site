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
    <main className="relative px-4 py-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_45%_at_80%_0%,#ffd6e7,transparent_60%),radial-gradient(45%_45%_at_0%_10%,#d2f8ff,transparent_55%)]"
      />
      <div className="mx-auto max-w-3xl">
        <Link
          href="/cms/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition hover:text-zinc-900"
        >
          <span aria-hidden>←</span>
          ブログ一覧に戻る
        </Link>

        <header className="mt-6 rounded-3xl border border-zinc-200/80 bg-white/90 p-6 shadow-sm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Blog entry
          </p>
          <h1 className="mt-3 text-2xl font-semibold leading-tight text-zinc-900 sm:text-3xl">
            {post.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-semibold text-zinc-600">
            {categoryLabel && (
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-emerald-700">
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

        <article className="mt-8 rounded-3xl border border-zinc-200/80 bg-white/90 p-6 shadow-sm sm:p-8">
          <div
            className={styles.post}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </main>
  );
}
