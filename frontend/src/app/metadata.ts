import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Costly.in - Premium Luxury Items in India',
  description: 'Discover a curated collection of the finest luxury items in India. From luxury cars to premium watches, explore the best that luxury has to offer.',
  keywords: ['luxury', 'india', 'premium', 'cars', 'watches', 'real estate', 'yachts'],
  openGraph: {
    title: 'Costly.in - Premium Luxury Items in India',
    description: 'Discover a curated collection of the finest luxury items in India. From luxury cars to premium watches, explore the best that luxury has to offer.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Costly.in - Premium Luxury Items',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Costly.in - Premium Luxury Items in India',
    description: 'Discover a curated collection of the finest luxury items in India. From luxury cars to premium watches, explore the best that luxury has to offer.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: '#F59E0B',
}
