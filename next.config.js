// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "t4.ftcdn.net"
        ],
    },
}

module.exports = nextConfig
