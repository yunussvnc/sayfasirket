/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    turbopack: {
        root: __dirname,
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

module.exports = nextConfig;

