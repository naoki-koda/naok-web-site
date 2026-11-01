// 楽天市場の商品を検索し、RakutenAd 形式（src/app/blog/RakutenAffiliateAd.tsx）で出力する
// 使い方: npm run rakuten -- "ヘアオイル" [件数] [並び順]
// 並び順: standard（既定） / -reviewCount / -reviewAverage / +itemPrice など

const API_URL =
  "https://openapi.rakuten.co.jp/ichibams/api/IchibaItem/Search/20260701";
// 楽天ウェブサービスの「Allowed websites」に登録したドメイン
const ORIGIN = "https://www.reewa-web.jp";

const [keyword, hits = "5", sort = "-reviewCount"] = process.argv.slice(2);

if (!keyword) {
  console.error('使い方: npm run rakuten -- "キーワード" [件数] [並び順]');
  process.exit(1);
}

const { RAKUTEN_APPLICATION_ID, RAKUTEN_ACCESS_KEY, RAKUTEN_AFFILIATE_ID } =
  process.env;

if (!RAKUTEN_APPLICATION_ID || !RAKUTEN_ACCESS_KEY || !RAKUTEN_AFFILIATE_ID) {
  console.error(
    ".env.local に RAKUTEN_APPLICATION_ID / RAKUTEN_ACCESS_KEY / RAKUTEN_AFFILIATE_ID を設定してください",
  );
  process.exit(1);
}

const params = new URLSearchParams({
  applicationId: RAKUTEN_APPLICATION_ID,
  accessKey: RAKUTEN_ACCESS_KEY,
  affiliateId: RAKUTEN_AFFILIATE_ID,
  keyword,
  hits,
  sort,
  imageFlag: "1",
  availability: "1",
  formatVersion: "2",
});

const res = await fetch(`${API_URL}?${params}`, {
  headers: { Origin: ORIGIN, Referer: `${ORIGIN}/` },
});
const data = await res.json();

if (!res.ok || !data.Items) {
  console.error("APIエラー:", JSON.stringify(data));
  process.exit(1);
}

// 【】＼／《》≪≫＜＞ で囲まれたキャンペーン文言（期間限定・ポイント倍率・クーポンなど）は古くなるので除く
const PROMO_PATTERN =
  /[【＼《≪＜][^】／》≫＞]*(?:限定|倍|OFF|オフ|％|%|クーポン|セール|円|マラソン|ワンダフル|ランキング|位|即日|送料|エントリー|抽選|ポイント)[^】／》≫＞]*[】／》≫＞]/g;
const cleanTitle = (title) =>
  title.replace(PROMO_PATTERN, "").replace(/\s+/g, " ").trim();

const today = new Date();
const checkedAt = `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`;

const ads = data.Items.map((entry) => {
  const item = entry.Item ?? entry;
  const image = (item.mediumImageUrls[0]?.imageUrl ?? item.mediumImageUrls[0])
    .replace(/\?_ex=\d+x\d+/, "?_ex=240x240");
  const postage = item.postageFlag === 0 ? "送料無料" : "送料別";

  console.error(
    `- ${item.itemName.slice(0, 60)}… / ${item.itemPrice.toLocaleString()}円 / ★${item.reviewAverage}（${item.reviewCount}件） / ${item.shopName}`,
  );

  return {
    href: item.affiliateUrl,
    buttonHref: item.affiliateUrl,
    imageSrc: image,
    title: cleanTitle(item.itemName),
    price: `価格：${item.itemPrice.toLocaleString()}円（税込、${postage})`,
    priceCheckedAt: checkedAt,
  };
});

console.log(JSON.stringify(ads, null, 2));
