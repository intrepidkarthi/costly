'use client'

import { useRouter, useSearchParams } from 'next/navigation'

interface PaginationProps {
  currentPage: number
  totalPages: number
}

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const updatePage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', page.toString())
    router.push(`?${params.toString()}`)
  }

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  const displayPages = pages.filter(
    page =>
      page === 1 ||
      page === totalPages ||
      (page >= currentPage - 1 && page <= currentPage + 1)
  )

  return (
    <div className="flex justify-center items-center space-x-2">
      <button
        onClick={() => updatePage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-800 rounded-md text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700"
      >
        Previous
      </button>

      {displayPages.map((page, index) => {
        const prevPage = displayPages[index - 1]
        const showEllipsis = prevPage && page - prevPage > 1

        return (
          <div key={page} className="flex items-center">
            {showEllipsis && (
              <span className="px-3 py-2 text-gray-400">...</span>
            )}
            <button
              onClick={() => updatePage(page)}
              className={`px-4 py-2 rounded-md ${
                currentPage === page
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              {page}
            </button>
          </div>
        )
      })}

      <button
        onClick={() => updatePage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-800 rounded-md text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-700"
      >
        Next
      </button>
    </div>
  )
}
