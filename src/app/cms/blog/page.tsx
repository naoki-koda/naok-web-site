import { microcms, type Blog } from "@/lib/microcms";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 60; // ISR: 60秒ごとに再生成

function getCategoryLabel(category?: Blog["category"]) {
  if (!category) return null;
  return typeof category === "string" ? category : category.name;
}

export default async function Page() {
  const data = await microcms.get<{ contents: Blog[] }>({
    endpoint: "blogs", // あなたのendpoint名に合わせる
    queries: { limit: 20, orders: "-publishedAt" },
  });

  return (
    <main className="relative mx-auto max-w-6xl px-4 py-12">
      {/* <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_20%_10%,#ffe4b5,transparent_60%),radial-gradient(45%_45%_at_80%_0%,#c7f9cc,transparent_55%)]"
      /> */}
      <header className="flex flex-col gap-4">
        <p className="w-fit rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600 shadow-sm">
          Latest Posts
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
          ブログ
        </h1>
        <p className="max-w-2xl text-sm text-zinc-600 sm:text-base">
          制作ノートや学び、気づきをまとめています。気になる記事から
          ご覧ください。
        </p>
      </header>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.contents.map((post) => {
          const categoryLabel = getCategoryLabel(post.category);

          return (
            <li key={post.id}>
              <Link
                href={`/cms/blog/${post.id}`}
                className="group flex h-full flex-col rounded-2xl border border-zinc-200/80 bg-white/85 p-4 shadow-sm transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-md"
              >
                {post.eyecatch ? (
                  <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-xl bg-zinc-100">
                    <Image
                      src={post.eyecatch.url}
                      alt={post.title}
                      fill
                      sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
                      className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                ) : (
                  <div className="mb-4 flex aspect-[16/9] items-center justify-center rounded-xl border border-dashed border-zinc-200 bg-zinc-50 text-sm font-medium text-zinc-400">
                    No image
                  </div>
                )}
                <div className="flex flex-1 flex-col gap-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-zinc-600">
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
                  <h2 className="text-lg font-semibold leading-snug text-zinc-900">
                    {post.title}
                  </h2>
                  <div className="mt-auto text-xs font-medium text-zinc-600">
                    <span className="text-zinc-700">続きを読む →</span>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
