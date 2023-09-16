/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_PROTOCOL || 'https',
        hostname: process.env.NEXT_PUBLIC_API_HOSTNAME || 'example.com',
        port: '',        // Add a valid port or set it to an empty string if not applicable
        pathname: '/imgs/**', // Add a valid pathname or set it to an empty string if not applicable
      },
      {
        protocol: process.env.NEXT_PUBLIC_PROTOCOL || 'https',
        hostname: process.env.NEXT_PUBLIC_STORAGE_HOSTNAME || 'example.com',
        port: '',        // Add a valid port or set it to an empty string if not applicable
        pathname: '/imgs/**', // Add a valid pathname or set it to an empty string if not applicable
      },
      {
        protocol: process.env.NEXT_PUBLIC_PROTOCOL || 'https',
        hostname: 'demo-api.foodyman.org',
        port: '',        // Add a valid port or set it to an empty string if not applicable
        pathname: '/imgs/**', // Add a valid pathname or set it to an empty string if not applicable
      },
    ],
    minimumCacheTTL: 3600,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = withBundleAnalyzer(nextConfig);
