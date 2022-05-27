/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'logo.clearbit.com',
      'www.joshwcomeau.com',
      'www.freecodecamp.org',
      'miro.medium.com',
      'blog.logrocket.com',
      'cdn.tutsplus.com',
      'cms-assets.tutsplus.com',
      'slack.engineering',
      'blog.jetbrains.com',
    ],
  },
};

module.exports = nextConfig;
