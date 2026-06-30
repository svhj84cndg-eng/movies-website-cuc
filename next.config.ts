/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 关键：静态导出纯HTML，适配GitHub Pages
  trailingSlash: true,
}

module.exports = nextConfig
