import { rakutenAds } from "@/app/blog/RakutenAffiliateAd";

const recommendedAds = [rakutenAds[0], rakutenAds[1], rakutenAds[2]];

export default function BlogAffiliateRecommendations() {
  return (
    <aside
      aria-labelledby="blog-affiliate-recommendations"
      className="border-t border-slate-200 bg-slate-50 px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-600">
            PR
          </p>
          <h2
            id="blog-affiliate-recommendations"
            className="mt-2 text-2xl font-bold text-slate-900"
          >
            暮らしに役立つおすすめ商品
          </h2>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {recommendedAds.map((ad) => (
            <article
              key={ad.href}
              className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <a
                href={ad.href}
                target="_blank"
                rel="nofollow sponsored noopener"
                className="flex aspect-square items-center justify-center bg-white p-4"
              >
                <img
                  src={ad.imageSrc}
                  width={240}
                  height={240}
                  alt={ad.title}
                  className="h-full w-full object-contain"
                />
              </a>

              <div className="flex flex-1 flex-col p-5">
                <a
                  href={ad.href}
                  target="_blank"
                  rel="nofollow sponsored noopener"
                  className="line-clamp-3 text-sm font-semibold leading-6 text-slate-800 hover:underline"
                >
                  {ad.title}
                </a>
                <p className="mt-3 text-sm text-slate-600">{ad.price}</p>
                <a
                  href={ad.buttonHref}
                  target="_blank"
                  rel="nofollow sponsored noopener"
                  className="mt-5 block rounded-full bg-[#bf0000] px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-[#a00000]"
                >
                  楽天で購入
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </aside>
  );
}
