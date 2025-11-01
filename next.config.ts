import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
