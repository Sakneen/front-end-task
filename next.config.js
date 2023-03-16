/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'img.sakneen.com',
  //       port: '',
  //     //  pathname: '/account123/**',
  //     },
  //   ],
  // },
  images: {
    domains: ['img.sakneen.com'],
  },
}

module.exports = nextConfig
