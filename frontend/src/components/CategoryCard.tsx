import Link from 'next/link'
import { OptimizedImage } from './OptimizedImage'

interface CategoryCardProps {
  name: string
  description: string
  itemCount: number
  imageUrl: string
  slug: string
  priceRange: string
  featured?: boolean
}

export function CategoryCard({
  name,
  description,
  itemCount,
  imageUrl,
  slug,
  priceRange,
  featured = false,
}: CategoryCardProps) {
  return (
    <div
      className={`group relative rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 ${
        featured ? 'col-span-2 row-span-2' : ''
      }`}
    >
      <Link href={`/categories/${slug}`}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <OptimizedImage
            src={imageUrl}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          
          {/* Content */}
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-amber-500/20 backdrop-blur-sm rounded-full text-amber-300 text-sm font-sans">
                  {itemCount} items
                </span>
                {featured && (
                  <span className="px-3 py-1 bg-amber-500/20 backdrop-blur-sm rounded-full text-amber-300 text-sm font-sans">
                    Featured
                  </span>
                )}
              </div>
              
              <h3 className="text-2xl font-bold text-white font-display">{name}</h3>
              <p className="text-gray-300 line-clamp-2 font-sans leading-relaxed">{description}</p>
              
              <div className="flex items-center justify-between pt-2">
                <span className="text-amber-300 font-sans">{priceRange}</span>
                <span className="inline-flex items-center gap-1 text-white group-hover:translate-x-1 transition-transform font-sans">
                  Explore
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
