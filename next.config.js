/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "shikimori.one",
            },
            {
                protocol: "https",
                hostname: "kawai.shikimori.one",
            },
            {
                protocol: "https",
                hostname: "desu.shikimori.one",
            }
        ],
        // Add these additional configurations for better compatibility
        formats: ['image/webp', 'image/avif'],
        minimumCacheTTL: 60,
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
};

module.exports = nextConfig;