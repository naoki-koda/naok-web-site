export type RakutenAd = {
  href: string;
  buttonHref: string;
  imageSrc: string;
  title: string;
  price: string;
  priceCheckedAt?: string;
};

const rakutenLogo = 'https://static.affiliate.rakuten.co.jp/makelink/rl.svg';

export default function RakutenAffiliateAd({ ad }: { ad: RakutenAd }) {
  const priceNotice =
    '[商品価格に関しましては、リンクが作成された時点と現時点で情報が変更されている場合がございます。]';

  return (
    <div className="my-10 flex justify-center">
      <div className="w-full max-w-[504px] overflow-hidden rounded-xl border border-[#95a5a6] bg-white p-[5px] text-center">
        <div className="flex flex-col sm:flex-row">
          <div className="mx-auto w-full max-w-[240px] shrink-0">
            <a href={ad.href} target="_blank" rel="nofollow sponsored noopener" className="break-words">
              <img
                src={ad.imageSrc}
                width={240}
                height={240}
                alt={priceNotice}
                title={priceNotice}
                className="m-0.5 h-auto w-full"
              />
            </a>
          </div>
          <div className="w-full sm:w-[248px]">
            <p className="m-0 break-words px-1.5 py-0.5 text-left text-xs leading-[1.4em] text-slate-900">
              <a
                href={ad.href}
                target="_blank"
                rel="nofollow sponsored noopener"
                className="break-words text-inherit underline-offset-2 hover:underline"
              >
                {ad.title}
              </a>
              <br />
              <span>{ad.price}</span>{" "}
              <span className="text-[#BBB]">
                ({ad.priceCheckedAt ?? "2026/5/19"}時点)
              </span>
            </p>
            <div className="m-2.5 flex items-center justify-between gap-2">
              <a href={ad.href} target="_blank" rel="nofollow sponsored noopener" className="min-w-0 break-words">
                <img src={rakutenLogo} alt="Rakuten" className="h-auto max-h-[27px] w-auto" />
              </a>
              <a
                href={ad.buttonHref}
                target="_blank"
                rel="nofollow sponsored noopener"
                className="h-[27px] w-[41%] min-w-[128px] rounded-2xl bg-[#bf0000] px-3 text-center text-xs font-medium leading-[27px] text-white"
              >
                楽天で購入
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
