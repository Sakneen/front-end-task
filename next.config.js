// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.sakneen.com",
      },
    ],
  },
};

module.exports = nextConfig;
