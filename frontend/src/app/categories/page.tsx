import { CategoryCard } from '@/components/CategoryCard'
import { CategoryStats } from '@/components/CategoryStats'
import { TrendingCategories } from '@/components/TrendingCategories'
import Link from 'next/link'

const CATEGORIES = [
  {
    id: 1,
    name: 'Luxury Cars',
    slug: 'luxury-cars',
    item_count: 45
  },
  {
    id: 2,
    name: 'Luxury Watches',
    slug: 'luxury-watches',
    item_count: 92
  },
  {
    id: 3,
    name: 'Real Estate',
    slug: 'real-estate',
    item_count: 38
  },
  {
    id: 4,
    name: 'Yachts',
    slug: 'yachts',
    item_count: 15
  },
  {
    id: 5,
    name: 'Private Jets',
    slug: 'private-jets',
    item_count: 12
  },
  {
    id: 6,
    name: 'Jewelry',
    slug: 'jewelry',
    item_count: 78
  }
]

const CATEGORY_IMAGES = {
  'luxury-cars': 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
  'luxury-watches': 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80',
  'real-estate': 'https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  'yachts': 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  'private-jets': 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  'jewelry': 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
}

const CATEGORY_DESCRIPTIONS = {
  'luxury-cars': 'Discover the finest collection of luxury and exotic cars, from limited edition supercars to classic masterpieces.',
  'luxury-watches': 'Explore prestigious timepieces from renowned watchmakers, featuring rare and collectible watches.',
  'real-estate': 'Browse through exclusive properties, from beachfront villas to luxury penthouses in prime locations.',
  'yachts': 'Find exceptional yachts and boats, perfect for luxury cruising and maritime adventures.',
  'private-jets': 'Experience the ultimate in private aviation with our selection of private jets and aircraft.',
  'jewelry': 'Indulge in exquisite jewelry pieces, from rare diamonds to custom-designed collections.'
}

const PRICE_RANGES = {
  'luxury-cars': '₹1.5 Cr - ₹40 Cr',
  'luxury-watches': '₹10L - ₹5 Cr',
  'real-estate': '₹5 Cr - ₹100 Cr',
  'yachts': '₹10 Cr - ₹200 Cr',
  'private-jets': '₹50 Cr - ₹500 Cr',
  'jewelry': '₹5L - ₹10 Cr'
}

export default function CategoriesPage() {
  // Prepare trending categories data
  const trendingCategories = [
    { name: 'Luxury Cars', slug: 'luxury-cars', trend: 15, itemCount: 45 },
    { name: 'Real Estate', slug: 'real-estate', trend: 12, itemCount: 38 },
    { name: 'Luxury Watches', slug: 'luxury-watches', trend: 8, itemCount: 92 },
    { name: 'Private Jets', slug: 'private-jets', trend: -3, itemCount: 12 },
  ]

  // Prepare stats data
  const stats = [
    { label: 'Total Items', value: '500+' },
    { label: 'Active Listings', value: '350+' },
    { label: 'Total Value', value: '₹2000+ Cr' },
    { label: 'Monthly Growth', value: '12%', change: 12 },
  ]

  return (
    <main className="min-h-screen bg-[#0A0A0A]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold text-white">
              Costly<span className="text-amber-500">.in</span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/categories" className="text-amber-500">
                Categories
              </Link>
              <Link href="/items" className="text-gray-300 hover:text-white transition-colors">
                All Items
              </Link>
              <Link href="/submit" className="text-gray-300 hover:text-white transition-colors">
                Submit Item
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Content with top padding for fixed nav */}
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-[url('/luxury-pattern.svg')] opacity-5" />
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 via-transparent to-[#0A0A0A]" />
          
          <div className="relative container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className={`text-4xl sm:text-5xl font-bold mb-6 ${playfair.className}`}>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                  Explore Luxury Categories
                </span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                Discover our curated collection of premium categories, each offering the finest luxury items available in India.
              </p>
            </div>

            {/* Stats Section */}
            <CategoryStats stats={stats} />
          </div>
        </section>

        {/* Main Content */}
        <section className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Categories Grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {CATEGORIES.map((category) => (
                  <CategoryCard
                    key={category.id}
                    name={category.name}
                    description={CATEGORY_DESCRIPTIONS[category.slug as keyof typeof CATEGORY_DESCRIPTIONS]}
                    itemCount={category.item_count}
                    imageUrl={CATEGORY_IMAGES[category.slug as keyof typeof CATEGORY_IMAGES]}
                    slug={category.slug}
                    priceRange={PRICE_RANGES[category.slug as keyof typeof PRICE_RANGES]}
                    featured={category.slug === 'luxury-cars'}
                  />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <TrendingCategories categories={trendingCategories} />
              
              {/* Premium Banner */}
              <div className="bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Become a Premium Member</h3>
                <p className="text-white/90 mb-4">
                  Get early access to new listings and exclusive luxury items.
                </p>
                <button className="w-full px-4 py-2 bg-white text-amber-700 rounded-lg font-medium hover:bg-white/90 transition-colors">
                  Upgrade Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
