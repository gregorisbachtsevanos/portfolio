
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
        domains: [
            't4.ftcdn.net',
            'images.unsplash.com',
            'placehold.co',
        ],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'placehold.co',
                port: '',
                pathname: '/600x400',
            },
        ],
    },


    // webpack(config) {
    //     config.resolve.fallback = { fs: false };
    //     config.module.rules.push({
    //         test: /\.svg$/i,
    //         issuer: /\.[jt]sx?$/,
    //         use: ['@svgr/webpack'],
    //     });

    //     return config;
    // },

}

module.exports = nextConfig
