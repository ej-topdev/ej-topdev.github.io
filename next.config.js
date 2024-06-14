/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['ej-topdev.github.io'], // Replace with your domain(s)
  },
  experimental: {
    appDir: true,
  },
  output: 'export',
  dir: 'out',
};

module.exports = nextConfig;