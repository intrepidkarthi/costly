'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { getItemById, type Item } from '@/lib/items'

interface ItemPageProps {
  params: {
    id: string
  }
}

export default function ItemPage({ params }: ItemPageProps) {
  const router = useRouter()
  const [item, setItem] = useState<Item | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchItemData()
  }, [params.id])

  async function fetchItemData() {
    try {
      setLoading(true)
      setError(null)

      const itemData = await getItemById(parseInt(params.id))
      
      if (!itemData) {
        router.push('/404')
        return
      }

      setItem(itemData)
    } catch (err) {
      console.error('Error fetching item:', err)
      setError('Failed to load item details. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (!item && !loading) {
    return null // Let Next.js handle the 404
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/items"
            className="inline-flex items-center text-gray-400 hover:text-amber-400 transition-colors duration-200 mb-12 group"
          >
            <svg
              className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Items
          </Link>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="aspect-square bg-gray-900 rounded-2xl animate-pulse" />
              <div className="space-y-8">
                <div>
                  <div className="h-4 w-24 bg-gray-800 rounded mb-4" />
                  <div className="h-8 w-64 bg-gray-800 rounded mb-4" />
                  <div className="h-6 w-32 bg-gray-800 rounded" />
                </div>
                <div className="space-y-4">
                  <div className="h-4 w-full bg-gray-800 rounded" />
                  <div className="h-4 w-full bg-gray-800 rounded" />
                  <div className="h-4 w-2/3 bg-gray-800 rounded" />
                </div>
              </div>
            </div>
          ) : error ? (
            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8 text-center">
              <p className="text-red-400">{error}</p>
              <button
                onClick={() => fetchItemData()}
                className="mt-6 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300"
              >
                Try Again
              </button>
            </div>
          ) : item ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Image */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-900 shadow-2xl shadow-amber-500/5">
                <Image
                  src={item.image_url}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Details */}
              <div className="space-y-8">
                <div>
                  <Link
                    href={`/categories/${item.category.id}`}
                    className="inline-block text-amber-400 hover:text-amber-300 transition-colors duration-200 mb-4"
                  >
                    {item.category.name}
                  </Link>
                  <h1 className="text-4xl md:text-5xl font-bold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                      {item.name}
                    </span>
                  </h1>
                  <div className="text-3xl md:text-4xl font-bold mt-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">
                      ₹{item.price.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="prose prose-invert max-w-none">
                  <h2 className="text-xl font-semibold mb-4">About this Item</h2>
                  <p className="text-gray-400 leading-relaxed whitespace-pre-line">
                    {item.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-black rounded-xl p-6 border border-amber-500/10">
                    <h3 className="font-semibold mb-2 text-gray-300">Category</h3>
                    <p className="text-amber-400">{item.category.name}</p>
                  </div>

                  <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-black rounded-xl p-6 border border-amber-500/10">
                    <h3 className="font-semibold mb-2 text-gray-300">Listed On</h3>
                    <p className="text-amber-400">
                      {new Date(item.created_at).toLocaleDateString('en-IN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    onClick={() => {
                      // Handle purchase or inquiry
                      window.location.href = `mailto:contact@costly.in?subject=Inquiry about ${item.name}&body=I am interested in ${item.name} (₹${item.price.toLocaleString()})`
                    }}
                    className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-lg shadow-amber-500/10"
                  >
                    Inquire About This Item
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
