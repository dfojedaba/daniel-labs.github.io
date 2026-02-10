/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-nextjs' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio-nextjs/' : '',
}

module.exports = nextConfig
