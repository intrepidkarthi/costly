/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'media.rolls-roycemotorcars.com',
      'www.tajhotels.com',
      'cdn.shopify.com',
      'images.unsplash.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig
