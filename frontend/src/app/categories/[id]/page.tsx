import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/Navbar'
import { ItemCard } from '@/components/ItemCard'
import { Pagination } from '@/components/Pagination'
import ErrorBoundary from '@/components/ErrorBoundary'
import { getCategories, getItemsByCategory } from '@/lib/items'

interface CategoryPageProps {
  params: {
    id: string
  }
  searchParams: {
    page?: string
  }
}

async function CategoryItems({ categoryId, page }: { categoryId: number; page: number }) {
  const { items, totalPages } = await getItemsByCategory(categoryId, page)

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">No items found in this category</p>
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            imageUrl={item.image_url}
            category={item.category.name}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination currentPage={page} totalPages={totalPages} />
      )}
    </>
  )
}

export async function generateStaticParams() {
  const categories = await getCategories()
  return categories.map((category) => ({
    id: category.id.toString(),
  }))
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const categories = await getCategories()
  const category = categories.find((c) => c.id.toString() === params.id)
  const page = searchParams.page ? parseInt(searchParams.page) : 1

  if (!category) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">{category.name}</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {category.description}
          </p>
        </div>

        <ErrorBoundary>
          <Suspense
            fallback={
              <div className="text-center py-12">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-amber-400 border-r-transparent"></div>
                <p className="mt-4 text-gray-400">Loading items...</p>
              </div>
            }
          >
            <CategoryItems categoryId={category.id} page={page} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </>
  )
}
