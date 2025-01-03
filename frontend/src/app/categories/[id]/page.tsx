'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Navbar } from '@/components/Navbar'
import { ItemCard } from '@/components/ItemCard'
import { getCategories, getItemsByCategory, type Item, type Category } from '@/lib/items'

interface CategoryPageProps {
  params: {
    id: string
  }
  searchParams?: {
    page?: string
  }
}

export default function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const router = useRouter()
  const [category, setCategory] = useState<Category | null>(null)
  const [items, setItems] = useState<Item[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchCategoryData()
  }, [params.id])

  async function fetchCategoryData() {
    try {
      setLoading(true)
      setError(null)

      // Fetch category and items
      const categories = await getCategories()
      const currentCategory = categories.find(c => c.id.toString() === params.id)

      if (!currentCategory) {
        router.push('/404')
        return
      }

      setCategory(currentCategory)

      const categoryItems = await getItemsByCategory(currentCategory.id)
      setItems(categoryItems)
    } catch (err) {
      console.error('Error fetching category data:', err)
      setError('Failed to load category data. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (!category && !loading) {
    return null // Let Next.js handle the 404
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 via-transparent to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-[url('/luxury-pattern.svg')] opacity-5" />
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {loading ? (
              <div className="animate-pulse">
                <div className="h-12 w-64 bg-gray-800 rounded-lg mx-auto mb-4"></div>
                <div className="h-4 w-48 bg-gray-800 rounded mx-auto"></div>
              </div>
            ) : error ? (
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                <p className="text-red-400">{error}</p>
              </div>
            ) : (
              <>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                    {category?.name}
                  </span>
                </h1>
                <div className="w-40 h-1 mx-auto bg-gradient-to-r from-amber-500/0 via-amber-500 to-amber-500/0 mb-6" />
                <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                  Discover our exclusive collection of luxury {category?.name.toLowerCase()}
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Items Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gray-900 rounded-2xl p-4 animate-pulse">
                  <div className="aspect-square bg-gray-800 rounded-xl mb-4"></div>
                  <div className="h-6 bg-gray-800 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-800 rounded w-1/2"></div>
                </div>
              ))}
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400">No items found in this category</p>
              <button
                onClick={() => router.push('/items')}
                className="mt-6 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg shadow-amber-500/10"
              >
                Browse All Items
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {items.map((item) => (
                <ItemCard
                  key={item.id}
                  item={item}
                  onClick={() => {}} // Handle item click
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
