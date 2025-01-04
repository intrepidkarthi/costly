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

          {/* Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Luxury Cars',
                description: 'From Rolls-Royce to Lamborghini, discover the finest automobiles.',
                image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3'
              },
              {
                title: 'Premium Watches',
                description: 'Explore timepieces from prestigious Swiss manufacturers.',
                image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa?ixlib=rb-4.0.3'
              },
              {
                title: 'Fine Jewelry',
                description: 'Exquisite diamonds and precious gems from renowned jewelers.',
                image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3'
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-900/20 to-amber-800/20 border border-amber-500/10"
              >
                <div className="aspect-[4/3] relative">
                  <OptimizedImage
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-gray-300 text-sm">{category.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                Why Choose Costly.in
              </span>
            </h2>
            <p className="text-gray-400">
              Experience luxury like never before with our premium services and exclusive benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Verified Authenticity',
                description: 'Every item in our collection is thoroughly verified for authenticity by industry experts.',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: 'Premium Selection',
                description: 'Carefully curated collection of the most prestigious and sought-after luxury items.',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                )
              },
              {
                title: 'Concierge Service',
                description: 'Personalized assistance and expert guidance for your luxury purchases.',
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 rounded-2xl bg-gradient-to-br from-amber-900/10 to-amber-800/10 border border-amber-500/10"
              >
                <div className="text-amber-500 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-amber-900/20 to-amber-800/20 border border-amber-500/10 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                  Stay Updated
                </span>
              </h2>
              <p className="text-gray-400 mb-8">
                Subscribe to our newsletter for exclusive updates on new luxury items and special offers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-6 py-3 rounded-lg bg-black/50 border border-amber-500/20 text-white placeholder-gray-400 focus:outline-none focus:border-amber-500/50"
                />
                <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold hover:from-amber-600 hover:to-amber-700 transition-all">
                  Subscribe
                </button>
              </div>
            </div>
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
              <p className="text-gray-400 mb-6">
                Your premier destination for luxury items in India. Discover, explore, and acquire the finest luxury products.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                  </svg>
                </a>
              </div>
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
                <li>
                  <a href="/about" className="text-gray-400 hover:text-amber-400 transition-colors">
                    About Us
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
                    Premium Watches
                  </a>
                </li>
                <li>
                  <a href="/categories/jewelry" className="text-gray-400 hover:text-amber-400 transition-colors">
                    Fine Jewelry
                  </a>
                </li>
                <li>
                  <a href="/categories/real-estate" className="text-gray-400 hover:text-amber-400 transition-colors">
                    Luxury Real Estate
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  contact@costly.in
                </li>
                <li className="flex items-center gap-2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 (800) 123-4567
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Costly.in. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
