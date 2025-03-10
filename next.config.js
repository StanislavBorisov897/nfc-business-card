/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['yourdomain.com'],
  },
  // Add any other custom configuration here
}

module.exports = nextConfig