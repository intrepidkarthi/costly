import Link from 'next/link'

interface TrendingCategory {
  name: string
  slug: string
  trend: number
  itemCount: number
}

interface TrendingCategoriesProps {
  categories: TrendingCategory[]
}

export function TrendingCategories({ categories }: TrendingCategoriesProps) {
  return (
    <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
      <h3 className="text-xl font-bold text-white mb-4">Trending Categories</h3>
      <div className="space-y-4">
        {categories.map((category, index) => (
          <div
            key={category.slug}
            className={`transform transition-all duration-300 delay-${index * 100} hover:-translate-x-1`}
          >
            <Link
              href={`/categories/${category.slug}`}
              className="flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-2 h-2 rounded-full bg-amber-500" />
                  <div className="absolute inset-0 animate-ping rounded-full bg-amber-500/50" />
                </div>
                <div>
                  <div className="text-white group-hover:text-amber-400 transition-colors">
                    {category.name}
                  </div>
                  <div className="text-sm text-gray-400">
                    {category.itemCount} items
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-sm ${
                  category.trend > 0 ? 'text-green-400' : 'text-red-400'
                }`}>
                  {category.trend > 0 ? '+' : ''}{category.trend}%
                </span>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-amber-400 transform group-hover:translate-x-1 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
