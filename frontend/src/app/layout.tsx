import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Costly - Premium Items Catalog',
  description: 'Discover the most luxurious and expensive items in India',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} overflow-x-hidden`}>
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
          {children}
        </div>
      </body>
    </html>
  )
}
