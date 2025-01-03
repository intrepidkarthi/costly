import Link from 'next/link'
import { Playfair_Display } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'] })

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/luxury-pattern.svg')] opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 via-transparent to-[#0A0A0A]" />
      
      {/* Decorative Circles */}
      <div className="absolute -top-1/4 -right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 py-16 text-center">
        {/* Logo */}
        <Link href="/" className="inline-block mb-12">
          <h1 className={`text-3xl font-bold text-white ${playfair.className}`}>
            Costly<span className="text-amber-500">.in</span>
          </h1>
        </Link>

        {/* 404 Content */}
        <div className="max-w-2xl mx-auto">
          <h2 className={`text-[120px] font-bold leading-none bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 ${playfair.className}`}>
            404
          </h2>
          <h3 className={`text-3xl font-bold text-white mb-6 ${playfair.className}`}>
            Page Not Found
          </h3>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            The luxury item you're looking for seems to be out of stock. Let's help you find something equally exclusive.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg shadow-amber-500/10"
            >
              Return Home
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </Link>
            <Link
              href="/categories"
              className="inline-flex items-center px-8 py-4 border border-amber-500/20 text-amber-400 rounded-xl hover:bg-amber-500/10 transition-all duration-300"
            >
              Browse Categories
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-16 flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/items" className="text-gray-400 hover:text-amber-400 transition-colors">
              All Items
            </Link>
            <Link href="/submit" className="text-gray-400 hover:text-amber-400 transition-colors">
              Submit Item
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-amber-400 transition-colors">
              Contact Us
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-amber-400 transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
