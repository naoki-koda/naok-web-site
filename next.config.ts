import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'reewa-web.jp' }],
        destination: 'https://www.reewa-web.jp/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
