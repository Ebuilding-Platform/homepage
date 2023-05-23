/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    domains: [
      "amazonaws.com"
    ]

  }
}

module.exports = nextConfig
