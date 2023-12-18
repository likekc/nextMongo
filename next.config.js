/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false
}

module.exports = {
    experimental: {
      serverActions: true,
    },
  }; 

module.exports = nextConfig
