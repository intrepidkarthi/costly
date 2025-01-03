'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export function ActionButtons() {
  const router = useRouter()

  return (
    <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => router.push('/items')}
        className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg shadow-amber-500/10 text-lg font-medium overflow-hidden"
      >
        <span className="relative z-10">Explore Collection</span>
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-amber-600 to-amber-700 transition-transform duration-500" />
        <svg
          className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform relative z-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => router.push('/submit')}
        className="inline-flex items-center px-8 py-4 border border-amber-500/20 text-amber-400 rounded-xl hover:bg-amber-500/10 transition-all duration-300"
      >
        Submit Your Item
        <svg
          className="w-5 h-5 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </motion.button>
    </div>
  )
}
