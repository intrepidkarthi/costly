'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { getCategories } from '@/lib/items'

interface Category {
  id: number
  name: string
}

export function ItemsFilter() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [categories, setCategories] = useState<Category[]>([])
  
  const [filters, setFilters] = useState({
    search: searchParams.get('search') || '',
    category: searchParams.get('category') || '',
    sortBy: searchParams.get('sortBy') || 'newest',
    minPrice: searchParams.get('minPrice') || '',
    maxPrice: searchParams.get('maxPrice') || '',
  })

  useEffect(() => {
    loadCategories()
  }, [])

  async function loadCategories() {
    try {
      const data = await getCategories()
      setCategories(data)
    } catch (error) {
      console.error('Error loading categories:', error)
    }
  }

  function updateFilters(newFilters: Partial<typeof filters>) {
    const updatedFilters = { ...filters, ...newFilters }
    setFilters(updatedFilters)

    // Update URL with new filters
    const params = new URLSearchParams()
    Object.entries(updatedFilters).forEach(([key, value]) => {
      if (value) {
        params.set(key, value)
      }
    })

    router.push(`/items?${params.toString()}`)
  }

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-900 to-black rounded-2xl p-6 border border-amber-500/10">
      <div className="space-y-6">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search luxury items..."
            value={filters.search}
            onChange={(e) => updateFilters({ search: e.target.value })}
            className="w-full pl-12 pr-4 py-3 bg-black/50 border border-amber-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-500/40 focus:ring-1 focus:ring-amber-500/40 transition-colors"
          />
          <svg
            className="absolute left-4 top-3.5 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Category Filter */}
          <div className="relative">
            <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">Category</label>
            <select
              value={filters.category}
              onChange={(e) => updateFilters({ category: e.target.value })}
              className="w-full px-4 py-3 bg-black/50 border border-amber-500/20 rounded-xl text-white appearance-none focus:outline-none focus:border-amber-500/40 focus:ring-1 focus:ring-amber-500/40 transition-colors"
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-4 top-6 flex items-center pointer-events-none">
              <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Price Range */}
          <div className="space-y-2">
            <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">Price Range</label>
            <div className="flex gap-4">
              <div className="relative flex-1">
                <span className="absolute left-4 top-3 text-gray-400">₹</span>
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.minPrice}
                  onChange={(e) => updateFilters({ minPrice: e.target.value })}
                  className="w-full pl-8 pr-4 py-3 bg-black/50 border border-amber-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-500/40 focus:ring-1 focus:ring-amber-500/40 transition-colors"
                />
              </div>
              <div className="relative flex-1">
                <span className="absolute left-4 top-3 text-gray-400">₹</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.maxPrice}
                  onChange={(e) => updateFilters({ maxPrice: e.target.value })}
                  className="w-full pl-8 pr-4 py-3 bg-black/50 border border-amber-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-amber-500/40 focus:ring-1 focus:ring-amber-500/40 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Sort */}
          <div className="relative">
            <label className="block text-xs text-gray-400 uppercase tracking-wider mb-2">Sort By</label>
            <select
              value={filters.sortBy}
              onChange={(e) => updateFilters({ sortBy: e.target.value })}
              className="w-full px-4 py-3 bg-black/50 border border-amber-500/20 rounded-xl text-white appearance-none focus:outline-none focus:border-amber-500/40 focus:ring-1 focus:ring-amber-500/40 transition-colors"
            >
              <option value="newest">Newest First</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
            </select>
            <div className="absolute inset-y-0 right-4 top-6 flex items-center pointer-events-none">
              <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
