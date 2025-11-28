// @ts-nocheck
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', // Node.js sunucusu için standart build
  experimental: {
    turbopackUseSystemTlsCerts: true,
    // Build sırasında sadece backend klasörünü kök olarak kullan
    turbopack: {
      root: __dirname,
    },
  } as any,
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
