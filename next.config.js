/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['res.cloudinary.com', 'firebasestorage.googleapis.com', 'img.icons8.com', 'raw.githubusercontent.com', 'i.imgur.com', 'img.freepik.com','media.geeksforgeeks.org', 'cdn.fitolympia.com', 'render.com', 'images.credly.com']
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://auedbaki.com/api/:path*',
      },
    ]
  },
}

module.exports = nextConfig
