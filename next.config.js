/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    i18n: {
        locales: ['default', 'en', 'zh', 'ko'],
        defaultLocale: 'default'
    },
    trailingSlash: true,
}

module.exports = nextConfig
