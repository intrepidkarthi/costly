import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { getItemById, getItems } from '@/lib/items'

interface ItemPageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  const { items } = await getItems()
  return items.map((item) => ({
    id: item.id.toString(),
  }))
}

export default async function ItemPage({ params }: ItemPageProps) {
  let item
  try {
    item = await getItemById(parseInt(params.id))
  } catch (error) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/items"
            className="inline-flex items-center text-gray-400 hover:text-white mb-8"
          >
            <svg
              className="w-5 h-5 mr-2"
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Image */}
            <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-800">
              <Image
                src={item.image_url}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Details */}
            <div>
              <div className="mb-6">
                <Link
                  href={`/categories/${item.category.id}`}
                  className="text-amber-400 hover:text-amber-300"
                >
                  {item.category.name}
                </Link>
                <h1 className="text-4xl font-bold mt-2">{item.name}</h1>
                <div className="text-3xl font-bold text-amber-400 mt-4">
                  ₹{item.price.toLocaleString('en-IN')}
                </div>
              </div>

              <div className="prose prose-invert">
                <h2 className="text-xl font-semibold mb-4">Description</h2>
                <p className="text-gray-300 whitespace-pre-line">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Luxury Category</h3>
                  <p className="text-gray-300">{item.category.name}</p>
                </div>

                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Added</h3>
                  <p className="text-gray-300">
                    {new Date(item.created_at).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
