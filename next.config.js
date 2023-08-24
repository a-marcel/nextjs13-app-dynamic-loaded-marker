/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
    },
    experimental: { appDir: true },
};
  
module.exports = nextConfig