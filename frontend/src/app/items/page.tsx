'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Navbar } from '@/components/Navbar'
import { ItemCard } from '@/components/ItemCard'
import { ItemModal } from '@/components/ItemModal'
import { ItemsFilter } from '@/components/ItemsFilter'
import { getItems, type Item, type ItemsFilter as ItemsFilterType, type PaginatedItems } from '@/lib/items'

export default function ItemsPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [items, setItems] = useState<Item[]>([])
  const [selectedItem, setSelectedItem] = useState<Item | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    totalPages: 0,
  })

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      setError(null)

      const filter: ItemsFilterType = {
        categoryId: searchParams.get('category') ? parseInt(searchParams.get('category')!) : undefined,
        minPrice: searchParams.get('minPrice') ? parseInt(searchParams.get('minPrice')!) : undefined,
        maxPrice: searchParams.get('maxPrice') ? parseInt(searchParams.get('maxPrice')!) : undefined,
        sortBy: (searchParams.get('sortBy') as ItemsFilterType['sortBy']) || undefined,
        search: searchParams.get('search') || undefined,
        page: searchParams.get('page') ? parseInt(searchParams.get('page')!) : 1,
      }

      try {
        const { items: fetchedItems, total, page, totalPages } = await getItems(filter)
        setItems(fetchedItems)
        setPagination({ total, page, totalPages })
      } catch (error) {
        console.error('Error fetching items:', error)
        setError('Failed to load items. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchItems()
  }, [searchParams])

  const handleItemClick = (item: Item) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', page.toString())
    router.push(`/items?${params.toString()}`)
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 via-transparent to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-[url('/luxury-pattern.svg')] opacity-5" />
        
        <div className="relative container mx-auto px-4 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                Luxury Collection
              </span>
            </h1>
            <div className="w-40 h-1 mx-auto bg-gradient-to-r from-amber-500/0 via-amber-500 to-amber-500/0 mb-6" />
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Discover an exclusive collection of the finest luxury items, curated for the most discerning collectors in India
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        {/* Filters */}
        <div className="mb-12">
          <ItemsFilter />
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="inline-flex flex-col items-center">
              <div className="relative w-16 h-16">
                <div className="absolute inset-0 rounded-full border-4 border-amber-400/20" />
                <div className="absolute inset-0 rounded-full border-4 border-amber-400 border-t-transparent animate-spin" />
              </div>
              <p className="mt-6 text-gray-400 font-light">Curating luxury items...</p>
            </div>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <p className="text-red-400 text-lg mb-6">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg shadow-amber-500/10"
              >
                Try Again
              </button>
            </div>
          </div>
        ) : items.length === 0 ? (
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <p className="text-gray-400 text-lg">No items found in this collection</p>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 xl:gap-10">
              {items.map((item) => (
                <ItemCard
                  key={item.id}
                  item={item}
                  onClick={handleItemClick}
                />
              ))}
            </div>

            {/* Pagination */}
            {pagination.totalPages > 1 && (
              <div className="mt-16 flex justify-center">
                <div className="inline-flex items-center gap-2">
                  {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`
                        w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200
                        ${page === pagination.page
                          ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white'
                          : 'bg-black/50 text-gray-400 hover:bg-amber-500/10 hover:text-amber-400 border border-amber-500/20'
                        }
                      `}
                    >
                      {page}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </main>

      <ItemModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedItem(null)
        }}
      />
    </div>
  )
}
