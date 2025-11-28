import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', // Node.js sunucusu için standart build
  experimental: {
    turbopackUseSystemTlsCerts: true,
    turbopack: {
      root: __dirname,
    },
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.neokreatif.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
