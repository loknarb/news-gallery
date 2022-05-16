/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['miro.medium.com','cdn.vox-cdn.com', 'muscleshop.tdsclick.org', 's.espncdn.com']
  }
}

module.exports = nextConfig
