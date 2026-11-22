import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "REEWA WEB",
    short_name: "REEWA WEB",
    description:
      "Next.js/SPA・PWA対応で高速かつアプリのように使いやすいホームページ制作を提供するREEWA WEBの公式サイトです。",
    start_url: "/",
    display: "standalone",
    background_color: "#ff4a3f",
    theme_color: "#ff4a3f",
    icons: [
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
