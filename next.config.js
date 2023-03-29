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
    },
};

module.exports = nextConfig;
