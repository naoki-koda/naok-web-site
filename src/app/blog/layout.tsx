import A8AffiliateAd, { a8Ads } from "@/app/blog/A8AffiliateAd";
import BlogAdModal from "@/app/blog/BlogAdModal";
import { blogRakutenAds } from "@/app/blog/blogRakutenAds";
import RakutenAffiliateAd from "@/app/blog/RakutenAffiliateAd";
import type { Metadata } from "next";
import type { ReactNode } from "react";

const title = "REEWA WEB ブログ";
const description =
  "名古屋エリアの比較記事、Web制作、暮らしや仕事に役立つまとめ記事を掲載しています。";
const ogImage = "/blog/opengraph-image";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.reewa-web.jp"),
  title: {
    default: title,
    template: "%s | REEWA WEB ブログ",
  },
  description,
  openGraph: {
    title,
    description,
    url: "/blog",
    siteName: "REEWA WEB",
    type: "website",
    locale: "ja_JP",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "REEWA WEB ブログ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

// 記事を開いたときのモーダルに出す広告。掲載店を紹介する記事（左官・建具・行政書士）には出さない
const modalAds: Record<string, ReactNode> = {
  "/blog/hikari": <A8AffiliateAd ad={a8Ads.docomoHikari} />,
  "/blog/finance": (
    <A8AffiliateAd
      ad={a8Ads.mortgageComparison}
      fallback={<RakutenAffiliateAd ad={blogRakutenAds.finance[0]} />}
    />
  ),
  "/blog/hotelmatome": <A8AffiliateAd ad={a8Ads.hotelBooking} />,
  "/blog/hiphopmatome": <RakutenAffiliateAd ad={blogRakutenAds.hiphop[2]} />,
  "/blog/aienappmatome": <RakutenAffiliateAd ad={blogRakutenAds.english[0]} />,
  "/blog/nagoya/hairsalon": (
    <RakutenAffiliateAd ad={blogRakutenAds.hairsalon[0]} />
  ),
  "/blog/nagoya/personal-color": (
    <RakutenAffiliateAd ad={blogRakutenAds.personalColor[0]} />
  ),
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <BlogAdModal ads={modalAds} />
    </>
  );
}
