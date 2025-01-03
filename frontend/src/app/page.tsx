'use client'

import { Navbar } from '@/components/Navbar'
import { OptimizedImage } from '@/components/OptimizedImage'
import { motion } from 'framer-motion'
import { ActionButtons } from '@/components/ActionButtons'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center py-20">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('/luxury-pattern.svg')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 via-transparent to-[#0A0A0A]" />
        <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[1000px] h-[1000px] bg-amber-500/10 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative container mx-auto px-4 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
            >
              {/* Luxury Label */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-900/20 to-amber-800/20 border border-amber-500/10 rounded-full px-4 py-1 mb-8">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span className="text-amber-400 text-sm font-medium tracking-wider uppercase">Premium Collection</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 animate-gradient">
                  Discover Luxury
                </span>
                <br />
                <span className="text-white relative">
                  Like Never Before
                  <div className="absolute -right-8 top-0 w-6 h-6">
                    <svg className="w-full h-full text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                </span>
              </h1>

              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                Explore our curated collection of the finest luxury items, handpicked for the most discerning collectors in India.
              </p>

              <ActionButtons />

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-16">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-white mb-2">500+</div>
                  <div className="text-gray-400">Luxury Items</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-white mb-2">₹2000Cr+</div>
                  <div className="text-gray-400">Total Value</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-gray-400">Categories</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-white mb-2">1000+</div>
                  <div className="text-gray-400">Active Users</div>
                </div>
              </div>
            </motion.div>

            {/* Image Section */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-xl mx-auto lg:mx-0 lg:ml-auto"
            >
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-amber-500/10 rounded-full blur-xl" />
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-amber-500/10 rounded-full blur-xl" />
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="aspect-square relative rounded-xl overflow-hidden shadow-2xl shadow-black/30 bg-gradient-to-br from-amber-500/10 to-amber-600/10"
                  >
                    <OptimizedImage
                      src="https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2832&q=80"
                      alt="Luxury Mansion"
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="aspect-square relative rounded-xl overflow-hidden shadow-2xl shadow-black/30 bg-gradient-to-br from-amber-500/10 to-amber-600/10"
                  >
                    <OptimizedImage
                      src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="Luxury Diamond Ring"
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </motion.div>
                </div>
                <div className="space-y-4 pt-8">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="aspect-square relative rounded-xl overflow-hidden shadow-2xl shadow-black/30 bg-gradient-to-br from-amber-500/10 to-amber-600/10"
                  >
                    <OptimizedImage
                      src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                      alt="Ferrari Supercar"
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="aspect-square relative rounded-xl overflow-hidden shadow-2xl shadow-black/30 bg-gradient-to-br from-amber-500/10 to-amber-600/10"
                  >
                    <OptimizedImage
                      src="https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="Luxury Watch"
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                Featured Categories
              </span>
            </h2>
            <p className="text-gray-400">
              Browse through our most popular luxury categories, each offering a unique collection of premium items.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Costly<span className="text-amber-500">.in</span>
              </h3>
              <p className="text-gray-400">
                Your premier destination for luxury items in India.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/items" className="text-gray-400 hover:text-amber-400 transition-colors">
                    All Items
                  </a>
                </li>
                <li>
                  <a href="/categories" className="text-gray-400 hover:text-amber-400 transition-colors">
                    Categories
                  </a>
                </li>
                <li>
                  <a href="/submit" className="text-gray-400 hover:text-amber-400 transition-colors">
                    Submit Item
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Categories</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/categories/luxury-cars" className="text-gray-400 hover:text-amber-400 transition-colors">
                    Luxury Cars
                  </a>
                </li>
                <li>
                  <a href="/categories/watches" className="text-gray-400 hover:text-amber-400 transition-colors">
                    Watches
                  </a>
                </li>
                <li>
                  <a href="/categories/real-estate" className="text-gray-400 hover:text-amber-400 transition-colors">
                    Real Estate
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/contact" className="text-gray-400 hover:text-amber-400 transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-400 hover:text-amber-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-gray-400 hover:text-amber-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Costly.in. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
