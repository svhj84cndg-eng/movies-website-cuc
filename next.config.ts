/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/movies-website-cuc',
  assetPrefix: '/movies-website-cuc/',
  trailingSlash: true,
  images: { unoptimized: true }
}
module.exports = nextConfig
