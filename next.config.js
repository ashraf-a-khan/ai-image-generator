/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: [
            "links.papareact.com",
            "aiimagegeneratoras443e1d.blob.core.windows.net",
        ],
        unoptimized: true,
    },
};

module.exports = nextConfig;
