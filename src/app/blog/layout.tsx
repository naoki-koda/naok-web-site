import BlogAffiliateRecommendations from "@/app/blog/BlogAffiliateRecommendations";
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

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <BlogAffiliateRecommendations />
    </>
  );
}
